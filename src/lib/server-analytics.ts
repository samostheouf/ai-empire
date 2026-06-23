import { safeQuery } from '@/lib/db'

export type ServerEvent =
  | 'api_call'
  | 'webhook_complete'
  | 'webhook_error'
  | 'user_register'
  | 'user_login'
  | 'template_download'
  | 'api_key_created'
  | 'credit_usage'

export async function trackServerEvent(
  event: ServerEvent,
  data?: Record<string, unknown>,
  userId?: string
): Promise<void> {
  try {
    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      await prisma.analyticsEvent.create({
        data: {
          event,
          page: `server:${event}`,
          visitorId: userId || 'system',
          data: data ? JSON.stringify(data) : null,
        },
      })
    }, null)
  } catch {
    // Fire-and-forget server analytics
  }
}

export async function trackApiCall(
  endpoint: string,
  userId: string,
  tokensUsed: number,
  latencyMs: number,
  success: boolean
): Promise<void> {
  await trackServerEvent('api_call', {
    endpoint,
    tokensUsed,
    latencyMs,
    success,
    timestamp: new Date().toISOString(),
  }, userId)
}

export async function trackWebhookComplete(
  provider: string,
  eventType: string,
  eventId: string,
  success: boolean
): Promise<void> {
  await trackServerEvent(success ? 'webhook_complete' : 'webhook_error', {
    provider,
    eventType,
    eventId,
    timestamp: new Date().toISOString(),
  })
}

export async function trackUserRegister(email: string, method: string): Promise<void> {
  await trackServerEvent('user_register', { email, method })
}

export async function trackUserLogin(email: string, method: string): Promise<void> {
  await trackServerEvent('user_login', { email, method })
}

export async function trackTemplateDownload(templateId: string, templateName: string, email: string): Promise<void> {
  await trackServerEvent('template_download', { templateId, templateName, email })
}

export async function trackApiKeyCreated(email: string, plan: string): Promise<void> {
  await trackServerEvent('api_key_created', { email, plan })
}

export async function trackCreditUsage(userId: string, endpoint: string, creditsUsed: number): Promise<void> {
  await trackServerEvent('credit_usage', { endpoint, creditsUsed }, userId)
}
