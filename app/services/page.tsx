import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { SectionHeading } from '@/components/marketing/SectionHeading'
import { ServiceCardGrid } from '@/components/marketing/services/ServiceCardGrid'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { services } from '@/content/services'
import { servicesHowWeWork, servicesPage } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Services',
  description: servicesPage.description,
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        description={servicesPage.description}
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
      />

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <SectionHeading eyebrow="Services" title="Six ways we usually help" />
          <ServiceCardGrid className="mt-8" services={services} />
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <SectionHeading
            description={servicesHowWeWork.description}
            eyebrow={servicesHowWeWork.eyebrow}
            title={servicesHowWeWork.title}
          />
        </Container>
      </Section>

      <ClosingCta title={servicesPage.closingCta.title} />
    </>
  )
}
