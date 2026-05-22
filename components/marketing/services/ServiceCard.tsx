import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import type { Service } from '@/content/services'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <p className="border-l-2 border-[#fbbf24] pl-3 text-sm font-semibold leading-6 text-amber-100">
        {service.outcome}
      </p>
      <CardTitle className="mt-4">{service.name}</CardTitle>
      <CardText>{service.summary}</CardText>
      <ul className="mt-5 space-y-2 pl-5 text-sm leading-6 text-slate-300">
        {service.highlights.map((highlight) => (
          <li className="list-disc" key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>
    </Card>
  )
}
