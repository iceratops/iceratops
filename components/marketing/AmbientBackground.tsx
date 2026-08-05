import type { CSSProperties } from 'react'

/**
 * Shared ambient backdrop rendered once at the shell level: the page gradient,
 * a few drifting glows, and an animated starfield, all in one fixed,
 * viewport-clipped, pointer-events-none layer that sits behind every route.
 *
 * The gradient lives here (via `.ambient-backdrop`) rather than on <body> so the
 * stars paint ABOVE it. A negative z-index layer nested under <body> is
 * otherwise covered by the body's own opaque background. Keeping the layer fixed
 * and `overflow-hidden` also means the starfield can never widen the document,
 * so mobile never gains a horizontal (or extra vertical) scroll axis.
 *
 * Star positions come from a fixed seed so server and client render the exact
 * same field (no Math.random hydration mismatch). `hero-twinkle` / `hero-glow`
 * are already disabled under prefers-reduced-motion in globals.css.
 */

// Small deterministic PRNG (mulberry32). A fixed seed keeps SSR output stable.
function seededRandom(seed: number): () => number {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const STAR_COUNT = 44
const rand = seededRandom(0x1ce6a705)

type Star = { id: string; style: CSSProperties }

const stars: Star[] = Array.from({ length: STAR_COUNT }, (_, i) => {
  const size = 2 + Math.round(rand() * 2) // 2px to 4px
  return {
    id: `star-${i}`,
    style: {
      left: `${(rand() * 100).toFixed(2)}%`,
      top: `${(rand() * 100).toFixed(2)}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: (0.18 + rand() * 0.4).toFixed(2),
      animationDelay: `${(rand() * 6).toFixed(2)}s`,
      animationDuration: `${(3.8 + rand() * 3.4).toFixed(2)}s`,
    },
  }
})

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="ambient-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="hero-glow hero-glow-north" />
      <div className="hero-glow hero-glow-west" />
      <div className="hero-glow hero-glow-south" />
      {stars.map((star) => (
        <span className="hero-twinkle" key={star.id} style={star.style} />
      ))}
    </div>
  )
}
