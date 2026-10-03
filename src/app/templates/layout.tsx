import type { Metadata } from 'next'

export const metadata: Metadata = {
  // PAS de `title.template` ici : le layout racine declare deja
  // `title.template = '%s | NeuraAPI'`. Un template local se cumule avec lui
  // et produit « ... — NeuraAPI | NeuraAPI ». Le titre de la page (genMeta)
  // suffit, avec le suffixe du layout racine.
  description: "Découvrez nos templates premium Next.js + Tailwind CSS. SaaS, e-commerce, blog, portfolio. Code propre, prêt à déployer. À partir de 49€.",
  keywords: ['template next.js', 'templates premium', 'SaaS template', 'Next.js', 'Tailwind CSS', 'templates professionnels'],
  openGraph: {
    title: 'Templates Premium Next.js & Tailwind',
    description: "Templates professionnels Next.js + Tailwind. Code propre, documentation incluse, prêt à déployer.",
    url: 'https://ai-empire-steel.vercel.app/templates',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Templates+Premium+Next.js&subtitle=Code+propre,+prêt+à+déployer', width: 1200, height: 630, alt: 'Templates Premium NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Templates Premium Next.js', description: "Templates professionnels Next.js + Tailwind. Prêt à déployer." },
  // Pas de variante linguistique : les routes /xx/* de ces pages sont en 404.
  // Un hreflang vers une 404 est lu comme du spam par Google et penalise le
  // domaine entier. Seul le canonical est declare.
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/templates',
  },
}

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
