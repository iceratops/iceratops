// design-sync shim for `next/link`. The real Link needs Next's app-router
// context to render; outside Next (preview cards, the design agent's runtime)
// that context is absent. Components in this DS only use Link to render a
// styled anchor, so the shim is a faithful stand-in for that use.
import type * as React from 'react'

type LinkProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  href: string | { pathname?: string }
  prefetch?: boolean
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
}

export default function Link({
  href,
  prefetch: _prefetch,
  replace: _replace,
  scroll: _scroll,
  shallow: _shallow,
  ...props
}: LinkProps) {
  const url = typeof href === 'string' ? href : (href?.pathname ?? '#')
  return <a href={url} {...props} />
}
