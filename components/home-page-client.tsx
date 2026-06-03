'use client'

import { HOME_FAQS } from '@/lib/seo/faqs'
import { CONTACT_EMAIL } from '@/lib/seo/site'
import { useEffect, useRef, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, Menu, X, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { MarqueeTicker } from '@/components/marquee-ticker'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const M = '/monaco'

const MONACO = {
  logo: `${M}/velocity%20logo%20white.png`,
  heroVideo: `${M}/monaco-2025.mp4`,
  heroPoster: `${M}/page1-img0.jpg`,
  terrace: `${M}/page4-img15.jpg`,
  terraceCrowd: `${M}/page3-img8.jpg`,
  openBar: `${M}/page3-img9.jpg`,
  gourmet: `${M}/page4-img18.jpg`,
  party: `${M}/page4-img14.jpg`,
  gridWalk: `${M}/page6-img28.png`,
  raceAction: `${M}/page2-img4.jpg`,
  carPush: `${M}/page4-img11.jpg`,
  alecDjing: `${M}/10-2-alec-monopoly-djing37.jpg`,
} as const

const SINGAPORE = {
  mbsView: '/singapore/VT%20MBS%20view.png',
  nightOutside: '/singapore/VT%20night%20outside.jpg',
  insideOutside: '/singapore/VT%20inside%20outisde%20view.png',
  inside1: '/singapore/VT%20SIngapore%20inside%201.jpg',
  outdoor: '/singapore/VTS%20-%20Outdoor%201.jpg',
  champagne: '/singapore/VT%20Champagne.jpg',
  food: '/singapore/VT%20Food.jpg',
  image2: '/singapore/image-2.jpg',
} as const

function VelocityLogo({ className = 'h-9 sm:h-11' }: { className?: string }) {
  return (
    <img
      src={MONACO.logo}
      alt="Velocity Terrace"
      className={`w-auto object-contain ${className}`}
    />
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={MONACO.heroPoster}
          className="w-full h-full object-cover"
        >
          <source src={MONACO.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-[family-name:var(--font-barlow-condensed)] font-black text-5xl sm:text-7xl md:text-8xl lg:text-[120px] leading-[0.9] tracking-tight uppercase mb-8 animate-fade-in-up">
            <span className="block text-white">This is not</span>
            <span className="block text-white">hospitality.</span>
            <span className="block text-[#F90202]">This is a party.</span>
          </h1>

          {/* Sub-headline */}
          <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            <strong className="font-medium text-white/90">Velocity Terrace</strong> is premium F1 party hospitality — front-row track views, open bar all day, live DJs and VIP after-party at Monaco, Singapore and Abu Dhabi GP 2026.
          </p>

          {/* CTA */}
          <div className="flex justify-center animate-fade-in-up delay-300">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F90202] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#FF1A1A] transition-all duration-300 animate-pulse-glow"
            >
              Secure Your Place
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 text-center animate-fade-in-up delay-500">
        <div className="inline-flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>

      {/* Marquee Ticker */}
      <MarqueeTicker
        className="relative z-10 bg-[#F90202] border-t border-[#FF1A1A]/30 py-4"
        items={[
          'MONACO GP',
          'SINGAPORE GP',
          'ABU DHABI GP',
          'OPEN BAR',
          'LIVE DJS',
          'GOURMET HOSPITALITY',
          'VIP AFTER PARTY',
          'VELOCITY TERRACE',
        ]}
      />
    </section>
  )
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
      {/* Logo */}
      <a href="/" className="block" aria-label="Velocity Terrace home">
        <VelocityLogo className="h-8 sm:h-10" />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {['The Experience', 'The Races', 'Gallery', 'FAQ', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-').replace('the-', '')}`}
            className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-30 max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10 md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {['The Experience', 'The Races', 'Gallery', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-').replace('the-', '')}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

// What Is Section Component
function WhatIsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: 'FRONT ROW VIEWS',
      description: 'Directly overlooking the start/finish straight and starting grid. You see everything.'
    },
    {
      title: 'OPEN BAR. ALL DAY.',
      description: 'Champagne, premium spirits, curated wines, beers. From 11am to the after-party.'
    },
    {
      title: 'A LIVE SHOW, NOT JUST LUNCH',
      description: 'International DJs, live entertainment and a high-energy atmosphere — built for the weekend, not a formal sit-down lunch.',
    },
    {
      title: "THE NIGHT DOESN'T END",
      description: 'Exclusive VIP after-party from 6PM–11PM with international DJs, complimentary bar, and luxury snacks.'
    }
  ]

  const stats = [
    { value: '11', unit: 'HRS', label: 'of VIP hospitality daily' },
    { value: '2–3', unit: 'DAYS', label: 'Monaco 2 · Singapore & Abu Dhabi 3' },
    { value: '3', unit: 'RACES', label: 'Monaco · Singapore · Abu Dhabi' },
    { value: '1', unit: 'VIBE', label: 'Like nowhere else in F1' }
  ]

  return (
    <section id="experience" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] racing-stripes overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Features */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className={`font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What is<br />
              <span className="text-[#F90202]">Velocity Terrace?</span>
            </h2>
            <p className={`font-[family-name:var(--font-inter)] text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl ${isVisible ? 'animate-fade-in-up delay-75' : 'opacity-0'}`}>
              Velocity Terrace is premium Formula 1 party hospitality at Monaco, Singapore, and Abu Dhabi — front-row track views, open bar all day, live DJs, and a VIP after-party. It is built for guests who want the race weekend to feel like a party, not a corporate lunch.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="w-1 bg-[#F90202] flex-shrink-0" />
                  <div>
                    <h3 className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xl sm:text-2xl uppercase tracking-wide text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-white/60 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-2 space-y-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-[#111111] border border-white/10 p-6 rounded-lg hover:border-[#F90202]/30 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-[family-name:var(--font-barlow-condensed)] font-black text-5xl sm:text-6xl text-[#F90202]">{stat.value}</span>
                  <span className="font-[family-name:var(--font-barlow-condensed)] font-bold text-2xl text-[#F90202]">{stat.unit}</span>
                </div>
                <p className="font-[family-name:var(--font-inter)] text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Races Section Component
function RacesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const races = [
    {
      number: '01',
      name: 'MONACO',
      location: 'Monte Carlo',
      dates: 'SAT 6 – SUN 7 JUNE',
      accentColor: '#F90202',
      glowClass: 'card-glow-red',
      image: MONACO.terrace,
      href: '/monacoprogramme',
      ctaLabel: 'View Programme',
    },
    {
      number: '02',
      name: 'SINGAPORE',
      location: 'National Gallery · Marina Bay',
      dates: 'FRI 9 – SUN 11 OCT 2026',
      accentColor: '#0EA5E9',
      glowClass: 'card-glow-blue',
      image: '/singapore/VT%20MBS%20view.png',
      href: '/races/singapore',
      ctaLabel: 'View Race Details',
    },
    {
      number: '03',
      name: 'ABU DHABI',
      location: 'Yas Marina',
      dates: 'Coming soon',
      accentColor: '#C9A84C',
      glowClass: 'card-glow-gold',
      image: '/abudhabi.jpg',
      href: '#contact',
      ctaLabel: 'Coming Soon · Enquire',
      comingSoon: true,
    },
  ]

  return (
    <section id="races" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#080808]">
      {/* Angled top border */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#0A0A0A]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
        <h2 className={`font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white text-center mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Three Legendary Circuits.
        </h2>
        <p className={`font-[family-name:var(--font-barlow-condensed)] font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#F90202] text-center mb-16 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          One Legendary Experience.
        </p>

        {/* Race Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {races.map((race, index) => (
            <div
              key={race.name}
              className={`group relative bg-[#111111] rounded-lg overflow-hidden border border-white/10 hover:border-opacity-50 transition-all duration-500 ${race.glowClass} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${(index + 2) * 0.1}s`,
              }}
            >
              {/* Background Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={race.image}
                  alt={`${race.name} Grand Prix`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, ${race.accentColor}20 0%, #0A0A0A 80%)`
                  }}
                />

                {/* Watermark Number */}
                <span className="absolute top-4 right-4 font-[family-name:var(--font-barlow-condensed)] font-black text-[72px] sm:text-[120px] leading-none text-white/5 pointer-events-none">
                  {race.number}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-5xl lg:text-6xl uppercase tracking-tight text-white mb-1">
                    {race.name}
                  </h3>
                  <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-lg uppercase tracking-wider text-white/60 mb-3">
                    Grand Prix 2026
                  </p>

                  <p className="font-[family-name:var(--font-inter)] text-sm text-white/80 mb-1">{race.dates}</p>

                  <div className="flex items-center gap-2 text-white/60 mb-6">
                    <MapPin className="w-4 h-4" style={{ color: race.accentColor }} />
                    <span className="text-sm">{race.location}</span>
                  </div>

                  <Link
                    href={race.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                    style={{ color: race.accentColor }}
                  >
                    {race.ctaLabel}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Bento Grid Section
function BentoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className={`font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white text-center mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Everything Included.
        </h2>
        <p className={`font-[family-name:var(--font-barlow-condensed)] font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#C9A84C] text-center mb-16 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          Nothing Held Back.
        </p>

        {/* Bento Grid — image-led cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              span: 'md:col-span-2',
              minH: 'min-h-[300px]',
              image: MONACO.openBar,
              alt: 'Premium rosé on ice',
              title: 'Open Bar',
              desc: 'Champagne · Premium Spirits · Curated Wines · Beers · Soft Drinks · All Day',
              titleSize: 'text-3xl',
              delay: 'delay-200',
            },
            {
              span: '',
              minH: 'min-h-[240px]',
              image: MONACO.alecDjing,
              alt: 'Alec Monopoly DJing at Velocity Terrace',
              title: 'Live DJs',
              desc: 'International DJs keeping the energy high from day to night',
              titleSize: 'text-2xl',
              delay: 'delay-300',
            },
            {
              span: '',
              minH: 'min-h-[240px]',
              image: SINGAPORE.food,
              alt: 'Premium gourmet catering at Velocity Terrace',
              title: 'Gourmet Food',
              desc: 'French breakfast, luxury appetisers, grilled Italian & Mediterranean cuisine all day',
              titleSize: 'text-2xl',
              delay: 'delay-400',
            },
            {
              span: '',
              minH: 'min-h-[220px]',
              image: MONACO.terraceCrowd,
              alt: 'Terrace views over the circuit',
              title: 'Front-Row Views',
              desc: 'Start/finish straight & big screens — you feel every lap',
              titleSize: 'text-xl',
              delay: 'delay-500',
            },
            {
              span: '',
              minH: 'min-h-[220px]',
              image: MONACO.party,
              alt: 'VIP after-party at Velocity Terrace',
              title: 'VIP After Party',
              desc: "6PM–11PM — the night doesn't end when the chequered flag drops",
              titleSize: 'text-xl',
              delay: 'delay-600',
            },
            {
              span: 'md:col-span-2',
              minH: 'min-h-[280px]',
              image: SINGAPORE.nightOutside,
              alt: 'Velocity Terrace rooftop atmosphere at night',
              title: 'Elite Atmosphere',
              desc: 'An exclusive guest crowd, seamless service and premium hospitality at every race weekend.',
              titleSize: 'text-3xl',
              delay: 'delay-600',
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`${card.span} relative rounded-lg overflow-hidden border border-white/10 group hover:border-[#F90202]/40 transition-all duration-300 ${card.minH} ${isVisible ? `animate-fade-in-up ${card.delay}` : 'opacity-0'}`}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/10" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8">
                <h3 className={`font-[family-name:var(--font-barlow-condensed)] font-bold ${card.titleSize} uppercase text-white mb-2 drop-shadow-lg`}>
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-white/80 text-sm leading-relaxed max-w-md drop-shadow-md">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  /** Images already on homepage (hero, races, bento, quote, contact, footer) — excluded from gallery */
  const usedOnHomepage = new Set<string>([
    MONACO.heroPoster,
    MONACO.terrace,
    MONACO.terraceCrowd,
    MONACO.openBar,
    MONACO.party,
    MONACO.alecDjing,
    SINGAPORE.food,
    SINGAPORE.nightOutside,
  ])

  const monacoGallery: { src: string; aspect: string; alt: string }[] = [
    { src: `${M}/page4-img12.jpg`, aspect: 'aspect-[4/3]', alt: 'Race day action at Monaco' },
    { src: `${M}/page4-img13.jpg`, aspect: 'aspect-[4/5]', alt: 'Trackside atmosphere' },
    { src: `${M}/page4-img16.jpg`, aspect: 'aspect-[4/5]', alt: 'Monaco Grand Prix weekend' },
    { src: `${M}/page4-img17.jpg`, aspect: 'aspect-[4/3]', alt: 'Velocity Terrace experience' },
    { src: `${M}/page4-img19.jpg`, aspect: 'aspect-[4/5]', alt: 'Social scene at the terrace' },
    { src: `${M}/page4-img20.jpg`, aspect: 'aspect-[4/3]', alt: 'Monaco hospitality vibes' },
    { src: `${M}/page4-img21.jpg`, aspect: 'aspect-[4/5]', alt: 'Race weekend highlights' },
    { src: `${M}/page4-img22.jpg`, aspect: 'aspect-[4/3]', alt: 'F1 party at Monte Carlo' },
    { src: MONACO.raceAction, aspect: 'aspect-[4/5]', alt: 'Cars racing past the terrace' },
    { src: `${M}/page3-img10.jpg`, aspect: 'aspect-[4/3]', alt: 'Monaco circuit views' },
    { src: `${M}/page5-img25.png`, aspect: 'aspect-[4/5]', alt: 'Red Bull on the Monaco track' },
  ].filter((img) => !usedOnHomepage.has(img.src))

  const singaporeGallery: { src: string; aspect: string; alt: string }[] = [
    { src: SINGAPORE.mbsView, aspect: 'aspect-[4/3]', alt: 'Marina Bay skyline from Velocity Terrace Singapore' },
    { src: SINGAPORE.outdoor, aspect: 'aspect-[4/5]', alt: 'Velocity Terrace outdoor rooftop at National Gallery' },
    { src: SINGAPORE.inside1, aspect: 'aspect-[4/5]', alt: 'Velocity Terrace Singapore interior hospitality' },
    { src: SINGAPORE.insideOutside, aspect: 'aspect-[4/3]', alt: 'Velocity Terrace inside and outside views' },
    { src: SINGAPORE.nightOutside, aspect: 'aspect-[4/5]', alt: 'Velocity Terrace Singapore at night' },
    { src: SINGAPORE.champagne, aspect: 'aspect-[4/3]', alt: 'Champagne service at Velocity Terrace Singapore' },
    { src: SINGAPORE.food, aspect: 'aspect-[4/5]', alt: 'Premium catering at Velocity Terrace Singapore' },
    { src: SINGAPORE.image2, aspect: 'aspect-[4/3]', alt: 'Velocity Terrace Singapore hospitality experience' },
  ]

  return (
    <section id="gallery" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-2">
            The Velocity Terrace Experience
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm uppercase tracking-widest">
            Select a race — the same energy, different cities
          </p>
        </div>

        <Tabs defaultValue="monaco" className="w-full">
          <div className="flex justify-center mb-10 px-1">
            <TabsList className="bg-[#111111] border border-white/10 h-auto p-1 rounded-xl flex flex-wrap justify-center gap-1 w-full max-w-md sm:max-w-none sm:flex-nowrap">
              <TabsTrigger value="monaco" className="data-[state=active]:bg-[#0A0A0A] data-[state=active]:text-white text-white/70 px-4 sm:px-5 py-2 rounded-lg text-sm flex-1 sm:flex-none min-w-[5.5rem]">
                Monaco
              </TabsTrigger>
              <TabsTrigger value="singapore" className="data-[state=active]:bg-[#0A0A0A] data-[state=active]:text-white text-white/70 px-4 sm:px-5 py-2 rounded-lg text-sm flex-1 sm:flex-none min-w-[5.5rem]">
                Singapore
              </TabsTrigger>
              <TabsTrigger value="abu-dhabi" className="data-[state=active]:bg-[#0A0A0A] data-[state=active]:text-white text-white/70 px-4 sm:px-5 py-2 rounded-lg text-sm flex-1 sm:flex-none min-w-[5.5rem]">
                Abu Dhabi
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monaco">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {monacoGallery.map((img, index) => (
                <div
                  key={img.src}
                  className={`relative break-inside-avoid overflow-hidden rounded-lg group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full ${img.aspect} object-cover group-hover:brightness-110 group-hover:scale-[1.02] transition-all duration-300`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F90202] rounded-lg transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="singapore">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {singaporeGallery.map((img, index) => (
                <div
                  key={img.src}
                  className={`relative break-inside-avoid overflow-hidden rounded-lg group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full ${img.aspect} object-cover group-hover:brightness-110 group-hover:scale-[1.02] transition-all duration-300`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0EA5E9] rounded-lg transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="abu-dhabi">
            <div
              className={`flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#111111] px-8 py-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-4">
                Abu Dhabi
              </p>
              <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-3">
                Images coming soon
              </h3>
              <p className="max-w-md font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                Our Abu Dhabi season finale gallery is on the way. Enquire now for early details on packages and availability.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0A0A0A] font-semibold text-xs uppercase tracking-wider rounded hover:brightness-110 transition-all"
              >
                Enquire for details <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  )
}

function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const faqs = HOME_FAQS

  return (
    <section id="faq" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#080808]" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] text-[#F90202] mb-4">
            Quick Answers
          </p>
          <h2 id="faq-heading" className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-3">
            Frequently asked questions
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/60">
            Everything people ask before they hit “Enquire”.
          </p>
        </div>

        <div className={`bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 ${isVisible ? 'animate-fade-in-up delay-150' : 'opacity-0'}`}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-white/10">
                <AccordionTrigger className="text-white text-left text-base sm:text-lg font-[family-name:var(--font-barlow-condensed)] font-bold uppercase tracking-wide hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 font-[family-name:var(--font-inter)] leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// Quote Section
function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-32 lg:py-44 overflow-hidden"
    >
      <img
        src={MONACO.party}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/55 to-[#F90202]/30" />
      <div className="absolute inset-0 bg-[#0A0A0A]/35" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <blockquote className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="font-[family-name:var(--font-barlow-condensed)] font-black text-[120px] sm:text-[180px] leading-none text-[#F90202] block -mb-8 sm:-mb-12">
            &ldquo;
          </span>
          <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05] max-w-4xl">
            This is what F1 was <span className="text-[#F90202]">always supposed</span> to feel like.
          </p>
          <footer className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-[#F90202]" />
            <p className="font-[family-name:var(--font-inter)] text-white/80 text-sm uppercase tracking-widest">
              Guest, Monaco Grand Prix 2025
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

// Comparison Section
function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const traditional = [
    'Formal sit-down lunch',
    'Branded lanyards',
    'Corporate crowd',
    'Early finish',
    'Standard views'
  ]

  const velocity = [
    'Open bar all day — champagne, spirits, wine & beer',
    'International DJs & live entertainment',
    'Gourmet dining & world-class catering',
    'VIP after-party 6PM–11PM',
    'Premium trackside or rooftop views (by venue)',
    'Flexible 2–3 day & single-day packages',
  ]

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className={`font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white text-center mb-10 sm:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Not Your Average<br />
          <span className="text-[#F90202]">Hospitality Package.</span>
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.15fr] lg:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Traditional */}
          <div className={`bg-[#111111] border border-white/10 rounded-xl p-8 lg:p-10 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <h3 className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xl sm:text-2xl uppercase tracking-wider text-white/40 mb-8 pb-4 border-b border-white/10">
              Traditional F1 Hospitality
            </h3>
            <ul className="space-y-4">
              {traditional.map((item) => (
                <li key={item} className="flex gap-3 text-white/45 font-[family-name:var(--font-inter)] text-sm sm:text-base">
                  <span className="text-white/25 shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS */}
          <div className={`flex items-center justify-center py-2 lg:py-0 ${isVisible ? 'animate-fade-in-up delay-250' : 'opacity-0'}`}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#F90202] flex items-center justify-center shadow-[0_0_30px_rgba(249,2,2,0.5)]">
              <span className="font-[family-name:var(--font-barlow-condensed)] font-black text-2xl text-white">VS</span>
            </div>
          </div>

          {/* Velocity Terrace */}
          <div className={`relative rounded-xl overflow-hidden border-2 border-[#F90202] shadow-[0_0_60px_rgba(249,2,2,0.25)] ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <img
              src={MONACO.terrace}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/85 to-[#F90202]/50" />
            <div className="relative p-8 lg:p-10">
              <VelocityLogo className="h-9 sm:h-10 mb-8" />
              <ul className="space-y-4">
                {velocity.map((item) => (
                  <li key={item} className="flex gap-3 items-center text-white font-[family-name:var(--font-inter)] text-sm sm:text-base font-medium">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F90202] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    races: [] as string[],
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Velocity Terrace Enquiry')
    const body = encodeURIComponent(
      [
        `Name: ${formState.name}`,
        `Email: ${formState.email}`,
        formState.phone ? `Phone: ${formState.phone}` : null,
        `Races: ${formState.races.length > 0 ? formState.races.join(', ') : 'Not specified'}`,
        '',
        formState.message || '(No message provided)',
      ]
        .filter(Boolean)
        .join('\n'),
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  const handleRaceChange = (race: string) => {
    setFormState(prev => ({
      ...prev,
      races: prev.races.includes(race)
        ? prev.races.filter(r => r !== race)
        : [...prev.races, race]
    }))
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative red accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F90202]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#F90202]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] text-[#F90202] mb-4">
            Lights Out · Get In
          </p>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white mb-4">
            Ready to Race <span className="text-[#F90202]">With Us?</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/70 text-lg max-w-xl mx-auto">
            Limited places available across all three races. Enquire now to secure yours.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
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
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#F90202] hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#F90202] focus:outline-none focus:ring-1 focus:ring-[#F90202] transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#F90202] focus:outline-none focus:ring-1 focus:ring-[#F90202] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#F90202] focus:outline-none focus:ring-1 focus:ring-[#F90202] transition-colors"
                  />
                </div>

                {/* Race Checkboxes */}
                <div>
                  <p className="text-white/60 text-sm mb-3">Which races are you interested in?</p>
                  <div className="flex flex-wrap gap-4">
                    {['Monaco', 'Singapore', 'Abu Dhabi'].map((race) => (
                      <label key={race} className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 border ${formState.races.includes(race) ? 'bg-[#F90202] border-[#F90202]' : 'border-white/30'} rounded flex items-center justify-center transition-colors`}>
                          {formState.races.includes(race) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={formState.races.includes(race)}
                          onChange={() => handleRaceChange(race)}
                        />
                        <span className="text-white/80 group-hover:text-white transition-colors">{race}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Message / Group Size"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#F90202] focus:outline-none focus:ring-1 focus:ring-[#F90202] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F90202] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#FF1A1A] transition-all duration-300 animate-pulse-glow"
                >
                  Send Enquiry
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
          <p className="mt-6 text-center font-[family-name:var(--font-inter)] text-sm text-white/50">
            Prefer email?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#F90202] hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A]">
      {/* Red accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#F90202] via-[#FF3333] to-[#F90202]" />

      {/* Big CTA strip */}
      <div className="relative overflow-hidden border-b border-white/5">
        <img
          src={MONACO.terraceCrowd}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 text-center">
          <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-[0.3em] text-[#F90202] mb-2">
            See you on the grid
          </p>
          <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-white leading-none">
            Monaco · Singapore · Abu Dhabi
          </h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <VelocityLogo className="h-10 mb-3 mx-auto md:mx-0" />
            <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm">
              The premium F1 party hospitality experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['Experience', 'Races', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium tracking-widest uppercase text-white/60 hover:text-[#F90202] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <p className="text-white/40 text-xs">
              © 2026 Velocity Terrace. All rights reserved.
            </p>
            <p className="text-white/30 text-xs">
              Built for the people who came to party.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ScrollToContactOnLoad() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollToContact = () => {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (searchParams.get('section') === 'contact') {
      scrollToContact()
      window.history.replaceState(null, '', '/#contact')
      return
    }

    if (window.location.hash === '#contact' || window.location.hash === '#enquire') {
      scrollToContact()
    }
  }, [searchParams])

  return null
}

export default function HomePageClient() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Suspense fallback={null}>
        <ScrollToContactOnLoad />
      </Suspense>
      <HeroSection />
      <WhatIsSection />
      <RacesSection />
      <BentoSection />
      <GallerySection />
      <QuoteSection />
      <ComparisonSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
