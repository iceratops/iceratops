import { localeInfo, locales } from '@/lib/i18n'
import { absoluteUrl, siteConfig } from '@/lib/seo'

export function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: siteConfig.name,
    url: absoluteUrl('/'),
    publisher: { '@id': absoluteUrl('/#organization') },
    inLanguage: locales.map((locale) => localeInfo[locale].tag),
  }

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD uses escaped, trusted static site data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
      type="application/ld+json"
    />
  )
}
