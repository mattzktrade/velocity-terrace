import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, ChevronRight, Clock, GlassWater, Leaf, Mail, MapPin, ShieldCheck, UtensilsCrossed } from 'lucide-react'
import { MonacoProgrammeSubpageHeader } from '@/components/monaco-programme-subpage-header'
import { MonacoProgrammeJsonLd } from '@/components/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { MONACO_PROGRAMME_PAGES } from '@/lib/seo/monaco-programme-pages'

const ACCENT = '#F90202'
const CONTACT_EMAIL = 'info@velocity-terrace.com'

export const metadata: Metadata = buildPageMetadata({
  title: 'Monaco Grand Prix Food Menu 2026',
  description:
    'Velocity Terrace Monaco GP 2026 food menu including breakfast, small plates, main service, desserts and dietary information for the weekend programme.',
  path: '/monacoprogramme/menu',
  ogImage: '/monaco/page4-img15.jpg',
  keywords: ['Velocity Terrace food menu', 'Monaco GP menu', 'Monaco Grand Prix programme'],
})

const navItems = [
  { label: 'Full Schedule', mobileLabel: 'Schedule', href: '/monacoprogramme#schedule', icon: Calendar },
  { label: 'Alec Monopoly', mobileLabel: 'Alec', href: '/monacoprogramme/alec', icon: NetworkIcon },
  { label: 'Menu', mobileLabel: 'Menu', href: '/monacoprogramme/menu', icon: UtensilsCrossed, active: true },
  { label: 'Drinks', mobileLabel: 'Drinks', href: '/monacoprogramme/drinks', icon: GlassWater },
] as const

const menuSections = [
  {
    title: 'Breakfast',
    subtitle: 'Served Saturday & Sunday · 11:00–13:00',
    icon: SunIcon,
    items: [
      'Fresh pastries and croissants',
      'Seasonal fruit platter',
      'Greek yoghurt, granola & berries',
      'Smoked salmon & cream cheese bagels',
      'Scrambled eggs on brioche',
      'Fresh juices, tea & coffee',
    ],
  },
  {
    title: 'Small Plates',
    subtitle: 'Light bites throughout the day',
    icon: ClocheIcon,
    items: [
      'Truffle arancini',
      'Burrata with heritage tomatoes',
      'Tuna tartare cones',
      'Mini lobster rolls',
      'Parmesan fries',
      'Mediterranean mezze selection',
    ],
  },
  {
    title: 'Main Service',
    subtitle: 'Luncheon service from 13:00',
    icon: ClocheIcon,
    items: [
      'Grilled sea bass with citrus herbs',
      'Beef fillet with pommes purée',
      'Wild mushroom risotto',
      'Roast chicken supreme',
      'Rigatoni alla vodka',
      'Charred vegetable tart',
    ],
  },
  {
    title: 'Dessert',
    subtitle: '',
    icon: CakeIcon,
    items: [
      'Lemon tart',
      'Tiramisu cups',
      'Chocolate délice',
      'Fresh berries & chantilly',
      'Mini patisserie selection',
    ],
  },
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

function SunIcon({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="32" cy="32" r="10" />
      <path d="M32 6v10M32 48v10M6 32h10M48 32h10M13.6 13.6l7 7M43.4 43.4l7 7M50.4 13.6l-7 7M20.6 43.4l-7 7" strokeLinecap="round" />
    </svg>
  )
}

function ClocheIcon({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 48h56M18 48c2-18 16-30 32-30s30 12 32 30" strokeLinecap="round" />
      <path d="M38 18v-3a4 4 0 0 1 8 0v3" />
      <path d="M25 42h30" strokeLinecap="round" />
    </svg>
  )
}

function CakeIcon({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M16 31h48v22H16z" />
      <path d="M16 31 40 17l24 14" />
      <path d="M24 37h32M24 44h32" strokeLinecap="round" />
      <path d="M40 17V8M34 8h12" strokeLinecap="round" />
    </svg>
  )
}

function MenuNav() {
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

function MenuCard({ section }: { section: (typeof menuSections)[number] }) {
  const Icon = section.icon

  return (
    <article className="relative min-h-[420px] border border-[#E7E1D6] bg-[#F7F3EA] p-8 sm:p-10">
      <div className="flex items-start gap-5">
        <Icon className="mt-0.5 h-12 w-12 shrink-0 text-[#F90202]/55" />
        <div>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-[#0A0A0A] sm:text-5xl">
            {section.title}
          </h2>
          {section.subtitle ? (
            <p className="mt-2 font-[family-name:var(--font-inter)] text-sm text-[#F90202]/80">{section.subtitle}</p>
          ) : null}
          <div className="mt-3 h-0.5 w-12" style={{ background: ACCENT }} />
        </div>
      </div>

      <div className="mt-10 divide-y divide-[#DDD6CA]">
        {section.items.map((item) => (
          <p key={item} className="py-3 font-[family-name:var(--font-inter)] text-sm text-[#2F2B27] first:pt-0 last:pb-0">
            {item}
          </p>
        ))}
      </div>
    </article>
  )
}

function InfoPanel() {
  const items = [
    {
      title: 'Food Service Throughout The Day',
      text: 'From breakfast to late afternoon, with light bites available all day.',
      icon: Clock,
    },
    {
      title: 'Vegetarian Options Available',
      text: 'A selection of vegetarian dishes available across all menus.',
      icon: Leaf,
    },
    {
      title: 'Please Speak To The Team For Dietary Requirements And Allergies',
      text: 'Our team is here to help you enjoy your experience with confidence.',
      icon: ShieldCheck,
    },
  ]

  return (
    <div className="grid overflow-hidden rounded-xl border border-[#E7E1D6] bg-[#F7F3EA] sm:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.title} className="border-b border-[#E7E1D6] p-7 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <Icon className="mx-auto h-8 w-8 text-[#F90202]/55" strokeWidth={1.5} />
            <h3 className="mx-auto mt-4 max-w-[14rem] font-[family-name:var(--font-barlow-condensed)] text-sm font-black uppercase tracking-[0.12em] text-[#0A0A0A]">
              {item.title}
            </h3>
            <p className="mx-auto mt-3 max-w-[15rem] font-[family-name:var(--font-inter)] text-xs leading-relaxed text-[#5C5650]">
              {item.text}
            </p>
          </div>
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

const PAGE = { path: '/monacoprogramme/menu' as const, ...MONACO_PROGRAMME_PAGES['/monacoprogramme/menu'] }

export default function MonacoProgrammeMenuPage() {
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
            Food Menu
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-white/80 sm:text-lg">
            A refined dining experience to complement an unforgettable weekend of world-class racing, entertainment and hospitality.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm text-white/70">
            <MapPin className="h-4 w-4" style={{ color: ACCENT }} />
            Monte Carlo · Level 5 & Level 2
          </p>
        </div>
      </header>

      <MenuNav />

      <section className="rounded-t-[1.75rem] bg-[#F7F3EA] px-5 py-9 text-[#0A0A0A] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-center gap-5">
            <span className="hidden h-px w-16 bg-[#F90202]/35 sm:block" />
            <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.28em] text-[#0A0A0A]/80">
              Sample Menu — Official Menu To Be Confirmed
            </p>
            <span className="hidden h-px w-16 bg-[#F90202]/35 sm:block" />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {menuSections.map((section) => (
              <MenuCard key={section.title} section={section} />
            ))}
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
