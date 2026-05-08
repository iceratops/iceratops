import type { ComponentProps } from 'react'
import { cx } from '@/lib/classes'

type SectionProps = ComponentProps<'section'> & {
  eyebrow?: string
  title?: string
  description?: string
}

export function Section({
  className,
  eyebrow,
  title,
  description,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cx('py-14 sm:py-16 lg:py-20', className)} {...props}>
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow && <p className="text-sm font-semibold text-amber-300">{eyebrow}</p>}
          {title && (
            <h2 className="font-orbitron mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              {title}
            </h2>
          )}
          {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
