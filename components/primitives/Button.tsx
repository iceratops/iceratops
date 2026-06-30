import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cx } from '@/lib/classes'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md'

const baseClasses =
  'inline-flex min-h-11 max-w-full items-center justify-center rounded-xl border px-5 py-3 text-center text-sm font-semibold leading-5 whitespace-normal transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-amber-400 bg-amber-400 text-slate-950 hover:bg-amber-300 focus-visible:outline-amber-300',
  secondary:
    'border-white/15 bg-white/5 text-white hover:border-amber-300/50 hover:text-amber-100 focus-visible:outline-amber-300',
  ghost:
    'border-transparent bg-transparent text-slate-200 hover:bg-white/10 hover:text-white focus-visible:outline-amber-300',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-11 px-5 py-3 text-sm',
}

export type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  )
}

export type ButtonLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
}

export function ButtonLink({
  className,
  href,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      href={href}
      {...props}
    />
  )
}
