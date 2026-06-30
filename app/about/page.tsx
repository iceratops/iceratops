import Image from 'next/image'
import { CheckList } from '@/components/marketing/CheckList'
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
        primaryAction={null}
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
              <div className="border-b border-white/10 pb-5">
                <Image
                  alt="Iceratops"
                  className="h-16 w-auto"
                  height={144}
                  src="/iceratops_logo.svg"
                  width={350}
                />
                <p className="font-orbitron mt-4 text-base font-semibold leading-snug text-white">
                  Based in Pflugerville, TX
                </p>
                <p className="mt-1.5 text-xs text-slate-400">Austin area and remote</p>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">
                We work across the Austin area, including {site.serviceArea.slice(1, 6).join(', ')},
                and with remote clients across the U.S.
              </p>
              <p className="mt-6 text-sm font-semibold text-white">What you can count on</p>
              <CheckList className="mt-4" items={site.commitments} tone="check" />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="py-8 pb-16 sm:py-10 sm:pb-24">
        <Container>
          <SectionHeading eyebrow="How we operate" title={aboutPage.valuesTitle} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {aboutPage.values.map((value) => (
              <Card className="h-full" key={value.title}>
                <CardTitle as="h3">{value.title}</CardTitle>
                <CardText>{value.text}</CardText>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
