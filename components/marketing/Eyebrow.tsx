import type { ReactNode } from 'react'
import { cx } from '@/lib/classes'

type EyebrowProps = {
  children: ReactNode
  className?: string
}

/**
 * Small amber section label. A short rule plus an uppercase, tracked word or
 * two. Used across headings to give the page a consistent, crafted rhythm.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cx(
        'flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 flex-none bg-amber-300/60" />
      {children}
    </p>
  )
}
