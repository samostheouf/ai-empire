import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outils Réseaux Sociaux — NeuraAPI',
  description: 'Dashboard de lancement social pour NeuraAPI. Gérez vos publications Twitter, LinkedIn, Reddit et Product Hunt.',
  robots: { index: false },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
