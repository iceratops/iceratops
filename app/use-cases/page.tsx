import { UseCaseCardGrid } from '@/components/marketing/use-cases/UseCaseCardGrid'
import { ButtonLink } from '@/components/primitives/Button'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta } from '@/content/navigation'
import { homePage, site, useCasesPage } from '@/content/site'
import { useCases } from '@/content/use-cases'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Use Cases',
  description: useCasesPage.description,
  path: '/use-cases',
})

export default function UseCasesPage() {
  return (
    <>
      <Section className="pb-8 pt-10 sm:pb-10 sm:pt-14 lg:pt-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-amber-300">{useCasesPage.eyebrow}</p>
            <h1 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white min-[390px]:text-3xl sm:text-4xl lg:text-5xl">
              {useCasesPage.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">
              {useCasesPage.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink
                className="w-full sm:w-auto"
                href={useCasesPage.secondaryCta.href}
                variant="secondary"
              >
                {useCasesPage.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <UseCaseCardGrid useCases={useCases} />
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container>
          <Card>
            <CardTitle>{homePage.trust.notDoTitle}</CardTitle>
            <ul className="mt-5 space-y-2 pl-5 text-sm leading-6 text-slate-300">
              {useCasesPage.notDoBullets.map((bullet) => (
                <li className="list-disc" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section className="pb-16 pt-8 sm:pb-20">
        <Container size="narrow">
          <Card className="text-center">
            <CardTitle>{useCasesPage.closingCta.title}</CardTitle>
            <CardText>{useCasesPage.closingCta.reassurance}</CardText>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink
                className="w-full sm:w-auto"
                href={`mailto:${site.contact.email}`}
                variant="secondary"
              >
                {useCasesPage.closingCta.emailFallbackLabel}
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  )
}
