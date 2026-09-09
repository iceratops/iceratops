import type { ReactNode } from 'react'
import { cx } from '@/lib/classes'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

type Step = {
  title: string
  detail: string
  icon: ReactNode
  accent?: boolean
}

const application = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
    width="18"
  >
    <rect height="14" rx="2" width="18" x="3" y="5" />
    <path d="M3 10h18M9 10v9" strokeLinecap="round" />
  </svg>
)
const integration = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
    width="18"
  >
    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const data = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
    width="18"
  >
    <rect height="16" rx="2" width="18" x="3" y="4" />
    <path d="M3 10h18M3 15h18M9 4v16" strokeLinecap="round" />
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
  { title: 'Applications', detail: 'Tools your team uses', icon: application },
  { title: 'Integrations', detail: 'Platforms working together', icon: integration },
  { title: 'Data', detail: 'Reliable shared information', icon: data },
  { title: 'Your team', detail: 'Clear access and controls', icon: check, accent: true },
]

/**
 * The parts of a connected system. Stacks on mobile, two across on larger screens.
 */
export function SystemsDiagram({
  className,
  locale = 'en',
}: {
  className?: string
  locale?: Locale
}) {
  const t = getTranslator(locale)
  return (
    <div className={cx('grid gap-3 md:grid-cols-2', className)}>
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
          <p className="mt-3 text-sm font-semibold text-white">{t(step.title)}</p>
          <p className="mt-1 text-sm leading-6 text-slate-400">{t(step.detail)}</p>
        </div>
      ))}
    </div>
  )
}
