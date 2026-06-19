import Link from 'next/link'
import { ChevronRight, Mail, MapPin, Sparkles, Trophy, Users } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { absoluteUrl, CONTACT_EMAIL, SITE_NAME, SITE_URL } from '@/lib/seo/site'

const faqs = [
  {
    q: 'What is Velocity Terrace?',
    a: 'Velocity Terrace is premium Formula 1 party hospitality for guests who want the Grand Prix weekend to feel like a high-end social event: race views, open bar, food, DJs and after-party energy.',
  },
  {
    q: 'Which races does Velocity Terrace cover?',
    a: 'Velocity Terrace focuses on Singapore, Abu Dhabi and Monaco 2027, with Monaco available as Saturday-only, Sunday-only and full 2-day hospitality packages.',
  },
  {
    q: 'Who is Velocity Terrace for?',
    a: 'Velocity Terrace is for private groups, founders, brands, corporate hosts, high-net-worth guests and F1 fans who want premium hospitality with a stronger party atmosphere.',
  },
  {
    q: 'How is Velocity Terrace different from traditional F1 hospitality?',
    a: 'Traditional hospitality is often formal and corporate. Velocity Terrace keeps premium service and race access, but adds open bar energy, DJs, entertainment and a curated social crowd.',
  },
]

export const metadata = buildPageMetadata({
  title: 'About Velocity Terrace — Premium F1 Party Hospitality',
  description:
    'Learn what Velocity Terrace is: premium F1 party hospitality at Singapore, Abu Dhabi and Monaco 2027 with race views, open bar, food, live DJs and VIP after-party access.',
  path: '/about',
  ogImage: '/monaco/page4-img15.jpg',
  keywords: [
    'About Velocity Terrace',
    'Velocity Terrace F1 hospitality',
    'F1 party hospitality',
    'Formula 1 VIP party',
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

function AboutJsonLd() {
  const pageUrl = absoluteUrl('/about')
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'About Velocity Terrace',
      description:
        'Velocity Terrace is premium F1 party hospitality for Singapore, Abu Dhabi and Monaco 2027.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-GB',
    },
    {
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'About', item: pageUrl },
      ],
    },
  ]

  return <JsonLdScript data={data} />
}

const destinations = [
  {
    name: 'Singapore',
    meta: 'Marina Bay · 2026',
    copy: 'Premium rooftop hospitality at the National Gallery Padang Deck with skyline views, open bar, food and live entertainment.',
    href: '/races/singapore',
    accent: '#0EA5E9',
  },
  {
    name: 'Abu Dhabi',
    meta: 'Yas Marina · Season finale',
    copy: 'A finale-weekend hospitality concept built around open bar, food, music and end-of-season celebration energy.',
    href: '/#contact',
    accent: '#C9A84C',
  },
  {
    name: 'Monaco 2027',
    meta: 'Monte Carlo · Saturday, Sunday or 2-day',
    copy: 'Secure Saturday-only, Sunday-only or full 2-day Monaco Grand Prix hospitality with front-row views and after-party access.',
    href: '/races/monaco',
    accent: '#F90202',
  },
]

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      <main className="min-h-screen bg-[#0A0A0A] text-white">
        <section className="relative overflow-hidden px-6 py-8 lg:px-12">
          <div className="absolute inset-0">
            <img
              src="/monaco/page4-img15.jpg"
              alt=""
              aria-hidden
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/10 via-[#0A0A0A]/60 to-[#0A0A0A]" />
          </div>

          <SiteHeader className="relative z-10 -mx-6 -mt-8 lg:-mx-12" />

          <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center py-20 text-center">
            <p className="mb-5 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.35em] text-[#F90202]">
              About Velocity Terrace
            </p>
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-[104px]">
              F1 hospitality.<br />
              <span className="text-[#F90202]">Party standard.</span>
            </h1>
            <p className="mt-8 max-w-3xl font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/75 sm:text-xl">
              {SITE_NAME} is premium Formula 1 party hospitality for Singapore, Abu Dhabi and Monaco 2027: front-row or rooftop views, open bar, food, live DJs and after-party access for guests who want the weekend to feel unforgettable.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/races/monaco"
                className="inline-flex items-center gap-2 rounded bg-[#F90202] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#FF1A1A]"
              >
                Enquire Monaco 2027 <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded border border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:border-white/35 hover:text-white"
              >
                Read the guides
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[
              { icon: Trophy, title: 'Premium race access', text: 'Hospitality chosen for the view, the location and the feeling of being inside the Grand Prix weekend.' },
              { icon: Sparkles, title: 'Built as a party', text: 'Open bar, DJs, entertainment and after-party moments keep the energy high from arrival to evening.' },
              { icon: Users, title: 'Made for hosting', text: 'Designed for private groups, founders, brands, corporate clients and high-net-worth guests.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-[#111111] p-7">
                  <Icon className="mb-5 h-7 w-7 text-[#F90202]" />
                  <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-[#080808] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                The direct answer
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                What is Velocity Terrace?
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/75">
                Velocity Terrace is a premium Formula 1 hospitality brand that turns Grand Prix weekends into high-energy social experiences. Guests get premium race views, open bar, food, DJs, entertainment and after-party access across selected F1 destinations.
              </p>
              <p className="mt-5 font-[family-name:var(--font-inter)] leading-relaxed text-white/55">
                The experience is intentionally different from traditional corporate hospitality. It is still premium, but the mood is more social: built for hosting, networking, celebrating and watching the race with a crowd that wants the weekend to feel alive.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                Destinations
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white sm:text-6xl">
                Three race weekends. One standard.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {destinations.map((destination) => (
                <Link
                  key={destination.name}
                  href={destination.href}
                  className="group rounded-2xl border border-white/10 bg-[#111111] p-7 transition hover:-translate-y-1 hover:border-white/25"
                >
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.3em]" style={{ color: destination.accent }}>
                    {destination.meta}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white">
                    {destination.name}
                  </h3>
                  <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                    {destination.copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: destination.accent }}>
                    Explore <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080808] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
                FAQ
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white sm:text-6xl">
                Clear answers
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((item) => (
                <article key={item.q} className="rounded-2xl border border-white/10 bg-[#111111] p-6">
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase text-white">
                    {item.q}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/65">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 text-center lg:px-12 lg:py-24">
          <MapPin className="mx-auto mb-5 h-7 w-7 text-[#F90202]" />
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white sm:text-6xl">
            Ready to host properly?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-inter)] text-white/60">
            Tell us the race, group size and package you want. We will come back with the best options.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Velocity Terrace enquiry`}
            className="mt-8 inline-flex items-center gap-2 rounded bg-[#F90202] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#FF1A1A]"
          >
            <Mail className="h-4 w-4" />
            Enquire now
          </a>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}
