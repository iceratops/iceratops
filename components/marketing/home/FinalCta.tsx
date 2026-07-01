import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { primaryCta } from '@/content/navigation'

export function FinalCta() {
  return (
    <section className="pb-16 pt-14 sm:pb-24 sm:pt-16">
      <Container size="narrow">
        <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            Ready when you are
          </p>
          <h2 className="font-orbitron mx-auto mt-4 max-w-2xl text-2xl font-bold leading-snug text-white sm:text-3xl">
            Start with a free workflow review.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            Tell us what&rsquo;s slipping through the cracks. We&rsquo;ll reply within one business
            day with a clear, no-pressure next step.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
              {primaryCta.label}
            </ButtonLink>
            <a
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300/50 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:w-auto"
              href="#pricing"
            >
              See pricing
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
