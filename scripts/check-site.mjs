#!/usr/bin/env node

import { readdir, readFile } from 'node:fs/promises'

/**
 * Read-only production-surface check.
 *
 * Run against a built local server (default http://127.0.0.1:3000) or set
 * BASE_URL to a deploy preview/production URL. It checks route inventory,
 * internal links, retired URLs, metadata, form contracts, and security headers.
 */

const baseUrl = new URL(process.env.BASE_URL ?? 'http://127.0.0.1:3000')
const canonicalOrigin = 'https://iceratops.com'
const baseRoutes = ['/', '/services', '/approach', '/about', '/start-a-project', '/privacy']
const locales = ['en', 'ar', 'ur', 'hi', 'es', 'fr', 'pt', 'zh-Hans', 'zh-Hant']
const languageTags = ['en', 'ar-SA', 'ur', 'hi', 'es', 'fr', 'pt-BR', 'zh-Hans', 'zh-Hant']
const localPath = (path, locale) =>
  locale === 'en' ? path : `/${locale}${path === '/' ? '' : path}`
const expectedPublicRoutes = locales.flatMap((locale) =>
  baseRoutes.map((path) => localPath(path, locale)),
)
const expectedAppPageRoutes = [
  ...baseRoutes,
  '/start-a-project/success',
  ...[...baseRoutes, '/start-a-project/success'].map(
    (path) => `/[locale]${path === '/' ? '' : path}`,
  ),
]
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
    const language = locales.includes(path.split('/')[1]) ? path.split('/')[1] : 'en'
    const title = findTitle(page.html)
    const description = findMeta(page.html, 'description')
    const canonical = findCanonical(page.html)
    const expectedCanonical = new URL(path, canonicalOrigin).toString()
    if (!/<h1\b/i.test(page.html)) recordFailure(`${path} has no server-rendered h1`)
    if (!title) recordFailure(`${path} has no title`)
    if (!description) recordFailure(`${path} has no meta description`)
    if (title && titles.has(`${language}:${title}`)) recordFailure(`${path} repeats title ${title}`)
    if (description && descriptions.has(`${language}:${description}`)) {
      recordFailure(`${path} repeats its meta description`)
    }
    if (!canonical || normalizeUrl(canonical) !== normalizeUrl(expectedCanonical)) {
      recordFailure(`${path} canonical is ${canonical ?? 'missing'}, expected ${expectedCanonical}`)
    }
    if (title) titles.add(`${language}:${title}`)
    if (description) descriptions.add(`${language}:${description}`)
  }
}

async function checkInternalLinks() {
  const sources = [
    ...expectedPublicRoutes,
    ...locales.map((locale) => localPath('/start-a-project/success', locale)),
  ]
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
  const demoRoutes = locales.flatMap((locale) =>
    ['/', '/services'].map((path) => localPath(path, locale)),
  )
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
  const success = await loadPage('/start-a-project/success')
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

  const review = await loadPage('/start-a-project')
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
    'preferred-language',
    'region',
    'region-code',
    'website',
    'website-language',
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
      findAttribute(tag, 'href') === '/start-a-project' &&
      findAttribute(tag, 'class')?.includes('lg:hidden'),
  )
  if (!mobileCta) recordFailure('home lacks a visible mobile project CTA')
  const conversionLinks = headerLinks.filter(
    (tag) => findAttribute(tag, 'href') === '/start-a-project',
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

function decodeText(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(Number.parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
}
function textContent(html) {
  return decodeText(
    html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim()
}
async function checkLocalizedPages() {
  const english = JSON.parse(await readFile('content/locales/en.json', 'utf8'))
  for (const [index, locale] of locales.entries()) {
    const messages = JSON.parse(await readFile(`content/locales/${locale}.json`, 'utf8'))
    for (const route of [...baseRoutes, '/start-a-project/success']) {
      const path = localPath(route, locale)
      const page = await loadPage(path)
      const htmlTag = page.html.match(/<html\b[^>]*>/i)?.[0] ?? ''
      if (findAttribute(htmlTag, 'lang') !== languageTags[index])
        recordFailure(`${path} has the wrong document language`)
      if (findAttribute(htmlTag, 'dir') !== (['ar', 'ur'].includes(locale) ? 'rtl' : 'ltr'))
        recordFailure(`${path} has the wrong reading direction`)
      const links = page.html.match(/<a\b[^>]*>/gi) ?? []
      const languageLinks = links.filter((tag) => findAttribute(tag, 'hrefLang'))
      if (languageLinks.length !== locales.length)
        recordFailure(`${path} has incomplete language navigation`)
      for (const tag of links) {
        const href = findAttribute(tag, 'href')
        if (
          href?.startsWith('/') &&
          !href.startsWith('//') &&
          !findAttribute(tag, 'hrefLang') &&
          locale !== 'en' &&
          href !== `/${locale}` &&
          !href.startsWith(`/${locale}/`) &&
          !href.startsWith(`/${locale}#`)
        )
          recordFailure(`${path} has an unlocalized internal link: ${href}`)
      }
      const header = page.html.match(/<header\b[^>]*>[\s\S]*?<\/header>/i)?.[0] ?? ''
      const navLinks = Array.from(header.matchAll(/(<a\b[^>]*>)([\s\S]*?)<\/a>/gi))
      for (const [destination, label] of [
        ['/services', 'Services'],
        ['/approach', 'Approach'],
        ['/about', 'About'],
      ]) {
        const matches = navLinks.filter(
          (match) => findAttribute(match[1], 'href') === localPath(destination, locale),
        )
        if (!matches.length || matches.some((match) => textContent(match[2]) !== messages[label]))
          recordFailure(`${path} has inconsistent ${label} navigation`)
        const current = matches.some((match) => findAttribute(match[1], 'aria-current') === 'page')
        if (current !== (route === destination))
          recordFailure(`${path} has the wrong active navigation item for ${label}`)
      }
      if (links.some((tag) => findAttribute(tag, 'href')?.includes('#process')))
        recordFailure(`${path} still links to the removed process anchor`)
      if (route.endsWith('/success')) {
        if (!findMeta(page.html, 'robots')?.includes('noindex') || findCanonical(page.html))
          recordFailure(`${path} must be noindex without a canonical`)
      } else {
        const alternates = (page.html.match(/<link\b[^>]*>/gi) ?? []).filter((tag) =>
          findAttribute(tag, 'hrefLang'),
        )
        if (alternates.length !== locales.length + 1)
          recordFailure(`${path} has incomplete hreflang metadata`)
      }
      if (locale !== 'en') {
        const visibleText = textContent(page.html)
        for (const key of Object.keys(english)) {
          if (
            key.length > 18 &&
            key.split(' ').length >= 3 &&
            messages[key] !== key &&
            visibleText.includes(key)
          )
            recordFailure(`${path} retains English copy: ${key}`)
        }
      }
      if (route === '/start-a-project') {
        const form = findNamedForm(page.html, 'contact')
        const enForm = findNamedForm((await loadPage('/start-a-project')).html, 'contact')
        if (
          !form ||
          JSON.stringify(formFieldNames(form.body)) !== JSON.stringify(formFieldNames(enForm.body))
        )
          recordFailure(`${path} changes the form field contract`)
        const inputs = form?.body.match(/<input\b[^>]*>/gi) ?? []
        const language = inputs.find((tag) => findAttribute(tag, 'name') === 'website-language')
        if (!language || findAttribute(language, 'value') !== languageTags[index])
          recordFailure(`${path} omits the inquiry language`)
      }
    }
    for (const oldRoute of [
      '/contact',
      '/contact/success',
      '/free-workflow-review',
      '/free-workflow-review/success',
    ]) {
      const removed = await request(localPath(oldRoute, locale), { redirect: 'manual' })
      if (
        removed.response.status !== 404 ||
        removed.response.headers.has('location') ||
        !findMeta(removed.html, 'robots')?.includes('noindex')
      )
        recordFailure(`${locale}${oldRoute} must be removed without a redirect`)
    }
    const missing = await request(localPath('/missing-page-for-validation', locale))
    if (
      missing.response.status !== 404 ||
      !findMeta(missing.html, 'robots')?.includes('noindex') ||
      findCanonical(missing.html)
    )
      recordFailure(`${locale} missing-page status or indexing is wrong`)
    if (!textContent(missing.html).includes(messages['This page is not here.']))
      recordFailure(`${locale} missing-page copy is not translated`)
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
  await checkLocalizedPages()
} catch (error) {
  recordFailure(error instanceof Error ? error.message : String(error))
}

if (failures.length > 0) {
  console.error(`site check: failed (${failures.length} issue${failures.length === 1 ? '' : 's'})`)
  process.exit(1)
}

console.log(
  `site check: passed (${expectedPublicRoutes.length} public routes, app-page inventory, retired URLs, navigation, links, metadata, form contracts, mobile fallbacks, and headers)`,
)
