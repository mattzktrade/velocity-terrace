import type { MetadataRoute } from 'next'
import { absoluteUrl, PUBLISHED_RACE_PAGES } from './site'

export type SitemapEntry = MetadataRoute.Sitemap[number]

/** All indexable URLs — single source for sitemap.xml */
export function getSitemapEntries(): SitemapEntry[] {
  const lastModified = new Date()

  const entries: SitemapEntry[] = [
    { url: absoluteUrl('/'), lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/monacoprogramme'), lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: absoluteUrl('/monacoprogramme/menu'), lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: absoluteUrl('/monacoprogramme/drinks'), lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: absoluteUrl('/monacoprogramme/alec'), lastModified, changeFrequency: 'monthly', priority: 0.75 },
  ]

  for (const slug of PUBLISHED_RACE_PAGES) {
    if (slug === 'monaco') continue
    entries.push({
      url: absoluteUrl(`/races/${slug}`),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  }

  return entries
}
