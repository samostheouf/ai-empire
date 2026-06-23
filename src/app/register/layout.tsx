import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Créer un Compte — NeuraAPI',
  description: 'Inscrivez-vous gratuitement sur NeuraAPI. Plan Starter offert avec 100 crédits. Accédez aux APIs IA et templates premium.',
  openGraph: {
    title: 'Créez votre compte NeuraAPI',
    description: 'Inscription gratuite. 100 crédits offerts.',
    url: 'https://ai-empire-steel.vercel.app/register',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/og-image.svg', width: 1200, height: 630, alt: 'Inscription NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Inscription NeuraAPI', description: 'Compte gratuit. 100 crédits offerts.' },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/register' },
  robots: { index: false },
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
