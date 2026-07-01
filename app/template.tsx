import type { ReactNode } from 'react'

/**
 * App Router template re-mounts on every navigation, so wrapping children here
 * replays the `page-enter` fade-and-lift on each route change. Pure CSS, so it
 * runs without JavaScript and is disabled under prefers-reduced-motion.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>
}
