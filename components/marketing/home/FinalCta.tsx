import { Eyebrow } from '@/components/marketing/Eyebrow'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta } from '@/content/navigation'
import { homePage } from '@/content/site'

export function FinalCta() {
  return (
    <Section className="pb-16 pt-2 sm:pb-24">
      <Container size="narrow">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur sm:p-10">
          <Eyebrow centered>{homePage.finalCta.eyebrow}</Eyebrow>
          <h2 className="font-orbitron mx-auto mt-4 max-w-2xl break-words text-2xl font-bold leading-snug text-white sm:text-3xl">
            {homePage.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            {homePage.finalCta.description}
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
