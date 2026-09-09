'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useI18n } from '@/components/i18n/I18nProvider'
import { Container } from '@/components/primitives/Container'
import { localeInfo, locales, localizedPath } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { locale, t } = useI18n()
  const pathname = usePathname()
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    function close(event: MouseEvent) {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.open = false
      }
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <div className="relative z-[60] border-b border-white/[0.06] bg-slate-950/40">
      <Container className="flex justify-end">
        <details
          className="relative"
          ref={detailsRef}
          onKeyDown={(event) => {
            if (event.key === 'Escape' && detailsRef.current) {
              detailsRef.current.open = false
              detailsRef.current.querySelector('summary')?.focus()
            }
          }}
        >
          <summary
            aria-label={t('Choose a language')}
            className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg px-3 text-sm text-slate-200 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 [&::-webkit-details-marker]:hidden"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="12" cy="12" r="9" />
              <ellipse cx="12" cy="12" rx="4" ry="9" />
              <path d="M3 12h18" />
            </svg>
            <span lang={localeInfo[locale].tag} translate="no">
              {localeInfo[locale].name}
            </span>
            <span aria-hidden="true">⌄</span>
          </summary>
          <nav
            aria-label={t('Languages')}
            className="absolute end-0 top-full mt-1 max-h-[70vh] w-56 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-xl border border-white/15 bg-slate-950 p-2 shadow-xl"
          >
            {locales.map((language) => (
              <a
                aria-current={language === locale ? 'true' : undefined}
                className="flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 py-2 text-base text-slate-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                href={localizedPath(pathname, language)}
                hrefLang={localeInfo[language].tag}
                key={language}
                lang={localeInfo[language].tag}
                onClick={(event) => {
                  // Preserve an in-page destination without storing visitor data.
                  event.currentTarget.href =
                    localizedPath(pathname, language) +
                    window.location.search +
                    window.location.hash
                }}
                translate="no"
              >
                <bdi>{localeInfo[language].name}</bdi>
                {language === locale && <span aria-hidden="true">✓</span>}
              </a>
            ))}
          </nav>
        </details>
      </Container>
    </div>
  )
}
