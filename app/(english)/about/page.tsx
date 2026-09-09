import AboutPage from '@/components/pages/AboutPage'
import { pageMetadata } from '@/lib/page-metadata'
export const metadata = pageMetadata('/about', 'en')
export default function Page() {
  return <AboutPage />
}
