import type { Metadata } from 'next'
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_TAGLINE, SITE_URL, type RaceSlug } from './site'

const TITLE_TEMPLATE = `%s | ${SITE_NAME}`

const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const BING_SITE_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

const INDEX_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

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
    robots: noIndex ? { index: false, follow: false } : INDEX_ROBOTS,
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
    default: `${SITE_NAME} | Premium F1 Party Hospitality`,
    template: TITLE_TEMPLATE,
  },
  description:
    'Velocity Terrace is premium Formula 1 party hospitality at Monaco 2027, Singapore 2026 & Abu Dhabi. Front-row views, open bar all day, live DJs & VIP after-party. Enquire now.',
  keywords: [
    'F1 hospitality',
    'Formula 1 VIP experience',
    'Monaco Grand Prix hospitality 2027',
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
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml', sizes: '180x180' }],
    shortcut: '/favicon.svg',
  },
  robots: INDEX_ROBOTS,
  alternates: { canonical: SITE_URL },
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
  ...(BING_SITE_VERIFICATION
    ? { other: { 'msvalidate.01': BING_SITE_VERIFICATION } }
    : {}),
  applicationName: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium F1 Party Hospitality`,
    description:
      'Premium F1 party hospitality at Monaco 2027, Singapore 2026 and Abu Dhabi. Open bar, live DJs, front-row views and after-party access.',
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
  title: 'Premium F1 Party Hospitality — Monaco 2027, Singapore & Abu Dhabi',
  description:
    'Velocity Terrace is not traditional F1 hospitality — it is a party. Enquire for Monaco Grand Prix 2027, or explore Singapore and Abu Dhabi F1 party hospitality.',
  path: '/',
  keywords: [
    'F1 party hospitality',
    'Monaco GP 2027 VIP',
    'Singapore GP hospitality',
    'Abu Dhabi GP hospitality',
    'Formula 1 terrace experience',
  ],
  }),
  title: {
    absolute: 'Velocity Terrace | Premium F1 Party Hospitality — Monaco 2027, Singapore & Abu Dhabi',
  },
}

const RACE_META: Record<
  RaceSlug,
  { title: string; description: string; ogImage: string; keywords: string[] }
> = {
  monaco: {
    title: 'Monaco Grand Prix Hospitality 2027 — Enquire Now',
    description:
      'Enquire now to secure Velocity Terrace Monaco Grand Prix 2027 hospitality. Saturday-only, Sunday-only and full 2-day packages with front-row views, open bar, live DJs and VIP after-party access.',
    ogImage: '/monaco/page4-img15.jpg',
    keywords: ['Monaco Grand Prix hospitality 2027', 'Monaco GP 2027 VIP terrace', 'Monte Carlo F1 party'],
  },
  singapore: {
    title: 'Velocity Terrace Singapore 2026 — Marina Bay VIP Hospitality',
    description:
      'Exclusive VIP rooftop hospitality at National Gallery Singapore, 9–11 October 2026. Marina Bay skyline views, world-class catering, open bar, DJs and 150-guest capacity on the Padang Deck.',
    ogImage: '/singapore/VT%20MBS%20view.png',
    keywords: ['Velocity Terrace Singapore', 'Marina Bay VIP hospitality', 'National Gallery rooftop Singapore'],
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
  const noIndex = slug === 'abu-dhabi'
  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/races/${slug}`,
    ogImage: meta.ogImage,
    keywords: meta.keywords,
    noIndex,
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
    noIndex: true,
  })
}
