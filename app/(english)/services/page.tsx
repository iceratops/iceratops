import ServicesPage from '@/components/pages/ServicesPage'
import { pageMetadata } from '@/lib/page-metadata'
export const metadata = pageMetadata('/services', 'en')
export default function Page() {
  return <ServicesPage />
}
