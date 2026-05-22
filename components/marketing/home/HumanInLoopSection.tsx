import { Card } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { homePage } from '@/content/site'

export function HumanInLoopSection() {
  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{homePage.humanInLoop.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.humanInLoop.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            {homePage.humanInLoop.description}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {homePage.humanInLoop.reassurances.map((reassurance) => (
            <Card key={reassurance}>
              <p className="text-base font-semibold leading-7 text-white">{reassurance}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
