import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/marketing/Eyebrow'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta } from '@/content/navigation'

type HeroCta = {
  href: string
  label: string
}

type PageHeroProps = {
  eyebrow: string
  title: string
  /** Optional substring of `title` to render in the gold gradient accent. */
  highlight?: string
  description: string
  primaryAction?: HeroCta | null
  secondaryAction?: HeroCta
  note?: string
  children?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryAction = primaryCta,
  secondaryAction,
  note,
  children,
}: PageHeroProps) {
  const [start, end] = highlight ? title.split(highlight) : [title, '']

  return (
    <Section className="pb-10 pt-12 sm:pb-12 sm:pt-16 lg:pt-20">
      <Container>
        <div className="reveal max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-orbitron mt-4 break-words text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {highlight ? (
              <>
                {start}
                <span className="gradient-text">{highlight}</span>
                {end}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            {description}
          </p>
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryAction && (
                <ButtonLink className="w-full sm:w-auto" href={primaryAction.href}>
                  {primaryAction.label}
                </ButtonLink>
              )}
              {secondaryAction && (
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={secondaryAction.href}
                  variant="secondary"
                >
                  {secondaryAction.label}
                </ButtonLink>
              )}
            </div>
          )}
          {note && <p className="mt-4 text-sm leading-6 text-slate-300">{note}</p>}
          {children}
        </div>
      </Container>
    </Section>
  )
}
