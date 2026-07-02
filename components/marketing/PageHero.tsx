import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

/**
 * Heading block for supporting pages (Services, About). Deliberately has no
 * CTA of its own: the sticky header carries the one primary CTA, so page
 * heroes never compete with it.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <Section className="pb-10 pt-12 sm:pb-12 sm:pt-16 lg:pt-20">
      <Container>
        <div className="reveal max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-orbitron mt-4 break-words text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </Section>
  )
}
