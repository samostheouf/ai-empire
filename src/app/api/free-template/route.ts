import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { validateEmail, sanitizeInput } from '@/lib/input-validation'
import { EMAIL_FROM } from '@/lib/email'
import { Resend } from 'resend'
import { logger } from '@/lib/logger'
import crypto from 'crypto'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const sanitizedEmail = sanitizeInput(email)

    let freeTemplate = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.template.findFirst({ where: { slug: 'neurastarter-gratuit' } })
    }, null)

    if (!freeTemplate) {
      freeTemplate = await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.template.create({
          data: {
            name: 'NeuraStarter — Template Gratuit',
            slug: 'neurastarter-gratuit',
            description: 'Template Next.js 14 gratuit pour démarrer votre projet SaaS en quelques minutes. Auth de base, dashboard responsive, SEO optimisé.',
            price: 0,
            category: 'Gratuit',
            tags: '["next.js","tailwind","gratuit","starter"]',
            previewUrl: '',
            screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            features: '["Next.js 14 App Router","Tailwind CSS","Authentification de base","Dashboard responsive","Formulaire de contact","SEO optimisé","TypeScript","Déploiement Vercel en 1 clic"]',
            fileUrl: `${appUrl}/api/free-template/download`,
            downloads: 0,
            featured: true,
          },
        })
      }, null)
    }

    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const existing = await prisma.order.findFirst({
        where: { email: sanitizedEmail, templateId: freeTemplate!.id },
      })
      if (!existing) {
        await prisma.order.create({
          data: {
            templateId: freeTemplate!.id,
            email: sanitizedEmail,
            amount: 0,
            sessionId: `free_${Date.now()}_${Math.random().toString(36).slice(2)}`,
            status: 'completed',
          },
        })
        await prisma.template.update({
          where: { id: freeTemplate!.id },
          data: { downloads: { increment: 1 } },
        })
      }
    }, null)

    const downloadToken = crypto.createHash('sha256').update(`${sanitizedEmail}_${Date.now()}`).digest('hex').slice(0, 32)
    const downloadUrl = `${appUrl}/api/free-template/download?token=${downloadToken}`

    try {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: sanitizedEmail,
        subject: '🎁 Votre template NeuraStarter gratuit est prêt !',
        html: `
          <!DOCTYPE html>
          <html><body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
            <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 32px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Votre template gratuit</p>
              </div>
              <div style="padding: 32px;">
                <h2 style="margin: 0 0 16px; color: #1e293b;">Merci pour votre intérêt ! 🎉</h2>
                <p style="color: #64748b; margin: 0 0 24px;">
                  Voici ce que vous pouvez créer avec NeuraAPI. Votre template <strong>NeuraStarter</strong> est prêt à être téléchargé.
                </p>

                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                  <p style="margin: 0 0 8px; color: #166534; font-weight: 600;">📦 Inclus dans votre template :</p>
                  <p style="margin: 0; color: #166534; font-size: 14px;">
                    Next.js 14 · Tailwind CSS · Auth · Dashboard · SEO · TypeScript
                  </p>
                </div>

                <a href="${downloadUrl}" style="display: block; background: #059669; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 16px;">
                  📥 Télécharger NeuraStarter
                </a>

                <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                  <p style="margin: 0 0 8px; color: #1e40af; font-weight: 600;">🚀 Offre spéciale -30%</p>
                  <p style="margin: 0 0 8px; color: #1e40af; font-size: 14px;">
                    Utilisez le code <strong>LANCEMENT30</strong> pour obtenir -30% sur tous nos templates premium.
                  </p>
                  <p style="margin: 0; color: #64748b; font-size: 13px;">Offre valable 7 jours.</p>
                </div>

                <p style="color: #64748b; margin: 0 0 16px;">
                  Envie de passer au niveau supérieur ? Nos templates premium incluent Stripe, auth avancée et dashboard admin.
                </p>

                <a href="${appUrl}/templates" style="display: block; background: white; color: #4F46E5; border: 1px solid #4F46E5; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                  Découvrir les templates premium
                </a>
              </div>
            </div>
          </body></html>
        `,
      })
    } catch (e) {
      logger.error('free-template', 'Failed to send free template email', { error: e instanceof Error ? e.message : String(e) });
    }
    return NextResponse.json({ success: true, downloadUrl })
  } catch {
    return NextResponse.json({ error: 'Erreur lors du traitement' }, { status: 500 })
  }
}
