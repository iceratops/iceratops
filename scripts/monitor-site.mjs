import assert from 'node:assert/strict'

const origin = new URL(process.env.BASE_URL || 'https://iceratops.com')

async function request(path) {
  const url = new URL(path, origin)
  assert.equal(url.origin, origin.origin, 'Canary requests must remain on the target origin')
  const response = await fetch(url, { signal: AbortSignal.timeout(15000), redirect: 'error' })
  assert.equal(response.status, 200, `${url.pathname}: HTTP ${response.status}`)
  return response
}

for (const [path, expected] of [
  ['/', /<title>Iceratops/],
  ['/start-a-project', /name="first-name"/],
  ['/ar/start-a-project', /<html[^>]*dir="rtl"/],
]) {
  const response = await request(path)
  assert.match(response.headers.get('content-type') || '', /text\/html/, `${path}: HTML required`)
  const html = await response.text()
  assert.match(html, expected, `${path}: expected page content missing`)
  if (path === '/start-a-project') {
    assert.match(html, /name="form-name"[^>]*value="contact"/, 'Netlify form contract missing')
    const script = html.match(/<script\b[^>]*src="([^"\s]+\.js(?:\?[^"\s]*)?)"/)
    assert.ok(script, 'Client JavaScript reference missing')
    const asset = await request(script[1].replaceAll('&amp;', '&'))
    assert.match(asset.headers.get('content-type') || '', /javascript/, 'JavaScript asset required')
    assert.ok((await asset.text()).length > 0, 'JavaScript asset is empty')
  }
  console.log(`Healthy: ${path}`)
}
