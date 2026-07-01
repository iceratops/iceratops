'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Adds the `is-in` class to elements marked with `reveal` as they scroll into
 * view, driving the subtle fade-and-rise animation defined in globals.css.
 * Respects prefers-reduced-motion (everything is shown immediately) and
 * re-scans on route changes so each page animates its own content. A noscript
 * fallback in the document head keeps content visible when JavaScript is off.
 */
export function RevealOnScroll() {
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is only a trigger to re-scan reveal targets after navigation.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not([data-rev])'))
    if (els.length === 0) return

    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || typeof IntersectionObserver === 'undefined') {
      for (const el of els) {
        el.setAttribute('data-rev', '1')
        el.classList.add('is-in')
      }
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    const viewport = window.innerHeight || 800
    for (const el of els) {
      el.setAttribute('data-rev', '1')
      observer.observe(el)
      const rect = el.getBoundingClientRect()
      if (rect.top < viewport * 0.92 && rect.bottom > 0) {
        el.classList.add('is-in')
      }
    }

    const fallback = window.setTimeout(() => {
      const pending = document.querySelectorAll<HTMLElement>('.reveal[data-rev]:not(.is-in)')
      for (const el of pending) {
        const rect = el.getBoundingClientRect()
        if (rect.top < (window.innerHeight || 800) * 1.15) {
          el.classList.add('is-in')
        }
      }
    }, 1600)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [pathname])

  return null
}
