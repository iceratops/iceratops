'use client'

import { type CSSProperties, useEffect, useReducer, useRef, useState } from 'react'
import { Eyebrow } from '@/components/marketing/Eyebrow'
import { Container } from '@/components/primitives/Container'

type Ch = 'web' | 'fb' | 'email' | 'sms'
type IconType = 'globe' | 'mail' | 'sms' | 'chat'

const CHANNELS: Record<
  Ch,
  {
    label: string
    topic: string
    icon: IconType
    msg: string
    reply: string
    follow: string
    book: string
  }
> = {
  web: {
    label: 'Website',
    topic: 'Quote request',
    icon: 'globe',
    msg: 'Any availability next week for a bathroom remodel quote?',
    reply: 'Happy to help. Tuesday or Wednesday afternoon is open for a free estimate.',
    follow: 'Following up, want me to hold Tuesday for your estimate?',
    book: 'Tue 9:00 AM',
  },
  fb: {
    label: 'Facebook',
    topic: 'New message',
    icon: 'chat',
    msg: 'Roughly what does a water heater replacement run?',
    reply: 'Great question! Let me take a look and confirm an exact price.',
    follow: 'Happy to swing by Thursday to confirm pricing.',
    book: 'Thu 10:30 AM',
  },
  email: {
    label: 'Email',
    topic: 'Quote request',
    icon: 'mail',
    msg: 'Need a quote to replace a water heater. When could someone visit?',
    reply: 'Thanks for reaching out! I can stop by Thursday or Friday for a quote.',
    follow: 'Checking in, does Friday at 2 still work for a visit?',
    book: 'Fri 2:00 PM',
  },
  sms: {
    label: 'Text',
    topic: 'New text',
    icon: 'sms',
    msg: 'Any chance you could look at a leaking kitchen faucet this week?',
    reply: 'Sorry about the leak! I can stop by Wednesday at 3 to take a look.',
    follow: 'Still good for Wednesday at 3 for the faucet?',
    book: 'Wed 3:00 PM',
  },
}

const STATUS = [
  { label: 'New', note: 'Just landed in your inbox' },
  { label: 'Replied', note: 'AI reply sent in your voice' },
  { label: 'Follow-up', note: 'Gentle nudge sent automatically' },
  { label: 'Booked', note: 'On your calendar' },
]

const PILLS = [
  { background: 'rgba(251,191,36,0.92)', color: '#020617' },
  { background: 'rgba(52,211,153,0.16)', color: '#6ee7b7' },
  { background: 'rgba(255,255,255,0.10)', color: '#cbd5e1' },
  { background: 'rgba(252,211,77,0.20)', color: '#fde68a' },
]

const ORDER: Ch[] = ['web', 'fb', 'email', 'sms']
const SRC_INDEX: Record<Ch, number> = { web: 0, fb: 1, email: 2, sms: 3 }

type DemoEvent = { kind: 'recv' | 'sent'; ch: Ch; msg?: string; key: number } | null
type State = {
  src: Ch
  activeCh: Ch
  stage: number
  msg: string | null
  hist: { ch: Ch; topic: string; id: number }[]
  event: DemoEvent
  evKey: number
  arm: number
}
type Action =
  | { type: 'tick' }
  | { type: 'select'; ch: Ch; stage: number }
  | { type: 'send'; ch: Ch; msg: string | null; stage: number }
  | { type: 'reduced' }

const initialState: State = {
  src: 'web',
  activeCh: 'web',
  stage: 0,
  msg: null,
  hist: [
    { ch: 'email', topic: 'Quote request', id: -1 },
    { ch: 'sms', topic: 'New text', id: -2 },
    { ch: 'fb', topic: 'New message', id: -3 },
  ],
  event: null,
  evKey: 0,
  arm: 0,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'tick': {
      if (state.stage < 3) return { ...state, stage: state.stage + 1 }
      const next = ORDER[(ORDER.indexOf(state.activeCh) + 1) % ORDER.length]
      const evKey = state.evKey + 1
      const hist = [
        { ch: state.activeCh, topic: CHANNELS[state.activeCh].topic, id: evKey },
        ...state.hist,
      ].slice(0, 3)
      return {
        ...state,
        activeCh: next,
        src: next,
        stage: 0,
        msg: null,
        hist,
        event: { kind: 'recv', ch: next, key: evKey },
        evKey,
      }
    }
    case 'select': {
      const evKey = state.evKey + 1
      return {
        ...state,
        src: action.ch,
        activeCh: action.ch,
        stage: action.stage,
        msg: null,
        event: { kind: 'recv', ch: action.ch, key: evKey },
        evKey,
        arm: state.arm + 1,
      }
    }
    case 'send': {
      const evKey = state.evKey + 1
      return {
        ...state,
        src: action.ch,
        activeCh: action.ch,
        stage: action.stage,
        msg: action.msg,
        event: { kind: 'sent', ch: action.ch, msg: action.msg ?? undefined, key: evKey },
        evKey,
        arm: state.arm + 1,
      }
    }
    case 'reduced':
      return { ...state, stage: 3 }
    default:
      return state
  }
}

function ChannelIcon({ type, size = 14 }: { type: IconType; size?: number }) {
  const common = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
  }
  if (type === 'globe') {
    return (
      <svg aria-hidden="true" {...common}>
        <circle cx="12" cy="12" r="9" />
        <path
          d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  if (type === 'mail') {
    return (
      <svg aria-hidden="true" {...common}>
        <rect height="14" rx="2" width="18" x="3" y="5" />
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (type === 'sms') {
    return (
      <svg aria-hidden="true" {...common}>
        <path
          d="M5 4h3.6l1.6 4-2.1 1.5a10 10 0 004.9 4.9l1.5-2.1 4 1.6V19a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 014.5 5.6 1.5 1.5 0 015 4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return (
    <svg aria-hidden="true" {...common}>
      <path
        d="M21 11.5a8 8 0 01-8 8H7l-4 3 1.2-5A8 8 0 1121 11.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InboxRow({
  ch,
  topic,
  pillLabel,
  pillIndex,
  active,
  dim,
}: {
  ch: Ch
  topic: string
  pillLabel: string
  pillIndex: number
  active?: boolean
  dim?: boolean
}) {
  const pill = PILLS[pillIndex]
  const rowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    padding: '9px 11px',
    borderRadius: '12px',
    border: `1px solid ${active ? 'rgba(252,211,77,0.5)' : 'rgba(255,255,255,0.08)'}`,
    background: active ? 'rgba(252,211,77,0.06)' : 'rgba(2,6,23,0.4)',
    opacity: dim ? 0.55 : 1,
    transition: 'background .3s, border-color .3s, opacity .3s',
  }
  return (
    <div style={rowStyle}>
      <span
        style={{
          display: 'flex',
          height: '28px',
          width: '28px',
          flex: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          background: 'rgba(252,211,77,0.12)',
          color: '#fcd34d',
        }}
      >
        <ChannelIcon type={CHANNELS[ch].icon} />
      </span>
      <span style={{ flex: '1', minWidth: 0 }}>
        <span
          style={{
            display: 'block',
            fontSize: '12.5px',
            fontWeight: 600,
            color: '#fff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {`${CHANNELS[ch].label} · ${topic}`}
        </span>
      </span>
      <span
        className={active && pillIndex === 0 ? 'io-pulse' : undefined}
        style={{
          flex: 'none',
          borderRadius: '9999px',
          padding: '2px 9px',
          fontSize: '10px',
          fontWeight: 700,
          background: pill.background,
          color: pill.color,
          transition: 'background .3s, color .3s',
        }}
      >
        {pillLabel}
      </span>
    </div>
  )
}

function ThreadLine({
  label,
  labelColor,
  body,
  on,
  placeholder,
}: {
  label: string
  labelColor: string
  body: string
  on: boolean
  placeholder: string
}) {
  return (
    <div>
      <p
        style={{
          margin: 0,
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '.06em',
          color: on ? labelColor : '#475569',
          transition: 'color .4s',
        }}
      >
        {label}
      </p>
      <p
        style={{
          marginTop: '3px',
          height: '35px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          fontSize: '12px',
          lineHeight: 1.45,
          color: on ? '#cbd5e1' : '#64748b',
          fontStyle: on ? 'normal' : 'italic',
          transition: 'color .4s',
        }}
      >
        {on ? body : placeholder}
      </p>
    </div>
  )
}

const dockClass = (active: boolean) =>
  `flex items-center justify-center gap-1 rounded-lg px-1.5 py-1.5 text-[11px] font-semibold transition ${active ? 'bg-white/15 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`

export function InquiryDemo() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [reduce, setReduce] = useState(false)
  const inputs = {
    web: useRef<HTMLTextAreaElement>(null),
    fb: useRef<HTMLTextAreaElement>(null),
    email: useRef<HTMLTextAreaElement>(null),
    sms: useRef<HTMLInputElement>(null),
  }

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduce(true)
      dispatch({ type: 'reduced' })
    }
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: state.arm restarts the interval after each manual interaction.
  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => dispatch({ type: 'tick' }), 2400)
    return () => window.clearInterval(id)
  }, [reduce, state.arm])

  const select = (ch: Ch) => () => dispatch({ type: 'select', ch, stage: reduce ? 3 : 0 })
  const send = (ch: Ch) => () => {
    const value = inputs[ch].current?.value?.trim() ?? ''
    dispatch({ type: 'send', ch, msg: value || null, stage: reduce ? 3 : 0 })
  }

  const active = CHANNELS[state.activeCh]
  const shownMsg = state.msg || active.msg
  const focusLabel = `${active.label} · ${active.topic}`
  const trackTransform = `translateX(-${SRC_INDEX[state.src] * 100}%)`
  const bookOn = state.stage >= 3

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-orbitron mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Watch a lead go from message to booked.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Pick one of the sample channels below, send a message, and follow it through one inbox
            to a booked job. Real inquiries show up in lots of places; these are just a few. Go
            ahead and try it. <span className="text-slate-500">Sample data, for illustration.</span>
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <span className="font-orbitron text-sm text-amber-300">1</span>A lead reaches out
              </p>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300">
                Try it
              </span>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-slate-950/60">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: trackTransform }}
              >
                {/* WEBSITE */}
                <div className="w-full flex-none bg-white" inert={state.src !== 'web' || undefined}>
                  <div className="bg-[#e9eaed]">
                    <div className="flex items-center gap-1.5 px-3 pt-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex items-end gap-1 px-2 pt-2">
                      <span className="flex items-center gap-1.5 rounded-t-lg bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-700">
                        <span className="h-2.5 w-2.5 rounded-sm bg-[#0d9488]" />
                        Lone Star Plumbing
                      </span>
                    </div>
                    <div className="bg-white px-2 py-1.5">
                      <div className="truncate rounded-md bg-[#f1f3f4] px-2.5 py-1 text-[10px] text-slate-500">
                        lonestarplumbing.com
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white px-4 py-3.5 text-slate-800"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                  >
                    <p className="text-[11px] font-bold tracking-wide text-[#0f766e]">
                      LONE STAR PLUMBING
                    </p>
                    <p className="mt-1 text-[15px] font-extrabold leading-snug text-slate-900">
                      24/7 emergency plumbing in Austin
                    </p>
                    <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                      <p className="text-[11px] font-semibold text-slate-700">Request a quote</p>
                      <input
                        className="mt-2 w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-[11px] text-slate-700 outline-none focus:border-[#0d9488]"
                        defaultValue="Sam Rivera"
                      />
                      <textarea
                        className="mt-1.5 w-full resize-none rounded border border-slate-300 bg-white px-2 py-1.5 text-[11px] leading-4 text-slate-700 outline-none focus:border-[#0d9488]"
                        defaultValue="Any availability next week for a bathroom remodel quote?"
                        ref={inputs.web}
                        rows={2}
                      />
                      <button
                        className="mt-2 w-full rounded-md bg-[#0d9488] py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#0f766e]"
                        onClick={send('web')}
                        type="button"
                      >
                        Request a quote
                      </button>
                    </div>
                  </div>
                </div>

                {/* FACEBOOK */}
                <div className="w-full flex-none bg-white" inert={state.src !== 'fb' || undefined}>
                  <div className="bg-[#e9eaed]">
                    <div className="flex items-center gap-1.5 px-3 pt-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex items-end gap-1 px-2 pt-2">
                      <span className="flex items-center gap-1.5 rounded-t-lg bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-700">
                        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#1877f2] text-[8px] font-black text-white">
                          f
                        </span>
                        Facebook
                      </span>
                    </div>
                    <div className="bg-white px-2 py-1.5">
                      <div className="truncate rounded-md bg-[#f1f3f4] px-2.5 py-1 text-[10px] text-slate-500">
                        facebook.com/lonestarplumbing
                      </div>
                    </div>
                  </div>
                  <div className="bg-white text-slate-800">
                    <div className="flex items-center px-3 py-2">
                      <span
                        className="text-[16px] font-black lowercase tracking-tighter text-[#1877f2]"
                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                      >
                        facebook
                      </span>
                    </div>
                    <div className="px-3 pb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d9488] text-[11px] font-bold text-white">
                          LS
                        </span>
                        <div>
                          <p className="text-[12px] font-bold text-slate-900">Lone Star Plumbing</p>
                          <p className="text-[10px] text-slate-500">Plumber · Austin, TX</p>
                        </div>
                      </div>
                      <div className="mt-3 rounded-lg bg-[#f0f2f5] p-2.5">
                        <p className="text-[10px] font-semibold text-slate-600">Messenger</p>
                        <textarea
                          className="mt-1.5 w-full resize-none rounded-2xl border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] leading-4 text-slate-700 outline-none focus:border-[#1877f2]"
                          defaultValue="Roughly what does a water heater replacement run?"
                          ref={inputs.fb}
                          rows={2}
                        />
                        <button
                          className="mt-2 w-full rounded-full bg-[#1877f2] py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#166fe0]"
                          onClick={send('fb')}
                          type="button"
                        >
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div
                  className="w-full flex-none bg-white"
                  inert={state.src !== 'email' || undefined}
                >
                  <div className="bg-[#e9eaed]">
                    <div className="flex items-center gap-1.5 px-3 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-2 text-[10px] font-semibold text-slate-500">
                        New Message
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-white px-3 py-3 text-slate-800"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                  >
                    <div className="border-b border-slate-200 pb-1.5 text-[11px]">
                      <span className="text-slate-400">To</span> hello@lonestarplumbing.com
                    </div>
                    <div className="border-b border-slate-200 py-1.5 text-[11px]">
                      <span className="text-slate-400">Subject</span> Quote request
                    </div>
                    <textarea
                      className="mt-2 w-full resize-none rounded border border-slate-200 bg-white px-2 py-1.5 text-[11px] leading-4 text-slate-700 outline-none focus:border-[#2563eb]"
                      defaultValue="Need a quote to replace a water heater. When could someone visit?"
                      ref={inputs.email}
                      rows={3}
                    />
                    <button
                      className="mt-2 rounded-md bg-[#2563eb] px-5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#1d4ed8]"
                      onClick={send('email')}
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </div>

                {/* SMS */}
                <div className="w-full flex-none bg-white" inert={state.src !== 'sms' || undefined}>
                  <div className="flex items-center justify-between border-b border-slate-200 bg-[#f6f6f6] px-3 py-2">
                    <span className="text-[16px] leading-none text-[#0a84ff]">&lsaquo;</span>
                    <div className="flex flex-col items-center">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0d9488] text-[9px] font-bold text-white">
                        LS
                      </span>
                      <span className="mt-0.5 text-[10px] font-semibold text-slate-700">
                        Lone Star Plumbing
                      </span>
                    </div>
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#0a84ff] text-[9px] font-bold leading-none text-[#0a84ff]">
                      i
                    </span>
                  </div>
                  <div
                    className="bg-white px-3 pb-3 pt-3 text-slate-800"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                  >
                    <p className="text-center text-[9px] font-medium uppercase tracking-wide text-slate-400">
                      Text message · Today 9:41 AM
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 rounded-full border border-slate-300 bg-white py-1 pl-3 pr-1">
                      <input
                        className="min-w-0 flex-1 bg-transparent text-[11px] text-slate-700 outline-none"
                        defaultValue="Any chance you could look at a leaking kitchen faucet this week?"
                        ref={inputs.sms}
                      />
                      <button
                        aria-label="Send text"
                        className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#0a84ff] text-white transition hover:bg-[#0070e0]"
                        onClick={send('sms')}
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 19V5M5 12l7-7 7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2 px-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Sample channels
              </span>
              <span className="text-[10px] font-medium text-slate-500">
                + WhatsApp, Instagram, Google, and more
              </span>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-1 rounded-xl border border-white/10 bg-slate-950/40 p-1.5">
              <button
                className={dockClass(state.src === 'web')}
                onClick={select('web')}
                type="button"
              >
                <ChannelIcon size={14} type="globe" />
                Website
              </button>
              <button
                className={dockClass(state.src === 'fb')}
                onClick={select('fb')}
                type="button"
              >
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-current text-[9px] font-black">
                  <span className="text-slate-950">f</span>
                </span>
                Facebook
              </button>
              <button
                className={dockClass(state.src === 'email')}
                onClick={select('email')}
                type="button"
              >
                <ChannelIcon size={14} type="mail" />
                Email
              </button>
              <button
                className={dockClass(state.src === 'sms')}
                onClick={select('sms')}
                type="button"
              >
                <ChannelIcon size={14} type="sms" />
                Text
              </button>
            </div>

            <div className="mt-3">
              <ActivityFeed event={state.event} />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Customers reach out from all over: website forms, calls, texts, email, WhatsApp,
              Instagram, Facebook, Google Business Profile, booking tools, and more. The four above
              are sample channels. We map the places your real requests already come from.
            </p>
          </div>

          <div className="grid gap-5">
            <div
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              style={{ transitionDelay: '90ms' }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <span className="font-orbitron text-sm text-amber-300">2</span>One organized inbox
                </p>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 io-blink" />
                  Live
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <InboxRow
                  active
                  ch={state.activeCh}
                  pillIndex={state.stage}
                  pillLabel={STATUS[state.stage].label}
                  topic={active.topic}
                />
                {state.hist.map((item) => (
                  <InboxRow
                    ch={item.ch}
                    dim
                    key={item.id}
                    pillIndex={3}
                    pillLabel="Booked"
                    topic={item.topic}
                  />
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              style={{ transitionDelay: '160ms' }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <span className="font-orbitron text-sm text-amber-300">3</span>From new to booked
                </p>
                <span className="max-w-[45%] truncate text-[10px] font-medium text-slate-500">
                  {focusLabel}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex gap-1.5">
                  {STATUS.map((status, index) => {
                    const lit = index <= state.stage
                    return (
                      <div className="flex flex-1 flex-col items-center gap-1.5" key={status.label}>
                        <div
                          className={index === state.stage ? 'io-pulse' : undefined}
                          style={{
                            height: '7px',
                            width: '100%',
                            borderRadius: '9999px',
                            background: lit ? 'rgba(251,191,36,0.85)' : 'rgba(255,255,255,0.10)',
                            transition: 'background .4s',
                          }}
                        />
                        <span
                          style={{
                            fontSize: '9.5px',
                            fontWeight: 600,
                            letterSpacing: '.02em',
                            color: lit ? '#fde68a' : '#64748b',
                            transition: 'color .4s',
                          }}
                        >
                          {status.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-3 flex h-[34px] items-start">
                  <p className="m-0 text-xs font-semibold leading-snug text-white">
                    {STATUS[state.stage].note}
                  </p>
                </div>
                <div className="mt-2 space-y-2.5 rounded-[10px] border border-white/10 bg-slate-950/45 px-[11px] py-2.5">
                  <ThreadLine
                    body={shownMsg}
                    label={`Incoming · ${active.label}`}
                    labelColor="#64748b"
                    on
                    placeholder=""
                  />
                  <ThreadLine
                    body={active.reply}
                    label="AI reply · in your voice"
                    labelColor="#6ee7b7"
                    on={state.stage >= 1}
                    placeholder="Drafting a reply that sounds like you…"
                  />
                  <ThreadLine
                    body={active.follow}
                    label="Follow-up · automatic"
                    labelColor="#fbbf24"
                    on={state.stage >= 2}
                    placeholder="A gentle nudge will go out if it stays quiet…"
                  />
                  <div className="flex h-[26px] items-center">
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        borderRadius: '9999px',
                        padding: '3px 10px',
                        fontSize: '10px',
                        fontWeight: 700,
                        background: bookOn ? 'rgba(252,211,77,0.18)' : 'rgba(255,255,255,0.04)',
                        color: bookOn ? '#fde68a' : '#64748b',
                        fontStyle: bookOn ? 'normal' : 'italic',
                        transition: 'background .4s, color .4s',
                      }}
                    >
                      {bookOn ? `Booked · ${active.book}` : 'Booking the appointment…'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold text-slate-300">
            What this could look like for your business
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold text-white">Home services</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-400">
                Catch every &ldquo;are you available?&rdquo; text and turn it into a booked visit.
              </p>
            </div>
            <div
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              style={{ transitionDelay: '90ms' }}
            >
              <h3 className="text-sm font-semibold text-white">Salons &amp; studios</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-400">
                Reply to booking DMs in minutes and fill last-minute openings.
              </p>
            </div>
            <div
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              style={{ transitionDelay: '180ms' }}
            >
              <h3 className="text-sm font-semibold text-white">Trades &amp; contractors</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-400">
                Quote requests organized, followed up, and never lost in a full inbox.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ActivityFeed({ event }: { event: DemoEvent }) {
  const wrapStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    minHeight: '46px',
    boxSizing: 'border-box',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(2,6,23,0.5)',
    padding: '9px 11px',
  }

  if (!event) {
    return (
      <div style={wrapStyle}>
        <span
          className="io-blink"
          style={{
            height: '7px',
            width: '7px',
            flex: 'none',
            borderRadius: '9999px',
            background: '#34d399',
          }}
        />
        <span
          style={{ flex: 1, minWidth: 0, fontSize: '11.5px', fontWeight: 500, color: '#94a3b8' }}
        >
          Connected to your inbox · watching for new messages
        </span>
      </div>
    )
  }

  const channel = CHANNELS[event.ch]
  const sent = event.kind === 'sent'
  const label = sent
    ? `You sent a ${channel.label} message`
    : `New ${channel.label} message received`
  const sub = sent
    ? event.msg
      ? `“${event.msg.length > 40 ? `${event.msg.slice(0, 40).trim()}…` : event.msg}”`
      : channel.topic
    : channel.topic

  return (
    <div className="io-row" key={event.key} style={wrapStyle}>
      <span
        style={{
          display: 'flex',
          height: '26px',
          width: '26px',
          flex: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          background: 'rgba(252,211,77,0.12)',
          color: '#fcd34d',
        }}
      >
        <ChannelIcon type={channel.icon} />
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: 'block',
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#fff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {label}
        </span>
        <span
          style={{
            display: 'block',
            marginTop: '1px',
            fontSize: '10.5px',
            color: '#94a3b8',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {sub}
        </span>
      </span>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          flex: 'none',
          borderRadius: '9999px',
          background: 'rgba(52,211,153,0.14)',
          color: '#6ee7b7',
          padding: '3px 9px',
          fontSize: '10px',
          fontWeight: 700,
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{ height: '6px', width: '6px', borderRadius: '9999px', background: '#34d399' }}
        />
        In inbox
      </span>
    </div>
  )
}
