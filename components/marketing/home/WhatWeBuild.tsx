import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'

const cards = [
  {
    title: 'Modern websites',
    text: 'Fast, clear sites built around your real services, with contact paths a busy owner can keep up with.',
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        viewBox="0 0 24 24"
      >
        <rect height="13" rx="2" width="18" x="3" y="4" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Inquiry capture & follow-up',
    text: 'Every form, text, call, and DM lands in one place. AI drafts a reply in your voice, you approve it, and no lead waits.',
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        viewBox="0 0 24 24"
      >
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        <rect height="14" rx="2" width="18" x="3" y="5" />
      </svg>
    ),
  },
  {
    title: 'Less scattered admin',
    text: 'Requests sorted, trackers updated, reminders sent. The repetitive work handled, with you in control.',
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 3l2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function WhatWeBuild() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="reveal max-w-2xl">
          <Eyebrow>What we build</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            A website that brings leads in, and a system that never drops them.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Two things, done properly: a clear site that makes people reach out, and a simple,
            human-reviewed workflow that captures every request and follows up until it turns into
            work.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 sm:p-7"
              key={card.title}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/25 bg-amber-300/10 text-amber-300">
                {card.icon}
              </span>
              <h3 className="font-orbitron mt-5 text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-300">{card.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
