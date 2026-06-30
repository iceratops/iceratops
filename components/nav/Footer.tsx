import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/primitives/Container'
import { primaryNavItems } from '@/content/navigation'
import { site } from '@/content/site'

const linkClasses =
  'transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-slate-950/40">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-sm">
          <Image
            alt="Iceratops"
            className="h-6 w-auto"
            height={144}
            src="/iceratops_text_logo.svg"
            width={350}
          />
          <p className="mt-2 text-sm leading-6 text-slate-400">{site.footerTagline}</p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400"
        >
          {primaryNavItems.map((item) => (
            <Link className={linkClasses} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a
            className="transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            href={`mailto:${site.contact.email}`}
          >
            {site.contact.email}
          </a>
        </nav>
      </Container>
      <Container className="border-t border-white/[0.07] py-5">
        <p className="text-xs text-slate-500">
          Copyright {new Date().getFullYear()} Iceratops. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
