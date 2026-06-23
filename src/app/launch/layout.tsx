import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Lancement NeuraAPI — APIs IA & Templates Premium',
  description: "Découvrez NeuraAPI lors de notre lancement. APIs IA, templates Next.js premium, SDK TypeScript. Offre de lancement -30% sur le plan Pro.",
  path: '/launch',
  keywords: ['lancement', 'NeuraAPI', 'API ia', 'templates premium', 'Next.js', 'offre lancement', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
