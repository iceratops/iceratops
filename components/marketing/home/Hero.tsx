import Image from 'next/image'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta, secondaryCta } from '@/content/navigation'
import { homePage, site } from '@/content/site'

export function Hero() {
  const [headingStart, headingEnd] = homePage.hero.heading.split(homePage.hero.highlightedPhrase)

  return (
    <Section className="pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
      <Container className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-sm font-semibold text-amber-200">
            {homePage.hero.eyebrow}
          </p>
          <h1 className="font-orbitron mt-5 break-words text-2xl font-bold leading-tight text-white min-[390px]:text-3xl sm:text-4xl lg:text-5xl">
            {headingStart}
            <span className="gradient-text">{homePage.hero.highlightedPhrase}</span>
            {headingEnd}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            {homePage.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{site.contact.responseCommitment}</p>
        </div>

        <div className="hidden justify-center lg:flex" aria-hidden="true">
          <div className="glass-card flex aspect-square w-full max-w-xs items-center justify-center p-10">
            <Image
              alt=""
              className="h-auto w-full max-w-48"
              height={220}
              priority
              src="/iceratops_logo.svg"
              width={220}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
