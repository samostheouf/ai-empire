import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
const adminEmail = process.env.ADMIN_EMAIL || 'samilaboulette21@gmail.com'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendAlert(type: string, message: string): Promise<void> {
  const safeType = escapeHtml(type)
  const safeMessage = escapeHtml(message)

  const { error } = await resend.emails.send({
    from: 'NeuraAPI Alerts <alerts@neuraapi.com>',
    to: adminEmail,
    subject: `[NeuraAPI Alert] ${safeType}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px;">
        <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">System Alert</p>
          </div>
          <div style="padding: 32px;">
            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="margin: 0; color: #991b1b; font-weight: 600;">${safeType}</p>
            </div>
            <p style="color: #64748b; margin: 0 0 24px; white-space: pre-wrap;">${safeMessage}</p>
            <a href="${appUrl}/admin/commerce" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
              View Dashboard
            </a>
          </div>
        </div>
      </body>
      </html>
    `,
  })

  if (error) {
    console.error('[sendAlert] Failed to send alert:', error)
  }
}

export async function sendHealthCheckAlert(service: string, status: 'healthy' | 'unhealthy', details?: string): Promise<void> {
  if (status === 'healthy') return

  const safeService = escapeHtml(service)
  const safeDetails = details ? escapeHtml(details) : 'No additional details'

  await sendAlert(
    'Health Check Failed',
    `Service: ${safeService}\nStatus: ${status}\nDetails: ${safeDetails}\nTime: ${new Date().toISOString()}\n\nPlease investigate immediately.`
  )
}

export async function sendWebhookAlert(eventId: string, eventType: string, error: string, attempt?: number): Promise<void> {
  const safeEventId = escapeHtml(eventId)
  const safeEventType = escapeHtml(eventType)
  const safeError = escapeHtml(error)

  await sendAlert(
    'Webhook Processing Failed',
    `Event: ${safeEventId} (${safeEventType})\nError: ${safeError}\nAttempt: ${attempt || 1}\nTime: ${new Date().toISOString()}\n\nCheck webhook logs for details.`
  )
}

export async function sendCronJobAlert(jobName: string, error: string, duration?: number): Promise<void> {
  const safeJobName = escapeHtml(jobName)
  const safeError = escapeHtml(error)

  await sendAlert(
    'Cron Job Failed',
    `Job: ${safeJobName}\nError: ${safeError}\nDuration: ${duration ? `${duration}ms` : 'Unknown'}\nTime: ${new Date().toISOString()}\n\nThe scheduled job did not complete successfully.`
  )
}

export async function sendDatabaseAlert(operation: string, error: string): Promise<void> {
  const safeOperation = escapeHtml(operation)
  const safeError = escapeHtml(error)

  await sendAlert(
    'Database Alert',
    `Operation: ${safeOperation}\nError: ${safeError}\nTime: ${new Date().toISOString()}\n\nDatabase may be experiencing issues.`
  )
}
