import { ButtonLink } from '@/components/primitives/Button'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { contactPage, site } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Thank you',
  description: 'Thanks for reaching out to Iceratops. We reply within one business day.',
  path: '/contact/success',
  noIndex: true,
})

export default function ContactSuccessPage() {
  return (
    <Section className="pb-16 pt-16 sm:pb-20 sm:pt-20">
      <Container size="narrow">
        <Card className="text-center">
          <p className="text-sm font-semibold tracking-wide text-amber-300">
            {contactPage.success.eyebrow}
          </p>
          <CardTitle className="mt-3">{contactPage.success.title}</CardTitle>
          <CardText className="mx-auto mt-4 max-w-xl">{contactPage.success.description}</CardText>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href="/">
              Back to home
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href={`mailto:${site.contact.email}`}
              variant="secondary"
            >
              Email {site.contact.email}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
