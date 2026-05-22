import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Learn about Iceratops, a founder-led web and AI automation studio based in Pflugerville, TX.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <RouteShell
      description="About page shell for founder and studio context."
      eyebrow="About"
      path="/about"
      title="About Iceratops"
    />
  )
}
