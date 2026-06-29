import Link from 'next/link'
import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { SectionHeading } from '@/components/marketing/SectionHeading'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { caseStudiesPage } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: caseStudiesPage.description,
  path: '/case-studies',
})

const meantimeLinks = [
  {
    href: '/demos',
    title: 'See example builds',
    text: 'Browse example local-service website concepts that show how we design for local businesses.',
  },
  {
    href: '/resources/website-audit-checklist',
    title: 'Score your own site',
    text: 'Use the free website audit checklist to find what is costing you inquiries.',
  },
  {
    href: '/services',
    title: 'See how we help',
    text: 'Walk through the services and packages we offer owner-led teams.',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        description={caseStudiesPage.description}
        eyebrow={caseStudiesPage.eyebrow}
        secondaryAction={{ href: '/demos', label: 'View example builds' }}
        title={caseStudiesPage.title}
      />

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <SectionHeading eyebrow={caseStudiesPage.meantimeTitle} title="A few honest next steps" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {meantimeLinks.map((link) => (
              <Link
                className="group block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                href={link.href}
                key={link.href}
              >
                <Card className="flex h-full flex-col group-hover:border-amber-300/30">
                  <CardTitle as="h3" className="text-lg">
                    {link.title}
                  </CardTitle>
                  <CardText>{link.text}</CardText>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber-300">
                    Go
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

      <ClosingCta />
    </>
  )
}
