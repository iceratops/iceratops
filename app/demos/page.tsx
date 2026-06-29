import Link from 'next/link'
import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { demos } from '@/content/demos'
import { demosPage } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Demos',
  description: demosPage.description,
  path: '/demos',
})

export default function DemosPage() {
  return (
    <>
      <PageHero
        description={demosPage.description}
        eyebrow={demosPage.eyebrow}
        secondaryAction={{ href: '/services', label: 'View services' }}
        title={demosPage.title}
      />

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
              <Link
                className="group block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                href={`/demos/${demo.slug}`}
                key={demo.slug}
              >
                <Card className="flex h-full flex-col group-hover:border-amber-300/30">
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {demo.category}
                  </span>
                  <CardTitle className="mt-4 text-lg">{demo.name}</CardTitle>
                  <CardText>{demo.summary}</CardText>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber-300">
                    View example build
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
