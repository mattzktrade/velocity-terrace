import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { BLOG_POSTS, blogPostUrl, getBlogPost } from '@/lib/blog-posts'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { absoluteUrl, SITE_NAME, SITE_URL } from '@/lib/seo/site'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: post.image,
    keywords: post.keywords,
  })
}

function JsonLdScript({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function BlogPostJsonLd({ slug }: { slug: string }) {
  const post = getBlogPost(slug)
  if (!post) return null

  const pageUrl = blogPostUrl(post.slug)
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      image: absoluteUrl(post.image),
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      inLanguage: 'en-GB',
      keywords: post.keywords,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
        { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
      ],
    },
  ]

  return <JsonLdScript data={data} />
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <>
      <BlogPostJsonLd slug={post.slug} />
      <main className="min-h-screen bg-[#0A0A0A] text-white">
        <section className="relative overflow-hidden px-6 py-8 lg:px-12">
          <div className="absolute inset-0">
            <img src={post.image} alt="" aria-hidden className="h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-[#0A0A0A]/78" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/20 via-[#0A0A0A]/70 to-[#0A0A0A]" />
          </div>

          <SiteHeader className="relative z-10 -mx-6 -mt-8 lg:-mx-12" />

          <div className="relative z-10 mx-auto max-w-4xl py-20 text-center lg:py-28">
            <p className="mb-5 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-[#F90202]">
              {post.category} · {post.readingTime}
            </p>
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl">
              {post.title}
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/75">
              {post.intro}
            </p>
          </div>
        </section>

        <article className="px-6 py-14 lg:px-12 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-6 rounded-2xl border border-white/10 bg-[#111111] p-6">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.25em] text-[#F90202]">
                  Guide by {SITE_NAME}
                </p>
                <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/60">
                  Published {post.datePublished}. Built to answer real search questions clearly for guests comparing F1 hospitality options.
                </p>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F90202]"
                >
                  Enquire <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="space-y-10">
                {post.sections.map((section) => (
                  <section key={section.heading} className="rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8">
                    <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none text-white">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="font-[family-name:var(--font-inter)] leading-relaxed text-white/68">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <section className="mt-12 rounded-2xl border border-white/10 bg-[#080808] p-6 sm:p-8">
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white">
                  Quick answers
                </h2>
                <div className="mt-6 grid gap-4">
                  {post.faqs.map((item) => (
                    <div key={item.q} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                      <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase text-white">
                        {item.q}
                      </h3>
                      <p className="mt-2 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/65">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 rounded-2xl border border-[#F90202]/30 bg-[#1a0808] p-8 text-center">
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white">
                  Want the real thing?
                </h2>
                <p className="mx-auto mt-3 max-w-xl font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/65">
                  Speak to Velocity Terrace about Monaco 2027, Singapore 2026 or Abu Dhabi hospitality for your group.
                </p>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded bg-[#F90202] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#FF1A1A]"
                >
                  Enquire now <ChevronRight className="h-4 w-4" />
                </Link>
              </section>
            </div>
          </div>
        </article>

        <section className="bg-[#080808] px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase text-white">
              Read next
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:border-white/25"
                >
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.25em] text-[#F90202]">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase text-white">
                    {item.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F90202]">
                    Read guide <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}
