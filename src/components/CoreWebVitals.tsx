'use client'

import { useEffect } from 'react'

export default function CoreWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const sendMetric = (name: string, value: number, rating: string) => {
      const page = window.location.pathname
      const data = { name, value, rating, page, timestamp: Date.now() }

      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics/web-vitals', JSON.stringify(data))
      } else {
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }).catch(() => {})
      }
    }

    const getRating = (name: string, value: number): string => {
      const thresholds: Record<string, [number, number]> = {
        LCP: [2500, 4000],
        INP: [200, 500],
        CLS: [0.1, 0.25],
        TTFB: [800, 1800],
        FCP: [1800, 3000],
      }
      const [good, poor] = thresholds[name] || [1000, 3000]
      if (value <= good) return 'good'
      if (value <= poor) return 'needs-improvement'
      return 'poor'
    }

    try {
      import('web-vitals').then(({ onLCP, onCLS, onTTFB, onFCP, onINP }) => {
        onLCP((metric) => sendMetric('LCP', metric.value, getRating('LCP', metric.value)))
        onCLS((metric) => sendMetric('CLS', metric.value, getRating('CLS', metric.value)))
        onTTFB((metric) => sendMetric('TTFB', metric.value, getRating('TTFB', metric.value)))
        onFCP((metric) => sendMetric('FCP', metric.value, getRating('FCP', metric.value)))
        onINP((metric) => sendMetric('INP', metric.value, getRating('INP', metric.value)))
      }).catch(() => {/* web-vitals load failure, non-critical */})
    } catch {/* dynamic import failure, non-critical */}
  }, [])

  return null
}
