import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide Pas à Pas — NeuraAPI',
  description: "Maîtrisez NeuraAPI de A à Z. Guide complet pour créer votre compte, obtenir votre clé API, utiliser nos endpoints et acheter des templates.",
  keywords: ['guide NeuraAPI', 'tutoriel API ia', 'getting started', 'clé API', 'développeur web'],
  openGraph: {
    title: 'Guide NeuraAPI — Pas à Pas',
    description: "Tutoriel complet pour démarrer avec NeuraAPI.",
    url: 'https://ai-empire-steel.vercel.app/guide',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Guide+NeuraAPI&subtitle=Tutoriel+complet+pas+à+pas', width: 1200, height: 630, alt: 'Guide NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Guide NeuraAPI', description: "Tutoriel complet pas à pas." },
  // Pas de variante linguistique : les routes /xx/* de ces pages sont en 404.
  // Un hreflang vers une 404 est lu comme du spam par Google et penalise le
  // domaine entier. Seul le canonical est declare.
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/guide',
  },
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
