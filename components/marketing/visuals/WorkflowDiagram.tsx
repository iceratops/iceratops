import type { ReactNode } from 'react'
import { cx } from '@/lib/classes'

type Step = {
  title: string
  detail: string
  icon: ReactNode
  accent?: boolean
}

const inbox = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
    width="18"
  >
    <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    <rect height="14" rx="2" width="18" x="3" y="5" />
  </svg>
)
const spark = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
    width="18"
  >
    <path
      d="M12 3l2 4.5L18 9l-4 1.5L12 15l-2-4.5L6 9l4-1.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const send = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
    width="18"
  >
    <path d="M4 12l16-7-7 16-2.5-6.5z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const check = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width="18"
  >
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const steps: readonly Step[] = [
  { title: 'Inquiry', detail: 'Form, text, or DM', icon: inbox },
  { title: 'AI draft', detail: 'You review it', icon: spark },
  { title: 'You reply', detail: 'Sounds like you', icon: send },
  { title: 'Booked', detail: 'Call, tour, or order', icon: check, accent: true },
]

/**
 * Branded, illustrative diagram of the inquiry to follow-up flow. Pure CSS,
 * no imagery, aria-hidden. Stacks on mobile, four across on large screens.
 */
export function WorkflowDiagram({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cx('grid gap-3 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {steps.map((step) => (
        <div
          className={cx(
            'rounded-xl border p-4',
            step.accent
              ? 'border-amber-300/25 bg-amber-300/[0.06]'
              : 'border-white/10 bg-white/[0.03]',
          )}
          key={step.title}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-300/[0.12] text-amber-300">
            {step.icon}
          </span>
          <p className="mt-3 text-sm font-semibold text-white">{step.title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">{step.detail}</p>
        </div>
      ))}
    </div>
  )
}
