import { Resend } from 'resend'
import { prisma, safeQuery } from '@/lib/db'
import { callAI } from '@/lib/ai'
export { sendAgentsOnboardingSequence } from './agents-emails'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

interface AutomationLog {
  id: string
  type: string
  action: string
  target: string
  status: 'success' | 'error' | 'skipped'
  details: string
  timestamp: Date
}

const logs: AutomationLog[] = []

function log(type: string, action: string, target: string, status: AutomationLog['status'], details: string) {
  const entry: AutomationLog = {
    id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
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
            <a href="mailto:support@neuraapi.com" style="color: #6366f1;">support</a> ·
            <a href="${appUrl}/unsubscribe" style="color: #6366f1;">se désabonner</a>
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

export async function sendWelcomeEmails(): Promise<AutomationLog[]> {
  const actionLogs: AutomationLog[] = []

  const newUsers = await safeQuery(
    () =>
      prisma.apiUser.findMany({
        where: {
          createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
        },
        orderBy: { createdAt: 'desc' },
      }),
    []
  )

  for (const user of newUsers) {
    const content = `
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=200&fit=crop" alt="Welcome" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
      </div>
      <h2 style="margin: 0 0 16px; color: #1e293b;">Bienvenue ${user.email.split('@')[0]} ! 🎉</h2>
      <p style="color: #64748b; margin: 0 0 16px;">
        Merci de rejoindre NeuraAPI. Vous avez maintenant accès à des APIs IA puissantes et des templates premium.
      </p>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #166534; font-weight: 600;">✅ Votre compte est actif</p>
        <p style="margin: 8px 0 0; color: #166534; font-size: 14px;">${user.credits} crédits offerts pour commencer</p>
      </div>
      <h3 style="color: #1e293b; margin: 0 0 12px;">🚀 Guide de démarrage rapide</h3>
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="display: flex; align-items: center;">
              <div style="background: #4F46E5; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 14px; margin-right: 12px;">1</div>
              <div>
                <strong style="color: #1e293b;">Récupérez votre clé API</strong>
                <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Dans votre dashboard en un clic</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="display: flex; align-items: center;">
              <div style="background: #4F46E5; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 14px; margin-right: 12px;">2</div>
              <div>
                <strong style="color: #1e293b;">Consultez la documentation</strong>
                <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Guides rapides et exemples de code</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0;">
            <div style="display: flex; align-items: center;">
              <div style="background: #4F46E5; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 14px; margin-right: 12px;">3</div>
              <div>
                <strong style="color: #1e293b;">Faites votre première requête</strong>
                <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Testez une API en 5 minutes</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
        Accéder au Dashboard
      </a>
      <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #7c3aed; font-weight: 600;">👥 Rejoignez 2,400+ utilisateurs actifs</p>
        <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
          Besoin d'aide ? Répondez à cet email — nous répondons en moins de 2h.
        </p>
      </div>
    `

    const sent = await sendEmail(
      user.email,
      'Bienvenue sur NeuraAPI ! Vos crédits gratuits vous attendent',
      baseTemplate(content)
    )

    const entry: AutomationLog = {
      id: `welcome_${user.id}`,
      type: 'welcome',
      action: 'email_bienvenue',
      target: user.email,
      status: sent ? 'success' : 'error',
      details: sent ? 'Email de bienvenue envoyé' : 'Échec envoi email',
      timestamp: new Date(),
    }
    logs.push(entry)
    actionLogs.push(entry)
  }

  return actionLogs
}

export async function sendAbandonedCartEmails(): Promise<AutomationLog[]> {
  const actionLogs: AutomationLog[] = []

  const recentOrders = await safeQuery(
    () =>
      prisma.order.findMany({
        where: {
          status: 'pending',
          createdAt: {
            gte: new Date(Date.now() - 2 * 60 * 60 * 1000),
            lte: new Date(Date.now() - 1 * 60 * 60 * 1000),
          },
        },
        include: { template: true },
      }),
    []
  )

  for (const order of recentOrders) {
    const price = (order.amount / 100).toFixed(2)
    const content = `
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=200&fit=crop" alt="Cart" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
      </div>
      <h2 style="margin: 0 0 16px; color: #1e293b;">Vous avez laissé un template dans votre panier 🛒</h2>
      <p style="color: #64748b; margin: 0 0 16px;">
        Le template <strong>${order.template?.name || 'Premium'}</strong> vous attend toujours !
      </p>
      <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #c2410c; font-weight: 600;">🎁 Offre spéciale : -20% avec le code RETOUR20</p>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 8px; color: #1e293b;">${order.template?.name || 'Template Premium'}</h3>
        <p style="margin: 0; color: #64748b; font-size: 14px;">${price}€</p>
      </div>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #166534; font-weight: 600;">👥 2,400+ développeurs nous font confiance</p>
      </div>
      <a href="${appUrl}/templates/${order.template?.slug || ''}" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
        Finaliser mon achat
      </a>
      <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
        Code promo : <strong>RETOUR20</strong> — entrez-le lors du paiement
      </p>
    `

    const sent = await sendEmail(
      order.email,
      `${order.template?.name || 'Votre template'} vous attend toujours !`,
      baseTemplate(content)
    )

    const entry: AutomationLog = {
      id: `cart_${order.id}`,
      type: 'abandoned-cart',
      action: 'email_rappel',
      target: order.email,
      status: sent ? 'success' : 'error',
      details: sent ? `Rappel panier: ${order.template?.name}` : 'Échec envoi rappel',
      timestamp: new Date(),
    }
    logs.push(entry)
    actionLogs.push(entry)
  }

  return actionLogs
}

export async function sendWeeklyNewsletters(): Promise<AutomationLog[]> {
  const actionLogs: AutomationLog[] = []

  const allUsers = await safeQuery(() => prisma.apiUser.findMany(), [])

  const aiResult = await callAI(
    `Génère le contenu d'une newsletter hebdomadaire pour NeuraAPI.
    Inclus: 2-3 articles récents, 1 astuce technique, 1 offre promotionnelle.
    Ton: professionnel et engageant.
    Format JSON: { "subject": "...", "title": "...", "intro": "...", "articles": [{ "title": "...", "description": "...", "url": "..." }], "tip": "...", "offer": "..." }`,
    1500
  )

  let newsletterData: {
    subject?: string
    title?: string
    intro?: string
    articles?: Array<{ title: string; description: string; url: string }>
    tip?: string
    offer?: string
  } | null
  try {
    const jsonMatch = aiResult.content.match(/\{[\s\S]*\}/)
    newsletterData = jsonMatch ? JSON.parse(jsonMatch[0]) : null
  } catch {
    newsletterData = null
  }

  if (!newsletterData) {
    newsletterData = {
      subject: '🚀 Votre résumé hebdomadaire NeuraAPI',
      title: 'Résumé de la semaine',
      intro: 'Découvrez les dernières nouveautés et astuces NeuraAPI.',
      articles: [
        { title: 'Nouveaux templates disponibles', description: 'Découvrez nos derniers templates premium.', url: `${appUrl}/templates` },
        { title: 'APIs mises à jour', description: 'Améliorations de performance sur toutes nos APIs.', url: `${appUrl}/docs` },
      ],
      tip: 'Utilisez les webhooks pour automatiser vos workflows.',
      offer: 'Profitez de -15% avec le code HEBDO15',
    }
  }

  for (const user of allUsers) {
    const articlesHtml = (newsletterData.articles || [])
      .map(
        (a) => `
        <div style="border-bottom: 1px solid #e2e8f0; padding: 16px 0;">
          <h4 style="margin: 0 0 8px; color: #1e293b;">${a.title}</h4>
          <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">${a.description}</p>
          <a href="${a.url}" style="color: #4F46E5; font-size: 14px; text-decoration: none;">Lire →</a>
        </div>
      `
      )
      .join('')

    const content = `
      <h2 style="margin: 0 0 16px; color: #1e293b;">${newsletterData.title}</h2>
      <p style="color: #64748b; margin: 0 0 24px;">${newsletterData.intro}</p>
      ${articlesHtml}
      <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin: 24px 0;">
        <p style="margin: 0; color: #7c3aed; font-weight: 600;">💡 Astuce de la semaine</p>
        <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">${newsletterData.tip}</p>
      </div>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #166534; font-weight: 600;">🎁 ${newsletterData.offer}</p>
      </div>
      <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
        Découvrir nos templates
      </a>
    `

    const sent = await sendEmail(user.email, newsletterData.subject || 'Newsletter NeuraAPI', baseTemplate(content))

    const entry: AutomationLog = {
      id: `newsletter_${user.id}`,
      type: 'newsletter',
      action: 'email_newsletter',
      target: user.email,
      status: sent ? 'success' : 'error',
      details: sent ? 'Newsletter hebdomadaire envoyée' : 'Échec envoi newsletter',
      timestamp: new Date(),
    }
    logs.push(entry)
    actionLogs.push(entry)
  }

  return actionLogs
}

export async function sendReengagementEmails(): Promise<AutomationLog[]> {
  const actionLogs: AutomationLog[] = []

  const inactiveUsers = await safeQuery(
    () =>
      prisma.apiUser.findMany({
        where: {
          createdAt: { lte: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) },
        },
      }),
    []
  )

  const recentlyContacted = await safeQuery(async () => {
    const recentLogs = await prisma.usageLog.findMany({
      where: {
        endpoint: '/automation/reengagement',
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
      select: { userId: true },
    })
    return new Set(recentLogs.map((l) => l.userId))
  }, new Set<string>())

  const eligibleUsers = inactiveUsers.filter((u) => !recentlyContacted.has(u.id))

  for (const user of eligibleUsers) {
    const daysSinceCreation = Math.floor(
      (Date.now() - new Date(user.createdAt).getTime()) / (24 * 60 * 60 * 1000)
    )

    const content = `
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=200&fit=crop" alt="We miss you" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
      </div>
      <h2 style="margin: 0 0 16px; color: #1e293b;">${user.email.split('@')[0]}, nous vous avons manqué ! 💜</h2>
      <p style="color: #64748b; margin: 0 0 16px;">
        Cela fait ${daysSinceCreation} jours que vous n'avez pas utilisé NeuraAPI. Voici ce qui a changé :
      </p>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 12px; color: #1e293b;">🆕 Nouveautés récentes</h3>
        <ul style="color: #64748b; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 8px;">Nouvelles APIs disponibles (GPT-4o, Claude 3.5)</li>
          <li style="margin-bottom: 8px;">Templates premium ajoutés</li>
          <li style="margin-bottom: 8px;">Performances améliorées de 40%</li>
          <li style="margin-bottom: 8px;">Nouvelles intégrations (Notion, Airtable)</li>
        </ul>
      </div>
      <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #7c3aed; font-weight: 600;">🎁 Offre de retour : +100 crédits gratuits</p>
        <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
          Utilisez le code <strong style="color: #7c3aed;">RETOUR100</strong> — valable 7 jours
        </p>
      </div>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #166534; font-weight: 600;">👥 2,400+ utilisateurs actifs</p>
        <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
          Rejoignez-les et transformez votre productivité.
        </p>
      </div>
      <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
        Reprendre là où vous en étiez
      </a>
      <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
        Code promo : <strong>RETOUR100</strong> — valable 7 jours
      </p>
    `

    const sent = await sendEmail(
      user.email,
      `${user.email.split('@')[0]}, vos crédits gratuits vous attendent !`,
      baseTemplate(content)
    )

    const entry: AutomationLog = {
      id: `reengagement_${user.id}`,
      type: 're-engagement',
      action: 'email_reengagement',
      target: user.email,
      status: sent ? 'success' : 'error',
      details: sent
        ? `Email ré-engagement envoyé (${daysSinceCreation} jours d'inactivité)`
        : 'Échec envoi ré-engagement',
      timestamp: new Date(),
    }
    logs.push(entry)
    actionLogs.push(entry)

    if (sent) {
      await safeQuery(async () => {
        await prisma.usageLog.create({
          data: { userId: user.id, endpoint: '/automation/reengagement', tokens: 0, cost: 0 },
        })
      }, null)
    }
  }

  return actionLogs
}

export async function runAutoEmail(): Promise<{
  totalActions: number
  successful: number
  failed: number
  logs: AutomationLog[]
}> {
  const allLogs: AutomationLog[] = []

  const welcomeLogs = await sendWelcomeEmails()
  allLogs.push(...welcomeLogs)

  const cartLogs = await sendAbandonedCartEmails()
  allLogs.push(...cartLogs)

  const newsletterLogs = await sendWeeklyNewsletters()
  allLogs.push(...newsletterLogs)

  const reengagementLogs = await sendReengagementEmails()
  allLogs.push(...reengagementLogs)

  const successful = allLogs.filter((l) => l.status === 'success').length
  const failed = allLogs.filter((l) => l.status === 'error').length

  return {
    totalActions: allLogs.length,
    successful,
    failed,
    logs: allLogs,
  }
}

export function getAutoEmailLogs(): AutomationLog[] {
  return [...logs]
}

// ============================================================
// EMAIL: TÉLÉCHARGEMENT TEMPLATE GRATUIT
// ============================================================
export async function sendFreeTemplateEmail(to: string, templateName: string = 'NeuraStarter'): Promise<boolean> {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">Votre template est prêt ! 🎉</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Merci d'avoir téléchargé <strong>${templateName}</strong>. Voici comment démarrer :
    </p>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">✅ Inclus dans votre template</p>
      <ul style="color: #166534; font-size: 14px; margin: 8px 0 0; padding-left: 20px;">
        <li>Next.js 14 App Router</li>
        <li>Tailwind CSS</li>
        <li>Authentification de base</li>
        <li>Dashboard responsive</li>
        <li>TypeScript</li>
      </ul>
    </div>
    <h3 style="color: #1e293b; margin: 0 0 12px;">Pour commencer :</h3>
    <ol style="color: #64748b; padding-left: 20px; margin: 0 0 24px;">
      <li style="margin-bottom: 8px;">Décompressez l'archive</li>
      <li style="margin-bottom: 8px;">Installez les dépendances : <code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">npm install</code></li>
      <li style="margin-bottom: 8px;">Lancez le serveur : <code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">npm run dev</code></li>
    </ol>
    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #1e40af; font-weight: 600;">🚀 Prêt à aller plus loin ?</p>
      <p style="margin: 8px 0 12px; color: #64748b; font-size: 14px;">
        Créez un compte gratuit pour obtenir 100 crédits IA et accéder à 10 templates premium.
      </p>
      <a href="${appUrl}/register" style="display: inline-block; background: #1e40af; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
        Créer un compte gratuit
      </a>
    </div>
    <p style="color: #94a3b8; font-size: 13px; margin: 0;">
      Si vous avez des questions, répondez à cet email — nous lisons tout.
    </p>
  `
  return sendEmail(to, `${templateName} — votre template est prêt`, baseTemplate(content))
}

// ============================================================
// EMAIL: CONFIRMATION D'ACHAT
// ============================================================
export async function sendPurchaseConfirmationEmail(
  to: string,
  templateName: string,
  templatePrice: number,
  downloadUrl: string
): Promise<boolean> {
  const price = (templatePrice / 100).toFixed(2)
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">Merci pour votre achat ! 🎉</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Votre commande a été confirmée. Voici le résumé :
    </p>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <p style="margin: 0; color: #1e293b; font-weight: 600; font-size: 16px;">${templateName}</p>
          <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Template Next.js premium</p>
        </div>
        <p style="margin: 0; color: #1e293b; font-weight: 700; font-size: 18px;">${price}€</p>
      </div>
    </div>
    <a href="${downloadUrl}" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      📥 Télécharger ${templateName}
    </a>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">✅ Ce qui est inclus</p>
      <ul style="color: #166534; font-size: 14px; margin: 8px 0 0; padding-left: 20px;">
        <li>Code source complet</li>
        <li>Mises à jour gratuites</li>
        <li>Support par email</li>
        <li>Licence commerciale</li>
      </ul>
    </div>
    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #1e40af; font-weight: 600;">💡 Astuce</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
        Utilisez le code <strong>BIENVENUE20</strong> pour -20% sur votre prochain template.
      </p>
    </div>
    <p style="color: #94a3b8; font-size: 13px; margin: 0;">
      Un email de confirmation avec le lien de téléchargement a été envoyé. Conservez cet email.
    </p>
  `
  return sendEmail(to, `Confirmation — ${templateName}`, baseTemplate(content))
}

// ============================================================
// EMAIL: PARRAINAGE
// ============================================================
export async function sendReferralEmail(
  to: string,
  referrerName: string,
  referralLink: string
): Promise<boolean> {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">${referrerName} vous invite à rejoindre NeuraAPI ! 🎁</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      En utilisant ce lien, vous recevez <strong>50 crédits IA gratuits</strong> pour commencer.
    </p>
    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #7c3aed; font-weight: 600;">🎁 Votre bonus de bienvenue</p>
      <ul style="color: #64748b; font-size: 14px; margin: 8px 0 0; padding-left: 20px;">
        <li>50 crédits IA gratuits</li>
        <li>Accès à 8+ endpoints IA</li>
        <li>SDK TypeScript complet</li>
        <li>Sans carte bancaire</li>
      </ul>
    </div>
    <a href="${referralLink}" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Rejoindre NeuraAPI avec mon bonus
    </a>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">✅ Ce que vous obtenez</p>
      <ul style="color: #166534; font-size: 14px; margin: 8px 0 0; padding-left: 20px;">
        <li>10 templates Next.js premium</li>
        <li>8+ endpoints IA (GPT-4, Groq, Gemini)</li>
        <li>Support en français</li>
        <li>RGPD conforme</li>
      </ul>
    </div>
    <p style="color: #94a3b8; font-size: 13px; margin: 0;">
      ${referrerName} utilise NeuraAPI pour ses projets. Rejoignez-le !
    </p>
  `
  return sendEmail(to, `${referrerName} vous invite à rejoindre NeuraAPI`, baseTemplate(content))
}
