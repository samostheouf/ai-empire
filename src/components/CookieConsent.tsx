'use client'

import { useState, useEffect } from 'react'
import { Cookie } from 'lucide-react'
import { useI18n } from '@/i18n'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

const COOKIE_KEY = 'neuraapi_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  })
  const [showDetails, setShowDetails] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs))
    setVisible(false)
  }

  const acceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true, functional: true })
  }

  const rejectAll = () => {
    savePreferences({ essential: true, analytics: false, marketing: false, functional: false })
  }

  const saveCustom = () => {
    savePreferences(preferences)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-indigo-800/50 bg-indigo-950 shadow-2xl shadow-indigo-500/10">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-8 w-8 flex-shrink-0 text-indigo-400" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{t('cookieTitle')}</h3>
              <p className="mt-2 text-sm text-indigo-200">
                {t('cookieDesc')}
              </p>

              {/* Details toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                aria-expanded={showDetails}
                aria-label="Personnaliser les cookies"
                className="mt-3 text-sm text-indigo-400 hover:text-white transition-colors underline"
              >
                {showDetails ? t('cookieHideDetails') : t('cookieCustomize')}
              </button>

              {/* Cookie categories */}
              {showDetails && (
                <div className="mt-4 space-y-4 rounded-xl bg-indigo-900/50 p-4">
                  {/* Essential */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white text-sm">{t('cookieEssential')}</p>
                      <p className="text-xs text-indigo-300">{t('cookieEssentialDesc')}</p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={true}
                      aria-label={t('cookieEssential')}
                      disabled
                      className="flex h-6 w-11 items-center rounded-full bg-indigo-600 px-1 cursor-not-allowed opacity-70"
                    >
                      <div className="h-4 w-4 rounded-full bg-white shadow translate-x-5" />
                    </button>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white text-sm">{t('cookieAnalytics')}</p>
                      <p className="text-xs text-indigo-300">{t('cookieAnalyticsDesc')}</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      role="switch"
                      aria-checked={preferences.analytics}
                      aria-label={t('cookieAnalytics')}
                      className={`flex h-6 w-11 items-center rounded-full px-1 transition-colors ${
                        preferences.analytics ? 'bg-indigo-600' : 'bg-indigo-800'
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${
                          preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white text-sm">{t('cookieMarketing')}</p>
                      <p className="text-xs text-indigo-300">{t('cookieMarketingDesc')}</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      role="switch"
                      aria-checked={preferences.marketing}
                      aria-label={t('cookieMarketing')}
                      className={`flex h-6 w-11 items-center rounded-full px-1 transition-colors ${
                        preferences.marketing ? 'bg-indigo-600' : 'bg-indigo-800'
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${
                          preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Functional */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white text-sm">{t('cookieFunctional')}</p>
                      <p className="text-xs text-indigo-300">{t('cookieFunctionalDesc')}</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, functional: !p.functional }))}
                      role="switch"
                      aria-checked={preferences.functional}
                      aria-label={t('cookieFunctional')}
                      className={`flex h-6 w-11 items-center rounded-full px-1 transition-colors ${
                        preferences.functional ? 'bg-indigo-600' : 'bg-indigo-800'
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${
                          preferences.functional ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {showDetails ? (
              <button
                onClick={saveCustom}
                aria-label="Enregistrer les préférences"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
              >
                {t('cookieSave')}
              </button>
            ) : null}
            <button
              onClick={acceptAll}
              aria-label="Accepter tous les cookies"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
            >
              {t('cookieAcceptAll')}
            </button>
            <button
              onClick={rejectAll}
              aria-label="Refuser les cookies optionnels"
              className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-200 hover:bg-indigo-900/50 transition-colors"
            >
              {t('cookieRejectAll')}
            </button>
            <a
              href="/politique-cookies"
              className="rounded-lg border border-indigo-800 px-4 py-2 text-sm font-medium text-indigo-300 hover:bg-indigo-900/50 transition-colors"
            >
              {t('cookieLearnMore')}
            </a>
            <a
              href="/politique-confidentialite"
              className="rounded-lg border border-indigo-800 px-4 py-2 text-sm font-medium text-indigo-300 hover:bg-indigo-900/50 transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-indigo-500">Dernière mise à jour : 24 juin 2026</p>
        </div>
      </div>
    </div>
  )
}
