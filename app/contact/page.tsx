import { ContactFormShell } from '@/components/marketing/ContactFormShell'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { contactPage } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Start a free workflow review for your website, inquiry flow, or admin workflow.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <Section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{contactPage.eyebrow}</p>
          <h1 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white min-[390px]:text-3xl sm:text-4xl lg:text-5xl">
            {contactPage.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">
            {contactPage.description}
          </p>
        </div>
        <ContactFormShell />
      </Container>
    </Section>
  )
}
