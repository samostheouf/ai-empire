'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { LayoutDashboard, Users, ShoppingCart, FileCode, Megaphone, Bot, BarChart3, TrendingUp, Menu, X } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const { t: rawT } = useI18n(); const t = rawT as (key: string) => string
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('neura_admin_auth') : null
    if (stored === 'true') {
      setAuthenticated(true)
    }
    setChecking(false)
  }, [])

  const links = [
    { href: '/admin', label: t('adminNavDashboard'), icon: LayoutDashboard },
    { href: '/admin/analytics', label: t('adminNavAnalytics'), icon: BarChart3 },
    { href: '/admin/commerce', label: t('adminNavCommerce'), icon: TrendingUp },
    { href: '/admin/users', label: t('adminNavUsers'), icon: Users },
    { href: '/admin/orders', label: t('adminNavOrders'), icon: ShoppingCart },
    { href: '/admin/templates', label: t('adminNavTemplates'), icon: FileCode },
    { href: '/admin/marketing', label: t('adminNavMarketing'), icon: Megaphone },
    { href: '/admin/agents', label: t('adminNavAgents'), icon: Bot },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password) {
      localStorage.setItem('neura_admin_auth', 'true')
      setAuthenticated(true)
    } else {
      setError(t('adminPasswordRequired'))
    }
  }

  if (checking) return null

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-xl font-bold text-center mb-6">{t('adminTitle')}</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('adminPasswordPlaceholder')}
              aria-label={t('adminPasswordPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
              type="submit"
              aria-label={t('adminLoginAria')}
              className="w-full bg-indigo-600 text-white rounded-lg py-3 font-semibold hover:bg-indigo-700 transition-colors"
            >
              {t('adminAccess')}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-950 text-white rounded-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? t('adminCloseMenu') : t('adminOpenMenu')}
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-indigo-950 text-white flex flex-col transform transition-transform duration-200 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-indigo-800">
          <h1 className="text-xl font-bold tracking-tight">NeuraAPI</h1>
          <p className="text-indigo-300 text-sm mt-1">{t('adminTitle')}</p>
        </div>
        <nav className="flex-1 p-4 space-y-1" aria-label={t('adminMenuAria')}>
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-indigo-200 hover:bg-indigo-800 hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-indigo-800">
          <Link href="/" className="text-indigo-300 text-sm hover:text-white transition-colors">
            {t('adminBackToSite')}
          </Link>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <main className="flex-1 bg-gray-50 p-4 sm:p-8 overflow-auto lg:ml-0">{children}</main>
    </div>
  )
}
