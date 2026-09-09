#!/usr/bin/env node

import { readdir, readFile } from 'node:fs/promises'

/**
 * Read-only production-surface check.
 *
 * Run against a built local server (default http://127.0.0.1:3000) or set
 * BASE_URL to a deploy preview/production URL. It checks route inventory,
 * internal links, redirects, metadata, form contracts, and security headers.
 */

const baseUrl = new URL(process.env.BASE_URL ?? 'http://127.0.0.1:3000')
const canonicalOrigin = 'https://iceratops.com'
const expectedPublicRoutes = ['/', '/services', '/about', '/free-workflow-review', '/privacy']
const expectedAppPageRoutes = [...expectedPublicRoutes, '/free-workflow-review/success']
const failures = []
const pages = new Map()

function recordFailure(message) {
  failures.push(message)
  console.error(`FAIL ${message}`)
}

function pathFromUrl(value) {
  const url = new URL(value, baseUrl)
  return `${url.pathname}${url.search}`
}

function normalizeUrl(value) {
  const url = new URL(value)
  return `${url.origin}${url.pathname === '/' ? '' : url.pathname.replace(/\/$/, '')}${url.search}`
}

function findAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']+)["']`, 'i'))
  return match?.[1]
}

function hasAttribute(tag, name) {
  return new RegExp(`\\s${name}(?:\\s|=|>)`, 'i').test(tag)
}

function findNamedForm(html, name) {
  const matches = html.matchAll(/(<form\b[^>]*>)([\s\S]*?)<\/form>/gi)
  for (const match of matches) {
    if (findAttribute(match[1], 'name') === name) {
      return { tag: match[1], body: match[2] }
    }
  }
}

function formFieldNames(body) {
  return Array.from(body.matchAll(/<(?:input|textarea|select)\b[^>]*>/gi), (match) =>
    findAttribute(match[0], 'name'),
  )
    .filter(Boolean)
    .sort()
}

async function discoverAppPageRoutes(directory = 'app', segments = []) {
  const routes = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isFile() && /^page\.[jt]sx?$/.test(entry.name)) {
      routes.push(segments.length === 0 ? '/' : `/${segments.join('/')}`)
      continue
    }
    if (!entry.isDirectory() || entry.name.startsWith('_')) continue
    const isPathless = entry.name.startsWith('(') || entry.name.startsWith('@')
    routes.push(
      ...(await discoverAppPageRoutes(
        `${directory}/${entry.name}`,
        isPathless ? segments : [...segments, entry.name],
      )),
    )
  }
  return routes
}

function findMeta(html, name) {
  const tag = html
    .match(/<meta\b[^>]*>/gi)
    ?.find((item) => findAttribute(item, 'name')?.toLowerCase() === name.toLowerCase())
  return tag ? findAttribute(tag, 'content') : undefined
}

function findCanonical(html) {
  const tag = html
    .match(/<link\b[^>]*>/gi)
    ?.find((item) => findAttribute(item, 'rel')?.toLowerCase() === 'canonical')
  return tag ? findAttribute(tag, 'href') : undefined
}

function findTitle(html) {
  return html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim()
}

async function request(path, options = {}) {
  const response = await fetch(new URL(path, baseUrl), options)
  const html = options.method === 'HEAD' ? '' : await response.text()
  return { response, html }
}

async function loadPage(path) {
  if (!pages.has(path)) {
    pages.set(path, await request(path))
  }
  return pages.get(path)
}

async function checkPublicRoutes() {
  const sourceRoutes = (await discoverAppPageRoutes()).sort()
  const expectedSourceRoutes = [...expectedAppPageRoutes].sort()
  if (JSON.stringify(sourceRoutes) !== JSON.stringify(expectedSourceRoutes)) {
    recordFailure(
      `app page routes differ: expected ${expectedSourceRoutes.join(', ')}, got ${sourceRoutes.join(', ')}`,
    )
  }

  const { response, html } = await request('/sitemap.xml')
  if (!response.ok) {
    recordFailure(`/sitemap.xml returned ${response.status}`)
    return
  }

  const sitemapRoutes = Array.from(html.matchAll(/<loc>([^<]+)<\/loc>/g), (match) =>
    pathFromUrl(match[1]),
  )
  const expected = [...expectedPublicRoutes].sort()
  const actual = [...sitemapRoutes].sort()
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    recordFailure(
      `sitemap routes differ: expected ${expected.join(', ')}, got ${actual.join(', ')}`,
    )
  }

  const titles = new Set()
  const descriptions = new Set()
  for (const path of expectedPublicRoutes) {
    const page = await loadPage(path)
    if (!page.response.ok) {
      recordFailure(`${path} returned ${page.response.status}`)
      continue
    }
    const title = findTitle(page.html)
    const description = findMeta(page.html, 'description')
    const canonical = findCanonical(page.html)
    const expectedCanonical = new URL(path, canonicalOrigin).toString()
    if (!/<h1\b/i.test(page.html)) recordFailure(`${path} has no server-rendered h1`)
    if (!title) recordFailure(`${path} has no title`)
    if (!description) recordFailure(`${path} has no meta description`)
    if (title && titles.has(title)) recordFailure(`${path} repeats title ${title}`)
    if (description && descriptions.has(description)) {
      recordFailure(`${path} repeats its meta description`)
    }
    if (!canonical || normalizeUrl(canonical) !== normalizeUrl(expectedCanonical)) {
      recordFailure(`${path} canonical is ${canonical ?? 'missing'}, expected ${expectedCanonical}`)
    }
    if (title) titles.add(title)
    if (description) descriptions.add(description)
  }
}

async function checkInternalLinks() {
  const sources = [...expectedPublicRoutes, '/free-workflow-review/success']
  for (const source of sources) {
    const page = await loadPage(source)
    const hrefs = Array.from(page.html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi), (match) =>
      match[1].replaceAll('&amp;', '&'),
    )
    for (const href of new Set(hrefs)) {
      if (href.startsWith('mailto:') || href.startsWith('tel:')) continue
      const target = new URL(href, new URL(source, baseUrl))
      if (target.origin !== baseUrl.origin) continue
      const targetPath = `${target.pathname}${target.search}`
      const targetPage = await loadPage(targetPath)
      if (!targetPage.response.ok) {
        recordFailure(`${source} links to ${href}, which returned ${targetPage.response.status}`)
        continue
      }
      if (target.hash) {
        const id = target.hash.slice(1)
        const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        if (!new RegExp(`id=["']${escapedId}["']`).test(targetPage.html)) {
          recordFailure(`${source} links to missing anchor ${href}`)
        }
      }
    }
  }
}

async function checkWorkingDemoLinks() {
  const demoRoutes = ['/', '/services']
  const configuredUrl = process.env.WORKING_DEMO_URL?.trim()
  let expectedUrl

  if (configuredUrl) {
    try {
      const url = new URL(configuredUrl)
      const isSecure = url.protocol === 'https:'
      const isLocal =
        url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)
      if ((!isSecure && !isLocal) || url.username || url.password) {
        recordFailure(`WORKING_DEMO_URL is not a safe absolute URL: ${configuredUrl}`)
        return
      }
      expectedUrl = url.toString()
    } catch {
      recordFailure(`WORKING_DEMO_URL is not an absolute URL: ${configuredUrl}`)
      return
    }
  }

  for (const path of demoRoutes) {
    const page = await loadPage(path)
    const links = (page.html.match(/<a\b[^>]*>/gi) ?? []).filter((tag) =>
      hasAttribute(tag, 'data-working-demo-cta'),
    )

    const expectedCount = expectedUrl ? 1 : 0
    if (links.length !== expectedCount) {
      recordFailure(
        `${path} renders ${links.length} working-demo links, expected ${expectedCount} for this validation mode`,
      )
      continue
    }

    if (expectedUrl) {
      const href = findAttribute(links[0], 'href')?.replaceAll('&amp;', '&')
      if (href !== expectedUrl) {
        recordFailure(`${path} working-demo link is ${href ?? 'missing'}, expected ${expectedUrl}`)
      }
    }
  }
}

async function checkUtilityRoutes() {
  for (const [source, destination] of [
    ['/contact', '/free-workflow-review'],
    ['/contact/success', '/free-workflow-review/success'],
  ]) {
    const { response } = await request(source, { redirect: 'manual' })
    const location = response.headers.get('location')
    if (![301, 308].includes(response.status) || pathFromUrl(location ?? '/') !== destination) {
      recordFailure(`${source} did not permanently redirect to ${destination}`)
    }
  }

  const success = await loadPage('/free-workflow-review/success')
  if (!success.response.ok) recordFailure(`success route returned ${success.response.status}`)
  if (!findMeta(success.html, 'robots')?.includes('noindex')) {
    recordFailure('success route is not noindex')
  }
  if (findCanonical(success.html)) recordFailure('success route has a canonical URL')

  const missing = await request('/route-that-does-not-exist')
  if (missing.response.status !== 404)
    recordFailure(`missing route returned ${missing.response.status}`)
  if (!findMeta(missing.html, 'robots')?.includes('noindex')) recordFailure('404 is not noindex')
  if (findCanonical(missing.html)) recordFailure('404 has a canonical URL')

  const review = await loadPage('/free-workflow-review')
  const detector = await request('/__forms.html')
  const detectorSource = await readFile('public/__forms.html', 'utf8')
  const expectedFields = [
    'bot-field',
    'business',
    'email',
    'first-name',
    'form-name',
    'last-name',
    'message',
    'name',
    'region',
    'website',
  ]
  for (const [label, html, expectedAction, isDetectorSource] of [
    ['project inquiry form', review.html, '/__forms.html', false],
    ['served Netlify detector form', detector.html, undefined, false],
    ['source Netlify detector form', detectorSource, undefined, true],
  ]) {
    const form = findNamedForm(html, 'contact')
    if (!form) {
      recordFailure(`${label} lacks the contact form`)
      continue
    }
    if (findAttribute(form.tag, 'method')?.toLowerCase() !== 'post') {
      recordFailure(`${label} does not use POST`)
    }
    if (findAttribute(form.tag, 'action') !== expectedAction) {
      recordFailure(`${label} has the wrong action`)
    }
    if (JSON.stringify(formFieldNames(form.body)) !== JSON.stringify(expectedFields)) {
      recordFailure(`${label} fields differ from the Netlify contract`)
    }
    const hiddenName = form.body
      .match(/<input\b[^>]*>/gi)
      ?.find((tag) => findAttribute(tag, 'name') === 'form-name')
    if (
      !hiddenName ||
      findAttribute(hiddenName, 'type') !== 'hidden' ||
      findAttribute(hiddenName, 'value') !== 'contact'
    ) {
      recordFailure(`${label} has the wrong hidden form-name value`)
    }
    if (isDetectorSource) {
      if (findAttribute(form.tag, 'data-netlify') !== 'true') {
        recordFailure('source Netlify detector form lacks data-netlify=true')
      }
      if (findAttribute(form.tag, 'netlify-honeypot') !== 'bot-field') {
        recordFailure('source Netlify detector form has the wrong honeypot contract')
      }
      if (!hasAttribute(form.tag, 'hidden')) {
        recordFailure('source Netlify detector form is not hidden')
      }
    }
  }
  if (!review.html.includes('JavaScript is required to submit this form online')) {
    recordFailure('project inquiry form lacks its no-JavaScript email fallback')
  }
  if (!/<button\b[^>]*\bdisabled(?:="")?[^>]*\btype="submit"/.test(review.html)) {
    recordFailure('project inquiry form submit control is enabled before hydration')
  }

  const home = await loadPage('/')
  const header = home.html.match(/<header\b[^>]*>[\s\S]*?<\/header>/i)?.[0]
  if (!header) {
    recordFailure('home lacks its server-rendered header')
    return
  }
  if (!home.html.includes('aria-label="Navigation without JavaScript"')) {
    recordFailure('home lacks no-JavaScript mobile navigation')
  }
  const headerLinks = header.match(/<a\b[^>]*>/gi) ?? []
  const mobileCta = headerLinks.find(
    (tag) =>
      findAttribute(tag, 'href') === '/free-workflow-review' &&
      findAttribute(tag, 'class')?.includes('lg:hidden'),
  )
  if (!mobileCta) recordFailure('home lacks a visible mobile project CTA')
  const conversionLinks = headerLinks.filter(
    (tag) => findAttribute(tag, 'href') === '/free-workflow-review',
  )
  if (conversionLinks.length !== 2) {
    recordFailure(`home header renders ${conversionLinks.length} project CTAs, expected 2`)
  }
  const menuToggle = header
    .match(/<button\b[^>]*>/gi)
    ?.find((tag) => findAttribute(tag, 'aria-label') === 'Open menu')
  if (!menuToggle || !hasAttribute(menuToggle, 'disabled')) {
    recordFailure('mobile menu toggle is interactive before hydration')
  }
}

async function checkHeaders() {
  const { response } = await request('/', { method: 'HEAD' })
  const required = [
    'content-security-policy',
    'cross-origin-opener-policy',
    'permissions-policy',
    'referrer-policy',
    'strict-transport-security',
    'x-content-type-options',
    'x-frame-options',
  ]
  for (const header of required) {
    if (!response.headers.get(header)) recordFailure(`home response lacks ${header}`)
  }
  if (response.headers.get('x-powered-by')) recordFailure('home response exposes X-Powered-By')

  const manifest = await request('/site.webmanifest', { method: 'HEAD' })
  if (!manifest.response.headers.get('content-type')?.includes('application/manifest+json')) {
    recordFailure('web manifest has the wrong Content-Type')
  }
}

try {
  await checkPublicRoutes()
  await checkInternalLinks()
  await checkWorkingDemoLinks()
  await checkUtilityRoutes()
  await checkHeaders()
} catch (error) {
  recordFailure(error instanceof Error ? error.message : String(error))
}

if (failures.length > 0) {
  console.error(`site check: failed (${failures.length} issue${failures.length === 1 ? '' : 's'})`)
  process.exit(1)
}

console.log(
  `site check: passed (${expectedPublicRoutes.length} public routes, app-page inventory, redirects, links, metadata, form contracts, mobile fallbacks, and headers)`,
)
