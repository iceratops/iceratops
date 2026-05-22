import { ButtonLink } from '@/components/primitives/Button'
import { Card } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta } from '@/content/navigation'
import { homePage, site } from '@/content/site'

export function FinalCta() {
  return (
    <Section className="pb-16 sm:pb-20">
      <Container size="narrow">
        <Card className="text-center">
          <p className="text-sm font-semibold text-amber-300">{homePage.finalCta.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            {homePage.finalCta.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href={`mailto:${site.contact.email}`}
              variant="secondary"
            >
              {homePage.finalCta.emailFallbackLabel}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
