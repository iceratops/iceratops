import Link from 'next/link'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import type { Service } from '@/content/services'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      className="group block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
      href={`/services/${service.slug}`}
    >
      <Card className="flex h-full flex-col group-hover:border-amber-300/30">
        <p className="border-l-2 border-amber-400 pl-3 text-sm font-semibold leading-6 text-amber-100">
          {service.outcome}
        </p>
        <CardTitle as="h3" className="mt-4">
          {service.name}
        </CardTitle>
        <CardText>{service.summary}</CardText>
        <ul className="mt-5 space-y-2 pl-5 text-sm leading-6 text-slate-300">
          {service.highlights.map((highlight) => (
            <li className="list-disc" key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber-300">
          Learn more
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </Card>
    </Link>
  )
}
