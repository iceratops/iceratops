import Link from 'next/link'
import { Container } from '@/components/primitives/Container'
import { primaryNavItems } from '@/content/navigation'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.2fr_1fr] sm:items-start">
        <div>
          <p className="font-orbitron text-lg font-semibold text-white">Iceratops</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">{site.footerTagline}</p>
          <a
            className="mt-4 inline-block text-sm text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            href={`mailto:${site.contact.email}`}
          >
            {site.contact.email}
          </a>
        </div>

        <nav aria-label="Footer navigation" className="sm:justify-self-end">
          <ul className="flex flex-col gap-3 sm:items-end">
            {primaryNavItems.map((item) => (
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
      </Container>
      <Container className="border-t border-white/10 py-5">
        <p className="text-sm text-slate-400">
          Copyright {new Date().getFullYear()} Iceratops. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
