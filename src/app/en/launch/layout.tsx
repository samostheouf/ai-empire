import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'NeuraAPI Launch — AI APIs & Premium Templates',
  description: 'Discover NeuraAPI at launch. AI APIs, premium Next.js templates, TypeScript SDK. Launch offer: 30% off the Pro plan.',
  path: '/en/launch',
  locale: 'en_US',
  keywords: ['launch', 'NeuraAPI', 'AI API', 'premium templates', 'Next.js', 'launch offer', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
