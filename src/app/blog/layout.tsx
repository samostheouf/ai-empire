import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Blog — Conseils IA, Templates & Développement | NeuraAPI',
    template: '%s | Blog NeuraAPI',
  },
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
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/blog',
    languages: {
      'fr-FR': '/blog',
      'en-US': '/en/blog',
      'es-ES': '/es/blog',
      'de-DE': '/de/blog',
      'it-IT': '/it/blog',
      'pt-BR': '/pt/blog',
      'ja-JP': '/ja/blog',
      'ko-KR': '/ko/blog',
      'zh-CN': '/zh/blog',
      'ar-SA': '/ar/blog',
      'x-default': '/blog',
    },
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
