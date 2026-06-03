import type { FaqItem } from '@/lib/seo/faqs'

/**
 * Server-rendered FAQ block — always in HTML for crawlers and answer engines,
 * even when the interactive accordion is client-only.
 */
export function CrawlableFaqBlock({
  faqs,
  className = 'sr-only',
}: {
  faqs: FaqItem[]
  className?: string
}) {
  return (
    <section className={className} aria-label="Frequently asked questions">
      <h2>Frequently asked questions</h2>
      <dl>
        {faqs.map((item) => (
          <div key={item.q}>
            <dt>{item.q}</dt>
            <dd>{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
