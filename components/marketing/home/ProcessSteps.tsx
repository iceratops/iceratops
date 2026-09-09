import { Eyebrow } from '@/components/marketing/Eyebrow'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

const steps = [
  {
    name: 'Understand',
    text: 'We learn the operational need, the people involved, and the outcome that would make the work worthwhile.',
  },
  {
    name: 'Scope',
    text: 'We define a useful first outcome, technical boundaries, a clear scope, and a realistic timeline.',
  },
  {
    name: 'Build',
    text: 'We build and test in small steps, showing working drafts before anything goes live.',
  },
  {
    name: 'Handoff',
    text: 'Your team gets clear documentation, agreed deliverables, and optional ongoing support.',
    accent: true,
  },
]

export function ProcessSteps({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.02] py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="reveal max-w-2xl">
          <Eyebrow>{t('How we work')}</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {t('A clear path from first conversation to handoff.')}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            {t(
              'We start with a clear scope, show working drafts early, and leave your team ready to use and maintain the finished work.',
            )}
          </p>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              className={`reveal relative rounded-2xl border p-6 ${step.accent ? 'border-amber-300/25 bg-amber-300/[0.05]' : 'border-white/10 bg-white/[0.03]'}`}
              key={step.name}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold ${step.accent ? 'border-amber-300/50 bg-amber-300/25 text-amber-100' : 'border-amber-300/40 bg-amber-300/15 text-amber-200'}`}
              >
                {index + 1}
              </div>
              <h3 className="font-orbitron mt-5 text-base font-semibold text-white">
                {t(step.name)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{t(step.text)}</p>
            </li>
          ))}
        </ol>
        <ButtonLink className="mt-8" href="/approach" variant="secondary">
          {t('Explore our approach')}
        </ButtonLink>
      </Container>
    </section>
  )
}
