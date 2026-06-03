type MarqueeTickerProps = {
  items: string[]
  className?: string
  style?: React.CSSProperties
}

/** Repeat items until the track is long enough for wide viewports */
function buildTrackItems(items: string[], minItems = 16) {
  if (items.length === 0) return []
  const track: string[] = []
  let i = 0
  while (track.length < minItems) {
    track.push(items[i % items.length])
    i += 1
  }
  return track
}

function MarqueeTrack({ items, trackId }: { items: string[]; trackId: string }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={trackId === 'b'}>
      {items.map((item, j) => (
        <span key={`${trackId}-${j}-${item}`} className="inline-flex shrink-0 items-center gap-8 px-4">
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-white">{item}</span>
          <span className="text-white/70">·</span>
        </span>
      ))}
    </div>
  )
}

export function MarqueeTicker({ items, className = '', style }: MarqueeTickerProps) {
  const trackItems = buildTrackItems(items)

  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      <div className="flex w-max animate-marquee will-change-transform">
        <MarqueeTrack items={trackItems} trackId="a" />
        <MarqueeTrack items={trackItems} trackId="b" />
      </div>
    </div>
  )
}
