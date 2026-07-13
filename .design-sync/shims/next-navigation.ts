// design-sync shim for `next/navigation`. ContactForm calls useRouter(), but
// the real hook throws outside Next's app-router runtime. The shim returns a
// no-op router so the form renders and stays interactive in preview (submit
// just does not navigate). Keep the method signatures compatible with calls
// made by synced components.
export function useRouter() {
  return {
    push: (_href: string, _options?: { scroll?: boolean }) => {},
    replace: (_href: string, _options?: { scroll?: boolean }) => {},
    prefetch: (_href: string, _options?: { onInvalidate?: () => void }) => {},
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
