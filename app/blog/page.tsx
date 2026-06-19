import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { absoluteUrl, SITE_NAME, SITE_URL } from '@/lib/seo/site'

export const metadata = buildPageMetadata({
  title: 'F1 Hospitality Guides',
  description:
    'Read Velocity Terrace guides to F1 party hospitality, Monaco Grand Prix hospitality 2027 and Singapore Grand Prix hospitality 2026.',
  path: '/blog',
  ogImage: '/monaco/page4-img15.jpg',
  keywords: ['F1 hospitality guides', 'F1 party hospitality blog', 'Grand Prix hospitality guide'],
})

function JsonLdScript({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function BlogIndexJsonLd() {
  const pageUrl = absoluteUrl('/blog')
  return (
    <JsonLdScript
      data={[
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          url: pageUrl,
          name: 'F1 Hospitality Guides',
          description: 'Velocity Terrace guides to Formula 1 party hospitality and Grand Prix VIP hosting.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en-GB',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Velocity Terrace F1 hospitality guides',
          itemListElement: BLOG_POSTS.map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: post.title,
            url: absoluteUrl(`/blog/${post.slug}`),
          })),
        },
      ]}
    />
  )
}

export default function BlogPage() {
  return (
    <>
      <BlogIndexJsonLd />
      <main className="min-h-screen bg-[#0A0A0A] text-white">
        <section className="relative overflow-hidden px-6 py-8 lg:px-12">
          <div className="absolute inset-0">
            <img
              src="/monaco/page4-img14.jpg"
              alt=""
              aria-hidden
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/20 to-[#0A0A0A]" />
          </div>

          <SiteHeader className="relative z-10 -mx-6 -mt-8 lg:-mx-12" />

          <div className="relative z-10 mx-auto max-w-5xl py-24 text-center lg:py-32">
            <p className="mb-5 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.35em] text-[#F90202]">
              F1 hospitality guides
            </p>
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-[104px]">
              Learn the weekend.<br />
              <span className="text-[#F90202]">Own the search.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/70">
              Practical guides to F1 party hospitality, Monaco Grand Prix 2027 packages and Singapore Grand Prix rooftop hosting from {SITE_NAME}.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition hover:-translate-y-1 hover:border-white/25"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.25em] text-[#F90202]">
                    {post.category} · {post.readingTime}
                  </p>
                  <h2 className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase leading-none text-white">
                    {post.title}
                  </h2>
                  <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                    {post.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F90202]">
                    Read guide <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}
