import Link from 'next/link'
import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { SectionHeading } from '@/components/marketing/SectionHeading'
import { ServiceCardGrid } from '@/components/marketing/services/ServiceCardGrid'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { processSteps } from '@/content/process'
import { packages } from '@/content/service-details'
import { services } from '@/content/services'
import { servicesHowWeWork, servicesPackages, servicesPage } from '@/content/site'
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
        secondaryAction={servicesPage.secondaryCta}
        title={servicesPage.title}
      />

      <Section className="py-8 sm:py-10">
        <Container>
          <SectionHeading
            description={servicesHowWeWork.description}
            eyebrow={servicesHowWeWork.eyebrow}
            title={servicesHowWeWork.title}
          />
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.step}>
                <Card className="h-full">
                  <span className="font-orbitron text-sm font-semibold text-amber-300">
                    Step {step.step}
                  </span>
                  <p className="mt-3 font-orbitron text-lg font-semibold text-white">{step.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <SectionHeading eyebrow="Services" title="Six ways we usually help" />
          <ServiceCardGrid className="mt-8" services={services} />
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <SectionHeading
            description={servicesPackages.description}
            eyebrow={servicesPackages.eyebrow}
            title={servicesPackages.title}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {packages.map((pkg) => (
              <Link
                className="group block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                href={`/services/${pkg.slug}`}
                key={pkg.slug}
              >
                <Card className="flex h-full flex-col group-hover:border-amber-300/30">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                    {pkg.eyebrow}
                  </p>
                  <CardTitle as="h3" className="mt-3">
                    {pkg.name}
                  </CardTitle>
                  <CardText>{pkg.summary}</CardText>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber-300">
                    See the package
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      &rarr;
                    </span>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCta title={servicesPage.closingCta.title} />
    </>
  )
}
