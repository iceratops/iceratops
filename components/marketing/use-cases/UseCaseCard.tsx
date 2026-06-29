import Link from 'next/link'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import type { UseCase } from '@/content/use-cases'

type UseCaseCardProps = {
  useCase: UseCase
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardTitle as="h3" className="text-lg">
        {useCase.name}
      </CardTitle>
      <CardText>{useCase.summary}</CardText>
      <div className="mt-auto pt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Where we usually help
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {useCase.services.map((service) => (
            <Link
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium leading-5 text-slate-200 transition-colors hover:border-amber-300/40 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </Card>
  )
}
