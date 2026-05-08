import type { ComponentProps } from 'react'
import { cx } from '@/lib/classes'

type ContainerSize = 'default' | 'wide' | 'narrow'

const sizeClasses: Record<ContainerSize, string> = {
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  narrow: 'max-w-4xl',
}

type ContainerProps = ComponentProps<'div'> & {
  size?: ContainerSize
}

export function Container({ className, size = 'default', ...props }: ContainerProps) {
  return (
    <div
      className={cx('mx-auto w-full px-5 sm:px-6 lg:px-8', sizeClasses[size], className)}
      {...props}
    />
  )
}
