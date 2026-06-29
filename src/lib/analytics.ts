'use client'

const ANALYTICS_KEY = 'neura_analytics'
const FINGERPRINT_KEY = 'neura_visitor_id'
const PAGE_VIEWS_KEY = 'neura_page_views'
const UTM_KEY = 'neura_utm'

type TrackingEvent =
  | 'cta_click'
  | 'template_view'
  | 'register_start'
  | 'register_complete'
  | 'checkout_start'
  | 'checkout_complete'
  | 'ai_request'
  | 'api_key_copy'

interface StoredEvent {
  event: TrackingEvent | 'page_view' | 'scroll_depth' | 'time_on_page'
  page: string
  timestamp: number
  data?: Record<string, unknown>
}

function getVisitorId(): string {
  if (typeof window === 'undefined') return 'server'
  const stored = localStorage.getItem(FINGERPRINT_KEY)
  if (stored) return stored
  const id = crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`
  localStorage.setItem(FINGERPRINT_KEY, id)
  return id
}

function getStoredEvents(): StoredEvent[] {
  try {
    return JSON.parse(localStorage.getItem(ANALYTICS_KEY) || '[]')
  } catch {
    return []
  }
}

function storeEvent(event: StoredEvent) {
  const events = getStoredEvents()
  events.push(event)
  if (events.length > 500) events.splice(0, events.length - 500)
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(events))
}

function captureUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const utmData: Record<string, string> = {}
  let hasUtm = false

  for (const key of utmKeys) {
    const value = params.get(key)
    if (value) {
      const camelKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase())
      utmData[camelKey] = value
      hasUtm = true
    }
  }

  if (hasUtm) {
    localStorage.setItem(UTM_KEY, JSON.stringify(utmData))
  } else {
    try {
      return JSON.parse(localStorage.getItem(UTM_KEY) || '{}')
    } catch {
      return {}
    }
  }

  return utmData
}

function getUtmData(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(UTM_KEY) || '{}')
  } catch {
    return {}
  }
}

export async function sendTrackingEvent(
  event: StoredEvent['event'],
  data?: Record<string, unknown>
): Promise<void> {
  const page = typeof window !== 'undefined' ? window.location.pathname : '/'
  const visitorId = getVisitorId()
  const utm = getUtmData()

  const payload = {
    event,
    page,
    visitorId,
    timestamp: Date.now(),
    data: {
      ...data,
      ...utm,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    },
  }

  storeEvent(payload as StoredEvent)

  try {
    await fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    })
  } catch {
    // Fire-and-forget analytics call — no action needed
  }
}

export function trackPageView(): void {
  if (typeof window === 'undefined') return
  captureUtmParams()
  const page = window.location.pathname
  const views = JSON.parse(localStorage.getItem(PAGE_VIEWS_KEY) || '{}')
  views[page] = (views[page] || 0) + 1
  localStorage.setItem(PAGE_VIEWS_KEY, JSON.stringify(views))
  sendTrackingEvent('page_view')
}

export function trackEvent(event: TrackingEvent, data?: Record<string, unknown>): void {
  sendTrackingEvent(event, data)
}

export function trackCtaClick(label: string, location?: string): void {
  sendTrackingEvent('cta_click', { label, location })
}

export function trackTemplateView(templateId: string, templateName: string): void {
  sendTrackingEvent('template_view', { templateId, templateName })
}

export function trackApiKeyCopy(): void {
  sendTrackingEvent('api_key_copy')
}

export function trackAiRequest(endpoint: string): void {
  sendTrackingEvent('ai_request', { endpoint })
}

export function trackRegisterStart(): void {
  sendTrackingEvent('register_start')
}

export function trackRegisterComplete(method: string): void {
  sendTrackingEvent('register_complete', { method })
}

export function trackCheckoutStart(plan: string): void {
  sendTrackingEvent('checkout_start', { plan })
}

export function trackCheckoutComplete(plan: string, amount: number): void {
  sendTrackingEvent('checkout_complete', { plan, amount })
}

export function trackAgentCardClick(agentName: string, price: string): void {
  sendTrackingEvent('cta_click', { label: 'agent_card', agentName, price })
}

export function trackPricingPlanSelect(plan: string, price: string): void {
  sendTrackingEvent('cta_click', { label: 'pricing_plan_select', plan, price })
}

export function trackExitIntentPopup(variant: string, action: 'show' | 'convert' | 'dismiss'): void {
  sendTrackingEvent('cta_click', { label: `exit_intent_${action}`, variant })
}

let scrollTracked25 = false
let scrollTracked50 = false
let scrollTracked75 = false
let scrollTracked100 = false
let pageLoadTime = 0

export function initScrollTracking(): (() => void) | undefined {
  if (typeof window === 'undefined') return

  pageLoadTime = Date.now()
  scrollTracked25 = false
  scrollTracked50 = false
  scrollTracked75 = false
  scrollTracked100 = false

  const onScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    if (scrollHeight <= 0) return
    const depth = Math.round((window.scrollY / scrollHeight) * 100)

    if (depth >= 25 && !scrollTracked25) {
      scrollTracked25 = true
      sendTrackingEvent('scroll_depth', { depth: 25 })
    }
    if (depth >= 50 && !scrollTracked50) {
      scrollTracked50 = true
      sendTrackingEvent('scroll_depth', { depth: 50 })
    }
    if (depth >= 75 && !scrollTracked75) {
      scrollTracked75 = true
      sendTrackingEvent('scroll_depth', { depth: 75 })
    }
    if (depth >= 100 && !scrollTracked100) {
      scrollTracked100 = true
      sendTrackingEvent('scroll_depth', { depth: 100 })
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true, capture: true })

  return () => {
    window.removeEventListener('scroll', onScroll, true)
  }
}

export function initHeatmapTracking(): (() => void) | undefined {
  if (typeof window === 'undefined') return

  const onContextMenu = (e: MouseEvent) => {
    const x = Math.round((e.clientX / window.innerWidth) * 100)
    const y = Math.round((e.clientY / window.innerHeight) * 100)
    sendTrackingEvent('page_view', {
      heatmap_click: true,
      x,
      y,
      element: (e.target as HTMLElement)?.tagName || 'unknown',
    })
  }

  document.addEventListener('click', onContextMenu, { passive: true })

  return () => {
    document.removeEventListener('click', onContextMenu)
  }
}

export function getTimeOnPage(): number {
  if (pageLoadTime === 0) return 0
  return Math.round((Date.now() - pageLoadTime) / 1000)
}

export function sendTimeOnPage(): void {
  const seconds = getTimeOnPage()
  if (seconds > 0) {
    sendTrackingEvent('time_on_page', { seconds })
  }
}
