import Link from 'next/link'
import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { resources } from '@/content/resources'
import { resourcesPage } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Resources',
  description: resourcesPage.description,
  path: '/resources',
})

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        description={resourcesPage.description}
        eyebrow={resourcesPage.eyebrow}
        secondaryAction={{ href: '/services', label: 'View services' }}
        title={resourcesPage.title}
      />

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                className="group block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                href={`/resources/${resource.slug}`}
                key={resource.slug}
              >
                <Card className="flex h-full flex-col group-hover:border-amber-300/30">
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {resource.category}
                  </span>
                  <CardTitle className="mt-4 text-lg">{resource.name}</CardTitle>
                  <CardText>{resource.summary}</CardText>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber-300">
                    Open resource
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
