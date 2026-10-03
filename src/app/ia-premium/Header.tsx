'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#pricing', label: 'Tarifs' },
  { href: '#temoignages', label: 'Avis' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[#0c0818]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href="#ia-premium" className="flex items-center gap-2 group">
            <span className="text-lg font-serif tracking-wide text-amber-500/90">
              IA Premium
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-wide text-white/50 hover:text-amber-400/80 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#pricing"
              className="hidden sm:inline-flex items-center rounded-sm border border-amber-500/25 bg-amber-500/8 px-5 py-2 text-xs tracking-widest text-amber-400/90 hover:bg-amber-500/15 hover:border-amber-500/40 transition-all duration-300"
            >
              Premiers pas →
            </Link>
            <button
              className="md:hidden p-2 text-white/50 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0c0818]/95 backdrop-blur-md transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0" onClick={() => setMobileOpen(false)} />
        <nav
          className={`relative z-50 flex flex-col gap-1 px-8 py-20 text-lg transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          aria-label="Menu mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/60 hover:text-amber-400/80 transition-colors py-3 border-b border-white/[0.05]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-sm border border-amber-500/25 bg-amber-500/8 px-6 py-3 text-sm tracking-widest text-amber-400/90 hover:bg-amber-500/15 transition-all"
          >
            Premiers pas →
          </Link>
        </nav>
      </div>
    </>
  )
}
