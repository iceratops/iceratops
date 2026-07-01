import type { Metadata } from 'next'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'
import { buildMetadata } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = buildMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <noscript>
          {/* Keep reveal-animated content visible when JavaScript is disabled. */}
          <style>{'.reveal{opacity:1 !important;transform:none !important}'}</style>
        </noscript>
      </head>
      <body>
        <LocalBusinessJsonLd />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
