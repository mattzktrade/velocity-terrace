/** Canonical site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. https://velocityterrace.com) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://velocityterrace.com'

export const SITE_NAME = 'Velocity Terrace'

export const SITE_TAGLINE = 'Premium F1 party hospitality at Monaco, Singapore & Abu Dhabi'

export const DEFAULT_OG_IMAGE = '/monaco/page4-img15.jpg'

export const CONTACT_EMAIL = 'info@velocityterrace.com'

export const RACE_SLUGS = ['monaco', 'singapore', 'abu-dhabi'] as const

export type RaceSlug = (typeof RACE_SLUGS)[number]

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
