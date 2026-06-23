import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — NeuraAPI',
  description: "Contactez l'équipe NeuraAPI. Support technique, questions commerciales, partenariats. Nous vous répondrons sous 24h.",
  keywords: ['contact NeuraAPI', 'support technique', 'questions commerciales', 'partenariats'],
  openGraph: {
    title: 'Contactez NeuraAPI',
    description: "Support technique, questions commerciales, partenariats.",
    url: 'https://ai-empire-steel.vercel.app/contact',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Contact+NeuraAPI&subtitle=Support+technique+et+partenariats', width: 1200, height: 630, alt: 'Contact NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Contact NeuraAPI', description: "Support technique et questions commerciales." },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/contact',
    languages: {
      'fr-FR': '/contact',
      'en-US': '/en/contact',
      'es-ES': '/es/contact',
      'de-DE': '/de/contact',
      'it-IT': '/it/contact',
      'pt-BR': '/pt/contact',
      'ja-JP': '/ja/contact',
      'ko-KR': '/ko/contact',
      'zh-CN': '/zh/contact',
      'ar-SA': '/ar/contact',
      'x-default': '/contact',
    },
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
