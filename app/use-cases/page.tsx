import { CheckList } from '@/components/marketing/CheckList'
import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { SectionHeading } from '@/components/marketing/SectionHeading'
import { UseCaseCardGrid } from '@/components/marketing/use-cases/UseCaseCardGrid'
import { Card, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { useCasesPage } from '@/content/site'
import { useCases } from '@/content/use-cases'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Use Cases',
  description: useCasesPage.description,
  path: '/use-cases',
})

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        description={useCasesPage.description}
        eyebrow={useCasesPage.eyebrow}
        secondaryAction={useCasesPage.secondaryCta}
        title={useCasesPage.title}
      />

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <SectionHeading
            description="These are common starting points. Each one maps to the service that usually helps first."
            eyebrow="Who we help"
            title="Built around how small teams already sell and serve"
          />
          <UseCaseCardGrid className="mt-8" useCases={useCases} />
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <Card>
            <CardTitle className="text-lg">What we do not do</CardTitle>
            <CheckList className="mt-5" items={useCasesPage.notDoBullets} tone="cross" />
          </Card>
        </Container>
      </Section>

      <ClosingCta title={useCasesPage.closingCta.title} />
    </>
  )
}
