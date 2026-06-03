'use client'

import { HOME_FAQS } from '@/lib/seo/faqs'
import { useEffect, useRef, useState } from 'react'
import { MapPin, MessageCircle, Mail, Menu, X, ChevronRight } from 'lucide-react'
import Link from 'next/link'
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
    <section className="relative min-h-screen flex flex-col">
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
            <span className="block text-[#E8390E]">This is a party.</span>
          </h1>

          {/* Sub-headline */}
          <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Cars at your feet. Champagne on ice. DJs until the after-party ends. Monaco · Singapore · Abu Dhabi.
          </p>

          {/* CTA */}
          <div className="flex justify-center animate-fade-in-up delay-300">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E8390E] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#ff4a1f] transition-all duration-300 animate-pulse-glow"
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
      <div className="relative z-10 bg-[#E8390E] border-t border-[#ff4a1f]/30 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {['MONACO GP', 'SINGAPORE GP', 'ABU DHABI GP', 'OPEN BAR', 'LIVE DJS', 'GOURMET HOSPITALITY', 'VIP AFTER PARTY', 'VELOCITY TERRACE'].map((item, j) => (
                <span key={j} className="flex items-center gap-8">
                  <span className="text-sm font-bold tracking-widest uppercase text-white">{item}</span>
                  <span className="text-white/60">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
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
        <div className="absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10 md:hidden">
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
      description: 'World-renowned DJ and live artist Alec Monopoly performing on race days. Exclusive live art experience.'
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
    <section id="experience" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#0A0A0A] racing-stripes overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Features */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className={`font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What is<br />
              <span className="text-[#E8390E]">Velocity Terrace?</span>
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
                  <div className="w-1 bg-[#E8390E] flex-shrink-0" />
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
                className={`bg-[#111111] border border-white/10 p-6 rounded-lg hover:border-[#E8390E]/30 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-[family-name:var(--font-barlow-condensed)] font-black text-5xl sm:text-6xl text-[#E8390E]">{stat.value}</span>
                  <span className="font-[family-name:var(--font-barlow-condensed)] font-bold text-2xl text-[#E8390E]">{stat.unit}</span>
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
      accentColor: '#E8390E',
      glowClass: 'card-glow-red',
      image: MONACO.terrace,
      href: '/monacoprogramme'
    },
    {
      number: '02',
      name: 'SINGAPORE',
      location: 'Marina Bay',
      dates: 'SAT 19 – SUN 20 SEPT',
      accentColor: '#0EA5E9',
      glowClass: 'card-glow-blue',
      image: '/singapore.jpg',
      href: '/races/singapore'
    },
    {
      number: '03',
      name: 'ABU DHABI',
      location: 'Yas Marina',
      dates: 'SAT 5 – SUN 6 DEC',
      accentColor: '#C9A84C',
      glowClass: 'card-glow-gold',
      image: '/abudhabi.jpg',
      href: '/races/abu-dhabi'
    }
  ]

  return (
    <section id="races" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#080808]">
      {/* Angled top border */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#0A0A0A]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
        <h2 className={`font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white text-center mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Three Legendary Circuits.
        </h2>
        <p className={`font-[family-name:var(--font-barlow-condensed)] font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#E8390E] text-center mb-16 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
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
                <span className="absolute top-4 right-4 font-[family-name:var(--font-barlow-condensed)] font-black text-[120px] leading-none text-white/5">
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
                    View Race Details
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#0A0A0A]">
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
              image: MONACO.party,
              alt: 'Guests at the terrace party',
              title: 'Live DJs',
              desc: 'International DJs & Artist Alec Monopoly performing live both days',
              titleSize: 'text-2xl',
              delay: 'delay-300',
            },
            {
              span: '',
              minH: 'min-h-[240px]',
              image: MONACO.gourmet,
              alt: 'Gourmet trackside food',
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
              image: MONACO.gridWalk,
              alt: 'Grid walk at the Grand Prix',
              title: 'VIP After Party',
              desc: "6PM–11PM — the night doesn't end when the chequered flag drops",
              titleSize: 'text-xl',
              delay: 'delay-600',
            },
            {
              span: 'md:col-span-2',
              minH: 'min-h-[280px]',
              image: MONACO.carPush,
              alt: 'F1 action at Monaco',
              title: 'Exclusive Live Art',
              desc: 'Alec Monopoly creating exclusive artwork live at the event — watch a master at work between sessions, then back to the party.',
              titleSize: 'text-3xl',
              delay: 'delay-600',
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`${card.span} relative rounded-lg overflow-hidden border border-white/10 group hover:border-[#E8390E]/40 transition-all duration-300 ${card.minH} ${isVisible ? `animate-fade-in-up ${card.delay}` : 'opacity-0'}`}
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
    MONACO.gourmet,
    MONACO.party,
    MONACO.gridWalk,
    MONACO.carPush,
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

  return (
    <section id="gallery" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#080808]">
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
          <div className="flex justify-center mb-10">
            <TabsList className="bg-[#111111] border border-white/10 h-auto p-1 rounded-xl">
              <TabsTrigger value="monaco" className="data-[state=active]:bg-[#0A0A0A] data-[state=active]:text-white text-white/70 px-5 py-2 rounded-lg">
                Monaco
              </TabsTrigger>
              <TabsTrigger value="singapore" className="data-[state=active]:bg-[#0A0A0A] data-[state=active]:text-white text-white/70 px-5 py-2 rounded-lg">
                Singapore
              </TabsTrigger>
              <TabsTrigger value="abu-dhabi" className="data-[state=active]:bg-[#0A0A0A] data-[state=active]:text-white text-white/70 px-5 py-2 rounded-lg">
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
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E8390E] rounded-lg transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="singapore">
            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              <div className={`relative rounded-2xl overflow-hidden border border-white/10 min-h-[420px] bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0EA5E9]/25 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0EA5E9/20,_transparent_60%)]" />
                <div className="relative p-8 h-full flex flex-col justify-end">
                  <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-[0.3em] text-[#0EA5E9] mb-3">
                    Singapore GP
                  </p>
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mb-3">
                    Night race. Big energy.
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-white/70 max-w-xl">
                    Full race-page coming with schedule, what to expect, and all the details — for now, jump into the race landing page.
                  </p>
                  <div className="mt-6">
                    <Link href="/races/singapore" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] text-white font-semibold text-xs uppercase tracking-wider rounded hover:brightness-110 transition-all">
                      View Singapore page <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`bg-[#111111] border border-white/10 rounded-2xl p-8 ${isVisible ? 'animate-fade-in-up delay-150' : 'opacity-0'}`}>
                <h4 className="font-[family-name:var(--font-barlow-condensed)] font-black text-2xl uppercase text-white mb-4">
                  3-day package (Fri–Sun)
                </h4>
                <ul className="space-y-3 text-white/70 text-sm font-[family-name:var(--font-inter)]">
                  <li className="flex gap-3"><span className="text-[#0EA5E9]">—</span><span>Friday: settle in, practice sessions, DJs warm-up</span></li>
                  <li className="flex gap-3"><span className="text-[#0EA5E9]">—</span><span>Saturday: qualifying day + peak party energy</span></li>
                  <li className="flex gap-3"><span className="text-[#0EA5E9]">—</span><span>Sunday: race day, champagne moments, afters</span></li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="abu-dhabi">
            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              <div className={`relative rounded-2xl overflow-hidden border border-white/10 min-h-[420px] bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#C9A84C]/25 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#C9A84C/20,_transparent_60%)]" />
                <div className="relative p-8 h-full flex flex-col justify-end">
                  <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
                    Abu Dhabi GP
                  </p>
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mb-3">
                    Season finale, full send.
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-white/70 max-w-xl">
                    Full race-page coming with schedule, what to expect, and FAQs — for now, jump into the race landing page.
                  </p>
                  <div className="mt-6">
                    <Link href="/races/abu-dhabi" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0A0A0A] font-semibold text-xs uppercase tracking-wider rounded hover:brightness-110 transition-all">
                      View Abu Dhabi page <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`bg-[#111111] border border-white/10 rounded-2xl p-8 ${isVisible ? 'animate-fade-in-up delay-150' : 'opacity-0'}`}>
                <h4 className="font-[family-name:var(--font-barlow-condensed)] font-black text-2xl uppercase text-white mb-4">
                  3-day package (Fri–Sun)
                </h4>
                <ul className="space-y-3 text-white/70 text-sm font-[family-name:var(--font-inter)]">
                  <li className="flex gap-3"><span className="text-[#C9A84C]">—</span><span>Friday: opening night energy, practice sessions</span></li>
                  <li className="flex gap-3"><span className="text-[#C9A84C]">—</span><span>Saturday: qualifying + the biggest party moments</span></li>
                  <li className="flex gap-3"><span className="text-[#C9A84C]">—</span><span>Sunday: race day + finale afters</span></li>
                </ul>
              </div>
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
    <section id="faq" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#080808]" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] text-[#E8390E] mb-4">
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
                <AccordionTrigger className="text-white text-base sm:text-lg font-[family-name:var(--font-barlow-condensed)] font-bold uppercase tracking-wide hover:no-underline">
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
      className="relative py-32 lg:py-44 overflow-hidden"
    >
      <img
        src={MONACO.party}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/55 to-[#E8390E]/30" />
      <div className="absolute inset-0 bg-[#0A0A0A]/35" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <blockquote className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="font-[family-name:var(--font-barlow-condensed)] font-black text-[120px] sm:text-[180px] leading-none text-[#E8390E] block -mb-8 sm:-mb-12">
            &ldquo;
          </span>
          <p className="font-[family-name:var(--font-barlow-condensed)] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05] max-w-4xl">
            This is what F1 was <span className="text-[#E8390E]">always supposed</span> to feel like.
          </p>
          <footer className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-[#E8390E]" />
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
    'Open bar all day',
    'Live DJ & Alec Monopoly performing',
    'Curated guest list of enthusiasts, influencers & celebs',
    'After-party 6PM–11PM',
    'Front-row start/finish views'
  ]

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className={`font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Not Your Average<br />
          <span className="text-[#E8390E]">Hospitality Package.</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_auto_1.15fr] gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
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
          <div className={`flex items-center justify-center ${isVisible ? 'animate-fade-in-up delay-250' : 'opacity-0'}`}>
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#E8390E] flex items-center justify-center shadow-[0_0_30px_rgba(232,57,14,0.5)]">
              <span className="font-[family-name:var(--font-barlow-condensed)] font-black text-2xl text-white">VS</span>
            </div>
          </div>

          {/* Velocity Terrace */}
          <div className={`relative rounded-xl overflow-hidden border-2 border-[#E8390E] shadow-[0_0_60px_rgba(232,57,14,0.25)] ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <img
              src={MONACO.terrace}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/85 to-[#E8390E]/50" />
            <div className="relative p-8 lg:p-10">
              <VelocityLogo className="h-9 sm:h-10 mb-8" />
              <ul className="space-y-4">
                {velocity.map((item) => (
                  <li key={item} className="flex gap-3 items-center text-white font-[family-name:var(--font-inter)] text-sm sm:text-base font-medium">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8390E] flex items-center justify-center">
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
    console.log('Form submitted:', formState)
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
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative red accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E8390E]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#E8390E]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-sm uppercase tracking-[0.3em] text-[#E8390E] mb-4">
            Lights Out · Get In
          </p>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white mb-4">
            Ready to Race <span className="text-[#E8390E]">With Us?</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/70 text-lg max-w-xl mx-auto">
            Limited places available across all three races. Enquire now to secure yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Form */}
          <div className={`bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {isSubmitted ? (
              <div className="bg-[#111111] border border-emerald-500/30 rounded-lg p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-barlow-condensed)] font-bold text-2xl uppercase text-white mb-2">
                  {"Thanks! We'll be in touch shortly"} ✓
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-white/60">
                  Our team typically responds within 2 hours.
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
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#E8390E] focus:outline-none focus:ring-1 focus:ring-[#E8390E] transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#E8390E] focus:outline-none focus:ring-1 focus:ring-[#E8390E] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#E8390E] focus:outline-none focus:ring-1 focus:ring-[#E8390E] transition-colors"
                  />
                </div>

                {/* Race Checkboxes */}
                <div>
                  <p className="text-white/60 text-sm mb-3">Which races are you interested in?</p>
                  <div className="flex flex-wrap gap-4">
                    {['Monaco', 'Singapore', 'Abu Dhabi'].map((race) => (
                      <label key={race} className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 border ${formState.races.includes(race) ? 'bg-[#E8390E] border-[#E8390E]' : 'border-white/30'} rounded flex items-center justify-center transition-colors`}>
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
                    className="w-full px-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#E8390E] focus:outline-none focus:ring-1 focus:ring-[#E8390E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8390E] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#ff4a1f] transition-all duration-300 animate-pulse-glow"
                >
                  Send Enquiry
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Image-led Contact Panel */}
          <div className={`relative rounded-2xl overflow-hidden border border-[#E8390E]/30 min-h-[500px] flex flex-col ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <img
              src={MONACO.party}
              alt="Velocity Terrace party in Monaco"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />

            {/* Bottom contact stack */}
            <div className="relative mt-auto p-6 sm:p-8 space-y-3">
              <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
                Or skip the form
              </p>

              <a
                href="https://wa.me/44XXXXXXXXXX"
                className="flex items-center gap-4 p-4 bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 rounded-lg hover:border-emerald-500/50 hover:bg-[#0A0A0A]/95 transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">+44 XXXX XXXXXX</p>
                  <p className="text-white/60 text-xs">WhatsApp · usually replies in minutes</p>
                </div>
              </a>

              <a
                href="mailto:info@velocityterrace.com"
                className="flex items-center gap-4 p-4 bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 rounded-lg hover:border-[#E8390E]/60 hover:bg-[#0A0A0A]/95 transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#E8390E] flex items-center justify-center shadow-lg shadow-[#E8390E]/40 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">info@velocityterrace.com</p>
                  <p className="text-white/60 text-xs">Email us anytime · 2 hour response</p>
                </div>
              </a>
            </div>
          </div>
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
      <div className="h-1 bg-gradient-to-r from-[#E8390E] via-[#ff6b3d] to-[#E8390E]" />

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
          <p className="font-[family-name:var(--font-barlow-condensed)] font-bold text-xs uppercase tracking-[0.3em] text-[#E8390E] mb-2">
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
                className="text-xs font-medium tracking-widest uppercase text-white/60 hover:text-[#E8390E] transition-colors"
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

export default function HomePageClient() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
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
