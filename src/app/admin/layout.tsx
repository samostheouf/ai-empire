import type { Metadata } from 'next'
import AdminLayoutClient from '@/components/AdminLayoutClient'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const dict = translations as unknown as Record<string, string>

  return {
    title: {
      default: dict['adminLayoutTitle'] || 'Administration — NeuraAPI',
      template: dict['adminLayoutTemplate'] || '%s | Admin NeuraAPI',
    },
    description: dict['adminLayoutDescription'] || "NeuraAPI administration panel. Manage users, orders, templates and analytics.",
    robots: { index: false },
  }
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
