import type { Metadata } from 'next'
import { site } from '@/content/site'

export const siteConfig = {
  name: site.name,
  url: site.url,
  description: site.shortDescription,
  ogImage: '/android-chrome-512x512.png',
} as const

export const publicRoutes = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
] as const

export type PublicRoute = (typeof publicRoutes)[number]['path']

type BuildMetadataInput = {
  title?: string
  description?: string
  path?: PublicRoute | string
  noIndex?: boolean
  absoluteTitle?: boolean
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
}: BuildMetadataInput = {}): Metadata {
  const canonical = absoluteUrl(path)
  const pageTitle = title ?? siteConfig.name
  const imageUrl = absoluteUrl(siteConfig.ogImage)

  return {
    metadataBase: new URL(siteConfig.url),
    title: title
      ? absoluteTitle
        ? { absolute: title }
        : title
      : {
          default: siteConfig.name,
          template: `%s | ${siteConfig.name}`,
        },
    description,
    alternates: {
      canonical,
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
          alt: 'Iceratops logo',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  }
}
