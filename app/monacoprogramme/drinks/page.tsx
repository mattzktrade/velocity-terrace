import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, ChevronRight, GlassWater, Mail, MapPin, UtensilsCrossed } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo/metadata'

const ACCENT = '#E8390E'
const CONTACT_EMAIL = 'info@velocity-terrace.com'

export const metadata: Metadata = buildPageMetadata({
  title: 'Monaco Grand Prix Drinks Menu 2026',
  description:
    'Velocity Terrace Monaco GP 2026 drinks menu including champagne, wine, beer, spirits and soft drinks for the weekend programme.',
  path: '/monacoprogramme/drinks',
  ogImage: '/monaco/page4-img15.jpg',
  keywords: ['Velocity Terrace drinks menu', 'Monaco GP drinks', 'Monaco Grand Prix programme'],
})

const navItems = [
  { label: 'Full Schedule', href: '/monacoprogramme#schedule', icon: Calendar },
  { label: 'Alec Monopoly', href: '/monacoprogramme/alec', icon: NetworkIcon },
  { label: 'Menu', href: '/monacoprogramme/menu', icon: UtensilsCrossed },
  { label: 'Drinks', href: '/monacoprogramme/drinks', icon: GlassWater, active: true },
] as const

const champagne = [
  ['MOËT & CHANDON IMPÉRIAL BRUT', 'Champagne, France'],
  ['VEUVE CLICQUOT YELLOW LABEL BRUT', 'Champagne, France'],
  ['DOM PÉRIGNON VINTAGE', 'Champagne, France'],
  ['RUINART ROSÉ', 'Champagne, France'],
  ['CRISTAL ROEDERER', 'Champagne, France'],
]

const wine = [
  ['CHABLIS', 'Domaine Louis Moreau, France'],
  ['SAUVIGNON BLANC', 'Cloudy Bay, New Zealand'],
  ['PINOT GRIGIO', 'Santa Margherita, Italy'],
  ['ROSÉ', 'Whispering Angel, France'],
  ['PINOT NOIR', 'Meiomi, USA'],
  ['CABERNET SAUVIGNON', 'Josh Cellars, USA'],
]

const beer = ['PERONI NASTRO AZZURRO', 'CORONA EXTRA', 'HEINEKEN', 'MONACO BEER (LOCAL)']

const spirits = [
  ['VODKA', 'Belvedere, Grey Goose'],
  ['GIN', 'Tanqueray, Bombay Sapphire'],
  ['WHISKEY', 'Jameson, Chivas Regal 12'],
  ['RUM', 'Bacardi, Havana Club'],
  ['TEQUILA', 'Patrón Silver, Don Julio Blanco'],
]

const softDrinks = ['WATER (STILL / SPARKLING)', 'COCA-COLA', 'DIET COKE', 'LEMONADE', 'ORANGE JUICE', 'RED BULL']

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

function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <div className="relative z-10">
      <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl font-black uppercase leading-none text-[#0A0A0A]">
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-12" style={{ background: ACCENT }} />
      {description ? (
        <p className="mt-5 max-w-[12rem] font-[family-name:var(--font-inter)] text-sm leading-relaxed text-[#3D3834]">
          {description}
        </p>
      ) : null}
    </div>
  )
}

function PremiumSection({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: string[][]
}) {
  return (
    <section className="relative grid gap-8 border border-[#E7E1D6] bg-[#F7F3EA] p-8 sm:grid-cols-[260px_1fr] sm:p-10">
      <div className="relative min-h-[260px]">
        <SectionTitle title={title} description={description} />
      </div>
      <div className="divide-y divide-[#DDD6CA]">
        {items.map(([name, origin]) => (
          <div key={name} className="py-4 first:pt-0 last:pb-0">
            <p className="font-[family-name:var(--font-inter)] text-sm font-black uppercase tracking-tight text-[#0A0A0A]">
              {name}
            </p>
            <p className="mt-1 font-[family-name:var(--font-inter)] text-sm text-[#5C5650]">{origin}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CompactSection({
  title,
  items,
}: {
  title: string
  items: Array<string | string[]>
}) {
  return (
    <section className="relative min-h-[300px] overflow-hidden border border-[#E7E1D6] bg-[#F7F3EA] p-8">
      <SectionTitle title={title} />
      <div className="relative z-10 mt-7 space-y-3">
        {items.map((item) => {
          const key = Array.isArray(item) ? item[0] : item
          return (
            <div key={key}>
              <p className="font-[family-name:var(--font-inter)] text-xs font-black uppercase text-[#0A0A0A]">
                {Array.isArray(item) ? item[0] : item}
              </p>
              {Array.isArray(item) ? (
                <p className="font-[family-name:var(--font-inter)] text-xs text-[#5C5650]">{item[1]}</p>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function DrinksNav() {
  return (
    <nav className="border-y border-white/[0.08] bg-[#080808]">
      <div className="mx-auto grid max-w-6xl grid-cols-4 px-4 sm:px-6 lg:px-12">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-center gap-2 border-r border-white/[0.08] px-2 py-5 text-center font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-widest first:border-l ${
                item.active ? 'text-[#E8390E]' : 'text-white/80 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">{item.label.split(' ')[0]}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

function CtaFooter() {
  return (
    <section className="relative overflow-hidden bg-[#070707] px-6 py-12 text-white sm:px-8 sm:py-14 lg:px-12">
      <div className="absolute right-12 top-10 hidden text-[#E8390E]/20 lg:block">
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
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#E8390E] px-8 py-5 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          >
            Enquire for 2027 <ChevronRight className="h-4 w-4" />
          </a>
          <div className="mt-5 flex flex-wrap items-center gap-5 font-[family-name:var(--font-inter)] text-xs text-white/60">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" style={{ color: ACCENT }} />
              {CONTACT_EMAIL}
            </a>
            <a href="https://wa.me/44XXXXXXXXXX" className="inline-flex items-center gap-2 hover:text-white">
              <span className="h-4 w-4 rounded-full border border-[#E8390E]" />
              WhatsApp
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

export default function MonacoProgrammeDrinksPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <img src="/monaco/page2-img4.jpg" alt="" aria-hidden className="h-full w-full object-cover opacity-45 blur-[1px]" />
          <img src="/monaco/page4-img15.jpg" alt="" aria-hidden className="h-full w-full object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 bg-[#050505]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/45" />

        <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-12">
          <Link href="/" aria-label="Velocity Terrace home">
            <img src="/monaco/velocity%20logo%20white.png" alt="Velocity Terrace" className="h-8 w-auto object-contain sm:h-10" />
          </Link>
          <Link
            href="/monacoprogramme"
            className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.24em] text-white/85 hover:text-white"
          >
            ← Weekend Programme
          </Link>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-8 text-center lg:px-12">
          <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.42em]" style={{ color: ACCENT }}>
            Monaco Grand Prix 2026
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-barlow-condensed)] text-6xl font-black uppercase leading-none tracking-tight text-white sm:text-8xl lg:text-[112px]">
            Drinks Menu
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-white/80 sm:text-lg">
            Premium drinks, flowing all weekend long. From morning coffees to sunset cocktails and champagne celebrations.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm text-white/70">
            <MapPin className="h-4 w-4" style={{ color: ACCENT }} />
            Monte Carlo · Level 5 & Level 2
          </p>
        </div>
      </header>

      <DrinksNav />

      <section className="rounded-t-[1.75rem] bg-[#F7F3EA] px-5 py-9 text-[#0A0A0A] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden border border-[#E7E1D6]">
            <PremiumSection
              title="Champagne"
              description="A curated selection of premium champagnes to elevate every moment."
              items={champagne}
            />
            <PremiumSection
              title="Wine"
              description="A fine selection of red, white and rosé wines from around the world."
              items={wine}
            />
            <div className="grid lg:grid-cols-3">
              <CompactSection title="Beer" items={beer} />
              <CompactSection title="Spirits" items={spirits} />
              <CompactSection title="Soft Drinks" items={softDrinks} />
            </div>
          </div>
        </div>
      </section>
      <CtaFooter />
    </main>
  )
}
