import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Lancio NeuraAPI — API AI e Template Premium',
  description: 'Scopri NeuraAPI al suo lancio. API AI, template premium Next.js, SDK TypeScript. Offerta di lancio: -30% sul piano Pro.',
  path: '/it/launch',
  locale: 'it_IT',
  keywords: ['lancio', 'NeuraAPI', 'API AI', 'template premium', 'Next.js', 'offerta lancio', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
