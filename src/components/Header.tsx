'use client'

import Link from 'next/link'
import { useState, useEffect, memo } from 'react'
import { Sparkles, LayoutDashboard, Menu, X } from 'lucide-react'
import { useI18n } from '@/i18n'
import LanguageSwitcher from './LanguageSwitcher'
import { usePathname } from 'next/navigation'

const Header = memo(function HeaderInner() {
  const { t } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { href: '/templates', label: t('navTemplates') },
    { href: '/pricing', label: t('navPricing') },
    { href: '/docs', label: t('navDocs') },
    { href: '/guide', label: t('navGuide') },
    { href: '/blog', label: t('navBlog') },
    { href: '/dashboard', label: t('navDashboard'), icon: true },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-indigo-950/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-indigo-500/5'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-indigo-400 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 blur-md bg-indigo-500/30 group-hover:bg-indigo-500/50 transition-colors" />
            </div>
            <span className="text-xl font-bold text-white">NeuraAPI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label={t('headerNavigation')}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm transition-colors rounded-lg flex items-center gap-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-indigo-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.icon && <LayoutDashboard className="w-4 h-4" />}
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  )}
                </Link>
              )
            })}
            <div className="ml-2 pl-2 border-l border-white/10">
              <Link
                href="/docs"
                className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20"
              >
                {t('navGetApiKey')}
              </Link>
            </div>
            <LanguageSwitcher />
          </nav>

          <button
            className="md:hidden p-2 text-indigo-200 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t('headerMenuClose') : t('headerMenuOpen')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-indigo-950/95 backdrop-blur-xl border-l border-white/10 shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-lg font-bold text-white">{t('headerNavigation')}</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label={t('headerMenuClose')}
                className="p-2 text-indigo-200 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
              <nav className="px-3 py-4 space-y-1" aria-label={t('headerNavigation')}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all ${
                      isActive
                        ? 'bg-indigo-600/20 text-white border border-indigo-500/30'
                        : 'text-indigo-200 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.icon && <LayoutDashboard className="w-4 h-4" />}
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2">
                <Link
                  href="/docs"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500 transition-all"
                >
                  {t('navGetApiKey')}
                </Link>
              </div>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
});

export default Header;
