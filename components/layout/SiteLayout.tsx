import type { ReactNode } from 'react'
import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher'
import { AmbientBackground } from '@/components/marketing/AmbientBackground'
import { RevealOnScroll } from '@/components/marketing/RevealOnScroll'
import { Footer } from '@/components/nav/Footer'
import { Header } from '@/components/nav/Header'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

type SiteLayoutProps = {
  children: ReactNode
  locale: Locale
}

export function SiteLayout({ children, locale }: SiteLayoutProps) {
  const t = getTranslator(locale)
  return (
    <div className="flex min-h-screen flex-col">
      <AmbientBackground />
      <a
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-transform focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        href="#main-content"
      >
        {t('Skip to content')}
      </a>
      <LanguageSwitcher />
      <Header />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer locale={locale} />
      <RevealOnScroll />
    </div>
  )
}
