import Link from 'next/link'
import { footerNavGroups, primaryCta } from '@/components/nav/navigation'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <Container className="grid gap-10 py-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-orbitron text-lg font-semibold text-white">Iceratops</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
            Founder-led in Pflugerville, TX. Site foundation ready for the rebuild.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} size="sm">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="mailto:hello@iceratops.com" size="sm" variant="secondary">
              hello@iceratops.com
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerNavGroups.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <h2 className="text-sm font-semibold text-amber-300">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="text-sm text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>
      <Container className="border-t border-white/10 py-5">
        <p className="text-sm text-slate-400">
          Copyright {new Date().getFullYear()} Iceratops. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
