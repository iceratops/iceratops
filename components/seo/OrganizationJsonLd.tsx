import { site } from '@/content/site'
import type { Locale } from '@/lib/i18n'
import { absoluteUrl, siteConfig } from '@/lib/seo'
import { getTranslator } from '@/lib/translations'

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const t = getTranslator(locale)
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    description: t(site.shortDescription),
    url: siteConfig.url,
    email: site.contact.email,
    image: absoluteUrl(siteConfig.ogImage),
    logo: absoluteUrl('/iceratops_logo.svg'),
    foundingLocation: {
      '@type': 'Place',
      name: `${site.origin.state}, ${site.origin.country}`,
    },
    areaServed: { '@type': 'Place', name: t('Worldwide') },
    knowsAbout: [
      'Custom software',
      'Digital platforms',
      'Websites',
      'Workflow automation',
      'Artificial intelligence systems',
      'Systems integration',
    ],
  }

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is built from trusted static site data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  )
}
