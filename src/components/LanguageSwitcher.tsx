'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'
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
        className="flex items-center gap-1.5 rounded-lg border border-indigo-700/50 bg-indigo-900/50 px-3 py-1.5 text-sm text-indigo-200 hover:bg-indigo-800/50 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{localeFlags[locale]} {locale.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 w-48 rounded-xl border border-indigo-800/50 bg-indigo-950 shadow-2xl overflow-hidden" role="listbox" aria-label="Langues disponibles">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc)
                setOpen(false)
              }}
              role="option"
              aria-selected={loc === locale}
              className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                loc === locale
                  ? 'bg-indigo-600/30 text-white'
                  : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'
              }`}
            >
              <span className="text-base">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
