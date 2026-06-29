import { CheckList } from '@/components/marketing/CheckList'
import { ContactForm } from '@/components/marketing/ContactForm'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { contactPage, site } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Request a free workflow review for your website, inquiry flow, or admin workflow.',
  path: '/contact',
})

const nextSteps = [
  'You send a short note about your business.',
  'We reply within one business day.',
  'We book a short, free workflow review to find the best first step.',
]

export default function ContactPage() {
  return (
    <Section className="pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pt-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-amber-300">
            {contactPage.eyebrow}
          </p>
          <h1 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white min-[390px]:text-3xl sm:text-4xl lg:text-5xl">
            {contactPage.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">
            {contactPage.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <Card>
            <CardTitle>Request a free workflow review</CardTitle>
            <CardText className="mb-7">
              Tell us a little about your business and what you want cleaned up.
            </CardText>
            <ContactForm />
            <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
              Prefer email? Write to{' '}
              <a
                className="font-semibold text-amber-200 underline underline-offset-4"
                href={`mailto:${site.contact.email}?subject=${site.contact.reviewSubject}`}
              >
                {site.contact.email}
              </a>{' '}
              and we will reply within one business day.
            </p>
          </Card>

          <div className="flex flex-col gap-6">
            <Card>
              <CardTitle className="text-lg">What happens next</CardTitle>
              <CheckList className="mt-5" items={nextSteps} tone="dot" />
            </Card>

            <Card>
              <CardTitle className="text-lg">What you can count on</CardTitle>
              <CheckList className="mt-5" items={site.commitments} tone="check" />
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}
