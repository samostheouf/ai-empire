'use client'

import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: Array<unknown[] | Record<string, unknown>>
  }
}

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export function trackEvent({ action, category, label, value }: AnalyticsEvent): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value,
    })
  }
}

export function trackPageView(url: string): void {
  if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

export function trackPurchase(itemId: string, itemName: string, price: number): void {
  trackEvent({
    action: 'purchase',
    category: 'ecommerce',
    label: itemName,
    value: price,
  })
}

export function trackSignup(method: string): void {
  trackEvent({
    action: 'sign_up',
    category: 'engagement',
    label: method,
  })
}

export function trackApiCall(endpoint: string, success: boolean): void {
  trackEvent({
    action: success ? 'api_call_success' : 'api_call_error',
    category: 'api',
    label: endpoint,
  })
}

export function trackTemplateView(templateId: string, templateName: string): void {
  trackEvent({
    action: 'view_item',
    category: 'ecommerce',
    label: templateName,
  })
}

export function trackAddToCart(itemId: string, itemName: string, price: number): void {
  trackEvent({
    action: 'add_to_cart',
    category: 'ecommerce',
    label: itemName,
    value: price,
  })
}

export function trackConversion(conversionId: string, value?: number): void {
  trackEvent({
    action: 'conversion',
    category: 'goal',
    label: conversionId,
    value,
  })
}

export function trackABTest(testId: string, variant: string): void {
  trackEvent({
    action: 'ab_test',
    category: 'experiment',
    label: `${testId}:${variant}`,
  })
}

export interface ConversionFunnel {
  steps: string[]
  currentStep: number
}

export function trackFunnelStep(funnelId: string, step: number, totalSteps: number): void {
  trackEvent({
    action: 'funnel_step',
    category: 'conversion',
    label: `${funnelId}:${step}/${totalSteps}`,
    value: step,
  })
}

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    trackPageView(pathname)
  }, [pathname])

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (!gaId) return

    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', gaId)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

export interface ABTestConfig {
  testId: string
  variants: string[]
  trafficSplit?: number[]
}

export function useABTest(config: ABTestConfig): string {
  const getVariant = useCallback(() => {
    if (typeof window === 'undefined') return config.variants[0]

    const stored = localStorage.getItem(`ab_test_${config.testId}`)
    if (stored && config.variants.includes(stored)) {
      return stored
    }

    const random = Math.random()
    const split = config.trafficSplit || config.variants.map(() => 1 / config.variants.length)
    let cumulative = 0

    for (let i = 0; i < config.variants.length; i++) {
      cumulative += split[i]
      if (random < cumulative) {
        localStorage.setItem(`ab_test_${config.testId}`, config.variants[i])
        trackABTest(config.testId, config.variants[i])
        return config.variants[i]
      }
    }

    return config.variants[0]
  }, [config])

  return getVariant()
}

export interface FunnelConfig {
  funnelId: string
  steps: string[]
}

export function useConversionFunnel(config: FunnelConfig) {
  const trackStep = useCallback(
    (step: number) => {
      if (step >= 0 && step < config.steps.length) {
        trackFunnelStep(config.funnelId, step, config.steps.length)
        localStorage.setItem(
          `funnel_${config.funnelId}`,
          JSON.stringify({
            currentStep: step,
            timestamp: Date.now(),
          })
        )
      }
    },
    [config]
  )

  const getCurrentStep = useCallback(() => {
    if (typeof window === 'undefined') return 0
    const stored = localStorage.getItem(`funnel_${config.funnelId}`)
    if (stored) {
      try {
        const data = JSON.parse(stored)
        return data.currentStep || 0
      } catch {
        return 0
      }
    }
    return 0
  }, [config])

  const reset = useCallback(() => {
    localStorage.removeItem(`funnel_${config.funnelId}`)
  }, [config])

  return {
    trackStep,
    getCurrentStep,
    reset,
    steps: config.steps,
  }
}
