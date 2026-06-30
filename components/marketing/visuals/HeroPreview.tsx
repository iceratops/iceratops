import { cx } from '@/lib/classes'

/**
 * Decorative, branded hero visual: a browser window showing a clean site with
 * an inquiry form coming in. Pure CSS, no imagery. Marked aria-hidden because
 * it is illustrative and adds nothing for assistive tech.
 */
export function HeroPreview({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cx('relative mx-auto w-full max-w-md', className)}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/40 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-400">
            yoursite.com
          </span>
        </div>
        <div className="space-y-5 p-6">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-white/20" />
            <div className="flex gap-2">
              <div className="h-2 w-9 rounded bg-white/10" />
              <div className="h-2 w-9 rounded bg-white/10" />
              <div className="h-2 w-9 rounded bg-white/10" />
            </div>
          </div>
          <div className="space-y-2.5 pt-2">
            <div className="h-4 w-4/5 rounded bg-white/25" />
            <div className="h-4 w-3/5 rounded bg-white/15" />
          </div>
          <div className="h-3 w-full rounded bg-white/[0.07]" />
          <div className="h-3 w-11/12 rounded bg-white/[0.07]" />
          <div className="h-9 w-36 rounded-lg bg-amber-400" />
        </div>
      </div>
      <div className="absolute -bottom-7 right-0 w-52 rounded-xl border border-white/10 bg-slate-950/85 p-4 shadow-xl shadow-slate-950/50 backdrop-blur sm:-right-6">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-300/15 text-amber-300">
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="text-xs font-semibold text-white">New inquiry</p>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-6 rounded-md border border-white/10 bg-white/[0.04]" />
          <div className="h-6 rounded-md border border-white/10 bg-white/[0.04]" />
          <div className="h-8 w-full rounded-md bg-amber-400/90" />
        </div>
      </div>
    </div>
  )
}
