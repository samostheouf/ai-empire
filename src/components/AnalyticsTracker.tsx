'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView, initScrollTracking, sendTimeOnPage } from '@/lib/analytics'

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    trackPageView()
    const cleanup = initScrollTracking()
    return () => {
      sendTimeOnPage()
      cleanup?.()
    }
  }, [pathname])

  useEffect(() => {
    const handleBeforeUnload = () => sendTimeOnPage()
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  return null
}
