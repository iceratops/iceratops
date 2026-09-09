import PrivacyPage from '@/components/pages/PrivacyPage'
import { pageMetadata } from '@/lib/page-metadata'
export const metadata = pageMetadata('/privacy', 'en')
export default function Page() {
  return <PrivacyPage />
}
