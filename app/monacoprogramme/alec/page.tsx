import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, ChevronRight, Crown, Disc3, GlassWater, Headphones, Info, Mail, MapPin, Star, UtensilsCrossed } from 'lucide-react'
import { MonacoProgrammeSubpageHeader } from '@/components/monaco-programme-subpage-header'
import { MonacoProgrammeJsonLd } from '@/components/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { MONACO_PROGRAMME_PAGES } from '@/lib/seo/monaco-programme-pages'

const ACCENT = '#F90202'
const CONTACT_EMAIL = 'info@velocity-terrace.com'

export const metadata: Metadata = buildPageMetadata({
  title: 'Alec Monopoly at Monaco Grand Prix 2026',
  description:
    'Alec Monopoly at Velocity Terrace Monaco GP 2026 — artist feature, DJ set timings, appearance information and weekend programme details.',
  path: '/monacoprogramme/alec',
  ogImage: '/monaco/10-2-alec-monopoly-djing37.jpg',
  keywords: ['Alec Monopoly Monaco', 'Velocity Terrace Alec Monopoly', 'Monaco GP entertainment'],
})

const navItems = [
  { label: 'Full Schedule', mobileLabel: 'Schedule', href: '/monacoprogramme#schedule', icon: Calendar },
  { label: 'Alec Monopoly', mobileLabel: 'Alec', href: '/monacoprogramme/alec', icon: NetworkIcon, active: true },
  { label: 'Menu', mobileLabel: 'Menu', href: '/monacoprogramme/menu', icon: UtensilsCrossed },
  { label: 'Drinks', mobileLabel: 'Drinks', href: '/monacoprogramme/drinks', icon: GlassWater },
] as const

function NetworkIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="5" r="2.25" />
      <circle cx="6" cy="18" r="2.25" />
      <circle cx="18" cy="18" r="2.25" />
      <path d="M11 7 7 16M13 7l4 9M8.25 18h7.5" strokeLinecap="round" />
    </svg>
  )
}

function TerraceIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M9 21h30" strokeLinecap="round" />
      <path d="M13 21v-2.5C13 13.8 17 10 21.8 10h4.4C31 10 35 13.8 35 18.5V21" />
      <path d="M16 21v-2c0-2.9 2.5-5.3 5.5-5.3h5c3 0 5.5 2.4 5.5 5.3v2" />
      <path d="M11 27h26" strokeLinecap="round" />
      <path d="M9 37h30" strokeLinecap="round" />
      <path d="M13 27v10M19 27v10M25 27v10M31 27v10M37 27v10" strokeLinecap="round" />
      <path d="M20 27c.8 2 2.2 3 4 3s3.2-1 4-3" strokeLinecap="round" />
    </svg>
  )
}

function ProgrammeNav() {
  return (
    <nav className="border-y border-white/[0.08] bg-[#080808]">
      <div className="mx-auto grid max-w-6xl grid-cols-4 px-4 sm:px-6 lg:px-12">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 border-r border-white/[0.08] px-1.5 sm:px-2 py-4 sm:py-5 text-center font-[family-name:var(--font-barlow-condensed)] text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-widest first:border-l ${
                item.active ? 'text-[#F90202]' : 'text-white/80 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">{item.mobileLabel}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

function FeatureStrip() {
  const features = [
    { label: '2 Exclusive DJ Sets', icon: Disc3 },
    { label: 'Iconic Art & Vibes', icon: Crown },
    { label: 'Premium Terrace Atmosphere', icon: TerraceIcon },
  ]

  return (
    <div className="grid border border-[#E7E1D6] bg-[#F7F3EA] sm:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon
        return (
          <div key={feature.label} className="flex items-center gap-5 border-b border-[#E7E1D6] p-8 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <Icon className="h-11 w-11 shrink-0 text-[#F90202]/65" strokeWidth={1.5} />
            <p className="font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase leading-tight text-[#0A0A0A]">
              {feature.label}
            </p>
          </div>
        )
      })}
    </div>
  )
}

function SetCard({ day }: { day: string }) {
  return (
    <article className="relative min-h-[270px] overflow-hidden border border-[#E7E1D6] bg-[#F7F3EA] p-8">
      <div className="flex items-center gap-3">
        <Calendar className="h-6 w-6 text-[#F90202]/65" strokeWidth={1.5} />
        <h3 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase text-[#0A0A0A]">
          {day}
        </h3>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
        <p className="font-[family-name:var(--font-barlow-condensed)] text-xl sm:text-2xl font-bold tabular-nums" style={{ color: ACCENT }}>
          17:15 – 18:15
        </p>
        <span className="hidden sm:block h-px w-12 shrink-0" style={{ background: ACCENT }} />
        <p className="font-[family-name:var(--font-barlow-condensed)] text-lg sm:text-xl font-black uppercase text-[#0A0A0A]">
          Alec Monopoly DJ Set
        </p>
      </div>
      <p className="mt-5 font-[family-name:var(--font-inter)] text-sm text-[#5C5650]">Level 5</p>
    </article>
  )
}

function InfoPanel() {
  const items = [
    {
      title: 'What To Expect',
      icon: Star,
      bullets: ['Live DJ-led moments', 'High-energy terrace atmosphere', 'Luxury hospitality setting', 'Best enjoyed after track action'],
    },
    {
      title: 'The Experience',
      icon: Headphones,
      bullets: ['Curated soundtrack by Alec Monopoly', 'Signature art, style & energy', 'Vibrant crowd and exclusive setting'],
    },
    {
      title: 'Good To Know',
      icon: Info,
      bullets: ['Appearing times subject to change', 'Check back for the latest updates during the weekend', 'All guests must be 18+'],
    },
  ]

  return (
    <div className="grid lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <article key={item.title} className="border border-[#E7E1D6] bg-[#F7F3EA] p-8">
            <div className="flex items-center gap-4">
              <Icon className="h-8 w-8 text-[#F90202]/65" strokeWidth={1.5} />
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase text-[#0A0A0A]">
                {item.title}
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-[#3D3834]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: ACCENT }} />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        )
      })}
    </div>
  )
}

function CtaFooter() {
  return (
    <section className="relative overflow-hidden bg-[#070707] px-6 py-12 text-white sm:px-8 sm:py-14 lg:px-12">
      <div className="absolute right-12 top-10 hidden text-[#F90202]/20 lg:block">
        <svg className="h-36 w-56" viewBox="0 0 260 160" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 94C71 61 129 45 238 49" />
          <path d="M57 111c34-34 80-50 144-51" />
          <path d="M38 124c45-12 103-15 176-9" />
          <path d="M194 49c8 11 12 25 10 41" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.34em]" style={{ color: ACCENT }}>
              Next Year
            </p>
            <span className="text-sm" style={{ color: ACCENT }}>✦</span>
          </div>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none sm:text-5xl">
            Monaco Grand Prix <span style={{ color: ACCENT }}>2027</span>
          </h2>
          <p className="mt-4 max-w-xl font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/75">
            Secure your place for an even bigger weekend in 2027. Enquire now to be the first to know when packages go on sale.
          </p>
        </div>
        <div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Monaco Grand Prix 2027 enquiry`}
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#F90202] px-8 py-5 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          >
            Enquire for 2027 <ChevronRight className="h-4 w-4" />
          </a>
          <div className="mt-5 flex flex-wrap items-center gap-5 font-[family-name:var(--font-inter)] text-xs text-white/60">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" style={{ color: ACCENT }} />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-10 flex max-w-6xl flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <img src="/monaco/velocity%20logo%20white.png" alt="Velocity Terrace" className="h-8 w-auto object-contain" />
        <p className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-inter)] text-xs text-white/60">
          <MapPin className="h-4 w-4" style={{ color: ACCENT }} />
          Monte Carlo · Level 5 & Level 2
        </p>
        <p className="font-[family-name:var(--font-inter)] text-xs text-white/60">
          Enjoy the weekend. See you next year.
        </p>
      </div>
    </section>
  )
}

const PAGE = { path: '/monacoprogramme/alec' as const, ...MONACO_PROGRAMME_PAGES['/monacoprogramme/alec'] }

export default function MonacoProgrammeAlecPage() {
  return (
    <>
      <MonacoProgrammeJsonLd {...PAGE} />
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <img src="/monaco/page2-img4.jpg" alt="" aria-hidden className="h-full w-full object-cover opacity-45 blur-[1px]" />
          <img src="/monaco/page4-img15.jpg" alt="" aria-hidden className="h-full w-full object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 bg-[#050505]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/45" />

        <MonacoProgrammeSubpageHeader />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-8 text-center lg:px-12">
          <p className="font-[family-name:var(--font-barlow-condensed)] text-xs sm:text-sm font-bold uppercase tracking-[0.28em] sm:tracking-[0.42em]" style={{ color: ACCENT }}>
            Monaco Grand Prix 2026
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-8xl lg:text-[112px]">
            Alec Monopoly
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-white/80 sm:text-lg">
            Contemporary artist, DJ and cultural icon bringing signature energy to the Monaco GP weekend.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm text-white/70">
            <MapPin className="h-4 w-4" style={{ color: ACCENT }} />
            Monte Carlo · Level 5 & Level 2
          </p>
        </div>
      </header>

      <ProgrammeNav />

      <section className="rounded-t-[1.75rem] bg-[#F7F3EA] px-5 py-9 text-[#0A0A0A] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-center gap-5">
            <span className="hidden h-px w-16 bg-[#F90202]/35 sm:block" />
            <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.28em] text-[#0A0A0A]/80">
              Artist Feature
            </p>
            <span className="hidden h-px w-16 bg-[#F90202]/35 sm:block" />
          </div>

          <div className="grid gap-8 border border-[#E7E1D6] bg-[#F7F3EA] p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            <div className="relative min-h-[360px] overflow-hidden rounded-lg">
              <img src="/monaco/10-2-alec-monopoly-djing37.jpg" alt="Alec Monopoly at Velocity Terrace" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.28em]" style={{ color: ACCENT }}>
                About
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-[#0A0A0A]">
                About Alec Monopoly
              </h2>
              <p className="mt-8 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-[#2F2B27]">
                Alec Monopoly is a contemporary artist and DJ whose work sits at the intersection of street art, luxury culture,
                and high-energy entertainment.
              </p>
              <p className="mt-5 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-[#2F2B27]">
                This weekend, he brings his unmistakable signature style and sound to Velocity Terrace, creating an exclusive party
                atmosphere above Monte Carlo.
              </p>
              <div className="mt-8 h-0.5 w-12" style={{ background: ACCENT }} />
            </div>
          </div>

          <FeatureStrip />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <SetCard day="Saturday 6 June" />
            <SetCard day="Sunday 7 June" />
          </div>

          <div className="mt-5">
            <InfoPanel />
          </div>
        </div>
      </section>
      <CtaFooter />
    </main>
    </>
  )
}
