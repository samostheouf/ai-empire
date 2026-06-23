import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'NeuraAPI Launch — KI-APIs & Premium-Templates',
  description: 'Entdecken Sie NeuraAPI bei unserem Launch. KI-APIs, Premium-Next.js-Templates, TypeScript SDK. Launch-Angebot: -30% auf den Pro-Plan.',
  path: '/de/launch',
  locale: 'de_DE',
  keywords: ['Launch', 'NeuraAPI', 'KI-API', 'Premium-Templates', 'Next.js', 'Launch-Angebot', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
