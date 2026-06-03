export const MONACO_ACCENT = '#E8390E'

export const OPENING_HOURS = [
  {
    levelTag: 'LEVEL 5',
    title: 'MAIN TERRACE',
    hours: '11:00 – 18:30',
    detail: 'Trackside views, dining & daytime bar',
  },
  {
    levelTag: 'LEVEL 2',
    title: 'EVENING LOUNGE',
    hours: '18:30 – 22:00',
    detail: 'After-hours atmosphere & lounge',
  },
] as const

export type TimelineItem = {
  time: string
  title: string
  location: string
}

export const SATURDAY_TIMELINE: TimelineItem[] = [
  { time: '10:45 – 11:30', title: 'FIA Formula 3 · Sprint Race', location: 'Trackside' },
  { time: '11:00 – 13:00', title: 'Breakfast Service', location: 'Level 5' },
  { time: '12:30 – 13:30', title: 'Formula 1 · Third Practice Session', location: 'Trackside' },
  { time: '13:00', title: 'Luncheon Service Begins', location: 'Level 5' },
  { time: '14:15 – 15:05', title: 'FIA Formula 2 · Sprint Race', location: 'Trackside' },
  { time: '15:30 – 15:50', title: 'FIA Formula 2 · Press Conference', location: 'Screens' },
  { time: '16:00 – 17:00', title: 'Formula 1 · Qualifying Session', location: 'Trackside' },
  { time: '17:00 – 18:00', title: 'Formula 1 · Press Conference', location: 'Screens' },
  { time: '17:15 – 18:15', title: 'Alec Monopoly · DJ Set', location: 'Level 5' },
  { time: '18:30', title: 'Level 2 Evening Lounge Opens', location: 'Level 2 Lounge' },
]

export const SUNDAY_TIMELINE: TimelineItem[] = [
  { time: '07:45 – 08:35', title: 'FIA Formula 3 · Feature Race', location: 'Trackside' },
  { time: '09:25 – 10:30', title: 'FIA Formula 2 · Feature Race', location: 'Trackside' },
  { time: '10:55 – 11:25', title: 'FIA Formula 2 · Press Conference', location: 'Screens' },
  { time: '11:00 – 13:00', title: 'Breakfast Service', location: 'Level 5' },
  { time: '11:45 – 12:20', title: 'Porsche Mobil 1 Supercup · Race', location: 'Trackside' },
  { time: '13:00', title: 'Luncheon Service Begins', location: 'Level 5' },
  { time: '13:00 – 13:30', title: "Formula 1 · Drivers' Parade", location: 'Trackside' },
  { time: '14:44 – 14:46', title: 'Formula 1 · National Anthem', location: 'Trackside' },
  { time: '15:00 – 17:00', title: 'Formula 1 · Grand Prix', location: 'Trackside' },
  { time: '17:15 – 18:15', title: 'Alec Monopoly · DJ Set', location: 'Level 5' },
  { time: '18:30', title: 'After Party', location: 'Level 2 Lounge' },
]

export const WEEKEND_ESSENTIALS = [
  { label: 'SAT 6 & SUN 7 JUNE 2026', icon: 'calendar' as const },
  { label: 'MONTE CARLO LEVEL 5 & LEVEL 2', icon: 'map' as const },
  { label: '11:00 – LATE OPENING TIMES', icon: 'clock' as const },
  { label: 'AFTER-PARTY VIBES LEVEL 2 LOUNGE', icon: 'music' as const },
]

export const ALEC_MONOPOLY = {
  name: 'Alec Monopoly',
  shortBio:
    'Contemporary artist and DJ, Alec Monopoly brings his signature style and sound to Velocity Terrace for an exclusive weekend experience.',
  highlights: [
    { label: '2 EXCLUSIVE DJ SETS', icon: 'vinyl' as const },
    { label: 'ICONIC ART & VIBES', icon: 'crown' as const },
    { label: 'PREMIUM PARTY ATMOSPHERE', icon: 'tophat' as const },
  ],
} as const

export const MENU_PREVIEW = [
  {
    title: 'FOOD SERVICE',
    lines: ['Saturday & Sunday', 'From 11:00'],
    icon: 'utensils' as const,
  },
  {
    title: 'BREAKFAST',
    lines: ['Saturday & Sunday', '11:00 – 13:00'],
    icon: 'coffee' as const,
  },
  {
    title: 'LUNCH',
    lines: ['Luncheon service', 'from 13:00'],
    icon: 'burger' as const,
  },
] as const

export const DRINKS_PREVIEW = [
  { title: 'COCKTAILS', icon: 'cocktail' as const },
  { title: 'SPIRITS', icon: 'bottle' as const },
  { title: 'BEER', icon: 'beer' as const },
  { title: 'WINE', icon: 'wine' as const },
] as const

export type DrinkItem = {
  name: string
  ingredients?: string
  tag?: string
}

export type DrinkSection = {
  title: string
  items: DrinkItem[]
}

export const DRINKS_MENU: DrinkSection[] = [
  {
    title: 'Cocktails',
    items: [
      { name: 'Margarita', ingredients: 'Don Julio, triple sec, lime' },
      { name: 'Mojito', ingredients: 'Bacardi, mint, lime, soda' },
      { name: 'Aperol Spritz', ingredients: 'Aperol, prosecco, soda' },
      { name: 'Dirty Tonic', ingredients: 'Belvedere Dirty Brew, tonic water', tag: 'Belvedere Dirty Brew special' },
      { name: 'Dirty Espresso Martini', ingredients: 'Belvedere Dirty Brew, fresh espresso', tag: 'Belvedere Dirty Brew special' },
      { name: 'The Skinny', ingredients: 'Belvedere vodka, soda, lime juice', tag: 'Belvedere' },
      { name: 'Paloma', ingredients: 'Rosaluna, grapefruit soda, lime', tag: 'Rosaluna special' },
      { name: 'Mezcal Tonic', ingredients: 'Rosaluna, tonic water', tag: 'Rosaluna special' },
    ],
  },
  {
    title: 'Spirits',
    items: [
      { name: 'Vodka', ingredients: 'Belvedere' },
      { name: 'Gin', ingredients: 'Bombay Sapphire Blue' },
      { name: 'Rum', ingredients: 'Bacardi' },
      { name: 'Tequila', ingredients: 'Don Julio' },
      { name: 'Mezcal', ingredients: 'Rosaluna' },
      { name: 'Whisky', ingredients: 'Jack Daniels' },
    ],
  },
  {
    title: 'Beer',
    items: [{ name: 'Heineken', ingredients: 'Bottled' }],
  },
  {
    title: 'Wine',
    items: [
      { name: 'Rosé', ingredients: 'Whispering Angel' },
      { name: 'Red', ingredients: 'Montes Wings' },
      { name: 'White', ingredients: 'Montes Outer Limits Sauvignon Blanc' },
      { name: 'White', ingredients: 'Montes Alpha Special Cuvée Chardonnay' },
      { name: 'Champagne', ingredients: 'Genesis' },
    ],
  },
]

export const FOOD_MENU_PLACEHOLDER =
  'Our full food menu will be shared here shortly. Breakfast is served from 11:00 to 13:00, followed by luncheon service from 13:00 across both days.'
