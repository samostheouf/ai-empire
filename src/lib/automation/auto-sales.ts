import { Resend } from 'resend'
import { prisma, safeQuery } from '@/lib/db'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

interface SalesLog {
  id: string
  type: string
  action: string
  target: string
  status: 'success' | 'error' | 'skipped'
  details: string
  timestamp: Date
}

const logs: SalesLog[] = []

function log(type: string, action: string, target: string, status: SalesLog['status'], details: string) {
  const entry: SalesLog = {
    id: `sales_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    type,
    action,
    target,
    status,
    details,
    timestamp: new Date(),
  }
  logs.push(entry)
}

function baseTemplate(content: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Intelligence Artificielle & Templates Premium</p>
        </div>
        <div style="padding: 32px;">
          ${content}
        </div>
        <div style="background: #f1f5f9; padding: 24px; text-align: center;">
          <p style="color: #94a3b8; font-size: 13px; margin: 0;">
            © ${new Date().getFullYear()} NeuraAPI. Tous droits réservés.
          </p>
          <p style="color: #94a3b8; font-size: 12px; margin: 8px 0 0;">
            <a href="${appUrl}" style="color: #6366f1;">site web</a> · 
            <a href="mailto:support@neuraapi.com" style="color: #6366f1;">support</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
      to,
      subject,
      html,
    })
    if (error) {
      return false
    }
    return true
  } catch (error) {
    return false
  }
}

interface ConversionRecord {
  userId: string
  email: string
  type: string
  amount: number
  date: Date
}

const conversionTracker: ConversionRecord[] = []

export async function sendUpsellEmails(): Promise<SalesLog[]> {
  const actionLogs: SalesLog[] = []

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const eightDaysAgo = new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)

  const recentBuyers = await safeQuery(
    () =>
      prisma.order.findMany({
        where: {
          status: 'completed',
          createdAt: { gte: eightDaysAgo, lte: sevenDaysAgo },
        },
        include: { template: true },
      }),
    []
  )

  for (const order of recentBuyers) {
    const content = `
      <h2 style="margin: 0 0 16px; color: #1e293b;">Complétez votre collection 🎯</h2>
      <p style="color: #64748b; margin: 0 0 16px;">
        Merci d'avoir acheté <strong>${order.template?.name || 'notre template'}</strong> !
        Pour aller plus loin, découvrez nos offres exclusives :
      </p>
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <p style="margin: 0; color: #2563eb; font-weight: 600;">📦 Bundle Premium (-30%)</p>
        <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">Tous nos templates + support VIP</p>
        <p style="margin: 4px 0 0; color: #2563eb; font-size: 14px;">Code : BUNDLE30</p>
      </div>
      <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #7c3aed; font-weight: 600;">⭐ Upgrade Plan API</p>
        <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">Passez au plan Pro pour 10x plus de crédits</p>
      </div>
      <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
        Découvrir nos offres
      </a>
    `

    const sent = await sendEmail(
      order.email,
      '⬆️ Complétez votre collection NeuraAPI',
      baseTemplate(content)
    )

    const entry: SalesLog = {
      id: `upsell_${order.id}`,
      type: 'upsell',
      action: 'email_upsell',
      target: order.email,
      status: sent ? 'success' : 'error',
      details: sent ? `Upsell envoyé après achat: ${order.template?.name}` : 'Échec envoi upsell',
      timestamp: new Date(),
    }
    logs.push(entry)
    actionLogs.push(entry)

    trackConversion(order.email, 'upsell_sent', order.amount)
  }

  return actionLogs
}

export async function sendReferralBonuses(): Promise<SalesLog[]> {
  const actionLogs: SalesLog[] = []

  const allUsers = await safeQuery(
    () =>
      prisma.apiUser.findMany({
        where: {
          createdAt: { lte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
        },
      }),
    []
  )

  const recentlyContacted = await safeQuery(async () => {
    const logs = await prisma.usageLog.findMany({
      where: {
        endpoint: '/automation/referral',
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
      select: { userId: true },
    })
    return new Set(logs.map((l) => l.userId))
  }, new Set<string>())

  const eligibleUsers = allUsers.filter((u) => !recentlyContacted.has(u.id))

  for (const user of eligibleUsers) {
    const referralCode = `REF${user.id.slice(-8).toUpperCase()}`
    const content = `
      <h2 style="margin: 0 0 16px; color: #1e293b;">Parrainez et économisez 🎁</h2>
      <p style="color: #64748b; margin: 0 0 16px;">
        Partagez NeuraAPI avec vos contacts et recevez des récompenses exclusives :
      </p>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <p style="margin: 0; color: #166534; font-weight: 600;">💰 Votre code parrain</p>
        <p style="margin: 8px 0 0; color: #166534; font-size: 18px; font-family: monospace; background: white; padding: 8px; border-radius: 4px; text-align: center;">${referralCode}</p>
      </div>
      <h3 style="color: #1e293b; margin: 0 0 12px;">Les récompenses :</h3>
      <ul style="color: #64748b; padding-left: 20px; margin: 0 0 16px;">
        <li style="margin-bottom: 8px;"><strong>1 parrainage</strong> : 50 crédits gratuits</li>
        <li style="margin-bottom: 8px;"><strong>5 parrainages</strong> : 200 crédits bonus</li>
        <li style="margin-bottom: 8px;"><strong>10 parrainages</strong> : -20% sur votre prochain achat</li>
        <li style="margin-bottom: 8px;"><strong>25 parrainages</strong> : 500 crédits + statut Ambassadeur</li>
      </ul>
      <p style="color: #64748b; margin: 0 0 24px;">
        Votre ami obtient aussi <strong>-20%</strong> sur sa première commande !
      </p>
      <a href="${appUrl}/ref/${referralCode}" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
        Partager mon lien
      </a>
    `

    const sent = await sendEmail(
      user.email,
      '🎁 Votre programme de parrainage est actif',
      baseTemplate(content)
    )

    const entry: SalesLog = {
      id: `referral_${user.id}`,
      type: 'referral',
      action: 'email_referral',
      target: user.email,
      status: sent ? 'success' : 'error',
      details: sent ? 'Email parrainage envoyé' : 'Échec envoi parrainage',
      timestamp: new Date(),
    }
    logs.push(entry)
    actionLogs.push(entry)

    if (sent) {
      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        await prisma.usageLog.create({
          data: { userId: user.id, endpoint: '/automation/referral', tokens: 0, cost: 0 },
        })
      }, null)
    }
  }

  return actionLogs
}

export async function sendWinBackEmails(): Promise<SalesLog[]> {
  const actionLogs: SalesLog[] = []

  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  const thirtyOneDaysAgo = new Date(Date.now() - 31 * 24 * 60 * 60 * 1000)

  const inactiveUsers = await safeQuery(
    () =>
      prisma.apiUser.findMany({
        where: {
          createdAt: { lte: thirtyOneDaysAgo },
        },
      }),
    []
  )

  const recentlyContacted = await safeQuery(async () => {
    const logs = await prisma.usageLog.findMany({
      where: {
        endpoint: '/automation/winback',
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
      select: { userId: true },
    })
    return new Set(logs.map((l) => l.userId))
  }, new Set<string>())

  const eligibleUsers = inactiveUsers.filter((u) => !recentlyContacted.has(u.id))

  for (const user of eligibleUsers) {
    const daysSinceCreation = Math.floor(
      (Date.now() - new Date(user.createdAt).getTime()) / (24 * 60 * 60 * 1000)
    )

    const content = `
      <h2 style="margin: 0 0 16px; color: #1e293b;">On vous offre une seconde chance 💜</h2>
      <p style="color: #64748b; margin: 0 0 16px;">
        Cela fait ${daysSinceCreation} jours que vous n'avez pas utilisé NeuraAPI.
        Nous aimerions savoir comment améliorer votre expérience.
      </p>
      <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #c2410c; font-weight: 600;">🔥 Offre exclusive : -30% sur tout le catalogue</p>
        <p style="margin: 8px 0 0; color: #c2410c; font-size: 14px;">Code : REVIENT30 — Valable 7 jours</p>
      </div>
      <p style="color: #64748b; margin: 0 0 16px;">Voici ce qui a changé depuis votre dernière visite :</p>
      <ul style="color: #64748b; padding-left: 20px; margin: 0 0 24px;">
        <li style="margin-bottom: 8px;">Nouveaux templates premium ajoutés</li>
        <li style="margin-bottom: 8px;">APIs IA améliorées avec de nouveaux modèles</li>
        <li style="margin-bottom: 8px;">Support client 24/7 disponible</li>
        <li style="margin-bottom: 8px;">Programme de parrainage avec récompenses</li>
      </ul>
      <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
        Retrouver nos templates
      </a>
      <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
        Besoin d'aide ? Répondez à cet email ou contactez support@neuraapi.com
      </p>
    `

    const sent = await sendEmail(
      user.email,
      '💜 -30% pour revenir chez NeuraAPI',
      baseTemplate(content)
    )

    const entry: SalesLog = {
      id: `winback_${user.id}`,
      type: 'win-back',
      action: 'email_winback',
      target: user.email,
      status: sent ? 'success' : 'error',
      details: sent
        ? `Email win-back envoyé (${daysSinceCreation} jours d'inactivité)`
        : 'Échec envoi win-back',
      timestamp: new Date(),
    }
    logs.push(entry)
    actionLogs.push(entry)

    if (sent) {
      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        await prisma.usageLog.create({
          data: { userId: user.id, endpoint: '/automation/winback', tokens: 0, cost: 0 },
        })
      }, null)
    }
  }

  return actionLogs
}

export function trackConversion(email: string, type: string, amount: number) {
  conversionTracker.push({
    userId: email,
    email,
    type,
    amount,
    date: new Date(),
  })
}

export function getConversionStats(): {
  totalConversions: number
  totalRevenue: number
  byType: Record<string, { count: number; revenue: number }>
  recentConversions: ConversionRecord[]
} {
  const byType: Record<string, { count: number; revenue: number }> = {}

  for (const record of conversionTracker) {
    if (!byType[record.type]) {
      byType[record.type] = { count: 0, revenue: 0 }
    }
    byType[record.type].count++
    byType[record.type].revenue += record.amount
  }

  return {
    totalConversions: conversionTracker.length,
    totalRevenue: conversionTracker.reduce((sum, r) => sum + r.amount, 0),
    byType,
    recentConversions: conversionTracker.slice(-20),
  }
}

export async function runAutoSales(): Promise<{
  totalActions: number
  successful: number
  failed: number
  logs: SalesLog[]
  conversionStats: ReturnType<typeof getConversionStats>
}> {
  const allLogs: SalesLog[] = []

  const upsellLogs = await sendUpsellEmails()
  allLogs.push(...upsellLogs)

  const referralLogs = await sendReferralBonuses()
  allLogs.push(...referralLogs)

  const winBackLogs = await sendWinBackEmails()
  allLogs.push(...winBackLogs)

  const successful = allLogs.filter((l) => l.status === 'success').length
  const failed = allLogs.filter((l) => l.status === 'error').length

  return {
    totalActions: allLogs.length,
    successful,
    failed,
    logs: allLogs,
    conversionStats: getConversionStats(),
  }
}

export function getAutoSalesLogs(): SalesLog[] {
  return [...logs]
}
