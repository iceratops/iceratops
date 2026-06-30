import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { homePage } from '@/content/site'

export function WhyIceratops() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl border-l-2 border-amber-300/40 pl-6 sm:pl-8">
          <Eyebrow>{homePage.whyIceratops.eyebrow}</Eyebrow>
          <h2 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {homePage.whyIceratops.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            {homePage.whyIceratops.description}
          </p>
        </div>
      </Container>
    </Section>
  )
}
