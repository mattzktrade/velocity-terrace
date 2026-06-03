import Link from 'next/link'

export function MonacoProgrammeSubpageHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
      <Link href="/" className="block shrink-0" aria-label="Velocity Terrace home">
        <img
          src="/monaco/velocity%20logo%20white.png"
          alt="Velocity Terrace"
          className="h-8 w-auto object-contain sm:h-10"
        />
      </Link>
      <Link
        href="/monacoprogramme"
        className="font-[family-name:var(--font-barlow-condensed)] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/80 hover:text-white shrink-0 text-right max-w-[45%] sm:max-w-none leading-snug"
      >
        <span className="hidden sm:inline">← Weekend Programme</span>
        <span className="sm:hidden">← Programme</span>
      </Link>
    </header>
  )
}
