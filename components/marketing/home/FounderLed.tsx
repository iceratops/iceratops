import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'

export function FounderLed() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="reveal max-w-2xl border-l-2 border-amber-300/40 pl-6 sm:pl-8">
          <Eyebrow>Why Iceratops</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Founder-led, without the agency runaround.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Iceratops is a small, hands-on studio for owners who want a cleaner website and a better
            way to handle inquiries. You work directly with the person mapping the workflow and
            building the system. Decisions stay clear, the setup stays practical, and the handoff is
            easy to understand.
          </p>
        </div>
      </Container>
    </section>
  )
}
