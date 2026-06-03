import type { MetadataRoute } from 'next'
import { absoluteUrl, RACE_SLUGS } from '@/lib/seo/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/monacoprogramme'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: absoluteUrl('/monacoprogramme/drinks'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/monacoprogramme/menu'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/monacoprogramme/alec'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...RACE_SLUGS.filter((slug) => slug !== 'monaco').map((slug) => ({
      url: absoluteUrl(`/races/${slug}`),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]

  return staticRoutes
}
