import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Statut du Système — NeuraAPI',
  description: "Vérifiez le statut en temps réel des services NeuraAPI. Uptime, disponibilité et maintenance.",
  keywords: ['statut NeuraAPI', 'uptime', 'disponibilité', 'maintenance'],
  openGraph: {
    title: 'Statut NeuraAPI',
    description: "Vérifiez la disponibilité des services NeuraAPI.",
    url: 'https://ai-empire-steel.vercel.app/status',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Statut+NeuraAPI&subtitle=Disponibilité+des+services', width: 1200, height: 630, alt: 'Statut NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Statut NeuraAPI', description: "Disponibilité des services." },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/status' },
}

export default function StatusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
