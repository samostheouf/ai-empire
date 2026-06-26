import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Comparaison — NeuraAPI vs Alternatives',
  description: 'Comparez NeuraAPI aux alternatives : OpenAI, WordPress, développeurs freelance. Analyse des coûts, délais et fonctionnalités.',
  path: '/compare',
  keywords: ['comparaison neuraapi', 'neuraapi vs openai', 'comparatif api ia', 'alternative neuraapi'],
})

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
