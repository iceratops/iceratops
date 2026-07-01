import type { CSSProperties } from 'react'

/**
 * Shared ambient layer rendered once at the shell level so every route carries
 * the same subtle starfield and drifting glow as the homepage, not just the
 * hero. Fixed to the viewport and pointer-events-none, so content scrolls over
 * a steady backdrop. Reuses the `hero-twinkle` / `hero-glow` classes, which are
 * already disabled under prefers-reduced-motion in globals.css.
 */
const twinkles: CSSProperties[] = [
  { left: '8%', top: '14%', animationDuration: '4.6s' },
  {
    left: '18%',
    top: '38%',
    width: '3px',
    height: '3px',
    animationDelay: '1.2s',
    animationDuration: '5.6s',
  },
  { left: '12%', top: '72%', animationDelay: '2.4s', animationDuration: '4.9s' },
  {
    left: '27%',
    top: '88%',
    width: '3px',
    height: '3px',
    animationDelay: '0.7s',
    animationDuration: '5.2s',
  },
  { left: '34%', top: '20%', animationDelay: '3.1s', animationDuration: '4.4s' },
  {
    left: '47%',
    top: '60%',
    width: '3px',
    height: '3px',
    animationDelay: '1.8s',
    animationDuration: '6s',
  },
  { left: '52%', top: '12%', animationDelay: '0.4s', animationDuration: '5s' },
  { left: '63%', top: '78%', animationDelay: '2.7s', animationDuration: '4.7s' },
  {
    left: '71%',
    top: '30%',
    width: '3px',
    height: '3px',
    animationDelay: '1.1s',
    animationDuration: '5.8s',
  },
  { left: '79%', top: '64%', animationDelay: '3.4s', animationDuration: '4.5s' },
  { left: '86%', top: '18%', animationDelay: '0.9s', animationDuration: '5.4s' },
  {
    left: '91%',
    top: '46%',
    width: '3px',
    height: '3px',
    animationDelay: '2.1s',
    animationDuration: '6.2s',
  },
  { left: '94%', top: '82%', animationDelay: '1.5s', animationDuration: '4.8s' },
  {
    left: '58%',
    top: '92%',
    width: '3px',
    height: '3px',
    animationDelay: '3.6s',
    animationDuration: '5.1s',
  },
]

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="hero-glow absolute right-[6%] top-[8%] h-72 w-72 rounded-full" />
      <div
        className="hero-glow absolute -left-16 top-1/2 h-64 w-64 rounded-full"
        style={{ animationDelay: '-7s' }}
      />
      <div
        className="hero-glow absolute bottom-[6%] right-1/4 h-56 w-56 rounded-full"
        style={{ animationDelay: '-3s' }}
      />
      {twinkles.map((style) => (
        <span className="hero-twinkle" key={`${style.left}-${style.top}`} style={style} />
      ))}
    </div>
  )
}
