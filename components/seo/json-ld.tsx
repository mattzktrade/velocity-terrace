import { HOME_FAQS, RACE_FAQS, type FaqItem } from '@/lib/seo/faqs'
import { absoluteUrl, CONTACT_EMAIL, SITE_NAME, SITE_URL, type RaceSlug } from '@/lib/seo/site'

function JsonLdScript({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function faqPageSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/monaco/velocity%20logo%20white.png'),
  email: CONTACT_EMAIL,
  description:
    'Premium Formula 1 party hospitality at Monaco, Singapore, and Abu Dhabi Grands Prix — front-row views, open bar, live DJs, and VIP after-parties.',
  sameAs: [] as string[],
}

const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Premium F1 party hospitality experiences at Monaco, Singapore, and Abu Dhabi Grand Prix weekends.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-GB',
}

export function GlobalJsonLd() {
  return <JsonLdScript data={[ORGANIZATION, WEBSITE]} />
}

export function HomeJsonLd() {
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE_NAME} | Premium F1 Party Hospitality 2026`,
    description: ORGANIZATION.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-GB',
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Velocity Terrace F1 Hospitality',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: ['Monaco', 'Singapore', 'United Arab Emirates'],
    serviceType: 'Formula 1 Grand Prix hospitality and VIP event access',
    description:
      'All-day open bar, gourmet dining, live DJs, front-row track views, and exclusive after-party access at select F1 Grands Prix.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/LimitedAvailability',
      url: absoluteUrl('/#contact'),
    },
  }

  return <JsonLdScript data={[webPage, service, faqPageSchema(HOME_FAQS)]} />
}

const RACE_EVENTS: Record<
  RaceSlug,
  {
    name: string
    startDate: string
    endDate: string
    location: string
    description: string
  }
> = {
  monaco: {
    name: 'Velocity Terrace — Monaco Grand Prix 2026',
    startDate: '2026-06-06',
    endDate: '2026-06-07',
    location: 'Monte Carlo, Monaco',
    description:
      '2-day F1 party hospitality overlooking the Monaco start/finish straight with open bar, DJs, and VIP after-party.',
  },
  singapore: {
    name: 'Velocity Terrace — Singapore Grand Prix 2026',
    startDate: '2026-09-18',
    endDate: '2026-09-20',
    location: 'Marina Bay, Singapore',
    description:
      '3-day night-race F1 hospitality at Marina Bay with open bar, live entertainment, and after-party access.',
  },
  'abu-dhabi': {
    name: 'Velocity Terrace — Abu Dhabi Grand Prix 2026',
    startDate: '2026-12-04',
    endDate: '2026-12-06',
    location: 'Yas Marina Circuit, Abu Dhabi',
    description:
      '3-day season finale F1 hospitality at Yas Marina with front-row views, open bar, and exclusive after-party.',
  },
}

export function RaceJsonLd({ slug }: { slug: RaceSlug }) {
  const event = RACE_EVENTS[slug]
  const pageUrl = absoluteUrl(`/races/${slug}`)
  const faqs = RACE_FAQS[slug] ?? []

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.location,
      address: event.location,
    },
    organizer: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl('/#contact'),
      availability: 'https://schema.org/LimitedAvailability',
      validFrom: '2026-01-01',
    },
    image: absoluteUrl(slug === 'monaco' ? '/monaco/page4-img15.jpg' : slug === 'singapore' ? '/singapore.jpg' : '/abudhabi.jpg'),
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: pageUrl,
    name: event.name,
    description: event.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: eventSchema,
    inLanguage: 'en-GB',
  }

  const schemas: Record<string, unknown>[] = [webPage, eventSchema]
  if (faqs.length > 0) schemas.push(faqPageSchema(faqs))

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Races', item: absoluteUrl('/#races') },
      { '@type': 'ListItem', position: 3, name: event.name, item: pageUrl },
    ],
  }
  schemas.push(breadcrumb)

  return <JsonLdScript data={schemas} />
}
