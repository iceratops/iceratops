import Image from 'next/image'
import { HeroPreview } from '@/components/marketing/visuals/HeroPreview'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta, secondaryCta } from '@/content/navigation'
import { homePage, site } from '@/content/site'

export function Hero() {
  const [headingStart, headingEnd] = homePage.hero.heading.split(homePage.hero.highlightedPhrase)

  return (
    <Section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-glow absolute right-[6%] top-[8%] h-64 w-64 rounded-full" />
        <span
          className="hero-twinkle"
          style={{ left: '41%', top: '12%', animationDuration: '4.2s' }}
        />
        <span
          className="hero-twinkle"
          style={{
            left: '63%',
            top: '6%',
            width: '3px',
            height: '3px',
            animationDelay: '1.3s',
            animationDuration: '5.4s',
          }}
        />
        <span
          className="hero-twinkle"
          style={{ left: '83%', top: '18%', animationDelay: '.6s', animationDuration: '4.8s' }}
        />
        <span
          className="hero-twinkle"
          style={{
            left: '92%',
            top: '42%',
            width: '3px',
            height: '3px',
            animationDelay: '2.1s',
            animationDuration: '6s',
          }}
        />
        <span
          className="hero-twinkle"
          style={{ left: '72%', top: '66%', animationDelay: '1.7s', animationDuration: '5s' }}
        />
        <span
          className="hero-twinkle"
          style={{
            left: '88%',
            top: '82%',
            width: '3px',
            height: '3px',
            animationDelay: '.9s',
            animationDuration: '4.6s',
          }}
        />
        <span
          className="hero-twinkle"
          style={{
            left: '5%',
            top: '30%',
            width: '3px',
            height: '3px',
            animationDelay: '2.6s',
            animationDuration: '5.6s',
          }}
        />
        <span
          className="hero-twinkle"
          style={{ left: '30%', top: '90%', animationDelay: '3.1s', animationDuration: '4.4s' }}
        />
      </div>
      <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div className="max-w-xl">
          <Image
            alt=""
            aria-hidden="true"
            className="mb-5 h-10 w-auto"
            height={98}
            src="/iceratops_mark.svg"
            width={156}
          />
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200">
            {homePage.hero.eyebrow}
          </p>
          <h1 className="font-orbitron mt-6 break-words text-3xl/[1.2] font-bold text-white sm:text-4xl/[1.2] lg:text-[3.25rem]/[1.14]">
            {headingStart}
            <span className="gradient-text">{homePage.hero.highlightedPhrase}</span>
            {headingEnd}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
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
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-400">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300"
            />
            {site.contact.responseCommitment}
          </p>
        </div>

        <HeroPreview className="hidden lg:block" />
      </Container>
    </Section>
  )
}
