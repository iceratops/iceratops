'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/components/i18n/I18nProvider'
import Link from '@/components/i18n/LocalizedLink'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { headerNavItems, primaryCta, workflowReviewFormId } from '@/content/navigation'
import { cx } from '@/lib/classes'
import { unlocalizedPath } from '@/lib/i18n'

export function Header() {
  const { t } = useI18n()
  const pathname = usePathname()
  const [isInteractive, setIsInteractive] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const mobileNavRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setIsInteractive(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Move focus into the open drawer, keep keyboard focus inside it, and return
  // focus to the toggle when Escape closes it.
  useEffect(() => {
    if (!open) return
    const nav = mobileNavRef.current
    const focusable = Array.from(
      nav?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
    )
    if (focusable.length === 0) return

    const focusFrame = window.requestAnimationFrame(() => focusable[0]?.focus())
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the drawer on any navigation, including the logo link, which lives
  // outside the drawer and would otherwise leave it hanging open.
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is only a trigger to close the drawer after navigation.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Keep the page from scrolling behind the open drawer's backdrop.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // If the viewport grows past the desktop breakpoint while the drawer is
  // open, close it so the scroll lock cannot outlive the hidden drawer.
  useEffect(() => {
    if (!open) return
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (query.matches) setOpen(false)
    }
    onChange()
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [open])

  // Exact matches only: the site has no nested public routes, and prefix
  // matching would wrongly highlight parents if any are ever added. Trailing
  // slashes are normalized so a trailingSlash config change cannot break this.
  const path = unlocalizedPath(pathname)
  const normalizedPath = path.length > 1 ? path.replace(/\/$/, '') : path
  const isActive = (href: string) => normalizedPath === href

  // The CTA never disappears. On the form page itself it scrolls to the form
  // instead of navigating away; everywhere else (including the success page) it
  // links to the form route. Same behaviour on desktop and mobile.
  const onFormPage = normalizedPath === primaryCta.href
  const ctaHref = onFormPage ? `#${workflowReviewFormId}` : primaryCta.href

  return (
    <header
      className={cx(
        'sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-slate-950/70'
          : 'border-b border-transparent bg-slate-950/30',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-2 sm:gap-4">
        <Link
          aria-label={t('Iceratops home')}
          className="inline-flex h-11 min-w-0 max-w-44 flex-1 items-center overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          href="/"
        >
          <Image
            alt="Iceratops"
            className="h-auto w-full"
            height={144}
            priority
            src="/iceratops_text_logo.svg"
            width={350}
          />
        </Link>

        <nav aria-label={t('Main navigation')} className="hidden items-center gap-1 lg:flex">
          {headerNavItems.map((item) => (
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
              {t(item.label)}
            </Link>
          ))}
          <ButtonLink className="ms-2" href={ctaHref} size="sm">
            {t(primaryCta.label)}
          </ButtonLink>
        </nav>

        <ButtonLink
          className="min-h-11 flex-none px-3 py-2 text-xs lg:hidden"
          href={ctaHref}
          size="sm"
        >
          {t(primaryCta.label)}
        </ButtonLink>

        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={t(open ? 'Close menu' : 'Open menu')}
          className={cx(
            'inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-white/10 text-slate-200 transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 lg:hidden',
            !isInteractive && 'invisible',
          )}
          disabled={!isInteractive}
          onClick={() => setOpen((value) => !value)}
          ref={toggleRef}
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

      <noscript>
        <nav
          aria-label={t('Navigation without JavaScript')}
          className="border-t border-white/10 bg-slate-950/90 lg:hidden"
        >
          <Container className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3 text-sm font-semibold text-slate-200">
            {headerNavItems.map((item) => (
              <Link
                className="py-2 underline-offset-4 hover:underline"
                href={item.href}
                key={item.href}
              >
                {t(item.label)}
              </Link>
            ))}
          </Container>
        </nav>
      </noscript>

      {/* Backdrop: gently fades the page behind the open drawer. */}
      <button
        aria-hidden="true"
        className={cx(
          'fixed inset-x-0 bottom-0 top-16 z-40 cursor-default bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => {
          setOpen(false)
          toggleRef.current?.focus()
        }}
        tabIndex={-1}
        type="button"
      />

      {/* Drawer: animates height + opacity open and closed via a CSS grid trick. */}
      <div
        className={cx(
          'relative z-50 grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none lg:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <nav
          aria-label={t('Mobile navigation')}
          className="min-h-0 overflow-hidden bg-slate-950/70"
          id="mobile-nav"
          inert={!open || undefined}
          ref={mobileNavRef}
        >
          <Container className="flex flex-col gap-1 pb-5 pt-1">
            {headerNavItems.map((item) => (
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
                {t(item.label)}
              </Link>
            ))}
          </Container>
        </nav>
      </div>
    </header>
  )
}
