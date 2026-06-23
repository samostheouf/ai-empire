import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { validateEmail, sanitizeInput } from '@/lib/input-validation'
import { EMAIL_FROM } from '@/lib/email'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, templateId } = body

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const existing = await prisma.recoveryEmail.findFirst({
        where: {
          email: email as string,
          sent: true,
          createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
        },
      })

      if (existing) {
        return { success: false, message: 'Email de récupération déjà envoyé récemment' }
      }

      await prisma.recoveryEmail.create({
        data: {
          email: email as string,
          templateId: templateId || undefined,
          sent: false,
        },
      })

      return { success: true, queued: true }
    }, { success: false, queued: false })

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { authenticateApiKey } = await import('@/lib/auth')
    const auth = await authenticateApiKey(request)
    if (auth.error) return auth.error

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const pendingRecoveries = await prisma.recoveryEmail.findMany({
        where: {
          sent: false,
          createdAt: { lte: new Date(Date.now() - 60 * 60 * 1000) },
        },
        take: 50,
      })

      if (pendingRecoveries.length === 0) {
        return { sent: 0 }
      }

      const templates = await prisma.template.findMany({ orderBy: { downloads: 'desc' }, take: 5 })
      const featuredTemplates = templates.map(t => ({
        name: t.name,
        price: (t.price / 100).toFixed(2),
        description: t.description,
        slug: t.slug,
      }))

      let sentCount = 0

      for (const recovery of pendingRecoveries) {
        try {
          const templateListHtml = featuredTemplates.map(t => `
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">${sanitizeInput(t.name)}</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; text-align: right;">${sanitizeInput(t.price)}€</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; text-align: right;">
                <a href="${appUrl}/templates/${t.slug}" style="color: #4F46E5; text-decoration: none;">Voir →</a>
              </td>
            </tr>
          `).join('')

          await resend.emails.send({
            from: EMAIL_FROM,
            to: recovery.email,
            subject: '👋 Vous avez oublié quelque chose chez NeuraAPI',
            html: `
              <!DOCTYPE html>
              <html><body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
                <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                  <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                    <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Vous avez visité nos tarifs</p>
                  </div>
                  <div style="padding: 32px;">
                    <h2 style="margin: 0 0 16px; color: #1e293b;">On dirait que vous avez hésité...</h2>
                    <p style="color: #64748b; margin: 0 0 24px;">
                      Nous avons remarqué que vous avez consulté nos templates mais n'avez pas encore franchi le pas.
                      Voici ce que nous proposons avec des tarifs honnêtes :
                    </p>

                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                      <thead>
                        <tr style="background: #f1f5f9;">
                          <th style="padding: 12px; text-align: left; color: #475569; font-size: 13px;">Template</th>
                          <th style="padding: 12px; text-align: right; color: #475569; font-size: 13px;">Prix</th>
                          <th style="padding: 12px; text-align: right; color: #475569; font-size: 13px;"></th>
                        </tr>
                      </thead>
                      <tbody>
                        ${templateListHtml}
                      </tbody>
                    </table>

                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                      <p style="margin: 0; color: #166534; font-weight: 600; text-align: center;">
                        💳 Paiement sécurisé Stripe · Livraison instantanée · 30 jours satisfait ou remboursé
                      </p>
                    </div>

                    <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                      Découvrir tous les templates
                    </a>

                    <p style="color: #94a3b8; font-size: 13px; margin: 24px 0 0; text-align: center;">
                      Si vous avez des questions, répondez à cet email — nous répondons en moins de 24h.
                    </p>
                  </div>
                </div>
              </body></html>
            `,
          })

          await prisma.recoveryEmail.update({
            where: { id: recovery.id },
            data: { sent: true },
          })

          sentCount++
        } catch {
        }
      }

      return { sent: sentCount, total: pendingRecoveries.length }
    }, { sent: 0 })

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email')

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const recovery = await prisma.recoveryEmail.findFirst({
        where: { email: email as string, clicked: false, sent: true },
        orderBy: { createdAt: 'desc' },
      })

      if (recovery) {
        await prisma.recoveryEmail.update({
          where: { id: recovery.id },
          data: { clicked: true },
        })
      }

      return { clicked: !!recovery }
    }, { clicked: false })

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
