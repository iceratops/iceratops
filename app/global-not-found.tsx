import type { Metadata } from 'next'
import Image from 'next/image'
import { documentFonts } from '@/components/layout/RootDocument'
import { localeInfo, locales, localizedPath } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '404 | Iceratops',
  robots: { index: false, follow: false },
}

// Routing-level fallback: a complete, static document independent of any
// language layout. Native-language home links work without JavaScript.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={documentFonts}>
      <body className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
        <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
          <Image
            className="mx-auto h-auto w-44"
            src="/iceratops_text_logo.svg"
            alt="Iceratops"
            width={350}
            height={144}
          />
          <h1 className="font-orbitron my-8 text-center text-5xl font-bold text-amber-300">404</h1>
          <div className="grid gap-4 md:grid-cols-3">
            {locales.map((locale) => {
              const t = getTranslator(locale)
              const info = localeInfo[locale]
              return (
                <section
                  key={locale}
                  lang={info.tag}
                  dir={info.dir}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  style={{
                    fontFamily: ['ar', 'ur'].includes(locale)
                      ? 'var(--font-arabic), sans-serif'
                      : locale === 'hi'
                        ? 'var(--font-devanagari), sans-serif'
                        : undefined,
                  }}
                >
                  <h2 className="text-sm font-semibold text-amber-200" translate="no">
                    {info.name}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    {t('This page is not here.')}
                  </p>
                  <a
                    href={localizedPath('/', locale)}
                    hrefLang={info.tag}
                    className="mt-3 inline-flex min-h-11 items-center rounded-lg px-2 font-semibold text-amber-200 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                  >
                    {t('Back to home')}
                  </a>
                </section>
              )
            })}
          </div>
        </main>
      </body>
    </html>
  )
}
