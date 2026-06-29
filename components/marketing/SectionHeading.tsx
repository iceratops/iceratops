import { cx } from '@/lib/classes'

type SectionHeadingProps = {
  eyebrow?: string
  title?: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cx('max-w-3xl', className)}>
      {eyebrow && <p className="text-sm font-semibold tracking-wide text-amber-300">{eyebrow}</p>}
      {title && (
        <h2 className="font-orbitron mt-3 break-words text-xl font-bold leading-tight text-white min-[390px]:text-2xl sm:text-3xl">
          {title}
        </h2>
      )}
      {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
    </div>
  )
}
