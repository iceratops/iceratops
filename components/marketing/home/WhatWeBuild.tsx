import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'

const cards = [
  {
    title: 'Custom software & digital products',
    text: 'Focused web applications, internal tools, operational platforms, and product prototypes built around a clear need.',
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
    title: 'Websites & digital experiences',
    text: 'Modern websites and maintainable front ends with clear content, useful inquiry paths, and a strong experience on every screen.',
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
    title: 'Workflow automation & AI',
    text: 'Practical automation for requests, follow-up, and administration, with human controls for consequential decisions.',
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
  {
    title: 'Systems & integrations',
    text: 'API integrations, reliable data flows, and cloud-connected applications that make fragmented processes easier to run.',
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        viewBox="0 0 24 24"
      >
        <path d="M8 8h8v8H8zM3 12h5M16 12h5M12 3v5M12 16v5" strokeLinecap="round" />
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
            Technology that supports the way your organization works.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Iceratops works with founders, operators, and established teams. Engagements range from
            focused improvements to custom platforms and connected systems.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
