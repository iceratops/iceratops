import type { ComponentProps } from 'react'
import { ServiceCard } from '@/components/marketing/services/ServiceCard'
import type { Service } from '@/content/services'
import { cx } from '@/lib/classes'

type ServiceCardGridProps = ComponentProps<'div'> & {
  services: readonly Service[]
}

export function ServiceCardGrid({ className, services, ...props }: ServiceCardGridProps) {
  return (
    <div className={cx('grid gap-5 md:grid-cols-2 lg:grid-cols-3', className)} {...props}>
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  )
}
