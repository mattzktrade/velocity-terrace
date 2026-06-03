import { notFound, redirect } from 'next/navigation'
import { CrawlableFaqBlock } from '@/components/seo/crawlable-faq'
import { RaceJsonLd } from '@/components/seo/json-ld'
import { RACE_FAQS } from '@/lib/seo/faqs'
import { racePageMetadata } from '@/lib/seo/metadata'
import { RACE_SLUGS, PUBLISHED_RACE_PAGES, type RaceSlug } from '@/lib/seo/site'
import RaceLandingClient from './race-landing-client'

export function generateStaticParams() {
  return PUBLISHED_RACE_PAGES.map((race) => ({ race }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ race: string }>
}) {
  const { race: rawRace } = await params
  if (!RACE_SLUGS.includes(rawRace as RaceSlug)) return {}
  return racePageMetadata(rawRace as RaceSlug)
}

export default async function RacePage({
  params,
}: {
  params: Promise<{ race: string }>
}) {
  const { race: rawRace } = await params
  if (!RACE_SLUGS.includes(rawRace as RaceSlug)) notFound()
  const race = rawRace as RaceSlug

  if (race === 'monaco') {
    redirect('/monacoprogramme')
  }

  if (race === 'abu-dhabi') {
    redirect('/?section=contact')
  }

  const faqs = RACE_FAQS[race] ?? []

  return (
    <>
      <RaceJsonLd slug={race} />
      {faqs.length > 0 ? <CrawlableFaqBlock faqs={faqs} /> : null}
      <RaceLandingClient race={race} />
    </>
  )
}
