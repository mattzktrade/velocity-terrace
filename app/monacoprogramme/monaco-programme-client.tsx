'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Beer,
  ChevronRight,
  Clock,
  Coffee,
  Crown,
  Disc3,
  GlassWater,
  Mail,
  MapPin,
  Menu,
  Utensils,
  UtensilsCrossed,
  Wine,
  X,
} from 'lucide-react'
import {
  ALEC_MONOPOLY,
  DRINKS_MENU,
  DRINKS_PREVIEW,
  FOOD_MENU_PLACEHOLDER,
  MENU_PREVIEW,
  MONACO_ACCENT,
  OPENING_HOURS,
  SATURDAY_TIMELINE,
  SUNDAY_TIMELINE,
  type TimelineItem,
} from '@/lib/monaco-programme-data'

const ACCENT = MONACO_ACCENT
const HERO_VIDEO = '/monaco/monaco-2025.mp4'
const HERO_POSTER = '/monaco/page1-img0.jpg'
const ALEC_IMAGE = '/monaco/10-2-alec-monopoly-djing37.jpg'
const CONTACT_EMAIL = 'info@velocity-terrace.com'

const NAV_SECTIONS = [
  { id: 'schedule', label: 'Full Schedule', icon: 'flag' as const },
  { id: 'alec', label: 'Alec Monopoly', icon: 'tophat' as const },
  { id: 'menu', label: 'Menu', icon: 'utensils' as const },
  { id: 'drinks', label: 'Drinks', icon: 'cocktail' as const },
] as const

type NavId = (typeof NAV_SECTIONS)[number]['id']

function CheckeredFlag({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect width="16" height="16" fill={ACCENT} />
      <rect x="0" y="0" width="4" height="4" fill="#0A0A0A" />
      <rect x="8" y="0" width="4" height="4" fill="#0A0A0A" />
      <rect x="4" y="4" width="4" height="4" fill="#0A0A0A" />
      <rect x="12" y="4" width="4" height="4" fill="#0A0A0A" />
      <rect x="0" y="8" width="4" height="4" fill="#0A0A0A" />
      <rect x="8" y="8" width="4" height="4" fill="#0A0A0A" />
      <rect x="4" y="12" width="4" height="4" fill="#0A0A0A" />
      <rect x="12" y="12" width="4" height="4" fill="#0A0A0A" />
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs sm:text-sm uppercase tracking-[0.34em] mb-5"
      style={{ color: ACCENT }}
    >
      {children}
    </p>
  )
}

function DarkCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-white/[0.09] bg-[#101010] ${className}`}>{children}</div>
  )
}

function ProgrammeHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
      <Link href="/" className="block shrink-0">
        <img src="/monaco/velocity%20logo%20white.png" alt="Velocity Terrace" className="h-8 sm:h-10 w-auto object-contain" />
      </Link>
      <div className="flex items-center gap-2.5 shrink-0">
        <span className="hidden min-[420px]:inline font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-[0.3em] text-white/80">
          Weekend Programme
        </span>
        <span className="min-[420px]:hidden font-[family-name:var(--font-barlow-condensed)] font-bold text-[10px] uppercase tracking-[0.2em] text-white/80">
          Programme
        </span>
        <CheckeredFlag className="w-4 h-4 shrink-0" />
      </div>
    </header>
  )
}

function NavPill({
  active,
  label,
  icon,
  onClick,
}: {
  active: boolean
  label: string
  icon: (typeof NAV_SECTIONS)[number]['icon']
  onClick: () => void
}) {
  const iconEl = (() => {
    const cls = 'w-5 h-5 shrink-0'
    switch (icon) {
      case 'flag':
        return <CheckeredFlag className={cls} />
      case 'tophat':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M4 14h16M6 14V9a6 6 0 1112 0v5" strokeLinecap="round" />
            <path d="M3 14h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
          </svg>
        )
      case 'utensils':
        return <UtensilsCrossed className={cls} strokeWidth={1.75} />
      case 'cocktail':
        return <GlassWater className={cls} strokeWidth={1.75} />
    }
  })()

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-3 font-[family-name:var(--font-barlow-condensed)] font-bold text-[10px] uppercase tracking-wide transition-all sm:w-auto sm:gap-2.5 sm:px-7 sm:py-4 sm:text-sm ${
        active
          ? 'text-white shadow-lg shadow-[#F90202]/20'
          : 'text-white/80 hover:text-white'
      }`}
      style={active ? { background: ACCENT } : undefined}
    >
      {iconEl}
      <span className="text-center leading-tight sm:whitespace-nowrap">{label}</span>
    </button>
  )
}

function TimelineDay({ dayTitle, items }: { dayTitle: string; items: TimelineItem[] }) {
  return (
    <DarkCard className="p-6 sm:p-8 h-full">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
        <CheckeredFlag className="w-4 h-4 shrink-0" />
        <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-xl sm:text-2xl uppercase tracking-wide text-white">
          {dayTitle}
        </h3>
      </div>
      <ul className="space-y-0">
        {items.map((item, i) => (
          <li key={`${item.time}-${item.title}`} className="relative flex gap-3 sm:gap-4 pb-5 last:pb-0">
            {i < items.length - 1 && (
              <span
                className="absolute left-[4.5rem] sm:left-[126px] top-3 bottom-0 w-px"
                style={{ background: `linear-gradient(to bottom, ${ACCENT}66, ${ACCENT}22)` }}
                aria-hidden
              />
            )}
            <span
              className="shrink-0 w-[4.5rem] sm:w-[126px] font-[family-name:var(--font-barlow-condensed)] font-bold text-xs sm:text-base tabular-nums pt-0.5"
              style={{ color: ACCENT }}
            >
              {item.time}
            </span>
            <span
              className="relative z-[1] mt-1.5 h-2 w-2 shrink-0 rounded-full ring-2 ring-[#111111]"
              style={{ background: ACCENT }}
              aria-hidden
            />
            <div className="flex-1 min-w-0 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-0.5 xl:gap-4 pt-0">
              <p className="font-[family-name:var(--font-inter)] font-medium text-sm sm:text-base text-white leading-snug">
                {item.title}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs text-white/40 xl:text-right shrink-0">{item.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </DarkCard>
  )
}

function MenuPreviewIcon({ type }: { type: (typeof MENU_PREVIEW)[number]['icon'] }) {
  const cls = 'w-7 h-7 mx-auto mb-3'
  const color = ACCENT
  switch (type) {
    case 'utensils':
      return <Utensils className={cls} style={{ color }} strokeWidth={1.5} />
    case 'coffee':
      return <Coffee className={cls} style={{ color }} strokeWidth={1.5} />
    case 'burger':
      return <UtensilsCrossed className={cls} style={{ color }} strokeWidth={1.5} />
  }
}

function DrinksPreviewIcon({ type }: { type: (typeof DRINKS_PREVIEW)[number]['icon'] }) {
  const cls = 'w-7 h-7 mx-auto mb-3'
  const color = ACCENT
  switch (type) {
    case 'cocktail':
      return <GlassWater className={cls} style={{ color }} strokeWidth={1.5} />
    case 'bottle':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6.5 5h11l-1.2 13.2A2 2 0 0 1 14.3 20H9.7a2 2 0 0 1-2-1.8L6.5 5Z" />
          <path d="M7.2 12.5c2.7 1 6.9 1 9.6 0" />
          <path d="M8 8h8" />
          <path d="M9.5 16h5" />
        </svg>
      )
    case 'beer':
      return <Beer className={cls} style={{ color }} strokeWidth={1.5} />
    case 'wine':
      return <Wine className={cls} style={{ color }} strokeWidth={1.5} />
  }
}

function AlecHighlightIcon({ type }: { type: (typeof ALEC_MONOPOLY.highlights)[number]['icon'] }) {
  const cls = 'w-8 h-8 mx-auto mb-3'
  const color = ACCENT
  switch (type) {
    case 'vinyl':
      return <Disc3 className={cls} style={{ color }} strokeWidth={1.5} />
    case 'crown':
      return <Crown className={cls} style={{ color }} strokeWidth={1.5} />
    case 'tophat':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" aria-hidden>
          <path d="M4 14h16M6 14V9a6 6 0 1112 0v5" strokeLinecap="round" />
          <path d="M3 14h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
        </svg>
      )
  }
}

function DrinksDetailPanel() {
  return (
    <div className="mt-4 space-y-4">
      {DRINKS_MENU.map((section) => (
        <DarkCard key={section.title} className="overflow-hidden">
          <div className="px-5 py-3 border-b border-white/[0.08]">
            <h4 className="font-[family-name:var(--font-barlow-condensed)] font-black text-sm uppercase tracking-wide text-white">
              {section.title}
            </h4>
          </div>
          <ul className="divide-y divide-white/[0.06]">
            {section.items.map((item) => (
              <li
                key={`${section.title}-${item.name}`}
                className="px-5 py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1"
              >
                <div>
                  {item.tag && (
                    <p className="text-[10px] font-[family-name:var(--font-barlow-condensed)] font-bold uppercase tracking-wider text-white/40 mb-0.5">
                      {item.tag}
                    </p>
                  )}
                  <p className="font-[family-name:var(--font-inter)] font-medium text-sm text-white">{item.name}</p>
                </div>
                {item.ingredients && (
                  <p className="font-[family-name:var(--font-inter)] text-xs text-white/50 sm:text-right">{item.ingredients}</p>
                )}
              </li>
            ))}
          </ul>
        </DarkCard>
      ))}
    </div>
  )
}

function ProgrammeFooter() {
  return (
    <section id="enquire" className="relative overflow-hidden bg-[#070707] px-6 py-12 text-white sm:px-8 sm:py-14 lg:px-12">
      <div className="absolute right-12 top-10 hidden text-[#F90202]/20 lg:block">
        <svg className="h-36 w-56" viewBox="0 0 260 160" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
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
            <CheckeredFlag className="h-3.5 w-3.5" />
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

export function MonacoProgrammeClient() {
  const [activeNav, setActiveNav] = useState<NavId>('schedule')
  const [menuExpanded, setMenuExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const sectionRefs = useRef<Record<NavId, HTMLElement | null>>({
    schedule: null,
    alec: null,
    menu: null,
    drinks: null,
  })

  const scrollToSection = useCallback((id: NavId) => {
    if (id === 'alec') {
      window.location.href = '/monacoprogramme/alec'
      return
    }

    if (id === 'menu') {
      window.location.href = '/monacoprogramme/menu'
      return
    }

    if (id === 'drinks') {
      window.location.href = '/monacoprogramme/drinks'
      return
    }

    setActiveNav(id)
    setMobileNavOpen(false)
    const el = sectionRefs.current[id]
    if (el) {
      const offset = 100
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    if (id === 'menu') setMenuExpanded(true)
    if (id === 'drinks') setDrinksExpanded(true)
  }, [])

  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveNav(visible[0].target.id as NavId)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.15, 0.4] },
    )
    ids.forEach((id) => {
      const el = sectionRefs.current[id]
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const setSectionRef = (id: NavId) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 z-0 min-h-[640px] sm:min-h-[720px]">
          <video autoPlay muted loop playsInline poster={HERO_POSTER} className="w-full h-full object-cover">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0A0A0A]/62" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_28%,rgba(249,2,2,0.18),transparent_34%),linear-gradient(to_bottom,rgba(10,10,10,0.18),#0A0A0A_90%)]" />
        </div>

        <div className="relative z-10">
          <ProgrammeHeader />

          <div className="px-6 lg:px-12 pb-12 sm:pb-16 pt-12 sm:pt-20 text-center max-w-6xl mx-auto">
            <p
              className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs sm:text-sm uppercase tracking-[0.38em] mb-4"
              style={{ color: ACCENT }}
            >
              — Monaco Grand Prix 2026 —
            </p>
            <h1 className="font-[family-name:var(--font-barlow-condensed)] font-black text-5xl sm:text-8xl lg:text-[112px] uppercase tracking-tight leading-[0.86] mb-6">
              <span className="block text-white">Your Weekend</span>
              <span className="block italic" style={{ color: ACCENT }}>
                Programme
              </span>
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-5">
              Schedules, dining, drinks, entertainment and everything you need for your Monaco GP weekend.
            </p>
            <div className="inline-flex items-center gap-2 text-white/60 text-sm sm:text-base font-[family-name:var(--font-inter)] mb-8 sm:mb-10">
              <MapPin className="w-4 h-4 shrink-0" style={{ color: ACCENT }} />
              Monte Carlo · Level 5 & Level 2
            </div>

            {/* Nav pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 items-stretch sm:items-center gap-1.5 rounded-2xl sm:rounded-full border border-white/12 bg-[#111111]/80 p-1.5 max-w-4xl mx-auto">
              {NAV_SECTIONS.map((tab) => (
                <NavPill
                  key={tab.id}
                  active={activeNav === tab.id}
                  label={tab.label}
                  icon={tab.icon}
                  onClick={() => scrollToSection(tab.id)}
                />
              ))}
            </div>
            <div className="hidden">
              <button
                type="button"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="inline-flex items-center gap-2 mx-auto px-4 py-2 rounded-full border border-white/15 bg-[#1A1A1A] text-xs uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)] font-bold"
              >
                {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                Jump to section
              </button>
              {mobileNavOpen && (
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {NAV_SECTIONS.map((tab) => (
                    <NavPill
                      key={tab.id}
                      active={activeNav === tab.id}
                      label={tab.label}
                      icon={tab.icon}
                      onClick={() => scrollToSection(tab.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pb-20 lg:pb-24 space-y-14 sm:space-y-16">
        {/* Schedule block */}
        <div id="schedule" ref={setSectionRef('schedule')}>
          <section>
            <SectionLabel>Opening Times</SectionLabel>
            <div className="grid sm:grid-cols-2 gap-5">
              {OPENING_HOURS.map((block) => (
                <div
                  key={block.levelTag}
                  className="rounded-xl bg-[#F5F0E6] px-6 py-6 sm:px-8 sm:py-8 border border-[#E8E2D6]"
                >
                  <span
                    className="inline-block px-2.5 py-1 rounded text-[11px] font-[family-name:var(--font-barlow-condensed)] font-bold uppercase tracking-wider text-white mb-4"
                    style={{ background: ACCENT }}
                  >
                    {block.levelTag}
                  </span>
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-3xl uppercase text-[#1A1A1A] tracking-tight mb-4">
                    {block.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 shrink-0" style={{ color: ACCENT }} strokeWidth={1.75} />
                    <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-2xl" style={{ color: ACCENT }}>
                      {block.hours}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] text-base text-[#4A4540]">{block.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 sm:mt-16">
            <SectionLabel>Weekend Schedule</SectionLabel>
            <div className="grid lg:grid-cols-2 gap-5">
              <TimelineDay dayTitle="Saturday 6 June" items={SATURDAY_TIMELINE} />
              <TimelineDay dayTitle="Sunday 7 June" items={SUNDAY_TIMELINE} />
            </div>
          </section>
        </div>

        {/* Alec Monopoly */}
        <section id="alec" ref={setSectionRef('alec')}>
          <SectionLabel>Alec Monopoly</SectionLabel>
          <DarkCard className="overflow-hidden">
            <div className="grid md:grid-cols-[minmax(0,440px)_1fr] gap-0">
              <div className="relative min-h-[280px] md:min-h-full md:min-h-[330px]">
                <img src={ALEC_IMAGE} alt="Alec Monopoly performing at Velocity Terrace" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/40 md:bg-none" />
              </div>
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <p className="font-[family-name:var(--font-inter)] text-white/75 text-base leading-relaxed mb-9">
                  {ALEC_MONOPOLY.shortBio}
                </p>
                <p className="mb-9 font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
                  DJ sets: 17:15 – 18:15 · Saturday & Sunday
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  {ALEC_MONOPOLY.highlights.map((item) => (
                    <div key={item.label} className="text-center">
                      <AlecHighlightIcon type={item.icon} />
                      <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-[10px] sm:text-[11px] uppercase tracking-wide text-white/90 leading-snug">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DarkCard>
        </section>

        {/* Menu & Drinks cards */}
        <div className="grid md:grid-cols-2 gap-5">
          <section id="menu" ref={setSectionRef('menu')}>
            <DarkCard className="p-6 sm:p-8 h-full flex flex-col">
              <p
                className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.35em] mb-6 sm:mb-8"
                style={{ color: ACCENT }}
              >
                Menu
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-5 flex-1 mb-8">
                {MENU_PREVIEW.map((item) => (
                  <div key={item.title} className="text-center">
                    <MenuPreviewIcon type={item.icon} />
                    <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-wide text-white mb-1.5">
                      {item.title}
                    </p>
                    {item.lines.map((line) => (
                      <p key={line} className="font-[family-name:var(--font-inter)] text-xs text-white/45 leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  window.location.href = '/monacoprogramme/menu'
                }}
                className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-wider text-left hover:opacity-80 transition-opacity mt-auto"
                style={{ color: ACCENT }}
              >
                View menu &gt;
              </button>
              {menuExpanded && (
                <div className="mt-4 pt-4 border-t border-white/[0.08]">
                  <p className="font-[family-name:var(--font-inter)] text-sm text-white/55 leading-relaxed">{FOOD_MENU_PLACEHOLDER}</p>
                </div>
              )}
            </DarkCard>
          </section>

          <section id="drinks" ref={setSectionRef('drinks')}>
            <DarkCard className="p-6 sm:p-8 h-full flex flex-col">
              <p
                className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.35em] mb-6 sm:mb-8"
                style={{ color: ACCENT }}
              >
                Drinks
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 flex-1 mb-8">
                {DRINKS_PREVIEW.map((item) => (
                  <div key={item.title} className="text-center">
                    <DrinksPreviewIcon type={item.icon} />
                    <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-wide text-white/90">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mb-8 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                Unlimited flowing drinks served until 18:00, including cocktails, spirits, beer, wine and soft drinks.
              </p>
              <button
                type="button"
                onClick={() => {
                  window.location.href = '/monacoprogramme/drinks'
                }}
                className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-wider text-left hover:opacity-80 transition-opacity mt-auto"
                style={{ color: ACCENT }}
              >
                View drinks &gt;
              </button>
              {drinksExpanded && <DrinksDetailPanel />}
            </DarkCard>
          </section>
        </div>
      </div>

      <div className="mx-auto mb-10 h-px w-[min(72rem,calc(100%-3rem))] bg-[#F90202]/55" />
      <ProgrammeFooter />
    </main>
  )
}
