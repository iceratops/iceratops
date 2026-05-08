import type { ComponentProps } from 'react'
import { cx } from '@/lib/classes'

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'rounded-lg border border-white/15 bg-white/[0.08] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cx('font-orbitron text-xl font-semibold leading-tight text-white', className)}
      {...props}
    />
  )
}

export function CardText({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cx('mt-3 text-sm leading-6 text-slate-300', className)} {...props} />
}
