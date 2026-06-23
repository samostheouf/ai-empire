import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { validateEmail, validateString, sanitizeInput } from '@/lib/input-validation'
import { EMAIL_FROM } from '@/lib/email'
import { Resend } from 'resend'
import { getRateLimitHeaders, rateLimit } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

function generateTrackingCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = 'aff_'
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = rateLimit(`affiliate:${ip}`, 10, 60_000)
    const rlHeaders = getRateLimitHeaders(rl, 10)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes' }, { status: 429, headers: rlHeaders })
    }

    const body = await request.json()
    const { email, name } = body

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400, headers: rlHeaders })
    }

    if (name && !validateString(name, 200)) {
      return NextResponse.json({ error: 'Nom invalide' }, { status: 400, headers: rlHeaders })
    }

    const sanitizedName = name ? sanitizeInput(name as string) : null

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const existing = await prisma.affiliate.findUnique({ where: { email: email as string } })
      if (existing) {
        return {
          success: false,
          message: 'Vous êtes déjà inscrit comme affilié',
          affiliate: {
            trackingCode: existing.trackingCode,
            link: `${appUrl}?aff=${existing.trackingCode}`,
          },
        }
      }

      const affiliate = await prisma.affiliate.create({
        data: {
          email: email as string,
          name: sanitizedName || undefined,
          trackingCode: generateTrackingCode(),
        },
      })

      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: email as string,
          subject: '🤝 Bienvenue dans le programme d\'affiliation NeuraAPI',
          html: `
            <!DOCTYPE html>
            <html><body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
              <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                  <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Programme d'affiliation</p>
                </div>
                <div style="padding: 32px;">
                  <h2 style="margin: 0 0 16px; color: #1e293b;">Bienvenue, ${sanitizedName || 'Partenaire'} !</h2>
                  <p style="color: #64748b; margin: 0 0 16px;">Merci de rejoindre notre programme d'affiliation. Voici votre lien de tracking :</p>
                  <div style="background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 13px; word-break: break-all; margin-bottom: 24px;">
                    ${appUrl}?aff=${affiliate.trackingCode}
                  </div>
                  <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                    <p style="margin: 0 0 8px; color: #166534; font-weight: 600;">Votre commission : 30% sur la première vente</p>
                    <p style="margin: 0; color: #166534; font-size: 14px;">Partagez votre lien. Chaque achat via votre lien vous génère 30% de commission.</p>
                  </div>
                  <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                    Voir mon tableau de bord affilié
                  </a>
                </div>
              </div>
            </body></html>
          `,
        })
      } catch {
      }

      return {
        success: true,
        affiliate: {
          id: affiliate.id,
          trackingCode: affiliate.trackingCode,
          link: `${appUrl}?aff=${affiliate.trackingCode}`,
          commissionRate: affiliate.commissionRate,
        },
      }
    }, { success: false, message: 'Erreur serveur', affiliate: { trackingCode: '', link: '' } })

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email')
    const trackingCode = request.nextUrl.searchParams.get('code')

    if (trackingCode) {
      const result = await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        const affiliate = await prisma.affiliate.findUnique({ where: { trackingCode } })
        if (!affiliate) return null
        return {
          id: affiliate.id,
          name: affiliate.name,
          email: affiliate.email,
          trackingCode: affiliate.trackingCode,
          commissionRate: affiliate.commissionRate,
          totalEarned: affiliate.totalEarned,
          totalReferrals: affiliate.totalReferrals,
          totalConversions: affiliate.totalConversions,
        }
      }, null)

      if (!result) {
        return NextResponse.json({ error: 'Affilié introuvable' }, { status: 404 })
      }
      return NextResponse.json(result)
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const affiliate = await prisma.affiliate.findUnique({ where: { email: email as string } })
      if (!affiliate) return null

      const referrals = await prisma.affiliateReferral.findMany({
        where: { affiliateId: affiliate.id },
        orderBy: { createdAt: 'desc' },
        take: 50,
      })

      return {
        id: affiliate.id,
        name: affiliate.name,
        email: affiliate.email,
        trackingCode: affiliate.trackingCode,
        link: `${appUrl}?aff=${affiliate.trackingCode}`,
        commissionRate: affiliate.commissionRate,
        totalEarned: affiliate.totalEarned,
        totalReferrals: affiliate.totalReferrals,
        totalConversions: affiliate.totalConversions,
        status: affiliate.status,
        referrals: referrals.map(r => ({
          email: r.visitorEmail,
          converted: r.converted,
          commission: r.commission,
          date: r.createdAt,
        })),
      }
    }, null)

    if (!result) {
      return NextResponse.json({ error: 'Affilié introuvable' }, { status: 404 })
    }

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

    const body = await request.json()
    const { trackingCode, visitorEmail, orderId, amount } = body

    if (!trackingCode || !visitorEmail) {
      return NextResponse.json({ error: 'Paramètres manquants' }, { status: 400 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const affiliate = await prisma.affiliate.findUnique({ where: { trackingCode } })
      if (!affiliate) return { success: false, commission: 0 }

      const commission = Math.round((amount || 0) * affiliate.commissionRate)

      await prisma.affiliateReferral.create({
        data: {
          affiliateId: affiliate.id,
          visitorEmail,
          orderId: orderId || undefined,
          commission,
          converted: !!orderId,
        },
      })

      await prisma.affiliate.update({
        where: { id: affiliate.id },
        data: {
          totalReferrals: { increment: 1 },
          totalConversions: orderId ? { increment: 1 } : undefined,
          totalEarned: orderId ? { increment: commission } : undefined,
        },
      })

      return { success: true, commission }
    }, { success: false, commission: 0 })

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
