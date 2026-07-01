import { Eyebrow } from '@/components/marketing/Eyebrow'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { primaryCta } from '@/content/navigation'

const included = [
  'Website or website refresh',
  'Inquiry & contact forms',
  'One place for every lead',
  'AI-assisted reply drafts',
  'Follow-up reminders',
  'Booking / request workflow',
  'Simple owner handoff & docs',
  'Optional ongoing support',
]

const modules = [
  { title: 'Website Refresh', text: "Tighten your current site's copy, layout, and mobile feel." },
  {
    title: 'Modern Website Build',
    text: 'A new, mobile-first site built around your real services.',
  },
  { title: 'Inquiry & Follow-Up', text: 'AI-assisted drafts, a simple tracker, and reminders.' },
  {
    title: 'Booking / Request Workflow',
    text: 'Turn booking and request questions into appointments.',
  },
  { title: 'Admin Automation', text: 'A short sprint to remove repetitive admin from your week.' },
  {
    title: 'AI Workflow Audit',
    text: "A plain-English map of where AI helps and where it shouldn't.",
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

export function FlagshipOffer() {
  return (
    <section className="scroll-mt-24 py-14 sm:py-16 lg:py-20" id="flagship">
      <Container>
        <div className="reveal max-w-2xl">
          <Eyebrow>The complete system</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            The Website + Follow-Up System
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            One system instead of a pile of disconnected tools. We build the website, wire in
            inquiry capture, and set up human-reviewed follow-up, so leads turn into booked work
            without you living in your inbox.
          </p>
        </div>

        <div className="reveal mt-8 overflow-hidden rounded-3xl border border-amber-300/25 bg-gradient-to-br from-amber-300/[0.07] to-white/[0.02]">
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="flex flex-col">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-200">
                Flagship offer
              </span>
              <h3 className="font-orbitron mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">
                Everything you need to capture and convert leads.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Built for local and service businesses that can&rsquo;t afford to miss another
                inquiry. We start with the workflow, not the tool, then build the site and follow-up
                around it.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Starts at
                </p>
                <p className="font-orbitron mt-1 text-2xl font-bold text-white">
                  $5,000{' '}
                  <span className="text-sm font-medium text-slate-400">
                    &middot; quoted after a short review
                  </span>
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/50 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                  href="#pricing"
                >
                  See pricing
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <p className="text-sm font-semibold text-white">What&rsquo;s included</p>
              <ul className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li className="flex gap-2.5 text-sm leading-6 text-slate-300" key={item}>
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="reveal mt-8">
          <p className="text-sm font-semibold text-slate-300">
            Prefer to start smaller? These modules can stand alone or bolt onto the system.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <div
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20"
                key={module.title}
              >
                <h3 className="text-sm font-semibold text-white">{module.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-400">{module.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
