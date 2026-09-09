import Image from 'next/image'
import Link from '@/components/i18n/LocalizedLink'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { primaryCta } from '@/content/navigation'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

export function Hero({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <Container className="relative grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10">
        <div className="reveal max-w-xl">
          <Image
            alt=""
            aria-hidden="true"
            className="mb-5 h-10 w-auto"
            height={98}
            src="/iceratops_mark.svg"
            width={156}
          />
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200">
            {t('Founder-led · Available worldwide')}
          </p>
          <h1 className="font-orbitron mt-6 text-[2rem]/[1.18] font-bold text-white sm:text-[2.6rem]/[1.14] lg:text-[3.1rem]/[1.12]">
            {t('Build better')} <span className="gradient-text">{t('digital systems.')}</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {t(
              'We build software, digital products, websites, and connected systems for organizations worldwide.',
            )}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
              {t(primaryCta.label)}
            </ButtonLink>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/50 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              href="/services"
            >
              {t('Explore capabilities')}
            </Link>
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-400">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300"
            />
            {t('Direct founder access · documented systems · reply within one business day.')}
          </p>
        </div>

        <HeroVisual locale={locale} />
      </Container>
    </section>
  )
}

function HeroVisual({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  return (
    <div
      aria-hidden="true"
      className="reveal relative mx-auto hidden w-full max-w-md pb-10 md:me-0 md:block"
      style={{ transitionDelay: '140ms' }}
    >
      <div className="hero-flow-site overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/40 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ms-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-400">
            {t('Your digital platform')}
          </span>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-white/20" />
            <div className="flex gap-2">
              <div className="h-2 w-9 rounded bg-white/10" />
              <div className="h-2 w-9 rounded bg-white/10" />
              <div className="h-2 w-9 rounded bg-white/10" />
            </div>
          </div>
          <div className="space-y-2.5 pt-1">
            <div className="h-4 w-4/5 rounded bg-white/25" />
            <div className="h-4 w-3/5 rounded bg-white/15" />
          </div>
          <div className="hero-flow-source h-9 w-36 rounded-lg bg-amber-400" />
        </div>
      </div>

      <svg
        aria-hidden="true"
        className="hero-flow-connector pointer-events-none absolute left-[9.75rem] top-[7.25rem] z-10 hidden h-16 w-20 overflow-visible text-amber-300 lg:block"
        fill="none"
        viewBox="0 0 80 64"
      >
        <path
          className="hero-flow-path"
          d="M4 56C38 56 42 8 76 8"
          pathLength="100"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          className="hero-flow-signal"
          d="M4 56C38 56 42 8 76 8"
          pathLength="100"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>

      <div className="hero-flow-inbox absolute -bottom-2 -right-3 z-20 w-64 rounded-xl border border-white/10 bg-slate-950/90 p-4 shadow-xl shadow-slate-950/50 backdrop-blur sm:-right-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-white">{t('Connected systems')}</p>
          <span className="rounded-full bg-amber-300/15 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
            {t('In sync')}
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="hero-flow-step hero-flow-step-one flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-amber-300/[0.12] text-amber-300">
              <svg
                aria-hidden="true"
                fill="none"
                height="13"
                stroke="currentColor"
                strokeWidth={1.9}
                viewBox="0 0 24 24"
                width="13"
              >
                <rect height="18" rx="2" width="14" x="5" y="3" />
                <path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" />
              </svg>
            </span>
            <p className="min-w-0 flex-1 text-[11px] font-medium text-white">
              {t('Application · team workspace')}
            </p>
            <span className="flex-none rounded-full bg-amber-400/90 px-1.5 py-0.5 text-[9px] font-bold text-slate-950">
              {t('Ready')}
            </span>
          </div>
          <div className="hero-flow-step hero-flow-step-two flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-amber-300/[0.12] text-amber-300">
              <svg
                aria-hidden="true"
                fill="none"
                height="13"
                stroke="currentColor"
                strokeWidth={1.9}
                viewBox="0 0 24 24"
                width="13"
              >
                <path
                  d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="min-w-0 flex-1 text-[11px] font-medium text-white">
              {t('APIs · connected tools')}
            </p>
            <span className="flex-none rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300">
              {t('Linked')}
            </span>
          </div>
          <div className="hero-flow-step hero-flow-step-three flex items-center gap-2.5 rounded-lg border border-amber-300/20 bg-amber-300/[0.06] px-2.5 py-2">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-amber-300/15 text-amber-300">
              <svg
                aria-hidden="true"
                fill="none"
                height="13"
                stroke="currentColor"
                strokeWidth={1.9}
                viewBox="0 0 24 24"
                width="13"
              >
                <rect height="16" rx="2" width="18" x="3" y="4" />
                <path d="M3 10h18M3 15h18M9 4v16" strokeLinecap="round" />
              </svg>
            </span>
            <p className="min-w-0 flex-1 text-[11px] font-medium text-white">
              {t('Data · shared records')}
            </p>
            <span className="flex-none rounded-full bg-amber-300/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-200">
              {t('Synced')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
