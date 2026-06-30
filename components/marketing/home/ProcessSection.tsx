import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { processSteps } from '@/content/process'
import { homePage } from '@/content/site'

export function ProcessSection() {
  return (
    <Section surface="panel">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{homePage.process.eyebrow}</Eyebrow>
          <h2 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white sm:text-3xl">
            {homePage.process.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{homePage.process.description}</p>
        </div>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-6" key={step.step}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/15 text-sm font-bold text-amber-200">
                {step.step}
              </div>
              <h3 className="font-orbitron mt-5 text-base font-semibold text-white">{step.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
