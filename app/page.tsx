import HomePageClient from '@/components/home-page-client'
import { CrawlableFaqBlock } from '@/components/seo/crawlable-faq'
import { HomeJsonLd } from '@/components/seo/json-ld'
import { HOME_FAQS } from '@/lib/seo/faqs'
import { HOME_METADATA } from '@/lib/seo/metadata'

export const metadata = HOME_METADATA

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <CrawlableFaqBlock faqs={HOME_FAQS} />
      <HomePageClient />
    </>
  )
}
