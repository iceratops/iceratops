import { ServiceCardGrid } from '@/components/marketing/services/ServiceCardGrid'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { secondaryCta } from '@/content/navigation'
import { services } from '@/content/services'
import { homePage } from '@/content/site'

export function ServicesOverview() {
  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{homePage.services.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.services.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{homePage.services.description}</p>
        </div>
        <ServiceCardGrid services={services} />
        <div className="mt-8">
          <ButtonLink className="w-full sm:w-auto" href={secondaryCta.href} variant="secondary">
            {homePage.services.ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
