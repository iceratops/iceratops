import { cx } from '@/lib/classes'

type CheckListProps = {
  items: readonly string[]
  className?: string
}

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cx('space-y-3', className)}>
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-slate-300" key={item}>
          <span className="text-amber-300">
            <svg
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 flex-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
