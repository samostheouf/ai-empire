'use client'

import { sendTrackingEvent } from '@/lib/analytics'

const CONVERSION_KEY = 'neura_conversion'
const RECOVERY_KEY = 'neura_recovery_pending'

type ConversionEvent = 'page_view' | 'template_view' | 'checkout_start' | 'checkout_complete'

interface ConversionEntry {
  event: ConversionEvent
  timestamp: number
  page?: string
  data?: Record<string, unknown>
}

function getConversions(): ConversionEntry[] {
  try {
    return JSON.parse(localStorage.getItem(CONVERSION_KEY) || '[]')
  } catch {
    return []
  }
}

function storeConversion(entry: ConversionEntry) {
  const conversions = getConversions()
  conversions.push(entry)
  if (conversions.length > 100) conversions.splice(0, conversions.length - 100)
  localStorage.setItem(CONVERSION_KEY, JSON.stringify(conversions))
}

export function trackPageViewConversion(page: string): void {
  const entry: ConversionEntry = { event: 'page_view', page, timestamp: Date.now() }
  storeConversion(entry)
  sendTrackingEvent('page_view', { page })
}

export function trackTemplateViewConversion(templateId: string, templateName: string): void {
  const entry: ConversionEntry = {
    event: 'template_view',
    timestamp: Date.now(),
    data: { templateId, templateName },
  }
  storeConversion(entry)
  sendTrackingEvent('template_view', { templateId, templateName })
}

export function trackCheckoutStartConversion(templateId: string): void {
  const entry: ConversionEntry = {
    event: 'checkout_start',
    timestamp: Date.now(),
    data: { templateId },
  }
  storeConversion(entry)
  sendTrackingEvent('checkout_start', { templateId })

  localStorage.setItem(RECOVERY_KEY, JSON.stringify({
    templateId,
    startedAt: Date.now(),
    email: null,
  }))

  checkRecoveryEmail()
}

export function trackCheckoutCompleteConversion(templateId: string, amount: number): void {
  const entry: ConversionEntry = {
    event: 'checkout_complete',
    timestamp: Date.now(),
    data: { templateId, amount },
  }
  storeConversion(entry)
  sendTrackingEvent('checkout_complete', { templateId, amount })

  localStorage.removeItem(RECOVERY_KEY)
}

function checkRecoveryEmail() {
  try {
    const pending = JSON.parse(localStorage.getItem(RECOVERY_KEY) || 'null')
    if (!pending) return

    const elapsed = Date.now() - pending.startedAt
    const THIRTY_MINUTES = 30 * 60 * 1000

    if (elapsed >= THIRTY_MINUTES) {
      const conversions = getConversions()
      const completed = conversions.some(
        c => c.event === 'checkout_complete' && c.timestamp > pending.startedAt
      )

      if (!completed) {
        fetch('/api/recovery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            templateId: pending.templateId,
            startedAt: pending.startedAt,
          }),
          keepalive: true,
        }).catch(() => {})
      }

      localStorage.removeItem(RECOVERY_KEY)
    }
  } catch (e) {
    console.error('Recovery check error:', e);
  }
}

export function getConversionStats(): { views: number; templateViews: number; checkouts: number; completions: number; conversionRate: string } {
  const conversions = getConversions()
  const views = conversions.filter(c => c.event === 'page_view').length
  const templateViews = conversions.filter(c => c.event === 'template_view').length
  const checkouts = conversions.filter(c => c.event === 'checkout_start').length
  const completions = conversions.filter(c => c.event === 'checkout_complete').length

  return {
    views,
    templateViews,
    checkouts,
    completions,
    conversionRate: checkouts > 0 ? (completions / checkouts * 100).toFixed(1) : '0',
  }
}
