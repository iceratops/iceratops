import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { primaryCta } from '@/content/navigation'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

export function FinalCta({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  return (
    <section className="pb-16 pt-14 sm:pb-24 sm:pt-16">
      <Container size="narrow">
        <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            {t('Ready when you are')}
          </p>
          <h2 className="font-orbitron mx-auto mt-4 max-w-2xl text-2xl font-bold leading-snug text-white sm:text-3xl">
            {t('Let us talk about what you need to build.')}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            {t(
              'Share the product, website, workflow, or system you want to improve. We’ll reply within one business day with a clear, no-pressure next step.',
            )}
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
              {t(primaryCta.label)}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
