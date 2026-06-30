import type { ComponentProps } from 'react'
import { cx } from '@/lib/classes'

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-white/20 sm:p-7',
        className,
      )}
      {...props}
    />
  )
}

type CardTitleProps = ComponentProps<'h1'> & {
  /** Heading level. Use h1 for a page title and h3 beneath a section h2. */
  as?: 'h1' | 'h2' | 'h3'
}

export function CardTitle({ className, as: Tag = 'h2', ...props }: CardTitleProps) {
  return (
    <Tag
      className={cx(
        'font-orbitron break-words text-lg font-semibold leading-snug text-white',
        className,
      )}
      {...props}
    />
  )
}

export function CardText({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cx('mt-2.5 text-sm leading-6 text-slate-300', className)} {...props} />
}
