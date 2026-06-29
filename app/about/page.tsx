import { CheckList } from '@/components/marketing/CheckList'
import { ClosingCta } from '@/components/marketing/ClosingCta'
import { PageHero } from '@/components/marketing/PageHero'
import { SectionHeading } from '@/components/marketing/SectionHeading'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { aboutPage, site } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'About',
  description: aboutPage.description,
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        description={aboutPage.description}
        eyebrow={aboutPage.eyebrow}
        secondaryAction={{ href: '/services', label: 'View services' }}
        title={aboutPage.title}
      />

      <Section className="py-8 sm:py-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="max-w-2xl space-y-5">
              {aboutPage.story.map((paragraph) => (
                <p className="text-base leading-7 text-slate-200" key={paragraph.slice(0, 24)}>
                  {paragraph}
                </p>
              ))}
            </div>
            <Card className="h-full">
              <CardTitle className="text-lg">Based in Pflugerville, TX</CardTitle>
              <CardText>
                We work across the Austin area, including {site.serviceArea.slice(1, 6).join(', ')},
                and with remote clients across the U.S.
              </CardText>
              <p className="mt-6 text-sm font-semibold text-white">What you can count on</p>
              <CheckList className="mt-4" items={site.commitments} tone="check" />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <SectionHeading eyebrow="How we operate" title={aboutPage.valuesTitle} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {aboutPage.values.map((value) => (
              <Card className="h-full" key={value.title}>
                <CardTitle as="h3" className="text-lg">
                  {value.title}
                </CardTitle>
                <CardText>{value.text}</CardText>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCta />
    </>
  )
}
