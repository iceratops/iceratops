import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The contact page was renamed to the conversion-framed Free workflow
    // review route. Keep old inbound links (outreach, prior shares) working.
    return [
      {
        source: '/contact',
        destination: '/free-workflow-review',
        permanent: true,
      },
      {
        source: '/contact/success',
        destination: '/free-workflow-review/success',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
