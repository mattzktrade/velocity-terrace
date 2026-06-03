import type { MetadataRoute } from 'next'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/seo/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Velocity Terrace',
    description: SITE_TAGLINE,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
