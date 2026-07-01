import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import type { Service } from '@/content/services'

type ServiceCardProps = {
  service: Service
  /** Position in the grid, used to stagger the scroll-reveal animation. */
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Card
      className="reveal flex h-full flex-col"
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <p className="border-l-2 border-amber-400/70 pl-3 text-sm font-semibold leading-6 text-amber-100">
        {service.outcome}
      </p>
      <CardTitle as="h3" className="mt-4">
        {service.name}
      </CardTitle>
      <CardText>{service.summary}</CardText>
      <ul className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-5">
        {service.highlights.map((highlight) => (
          <li className="flex gap-2.5 text-sm leading-6 text-slate-300" key={highlight}>
            <svg
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 flex-none text-amber-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
