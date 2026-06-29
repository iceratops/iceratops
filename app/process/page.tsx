import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { Card } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { processSteps } from '@/content/process'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Process',
  description:
    'How Iceratops works, from a free workflow review to a documented system you own. Four clear steps: Review, Plan, Build, Handoff.',
  path: '/process',
})

export default function ProcessPage() {
  return (
    <>
      <PageHero
        description="A simple, four-step path. We start with a free workflow review, agree on a clear plan, build in small steps you can see, and hand you a documented system you own."
        eyebrow="Process"
        secondaryAction={{ href: '/services', label: 'View services' }}
        title="How we work, from review to handoff."
      />

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.step}>
                <Card className="flex h-full flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300 bg-amber-300 text-sm font-bold text-slate-950">
                    {step.step}
                  </div>
                  <p className="font-orbitron mt-5 text-lg font-semibold text-white">{step.name}</p>
                  <p className="mt-2 text-sm font-medium text-amber-100">{step.summary}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.detail}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <ClosingCta />
    </>
  )
}
