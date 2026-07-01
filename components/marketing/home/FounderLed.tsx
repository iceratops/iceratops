import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'

const cards = [
  {
    title: 'Direct access',
    text: 'Work with the person building the system, not an account manager.',
  },
  {
    title: 'Practical by default',
    text: 'Clean websites, simple workflows, AI-assisted follow-up, and clear requirements.',
  },
  {
    title: 'Yours to keep',
    text: 'Documented systems and a simple handoff you can actually run.',
  },
]

export function FounderLed() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="reveal max-w-2xl border-l-2 border-amber-300/40 pl-6 sm:pl-8">
          <Eyebrow>Why Iceratops</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Founder-led, without the agency runaround.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Iceratops is a small, hands-on studio for owners who want a cleaner website and a better
            way to handle inquiries. You work directly with the person mapping the workflow and
            building the system, so decisions stay clear, the setup stays practical, and the handoff
            is easy to understand.
          </p>
        </div>
        <div className="reveal grid gap-4" style={{ transitionDelay: '120ms' }}>
          {cards.map((card) => (
            <div
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              key={card.title}
            >
              <h3 className="font-orbitron text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
