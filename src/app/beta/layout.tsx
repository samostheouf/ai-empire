import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Beta — Accès Anticipé NeuraAPI',
  description: 'Rejoignez la bêta de NeuraAPI et obtenez un accès anticipé à nos APIs IA et templates Next.js premium.',
  path: '/beta',
  keywords: ['neuraapi beta', 'accès anticipé', 'early access neuraapi', 'bêta api ia'],
})

export default function BetaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
