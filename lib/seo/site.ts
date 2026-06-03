/** Canonical site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. https://velocity-terrace.com) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://velocity-terrace.com'

export const SITE_NAME = 'Velocity Terrace'

export const SITE_TAGLINE = 'Premium F1 party hospitality at Monaco, Singapore & Abu Dhabi'

export const DEFAULT_OG_IMAGE = '/monaco/page4-img15.jpg'

export const CONTACT_EMAIL = 'info@velocity-terrace.com'

/** Optional social profile URLs for Organization schema (comma-separated in env) */
export function getSocialProfileUrls(): string[] {
  const raw = process.env.NEXT_PUBLIC_SOCIAL_PROFILE_URLS
  if (!raw) return []
  return raw.split(',').map((u) => u.trim()).filter(Boolean)
}

export const RACE_SLUGS = ['monaco', 'singapore', 'abu-dhabi'] as const

/** Race landing pages that are publicly available (abu-dhabi hidden until launch) */
export const PUBLISHED_RACE_PAGES = ['monaco', 'singapore'] as const

export type RaceSlug = (typeof RACE_SLUGS)[number]

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
