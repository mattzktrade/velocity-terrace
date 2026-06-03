/** Shared FAQ copy for on-page content + FAQPage JSON-LD (AEO) */
export type FaqItem = { q: string; a: string }

export const HOME_FAQS: FaqItem[] = [
  {
    q: 'What is Velocity Terrace?',
    a: 'Velocity Terrace is a premium Formula 1 party hospitality experience at the Monaco, Singapore, and Abu Dhabi Grands Prix. You get front-row track views, an all-day open bar, gourmet food, live DJs, and an exclusive after-party — designed to feel like a high-end race weekend party, not corporate hospitality.',
  },
  {
    q: 'What is included in the Velocity Terrace F1 hospitality package?',
    a: 'Packages include trackside views over the start/finish straight, all-day open bar (champagne, premium spirits, wine, beer), gourmet dining, live DJs and entertainment, and a VIP after-party. Exact timings and inclusions vary slightly by race — see each race page for full details.',
  },
  {
    q: 'How many days is Velocity Terrace at each Grand Prix?',
    a: 'Monaco is a 2-day experience (Saturday and Sunday). Singapore and Abu Dhabi are 3-day experiences (Friday through Sunday).',
  },
  {
    q: 'Which F1 races does Velocity Terrace host?',
    a: 'Velocity Terrace runs at three Grands Prix in 2026: Monaco (Monte Carlo), Singapore (Marina Bay night race), and Abu Dhabi (Yas Marina season finale).',
  },
  {
    q: 'How is Velocity Terrace different from traditional F1 hospitality?',
    a: 'Traditional F1 hospitality is often a formal seated lunch with a corporate crowd. Velocity Terrace is built as an all-day party: open bar, DJs, live art, curated guest list, and an after-party that runs into the evening.',
  },
  {
    q: 'What time does Velocity Terrace run on race day?',
    a: 'Hospitality typically runs from late morning through the race and into an after-party (often 6PM–11PM). Final timings follow the official F1 weekend schedule and are confirmed closer to each event.',
  },
  {
    q: 'How do I book or enquire about Velocity Terrace?',
    a: 'Use the enquiry form on this site or contact the team directly. Share which race(s) you want, your group size, and any preferences. Places are limited for each Grand Prix weekend.',
  },
]

export const RACE_FAQS: Record<string, FaqItem[]> = {
  monaco: [
    {
      q: 'Is Velocity Terrace Monaco a 2-day or 3-day package?',
      a: 'Monaco is a 2-day Velocity Terrace package covering Saturday and Sunday of the Monaco Grand Prix weekend.',
    },
    {
      q: 'Where is Velocity Terrace located at the Monaco Grand Prix?',
      a: 'Velocity Terrace overlooks the start/finish straight and starting grid at Monte Carlo, giving front-row views of race action and big-screen coverage.',
    },
    {
      q: 'What is included at Velocity Terrace Monaco?',
      a: 'Open bar all day, gourmet food, live DJs, Alec Monopoly live art, front-row terrace views, and an exclusive VIP after-party on race weekend evenings.',
    },
  ],
  singapore: [
    {
      q: 'Is Velocity Terrace Singapore a 3-day experience?',
      a: 'Yes — the full experience runs Friday through Sunday, 9–11 October 2026. Single-day and 2-day (Saturday–Sunday) packages are also available. Enquire for details.',
    },
    {
      q: 'Where is Velocity Terrace Singapore located?',
      a: 'Velocity Terrace is on the Padang Deck rooftop of the National Gallery Singapore, with prime views over the Marina Bay skyline.',
    },
    {
      q: 'What packages are available for Singapore GP 2026?',
      a: 'Choose from a 3-day package (Fri–Sun), a 2-day package (Sat–Sun), or single-day options for Friday, Saturday or Sunday. Share your preferred dates in your enquiry.',
    },
    {
      q: 'What is included at Velocity Terrace Singapore?',
      a: 'Rooftop Marina Bay views, world-class catering, open bar, live DJs and entertainment, and access to an exclusive 150-guest capacity venue. Full details are confirmed at booking.',
    },
    {
      q: 'What makes Velocity Terrace Singapore different from other F1 hospitality?',
      a: 'A rare premium rooftop hospitality product outside the Paddock Club — Marina Bay skyline views, world-class catering, open bar, live DJs and an exclusive 150-guest capacity venue designed for corporate and HNW entertaining.',
    },
    {
      q: 'Is arrival and departure straightforward at the National Gallery?',
      a: 'Yes — the National Gallery sits outside the primary road closure zones, ensuring a smooth, hassle-free journey so you can focus on the experience.',
    },
    {
      q: 'Who is Velocity Terrace Singapore designed for?',
      a: 'C-suite executives, high-net-worth individuals, corporate entertaining and global brands — particularly finance, tech and lifestyle clients looking for a premium social hosting environment.',
    },
    {
      q: 'Can we book Velocity Terrace Singapore as a group?',
      a: 'Yes — tell us your group size in the enquiry and we will come back with the best options.',
    },
    {
      q: 'Is there a dress code at Velocity Terrace Singapore?',
      a: 'Smart and polished. Think luxury rooftop hospitality — comfortable, confident, and ready to be photographed.',
    },
  ],
  'abu-dhabi': [
    {
      q: 'Is Velocity Terrace Abu Dhabi a 3-day package?',
      a: 'Yes. Abu Dhabi is a 3-day Velocity Terrace package (Friday–Sunday) for the season finale at Yas Marina Circuit.',
    },
    {
      q: 'Why book Velocity Terrace for the Abu Dhabi Grand Prix?',
      a: 'The season finale weekend pairs front-row Yas Marina hospitality with all-day open bar, live entertainment, and after-party access across three days.',
    },
  ],
}

export const MONACO_PROGRAMME_FAQS: FaqItem[] = [
  {
    q: 'What is the Velocity Terrace Monaco Grand Prix programme?',
    a: 'The Monaco programme is your guest guide for the 2026 Monaco GP weekend at Velocity Terrace — schedule, food and drinks service times, Alec Monopoly DJ sets, and venue details for the 2-day hospitality experience.',
  },
  {
    q: 'How many days is Velocity Terrace at Monaco?',
    a: 'Monaco is a 2-day Velocity Terrace package covering Saturday and Sunday of the Monaco Grand Prix weekend.',
  },
  {
    q: 'Where can I see the Monaco weekend schedule?',
    a: 'The full weekend schedule is on the Monaco programme page, including session timings, entertainment, and after-party hours.',
  },
]
