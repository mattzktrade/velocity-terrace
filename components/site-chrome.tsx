'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'

const LOGO = '/monaco/velocity%20logo%20white.png'
const FOOTER_IMAGE = '/monaco/page3-img8.jpg'

function VelocityLogo({ className = 'h-9 sm:h-11' }: { className?: string }) {
  return (
    <img
      src={LOGO}
      alt="Velocity Terrace"
      className={`w-auto object-contain ${className}`}
    />
  )
}

const raceLinks = [
  { label: 'Singapore', meta: '2026 · Marina Bay', href: '/races/singapore', accent: '#0EA5E9' },
  { label: 'Abu Dhabi', meta: 'Yas Marina · Dec 2026', href: '/races/abu-dhabi', accent: '#C9A84C' },
  { label: 'Monaco 2027', meta: 'Saturday · Sunday · 2-day', href: '/races/monaco', accent: '#F90202' },
]

export function SiteHeader({
  isHome = false,
  className = '',
}: {
  isHome?: boolean
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Partners', href: '/sponsorship' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ]
  const racesHref = isHome ? '#races' : '/#races'

  return (
    <nav
      aria-label="Main navigation"
      className={`relative z-20 flex items-center justify-between px-6 py-6 lg:px-12 ${className}`}
    >
      <Link href="/" className="block" aria-label="Velocity Terrace home">
        <VelocityLogo className="h-8 sm:h-10" />
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        <div className="group relative py-3">
          <Link
            href={racesHref}
            className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            aria-haspopup="true"
          >
            The Races
            <ChevronRight className="h-3 w-3 rotate-90 transition-transform group-hover:rotate-[270deg]" />
          </Link>
          <div className="pointer-events-none absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
              {raceLinks.map((race) => (
                <Link
                  key={race.label}
                  href={race.href}
                  className="group/item flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition hover:bg-white/[0.06]"
                >
                  <span>
                    <span className="block font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase leading-none text-white">
                      {race.label}
                    </span>
                    <span className="mt-1 block text-xs text-white/45">{race.meta}</span>
                  </span>
                  <ChevronRight
                    className="h-4 w-4 transition group-hover/item:translate-x-1"
                    style={{ color: race.accent }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-xs font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-30 max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 p-6">
            <div className="space-y-3">
              <Link
                href={racesHref}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                The Races
              </Link>
              <div className="grid gap-2 pl-3">
                {raceLinks.map((race) => (
                  <Link
                    key={race.label}
                    href={race.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span>
                      <span className="block font-[family-name:var(--font-barlow-condensed)] text-lg font-black uppercase text-white">
                        {race.label}
                      </span>
                      <span className="block text-xs text-white/45">{race.meta}</span>
                    </span>
                    <ChevronRight className="h-4 w-4" style={{ color: race.accent }} />
                  </Link>
                ))}
              </div>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export function SiteFooter({ isHome = false }: { isHome?: boolean }) {
  const links = [
    { label: 'Races', href: isHome ? '#races' : '/#races' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Partners', href: '/sponsorship' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ]

  return (
    <footer className="relative bg-[#0A0A0A]">
      <div className="h-1 bg-gradient-to-r from-[#F90202] via-[#FF3333] to-[#F90202]" />

      <div className="relative overflow-hidden border-b border-white/5">
        <img
          src={FOOTER_IMAGE}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 text-center lg:px-12 lg:py-16">
          <p className="mb-2 font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.3em] text-[#F90202]">
            See you on the grid
          </p>
          <h3 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase leading-none text-white sm:text-4xl lg:text-5xl">
            Singapore · Abu Dhabi · Monaco 2027
          </h3>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <VelocityLogo className="mx-auto mb-3 h-10 md:mx-0" />
            <p className="font-[family-name:var(--font-inter)] text-sm text-white/50">
              The premium F1 party hospitality experience.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-[#F90202]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-1 text-center md:items-end md:text-right">
            <p className="text-xs text-white/40">© 2026 Velocity Terrace. All rights reserved.</p>
            <p className="text-xs text-white/30">Built for the people who came to party.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
