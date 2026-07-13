import type { Metadata } from 'next'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you requested could not be found.',
  alternates: null,
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <Section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
      <Container size="narrow">
        <div className="reveal mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur sm:p-12">
          <p className="font-orbitron text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            404
          </p>
          <h1 className="font-orbitron mt-4 text-3xl font-bold leading-tight text-white">
            This page is not here.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The link may be old, or the address may have been typed incorrectly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href="/" variant="secondary">
              Back to home
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="/services" variant="secondary">
              View services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
