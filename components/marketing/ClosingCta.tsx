import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta } from '@/content/navigation'
import { site } from '@/content/site'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

type ClosingCtaProps = {
  locale?: Locale
  title?: string
  reassurance?: string
}

export function ClosingCta({
  locale = 'en',
  title = 'Let us talk about what you need to build.',
  reassurance = site.contact.responseCommitment,
}: ClosingCtaProps) {
  const t = getTranslator(locale)
  return (
    <Section className="pb-16 pt-10 sm:pb-24">
      <Container size="narrow">
        <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur sm:p-10">
          <h2 className="font-orbitron break-words text-2xl font-bold leading-snug text-white sm:text-3xl">
            {t(title)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
            {t(reassurance)}
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={primaryCta.href}>{t(primaryCta.label)}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
