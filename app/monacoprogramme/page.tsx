import { MonacoProgrammeClient } from './monaco-programme-client'
import { monacoProgrammeMetadata } from '@/lib/seo/metadata'

export const metadata = monacoProgrammeMetadata()

export default function MonacoProgrammePage() {
  return <MonacoProgrammeClient />
}
