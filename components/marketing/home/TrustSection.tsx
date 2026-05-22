import { Card } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { homePage, site } from '@/content/site'

export function TrustSection() {
  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{homePage.trust.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.trust.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{homePage.trust.description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {site.commitments.map((commitment) => (
            <Card key={commitment}>
              <p className="text-base font-semibold leading-7 text-white">{commitment}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-300">
          <span className="font-semibold text-amber-200">{homePage.trust.notDoTitle}: </span>
          {homePage.trust.notDoText}
        </p>
      </Container>
    </Section>
  )
}
