import { ButtonLink } from '@/components/primitives/Button'
import { Card, CardText, CardTitle } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { primaryCta } from '@/content/navigation'

type RouteShellProps = {
  eyebrow: string
  title: string
  description: string
  path: string
  secondaryAction?: {
    href: string
    label: string
  }
}

export function RouteShell({
  eyebrow,
  title,
  description,
  path,
  secondaryAction = {
    href: '/services',
    label: 'View services',
  },
}: RouteShellProps) {
  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-amber-300">{eyebrow}</p>
          <h1 className="font-orbitron mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href={secondaryAction.href}
              variant="secondary"
            >
              {secondaryAction.label}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <CardTitle>Status</CardTitle>
            <CardText>Route shell ready for Phase 1B content.</CardText>
          </Card>
          <Card>
            <CardTitle>Path</CardTitle>
            <CardText>{path}</CardText>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
