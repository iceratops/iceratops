import { ContactForm } from '@/components/marketing/ContactForm'
import { Card } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { contactPage, site } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Request a free workflow review for your website, inquiry flow, or admin workflow.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <Section className="pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pt-16">
      <Container size="narrow">
        <div className="max-w-2xl">
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

        <Card className="mt-10">
          <ContactForm />
          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
            Prefer email?{' '}
            <a
              className="font-semibold text-amber-200 underline underline-offset-4"
              href={`mailto:${site.contact.email}?subject=${site.contact.reviewSubject}`}
            >
              {site.contact.email}
            </a>
          </p>
        </Card>
      </Container>
    </Section>
  )
}
