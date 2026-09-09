import { aboutPage, servicesPage, site } from '@/content/site'
import type { Locale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { getTranslator } from '@/lib/translations'

const pages: Record<
  string,
  { title: string; description: string; absoluteTitle?: boolean; noIndex?: boolean }
> = {
  '/': {
    title: 'Iceratops | Custom Software, Websites & Workflow Automation',
    description: site.shortDescription,
    absoluteTitle: true,
  },
  '/services': { title: 'Capabilities', description: servicesPage.description },
  '/about': { title: 'About', description: aboutPage.description },
  '/free-workflow-review': {
    title: 'Start a Project',
    description:
      'Start a conversation about custom software, a digital platform, website, workflow automation, or systems integration.',
  },
  '/free-workflow-review/success': {
    title: 'Request received',
    description: 'Thanks for contacting Iceratops. We reply within one business day.',
    noIndex: true,
  },
  '/404': {
    title: 'Page not found',
    description: 'The page you requested could not be found.',
    noIndex: true,
  },
  '/privacy': {
    title: 'Privacy',
    description: 'How Iceratops handles information shared through this website.',
  },
}
export function pageMetadata(path: string, locale: Locale) {
  const t = getTranslator(locale)
  const page = pages[path]
  return buildMetadata({
    ...page,
    title: t(page.title),
    description: t(page.description),
    path,
    locale,
  })
}
