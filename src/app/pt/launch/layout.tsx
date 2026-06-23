import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Lançamento NeuraAPI — APIs de IA e Templates Premium',
  description: 'Descubra NeuraAPI em nosso lançamento. APIs de IA, templates premium Next.js, SDK TypeScript. Oferta de lançamento: -30% no plano Pro.',
  path: '/pt/launch',
  locale: 'pt_BR',
  keywords: ['lançamento', 'NeuraAPI', 'API IA', 'templates premium', 'Next.js', 'oferta lançamento', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
