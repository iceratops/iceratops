import { cx } from '@/lib/classes'

type CheckListProps = {
  items: readonly string[]
  /** Visual tone of the marker. `check` for included, `cross` for excluded, `dot` for neutral. */
  tone?: 'check' | 'cross' | 'dot'
  className?: string
}

const markerColor: Record<NonNullable<CheckListProps['tone']>, string> = {
  check: 'text-amber-300',
  cross: 'text-slate-500',
  dot: 'text-slate-400',
}

function Marker({ tone }: { tone: NonNullable<CheckListProps['tone']> }) {
  if (tone === 'dot') {
    return (
      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-current" />
    )
  }
  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 flex-none"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      {tone === 'check' ? (
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M7 7l10 10M17 7L7 17" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

export function CheckList({ items, tone = 'check', className }: CheckListProps) {
  return (
    <ul className={cx('space-y-3', className)}>
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-slate-300" key={item}>
          <span className={markerColor[tone]}>
            <Marker tone={tone} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
