import { ButtonLink } from '@/components/primitives/Button'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { homePage } from '@/content/site'
import { useCases } from '@/content/use-cases'

export function UseCasesPreview() {
  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{homePage.useCases.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.useCases.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{homePage.useCases.description}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.slug}>
              <CardTitle>{useCase.name}</CardTitle>
              <CardText>{useCase.summary}</CardText>
              <ul className="mt-5 space-y-2 pl-5 text-sm leading-6 text-slate-300">
                {useCase.helpfulWorkflows.map((workflow) => (
                  <li className="list-disc" key={workflow}>
                    {workflow}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink className="w-full sm:w-auto" href="/use-cases" variant="secondary">
            {homePage.useCases.ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
