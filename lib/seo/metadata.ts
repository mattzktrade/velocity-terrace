import type { Metadata } from 'next'
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_TAGLINE, SITE_URL, type RaceSlug } from './site'

const TITLE_TEMPLATE = `%s | ${SITE_NAME}`

function ogImageUrl(path: string = DEFAULT_OG_IMAGE): string {
  return absoluteUrl(path)
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  ogImage?: string
  keywords?: string[]
  noIndex?: boolean
}): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = ogImageUrl(ogImage)

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${SITE_NAME} — ${title}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium F1 Party Hospitality 2026`,
    template: TITLE_TEMPLATE,
  },
  description:
    'Velocity Terrace is premium Formula 1 party hospitality at Monaco, Singapore & Abu Dhabi GP 2026. Front-row views, open bar all day, live DJs & VIP after-party. Enquire now.',
  keywords: [
    'F1 hospitality',
    'Formula 1 VIP experience',
    'Monaco Grand Prix hospitality',
    'Singapore Grand Prix hospitality',
    'Abu Dhabi Grand Prix hospitality',
    'F1 party hospitality',
    'Grand Prix VIP terrace',
    'Velocity Terrace',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Sports & Entertainment',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium F1 Party Hospitality 2026`,
    description: SITE_TAGLINE + '. Open bar, live DJs, front-row views & after-party at three iconic Grands Prix.',
    images: [{ url: ogImageUrl(), width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | F1 Party Hospitality`,
    description: SITE_TAGLINE,
    images: [ogImageUrl()],
  },
}

export const HOME_METADATA: Metadata = {
  ...buildPageMetadata({
  title: 'Premium F1 Party Hospitality — Monaco, Singapore & Abu Dhabi 2026',
  description:
    'Velocity Terrace is not traditional F1 hospitality — it is a party. Front-row track views, open bar all day, live DJs & VIP after-party at Monaco, Singapore & Abu Dhabi Grand Prix 2026.',
  path: '/',
  keywords: [
    'F1 party hospitality',
    'Monaco GP VIP',
    'Singapore GP hospitality',
    'Abu Dhabi GP hospitality',
    'Formula 1 terrace experience',
  ],
  }),
  title: {
    absolute: 'Velocity Terrace | Premium F1 Party Hospitality — Monaco, Singapore & Abu Dhabi 2026',
  },
}

const RACE_META: Record<
  RaceSlug,
  { title: string; description: string; ogImage: string; keywords: string[] }
> = {
  monaco: {
    title: 'Monaco Grand Prix Hospitality 2026',
    description:
      'Book Velocity Terrace at the Monaco GP 2026. 2-day party hospitality with front-row start/finish views, open bar, live DJs, Alec Monopoly & VIP after-party in Monte Carlo.',
    ogImage: '/monaco/page4-img15.jpg',
    keywords: ['Monaco Grand Prix hospitality', 'Monaco GP VIP terrace', 'Monte Carlo F1 party'],
  },
  singapore: {
    title: 'Singapore Grand Prix Hospitality 2026',
    description:
      'Velocity Terrace at Singapore GP 2026. 3-day night-race hospitality (Fri–Sun) at Marina Bay with open bar, DJs, gourmet food & after-party at the street circuit.',
    ogImage: '/singapore.jpg',
    keywords: ['Singapore Grand Prix hospitality', 'Marina Bay F1 VIP', 'Singapore GP party'],
  },
  'abu-dhabi': {
    title: 'Abu Dhabi Grand Prix Hospitality 2026',
    description:
      'Velocity Terrace at Abu Dhabi GP 2026 season finale. 3-day hospitality (Fri–Sun) at Yas Marina with open bar, live entertainment, front-row views & after-party.',
    ogImage: '/abudhabi.jpg',
    keywords: ['Abu Dhabi Grand Prix hospitality', 'Yas Marina F1 VIP', 'F1 season finale party'],
  },
}

export function racePageMetadata(slug: RaceSlug): Metadata {
  const meta = RACE_META[slug]
  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/races/${slug}`,
    ogImage: meta.ogImage,
    keywords: meta.keywords,
  })
}

export function monacoProgrammeMetadata(): Metadata {
  return buildPageMetadata({
    title: 'Monaco Grand Prix Weekend Programme 2026',
    description:
      'Velocity Terrace guest programme for the Monaco GP 2026 weekend — full schedule, opening times, Alec Monopoly DJ sets, food service times, and drinks menu.',
    path: '/monacoprogramme',
    ogImage: '/monaco/page4-img15.jpg',
    keywords: ['Monaco GP programme', 'Velocity Terrace schedule', 'Monaco Grand Prix 2026'],
  })
}
