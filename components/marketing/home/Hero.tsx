import Image from 'next/image'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { primaryCta } from '@/content/navigation'

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <Container className="relative grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10">
        <div className="reveal max-w-xl">
          <Image
            alt=""
            aria-hidden="true"
            className="mb-5 h-10 w-auto"
            height={98}
            src="/iceratops_mark.svg"
            width={156}
          />
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200">
            Pflugerville, TX &middot; Founder-led
          </p>
          <h1 className="font-orbitron mt-6 text-[2rem]/[1.18] font-bold text-white sm:text-[2.6rem]/[1.14] lg:text-[3.1rem]/[1.12]">
            Stop losing jobs to inquiries you <span className="gradient-text">never get to</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Forms, calls, texts, email, social DMs, and more. Your leads arrive everywhere and slip
            through the cracks. We build a clean website and a simple, human-reviewed system that
            captures every inquiry, replies fast, and follows up until it turns into a booking.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href={primaryCta.href}>
              {primaryCta.label}
            </ButtonLink>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/50 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              href="#before-after"
            >
              See how it works
            </a>
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-400">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300"
            />
            Free review &middot; no long contracts &middot; reply within one business day.
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="reveal relative mx-auto hidden w-full max-w-md pb-10 md:mr-0 md:block"
      style={{ transitionDelay: '140ms' }}
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/40 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-400">
            yoursite.com
          </span>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-white/20" />
            <div className="flex gap-2">
              <div className="h-2 w-9 rounded bg-white/10" />
              <div className="h-2 w-9 rounded bg-white/10" />
              <div className="h-2 w-9 rounded bg-white/10" />
            </div>
          </div>
          <div className="space-y-2.5 pt-1">
            <div className="h-4 w-4/5 rounded bg-white/25" />
            <div className="h-4 w-3/5 rounded bg-white/15" />
          </div>
          <div className="h-9 w-36 rounded-lg bg-amber-400" />
        </div>
      </div>

      <div className="absolute -bottom-2 -right-3 w-64 rounded-xl border border-white/10 bg-slate-950/90 p-4 shadow-xl shadow-slate-950/50 backdrop-blur sm:-right-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-white">Today&rsquo;s inquiries</p>
          <span className="rounded-full bg-amber-300/15 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
            3 new
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-amber-300/[0.12] text-amber-300">
              <svg
                aria-hidden="true"
                fill="none"
                height="13"
                stroke="currentColor"
                strokeWidth={1.9}
                viewBox="0 0 24 24"
                width="13"
              >
                <rect height="18" rx="2" width="14" x="5" y="3" />
                <path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" />
              </svg>
            </span>
            <p className="min-w-0 flex-1 truncate text-[11px] font-medium text-white">
              Web form &middot; quote request
            </p>
            <span className="flex-none rounded-full bg-amber-400/90 px-1.5 py-0.5 text-[9px] font-bold text-slate-950">
              New
            </span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-amber-300/[0.12] text-amber-300">
              <svg
                aria-hidden="true"
                fill="none"
                height="13"
                stroke="currentColor"
                strokeWidth={1.9}
                viewBox="0 0 24 24"
                width="13"
              >
                <path
                  d="M21 12a8 8 0 01-8 8H7l-4 3 1.2-5A8 8 0 1121 12z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="min-w-0 flex-1 truncate text-[11px] font-medium text-white">
              Text &middot; availability?
            </p>
            <span className="flex-none rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300">
              Replied
            </span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-amber-300/20 bg-amber-300/[0.06] px-2.5 py-2">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-amber-300/15 text-amber-300">
              <svg
                aria-hidden="true"
                fill="none"
                height="13"
                stroke="currentColor"
                strokeWidth={1.9}
                viewBox="0 0 24 24"
                width="13"
              >
                <rect height="16" rx="2" width="18" x="3" y="5" />
                <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
              </svg>
            </span>
            <p className="min-w-0 flex-1 truncate text-[11px] font-medium text-white">
              Email &middot; booked Tue 9am
            </p>
            <span className="flex-none rounded-full bg-amber-300/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-200">
              Booked
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
