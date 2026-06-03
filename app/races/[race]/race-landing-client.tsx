'use client'

import { MarqueeTicker } from '@/components/marquee-ticker'
import { RACE_FAQS } from '@/lib/seo/faqs'
import { CONTACT_EMAIL } from '@/lib/seo/site'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ChevronRight, MapPin, Menu, Play, X } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type RaceSlug = 'monaco' | 'singapore' | 'abu-dhabi'

type MediaItem =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster?: string; alt: string }

type ExpectationTile = {
  src: string
  alt: string
  title: string
  subtitle: string
}

type RaceConfig = {
  slug: RaceSlug
  name: string
  city: string
  venue?: string
  eventName: string
  accent: string
  heroImage: string
  heroVideo?: string
  heroPoster?: string
  heroEyebrow?: string
  heroHeadline?: [string, string]
  packageDaysLabel: string
  heroSubtext: string
  whatToExpectIntro?: string
  expectationGallery?: ExpectationTile[]
  expectationFooterTile?: ExpectationTile
  marqueeItems?: string[]
  mediaSectionIntro?: string
  scheduleBackgrounds?: string[]
  schedule: Array<{
    dayLabel: string
    items: Array<{ time: string; title: string; desc?: string }>
  }>
  inclusions: string[]
  whatToExpect: string[]
  media: MediaItem[]
  faqs: Array<{ q: string; a: string }>
}

const MONACO_ASSETS = {
  heroVideo: '/monaco/monaco-2025.mp4',
  heroPoster: '/monaco/page1-img0.jpg',
  terrace: '/monaco/page4-img15.jpg',
  terraceCrowd: '/monaco/page3-img8.jpg',
  openBar: '/monaco/page3-img9.jpg',
  gourmet: '/monaco/page4-img18.jpg',
  party: '/monaco/page4-img14.jpg',
  raceAction: '/monaco/page2-img4.jpg',
  gridWalk: '/monaco/page6-img28.png',
} as const

const SINGAPORE_ASSETS = {
  mbsView: '/singapore/VT%20MBS%20view.png',
  nightOutside: '/singapore/VT%20night%20outside.jpg',
  insideOutside: '/singapore/VT%20inside%20outisde%20view.png',
  inside1: '/singapore/VT%20SIngapore%20inside%201.jpg',
  outdoor: '/singapore/VTS%20-%20Outdoor%201.jpg',
  champagne: '/singapore/VT%20Champagne.jpg',
  food: '/singapore/VT%20Food.jpg',
  image2: '/singapore/image-2.jpg',
} as const

const RACES: Record<RaceSlug, RaceConfig> = {
  monaco: {
    slug: 'monaco',
    name: 'Monaco',
    city: 'Monte Carlo',
    eventName: 'Monaco Grand Prix',
    accent: '#F90202',
    heroImage: MONACO_ASSETS.terrace,
    heroVideo: MONACO_ASSETS.heroVideo,
    heroPoster: MONACO_ASSETS.heroPoster,
    packageDaysLabel: '2-day package (Sat–Sun)',
    heroSubtext: 'Two days. World-class racing. Unmatched hospitality. Front-row views. Epic parties. Memories that last.',
    schedule: [
      {
        dayLabel: 'Saturday',
        items: [
          { time: '11:00', title: 'Doors open · Welcome drinks' },
          { time: '12:00', title: 'Track sessions + terrace energy', desc: 'Racing on screens, cars in front of you, and the bar stays open.' },
          { time: '15:00', title: 'DJ set · Peak daytime vibe' },
          { time: '18:00', title: 'After-party begins', desc: 'DJs, complimentary bar, and the night keeps going.' },
        ],
      },
      {
        dayLabel: 'Sunday',
        items: [
          { time: '11:00', title: 'Doors open · Warm-up' },
          { time: '12:30', title: 'Build-up to race day', desc: 'Food and drinks flowing while the circuit comes alive.' },
          { time: '15:00', title: 'Race', desc: 'Front-row views of start/finish. Every lap hits harder.' },
          { time: '18:00', title: 'After-party · Monaco finale' },
        ],
      },
    ],
    inclusions: [
      'Front-row start/finish & grid views',
      'All-day open bar (champagne, spirits, wine, beer, soft drinks)',
      'Gourmet dining throughout the day',
      'DJs + live entertainment',
      'Comfortable seating + shaded areas',
      'Live race coverage on screens throughout the terrace',
      'Signature after-party access',
      'Screens, atmosphere, and a curated guest crowd',
    ],
    whatToExpect: [
      'A high-end party atmosphere with serious racing views (not corporate hospitality).',
      'Open bar energy all day — champagne moments are kind of the point.',
      'DJs and entertainment that feel like a show, not background music.',
      'A crowd that’s here for the race and the afters.',
      'A “see and be seen” social hub — expect a star-studded crowd and easy networking between sessions.',
    ],
    media: [
      { kind: 'video', src: MONACO_ASSETS.heroVideo, poster: MONACO_ASSETS.heroPoster, alt: 'Monaco race weekend highlights reel' },
      { kind: 'image', src: '/monaco/page3-img10.jpg', alt: 'Monaco circuit views from the terrace' },
      { kind: 'image', src: '/monaco/page4-img11.jpg', alt: 'Mercedes on the Monaco street circuit' },
      { kind: 'image', src: '/monaco/page4-img12.jpg', alt: 'Race day action at Monaco' },
      { kind: 'image', src: '/monaco/page4-img13.jpg', alt: 'Trackside atmosphere at Monaco Grand Prix' },
      { kind: 'image', src: '/monaco/page4-img16.jpg', alt: 'Monaco Grand Prix weekend hospitality' },
      { kind: 'image', src: '/monaco/page4-img17.jpg', alt: 'Velocity Terrace experience in Monaco' },
      { kind: 'image', src: '/monaco/page4-img19.jpg', alt: 'Social scene at Velocity Terrace Monaco' },
      { kind: 'image', src: '/monaco/page4-img20.jpg', alt: 'Monaco hospitality party moment' },
      { kind: 'image', src: '/monaco/page4-img21.jpg', alt: 'Monaco weekend highlight moments' },
      { kind: 'image', src: '/monaco/page4-img22.jpg', alt: 'F1 party at Monte Carlo' },
      { kind: 'image', src: '/monaco/page5-img23.jpg', alt: 'Monaco Grand Prix lifestyle moment' },
    ],
    faqs: [
      {
        q: 'Is Monaco a 2-day or 3-day package?',
        a: 'Monaco is a 2-day package (Saturday and Sunday).',
      },
      {
        q: 'Is the schedule fixed?',
        a: 'The outline is accurate, but final timings can shift with the official weekend timetable. We confirm final times closer to the event.',
      },
      {
        q: 'Where is Velocity Terrace located?',
        a: 'Trackside with direct views over the start/finish straight and starting grid area.',
      },
      {
        q: 'What’s included in the package?',
        a: 'Front-row trackside views, open bar, gourmet food, DJs/entertainment, and access to the after-party experience. Full inclusions can vary slightly by race — we confirm details in your booking.',
      },
      {
        q: 'Is there seating and shade?',
        a: 'Yes — there are comfortable seating areas and shaded spaces so you can relax between sessions without missing the atmosphere.',
      },
      {
        q: 'Will there be screens / live race coverage?',
        a: 'Yes — live race coverage is shown on strategically placed screens so you can stay across every moment.',
      },
      {
        q: 'Is Velocity Terrace a celebrity hotspot?',
        a: 'It’s known as a “see and be seen” social hub during Monaco. Previous years have welcomed notable guests from fashion, sport, and entertainment — the crowd is a big part of the energy.',
      },
      {
        q: 'Is there a dress code?',
        a: 'Smart and comfortable. Think: luxury day party. Avoid anything you wouldn’t want in photos.',
      },
      {
        q: 'Can we book as a group?',
        a: 'Yes — tell us your group size in the enquiry and we’ll come back with the best options.',
      },
      {
        q: 'Do you cater for dietary requirements?',
        a: 'Yes — share any dietary needs in your enquiry and we’ll accommodate where possible.',
      },
      {
        q: 'Is it seated?',
        a: 'It’s designed as a social, high-energy experience (not a formal sit-down hospitality). There are spaces to relax, but the vibe is “party with unreal views”.',
      },
      {
        q: 'What happens if it rains?',
        a: 'The experience goes ahead. In rare cases of timetable changes, we’ll communicate any updates as early as possible.',
      },
    ],
  },
  singapore: {
    slug: 'singapore',
    name: 'Singapore',
    city: 'Marina Bay',
    venue: 'National Gallery Rooftop · Padang Deck',
    eventName: 'Singapore',
    accent: '#0EA5E9',
    heroImage: SINGAPORE_ASSETS.mbsView,
    heroEyebrow: 'Velocity Terrace · October 9–11, 2026',
    heroHeadline: ['Rooftop luxury,', 'Marina Bay standard.'],
    packageDaysLabel: '3-day & single-day packages (Fri–Sun)',
    heroSubtext:
      'An exclusive VIP rooftop experience on the Padang Deck of the National Gallery — premium hospitality, world-class catering, open bar, live DJs and an elite guest profile across just 150 guests.',
    scheduleBackgrounds: [
      SINGAPORE_ASSETS.outdoor,
      SINGAPORE_ASSETS.nightOutside,
      SINGAPORE_ASSETS.inside1,
    ],
    schedule: [
      {
        dayLabel: 'Friday',
        items: [
          { time: '12:00', title: 'Doors open · Welcome drinks' },
          { time: '14:00', title: 'Practice sessions · Rooftop atmosphere' },
          { time: '18:00', title: 'Sunset over Marina Bay', desc: 'Historic architecture meets the skyline as the evening builds.' },
          { time: '21:00', title: 'DJs · Evening entertainment' },
        ],
      },
      {
        dayLabel: 'Saturday',
        items: [
          { time: '12:00', title: 'Open bar · Hospitality begins' },
          { time: '15:00', title: 'Qualifying build-up' },
          { time: '20:00', title: 'Qualifying under the lights', desc: 'Peak energy as the city comes alive after dark.' },
          { time: '22:00', title: 'After-hours · Marina Bay vibe' },
        ],
      },
      {
        dayLabel: 'Sunday',
        items: [
          { time: '12:00', title: 'Final day · Settle in' },
          { time: '18:00', title: 'Main event build-up' },
          { time: '20:00', title: 'Main event', desc: 'The headline moment — done properly from the rooftop.' },
          { time: '22:00', title: 'Finale celebrations' },
        ],
      },
    ],
    inclusions: [
      'Prime rooftop views over the Marina Bay skyline',
      'World-class catering & all-day open bar',
      'Live entertainment, DJs & vibrant atmosphere',
      'National Gallery Padang Deck — exclusive 150-guest capacity',
      'Seamless access outside main road closures',
      'Strategic networking with C-suite, HNW & global brands',
      'Flexible packages: 3-day, 2-day (Sat–Sun), or single-day options',
    ],
    whatToExpect: [
      'An elite hospitality venue designed for corporate entertaining and high-net-worth guests.',
      'Historic National Gallery architecture blended with Marina Bay skyline views.',
      'A social, high-energy environment — ideal for brands, finance, tech & lifestyle clients.',
      'Rare premium hospitality outside the Paddock Club — polished, but never corporate.',
      'Limited capacity (150 guests) — exclusive and in high demand.',
    ],
    whatToExpectIntro:
      'A premium rooftop setup with the energy turned up: skyline views, open bar, world-class catering, live entertainment, and after-dark moments that feel closer to a private members’ club than standard hospitality.',
    expectationGallery: [
      {
        src: SINGAPORE_ASSETS.mbsView,
        alt: 'Marina Bay skyline views from Velocity Terrace Singapore',
        title: 'Marina Bay views',
        subtitle: 'Prime rooftop position overlooking the skyline from the National Gallery.',
      },
      {
        src: SINGAPORE_ASSETS.champagne,
        alt: 'Champagne and open bar at Velocity Terrace Singapore',
        title: 'Open bar',
        subtitle: 'Premium champagne, spirits, wine, beer and soft drinks flowing all day.',
      },
      {
        src: SINGAPORE_ASSETS.food,
        alt: 'World-class catering at Velocity Terrace Singapore',
        title: 'World-class catering',
        subtitle: 'Premium hospitality with exceptional food standards throughout.',
      },
      {
        src: SINGAPORE_ASSETS.nightOutside,
        alt: 'Velocity Terrace Singapore rooftop at night',
        title: 'Live entertainment',
        subtitle: 'DJs and vibrant atmosphere as Marina Bay lights up after dark.',
      },
    ],
    expectationFooterTile: {
      src: SINGAPORE_ASSETS.outdoor,
      alt: 'Velocity Terrace outdoor rooftop at National Gallery Singapore',
      title: 'Day to night',
      subtitle: 'One seamless experience from first arrival to after-dark atmosphere.',
    },
    marqueeItems: [
      'SINGAPORE',
      'NATIONAL GALLERY ROOFTOP',
      'MARINA BAY',
      'OPEN BAR',
      '150 GUESTS',
      'VELOCITY TERRACE',
    ],
    mediaSectionIntro:
      'A glimpse of the sophistication, the skyline and the unforgettable moments that make Velocity Terrace Singapore exceptional.',
    media: [
      { kind: 'image', src: SINGAPORE_ASSETS.mbsView, alt: 'Marina Bay skyline from Velocity Terrace rooftop' },
      { kind: 'image', src: SINGAPORE_ASSETS.outdoor, alt: 'Velocity Terrace outdoor rooftop at National Gallery' },
      { kind: 'image', src: SINGAPORE_ASSETS.inside1, alt: 'Velocity Terrace Singapore interior hospitality' },
      { kind: 'image', src: SINGAPORE_ASSETS.insideOutside, alt: 'Velocity Terrace inside and outside views' },
      { kind: 'image', src: SINGAPORE_ASSETS.nightOutside, alt: 'Velocity Terrace Singapore at night' },
      { kind: 'image', src: SINGAPORE_ASSETS.champagne, alt: 'Champagne service at Velocity Terrace Singapore' },
      { kind: 'image', src: SINGAPORE_ASSETS.food, alt: 'Premium catering at Velocity Terrace Singapore' },
      { kind: 'image', src: SINGAPORE_ASSETS.image2, alt: 'Velocity Terrace Singapore hospitality experience' },
    ],
    faqs: RACE_FAQS.singapore,
  },
  'abu-dhabi': {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    city: 'Yas Marina',
    eventName: 'Abu Dhabi Grand Prix',
    accent: '#C9A84C',
    heroImage: '/abudhabi.jpg',
    packageDaysLabel: '3-day package (Fri–Sun)',
    heroSubtext: 'Three days. Season-finale energy. Front-row views. Open bar. Big parties. End the year the right way.',
    schedule: [
      {
        dayLabel: 'Friday',
        items: [
          { time: '12:00', title: 'Arrival · Welcome drinks' },
          { time: '14:00', title: 'Practice sessions + first-day energy' },
          { time: '19:00', title: 'Night moments begin' },
        ],
      },
      {
        dayLabel: 'Saturday',
        items: [
          { time: '12:00', title: 'Open bar · doors open' },
          { time: '16:00', title: 'Qualifying build-up' },
          { time: '18:00', title: 'Qualifying' },
          { time: '20:00', title: 'After-hours' },
        ],
      },
      {
        dayLabel: 'Sunday',
        items: [
          { time: '12:00', title: 'Final day · the finale feeling' },
          { time: '17:00', title: 'Race build-up' },
          { time: '19:00', title: 'Race', desc: 'Season finale energy, full send.' },
          { time: '21:00', title: 'Finale afters' },
        ],
      },
    ],
    inclusions: [
      '3-day finale-weekend hospitality (Fri–Sun)',
      'Open bar throughout each day',
      'Gourmet dining across the day',
      'DJs + entertainment with end-of-season energy',
      'Signature after-hours experience',
      'Premium crowd and trackside atmosphere',
    ],
    whatToExpect: [
      'A 3-day (Fri–Sun) finale-weekend run with big end-of-season energy.',
      'A crowd that’s there to celebrate the year and send it properly.',
      'A high-end party vibe that still keeps the racing front-and-centre.',
    ],
    media: [
      { kind: 'image', src: '/abudhabi.jpg', alt: 'Abu Dhabi Grand Prix at Yas Marina' },
      { kind: 'image', src: MONACO_ASSETS.openBar, alt: 'Open bar experience' },
      { kind: 'image', src: MONACO_ASSETS.gourmet, alt: 'Gourmet hospitality dining' },
      { kind: 'image', src: MONACO_ASSETS.party, alt: 'After-hours party atmosphere' },
      { kind: 'image', src: MONACO_ASSETS.raceAction, alt: 'Trackside racing action' },
    ],
    faqs: [
      { q: 'Is Abu Dhabi 3 days?', a: 'Yes — Abu Dhabi is a 3-day package (Friday to Sunday).' },
      { q: 'Are these exact times?', a: 'They’re a guide — final timings depend on the official timetable and will be confirmed closer to the event.' },
      { q: 'Can we do group bookings?', a: 'Yes — send your group size in the enquiry and we’ll come back with options.' },
      { q: 'What’s included in the package?', a: 'Trackside experience, open bar, gourmet food, DJs/entertainment, and after-hours energy across all 3 days. Exact details are confirmed at booking.' },
      { q: 'Do you help with transfers / hotels?', a: 'If you need help, mention it in your enquiry and we’ll advise what’s available.' },
      { q: 'Is it seated?', a: 'It’s a social, high-energy format rather than a formal sit-down. You’ll have space to relax, but it’s built to feel like a party.' },
    ],
  },
}

function RaceNav({ accent }: { accent: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
      <Link href="/" className="block">
        <img src="/monaco/velocity%20logo%20white.png" alt="Velocity Terrace" className="h-8 sm:h-10 w-auto object-contain" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {['Overview', 'Schedule', 'What to Expect', 'FAQ', 'Enquire'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-30 max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10 md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {['Overview', 'Schedule', 'What to Expect', 'FAQ', 'Enquire'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors py-2"
              >
                {item}
              </a>
            ))}
            <Link href="/" className="text-sm font-medium tracking-widest uppercase py-2" style={{ color: accent }}>
              Back to home <ChevronRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function ScheduleCard({
  dayLabel,
  accent,
  items,
}: {
  dayLabel: string
  accent: string
  items: Array<{ time: string; title: string; desc?: string }>
}) {
  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
      <div className="flex items-baseline justify-between gap-6 mb-6">
        <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-2xl sm:text-3xl uppercase text-white">
          {dayLabel}
        </h3>
        <span className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-barlow-condensed)] font-bold" style={{ color: accent }}>
          subject to official timetable
        </span>
      </div>

      <div className="space-y-4">
        {items.map((it) => (
          <div key={`${dayLabel}-${it.time}-${it.title}`} className="flex gap-4">
            <div className="shrink-0 w-14">
              <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-lg" style={{ color: accent }}>
                {it.time}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-white font-[family-name:var(--font-inter)] font-semibold">{it.title}</p>
              {it.desc && <p className="text-white/60 text-sm font-[family-name:var(--font-inter)] leading-relaxed">{it.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScheduleDayCard({
  dayLabel,
  dayIndex,
  accent,
  backgroundImage,
  items,
}: {
  dayLabel: string
  dayIndex: number
  accent: string
  backgroundImage: string
  items: Array<{ time: string; title: string; desc?: string }>
}) {
  return (
    <div className="relative h-full min-h-[320px] sm:min-h-[390px] bg-[#0F0F0F] border border-white/10 rounded-2xl p-5 sm:p-7 overflow-hidden">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/92 via-[#0A0A0A]/78 to-[#0A0A0A]/55" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent}18 0%, transparent 50%)` }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl" style={{ background: `${accent}1A` }} />
      </div>

      <div className="relative flex items-start justify-between gap-6 mb-5">
        <div>
          <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-xl sm:text-2xl uppercase tracking-wide" style={{ color: accent }}>
            {dayLabel}
          </p>
        </div>
        <span className="shrink-0 inline-flex items-center rounded-full border border-white/10 bg-[#0A0A0A]/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-[family-name:var(--font-barlow-condensed)] font-bold text-white/70">
          Race Day {dayIndex + 1}
        </span>
      </div>

      <div className="relative space-y-3">
        {items.map((it) => (
          <div key={`${dayLabel}-${it.time}-${it.title}`} className="grid grid-cols-[56px_1fr] gap-4 items-start">
            <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-sm sm:text-base leading-none pt-1" style={{ color: accent }}>
              {it.time}
            </p>
            <div>
              <p className="text-white font-[family-name:var(--font-inter)] font-semibold text-sm sm:text-[15px]">
                {it.title}
              </p>
              {it.desc ? (
                <p className="text-white/55 text-xs sm:text-sm font-[family-name:var(--font-inter)] leading-relaxed mt-0.5">
                  {it.desc}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EnquirySection({ accent, raceName }: { accent: string; raceName: string }) {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Velocity Terrace ${raceName} Enquiry`)
    const body = encodeURIComponent(
      [
        `Race: ${raceName}`,
        `Name: ${formState.name}`,
        `Email: ${formState.email}`,
        formState.phone ? `Phone: ${formState.phone}` : null,
        '',
        formState.message || '(No message provided)',
      ]
        .filter(Boolean)
        .join('\n'),
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  return (
    <section id="enquire" className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: `${accent}22` }} />
      <div className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none" style={{ background: `${accent}1A` }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] mb-4" style={{ color: accent }}>
            Enquire
          </p>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white mb-4">
            Ready to <span style={{ color: accent }}>Lock It In?</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/70 text-lg max-w-xl mx-auto">
            Tell us your group size and what you’re after. Places are limited.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-barlow-condensed)] font-bold text-2xl uppercase text-white mb-2">
                  {"Thanks! We'll be in touch shortly"} ✓
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-white/60 mb-4">
                  Your email app should have opened with your enquiry. If it did not, email us directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline" style={{ color: accent }}>
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-1 transition-colors"
                  style={{ outlineColor: accent }}
                />
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-1 transition-colors"
                    style={{ outlineColor: accent }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={(e) => setFormState((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-1 transition-colors"
                    style={{ outlineColor: accent }}
                  />
                </div>
                <textarea
                  placeholder="Message / Group Size"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-1 transition-colors resize-none"
                  style={{ outlineColor: accent }}
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300"
                  style={{ background: accent }}
                >
                  Send Enquiry <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
          <p className="mt-6 text-center font-[family-name:var(--font-inter)] text-sm text-white/50">
            Prefer email?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline" style={{ color: accent }}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default function RaceLandingClient({ race }: { race: RaceSlug }) {
  const cfg = RACES[race]
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const featuredMedia = cfg.media[0]
  const mediaGallery = cfg.media.slice(1).filter((item): item is Extract<MediaItem, { kind: 'image' }> => item.kind === 'image')
  const expectationGallery = cfg.expectationGallery ?? [
    {
      src: cfg.slug === 'monaco' ? MONACO_ASSETS.raceAction : cfg.heroImage,
      alt: `${cfg.name} hospitality experience`,
      title: cfg.slug === 'monaco' ? 'Trackside energy' : 'Premium atmosphere',
      subtitle: cfg.slug === 'monaco' ? 'The race is close. The party is closer.' : 'Luxury hospitality with the energy turned up.',
    },
    {
      src: MONACO_ASSETS.openBar,
      alt: 'Velocity Terrace open bar',
      title: 'Open bar',
      subtitle: 'Champagne, spirits, wine, beer and soft drinks flowing.',
    },
    {
      src: MONACO_ASSETS.gourmet,
      alt: 'Velocity Terrace gourmet dining',
      title: 'Gourmet food',
      subtitle: 'Premium dining without the stiff corporate feel.',
    },
    {
      src: MONACO_ASSETS.party,
      alt: 'Velocity Terrace after-party',
      title: 'After-party',
      subtitle: 'When the action stops, the real evening starts.',
    },
  ]
  const expectationFooterTile = cfg.expectationFooterTile ?? {
    src: cfg.slug === 'monaco' ? MONACO_ASSETS.terraceCrowd : MONACO_ASSETS.party,
    alt: 'Velocity Terrace guests enjoying the atmosphere',
    title: 'Race day to afters',
    subtitle: 'One seamless experience from first drink to final track.',
  }
  const heroEyebrow = cfg.heroEyebrow ?? `${cfg.eventName} 2026`
  const heroHeadline = cfg.heroHeadline ?? ['Race weekend,', 'party standard.']
  const whatToExpectIntro =
    cfg.whatToExpectIntro ??
    'A premium race-weekend setup with the energy turned up: front-row views, open bar, food, music, and after-hours moments that feel closer to a private party than standard hospitality.'
  const marqueeItems =
    cfg.marqueeItems ??
    [
      `${cfg.name.toUpperCase()} GP`,
      cfg.packageDaysLabel.toUpperCase(),
      'OPEN BAR',
      'GOURMET FOOD',
      'LIVE DJS',
      'AFTER PARTY',
      'VELOCITY TERRACE',
    ]
  const mediaSectionIntro =
    cfg.mediaSectionIntro ??
    `A glimpse of the speed, the sophistication and the unforgettable moments that make our ${cfg.name} GP weekend exceptional.`

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <section id="overview" className="relative min-h-[100svh] sm:min-h-[92vh] flex flex-col">
        <div className="absolute inset-0 z-0">
          {cfg.heroVideo ? (
            <video autoPlay muted loop playsInline poster={cfg.heroPoster} className="w-full h-full object-cover">
              <source src={cfg.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <img src={cfg.heroImage} alt="" aria-hidden className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-[#0A0A0A]/55" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${cfg.accent}20 0%, #0A0A0A 85%)` }} />
        </div>

        <RaceNav accent={cfg.accent} />

        <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6">
              <p
                className="font-[family-name:var(--font-barlow-condensed)] font-black text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.14em] sm:tracking-[0.22em] px-2"
                style={{ color: cfg.accent }}
              >
                {heroEyebrow}
              </p>
            </div>
            <h1 className="font-[family-name:var(--font-barlow-condensed)] font-black text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-tight uppercase mb-8 animate-fade-in-up">
              <span className="block text-white">{heroHeadline[0]}</span>
              <span className="block" style={{ color: cfg.accent }}>{heroHeadline[1]}</span>
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
              {cfg.heroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <a
                href="#enquire"
                className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300"
                style={{ background: cfg.accent }}
              >
                Enquire now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/#races" className="group inline-flex items-center gap-3 px-6 py-4 text-white font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-colors">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-white transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </span>
                Compare races
              </Link>
            </div>
          </div>
        </div>

        {/* Accent banner strip */}
        <div className="relative z-10 border-t border-white/10">
          <MarqueeTicker
            className="py-4"
            style={{ background: `linear-gradient(90deg, ${cfg.accent} 0%, ${cfg.accent}CC 30%, ${cfg.accent} 100%)` }}
            items={marqueeItems}
          />
        </div>
      </section>

      <div className="flex flex-col">
      <section id="schedule" ref={sectionRef} className="relative order-2 py-16 sm:py-24 lg:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] mb-4" style={{ color: cfg.accent }}>
              Weekend lineup
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-3">
              Plan your escape
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/60 max-w-2xl mx-auto">
              Timings are a guide (subject to the official timetable). The vibe is guaranteed.
            </p>
          </div>

          <div
            className={[
              'grid gap-6 mx-auto items-stretch',
              cfg.schedule.length === 2
                ? 'max-w-5xl md:grid-cols-2'
                : 'max-w-7xl md:grid-cols-2 xl:grid-cols-3'
            ].join(' ')}
          >
            {cfg.schedule.map((day, i) => {
              const scheduleBackgrounds =
                cfg.scheduleBackgrounds ??
                (cfg.slug === 'monaco'
                  ? [MONACO_ASSETS.party, MONACO_ASSETS.raceAction]
                  : [cfg.heroImage, MONACO_ASSETS.party])

              return (
                <div
                  key={day.dayLabel}
                  className={['h-full', isVisible ? 'animate-fade-in-up' : 'opacity-0'].join(' ')}
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  <ScheduleDayCard
                    dayLabel={day.dayLabel}
                    dayIndex={i}
                    accent={cfg.accent}
                    backgroundImage={scheduleBackgrounds[i % scheduleBackgrounds.length]}
                    items={day.items}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="what-to-expect" className="relative order-1 py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute top-20 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: `${cfg.accent}14` }} />
        <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: `${cfg.accent}12` }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] mb-4" style={{ color: cfg.accent }}>
                What to expect
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.95]">
                Everything you need.<br />
                <span style={{ color: cfg.accent }}>Nothing flat.</span>
              </h2>
              <p className="mt-5 text-white/65 font-[family-name:var(--font-inter)] leading-relaxed max-w-lg">
                {whatToExpectIntro}
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-4">
                <div>
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-2xl uppercase text-white mb-4">
                    What’s included
                  </h3>
                  <ul className="space-y-3">
                    {cfg.inclusions.map((t) => (
                      <li key={t} className="flex gap-3 text-white/78 font-[family-name:var(--font-inter)] text-sm leading-relaxed">
                        <span className="shrink-0 font-black" style={{ color: cfg.accent }}>✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-2xl uppercase text-white mb-4">
                    What it feels like
                  </h3>
                  <ul className="space-y-3">
                    {cfg.whatToExpect.map((t) => (
                      <li key={t} className="flex gap-3 text-white/70 font-[family-name:var(--font-inter)] text-sm leading-relaxed">
                        <span className="shrink-0" style={{ color: cfg.accent }}>—</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:grid-rows-[260px_190px_210px] lg:gap-5">
                <div className="relative min-h-[220px] sm:min-h-0 sm:col-span-7 sm:row-span-2 rounded-3xl overflow-hidden border border-white/10 group">
                  <img
                    src={expectationGallery[0].src}
                    alt={expectationGallery[0].alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/15 to-transparent" />
                  <div className="absolute left-5 bottom-5">
                    <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-2xl uppercase text-white">
                      {expectationGallery[0].title}
                    </p>
                    <p className="text-white/70 text-sm font-[family-name:var(--font-inter)] max-w-xs">
                      {expectationGallery[0].subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[160px] sm:min-h-0 sm:col-span-5 rounded-3xl overflow-hidden border border-white/10 group">
                  <img
                    src={expectationGallery[1].src}
                    alt={expectationGallery[1].alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/10 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-xl uppercase text-white">
                      {expectationGallery[1].title}
                    </p>
                    <p className="text-white/65 text-xs font-[family-name:var(--font-inter)] leading-relaxed">
                      {expectationGallery[1].subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[160px] sm:min-h-0 sm:col-span-5 rounded-3xl overflow-hidden border border-white/10 group">
                  <img
                    src={expectationGallery[2].src}
                    alt={expectationGallery[2].alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/10 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-xl uppercase text-white">
                      {expectationGallery[2].title}
                    </p>
                    <p className="text-white/65 text-xs font-[family-name:var(--font-inter)] leading-relaxed">
                      {expectationGallery[2].subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[160px] sm:min-h-0 sm:col-span-7 rounded-3xl overflow-hidden border border-white/10 group">
                  <img
                    src={expectationGallery[3].src}
                    alt={expectationGallery[3].alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/10 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-xl uppercase text-white">
                      {expectationGallery[3].title}
                    </p>
                    <p className="text-white/65 text-xs font-[family-name:var(--font-inter)] leading-relaxed">
                      {expectationGallery[3].subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[160px] sm:min-h-0 sm:col-span-5 rounded-3xl overflow-hidden border border-white/10 group">
                  <img
                    src={expectationFooterTile.src}
                    alt={expectationFooterTile.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/88 via-[#0A0A0A]/20 to-transparent" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, transparent 0%, ${cfg.accent}26 100%)` }} />
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-xl uppercase text-white">
                      {expectationFooterTile.title}
                    </p>
                    <p className="text-white/70 text-xs font-[family-name:var(--font-inter)] leading-relaxed">
                      {expectationFooterTile.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>

      <section id="moments" className="relative py-16 sm:py-24 lg:py-32 bg-[#080808] overflow-hidden">
        <div className="absolute -top-32 left-1/2 w-[34rem] h-[34rem] -translate-x-1/2 rounded-full blur-3xl pointer-events-none" style={{ background: `${cfg.accent}12` }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative text-center mb-12">
            <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] mb-4" style={{ color: cfg.accent }}>
              Media
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-3">
              See it. <span style={{ color: cfg.accent }}>Feel it.</span> Live it.
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/60 max-w-2xl mx-auto">
              {mediaSectionIntro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 items-stretch">
            {/* Featured reel */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl shadow-black/40 min-h-[240px] sm:min-h-[320px]">
              {featuredMedia?.kind === 'video' ? (
                <video
                  src={featuredMedia.src}
                  poster={featuredMedia.poster}
                  controls
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover bg-black"
                />
              ) : (
                <img
                  src={featuredMedia?.src ?? cfg.heroImage}
                  alt={featuredMedia?.alt ?? `${cfg.name} Grand Prix visual highlight`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>

            {/* 3 x 3 image grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {mediaGallery.slice(0, 9).map((item) => (
                <div
                  key={item.src}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-square group"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:brightness-110 group-hover:scale-[1.04] transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-16 sm:py-24 lg:py-32 bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] mb-4" style={{ color: cfg.accent }}>
              FAQ
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-3">
              Quick answers
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/60">Everything people ask before they commit.</p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full blur-3xl" style={{ background: `${cfg.accent}22` }} />
            {(() => {
              const mid = Math.ceil(cfg.faqs.length / 2)
              const left = cfg.faqs.slice(0, mid)
              const right = cfg.faqs.slice(mid)

              const renderAccordion = (items: { q: string; a: string }[], keyPrefix: string) => (
                <Accordion type="single" collapsible className="w-full">
                  {items.map((item) => (
                    <AccordionItem key={`${keyPrefix}-${item.q}`} value={`${keyPrefix}-${item.q}`} className="border-white/10">
                      <AccordionTrigger className="text-white text-left text-base sm:text-lg font-[family-name:var(--font-barlow-condensed)] font-bold uppercase tracking-wide hover:no-underline py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 font-[family-name:var(--font-inter)] leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )

              return (
                <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-10">
                  {renderAccordion(left, 'left')}
                  {renderAccordion(right, 'right')}
                </div>
              )
            })()}
          </div>
        </div>
      </section>

      <EnquirySection accent={cfg.accent} raceName={cfg.name} />

      <footer className="relative bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid gap-8 md:grid-cols-3 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <img src="/monaco/velocity%20logo%20white.png" alt="Velocity Terrace" className="h-10 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <MapPin className="w-4 h-4" style={{ color: cfg.accent }} />
            <span className="text-sm font-[family-name:var(--font-inter)]">{cfg.venue ?? cfg.city}</span>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-4">
            <Link href="/" className="text-xs font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#races" className="text-xs font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors">
              All races
            </Link>
            <a href="#enquire" className="text-xs font-medium tracking-widest uppercase hover:opacity-90 transition-opacity" style={{ color: cfg.accent }}>
              Enquire
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

