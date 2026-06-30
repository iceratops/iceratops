import { Eyebrow } from '@/components/marketing/Eyebrow'
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
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white sm:text-3xl">
          {title}
        </h2>
      )}
      {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
    </div>
  )
}
