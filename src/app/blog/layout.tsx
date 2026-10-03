import type { Metadata } from 'next'

export const metadata: Metadata = {
  // PAS de `title.template` ici : le layout racine declare deja
  // `title.template = '%s | NeuraAPI'`. Un template local se cumule avec lui
  // et produit « ... | Blog NeuraAPI | NeuraAPI ».
  description: "Articles, tutoriels et meilleures pratiques pour développer, automatiser et monétiser vos projets avec l'intelligence artificielle.",
  keywords: ['blog IA', 'tutoriel Next.js', 'développeur web', 'API ia', 'template next.js'],
  openGraph: {
    title: 'Blog NeuraAPI — IA, Templates & Développement',
    description: "Conseils, tutoriels et meilleures pratiques pour vos projets IA.",
    url: 'https://ai-empire-steel.vercel.app/blog',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Blog+NeuraAPI&subtitle=IA,+Templates+%26+Développement', width: 1200, height: 630, alt: 'Blog NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Blog NeuraAPI', description: "Articles et tutoriels sur l'IA et le développement." },
  // Pas de variante linguistique : les routes /xx/* de ces pages sont en 404.
  // Un hreflang vers une 404 est lu comme du spam par Google et penalise le
  // domaine entier. Seul le canonical est declare.
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
