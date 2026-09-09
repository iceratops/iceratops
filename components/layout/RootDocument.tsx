import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Arabic, Noto_Sans_Devanagari, Orbitron } from 'next/font/google'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import { siteConfig } from '@/lib/seo'
import '@/app/globals.css'
import { I18nProvider } from '@/components/i18n/I18nProvider'
import { type Locale, localeInfo } from '@/lib/i18n'
import { getMessages } from '@/lib/translations'

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

const arabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
  preload: false,
})
const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  variable: '--font-devanagari',
  preload: false,
})

export const documentFonts = `${inter.variable} ${orbitron.variable} ${arabic.variable} ${devanagari.variable}`

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

export default function RootDocument({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode
  locale: Locale
}>) {
  return (
    // suppressHydrationWarning: the inline head script intentionally adds a
    // `js` class to <html> before hydration (reveal-animation safety).
    <html
      className={documentFonts}
      data-scroll-behavior="smooth"
      lang={localeInfo[locale].tag}
      dir={localeInfo[locale].dir}
      suppressHydrationWarning
    >
      {/* biome-ignore lint/style/noHeadElement: This component renders the App Router root document. */}
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
        <OrganizationJsonLd locale={locale} />
        <I18nProvider locale={locale} messages={getMessages(locale)}>
          <SiteLayout locale={locale}>{children}</SiteLayout>
        </I18nProvider>
      </body>
    </html>
  )
}
