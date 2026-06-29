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
  { path: '/services/ai-workflow-audit', label: 'AI Workflow Audit' },
  { path: '/services/website-refresh', label: 'Website Refresh' },
  { path: '/services/modern-website', label: 'Modern Website Build' },
  { path: '/services/inquiry-follow-up-systems', label: 'Inquiry and Follow-Up System' },
  { path: '/services/booking-requests', label: 'Booking or Request Workflow' },
  { path: '/services/admin-automation', label: 'Admin Automation Sprint' },
  { path: '/services/local-growth-system', label: 'Local Growth System' },
  { path: '/services/website-rescue-sprint', label: 'Website Rescue Sprint' },
  { path: '/process', label: 'Process' },
  { path: '/use-cases', label: 'Use Cases' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/demos', label: 'Demos' },
  { path: '/resources', label: 'Resources' },
  { path: '/resources/website-audit-checklist', label: 'Website Audit Checklist' },
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
