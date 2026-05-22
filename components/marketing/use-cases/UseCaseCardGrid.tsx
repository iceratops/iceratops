import type { ComponentProps } from 'react'
import { UseCaseCard } from '@/components/marketing/use-cases/UseCaseCard'
import type { UseCase } from '@/content/use-cases'
import { cx } from '@/lib/classes'

type UseCaseCardGridProps = ComponentProps<'div'> & {
  useCases: readonly UseCase[]
}

export function UseCaseCardGrid({ className, useCases, ...props }: UseCaseCardGridProps) {
  return (
    <div className={cx('grid gap-5 md:grid-cols-2 lg:grid-cols-3', className)} {...props}>
      {useCases.map((useCase) => (
        <UseCaseCard key={useCase.slug} useCase={useCase} />
      ))}
    </div>
  )
}
