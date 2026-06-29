import { ButtonLink } from '@/components/primitives/Button'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta } from '@/content/navigation'
import { site } from '@/content/site'

type ClosingCtaProps = {
  title?: string
  reassurance?: string
}

export function ClosingCta({
  title = 'Start with a free workflow review.',
  reassurance = site.contact.responseCommitment,
}: ClosingCtaProps) {
  return (
    <Section className="pb-16 pt-8 sm:pb-20">
      <Container size="narrow">
        <Card className="text-center">
          <CardTitle>{title}</CardTitle>
          <CardText className="mx-auto max-w-xl">{reassurance}</CardText>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
              {primaryCta.label}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
