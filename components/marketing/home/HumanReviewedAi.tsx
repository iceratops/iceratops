import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'

const points = [
  'Drafts and sends routine replies in your voice',
  'Sorts and summarizes new requests',
  'Books open slots on your calendar automatically',
]

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 flex-none text-amber-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HumanReviewedAi() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.02] py-14 sm:py-16 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="reveal max-w-xl">
          <Eyebrow>Automated, with your rules</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            AI does the busywork. You approve anything that matters.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            AI sends routine replies, books open times right on your calendar, and sorts incoming
            requests. You set the rules, and anything that commits to a price or a promise waits for
            your OK.
          </p>
          <ul className="mt-6 space-y-2.5">
            {points.map((point) => (
              <li
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200"
                key={point}
              >
                <CheckIcon />
                {point}
              </li>
            ))}
            <li className="flex items-center gap-3 rounded-xl border border-amber-300/30 bg-amber-300/[0.07] px-4 py-3 text-sm font-semibold text-amber-100">
              <CheckIcon />
              You approve the messages that matter
            </li>
          </ul>
        </div>

        <div
          className="reveal rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-xl shadow-slate-950/30 sm:p-6"
          style={{ transitionDelay: '120ms' }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Sample &middot; AI handled this
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Booked automatically
            </span>
          </div>
          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Incoming &middot; Web form
            </p>
            <p className="mt-1.5 text-sm leading-6 text-slate-200">
              &ldquo;Hi, can I get on the schedule next week for a drain cleaning? Mornings are
              best. Thanks, Sam&rdquo;
            </p>
          </div>
          <div className="mt-3 rounded-lg border border-amber-300/20 bg-amber-300/[0.05] p-3.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-200">
              AI reply &middot; sent in your voice
            </p>
            <p className="mt-1.5 text-sm leading-6 text-slate-200">
              Hi Sam! You&rsquo;re booked for Tuesday at 9:00 AM. I&rsquo;ll text a reminder the day
              before. See you then, [Your name]
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2.5 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-3">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-emerald-400/15 text-emerald-300">
              <svg
                aria-hidden="true"
                fill="none"
                height="15"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width="15"
              >
                <path
                  d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-sm leading-5 text-slate-200">
              Added to your calendar &middot;{' '}
              <span className="font-semibold text-white">Tue 9:00 AM</span>
            </p>
          </div>
          <div className="mt-4 flex items-start gap-2 border-t border-white/10 pt-3">
            <svg
              aria-hidden="true"
              className="mt-0.5 h-3.5 w-3.5 flex-none text-amber-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3l7 4v5c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[11px] leading-5 text-slate-400">
              Routine replies and bookings go out on their own. Anything that quotes a price or
              makes a promise waits for your OK.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
