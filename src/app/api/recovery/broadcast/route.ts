import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { EMAIL_FROM } from '@/lib/email'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const adminKey = process.env.ADMIN_API_KEY
    if (!adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const users = await prisma.apiUser.findMany({
        select: { id: true, email: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
      })

      if (users.length === 0) {
        return { sent: 0, total: 0, message: 'Aucun utilisateur trouvé' }
      }

      const templates = await prisma.template.findMany({
        orderBy: { downloads: 'desc' },
        take: 5,
      })

      const templateListHtml = templates.map(t => `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">${t.name}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; text-align: right;">${(t.price / 100).toFixed(0)}€</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; text-align: right;">
            <a href="${appUrl}/templates/${t.slug}" style="color: #4F46E5; text-decoration: none;">Voir →</a>
          </td>
        </tr>
      `).join('')

      let sentCount = 0
      const errors: string[] = []

      for (const user of users) {
        try {
          const daysSince = Math.floor((Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24))

          await resend.emails.send({
            from: EMAIL_FROM,
            to: user.email,
            subject: '🚀 Voici ce que vous pouvez créer avec NeuraAPI',
            html: `
              <!DOCTYPE html>
              <html><body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
                <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                  <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                    <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Offre de lancement exclusive</p>
                  </div>
                  <div style="padding: 32px;">
                    <h2 style="margin: 0 0 16px; color: #1e293b;">Voici ce que vous pouvez créer avec NeuraAPI</h2>
                    <p style="color: #64748b; margin: 0 0 24px;">
                      ${daysSince > 0 ? `Inscrit depuis ${daysSince} jour${daysSince > 1 ? 's' : ''}, ` : ''}vous avez accès à tout notre écosystème. Voici ce qui vous attend :
                    </p>

                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                      <p style="margin: 0 0 8px; color: #166534; font-weight: 600;">📦 Template gratuit inclus</p>
                      <p style="margin: 0; color: #166534; font-size: 14px;">
                        Téléchargez <strong>NeuraStarter</strong> — un template Next.js 14 complet, 100% gratuit.
                      </p>
                      <a href="${appUrl}/free" style="display: inline-block; margin-top: 12px; background: #059669; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                        Télécharger gratuitement →
                      </a>
                    </div>

                    <h3 style="margin: 0 0 12px; color: #1e293b; font-size: 16px;">Templates premium — -30% avec LANCEMENT30</h3>
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

                    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                      <p style="margin: 0 0 8px; color: #1e40af; font-weight: 600;">🎯 Votre code promo</p>
                      <p style="margin: 0; color: #1e40af; font-size: 14px;">
                        Utilisez <strong>LANCEMENT30</strong> au checkout pour -30% sur tous les templates.
                      </p>
                      <p style="margin: 8px 0 0; color: #64748b; font-size: 13px;">Offre valable 7 jours.</p>
                    </div>

                    <a href="${appUrl}/offre-lancement" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 16px;">
                      Profiter de l'offre avant la fin
                    </a>

                    <a href="${appUrl}/free" style="display: block; background: white; color: #059669; border: 1px solid #059669; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                      Ou télécharger le template gratuit
                    </a>

                    <p style="color: #94a3b8; font-size: 13px; margin: 24px 0 0; text-align: center;">
                      Si vous avez des questions, répondez à cet email — nous répondons en moins de 24h.
                    </p>
                  </div>
                </div>
              </body></html>
            `,
          })

          sentCount++
        } catch (err) {
          errors.push(user.email)
        }
      }

      return { sent: sentCount, total: users.length, errors }
    }, { sent: 0, total: 0, errors: [] })

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Utilisez POST pour envoyer les emails de récupération',
    usage: 'Authorization: Bearer <ADMIN_API_KEY>',
  })
}
