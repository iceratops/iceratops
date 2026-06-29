import { CheckList } from '@/components/marketing/CheckList'
import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { SectionHeading } from '@/components/marketing/SectionHeading'
import { Card, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import type { ServiceDetailItem } from '@/content/service-details'

type ServiceDetailPageProps = {
  detail: ServiceDetailItem
}

export function ServiceDetailPage({ detail }: ServiceDetailPageProps) {
  return (
    <>
      <PageHero
        description={detail.summary}
        eyebrow={detail.eyebrow}
        secondaryAction={{ href: '/services', label: 'All services' }}
        title={detail.name}
      />

      <Section className="py-8 sm:py-10">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="flex h-full flex-col">
              <CardTitle className="text-lg">Who it is for</CardTitle>
              <CheckList className="mt-5" items={detail.whoFor} tone="dot" />
            </Card>
            <Card className="flex h-full flex-col">
              <CardTitle className="text-lg">Problems it solves</CardTitle>
              <CheckList className="mt-5" items={detail.problems} tone="dot" />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="flex h-full flex-col">
              <CardTitle className="text-lg">What is included</CardTitle>
              <CheckList className="mt-5" items={detail.included} tone="check" />
            </Card>
            <Card className="flex h-full flex-col">
              <CardTitle className="text-lg">What is not included</CardTitle>
              <CheckList className="mt-5" items={detail.notIncluded} tone="cross" />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <SectionHeading
            description="A simple path from first conversation to a system you own."
            eyebrow="How it works"
            title="A clear, practical process"
          />
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {detail.process.map((phase, index) => (
              <li key={phase.name}>
                <Card className="h-full">
                  <span className="font-orbitron text-sm font-semibold text-amber-300">
                    Step {index + 1}
                  </span>
                  <p className="mt-3 font-orbitron text-lg font-semibold text-white">
                    {phase.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{phase.detail}</p>
                </Card>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-6 text-slate-400">{detail.pricingNote}</p>
        </Container>
      </Section>

      <ClosingCta />
    </>
  )
}
