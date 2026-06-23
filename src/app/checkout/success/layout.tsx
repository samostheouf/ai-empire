import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paiement Réussi — NeuraAPI',
  description: 'Votre paiement a été confirmé. Téléchargez votre template NeuraAPI et commencez à construire.',
  openGraph: {
    title: 'Paiement Réussi — NeuraAPI',
    description: 'Votre achat NeuraAPI a été confirmé. Merci !',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/og-image.svg', width: 1200, height: 630, alt: 'Paiement Réussi' }],
  },
  twitter: { card: 'summary_large_image', title: 'Paiement Réussi', description: 'Votre achat NeuraAPI a été confirmé.' },
  robots: { index: false },
}

export default function CheckoutSuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
