import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation API — NeuraAPI',
  description: "Documentation complète de l'API NeuraAPI. Authentification, endpoints de génération de texte, SEO, code. SDK TypeScript inclus.",
  keywords: ['documentation API', 'SDK TypeScript', 'API ia', 'guide intégration', 'endpoints IA'],
  openGraph: {
    title: 'Documentation API NeuraAPI',
    description: "Guide complet d'intégration de l'API NeuraAPI.",
    url: 'https://ai-empire-steel.vercel.app/api-docs',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Documentation+API&subtitle=Guide+complet+d%27intégration', width: 1200, height: 630, alt: 'Documentation NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Documentation API NeuraAPI', description: "Guide complet d'intégration." },
  // Pas de variante linguistique : les routes /xx/* de ces pages sont en 404.
  // Un hreflang vers une 404 est lu comme du spam par Google et penalise le
  // domaine entier. Seul le canonical est declare.
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/api-docs',
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
