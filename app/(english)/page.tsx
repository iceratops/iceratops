import HomePage from '@/components/pages/HomePage'
import { pageMetadata } from '@/lib/page-metadata'
export const metadata = pageMetadata('/', 'en')
export default function Page() {
  return <HomePage />
}
