import { notFound, redirect } from 'next/navigation'
import { RaceJsonLd } from '@/components/seo/json-ld'
import { racePageMetadata } from '@/lib/seo/metadata'
import { RACE_SLUGS, type RaceSlug } from '@/lib/seo/site'
import RaceLandingClient from './race-landing-client'

export function generateStaticParams() {
  return RACE_SLUGS.map((race) => ({ race }))
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

  return (
    <>
      <RaceJsonLd slug={race} />
      <RaceLandingClient race={race} />
    </>
  )
}
