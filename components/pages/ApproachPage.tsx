import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { approachPage } from '@/content/site'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

export default function ApproachPage({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  return (
    <>
      <PageHero
        description={t(approachPage.description)}
        eyebrow={t('How we work')}
        title={t(approachPage.title)}
      />
      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <ol className="divide-y divide-white/10 border-y border-white/10">
            {approachPage.steps.map((step, index) => (
              <li
                className="reveal grid gap-5 py-8 md:grid-cols-[1fr_2fr] md:gap-10 sm:py-10"
                key={step.name}
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/15 text-sm font-bold text-amber-200"
                  >
                    {index + 1}
                  </span>
                  <h2 className="font-orbitron pt-1 text-xl font-semibold leading-8 text-white">
                    {t(step.name)}
                  </h2>
                </div>
                <div className="min-w-0 max-w-2xl">
                  <p className="text-base leading-7 text-slate-300">{t(step.text)}</p>
                  <div className="mt-5 border-s-2 border-amber-300/40 ps-4">
                    <p className="text-sm font-semibold text-amber-200">{t('What you receive')}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{t(step.outcome)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <ClosingCta locale={locale} />
    </>
  )
}
