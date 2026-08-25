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
      'fr-FR': 'https://ai-empire-steel.vercel.app/contact',
      'en-US': 'https://ai-empire-steel.vercel.app/en/contact',
      'es-ES': 'https://ai-empire-steel.vercel.app/es/contact',
      'de-DE': 'https://ai-empire-steel.vercel.app/de/contact',
      'it-IT': 'https://ai-empire-steel.vercel.app/it/contact',
      'pt-BR': 'https://ai-empire-steel.vercel.app/pt/contact',
      'ja-JP': 'https://ai-empire-steel.vercel.app/ja/contact',
      'ko-KR': 'https://ai-empire-steel.vercel.app/ko/contact',
      'zh-CN': 'https://ai-empire-steel.vercel.app/zh/contact',
      'ar-SA': 'https://ai-empire-steel.vercel.app/ar/contact',
      'x-default': 'https://ai-empire-steel.vercel.app/contact',
    },
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
