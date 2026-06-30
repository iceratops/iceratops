import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Card } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { homePage } from '@/content/site'

const icons = [
  <svg
    aria-hidden="true"
    fill="none"
    key="site"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
  >
    <rect height="13" rx="2" width="18" x="3" y="4" />
    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
  </svg>,
  <svg
    aria-hidden="true"
    fill="none"
    key="inbox"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
  >
    <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    <rect height="14" rx="2" width="18" x="3" y="5" />
  </svg>,
  <svg
    aria-hidden="true"
    fill="none"
    key="spark"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 3l2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
]

export function WhatWeDo() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{homePage.whatWeDo.eyebrow}</Eyebrow>
          <h2 className="font-orbitron mt-4 break-words text-2xl font-bold leading-tight text-white sm:text-3xl">
            {homePage.whatWeDo.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{homePage.whatWeDo.description}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {homePage.whatWeDo.items.map((item, index) => (
            <Card key={item.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/25 bg-amber-300/10 text-amber-300 [&>svg]:h-5 [&>svg]:w-5">
                {icons[index]}
              </span>
              <h3 className="font-orbitron mt-5 text-lg font-semibold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-300">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
