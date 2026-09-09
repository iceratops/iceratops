import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

export function FounderLed({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="reveal max-w-2xl border-s-2 border-amber-300/40 ps-6 sm:ps-8">
          <Eyebrow>{t('Why Iceratops')}</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {t('Founder-led, without the agency runaround.')}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            {t(
              'You work directly with the person shaping the requirements and building the system. That direct connection works for focused website projects and larger technical engagements alike. Decisions stay clear, working drafts arrive early, and the finished system comes with documentation your team can use.',
            )}
          </p>
        </div>
      </Container>
    </section>
  )
}
