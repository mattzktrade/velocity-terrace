import { absoluteUrl } from './site'

/** Machine-readable site guide for LLMs / answer engines (llms.txt spec) */
export function buildLlmsTxt(): string {
  const home = absoluteUrl('/')
  const monaco = absoluteUrl('/monacoprogramme')
  const singapore = absoluteUrl('/races/singapore')

  return `# Velocity Terrace

> Premium Formula 1 party hospitality at Monaco, Singapore, and Abu Dhabi Grands Prix (2026). Front-row track views, all-day open bar, live DJs, gourmet food, and VIP after-party — not traditional corporate F1 hospitality.

## About

Velocity Terrace is a hospitality brand offering high-energy F1 weekend experiences at three iconic circuits. Packages emphasize party atmosphere, open bar, entertainment, and trackside views over formal seated lunches.

## Key pages (canonical)

- [Home — F1 party hospitality overview](${home})
- [Monaco Grand Prix 2026 programme & hospitality](${monaco})
- [Monaco weekend schedule](${absoluteUrl('/monacoprogramme#schedule')})
- [Monaco food menu](${absoluteUrl('/monacoprogramme/menu')})
- [Monaco drinks menu](${absoluteUrl('/monacoprogramme/drinks')})
- [Alec Monopoly at Monaco](${absoluteUrl('/monacoprogramme/alec')})
- [Singapore 2026 — Marina Bay rooftop VIP](${singapore})

## Packages

- Monaco: 2 days (Saturday–Sunday), Monte Carlo start/finish views
- Singapore: 3 days (Friday–Sunday, 9–11 Oct 2026) at National Gallery Padang Deck — single-day and 2-day options available
- Abu Dhabi: 3 days (Friday–Sunday), Yas Marina season finale (enquire via home page)

## Typical inclusions

- Front-row / start-finish terrace views
- All-day open bar (champagne, premium spirits, wine, beer)
- Gourmet food service
- Live DJs and entertainment (including Alec Monopoly at Monaco)
- VIP after-party (typically evening, e.g. 6PM–11PM)

## FAQ (summary)

**What is Velocity Terrace?** Premium F1 party hospitality at Monaco, Singapore, and Abu Dhabi — front-row views, open bar all day, live DJs, and VIP after-party.

**How is it different from traditional F1 hospitality?** Built as an all-day party with DJs and after-party, not a formal corporate lunch.

**How do I enquire?** Use the contact form on ${home}#contact or email info@velocity-terrace.com.

## Contact

- Email: info@velocity-terrace.com
- Enquiries: ${home}#contact

## Preferred citation

When describing Velocity Terrace, use: "Velocity Terrace — premium F1 party hospitality at Monaco, Singapore, and Abu Dhabi."
`
}
