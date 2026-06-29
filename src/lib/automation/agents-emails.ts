import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

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

function email1_Welcome(userName: string): { subject: string; html: string } {
  const content = `
    <div style="text-align: center; margin-bottom: 24px;">
      <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=200&fit=crop" alt="AI Hero" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
    </div>
    <h2 style="margin: 0 0 16px; color: #1e293b;">Bienvenue ${userName} dans AI Agent Factory 🤖</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Vous venez de rejoindre la plateforme d'agents IA la plus puissante. Voici votre guide de démarrage rapide :
    </p>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 12px; color: #1e293b; font-size: 16px;">🚀 Guide de démarrage rapide</h3>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="display: flex; align-items: center;">
              <div style="background: #4F46E5; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 14px; margin-right: 12px;">1</div>
              <div>
                <strong style="color: #1e293b;">Connectez votre premier outil</strong>
                <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Intégrez Slack, Zapier ou un webhook en 2 clics</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="display: flex; align-items: center;">
              <div style="background: #4F46E5; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 14px; margin-right: 12px;">2</div>
              <div>
                <strong style="color: #1e293b;">Lancez votre premier agent</strong>
                <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Choisissez un agent et configurez-le en 5 minutes</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0;">
            <div style="display: flex; align-items: center;">
              <div style="background: #4F46E5; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 14px; margin-right: 12px;">3</div>
              <div>
                <strong style="color: #1e293b;">Mesurez vos résultats</strong>
                <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Suivez les performances dans votre dashboard</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #7c3aed; font-weight: 600;">👥 Rejoignez 2,400+ utilisateurs actifs</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
        Notre communauté est active sur Discord. Posez vos questions, partagez vos résultats.
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
      Commencer maintenant — c'est gratuit
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
      Besoin d'aide ? Répondez à cet email — nous répondons en moins de 2h.
    </p>
  `
  return { subject: 'Bienvenue dans AI Agent Factory 🤖', html: baseTemplate(content) }
}

function email2_SupportAgent(userName: string): { subject: string; html: string } {
  const content = `
    <div style="text-align: center; margin-bottom: 24px;">
      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=200&fit=crop" alt="Feature" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
    </div>
    <h2 style="margin: 0 0 16px; color: #1e293b;">${userName}, découvrez le Support Agent 💬</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Le Support Agent peut traiter 80% de vos tickets d'assistance sans aucune intervention humaine. Voici comment :
    </p>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 16px; color: #1e293b; font-size: 16px;">⚡ Fonctionnalités clés</h3>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">Réponse instantanée</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Temps de réponse moyen de 2 secondes</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">50+ langues supportées</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Répond dans la langue du client automatiquement</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0;">
            <strong style="color: #1e293b;">Escalade intelligente</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Transfère les cas complexes aux humains</p>
          </td>
        </tr>
      </table>
    </div>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="text-align: center; padding: 12px;">
            <p style="margin: 0; color: #4F46E5; font-size: 28px; font-weight: 700;">80%</p>
            <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Tickets résolus</p>
          </td>
          <td style="text-align: center; padding: 12px;">
            <p style="margin: 0; color: #4F46E5; font-size: 28px; font-weight: 700;">2s</p>
            <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Réponse moyenne</p>
          </td>
          <td style="text-align: center; padding: 12px;">
            <p style="margin: 0; color: #4F46E5; font-size: 28px; font-weight: 700;">50+</p>
            <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Langues</p>
          </td>
        </tr>
      </table>
    </div>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">⭐ Témoignage client</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px; font-style: italic;">
        "Le Support Agent a réduit nos coûts de 60% et nos clients sont plus satisfaits que jamais."
      </p>
      <p style="margin: 8px 0 0; color: #166534; font-size: 13px; font-weight: 600;">
        — Marc D., CEO @ TechShop
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
      Activer le Support Agent
    </a>
  `
  return { subject: 'Comment le Support Agent gère 80% des tickets', html: baseTemplate(content) }
}

function email3_SuccessStory(userName: string): { subject: string; html: string } {
  const content = `
    <div style="text-align: center; margin-bottom: 24px;">
      <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=200&fit=crop" alt="Success" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
    </div>
    <h2 style="margin: 0 0 16px; color: #1e293b;">Comment Sarah a transformé son business 🚀</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      ${userName}, voici l'histoire de Sarah, fondatrice d'une agence marketing qui a utilisé AI Agent Factory pour automatiser 70% de ses tâches répétitives.
    </p>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 12px; color: #1e293b;">📊 Les résultats en chiffres</h3>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">Avant AI Agent Factory</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">40h/semaine sur des tâches manuelles, 3 employés dédiés</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0;">
            <strong style="color: #166534;">Après AI Agent Factory</strong>
            <p style="margin: 2px 0 0; color: #166534; font-size: 13px;">12h/semaine, 0 employé dédié, revenue +45%</p>
          </td>
        </tr>
      </table>
    </div>
    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #7c3aed; font-weight: 600;">💬 Témoignage</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px; font-style: italic;">
        "J'ai réduit mes coûts de 60% et je me concentre enfin sur la croissance. Les agents gèrent le reste."
      </p>
      <p style="margin: 8px 0 0; color: #7c3aed; font-size: 13px; font-weight: 600;">
        — Sarah M., Fondatrice @ GrowthLab
      </p>
    </div>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">✅ Agents utilisés par Sarah</p>
      <ul style="color: #166534; font-size: 14px; margin: 8px 0 0; padding-left: 20px;">
        <li>Support Agent — 80% des tickets gérés automatiquement</li>
        <li>Lead Generation — 3x plus de prospects qualifiés</li>
        <li>Content Agent — 5x plus de contenu produit</li>
      </ul>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
      Obtenir les mêmes résultats
    </a>
  `
  return { subject: 'Comment Sarah a transformé son business', html: baseTemplate(content) }
}

function email4_UpgradePro(userName: string): { subject: string; html: string } {
  const content = `
    <div style="text-align: center; margin-bottom: 24px;">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=200&fit=crop" alt="Upgrade" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
    </div>
    <h2 style="margin: 0 0 16px; color: #1e293b;">${userName}, passez à Pro 🚀</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Vous utilisez AI Agent Factory depuis quelques jours. Voici ce que le plan Pro vous apporte pour aller plus loin.
    </p>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
        <thead>
          <tr style="background: #f1f5f9;">
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e2e8f0; color: #64748b; font-size: 13px;"></th>
            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e2e8f0; color: #64748b; font-size: 13px;">Gratuit</th>
            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e2e8f0; color: #4F46E5; font-size: 13px;">Pro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">Agents disponibles</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; text-align: center;">1</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #4F46E5; font-size: 14px; text-align: center; font-weight: 600;">3</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">Intégrations</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; text-align: center;">Basique</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #4F46E5; font-size: 14px; text-align: center; font-weight: 600;">Avancées</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">Support prioritaire</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; text-align: center;">—</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #4F46E5; font-size: 14px; text-align: center; font-weight: 600;">✅</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; color: #1e293b; font-size: 14px;">Prix</td>
            <td style="padding: 10px 12px; color: #64748b; font-size: 14px; text-align: center;">Gratuit</td>
            <td style="padding: 10px 12px; color: #4F46E5; font-size: 14px; text-align: center; font-weight: 600;">29€/mois</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">👥 2,400+ entreprises nous font confiance</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
        Rejoignez les entreprises qui ont transformé leur productivité avec AI Agent Factory.
      </p>
    </div>
    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #7c3aed; font-weight: 600;">🎁 Offre spéciale — -30% le premier mois</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
        Code <strong style="color: #7c3aed;">AGENTS30</strong> — 29€ → 20,30€
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
      Passer à Pro maintenant
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
      Sans engagement — annulez quand vous voulez
    </p>
  `
  return { subject: 'Passez à Pro — accédez à 3 agents', html: baseTemplate(content) }
}

function email5_LastChance(userName: string): { subject: string; html: string } {
  const content = `
    <div style="background: linear-gradient(135deg, #dc2626, #ea580c); padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
      <h2 style="color: white; margin: 0 0 8px; font-size: 20px;">⏰ Dernière chance</h2>
      <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">
        L'offre -30% expire dans 24 heures
      </p>
    </div>
    <h2 style="margin: 0 0 16px; color: #1e293b;">${userName}, ne manquez pas cette offre ⏰</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      C'est le dernier rappel. L'offre de lancement AI Agent Factory avec -30% sur le plan Pro expire demain.
    </p>
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #991b1b; font-weight: 600;">⚠️ Offre expire demain — Pas de prolongation</p>
    </div>
    <h3 style="color: #1e293b; margin: 0 0 12px;">Ce que vous obtenez avec Pro :</h3>
    <ul style="color: #64748b; padding-left: 20px; margin: 0 0 16px;">
      <li style="margin-bottom: 8px;"><strong>3 agents IA</strong> au lieu d'un seul</li>
      <li style="margin-bottom: 8px;"><strong>Support prioritaire</strong> par email</li>
      <li style="margin-bottom: 8px;"><strong>Intégrations avancées</strong> (Slack, Zapier, webhooks)</li>
      <li style="margin-bottom: 8px;"><strong>Analytics détaillés</strong> sur chaque agent</li>
      <li style="margin-bottom: 8px;"><strong>Sans engagement</strong> — annulez quand vous voulez</li>
    </ul>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">👥 2,400+ entreprises ont déjà fait le pas</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
        Rejoignez-les et transformez votre productivité dès aujourd'hui.
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #dc2626; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);">
      Profiter de -30% avant qu'il ne soit trop tard
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
      Code promo : <strong>AGENTS30</strong> — entrez-le lors du paiement
    </p>
  `
  return { subject: 'Dernière chance — offre -30% expire demain', html: baseTemplate(content) }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const DELAY_DAY = 24 * 60 * 60 * 1000

export async function sendAgentsOnboardingSequence(userEmail: string, userName?: string): Promise<void> {
  const name = userName || userEmail.split('@')[0]

  const emails = [
    { delay: DELAY_DAY, fn: () => email1_Welcome(name) },
    { delay: 2 * DELAY_DAY, fn: () => email2_SupportAgent(name) },
    { delay: 3 * DELAY_DAY, fn: () => email3_SuccessStory(name) },
    { delay: 5 * DELAY_DAY, fn: () => email4_UpgradePro(name) },
    { delay: 7 * DELAY_DAY, fn: () => email5_LastChance(name) },
  ]

  for (const { delay, fn } of emails) {
    await sleep(delay)
    const { subject, html } = fn()
    await sendEmail(userEmail, subject, html)
  }
}

// ============================================================
// WIN-BACK SEQUENCE FOR INACTIVE USERS
// ============================================================
function emailWinBack1(userName: string, daysInactive: number): { subject: string; html: string } {
  const content = `
    <div style="text-align: center; margin-bottom: 24px;">
      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=200&fit=crop" alt="We miss you" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
    </div>
    <h2 style="margin: 0 0 16px; color: #1e293b;">${userName}, nous vous avons manqué ! 💜</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Cela fait ${daysInactive} jours que vous n'avez pas utilisé AI Agent Factory. Voici ce qui a changé :
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
        Utilisez le code <strong style="color: #7c3aed;">RETOUR100</strong> pour recevoir 100 crédits IA gratuits.
      </p>
    </div>
    <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
      Reprendre là où vous en étiez
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
      Code promo : <strong>RETOUR100</strong> — valable 7 jours
    </p>
  `
  return { subject: `${userName}, nous vous avons manqué !`, html: baseTemplate(content) }
}

function emailWinBack2(userName: string): { subject: string; html: string } {
  const content = `
    <div style="text-align: center; margin-bottom: 24px;">
      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=200&fit=crop" alt="Special offer" style="width: 100%; max-width: 536px; height: 160px; object-fit: cover; border-radius: 12px;" />
    </div>
    <h2 style="margin: 0 0 16px; color: #1e293b;">Offre exclusive pour ${userName} 🎁</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Pour vous faire revenir, nous vous offrons <strong>-40% sur le plan Pro</strong> pendant 3 mois.
    </p>
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #991b1b; font-weight: 600;">🔥 Offre exclusive — Valable 72 heures</p>
      <p style="margin: 8px 0 0; color: #991b1b; font-size: 14px;">
        Code <strong>RETOUR40</strong> — 29€ → 17,40€/mois pendant 3 mois
      </p>
    </div>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">✅ Ce que vous obtenez</p>
      <ul style="color: #166534; font-size: 14px; margin: 8px 0 0; padding-left: 20px;">
        <li>3 agents IA au lieu d'un seul</li>
        <li>Support prioritaire</li>
        <li>Intégrations avancées</li>
        <li>Analytics détaillés</li>
      </ul>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
      Profiter de -40% maintenant
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
      Code promo : <strong>RETOUR40</strong> — valable 72 heures
    </p>
  `
  return { subject: `Offre exclusive : -40% sur le plan Pro`, html: baseTemplate(content) }
}

function emailWinBack3(userName: string): { subject: string; html: string } {
  const content = `
    <div style="background: linear-gradient(135deg, #dc2626, #ea580c); padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
      <h2 style="color: white; margin: 0 0 8px; font-size: 20px;">⏰ Dernière chance</h2>
      <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">
        Votre offre expire dans 24 heures
      </p>
    </div>
    <h2 style="margin: 0 0 16px; color: #1e293b;">${userName}, c'est votre dernier rappel</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Votre offre exclusive de -40% sur le plan Pro expire demain. Après cela, le prix revient à 29€/mois.
    </p>
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #991b1b; font-weight: 600;">⚠️ Offre expire demain — Pas de prolongation</p>
    </div>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">👥 2,400+ entreprises nous font confiance</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
        Ne manquez pas l'occasion de transformer votre productivité.
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #dc2626; color: white; text-align: center; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);">
      Profiter de -40% avant qu'il ne soit trop tard
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
      Code promo : <strong>RETOUR40</strong> — valable 24 heures
    </p>
  `
  return { subject: `${userName}, dernière chance — -40% expire demain`, html: baseTemplate(content) }
}

export async function sendWinBackSequence(userEmail: string, userName?: string, daysInactive: number = 14): Promise<void> {
  const name = userName || userEmail.split('@')[0]

  const emails = [
    { delay: 0, fn: () => emailWinBack1(name, daysInactive) },
    { delay: 7 * DELAY_DAY, fn: () => emailWinBack2(name) },
    { delay: 16 * DELAY_DAY, fn: () => emailWinBack3(name) },
  ]

  for (const { delay, fn } of emails) {
    if (delay > 0) {
      await sleep(delay)
    }
    const { subject, html } = fn()
    await sendEmail(userEmail, subject, html)
  }
}
