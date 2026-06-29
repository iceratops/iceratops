import Link from 'next/link'
import { ButtonLink } from '@/components/primitives/Button'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { demoSites } from '@/content/demos'
import { primaryCta } from '@/content/navigation'
import { buildMetadata } from '@/lib/seo'

const demo = demoSites['austin-drainage-lawn-leveling']

export const metadata = buildMetadata({
  title: 'Demo: Austin Drainage and Lawn Leveling',
  description:
    'An illustrative, fictional sample site showing what Iceratops can build for a local home services business.',
  path: '/demos/austin-drainage-lawn-leveling',
  noIndex: true,
})

function FeatureGrid({ items }: { items: readonly { title: string; text: string }[] }) {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <Card className="h-full" key={item.title}>
          <CardTitle className="text-base">{item.title}</CardTitle>
          <CardText>{item.text}</CardText>
        </Card>
      ))}
    </div>
  )
}

export default function AustinDrainageDemoPage() {
  return (
    <>
      <div className="border-b border-amber-300/30 bg-amber-300/10">
        <Container className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-amber-100">
            Illustrative example. This is a fictional business, not a real Iceratops client.
          </p>
          <Link
            className="text-sm font-semibold text-amber-200 underline-offset-4 hover:underline"
            href="/demos"
          >
            Back to demos
          </Link>
        </Container>
      </div>

      <Section className="pb-8 pt-10 sm:pb-10 sm:pt-12">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-amber-300">{demo.eyebrow}</p>
            <h1 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white min-[390px]:text-3xl sm:text-4xl lg:text-5xl">
              {demo.businessName}
            </h1>
            <p className="mt-4 text-lg font-medium text-amber-100">{demo.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              {demo.heroDescription}
            </p>
            <div className="mt-8">
              <ButtonLink className="w-full sm:w-auto" href="#inquiry">
                {demo.inquiry.title}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <h2 className="font-orbitron text-xl font-bold text-white sm:text-2xl">Services</h2>
          <FeatureGrid items={demo.services} />
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <h2 className="font-orbitron text-xl font-bold text-white sm:text-2xl">
            {demo.drainage.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{demo.drainage.intro}</p>
          <FeatureGrid items={demo.drainage.items} />
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <h2 className="font-orbitron text-xl font-bold text-white sm:text-2xl">
            {demo.lawnLeveling.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            {demo.lawnLeveling.intro}
          </p>
          <FeatureGrid items={demo.lawnLeveling.items} />
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <h2 className="font-orbitron text-xl font-bold text-white sm:text-2xl">Service areas</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {demo.serviceAreas.map((area) => (
              <span
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <h2 className="font-orbitron text-xl font-bold text-white sm:text-2xl">
            Example reviews
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            These reviews are fictional and shown only to illustrate layout.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {demo.exampleReviews.map((review) => (
              <Card className="h-full" key={review.name}>
                <p className="text-base leading-7 text-slate-200">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-amber-200">{review.name}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10" id="inquiry">
        <Container size="narrow">
          <Card className="text-center">
            <CardTitle>{demo.inquiry.title}</CardTitle>
            <CardText className="mx-auto max-w-xl">{demo.inquiry.description}</CardText>
            <p className="mt-4 text-xs text-slate-400">
              This is an example inquiry section. In a real build, this would capture the request
              and start the follow-up workflow.
            </p>
          </Card>
        </Container>
      </Section>

      <Section className="pb-16 pt-4 sm:pb-20">
        <Container size="narrow">
          <Card className="border-amber-300/30 text-center">
            <CardTitle>Want a site like this for your business?</CardTitle>
            <CardText className="mx-auto max-w-xl">
              This demo is illustrative. We build real, mobile-first sites and inquiry flows for
              owner-led businesses. Start with a free workflow review.
            </CardText>
            <div className="mt-8">
              <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
                {primaryCta.label}
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  )
}
