import { services } from '@/content/services'
import { type Locale, localizedPath } from '@/lib/i18n'
import { absoluteUrl } from '@/lib/seo'
import { getTranslator } from '@/lib/translations'

export function ServicesJsonLd({ locale }: { locale: Locale }) {
  const t = getTranslator(locale)
  const pageUrl = absoluteUrl(localizedPath('/services', locale))
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${pageUrl}#services`,
    name: t('Services'),
    url: pageUrl,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        '@id': `${pageUrl}#${service.slug}`,
        name: t(service.name),
        description: t(service.summary),
        serviceType: t(service.name),
        url: pageUrl,
        provider: { '@id': absoluteUrl('/#organization') },
        areaServed: { '@type': 'Place', name: t('Worldwide') },
      },
    })),
  }

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD uses escaped, trusted static service copy.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
      type="application/ld+json"
    />
  )
}
