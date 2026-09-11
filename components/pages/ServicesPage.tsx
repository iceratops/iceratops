import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { SectionHeading } from '@/components/marketing/SectionHeading'
import { ServiceCardGrid } from '@/components/marketing/services/ServiceCardGrid'
import { SystemsDiagram } from '@/components/marketing/visuals/SystemsDiagram'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { ServicesJsonLd } from '@/components/seo/ServicesJsonLd'
import { services } from '@/content/services'
import { servicesHowWeWork, servicesPage } from '@/content/site'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'
import { getWorkingDemoUrl } from '@/lib/working-demo'

export default function ServicesPage({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  const workingDemoUrl = getWorkingDemoUrl()

  return (
    <>
      <ServicesJsonLd locale={locale} />
      <PageHero
        description={t(servicesPage.description)}
        eyebrow={t(servicesPage.eyebrow)}
        title={t(servicesPage.title)}
      />

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <ServiceCardGrid
            services={services.map((service) => ({
              ...service,
              name: t(service.name),
              outcome: t(service.outcome),
              summary: t(service.summary),
              highlights: service.highlights.map((value) => t(value)),
            }))}
          />
        </Container>
      </Section>

      <Section surface="panel">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal max-w-md">
            <SectionHeading
              description={t(servicesHowWeWork.description)}
              eyebrow={t(servicesHowWeWork.eyebrow)}
              title={t(servicesHowWeWork.title)}
            />
            {workingDemoUrl ? (
              <ButtonLink
                className="mt-6"
                data-working-demo-cta="true"
                href={workingDemoUrl}
                variant="secondary"
              >
                {t('Try the working demo')}
              </ButtonLink>
            ) : null}
          </div>
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <SystemsDiagram locale={locale} />
          </div>
        </Container>
      </Section>

      <ClosingCta locale={locale} title={t(servicesPage.closingCta.title)} />
    </>
  )
}
