import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { processSteps } from '@/content/process'
import { homePage } from '@/content/site'

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{homePage.process.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.process.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{homePage.process.description}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {processSteps.map((step) => (
            <Card key={step.step}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300 bg-amber-300 text-sm font-bold text-slate-950">
                {step.step}
              </div>
              <CardTitle className="mt-5">{step.name}</CardTitle>
              <CardText>{step.summary}</CardText>
              <p className="mt-4 text-sm leading-6 text-slate-300">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
