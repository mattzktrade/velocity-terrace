import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo/site'

/** Allow major AI crawlers — improves visibility in ChatGPT, Perplexity, Claude, etc. */
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'cohere-ai',
  'Bytespider',
  'CCBot',
] as const

export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl('/sitemap.xml')
  const host = absoluteUrl('/')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'] as string[],
      })),
    ],
    sitemap,
    host,
  }
}
