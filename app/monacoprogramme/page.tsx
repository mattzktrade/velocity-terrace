import { MonacoProgrammeJsonLd } from '@/components/seo/json-ld'
import { monacoProgrammeMetadata } from '@/lib/seo/metadata'
import { MONACO_PROGRAMME_PAGES } from '@/lib/seo/monaco-programme-pages'
import { MonacoProgrammeClient } from './monaco-programme-client'

export const metadata = monacoProgrammeMetadata()

const PAGE = { path: '/monacoprogramme' as const, ...MONACO_PROGRAMME_PAGES['/monacoprogramme'] }

export default function MonacoProgrammePage() {
  return (
    <>
      <MonacoProgrammeJsonLd {...PAGE} />
      <MonacoProgrammeClient />
    </>
  )
}
