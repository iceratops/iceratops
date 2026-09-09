import type { Metadata } from 'next'
import { site } from '@/content/site'
import { type Locale, localeInfo, locales, localizedPath } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

export const siteConfig = {
  name: site.name,
  url: site.url,
  description: site.shortDescription,
  ogImage: '/android-chrome-512x512.png',
} as const

export const publicRoutes = [
  { path: '/' },
  { path: '/services' },
  { path: '/about' },
  { path: '/free-workflow-review' },
  { path: '/privacy' },
] as const

export type PublicRoute = (typeof publicRoutes)[number]['path']

type BuildMetadataInput = {
  title?: string
  description?: string
  path?: PublicRoute | string
  noIndex?: boolean
  absoluteTitle?: boolean
  locale?: Locale
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  noIndex = false,
  absoluteTitle = false,
  locale = 'en',
}: BuildMetadataInput = {}): Metadata {
  const canonical = absoluteUrl(localizedPath(path, locale))
  const pageTitle = title ?? siteConfig.name
  const imageUrl = absoluteUrl(siteConfig.ogImage)

  return {
    title: title
      ? absoluteTitle
        ? { absolute: title }
        : title
      : {
          default: siteConfig.name,
          template: `%s | ${siteConfig.name}`,
        },
    description,
    // A self-referential canonical on a noindex page sends mixed signals, so
    // it is omitted there.
    alternates: noIndex
      ? null
      : {
          canonical,
          languages: Object.fromEntries([
            ...locales.map((language) => [
              localeInfo[language].tag,
              absoluteUrl(localizedPath(path, language)),
            ]),
            ['x-default', absoluteUrl(path)],
          ]),
        },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 512,
          height: 512,
          alt: getTranslator(locale)('Iceratops logo'),
        },
      ],
      locale: localeInfo[locale].og,
      type: 'website',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    twitter: {
      // The only share image is the square 512px logo; 'summary' is the card
      // type that renders square images correctly. Switch to
      // 'summary_large_image' once a real 1200x630 OG image exists.
      card: 'summary',
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  }
}
