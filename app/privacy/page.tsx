import { PageHero } from '@/components/marketing/PageHero'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { site } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Privacy',
  description: 'How Iceratops handles information shared through this website.',
  path: '/privacy',
})

const sections = [
  {
    title: 'What we collect',
    body: 'The project inquiry form asks for your name, email address, optional company or organization, country or region, website URL, and the details you choose to share about your project.',
  },
  {
    title: 'How we use it',
    body: 'We use that information to review your request, reply to you, decide whether Iceratops is a useful fit, and protect the form from misuse. We do not use the form to add you to a marketing list.',
  },
  {
    title: 'Service providers',
    body: 'This site is hosted on Netlify, and project inquiries are processed through Netlify Forms. Service providers may process limited technical data needed to host the site, deliver the form, and keep those services secure.',
  },
  {
    title: 'Cookies and analytics',
    body: 'Iceratops does not currently run advertising trackers or analytics on this site, and the site does not intentionally set marketing cookies.',
  },
  {
    title: 'Sharing and retention',
    body: 'We do not sell personal information. We share it only with service providers needed to operate the site and form, or when required by law. Inquiry details are kept only as long as needed to respond, maintain appropriate business records, and meet legal obligations.',
  },
] as const

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        description="A plain-language summary of the information this site collects and how it is used."
        eyebrow="Privacy"
        title="Your information stays tied to your request."
      />
      <Section className="pb-16 pt-8 sm:pb-24 sm:pt-10">
        <Container size="narrow">
          <p className="reveal text-sm text-slate-400">Effective July 14, 2026</p>
          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <section className="reveal" key={section.title}>
                <h2 className="font-orbitron text-lg font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-300">{section.body}</p>
              </section>
            ))}
          </div>
          <section className="reveal mt-10 border-t border-white/10 pt-8">
            <h2 className="font-orbitron text-lg font-semibold text-white">
              Questions or requests
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              To ask about information you shared, or to request access, correction, or deletion,
              email{' '}
              <a
                className="font-semibold text-amber-200 underline underline-offset-4"
                href={`mailto:${site.contact.email}?subject=Privacy%20request`}
              >
                {site.contact.email}
              </a>
              .
            </p>
          </section>
        </Container>
      </Section>
    </>
  )
}
