import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { homePage, site } from '@/content/site'

export function LocalPositioning() {
  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{homePage.local.eyebrow}</p>
          <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
            {homePage.local.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{homePage.local.description}</p>
        </div>
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2">
            {site.serviceArea.map((city) => (
              <span
                className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-slate-100"
                key={city}
              >
                {city}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-300">{homePage.local.remote}</p>
        </div>
      </Container>
    </Section>
  )
}
