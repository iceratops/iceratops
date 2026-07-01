import { Eyebrow } from '@/components/marketing/Eyebrow'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { primaryCta } from '@/content/navigation'

const flagshipPoints = [
  'Website or refresh',
  'Inquiry capture',
  'AI-assisted follow-up',
  'Owner handoff & docs',
]

const startingPoints = [
  {
    title: 'Website Refresh',
    text: 'Tighten your current site without starting over.',
    price: '$1,500',
  },
  {
    title: 'Modern Website Build',
    text: 'A new, mobile-first site built around your services.',
    price: '$3,500',
  },
  {
    title: 'Admin & Workflow Automation',
    text: 'Remove repetitive admin from your week.',
    price: '$2,500',
  },
  {
    title: 'Ongoing support / care plan',
    text: 'Optional monthly support to keep it all running.',
    price: '$300',
    suffix: '/mo',
  },
]

function Check() {
  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 flex-none text-amber-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      viewBox="0 0 24 24"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Pricing() {
  return (
    <section
      className="relative scroll-mt-24 border-t border-white/[0.06] bg-white/[0.02] py-14 sm:py-16 lg:py-20"
      id="pricing"
    >
      <Container>
        <div className="reveal max-w-2xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Clear starting points. Quoted after a short review.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Most projects are quoted after a short review, because every business has different
            pages, workflows, tools, and follow-up needs. Here&rsquo;s where things typically start.
          </p>
        </div>

        <div className="reveal mt-8 flex flex-col gap-4 rounded-2xl border border-amber-300/25 bg-amber-300/[0.05] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-orbitron text-lg font-semibold text-white">
              Free Workflow Review{' '}
              <span className="ml-1.5 rounded-full bg-amber-300/15 px-2.5 py-0.5 align-middle text-xs font-semibold text-amber-200">
                Free
              </span>
            </p>
            <p className="mt-1.5 text-sm leading-6 text-slate-300">
              A short call to map your inquiry flow and find the first win. No pressure, no tools
              sold.
            </p>
          </div>
          <ButtonLink className="flex-none whitespace-nowrap" href={primaryCta.href}>
            Book the review
          </ButtonLink>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal flex flex-col rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-300/[0.08] to-white/[0.02] p-6 sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <p className="font-orbitron text-lg font-semibold text-white">
                Website + Follow-Up System
              </p>
              <span className="flex-none rounded-full border border-amber-300/40 bg-amber-300/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                Most chosen
              </span>
            </div>
            <p className="font-orbitron mt-3 text-3xl font-bold text-white">From $5,000</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              The complete system: website, inquiry capture, AI-assisted follow-up, and a clean
              handoff.
            </p>
            <ul className="mt-5 grid gap-2.5 border-t border-white/10 pt-5 sm:grid-cols-2">
              {flagshipPoints.map((point) => (
                <li className="flex gap-2.5 text-sm leading-6 text-slate-300" key={point}>
                  <Check />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex">
              <ButtonLink href={primaryCta.href}>Start with a free review</ButtonLink>
            </div>
          </div>

          <div className="reveal grid content-start gap-3" style={{ transitionDelay: '120ms' }}>
            {startingPoints.map((item) => (
              <div
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                key={item.title}
              >
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
                <p className="font-orbitron flex-none text-right text-base font-bold text-amber-200">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    from
                  </span>
                  {item.price}
                  {item.suffix && (
                    <span className="text-xs font-medium text-slate-400">{item.suffix}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="reveal mt-6 text-sm leading-6 text-slate-400">
          No long contracts to start. Everything we build is yours, with documentation.
        </p>
      </Container>
    </section>
  )
}
