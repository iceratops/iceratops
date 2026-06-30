'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { primaryCta, primaryNavItems } from '@/content/navigation'
import { cx } from '@/lib/classes'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const hideCta = pathname.startsWith('/contact')

  return (
    <header
      className={cx(
        'sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-slate-950/70'
          : 'border-b border-transparent bg-slate-950/30',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          aria-label="Iceratops home"
          className="inline-flex w-fit rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          href="/"
        >
          <Image
            alt="Iceratops"
            className="h-auto w-40 sm:w-44"
            height={48}
            priority
            src="/iceratops_text_logo.svg"
            width={220}
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {primaryNavItems.map((item) => (
            <Link
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cx(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300',
                isActive(item.href)
                  ? 'text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white',
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          {!hideCta && (
            <ButtonLink className="ml-2" href={primaryCta.href} size="sm">
              {primaryCta.label}
            </ButtonLink>
          )}
        </nav>

        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav aria-label="Mobile navigation" className="lg:hidden" id="mobile-nav">
          <Container className="flex flex-col gap-1 pb-5 pt-1">
            {primaryNavItems.map((item) => (
              <Link
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cx(
                  'rounded-lg px-3 py-3 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300',
                  isActive(item.href)
                    ? 'bg-white/5 text-white'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white',
                )}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {!hideCta && (
              <ButtonLink
                className="mt-3 w-full"
                href={primaryCta.href}
                onClick={() => setOpen(false)}
              >
                {primaryCta.label}
              </ButtonLink>
            )}
          </Container>
        </nav>
      )}
    </header>
  )
}
