import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Camera,
  Crown,
  Gem,
  Handshake,
  Mail,
  Megaphone,
  Sparkles,
  Trophy,
  Users,
  Wine,
  Zap,
} from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { absoluteUrl, CONTACT_EMAIL, SITE_NAME, SITE_URL } from '@/lib/seo/site'

export const metadata = buildPageMetadata({
  title: 'F1 Hospitality Sponsorship & Brand Activation',
  description:
    'Partner with Velocity Terrace for premium F1 hospitality sponsorship, brand activation, VIP hosting, product placement and experiential marketing at Monaco, Singapore and Abu Dhabi events.',
  path: '/sponsorship',
  ogImage: '/monaco/page4-img15.jpg',
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
      ]}
    />
  )
}

const partnerTypes = [
  {
    icon: Crown,
    title: 'Presenting partner',
    text: 'High-visibility naming, arrival moments, co-branded hospitality language and priority creative integration across the weekend.',
  },
  {
    icon: Wine,
    title: 'Bar, champagne or cocktail partner',
    text: 'Signature serves, branded bars, tableside moments, menu placement, bottle parades and VIP gifting that guests actually interact with.',
  },
  {
    icon: Sparkles,
    title: 'After-party partner',
    text: 'Own the evening: DJ moments, lighting, photo walls, guest wristbands, late-night hosting and cultural programming.',
  },
  {
    icon: Camera,
    title: 'Content & creator partner',
    text: 'Branded content zones, interview corners, creator hosting, photo moments and social-first assets designed before the event starts.',
  },
  {
    icon: Gem,
    title: 'Luxury lifestyle partner',
    text: 'Fashion, jewellery, watches, beauty, wellness, concierge, travel, automotive and members-club collaborations with premium guest fit.',
  },
  {
    icon: BarChart3,
    title: 'Data & lead partner',
    text: 'QR-led guest journeys, qualified introductions, private meetings, RSVP capture and post-event follow-up designed around measurable value.',
  },
]

const activationIdeas = [
  'Presented by partnership for a full race weekend or single day',
  'Signature champagne, cocktail or premium spirits programme',
  'Branded VIP bar, terrace corner or private lounge',
  'After-party naming partner with DJ booth integration',
  'Creator and content studio for social-first storytelling',
  'Luxury gift bags, table drops or personalised guest gifting',
  'Watch, jewellery, fashion or beauty styling moments',
  'Wellness pit-stop: recovery, skincare, hydration or concierge treatments',
  'Sim racing, reaction-time, golf, gaming or prediction challenge',
  'Private founder dinner, investor breakfast or C-suite roundtable',
  'Product reveal, car display or limited-edition launch',
  'QR guest journey for prize draw, lead capture or exclusive access',
  'Branded arrival, wristbands, lanyards, menus or digital screens',
  'Photo wall, step-and-repeat or cinematic race-weekend content package',
  'Off-site partner dinner, yacht moment, hotel suite or after-hours extension',
  'Category exclusivity across fintech, luxury, travel, lifestyle, drinks or tech',
]

const outcomes = [
  {
    icon: Users,
    title: 'Relationship capital',
    text: 'Use the weekend to host clients, prospects, investors and partners in an environment built for real conversation.',
  },
  {
    icon: Megaphone,
    title: 'Brand meaning, not just logos',
    text: 'The best sponsorships make the brand part of the guest experience through moments people remember and share.',
  },
  {
    icon: BadgeCheck,
    title: 'Premium audience fit',
    text: 'Velocity Terrace attracts guests who value access, hospitality, lifestyle, travel, luxury, sport and culture.',
  },
  {
    icon: BarChart3,
    title: 'Measurable activation',
    text: 'We can shape partnerships around guest engagement, qualified leads, hosted meetings, content output and post-event follow-up.',
  },
]

const raceMoments = [
  {
    race: 'Singapore',
    meta: 'Night-race rooftop · 2026',
    text: 'Ideal for skyline content, finance and tech hosting, premium drinks, creator moments and C-suite client entertainment.',
    href: '/races/singapore',
    accent: '#0EA5E9',
  },
  {
    race: 'Abu Dhabi',
    meta: 'Season finale · Yas Marina',
    text: 'A natural platform for end-of-year client hosting, celebration-led activations, travel partners and finale-weekend storytelling.',
    href: '/#contact',
    accent: '#C9A84C',
  },
  {
    race: 'Monaco 2027',
    meta: 'Monte Carlo · Saturday, Sunday or 2-day',
    text: 'The flagship luxury platform: brand worlds, VIP hosting, premium product integration and high-touch relationship building.',
    href: '/races/monaco',
    accent: '#F90202',
  },
]

export default function SponsorshipPage() {
  return (
    <>
      <SponsorshipJsonLd />
      <main className="min-h-screen bg-[#0A0A0A] text-white">
        <section className="relative min-h-[92vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/monaco/page3-img8.jpg"
              alt=""
              aria-hidden
              className="h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,2,2,0.18),transparent_42%),linear-gradient(to_bottom,rgba(10,10,10,0.1),#0A0A0A_92%)]" />
          </div>

          <SiteHeader className="relative z-10" />

          <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center lg:px-12">
            <p className="mb-5 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.38em] text-[#F90202]">
              Sponsorship · Brand activation · VIP hosting
            </p>
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-[118px]">
              Put your brand<br />
              <span className="text-[#F90202]">inside the moment.</span>
            </h1>
            <p className="mt-8 max-w-3xl font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/75 sm:text-xl">
              Velocity Terrace partners with brands that want more than a logo. Build a premium F1 hospitality activation around VIP guests, culture, content, product moments and measurable relationship value.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#partner-enquiry"
                className="inline-flex items-center gap-2 rounded bg-[#F90202] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#FF1A1A]"
              >
                Discuss a partnership <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#activation-ideas"
                className="inline-flex items-center gap-2 rounded border border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:border-white/35 hover:text-white"
              >
                See activation ideas
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                The direct answer
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                What can a brand do with Velocity Terrace?
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/75">
                Brands can partner with Velocity Terrace to create premium F1 hospitality activations: sponsored bars, after-parties, product launches, private lounges, content studios, VIP guest hosting, lead generation, gifting and category partnerships at our race-weekend events.
              </p>
              <p className="mt-5 font-[family-name:var(--font-inter)] leading-relaxed text-white/55">
                The strongest sponsorships are not passive logo placements. They make the sponsor part of the guest experience before, during and after the race weekend.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#080808] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                Why partner
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white sm:text-6xl">
                Built for brands that need more than impressions.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {outcomes.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-[#111111] p-7">
                    <Icon className="mb-5 h-7 w-7 text-[#F90202]" />
                    <h3 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase text-white">
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

        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                  Partner formats
                </p>
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                  From small sharp moments to full weekend ownership.
                </h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] leading-relaxed text-white/55 lg:col-span-5">
                No idea is too small or too ambitious if it improves the guest experience. We can shape the partnership around your audience, product, sales goals and activation budget.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {partnerTypes.map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-[#111111] p-7 transition hover:-translate-y-1 hover:border-[#F90202]/45"
                  >
                    <Icon className="mb-5 h-7 w-7 text-[#F90202]" />
                    <h3 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase text-white">
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

        <section id="activation-ideas" className="relative overflow-hidden bg-[#080808] px-6 py-16 lg:px-12 lg:py-24">
          <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-[#F90202]/10 blur-3xl" />
          <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#C9A84C]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                Activation canvas
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                Ideas brands can own.
              </h2>
              <p className="mt-5 font-[family-name:var(--font-inter)] leading-relaxed text-white/60">
                A good sponsorship should be designed around objectives: relationship-building, lead generation, launch impact, content, cultural credibility or client retention.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {activationIdeas.map((idea) => (
                <div key={idea} className="rounded-xl border border-white/10 bg-[#111111]/80 p-4 backdrop-blur">
                  <p className="flex gap-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#F90202]" />
                    <span>{idea}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                Race platforms
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white sm:text-6xl">
                Choose the moment that fits your brand.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {raceMoments.map((item) => (
                <Link
                  key={item.race}
                  href={item.href}
                  className="group rounded-2xl border border-white/10 bg-[#111111] p-7 transition hover:-translate-y-1 hover:border-white/25"
                >
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.28em]" style={{ color: item.accent }}>
                    {item.meta}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white">
                    {item.race}
                  </h3>
                  <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                    {item.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: item.accent }}>
                    Explore platform <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080808] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                How we build it
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                A partnership should have a job.
              </h2>
            </div>
            <div className="grid gap-4 lg:col-span-7">
              {[
                'Define the commercial objective: awareness, hospitality, lead generation, launch impact, relationship-building or content.',
                'Choose the race, audience and activation format that makes the brand feel native to the weekend.',
                'Build a rights and activation plan: on-site moments, digital touchpoints, guest journey, social content and follow-up.',
                'Measure what matters: hosted guests, qualified conversations, content assets, engagement, introductions and post-event pipeline.',
              ].map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-[#111111] p-5">
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-black text-[#F90202]">
                    0{index + 1}
                  </span>
                  <p className="font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/65">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partner-enquiry" className="px-6 py-16 text-center lg:px-12 lg:py-24">
          <Handshake className="mx-auto mb-6 h-9 w-9 text-[#F90202]" />
          <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
            Partner with us
          </p>
          <h2 className="mx-auto max-w-4xl font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
            Tell us what your brand wants to achieve.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-inter)] leading-relaxed text-white/60">
            Share the race, brand category, ideal audience, budget range and what success would look like. We will shape ideas around the right platform.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Velocity Terrace sponsorship enquiry&body=${encodeURIComponent('Brand:\nRace(s):\nBudget range:\nObjective:\nActivation idea (if any):\n')}`}
            className="mt-8 inline-flex items-center gap-2 rounded bg-[#F90202] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#FF1A1A]"
          >
            <Mail className="h-4 w-4" />
            Start a sponsor conversation
          </a>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
