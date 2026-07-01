import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta } from '@/content/navigation'
import { site } from '@/content/site'

type ClosingCtaProps = {
  title?: string
  reassurance?: string
}

export function ClosingCta({
  title = 'Start with a free workflow review.',
  reassurance = site.contact.responseCommitment,
}: ClosingCtaProps) {
  return (
    <Section className="pb-16 pt-10 sm:pb-24">
      <Container size="narrow">
        <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur sm:p-10">
          <h2 className="font-orbitron break-words text-2xl font-bold leading-snug text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">{reassurance}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
