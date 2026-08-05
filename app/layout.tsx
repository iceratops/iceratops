import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import { siteConfig } from '@/lib/seo'
import './globals.css'

// Self-hosted via next/font: no render-blocking Google Fonts request and no
// layout shift from late-swapping webfonts.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
}
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning: the inline head script intentionally adds a
    // `js` class to <html> before hydration (reveal-animation safety).
    <html
      className={`${inter.variable} ${orbitron.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/*
         * Reveal-animation safety. JavaScript adds only a small vertical offset,
         * never an invisible state. If the app bundle fails, the timeout removes
         * that offset; RevealOnScroll cancels the fallback once it mounts.
         */}
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static, inline, no user input.
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');window.setTimeout(function(){if(!window.__revealReady){document.documentElement.classList.add('reveal-off')}},3000);",
          }}
        />
      </head>
      <body>
        <OrganizationJsonLd />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
