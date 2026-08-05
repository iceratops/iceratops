const localDemoHosts = new Set(['localhost', '127.0.0.1', '[::1]'])

export function getWorkingDemoUrl() {
  const configuredUrl = process.env.WORKING_DEMO_URL?.trim()
  if (!configuredUrl) return undefined

  try {
    const url = new URL(configuredUrl)
    const isSecure = url.protocol === 'https:'
    const isLocal = url.protocol === 'http:' && localDemoHosts.has(url.hostname)

    if ((!isSecure && !isLocal) || url.username || url.password) return undefined
    return url.toString()
  } catch {
    return undefined
  }
}
