// design-sync shim for `next/navigation`. ContactForm calls useRouter() on
// mount; the real hook throws outside Next's app-router runtime. The shim
// returns a no-op router so the form renders and stays interactive in preview
// (submit just doesn't navigate). Tracks the real next/navigation surface.
export function useRouter() {
  return {
    push: () => {},
    replace: () => {},
    prefetch: () => {},
    back: () => {},
    forward: () => {},
    refresh: () => {},
  }
}

export function usePathname() {
  return '/'
}

export function useSearchParams() {
  return new URLSearchParams()
}

export function useParams() {
  return {} as Record<string, string>
}

export function redirect(_url: string): never {
  throw new Error('redirect() is a no-op in design-sync previews')
}

export function notFound(): never {
  throw new Error('notFound() is a no-op in design-sync previews')
}
