import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'
import { buildMetadata } from '@/lib/seo'
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

export const metadata: Metadata = buildMetadata()

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
         * Reveal-animation safety. The hidden starting state of `.reveal` only
         * applies under `html.js`, so content is visible by default with JS
         * disabled. If JS is enabled but the app bundle never runs (blocked or
         * failed chunk), the timeout flips on `reveal-off` and shows everything.
         * RevealOnScroll sets `__revealReady` once it mounts.
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
        <LocalBusinessJsonLd />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
