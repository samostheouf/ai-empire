'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView, initScrollTracking, sendTimeOnPage } from '@/lib/analytics'

const COOKIE_CONSENT_KEY = 'neuraapi_cookie_consent'

/**
 * RGPD / ePrivacy compliance: localStorage-based tracking (analytics, scroll depth,
 * time-on-page, visitor fingerprint) is only started AFTER the visitor has explicitly
 * accepted the "analytics" cookie category in the CookieConsent banner.
 * Without consent, no tracking event is stored or sent.
 */
function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return false
    const prefs = JSON.parse(raw) as { analytics?: boolean } | null
    return !!(prefs && prefs.analytics === true)
  } catch {
    return false
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!hasAnalyticsConsent()) return
    trackPageView()
    const cleanup = initScrollTracking()
    return () => {
      sendTimeOnPage()
      cleanup?.()
    }
  }, [pathname])

  useEffect(() => {
    if (!hasAnalyticsConsent()) return
    const handleBeforeUnload = () => sendTimeOnPage()
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  return null
}
