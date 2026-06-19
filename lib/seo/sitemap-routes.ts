import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '../blog-posts'
import { absoluteUrl, PUBLISHED_RACE_PAGES } from './site'

export type SitemapEntry = MetadataRoute.Sitemap[number]

/** All indexable URLs — single source for sitemap.xml */
export function getSitemapEntries(): SitemapEntry[] {
  const lastModified = new Date()

  const entries: SitemapEntry[] = [
    { url: absoluteUrl('/'), lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/about'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/sponsorship'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/blog'), lastModified, changeFrequency: 'weekly', priority: 0.85 },
  ]

  for (const slug of PUBLISHED_RACE_PAGES) {
    entries.push({
      url: absoluteUrl(`/races/${slug}`),
      lastModified,
      changeFrequency: 'weekly',
      priority: slug === 'monaco' ? 0.95 : 0.9,
    })
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.dateModified),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  return entries
}
