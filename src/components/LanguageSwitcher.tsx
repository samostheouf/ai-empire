'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useI18n } from '@/i18n'
import { locales, localeNames, localeFlags } from '@/i18n/config'

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-indigo-200 hover:bg-white/10 hover:text-white transition-all duration-200 active:scale-95"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{localeFlags[locale]} {locale.toUpperCase()}</span>
        <span className="sm:hidden">{localeFlags[locale]}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`absolute right-0 top-full mt-2 z-50 w-52 rounded-xl border border-white/10 bg-indigo-950/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-200 origin-top ${
        open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`} role="listbox" aria-label="Langues disponibles">
        {locales.map((loc, i) => (
          <button
            key={loc}
            onClick={() => {
              setLocale(loc)
              setOpen(false)
            }}
            role="option"
            aria-selected={loc === locale}
            className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150 ${
              loc === locale
                ? 'bg-indigo-600/30 text-white'
                : 'text-indigo-200 hover:bg-white/5 hover:text-white active:bg-white/10'
            }`}
          >
            <span className="text-base">{localeFlags[loc]}</span>
            <span>{localeNames[loc]}</span>
            {loc === locale && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
