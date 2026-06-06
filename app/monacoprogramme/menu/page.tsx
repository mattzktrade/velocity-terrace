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
    'Velocity Terrace Monaco GP 2026 official food menu including Saturday, Sunday, breakfast and two-day buffet service.',
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

type MenuItem = {
  name: string
  description?: string | string[]
}

type MenuSection = {
  title: string
  subtitle?: string
  icon: typeof SunIcon
  wide?: boolean
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: 'Saturday Cold Dishes',
    subtitle: 'Menu 2',
    icon: ClocheIcon,
    items: [
      {
        name: 'Salmon Poké Bowl',
        description:
          'Sushi rice, sweet and sour cucumber, soybeans, grated carrots, miso mayo, chukawame (seaweed salad), avocado cream, sushi ginger',
      },
      {
        name: 'Beetroot Salad',
        description:
          'Frozen labneh, baby beetroots, olives, smoked almonds, fresh basil, sumac, olive oil, pomegranate seeds',
      },
      {
        name: 'Tortilla',
        description:
          'With cream cheese, smoked salmon, and arugula (rocket) OR with cream cheese, Mexican vegetable mix, and arugula (rocket)',
      },
    ],
  },
  {
    title: 'Saturday Hot Dishes',
    subtitle: 'Menu 2',
    icon: ClocheIcon,
    items: [
      { name: 'Chicken Nuggets', description: 'Caviar and crème fraîche' },
      { name: 'Croque Monsieur', description: 'Served with salad / half a toasted sandwich per person' },
      {
        name: 'Artichoke Fondue',
        description: 'Artichokes, cream cheese, béchamel sauce, shredded cheese, garlic, thyme, shrimp, chips (crisps)',
      },
      {
        name: 'Cod Fillet',
        description: 'Out of the oven, green asparagus, white wine sauce, mashed potatoes with lemon zest',
      },
      {
        name: 'Hot Dog',
        description:
          'On a brioche bun, crispy onion, coleslaw (red and white cabbage in vinegar and mayo), cheddar cheese, truffle mayo, ketchup, diced pickles',
      },
      {
        name: 'Chicken Satay',
        description:
          'Cubed and marinated chicken (chili sauce, sweet soy sauce, soy sauce, ginger, mustard, sriracha, balsamic, garlic, or curry), satay sauce, fried bean sprouts, prawn crackers (kroepoek)',
      },
    ],
  },
  {
    title: 'Snacks',
    subtitle: 'Saturday',
    icon: ClocheIcon,
    items: [{ name: 'Fries', description: 'With ketchup, mayo, mustard' }],
  },
  {
    title: 'Staff Meal',
    subtitle: 'Saturday',
    icon: CakeIcon,
    items: [{ name: 'Lasagna, salad' }],
  },
  {
    title: 'Sunday Cold Dishes',
    subtitle: 'Menu 1',
    icon: ClocheIcon,
    items: [
      { name: 'Oysters', description: 'Over ice with lemon and lime wedges' },
      { name: 'Salmon Roe Canapé', description: 'In small pastry cases with Boursin cream and lemon zest' },
      { name: 'Pâté en Croûte', description: 'Lettuce, cornichons (gherkins), mayo, pomegranate molasses' },
      {
        name: 'Tuna Sashimi',
        description:
          'Granny Smith apple and yuzu granita, wasabi nuts, caper berries, pickled onion, wasabi roe',
      },
    ],
  },
  {
    title: 'Sunday Hot Dishes',
    subtitle: 'Menu 1',
    icon: ClocheIcon,
    items: [
      {
        name: 'Gnocchi',
        description:
          'Creamy parmesan sauce, bacon lardons. Served with arugula (rocket), a box of cherry tomatoes, olive oil, parmesan cheese, and optional pesto',
      },
      {
        name: 'Tuna Melt Sandwich',
        description:
          'Tuna salad with olives, capers, tomato, bell pepper, parsley, onion, crème fraîche, shredded cheese; on a brioche hotdog bun out of the oven, truffle roe',
      },
      { name: 'Smash Burger', description: 'Brioche bun, lettuce, pickles, tomatoes, sauce' },
      {
        name: 'Choucroute (Sauerkraut) Sausage',
        description:
          'Sauerkraut, boiled potato in white wine, sausage, a slice of smoked pork, mayo mustard sauce',
      },
      {
        name: 'Ribeye',
        description:
          'Slow-cooked out of the oven, potato truffle gratin, green asparagus, veal jus (jus de veau)',
      },
      { name: 'Pizza', description: 'Pepperoni, margherita, verdura (olives, vegetables)' },
    ],
  },
  {
    title: 'Snacks',
    subtitle: 'Sunday',
    icon: ClocheIcon,
    items: [{ name: 'Fries', description: 'Sauces: Mayo, ketchup, chili sauce, mustard' }],
  },
  {
    title: 'Staff Meal',
    subtitle: 'Sunday',
    icon: CakeIcon,
    items: [{ name: "Hachis Parmentier (Shepherd's pie style dish), salad / pizza" }],
  },
  {
    title: 'Breakfast',
    subtitle: 'Menu 3 · Saturday & Sunday',
    icon: SunIcon,
    items: [{ name: 'Croissant, pain au chocolat, fresh fruit from a 3kg bucket' }],
  },
  {
    title: 'Two-Day Cold Buffet',
    subtitle: 'Menu 3 · Saturday & Sunday',
    icon: ClocheIcon,
    wide: true,
    items: [
      { name: 'Fruit', description: 'Watermelon' },
      { name: 'Bread', description: 'Baguette, tortilla chips' },
      { name: 'Hummus', description: 'Chickpeas, tahini, garlic, lemon / garnish (olives, tomato, parsley)' },
      {
        name: 'Harissa Hummus',
        description: 'Chickpeas, harissa, roasted bell pepper, tahini, garlic / tomato, parsley, mint, olives',
      },
      { name: 'Labneh', description: "Sliced olives, mint, spring onion, za'atar" },
      { name: 'Aubergine Mutabal (Baba Ganoush)', description: 'Pomegranate seeds, parsley' },
      { name: 'Bell Pepper Tapenade', description: 'Chives, cashew nuts, alfalfa' },
      {
        name: 'Crudités (Raw Vegetables)',
        description:
          'Cucumber, carrots, celery, radishes, bell pepper, cherry tomatoes, hearts of Romaine lettuce, red salad',
      },
      { name: 'Pasta Salads', description: 'Farfalle, pesto, artichokes, cherry tomatoes, arugula (rocket)' },
      {
        name: 'Baby Mozzarella & Tomato',
        description: 'Red, yellow, and green tomatoes, pesto, arugula (rocket), basil',
      },
      { name: 'Guacamole', description: 'In round bowls, with chips on the side' },
      {
        name: 'Tramazzini Sandwiches (Three Layers)',
        description: [
          'With hummus, grilled vegetables (zucchini, bell pepper), lettuce / arugula',
          'With bell pepper tapenade / grilled vegetables / salad',
          'With labneh / grilled vegetables / salad',
        ],
      },
      {
        name: 'Bulgur Salads with Feta',
        description:
          'Canned tomatoes, feta cheese, oregano, parsley, mint, red onion, cumin, cinnamon, pomegranate molasses',
      },
      {
        name: 'Potato Salads',
        description: 'Sliced potatoes out of the bag, spring onion, vinegar, mayonnaise (garnish with chives, red alfalfa)',
      },
    ],
  },
]

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

function MenuCard({ section }: { section: MenuSection }) {
  const Icon = section.icon

  return (
    <article className={`relative border border-[#E7E1D6] bg-[#F7F3EA] p-6 sm:p-8 lg:p-10 ${section.wide ? 'lg:col-span-2' : ''}`}>
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

      <div className={`mt-8 ${section.wide ? 'grid gap-x-8 sm:grid-cols-2' : 'divide-y divide-[#DDD6CA]'}`}>
        {section.items.map((item) => (
          <div
            key={item.name}
            className={`border-[#DDD6CA] py-3 first:pt-0 last:pb-0 ${section.wide ? 'border-t first:border-t-0 sm:[&:nth-child(2)]:border-t-0' : ''}`}
          >
            <p className="font-[family-name:var(--font-inter)] text-sm font-black uppercase tracking-tight text-[#0A0A0A]">
              {item.name}
            </p>
            {Array.isArray(item.description) ? (
              <div className="mt-1 space-y-1">
                {item.description.map((line) => (
                  <p key={line} className="font-[family-name:var(--font-inter)] text-sm leading-relaxed text-[#5C5650]">
                    {line}
                  </p>
                ))}
              </div>
            ) : item.description ? (
              <p className="mt-1 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-[#5C5650]">
                {item.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </article>
  )
}

function InfoPanel() {
  const items = [
    {
      title: 'Saturday Listed First',
      text: 'Saturday cold dishes, hot dishes, snacks and staff meal are shown before Sunday.',
      icon: Clock,
    },
    {
      title: 'Sunday Follows',
      text: 'Sunday cold dishes, hot dishes, snacks and staff meal are listed after Saturday.',
      icon: Leaf,
    },
    {
      title: 'Breakfast & Two-Day Buffet',
      text: 'Breakfast and the two-day cold buffet from Menu 3 are included after the day menus.',
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
            The official Monaco weekend menu, presented Saturday first, then Sunday, with breakfast and the two-day cold buffet.
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
              Official Monaco Weekend Menu
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
