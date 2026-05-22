import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import type { UseCase } from '@/content/use-cases'

type UseCaseCardProps = {
  useCase: UseCase
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardTitle>{useCase.name}</CardTitle>
      <CardText>{useCase.summary}</CardText>
      <div className="mt-5 flex flex-wrap gap-2">
        {useCase.helpfulWorkflows.map((workflow) => (
          <span
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium leading-5 text-slate-200"
            key={workflow}
          >
            {workflow}
          </span>
        ))}
      </div>
    </Card>
  )
}
