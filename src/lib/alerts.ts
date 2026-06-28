import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
const adminEmail = process.env.ADMIN_EMAIL || 'samilaboulette21@gmail.com'

export async function sendAlert(type: string, message: string): Promise<void> {
  const { error } = await resend.emails.send({
    from: 'NeuraAPI Alerts <alerts@neuraapi.com>',
    to: adminEmail,
    subject: `[NeuraAPI Alert] ${type}`,
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
              <p style="margin: 0; color: #991b1b; font-weight: 600;">${type}</p>
            </div>
            <p style="color: #64748b; margin: 0 0 24px; white-space: pre-wrap;">${message}</p>
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
