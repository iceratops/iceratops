'use client'

import { type CSSProperties, useEffect, useReducer, useRef, useState } from 'react'
import { Eyebrow } from '@/components/marketing/Eyebrow'
import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'

const CUSTOMER_MESSAGE =
  'Hi, I need a water heater replacement. Do you have anything Tuesday afternoon?'
const APPROVED_REPLY =
  'Hi Maya, yes. We have Tuesday at 2:00 PM or Wednesday at 10:00 AM. Which works better?'
const CUSTOMER_CONFIRMATION = 'Tuesday at 2 works. Thank you!'
const CUSTOMER_MESSAGE_WORDS = CUSTOMER_MESSAGE.split(' ')
const TYPING_WORD_INTERVAL_MS = 250
const TYPING_WORD_REVEAL_MS = 300
const TYPING_CURSOR_DELAY_MS =
  (CUSTOMER_MESSAGE_WORDS.length - 1) * TYPING_WORD_INTERVAL_MS + TYPING_WORD_REVEAL_MS

const PHASES = ['Inquiry', 'Reply', 'Confirmed', 'Service'] as const
type Phase = (typeof PHASES)[number]
type SceneId =
  | 'compose'
  | 'send'
  | 'inbox'
  | 'approved-reply'
  | 'customer-reply'
  | 'calendar'
  | 'service'
  | 'payoff'

type StoryScene = {
  id: SceneId
  durationMs: number
  phase: Phase
  caption: string
}

const SCENES: StoryScene[] = [
  {
    id: 'compose',
    durationMs: 5000,
    phase: 'Inquiry',
    caption: 'A customer starts with one simple availability question.',
  },
  {
    id: 'send',
    durationMs: 1400,
    phase: 'Inquiry',
    caption: 'The message moves into the business workflow.',
  },
  {
    id: 'inbox',
    durationMs: 2200,
    phase: 'Inquiry',
    caption: 'The inquiry arrives organized and ready to act on.',
  },
  {
    id: 'approved-reply',
    durationMs: 3800,
    phase: 'Reply',
    caption: 'AI uses a response rule the business has already approved.',
  },
  {
    id: 'customer-reply',
    durationMs: 2200,
    phase: 'Reply',
    caption: 'The customer picks the time that works.',
  },
  {
    id: 'calendar',
    durationMs: 2900,
    phase: 'Confirmed',
    caption: 'The selected appointment lands on the business calendar.',
  },
  {
    id: 'service',
    durationMs: 3800,
    phase: 'Service',
    caption: 'The clean handoff gives the technician the job context.',
  },
  {
    id: 'payoff',
    durationMs: 3700,
    phase: 'Service',
    caption: 'One connected story, from first message to service.',
  },
]

const STATIC_SUMMARY = [
  {
    number: '01',
    title: 'Inquiry received',
    detail: 'Maya asks about a replacement and Tuesday availability.',
  },
  {
    number: '02',
    title: 'Reply prepared',
    detail: 'An approved response rule offers two appointment times.',
  },
  {
    number: '03',
    title: 'Appointment confirmed',
    detail: 'Tuesday at 2:00 PM is added to the business calendar.',
  },
  {
    number: '04',
    title: 'Service scheduled',
    detail: 'The technician receives the scheduled job and customer notes.',
  },
]

type PlayerState = {
  sceneIndex: number
  previousSceneIndex: number | null
  manuallyPaused: boolean
  cycle: number
}

type PlayerAction = { type: 'advance' } | { type: 'toggle-pause' } | { type: 'replay' }

const initialPlayerState: PlayerState = {
  sceneIndex: 0,
  previousSceneIndex: null,
  manuallyPaused: false,
  cycle: 0,
}

function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'advance': {
      const nextSceneIndex = (state.sceneIndex + 1) % SCENES.length
      return {
        ...state,
        sceneIndex: nextSceneIndex,
        previousSceneIndex: state.sceneIndex,
        cycle: nextSceneIndex === 0 ? state.cycle + 1 : state.cycle,
      }
    }
    case 'toggle-pause':
      return { ...state, manuallyPaused: !state.manuallyPaused }
    case 'replay':
      return {
        sceneIndex: 0,
        previousSceneIndex: state.sceneIndex,
        manuallyPaused: false,
        cycle: state.cycle + 1,
      }
    default:
      return state
  }
}

function StaticSummaryCards() {
  return (
    <div className="grid h-full content-center gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
      {STATIC_SUMMARY.map((item) => (
        <article
          className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 sm:p-5"
          key={item.title}
        >
          <div className="flex items-center gap-3">
            <span className="font-orbitron text-xs font-bold text-amber-300">{item.number}</span>
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
        </article>
      ))}
    </div>
  )
}

function BrandDot({ label }: { label: string }) {
  return (
    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 font-orbitron text-xs font-bold text-amber-200">
      {label}
    </span>
  )
}

function TypingMessage() {
  return (
    <span>
      {CUSTOMER_MESSAGE_WORDS.map((word, index) => (
        <span
          className="io-typing-word"
          key={word}
          style={
            {
              '--io-word-delay': `${index * TYPING_WORD_INTERVAL_MS}ms`,
            } as CSSProperties
          }
        >
          {word}{' '}
        </span>
      ))}
      <span
        aria-hidden="true"
        className="io-story-cursor"
        style={{ '--io-cursor-delay': `${TYPING_CURSOR_DELAY_MS}ms` } as CSSProperties}
      />
    </span>
  )
}

function ComposeScene() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-950/75 shadow-2xl shadow-purple-950/40">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <BrandDot label="AC" />
            <div>
              <p className="text-sm font-semibold text-white">Acme Plumbing Co.</p>
              <p className="text-xs text-slate-400">Website inquiry</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-200">
            Online
          </span>
        </div>
        <div className="bg-white/[0.035] p-4 sm:p-6">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-400/15 text-sm font-bold text-purple-200">
                M
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Maya</p>
                <p className="text-xs text-slate-400">How can we help?</p>
              </div>
            </div>
            <div className="mt-4 min-h-28 rounded-xl border border-white/10 bg-white/[0.05] p-4 text-base leading-7 text-slate-100">
              <TypingMessage />
            </div>
            <div className="mt-3 flex justify-end">
              <span className="io-compose-send inline-flex min-h-11 items-center rounded-xl bg-amber-300 px-5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-300/10">
                Send
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SendScene() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col justify-center">
      <div className="relative h-64 rounded-3xl border border-white/10 bg-slate-950/45 p-5 sm:h-60 sm:p-7">
        <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-8 sm:top-8">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-400/15 text-sm font-bold text-purple-200">
            M
          </span>
          <span className="text-sm font-semibold text-slate-300">Customer</span>
        </div>
        <div className="absolute bottom-5 right-5 flex items-center gap-3 sm:bottom-8 sm:right-8">
          <span className="text-sm font-semibold text-slate-300">Acme inbox</span>
          <BrandDot label="AC" />
        </div>
        <div className="io-flight-path absolute left-16 right-16 top-1/2 h-px bg-gradient-to-r from-purple-300/20 via-amber-300/50 to-emerald-300/20" />
        <div className="io-flight-bubble absolute left-1/2 top-1/2 max-w-52 rounded-2xl rounded-br-md border border-amber-300/25 bg-slate-900 px-4 py-3 text-sm leading-5 text-white shadow-2xl shadow-purple-950/60">
          Water heater replacement, Tuesday afternoon?
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-amber-200">Moving to Acme inbox</p>
    </div>
  )
}

function InboxScene() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="relative rounded-3xl border border-white/15 bg-slate-950/75 p-4 shadow-2xl shadow-purple-950/40 sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="font-orbitron text-sm font-bold text-white">Inquiry inbox</p>
            <p className="mt-1 text-xs text-slate-400">Acme Plumbing Co.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" /> Connected
          </span>
        </div>
        <div className="io-inbox-row mt-4 flex items-start gap-3 rounded-2xl border border-amber-300/30 bg-amber-300/[0.07] p-4">
          <BrandDot label="W" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-white">Maya · Website</p>
              <span className="rounded-full bg-amber-300 px-2.5 py-1 text-[11px] font-bold text-slate-950">
                New
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{CUSTOMER_MESSAGE}</p>
          </div>
        </div>
        <div className="io-notification-toast mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 shadow-xl sm:absolute sm:-right-6 sm:-top-8 sm:mt-0 sm:max-w-xs">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-emerald-300/10 text-lg text-emerald-200">
            ✓
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
              New website inquiry
            </p>
            <p className="mt-1 text-sm font-medium text-white">Water heater replacement</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ThreadHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-400/15 text-sm font-bold text-purple-200">
          M
        </span>
        <div>
          <p className="text-sm font-semibold text-white">Maya</p>
          <p className="text-xs text-slate-400">Water heater replacement</p>
        </div>
      </div>
      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
        Website
      </span>
    </div>
  )
}

function ApprovedReplyScene() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/15 bg-slate-950/75 p-4 shadow-2xl shadow-purple-950/40 sm:p-6">
      <ThreadHeader />
      <div className="mt-4 space-y-3">
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-purple-400/15 px-4 py-3 text-sm leading-6 text-purple-50">
          {CUSTOMER_MESSAGE}
        </div>
        <div className="io-reply-bubble max-w-[92%] rounded-2xl rounded-bl-md border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-3 text-sm leading-6 text-slate-100">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-emerald-200">
            <span className="font-orbitron">AI</span>
            <span>Approved reply</span>
          </div>
          {APPROVED_REPLY}
        </div>
        <div className="io-trust-label inline-flex max-w-full items-start gap-2 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] px-3 py-2 text-xs leading-5 text-amber-100">
          <span className="mt-0.5 text-amber-300">✓</span>
          <span>
            Sent using an approved response rule. Acme controls what can send automatically.
          </span>
        </div>
      </div>
    </div>
  )
}

function CustomerReplyScene() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/15 bg-slate-950/75 p-4 shadow-2xl shadow-purple-950/40 sm:p-6">
      <ThreadHeader />
      <div className="mt-4 space-y-3">
        <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-emerald-300/15 bg-emerald-300/[0.06] px-4 py-3 text-sm leading-6 text-slate-200">
          {APPROVED_REPLY}
        </div>
        <div className="io-customer-reply ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-purple-400/20 px-4 py-3 text-sm font-medium leading-6 text-white">
          {CUSTOMER_CONFIRMATION}
        </div>
        <p className="io-reply-received text-right text-xs font-semibold text-emerald-200">
          Reply received · Ready to confirm
        </p>
      </div>
    </div>
  )
}

const CALENDAR_DAYS = [
  { day: 'Mon', date: '12' },
  { day: 'Tue', date: '13', selected: true },
  { day: 'Wed', date: '14' },
  { day: 'Thu', date: '15' },
  { day: 'Fri', date: '16' },
]

function CalendarScene() {
  return (
    <div className="mx-auto grid w-full max-w-3xl gap-4 md:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-3xl border border-white/15 bg-slate-950/75 p-3 shadow-2xl shadow-purple-950/40 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-orbitron text-sm font-bold text-white">Service calendar</p>
            <p className="mt-1 text-xs text-slate-400">Available appointments</p>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
            May
          </span>
        </div>
        <div className="mt-5 grid min-w-0 grid-cols-5 gap-1 sm:gap-2">
          {CALENDAR_DAYS.map((item) => (
            <div
              className={`min-w-0 rounded-xl border px-0.5 py-2 text-center sm:px-1.5 sm:py-3 ${
                item.selected
                  ? 'io-calendar-selected border-amber-300/50 bg-amber-300/15 text-white'
                  : 'border-white/10 bg-white/[0.03] text-slate-400'
              }`}
              key={item.day}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide sm:text-[11px] sm:tracking-wider">
                {item.day}
              </p>
              <p className="mt-1 font-orbitron text-base font-bold">{item.date}</p>
              {item.selected ? (
                <p className="mt-2 text-[11px] font-bold leading-4 text-amber-200">
                  <span className="block sm:inline">2:00</span>
                  <span className="block sm:inline"> PM</span>
                </p>
              ) : (
                <p className="mt-2 text-[11px] text-slate-400">Open</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="io-confirmation-card flex flex-col justify-center rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.07] p-5 sm:p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300/15 text-xl font-bold text-emerald-200">
          ✓
        </span>
        <p className="mt-4 font-orbitron text-base font-bold text-white">Appointment confirmed</p>
        <p className="mt-2 text-sm font-semibold text-emerald-200">Tuesday at 2:00 PM</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Added to Acme Plumbing Co.&apos;s calendar
        </p>
      </div>
    </div>
  )
}

function ServiceScene() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/15 bg-slate-950/75 p-5 shadow-2xl shadow-purple-950/40 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
            Tuesday · 1:55 PM
          </p>
          <p className="mt-2 font-orbitron text-lg font-bold text-white">Service handoff</p>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
          On site
        </span>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="io-technician-avatar flex h-20 w-20 items-center justify-center rounded-3xl border border-purple-300/20 bg-purple-400/10 font-orbitron text-lg font-bold text-purple-100">
          JR
        </div>
        <div>
          <p className="io-service-status text-lg font-semibold text-emerald-200">
            Technician arrived
          </p>
          <p className="mt-2 text-base font-semibold text-white">
            Water heater replacement: Job in progress
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="io-service-progress h-full rounded-full bg-gradient-to-r from-amber-300 to-emerald-300" />
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Appointment details and customer notes included
          </p>
        </div>
      </div>
    </div>
  )
}

function PayoffScene() {
  return (
    <div className="io-payoff mx-auto flex w-full max-w-3xl flex-col items-center text-center">
      <div className="flex items-center gap-2" aria-hidden="true">
        {PHASES.map((phase, index) => (
          <span className="flex items-center gap-2" key={phase}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-sm font-bold text-emerald-200">
              ✓
            </span>
            {index < PHASES.length - 1 ? (
              <span className="h-px w-4 bg-gradient-to-r from-emerald-300/60 to-amber-300/60 sm:w-9" />
            ) : null}
          </span>
        ))}
      </div>
      <p className="font-orbitron mt-7 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
        One inquiry. One clean handoff. A booked job without the back-and-forth.
      </p>
      <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
        Approved rules handle the routine steps. The business stays in control of what happens next.
      </p>
      <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/[0.08] px-4 py-2 text-sm font-semibold text-amber-100">
        Acme Plumbing Co. · Demonstration workflow
      </span>
    </div>
  )
}

function StorySceneVisual({ id }: { id: SceneId }) {
  switch (id) {
    case 'compose':
      return <ComposeScene />
    case 'send':
      return <SendScene />
    case 'inbox':
      return <InboxScene />
    case 'approved-reply':
      return <ApprovedReplyScene />
    case 'customer-reply':
      return <CustomerReplyScene />
    case 'calendar':
      return <CalendarScene />
    case 'service':
      return <ServiceScene />
    case 'payoff':
      return <PayoffScene />
  }
}

export function InquiryDemo({ workingDemoUrl }: { workingDemoUrl?: string }) {
  const [player, dispatch] = useReducer(playerReducer, initialPlayerState)
  const [enhanced, setEnhanced] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [motionPreferenceReady, setMotionPreferenceReady] = useState(false)
  const [observerReady, setObserverReady] = useState(false)
  const [stageInView, setStageInView] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [announcement, setAnnouncement] = useState('')
  const stageRef = useRef<HTMLDivElement>(null)
  const remainingMsRef = useRef(SCENES[0].durationMs)
  const activeSceneTokenRef = useRef('0:compose')

  const currentScene = SCENES[player.sceneIndex]
  const previousScene =
    player.previousSceneIndex === null ? null : SCENES[player.previousSceneIndex]
  const currentPhaseIndex = PHASES.indexOf(currentScene.phase)
  const sceneToken = `${player.cycle}:${currentScene.id}`
  const showStaticSummary = !enhanced || reducedMotion || !motionPreferenceReady || !observerReady
  const shouldRun =
    !showStaticSummary && hasStarted && stageInView && pageVisible && !player.manuallyPaused

  useEffect(() => {
    setEnhanced(true)
    if (typeof window.matchMedia !== 'function') return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotionPreference = () => {
      setReducedMotion(media.matches)
      setMotionPreferenceReady(true)
    }
    syncMotionPreference()
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', syncMotionPreference)
      return () => media.removeEventListener('change', syncMotionPreference)
    }
    media.addListener(syncMotionPreference)
    return () => media.removeListener(syncMotionPreference)
  }, [])

  useEffect(() => {
    const syncPageVisibility = () => setPageVisible(!document.hidden)
    const markPageHidden = () => setPageVisible(false)
    syncPageVisibility()
    document.addEventListener('visibilitychange', syncPageVisibility)
    window.addEventListener('blur', markPageHidden)
    window.addEventListener('focus', syncPageVisibility)
    window.addEventListener('pagehide', markPageHidden)
    window.addEventListener('pageshow', syncPageVisibility)
    return () => {
      document.removeEventListener('visibilitychange', syncPageVisibility)
      window.removeEventListener('blur', markPageHidden)
      window.removeEventListener('focus', syncPageVisibility)
      window.removeEventListener('pagehide', markPageHidden)
      window.removeEventListener('pageshow', syncPageVisibility)
    }
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage || typeof IntersectionObserver === 'undefined') return
    setObserverReady(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        const sufficientlyVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35
        setStageInView(sufficientlyVisible)
        if (sufficientlyVisible) setHasStarted(true)
      },
      { threshold: [0, 0.35, 0.6] },
    )

    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (activeSceneTokenRef.current !== sceneToken) {
      activeSceneTokenRef.current = sceneToken
      remainingMsRef.current = currentScene.durationMs
    }
    if (!shouldRun) return

    let completed = false
    const remainingAtStart = remainingMsRef.current
    const startedAt = performance.now()
    const timer = window.setTimeout(() => {
      if (document.hidden) {
        setPageVisible(false)
        return
      }
      completed = true
      dispatch({ type: 'advance' })
    }, remainingAtStart)

    return () => {
      window.clearTimeout(timer)
      if (!completed) {
        const elapsed = performance.now() - startedAt
        remainingMsRef.current = Math.max(100, remainingAtStart - elapsed)
      }
    }
  }, [currentScene.durationMs, sceneToken, shouldRun])

  const togglePause = () => {
    const willPause = !player.manuallyPaused
    dispatch({ type: 'toggle-pause' })
    setAnnouncement(willPause ? 'Workflow story paused.' : 'Workflow story resumed.')
  }

  const replay = () => {
    dispatch({ type: 'replay' })
    setAnnouncement(
      stageInView ? 'Workflow story replayed from the beginning.' : 'Replay ready when visible.',
    )
  }

  const playerState = shouldRun ? 'playing' : 'paused'

  return (
    <section className="scroll-mt-24 py-14 sm:py-16 lg:py-20" id="example">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Example: Service inquiry workflow</Eyebrow>
          <h2 className="font-orbitron mt-4 text-xl font-bold leading-tight text-white sm:text-2xl">
            One example of connected systems at work.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            A service inquiry becomes a scheduled job through approved rules and a clear team
            handoff. Explore this demonstration using a fictional business.
          </p>
        </div>

        <details className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
          <summary className="min-h-11 cursor-pointer content-center rounded-lg text-base font-semibold text-amber-200 marker:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300">
            Watch the service workflow
          </summary>
          <ol
            aria-label="Workflow progress"
            className="mx-auto mt-7 flex max-w-3xl items-start justify-between gap-2"
          >
            {PHASES.map((phase, index) => {
              const active = !showStaticSummary && index === currentPhaseIndex
              const complete = showStaticSummary || index < currentPhaseIndex
              return (
                <li
                  aria-current={active ? 'step' : undefined}
                  className="flex min-w-0 flex-1 flex-col items-center gap-2"
                  key={phase}
                >
                  <div className="flex w-full items-center">
                    <span
                      className={`h-px flex-1 ${index === 0 ? 'opacity-0' : complete || active ? 'bg-amber-300/70' : 'bg-white/10'}`}
                    />
                    <span
                      className={`flex h-4 w-4 flex-none items-center justify-center rounded-full border transition-colors ${
                        active
                          ? 'border-amber-200 bg-amber-300 shadow-[0_0_0_5px_rgba(251,191,36,0.12)]'
                          : complete
                            ? 'border-emerald-300/60 bg-emerald-300/80'
                            : 'border-white/20 bg-slate-900'
                      }`}
                    >
                      <span className="sr-only">
                        {active ? 'Current: ' : complete ? 'Complete: ' : ''}
                      </span>
                    </span>
                    <span
                      className={`h-px flex-1 ${index === PHASES.length - 1 ? 'opacity-0' : complete ? 'bg-emerald-300/60' : 'bg-white/10'}`}
                    />
                  </div>
                  <span
                    className={`hidden text-xs font-semibold sm:block ${active ? 'text-amber-200' : complete ? 'text-emerald-200' : 'text-slate-400'}`}
                  >
                    {phase}
                  </span>
                  <span className="sr-only sm:hidden">{phase}</span>
                </li>
              )
            })}
          </ol>
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-amber-200 sm:hidden">
            {showStaticSummary ? 'Four-step summary' : currentScene.phase}
          </p>

          <figure className="mx-auto mt-6 max-w-5xl">
            <div
              className="io-story-stage relative h-[35rem] min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] shadow-2xl shadow-purple-950/30 sm:h-[31rem] md:h-[28rem]"
              data-cycle={player.cycle}
              data-enhanced={enhanced}
              data-has-started={hasStarted}
              data-in-view={stageInView}
              data-page-visible={pageVisible}
              data-player-state={playerState}
              data-reduced-motion={reducedMotion}
              data-scene={showStaticSummary ? 'summary' : currentScene.id}
              data-testid="inquiry-story"
              ref={stageRef}
            >
              <div aria-hidden="true" className="io-story-grid absolute inset-0" />
              <div aria-hidden="true" className="io-story-orb io-story-orb-one" />
              <div aria-hidden="true" className="io-story-orb io-story-orb-two" />

              {showStaticSummary ? (
                <StaticSummaryCards />
              ) : (
                <div aria-hidden="true" className="absolute inset-0">
                  {previousScene ? (
                    <div
                      className="io-story-layer io-story-layer-exit"
                      key={`previous-${player.cycle}-${previousScene.id}`}
                    >
                      <StorySceneVisual id={previousScene.id} />
                    </div>
                  ) : null}
                  <div
                    className="io-story-layer io-story-layer-enter"
                    key={`current-${player.cycle}-${currentScene.id}`}
                  >
                    <StorySceneVisual id={currentScene.id} />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <figcaption className="min-h-6 text-sm leading-6 text-slate-300">
                <span className="font-semibold text-amber-200">
                  {showStaticSummary ? 'Summary' : currentScene.phase}:
                </span>{' '}
                {showStaticSummary
                  ? 'A clear four-step path from inquiry to scheduled service.'
                  : currentScene.caption}
              </figcaption>

              {enhanced && !showStaticSummary ? (
                <fieldset className="flex items-center gap-2">
                  <legend className="sr-only">Animation controls</legend>
                  <button
                    aria-label={
                      player.manuallyPaused ? 'Resume workflow story' : 'Pause workflow story'
                    }
                    aria-pressed={player.manuallyPaused}
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 text-base font-semibold text-slate-200 transition hover:border-amber-300/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                    onClick={togglePause}
                    type="button"
                  >
                    {player.manuallyPaused ? 'Resume' : 'Pause'}
                  </button>
                  <button
                    aria-label="Replay workflow story from the beginning"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 text-base font-semibold text-slate-200 transition hover:border-amber-300/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                    onClick={replay}
                    type="button"
                  >
                    Replay
                  </button>
                </fieldset>
              ) : enhanced ? (
                <span className="text-sm font-semibold text-slate-400">
                  {reducedMotion ? 'Reduced motion summary' : 'Static workflow summary'}
                </span>
              ) : null}
            </div>
          </figure>

          <div className="sr-only">
            <h3>Workflow story transcript</h3>
            <ol>
              {STATIC_SUMMARY.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}.</strong> {item.detail}
                </li>
              ))}
            </ol>
          </div>
          <p aria-live="polite" className="sr-only">
            {announcement}
          </p>
          {workingDemoUrl ? (
            <div className="mt-6">
              <ButtonLink data-working-demo-cta="true" href={workingDemoUrl} variant="secondary">
                Try the working demo
              </ButtonLink>
            </div>
          ) : null}
        </details>
      </Container>
    </section>
  )
}
