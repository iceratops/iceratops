import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { primaryCta, primaryNavItems } from '@/content/navigation'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link
          aria-label="Iceratops home"
          className="inline-flex w-fit rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          href="/"
        >
          <Image
            alt="Iceratops"
            className="h-auto w-44 sm:w-48"
            height={48}
            priority
            src="/iceratops_text_logo.svg"
            width={220}
          />
        </Link>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
          <nav
            aria-label="Main navigation"
            className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 sm:flex sm:flex-wrap"
          >
            {primaryNavItems.map((item) => (
              <Link
                className="rounded-lg px-3 py-2 text-center text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink className="w-full sm:w-auto" href={primaryCta.href} size="sm">
            {primaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </header>
  )
}
