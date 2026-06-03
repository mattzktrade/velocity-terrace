import HomePageClient from '@/components/home-page-client'
import { HomeJsonLd } from '@/components/seo/json-ld'
import { HOME_METADATA } from '@/lib/seo/metadata'

export const metadata = HOME_METADATA

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HomePageClient />
    </>
  )
}
