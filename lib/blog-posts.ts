import { absoluteUrl } from './seo/site'

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: string
  datePublished: string
  dateModified: string
  readingTime: string
  image: string
  keywords: string[]
  intro: string
  sections: Array<{
    heading: string
    body: string[]
  }>
  faqs: Array<{ q: string; a: string }>
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-f1-party-hospitality',
    title: 'What Is F1 Party Hospitality?',
    description:
      'A clear guide to F1 party hospitality: what is included, who it is for, and how it differs from traditional Grand Prix hospitality.',
    category: 'F1 Hospitality Guide',
    datePublished: '2026-06-19',
    dateModified: '2026-06-19',
    readingTime: '5 min read',
    image: '/monaco/page4-img14.jpg',
    keywords: [
      'F1 party hospitality',
      'Formula 1 hospitality',
      'Grand Prix party hospitality',
      'Velocity Terrace',
    ],
    intro:
      'F1 party hospitality is a premium Grand Prix experience built around trackside access, open bar, food, live entertainment and a social atmosphere, rather than a formal corporate lunch.',
    sections: [
      {
        heading: 'The Short Answer',
        body: [
          'F1 party hospitality combines the best parts of race weekend hospitality with the energy of a luxury day party. Guests still get premium views, food, drinks and service, but the atmosphere is built around music, social hosting and after-party moments.',
          'Velocity Terrace is designed for guests who want the race weekend to feel alive from arrival to the final drink: front-row views, open bar, gourmet food, live DJs and a curated crowd.',
        ],
      },
      {
        heading: 'What Is Usually Included?',
        body: [
          'Typical inclusions include trackside or rooftop views, premium drinks, food service, live DJs, entertainment, screens for race coverage, comfortable spaces to relax and after-party access.',
          'The exact package depends on the Grand Prix. Monaco focuses on Saturday, Sunday and full 2-day options. Singapore offers flexible Friday to Sunday hospitality at the National Gallery Padang Deck.',
        ],
      },
      {
        heading: 'How Is It Different From Traditional F1 Hospitality?',
        body: [
          'Traditional F1 hospitality often centres on a formal dining room, corporate hosting and a more reserved atmosphere. F1 party hospitality is more social, more energetic and more suited to guests who want the weekend to continue after the racing.',
          'It is still premium, but it is not stiff. The point is to watch the race properly and enjoy the event as a full weekend experience.',
        ],
      },
      {
        heading: 'Who Is It For?',
        body: [
          'F1 party hospitality works well for private groups, brands, founders, finance and tech clients, high-net-worth guests and anyone who wants a race weekend with a stronger social edge.',
          'It is particularly useful when the goal is not just to attend the Grand Prix, but to host guests in a way they actually remember.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is F1 party hospitality?',
        a: 'F1 party hospitality is a premium Grand Prix experience with race views, open bar, food, live music and after-party energy, designed to feel more social than traditional corporate hospitality.',
      },
      {
        q: 'Is F1 party hospitality still premium?',
        a: 'Yes. It keeps the premium service, views and hosting standards of Grand Prix hospitality, but adds a stronger social atmosphere, DJs and after-party moments.',
      },
      {
        q: 'Which races does Velocity Terrace cover?',
        a: 'Velocity Terrace focuses on Singapore, Abu Dhabi and Monaco 2027, with Monaco available as Saturday-only, Sunday-only or full 2-day packages.',
      },
    ],
  },
  {
    slug: 'monaco-grand-prix-hospitality-2027',
    title: 'Monaco Grand Prix Hospitality 2027: Saturday, Sunday and 2-Day Packages',
    description:
      'A guide to Velocity Terrace Monaco Grand Prix 2027 hospitality packages, including Saturday-only, Sunday-only and full 2-day options.',
    category: 'Monaco 2027',
    datePublished: '2026-06-19',
    dateModified: '2026-06-19',
    readingTime: '6 min read',
    image: '/monaco/page4-img15.jpg',
    keywords: [
      'Monaco Grand Prix hospitality 2027',
      'Monaco GP 2027 hospitality',
      'Monaco F1 VIP terrace',
      'Monaco Grand Prix party hospitality',
    ],
    intro:
      'Velocity Terrace Monaco Grand Prix 2027 is available to enquire for now, with Saturday-only, Sunday-only and full 2-day hospitality package options.',
    sections: [
      {
        heading: 'What Is Velocity Terrace Monaco 2027?',
        body: [
          'Velocity Terrace Monaco 2027 is a premium party hospitality experience in Monte Carlo, built around front-row race views, open bar, gourmet food, live DJs and after-party access.',
          'It is for guests who want Monaco to feel like a full weekend social experience, not just a seat and lunch.',
        ],
      },
      {
        heading: 'Package Options',
        body: [
          'Guests can enquire for Saturday-only, Sunday-only or the full 2-day Saturday and Sunday package. This makes Monaco more flexible for private clients, smaller groups and corporate hosts with specific schedules.',
          'Saturday is typically best for qualifying energy and a major daytime party feel. Sunday is the headline race day. The 2-day package gives guests the full weekend build-up and finale.',
        ],
      },
      {
        heading: 'Sample Weekend Flow',
        body: [
          'Based on the 2026 Velocity Terrace programme, Saturday included doors opening around 11:00, track sessions from midday, a peak afternoon DJ set and an evening VIP after-party.',
          'Sunday included race day hospitality from late morning, Grand Prix build-up, the Monaco Grand Prix itself and a finale after-party. Final 2027 times will follow the official Monaco Grand Prix timetable.',
        ],
      },
      {
        heading: 'Why Enquire Early?',
        body: [
          'Monaco is one of the most constrained Grand Prix weekends in the world. Premium hospitality inventory is limited and the best options are usually secured early by private groups, brands and returning guests.',
          'Enquiring early gives the team time to understand your group size, preferred day package and hosting goals before recommending the right option.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I book Monaco Grand Prix hospitality for 2027 now?',
        a: 'Yes. Velocity Terrace Monaco 2027 enquiries are open now for Saturday-only, Sunday-only and full 2-day hospitality packages.',
      },
      {
        q: 'Is Sunday available without Saturday?',
        a: 'Yes. Guests can enquire for Sunday-only Monaco 2027 packages, subject to availability.',
      },
      {
        q: 'What does the Monaco package usually include?',
        a: 'Typical inclusions include front-row views, open bar, gourmet food, DJs, entertainment, comfortable terrace areas, screens and after-party access.',
      },
    ],
  },
  {
    slug: 'singapore-grand-prix-hospitality-2026',
    title: 'Singapore Grand Prix Hospitality 2026: Rooftop VIP at Marina Bay',
    description:
      'Explore Velocity Terrace Singapore 2026 at the National Gallery Padang Deck, including rooftop views, open bar, catering and flexible package options.',
    category: 'Singapore 2026',
    datePublished: '2026-06-19',
    dateModified: '2026-06-19',
    readingTime: '5 min read',
    image: '/singapore/VT%20MBS%20view.png',
    keywords: [
      'Singapore Grand Prix hospitality 2026',
      'Singapore GP VIP hospitality',
      'Marina Bay rooftop hospitality',
      'National Gallery Singapore F1 hospitality',
    ],
    intro:
      'Velocity Terrace Singapore 2026 is a premium rooftop hospitality experience at the National Gallery Padang Deck, with Marina Bay views, open bar, food and live entertainment.',
    sections: [
      {
        heading: 'What Makes Singapore Different?',
        body: [
          'Singapore is a night-race city weekend. The atmosphere builds through the day and peaks after dark, with Marina Bay lights, skyline views and a more international hosting crowd.',
          'Velocity Terrace Singapore is designed as a premium rooftop alternative for guests who want a polished hospitality product outside the standard paddock environment.',
        ],
      },
      {
        heading: 'The Venue',
        body: [
          'The National Gallery Padang Deck gives guests a rare rooftop setting with Marina Bay skyline views and an exclusive 150-guest capacity.',
          'The location also helps with arrival and departure because it sits outside the main road closure zones, making it easier for guests and hosts to manage the weekend.',
        ],
      },
      {
        heading: 'Package Options',
        body: [
          'Singapore is available as a full 3-day Friday to Sunday experience, with 2-day Saturday and Sunday options and selected single-day packages also available.',
          'This flexibility suits corporate hosting, brand activations, private groups and guests who want to build a race weekend around a specific day.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where is Velocity Terrace Singapore located?',
        a: 'Velocity Terrace Singapore is located on the Padang Deck rooftop at the National Gallery Singapore, with Marina Bay skyline views.',
      },
      {
        q: 'Is Singapore available as a 3-day package?',
        a: 'Yes. Singapore 2026 is available as a 3-day Friday to Sunday experience, with 2-day and single-day options also available.',
      },
      {
        q: 'Who is Singapore hospitality best for?',
        a: 'It is well suited to corporate hosts, C-suite guests, finance, tech, lifestyle brands and high-net-worth clients who want a premium social environment.',
      },
    ],
  },
  {
    slug: 'f1-hospitality-brand-activation-sponsorship',
    title: 'F1 Hospitality Brand Activation: How Sponsors Can Own the Weekend',
    description:
      'A guide to F1 hospitality sponsorship and brand activation ideas, from branded bars and VIP lounges to content studios, product launches and client hosting.',
    category: 'Sponsorship Guide',
    datePublished: '2026-06-19',
    dateModified: '2026-06-19',
    readingTime: '7 min read',
    image: '/monaco/page3-img8.jpg',
    keywords: [
      'F1 hospitality sponsorship',
      'Formula 1 brand activation',
      'Grand Prix sponsorship',
      'luxury event sponsorship',
      'VIP hospitality activation',
    ],
    intro:
      'The strongest F1 hospitality sponsorships turn a brand into part of the guest experience, using VIP hosting, content, product moments and relationship-building rather than passive logo placement.',
    sections: [
      {
        heading: 'The Short Answer',
        body: [
          'F1 hospitality brand activation is the process of turning sponsorship rights into memorable guest experiences. A brand can own a bar, lounge, after-party, content studio, product launch, gifting moment or VIP guest journey.',
          'For premium hospitality, the goal is not simply visibility. The goal is to create relationship capital, cultural credibility, content and measurable commercial value.',
        ],
      },
      {
        heading: 'What Sponsors Can Activate',
        body: [
          'Good activations include branded bars, champagne programmes, DJ booth integrations, private lounges, photo moments, content studios, wellness pit-stops, product displays, creator hosting and invitation-only dinners.',
          'The best idea depends on the sponsor’s objective. Lead generation needs a different journey from luxury brand storytelling. Client retention needs different treatment from a product launch.',
        ],
      },
      {
        heading: 'Why Hospitality Works For B2B And Luxury Brands',
        body: [
          'F1 hospitality puts a brand in a setting where guests are emotionally engaged, socially open and often already in a high-value business or lifestyle mindset.',
          'That makes it especially powerful for finance, technology, luxury, travel, automotive, drinks, fashion, watches, beauty, concierge and premium lifestyle brands.',
        ],
      },
      {
        heading: 'How To Measure It',
        body: [
          'A sponsorship should have a job before the weekend starts. Common metrics include hosted guests, qualified introductions, content assets, QR engagement, meetings booked, post-event pipeline and social reach.',
          'Brands should also plan enough activation budget to bring the partnership to life. Rights alone rarely create impact without a strong guest experience and follow-up plan.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is F1 hospitality brand activation?',
        a: 'F1 hospitality brand activation is when a sponsor creates an experience inside a Grand Prix hospitality environment, such as a branded bar, lounge, after-party, content studio or VIP hosting programme.',
      },
      {
        q: 'What types of brands suit F1 hospitality sponsorship?',
        a: 'Finance, technology, luxury, travel, automotive, drinks, fashion, watches, beauty, concierge and premium lifestyle brands can all suit F1 hospitality sponsorship if the activation matches the audience.',
      },
      {
        q: 'Can brands partner with Velocity Terrace?',
        a: 'Yes. Velocity Terrace is open to sponsorship and brand activation conversations across its race-weekend events, from small targeted moments to larger presenting partnerships.',
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function blogPostUrl(slug: string): string {
  return absoluteUrl(`/blog/${slug}`)
}
