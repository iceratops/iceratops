import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'

const engagements = [
  {
    title: 'Focused projects',
    text: 'A one-off build or improvement with a clear finish. A website refresh, a useful internal tool, or an integration between existing systems.',
  },
  {
    title: 'Custom software & systems',
    text: 'Applications, digital products, and connected platforms built around your requirements. We define the scope and deliver in manageable stages.',
  },
  {
    title: 'Ongoing support',
    text: 'Maintenance, improvements, and technical guidance as your needs change. Agree on the support that fits your team and your systems.',
  },
] as const

export function Engagements() {
  return (
    <section
      className="relative scroll-mt-24 border-t border-white/[0.06] bg-white/[0.02] py-14 sm:py-16 lg:py-20"
      id="engagements"
    >
      <Container>
        <div className="reveal max-w-2xl">
          <Eyebrow>Ways to work together</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            A focused project or a longer partnership.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Bring us one thing to improve or a larger system to build. We&rsquo;ll agree on scope,
            timing, and cost before work begins.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {engagements.map((engagement) => (
            <div
              className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              key={engagement.title}
            >
              <h3 className="font-orbitron text-lg font-semibold leading-snug text-white">
                {engagement.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{engagement.text}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-6 max-w-3xl text-sm leading-6 text-slate-400">
          No long contracts to start. Ownership of custom project deliverables and any software
          licenses are agreed in the scope, with clear documentation for your team.
        </p>
      </Container>
    </section>
  )
}
