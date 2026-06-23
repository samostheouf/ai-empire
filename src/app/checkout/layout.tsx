import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paiement Sécurisé — NeuraAPI',
  description: 'Paiement sécurisé par Stripe pour votre abonnement NeuraAPI.',
  robots: { index: false },
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
