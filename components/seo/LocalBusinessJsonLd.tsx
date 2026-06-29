import { site } from '@/content/site'
import { absoluteUrl, siteConfig } from '@/lib/seo'

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.shortDescription,
    url: siteConfig.url,
    email: site.contact.email,
    image: absoluteUrl(siteConfig.ogImage),
    logo: absoluteUrl('/iceratops_logo.svg'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.stateAbbr,
      addressCountry: 'US',
    },
    areaServed: site.serviceArea.map((city) => ({
      '@type': 'City',
      name: city,
    })),
  }

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is built from trusted static site data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  )
}
