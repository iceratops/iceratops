import type { Metadata } from 'next'
import { SiteShell } from '@/components/layout/SiteShell'
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
      <body>
        <LocalBusinessJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
