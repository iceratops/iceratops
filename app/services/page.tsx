import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { SectionHeading } from '@/components/marketing/SectionHeading'
import { ServiceCardGrid } from '@/components/marketing/services/ServiceCardGrid'
import { SystemsDiagram } from '@/components/marketing/visuals/SystemsDiagram'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { services } from '@/content/services'
import { servicesHowWeWork, servicesPage } from '@/content/site'
import { buildMetadata } from '@/lib/seo'
import { getWorkingDemoUrl } from '@/lib/working-demo'

export const metadata = buildMetadata({
  title: 'Capabilities',
  description: servicesPage.description,
  path: '/services',
})

export default function ServicesPage() {
  const workingDemoUrl = getWorkingDemoUrl()

  return (
    <>
      <PageHero
        description={servicesPage.description}
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
      />

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <ServiceCardGrid services={services} />
        </Container>
      </Section>

      <Section surface="panel">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal max-w-md">
            <SectionHeading
              description={servicesHowWeWork.description}
              eyebrow={servicesHowWeWork.eyebrow}
              title={servicesHowWeWork.title}
            />
            {workingDemoUrl ? (
              <ButtonLink
                className="mt-6"
                data-working-demo-cta="true"
                href={workingDemoUrl}
                variant="secondary"
              >
                Try the working demo
              </ButtonLink>
            ) : null}
          </div>
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <SystemsDiagram />
          </div>
        </Container>
      </Section>

      <ClosingCta title={servicesPage.closingCta.title} />
    </>
  )
}
