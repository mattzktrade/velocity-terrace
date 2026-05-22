'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, MapPin, MessageCircle, Mail, Menu, X, ChevronRight } from 'lucide-react'

const M = '/monaco'

/** Previous hero reel — now featured in gallery */
const REEL_VIDEO =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-19%20at%2017.18.27-SLn7POf5WldNf5XmZ7v6BLV0LLuXkp.mp4'

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
  reelPoster: `${M}/page4-img13.jpg`,
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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E8390E] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#ff4a1f] transition-all duration-300 animate-pulse-glow"
            >
              Secure Your Place
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#monaco-reel"
              className="group inline-flex items-center gap-3 px-6 py-4 text-white font-medium text-sm uppercase tracking-wider hover:text-[#E8390E] transition-colors"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-[#E8390E] group-hover:bg-[#E8390E]/10 transition-all">
                <Play className="w-5 h-5 fill-current" />
              </span>
              Watch the 2025 Reel
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
    <nav className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
      {/* Logo */}
      <a href="#" className="block">
        <VelocityLogo className="h-8 sm:h-10" />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {['The Experience', 'The Races', 'Gallery', 'Contact'].map((item) => (
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
            {['The Experience', 'The Races', 'Gallery', 'Contact'].map((item) => (
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
      description: 'World-renowned DJ and live artist Alec Monopoly performing both days. Exclusive live art experience.'
    },
    {
      title: "THE NIGHT DOESN'T END",
      description: 'Exclusive VIP after-party from 6PM–11PM with international DJs, complimentary bar, and luxury snacks.'
    }
  ]

  const stats = [
    { value: '11', unit: 'HRS', label: 'of VIP hospitality daily' },
    { value: '2', unit: 'DAYS', label: 'Saturday & Sunday' },
    { value: '3', unit: 'RACES', label: 'Monaco · Singapore · Abu Dhabi' },
    { value: '1', unit: 'VIBE', label: 'Like nowhere else in F1' }
  ]

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#0A0A0A] racing-stripes overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Features */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className={`font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What is<br />
              <span className="text-[#E8390E]">Velocity Terrace?</span>
            </h2>

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
      image: MONACO.terrace
    },
    {
      number: '02',
      name: 'SINGAPORE',
      location: 'Marina Bay',
      dates: 'SAT 19 – SUN 20 SEPT',
      accentColor: '#0EA5E9',
      glowClass: 'card-glow-blue',
      image: '/singapore.jpg'
    },
    {
      number: '03',
      name: 'ABU DHABI',
      location: 'Yas Marina',
      dates: 'SAT 5 – SUN 6 DEC',
      accentColor: '#C9A84C',
      glowClass: 'card-glow-gold',
      image: '/abudhabi.jpg'
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

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                    style={{ color: race.accentColor }}
                  >
                    Enquire Now
                    <ChevronRight className="w-4 h-4" />
                  </a>
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

// Gallery reel — previous hero video
function MonacoReelTile({ isVisible }: { isVisible: boolean }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (playing && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [playing])

  return (
    <div
      id="monaco-reel"
      className={`relative break-inside-avoid overflow-hidden rounded-lg group cursor-pointer md:col-span-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: '0.15s' }}
    >
      {playing ? (
        <video
          ref={videoRef}
          src={REEL_VIDEO}
          controls
          playsInline
          className="w-full aspect-video object-cover bg-black"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="relative w-full aspect-video block"
          aria-label="Play Monaco 2025 highlights reel"
        >
          <img
            src={MONACO.reelPoster}
            alt="Monaco 2025 highlights"
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/25 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#E8390E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-[#E8390E]/40">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider">Watch: Monaco 2025 Highlights</p>
          </div>
        </button>
      )}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E8390E] rounded-lg transition-colors duration-300 pointer-events-none" />
    </div>
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

  const galleryImages: { src: string; aspect: string; alt: string }[] = [
    { src: MONACO.heroPoster, aspect: 'aspect-[4/5]', alt: 'F1 car on track at Monaco' },
    { src: MONACO.terrace, aspect: 'aspect-[4/3]', alt: 'Terrace overlooking the circuit' },
    { src: MONACO.terraceCrowd, aspect: 'aspect-[4/5]', alt: 'Guests watching cars from the terrace' },
    { src: `${M}/page4-img11.jpg`, aspect: 'aspect-[4/5]', alt: 'Mercedes on the Monaco street circuit' },
    { src: `${M}/page4-img12.jpg`, aspect: 'aspect-[4/3]', alt: 'Race day action at Monaco' },
    { src: `${M}/page4-img13.jpg`, aspect: 'aspect-[4/5]', alt: 'Trackside atmosphere' },
    { src: `${M}/page4-img14.jpg`, aspect: 'aspect-square', alt: 'Guests celebrating at the party' },
    { src: MONACO.openBar, aspect: 'aspect-[4/5]', alt: 'Premium rosé on ice' },
    { src: MONACO.gourmet, aspect: 'aspect-[4/3]', alt: 'Gourmet trackside dining' },
    { src: `${M}/page4-img16.jpg`, aspect: 'aspect-[4/5]', alt: 'Monaco Grand Prix weekend' },
    { src: `${M}/page4-img17.jpg`, aspect: 'aspect-[4/3]', alt: 'Velocity Terrace experience' },
    { src: `${M}/page4-img19.jpg`, aspect: 'aspect-[4/5]', alt: 'Social scene at the terrace' },
    { src: `${M}/page4-img20.jpg`, aspect: 'aspect-[4/3]', alt: 'Monaco hospitality vibes' },
    { src: `${M}/page4-img21.jpg`, aspect: 'aspect-[4/5]', alt: 'Race weekend highlights' },
    { src: `${M}/page4-img22.jpg`, aspect: 'aspect-[4/3]', alt: 'F1 party at Monte Carlo' },
    { src: `${M}/page2-img4.jpg`, aspect: 'aspect-[4/5]', alt: 'Cars racing past the terrace' },
    { src: `${M}/page3-img10.jpg`, aspect: 'aspect-[4/3]', alt: 'Monaco circuit views' },
    { src: `${M}/page5-img25.png`, aspect: 'aspect-[4/5]', alt: 'Red Bull on the Monaco track' },
    { src: `${M}/page6-img27.png`, aspect: 'aspect-[4/3]', alt: 'Behind the scenes at the GP' },
    { src: MONACO.gridWalk, aspect: 'aspect-[4/5]', alt: 'Grid walk energy' },
  ]

  return (
    <section id="gallery" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-2">
            The Velocity Terrace Experience
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm uppercase tracking-widest">
            Monaco 2025 — this is what you&apos;re signing up for
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <MonacoReelTile isVisible={isVisible} />
          {galleryImages.map((img, index) => (
            <div
              key={img.src}
              className={`relative break-inside-avoid overflow-hidden rounded-lg group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 2) * 0.04}s` }}
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

// Main Page Component
export default function VelocityTerracePage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <HeroSection />
      <WhatIsSection />
      <RacesSection />
      <BentoSection />
      <GallerySection />
      <QuoteSection />
      <ComparisonSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
