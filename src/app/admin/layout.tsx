import type { Metadata } from 'next'
import AdminLayoutClient from '@/components/AdminLayoutClient'

export const metadata: Metadata = {
  title: {
    default: 'Administration — NeuraAPI',
    template: '%s | Admin NeuraAPI',
  },
  description: "Panneau d'administration NeuraAPI. Gestion des utilisateurs, commandes, templates et analytics.",
  robots: { index: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
