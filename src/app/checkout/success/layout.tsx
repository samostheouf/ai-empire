import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vérification du paiement — NeuraAPI',
  description: 'Vérifiez le statut de votre paiement NeuraAPI avant de télécharger votre template.',
  openGraph: {
    title: 'Vérification du paiement — NeuraAPI',
    description: 'Le statut de votre achat NeuraAPI est vérifié auprès de Stripe.',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/logo.jpg', width: 400, height: 400, alt: 'Vérification du paiement' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vérification du paiement — NeuraAPI', description: 'Vérifiez le statut de votre achat NeuraAPI.' },
  robots: { index: false },
}

export default function CheckoutSuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
