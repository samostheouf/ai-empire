import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Lanzamiento NeuraAPI — APIs de IA y Templates Premium',
  description: 'Descubre NeuraAPI en su lanzamiento. APIs de IA, templates premium de Next.js, SDK TypeScript. Oferta de lanzamiento: -30% en el plan Pro.',
  path: '/es/launch',
  locale: 'es_ES',
  keywords: ['lanzamiento', 'NeuraAPI', 'API IA', 'templates premium', 'Next.js', 'oferta lanzamiento', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
