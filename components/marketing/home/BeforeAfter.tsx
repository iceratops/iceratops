import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'

const beforeChips = [
  { label: 'Missed call', rotate: '-rotate-2', blink: true },
  { label: 'Web form', rotate: 'rotate-1' },
  { label: 'Text message', rotate: 'rotate-2' },
  { label: 'Facebook message', rotate: '-rotate-1', blink: true },
  { label: 'Email', rotate: 'rotate-1' },
  { label: 'Sticky note', rotate: '-rotate-2', muted: true },
  { label: 'Voicemail', rotate: 'rotate-2', muted: true },
]

const formIcon = (
  <svg
    aria-hidden="true"
    fill="none"
    height="15"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    width="15"
  >
    <rect height="18" rx="2" width="14" x="5" y="3" />
    <path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" />
  </svg>
)
const chatIcon = (
  <svg
    aria-hidden="true"
    fill="none"
    height="15"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    width="15"
  >
    <path
      d="M21 12a8 8 0 01-8 8H7l-4 3 1.2-5A8 8 0 1121 12z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const calendarIcon = (
  <svg
    aria-hidden="true"
    fill="none"
    height="15"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    width="15"
  >
    <rect height="16" rx="2" width="18" x="3" y="5" />
    <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
)

const afterRows = [
  {
    icon: formIcon,
    label: 'Web form · quote request',
    badge: 'New',
    badgeClass: 'bg-amber-400/90 text-slate-950 io-pulse',
    rowClass: 'border-white/10 bg-slate-950/40',
  },
  {
    icon: chatIcon,
    label: 'Text · availability?',
    badge: 'Replied',
    badgeClass: 'bg-emerald-400/15 text-emerald-300',
    rowClass: 'border-white/10 bg-slate-950/40',
  },
  {
    icon: chatIcon,
    label: 'Facebook · pricing?',
    badge: 'Follow-up',
    badgeClass: 'bg-white/10 text-slate-300',
    rowClass: 'border-white/10 bg-slate-950/40',
  },
  {
    icon: calendarIcon,
    label: 'Email · booked Tue 9am',
    badge: 'Booked',
    badgeClass: 'bg-amber-300/20 text-amber-200',
    rowClass: 'border-amber-300/25 bg-amber-300/[0.07]',
    glow: true,
  },
]

export function BeforeAfter() {
  return (
    <section
      className="relative scroll-mt-24 border-y border-white/[0.06] bg-white/[0.02] py-14 sm:py-16 lg:py-20"
      id="before-after"
    >
      <Container className="relative">
        <div className="reveal max-w-2xl">
          <Eyebrow>Before &amp; after</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            From scattered inquiries to one organized system.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Today your leads are spread across forms, texts, calls, Facebook, and sticky notes. We
            pull them into one place you actually check, with a reply and a follow-up for every one.
          </p>
        </div>
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <div className="reveal flex flex-col rounded-2xl border border-white/10 bg-slate-950/40 p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-300">
                Before
              </span>
              <p className="text-sm font-semibold text-slate-300">Inquiries everywhere</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {beforeChips.map((chip) => (
                <span
                  className={`inline-flex ${chip.rotate} items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium ${chip.muted ? 'text-slate-400' : 'text-slate-300'}`}
                  key={chip.label}
                >
                  {chip.blink && (
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80 io-blink" />
                  )}
                  {chip.label}
                </span>
              ))}
            </div>
            <p className="mt-auto pt-6 text-sm leading-6 text-slate-400">
              Some get answered. Some get forgotten. You can&rsquo;t tell which, and the quiet ones
              were often ready to buy.
            </p>
          </div>

          <div
            className="reveal flex items-center justify-center"
            style={{ transitionDelay: '120ms' }}
          >
            <span className="flex h-11 w-11 rotate-90 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-300 lg:rotate-0">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.9}
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <div className="flex flex-col rounded-2xl border border-amber-300/25 bg-amber-300/[0.04] p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full border border-amber-300/40 bg-amber-300/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-200">
                After
              </span>
              <p className="text-sm font-semibold text-white">One organized inbox</p>
            </div>
            <div className="mt-6 space-y-2.5">
              {afterRows.map((row, index) => (
                <div
                  className={`reveal flex items-center gap-3 rounded-xl border px-3.5 py-3 ${row.rowClass}`}
                  key={row.label}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <span
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-md bg-amber-300/[0.12] text-amber-300 ${row.glow ? 'io-glow' : ''}`}
                  >
                    {row.icon}
                  </span>
                  <p className="min-w-0 flex-1 truncate text-sm font-medium text-white">
                    {row.label}
                  </p>
                  <span
                    className={`flex-none rounded-full px-2 py-0.5 text-[10px] font-bold ${row.badgeClass}`}
                  >
                    {row.badge}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-6 text-sm leading-6 text-slate-300">
              Captured, replied to, and followed up, all in one view you check in minutes, not all
              day.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
