import type { ComponentProps } from 'react'
import { cx } from '@/lib/classes'

type SectionSurface = 'plain' | 'panel'

type SectionProps = ComponentProps<'section'> & {
  eyebrow?: string
  title?: string
  description?: string
  /**
   * `panel` adds a subtle banded surface (hairline top and bottom, faint fill,
   * soft top glow) to set procedural sections apart from plain ones.
   */
  surface?: SectionSurface
}

export function Section({
  className,
  eyebrow,
  title,
  description,
  surface = 'plain',
  children,
  ...props
}: SectionProps) {
  const header =
    eyebrow || title || description ? (
      <div className="mb-8 max-w-3xl">
        {eyebrow && <p className="text-sm font-semibold text-amber-300">{eyebrow}</p>}
        {title && (
          <h2 className="font-orbitron mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {title}
          </h2>
        )}
        {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
      </div>
    ) : null

  if (surface === 'panel') {
    return (
      <section
        className={cx(
          'relative border-y border-white/[0.06] bg-white/[0.02] py-14 sm:py-16 lg:py-20',
          className,
        )}
        {...props}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-300/[0.05] to-transparent"
        />
        <div className="relative">
          {header}
          {children}
        </div>
      </section>
    )
  }

  return (
    <section className={cx('py-14 sm:py-16 lg:py-20', className)} {...props}>
      {header}
      {children}
    </section>
  )
}
