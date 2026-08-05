import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'
import { oneWorkflowPilot } from '@/content/pilot'

const definedProjects = [
  {
    title: 'Website Refresh',
    text: 'Improve an existing site without starting over.',
    price: '$1,500',
  },
  {
    title: 'Modern Website Build',
    text: 'Create a new, responsive website around a clear goal.',
    price: '$3,500',
  },
  {
    title: 'Workflow or Automation Sprint',
    text: 'Improve one defined operational workflow.',
    price: '$2,500',
  },
] as const

const customEngagements = [
  'Custom software',
  'Digital platform development',
  'Systems and API integration',
  'Ongoing technical partnership',
] as const

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
          <Eyebrow>Engagements</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Clear starting points for defined work. Custom scope for larger systems.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Focused projects have transparent starting prices. Custom software, platforms, and
            integrations are scoped after an initial technical review.
          </p>
        </div>

        <div className="reveal mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                Focused starting point
              </p>
              <h3 className="font-orbitron mt-2 text-lg font-semibold text-white">
                {oneWorkflowPilot.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {oneWorkflowPilot.description}
              </p>
              <p className="font-orbitron mt-4 text-xl font-bold text-amber-200">
                From {oneWorkflowPilot.price}
              </p>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {oneWorkflowPilot.scope.map((point) => (
                <li className="flex gap-2.5 text-sm leading-6 text-slate-300" key={point}>
                  <Check />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-slate-400">
            {oneWorkflowPilot.credit}
          </p>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
              Defined projects
            </p>
            <div className="mt-3 divide-y divide-white/10">
              {definedProjects.map((item) => (
                <div
                  className="flex flex-col gap-2 py-4 first:pt-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                  key={item.title}
                >
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                  </div>
                  <p className="font-orbitron flex-none text-sm font-bold text-amber-200">
                    <span className="mr-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                      from
                    </span>
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-300/[0.08] to-white/[0.02] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
              Custom engagements
            </p>
            <h3 className="font-orbitron mt-3 text-xl font-semibold text-white">
              Technical work shaped around your requirements.
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Larger systems need enough discovery to set responsible boundaries, dependencies, and
              delivery stages.
            </p>
            <ul className="mt-5 grid gap-2.5 border-t border-white/10 pt-5 sm:grid-cols-2">
              {customEngagements.map((point) => (
                <li className="flex gap-2.5 text-sm leading-6 text-slate-300" key={point}>
                  <Check />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="font-orbitron mt-6 rounded-xl border border-amber-300/20 bg-slate-950/30 px-4 py-3 text-sm font-semibold text-amber-100">
              Scoped after an initial technical review.
            </p>
          </div>
        </div>

        <p className="reveal mt-6 text-sm leading-6 text-slate-400">
          Optional maintenance and support starts at $300 per month. No long contracts to start.
          Everything we build is yours, with documentation.
        </p>
      </Container>
    </section>
  )
}
