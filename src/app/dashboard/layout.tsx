import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mon Espace — NeuraAPI',
  description: 'Gérez votre compte NeuraAPI. Clé API, crédits, commandes et abonnement.',
  robots: { index: false },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
