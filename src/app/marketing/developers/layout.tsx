import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA pour Développeurs — NeuraAPI',
  description: 'APIs IA puissantes pour développeurs. SDK TypeScript, documentation complète, intégration en 3 lignes de code.',
  openGraph: {
    title: 'IA pour Développeurs — NeuraAPI',
    description: 'APIs IA avec SDK TypeScript. Intégrez l\'IA en 3 lignes.',
    url: 'https://ai-empire-steel.vercel.app/marketing/developers',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/og-image.svg', width: 1200, height: 630, alt: 'IA pour Développeurs — NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'IA pour Développeurs', description: 'SDK TypeScript, intégration rapide.' },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/marketing/developers' },
}

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
