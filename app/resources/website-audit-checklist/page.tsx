import Link from 'next/link'
import { CheckList } from '@/components/marketing/CheckList'
import { ClosingCta } from '@/components/marketing/ClosingCta'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { websiteAuditChecklist } from '@/content/resources'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Website Audit Checklist',
  description:
    'A free, honest checklist to score your website on clarity, mobile, trust, SEO, inquiry capture, and follow-up readiness.',
  path: '/resources/website-audit-checklist',
})

export default function WebsiteAuditChecklistPage() {
  const checklist = websiteAuditChecklist

  return (
    <>
      <Section className="pb-8 pt-10 sm:pb-10 sm:pt-14 lg:pt-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-amber-300">Checklist</p>
            <h1 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white min-[390px]:text-3xl sm:text-4xl lg:text-5xl">
              {checklist.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">{checklist.intro}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{checklist.howTo}</p>
            <p className="mt-4 text-sm text-slate-400">
              <Link
                className="font-semibold text-amber-300 underline-offset-4 hover:underline"
                href="/resources"
              >
                Back to resources
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {checklist.sections.map((section) => (
              <Card className="h-full" key={section.title}>
                <CardTitle className="text-lg">{section.title}</CardTitle>
                <CardText>{section.description}</CardText>
                <CheckList className="mt-5" items={section.items} tone="check" />
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <Card>
            <CardTitle className="text-lg">Scoring guide</CardTitle>
            <CardText>Add up your checks, then find your range below.</CardText>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {checklist.scoring.map((tier) => (
                <div
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  key={tier.range}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-orbitron text-base font-semibold text-white">{tier.label}</p>
                    <p className="text-sm font-semibold text-amber-300">{tier.range}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{tier.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      <ClosingCta
        reassurance="Share your score in a free workflow review and we will turn it into a clear plan."
        title="Want help with your lowest scores?"
      />
    </>
  )
}
