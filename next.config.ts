import type { NextConfig } from 'next'

const scriptSource =
  process.env.NODE_ENV === 'development'
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'"

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self'; base-uri 'self'; connect-src 'self'; font-src 'self'; form-action 'self'; frame-ancestors 'none'; frame-src 'self' https://app.netlify.com; img-src 'self' data: blob:; object-src 'none'; ${scriptSource}; style-src 'self' 'unsafe-inline'; upgrade-insecure-requests`,
  },
] as const

const nextConfig: NextConfig = {
  // The global 404 supplies its own document because languages use separate root layouts.
  experimental: { globalNotFound: true },
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [...securityHeaders],
      },
      {
        source: '/site.webmanifest',
        headers: [{ key: 'Content-Type', value: 'application/manifest+json; charset=utf-8' }],
      },
    ]
  },
}

export default nextConfig
