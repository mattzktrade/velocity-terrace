import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Crown,
  Mail,
  MapPin,
  Users,
  Zap,
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { absoluteUrl, CONTACT_EMAIL, SITE_NAME, SITE_URL } from '@/lib/seo/site'

export const metadata = buildPageMetadata({
  title: 'F1 Hospitality Sponsorship & Brand Activation',
  description:
    'Partner with Velocity Terrace for premium F1 hospitality sponsorship, brand activation, VIP hosting, product placement and experiential marketing at Monaco, Singapore and Abu Dhabi events.',
  path: '/sponsorship',
  ogImage: '/abu-dhabi/web/redbull-weekend-recap-poster.jpg',
  keywords: [
    'F1 hospitality sponsorship',
    'Formula 1 brand activation',
    'Grand Prix sponsorship',
    'Monaco Grand Prix brand activation',
    'Singapore Grand Prix sponsorship',
    'luxury event sponsorship',
  ],
})

function JsonLdScript({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function SponsorshipJsonLd() {
  const pageUrl = absoluteUrl('/sponsorship')
  return (
    <JsonLdScript
      data={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          url: pageUrl,
          name: 'Velocity Terrace Sponsorship & Brand Activation',
          description:
            'F1 hospitality sponsorship and brand activation opportunities at Velocity Terrace events.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en-GB',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'F1 hospitality sponsorship and brand activation',
          provider: { '@id': `${SITE_URL}/#organization` },
          serviceType: 'Event sponsorship, VIP hospitality and experiential brand activation',
          areaServed: ['Monaco', 'Singapore', 'United Arab Emirates'],
          audience: {
            '@type': 'Audience',
            audienceType:
              'Premium F1 hospitality guests, founders, C-suite leaders, HNW guests, brands and corporate hosts',
          },
          offers: {
            '@type': 'Offer',
            url: `${pageUrl}#partner-enquiry`,
            availability: 'https://schema.org/LimitedAvailability',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Sponsorship', item: pageUrl },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        },
      ]}
    />
  )
}

const IMG = {
  hero: '/abu-dhabi/web/night-qualifying.jpg',
  brandPillar: '/abu-dhabi/web/brand-pillar.jpg',
  champagne: '/abu-dhabi/web/champagne-service.jpg',
  champagneGuest: '/abu-dhabi/web/champagne-guest.jpg',
  mixologist: '/abu-dhabi/web/mixologist.jpg',
  entertainment: '/abu-dhabi/web/live-sax-dj.jpg',
  dancers: '/abu-dhabi/web/dancers-night.jpg',
  celebration: '/abu-dhabi/web/celebration.jpg',
  lounge: '/abu-dhabi/web/lounge-marina.jpg',
  track: '/abu-dhabi/web/hero-track.jpg',
  sims: '/abu-dhabi/web/racing-simulators.jpg',
  gourmet: '/abu-dhabi/web/gourmet-station.jpg',
  djBooth: '/abu-dhabi/web/dj-booth.jpg',
  lifestyle: '/abu-dhabi/web/lifestyle-guests.jpg',
  singapore: '/singapore/VT%20MBS%20view.png',
  singaporeNight: '/singapore/VT%20night%20outside.jpg',
  singaporeChampagne: '/singapore/VT%20Champagne.jpg',
  monaco: '/monaco/page4-img15.jpg',
  monacoParty: '/monaco/page4-img14.jpg',
  cta: '/abu-dhabi/web/entertainment-track-screen.jpg',
  redbullVideo: '/abu-dhabi/web/redbull-weekend-recap.mp4',
  redbullPoster: '/abu-dhabi/web/redbull-weekend-recap-poster.jpg',
} as const

const whyPartner = [
  {
    icon: Users,
    title: 'Exclusive access',
    text: 'Host clients, founders and partners in a premium race-weekend environment built for conversation.',
  },
  {
    icon: Zap,
    title: 'Cultural relevance',
    text: 'Put the brand inside the music, hospitality and social energy guests actually remember.',
  },
  {
    icon: BarChart3,
    title: 'Measurable results',
    text: 'Shape the activation around leads, hosted meetings, content output and post-event follow-up.',
  },
  {
    icon: Crown,
    title: 'Premium environments',
    text: 'Trackside and rooftop settings across Abu Dhabi, Singapore and Monaco with high-intent guests.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    text: 'We learn the brand, category, audience and what success needs to look like.',
  },
  {
    step: '02',
    title: 'Strategise',
    text: 'We match the right race, format and rights package to your commercial objective.',
  },
  {
    step: '03',
    title: 'Activate',
    text: 'On-site execution across hospitality, entertainment, product moments and guest journey.',
  },
  {
    step: '04',
    title: 'Measure',
    text: 'Reporting on hosted guests, engagement, content assets and follow-up opportunities.',
  },
]

const activationCards = [
  {
    title: 'Presenting partner',
    text: 'Full weekend naming, arrival moments and priority creative integration.',
    image: IMG.brandPillar,
  },
  {
    title: 'VIP hospitality',
    text: 'Host tables, open bar moments and terrace access for relationship capital.',
    image: IMG.champagne,
  },
  {
    title: 'Champagne programme',
    text: 'Signature serves, bottle parades and premium free-flow moments guests remember.',
    image: IMG.champagneGuest,
  },
  {
    title: 'Branded bar takeover',
    text: 'Own the bar, menus, mixologists and the drinks conversation all day.',
    image: IMG.mixologist,
  },
  {
    title: 'After-party partner',
    text: 'DJ moments, lighting, late-night hosting and evening brand ownership.',
    image: IMG.djBooth,
  },
  {
    title: 'Live entertainment',
    text: 'Sax, dancers, performers and stage moments your brand can sponsor.',
    image: IMG.entertainment,
  },
  {
    title: 'Content studio',
    text: 'Creator corners, interview setups and social-first race weekend assets.',
    image: IMG.lifestyle,
  },
  {
    title: 'Product launch',
    text: 'Reveals, displays and limited-edition moments inside the terrace energy.',
    image: IMG.gourmet,
  },
  {
    title: 'Racing simulators',
    text: 'Interactive challenge zones with brand wrapping and guest competition.',
    image: IMG.sims,
  },
  {
    title: 'Private lounge',
    text: 'A quieter branded corner for C-suite hosting and high-touch conversations.',
    image: IMG.lounge,
  },
  {
    title: 'Guest gifting',
    text: 'Table drops, luxury gift bags and personalised keepsakes on arrival.',
    image: IMG.celebration,
  },
  {
    title: 'Photo moments',
    text: 'Step-and-repeat, cinematic terrace shots and shareable weekend content.',
    image: IMG.dancers,
  },
  {
    title: 'Founder dinner',
    text: 'Private investor breakfasts, roundtables or off-site partner dinners.',
    image: IMG.monacoParty,
  },
  {
    title: 'Skyline hosting',
    text: 'Singapore rooftop moments built for finance, tech and lifestyle brands.',
    image: IMG.singaporeNight,
  },
  {
    title: 'Trackside visibility',
    text: 'Turns 8–11 terrace presence with race action and fireworks energy.',
    image: IMG.track,
  },
  {
    title: 'Premium sampling',
    text: 'Taste, try-on or demo moments woven through the guest journey.',
    image: IMG.singaporeChampagne,
  },
]

const activationCarousel = [...activationCards, ...activationCards]

const raceMoments = [
  {
    race: 'Singapore',
    meta: '9–11 Oct 2026',
    text: 'Rooftop Marina Bay hospitality for finance, tech and premium lifestyle hosting.',
    href: '/races/singapore',
    accent: '#0EA5E9',
    image: IMG.singapore,
  },
  {
    race: 'Abu Dhabi',
    meta: '4–6 Dec 2026',
    text: 'Season finale trackside terrace with Turns 8–11 views, simulators and Yasalam energy.',
    href: '/races/abu-dhabi',
    accent: '#C9A84C',
    image: IMG.track,
  },
  {
    race: 'Monaco 2027',
    meta: 'Saturday · Sunday · 2-day',
    text: 'Flagship Monte Carlo platform for luxury brands, VIP hosting and high-touch activations.',
    href: '/races/monaco',
    accent: '#F90202',
    image: IMG.monaco,
  },
]

const faqs = [
  {
    q: 'What kinds of partnerships does Velocity Terrace offer?',
    a: 'Presenting partnerships, open bar and champagne programmes, after-party ownership, content studios, product launches, luxury lifestyle collaborations, VIP hosting and lead-generation activations.',
  },
  {
    q: 'Which races can brands activate at?',
    a: 'Singapore 2026, Abu Dhabi 2026 and Monaco 2027. Each platform suits different brand stories, from rooftop skyline hosting to season-finale celebration and flagship Monte Carlo luxury.',
  },
  {
    q: 'How is success measured?',
    a: 'We define this with you upfront. Common measures include hosted guests, qualified conversations, content assets, on-site engagement, introductions and post-event follow-up.',
  },
  {
    q: 'What investment range should brands expect?',
    a: 'It depends on race, rights level and activation depth. Share your objective and budget range and we will shape options that fit, from a sharp single moment to full weekend ownership.',
  },
  {
    q: 'Can smaller brands still work with Velocity Terrace?',
    a: 'Yes. Strong partnerships can be focused: a signature serve, gifting moment, content corner or hosted table can still deliver real value when designed properly.',
  },
  {
    q: 'Have brands activated with you before?',
    a: 'Yes. Red Bull activated with Velocity Terrace in Abu Dhabi. The weekend recap on this page shows the energy, hospitality and content output a brand partnership can create on the terrace.',
  },
]

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Velocity Terrace sponsorship enquiry')}&body=${encodeURIComponent('Brand:\nRace(s):\nBudget range:\nObjective:\nActivation idea (if any):\n')}`

export default function SponsorshipPage() {
  return (
    <>
      <SponsorshipJsonLd />
      <main className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Hero */}
        <section className="relative min-h-[100svh] overflow-hidden sm:min-h-[92vh]">
          <div className="absolute inset-0">
            <img
              src={IMG.hero}
              alt=""
              aria-hidden
              className="h-full w-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/78 to-[#0A0A0A]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
          </div>

          <SiteHeader className="relative z-10" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-center px-6 pb-16 pt-8 lg:min-h-[calc(92vh-7rem)] lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-5 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.35em] text-[#F90202]">
                Sponsorship · Brand activation · VIP hospitality
              </p>
              <h1 className="font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-[104px]">
                Put your brand
                <br />
                <span className="text-[#F90202]">inside the moment.</span>
              </h1>
              <p className="mt-7 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-white/75 sm:text-lg">
                Velocity Terrace builds premium F1 hospitality activations around VIP guests, culture, content, product moments and measurable relationship value across Singapore, Abu Dhabi and Monaco.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#partner-enquiry"
                  className="inline-flex items-center justify-center gap-2 rounded bg-[#F90202] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#FF1A1A]"
                >
                  Discuss a partnership <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#brand-in-action"
                  className="inline-flex items-center justify-center gap-2 rounded border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white/85 transition hover:border-white/40 hover:text-white"
                >
                  Watch a brand weekend
                </a>
              </div>
              <p className="mt-10 flex items-center gap-2 font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.28em] text-white/55">
                <MapPin className="h-3.5 w-3.5 text-[#F90202]" />
                Next up: Singapore · 9–11 Oct 2026 · Monaco 2027 enquiries open
              </p>
            </div>
          </div>
        </section>

        {/* Why partner */}
        <section className="px-6 py-16 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                Why partner
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-[0.92] text-white sm:text-6xl">
                More than visibility.
                <br />
                <span className="text-[#F90202]">Real impact.</span>
              </h2>
              <p className="mt-6 max-w-md font-[family-name:var(--font-inter)] leading-relaxed text-white/60">
                The strongest sponsorships are not passive logo placements. They make the brand part of the guest experience before, during and after race weekend.
              </p>
              <a
                href="#partner-enquiry"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#F90202] transition hover:gap-3"
              >
                See the benefits <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              {whyPartner.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="border-t border-white/10 pt-6">
                    <Icon className="mb-4 h-6 w-6 text-[#F90202]" />
                    <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                      {item.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Brand in action */}
        <section id="brand-in-action" className="bg-[#080808] px-6 py-16 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-5">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                Brand in action
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-[0.92] text-white sm:text-6xl">
                Red Bull.
                <br />
                <span className="text-[#F90202]">Abu Dhabi weekend.</span>
              </h2>
              <p className="mt-6 max-w-md font-[family-name:var(--font-inter)] leading-relaxed text-white/60">
                A brand that activated with Velocity Terrace. This weekend recap shows the hospitality, entertainment and energy partners get when they own the terrace for race weekend.
              </p>
              <ul className="mt-8 space-y-3 font-[family-name:var(--font-inter)] text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#F90202]">✓</span>
                  Real on-site activation, not a stock mood film
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#F90202]">✓</span>
                  Content, guests and terrace atmosphere in one cut
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#F90202]">✓</span>
                  Proof of what a partner weekend can look like
                </li>
              </ul>
              <a
                href="#partner-enquiry"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#F90202] transition hover:gap-3"
              >
                Build your own weekend <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={IMG.redbullPoster}
                  className="aspect-video w-full bg-black object-cover"
                >
                  <source src={IMG.redbullVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.28em] text-white/40">
                Red Bull · Velocity Terrace · Abu Dhabi
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                How we work
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                A partnership that performs.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((item) => (
                <div key={item.step}>
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-[#F90202]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activation ideas */}
        <section id="activation-ideas" className="overflow-hidden py-16 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                  Activation ideas
                </p>
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                  Ideas that move people.
                </h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] leading-relaxed text-white/55 lg:col-span-5">
                From a signature serve to full weekend ownership. We design activations around the guest journey, not just logo placement.
              </p>
            </div>
          </div>

          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0A0A0A] to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0A0A0A] to-transparent sm:w-16" />
            <div className="overflow-hidden">
              <div className="flex w-max animate-marquee-slow gap-4 pr-4 hover:[animation-play-state:paused]">
                {activationCarousel.map((card, index) => (
                  <article
                    key={`${card.title}-${index}`}
                    className="relative h-[360px] w-[260px] shrink-0 overflow-hidden rounded-2xl sm:h-[400px] sm:w-[300px]"
                  >
                    <img
                      src={card.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/45 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex h-[150px] flex-col justify-start p-5 sm:h-[160px] sm:p-6">
                      <h3 className="min-h-[2.5rem] font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-none text-white sm:min-h-[2.75rem] sm:text-3xl">
                        {card.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70">
                        {card.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Race platforms */}
        <section className="bg-[#080808] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                Explore the races
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                Unforgettable destinations.
                <br />
                Global audiences.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {raceMoments.map((item) => (
                <Link
                  key={item.race}
                  href={item.href}
                  className="group relative min-h-[420px] overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.image}
                    alt={`${item.race} Velocity Terrace`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/55 to-[#0A0A0A]/20" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p
                      className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.28em]"
                      style={{ color: item.accent }}
                    >
                      {item.meta}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white">
                      {item.race}
                    </h3>
                    <p className="mt-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70">
                      {item.text}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition group-hover:gap-3"
                      style={{ color: item.accent }}
                    >
                      View race <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                FAQ
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-5xl">
                Partnership questions, answered.
              </h2>
              <a
                href={mailtoHref}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#F90202] transition hover:gap-3"
              >
                Talk to the team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full border-t border-white/10">
                {faqs.map((item) => (
                  <AccordionItem key={item.q} value={item.q} className="border-white/10">
                    <AccordionTrigger className="py-5 text-left font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase tracking-wide text-white hover:no-underline sm:text-2xl">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="partner-enquiry" className="relative overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
          <div className="absolute inset-0">
            <img src={IMG.cta} alt="" aria-hidden className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[#0A0A0A]/72" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/55 to-[#F90202]/20" />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
              Partner with {SITE_NAME}
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-[0.92] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s put your brand
              <br />
              <span className="text-[#F90202]">inside the next moment.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-inter)] leading-relaxed text-white/70">
              Share the race, brand category, audience and what success looks like. We will shape the activation around the right platform.
            </p>
            <a
              href={mailtoHref}
              className="mt-9 inline-flex items-center gap-2 rounded bg-[#F90202] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#FF1A1A]"
            >
              <Mail className="h-4 w-4" />
              Start the conversation
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
