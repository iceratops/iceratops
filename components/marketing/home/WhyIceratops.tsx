import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { homePage } from '@/content/site'

export function WhyIceratops() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{homePage.whyIceratops.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.whyIceratops.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            {homePage.whyIceratops.description}
          </p>
        </div>
      </Container>
    </Section>
  )
}
