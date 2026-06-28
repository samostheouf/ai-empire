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
    <h2 style="margin: 0 0 16px; color: #1e293b;">Bienvenue ${userName} dans AI Agent Factory 🤖</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Vous venez de rejoindre la plateforme d'agents IA la plus puissante. Voici les 6 agents à votre disposition :
    </p>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">🎯 Lead Generation Agent</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Trouvez et qualifiez des prospects automatiquement</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">💬 Support Agent</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Gérez 80% des tickets sans intervention humaine</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">✍️ Content Agent</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Générez du contenu optimisé SEO en quelques secondes</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">📧 Email Agent</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Automatisez vos séquences email personnalisées</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">📊 Analytics Agent</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Analysez vos données et recevez des insights actionnables</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0;">
            <strong style="color: #1e293b;">🔗 API Agent</strong>
            <p style="margin: 2px 0 0; color: #64748b; font-size: 13px;">Connectez et orchestrez vos APIs en un clic</p>
          </td>
        </tr>
      </table>
    </div>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">🚀 Par où commencer ?</p>
      <p style="margin: 8px 0 0; color: #166534; font-size: 14px;">
        Essayez votre premier agent dès maintenant — c'est gratuit.
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Essayer mon premier agent
    </a>
  `
  return { subject: 'Bienvenue dans AI Agent Factory 🤖', html: baseTemplate(content) }
}

function email2_SupportAgent(userName: string): { subject: string; html: string } {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">Comment le Support Agent gère 80% des tickets 💬</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      ${userName}, saviez-vous que le Support Agent peut traiter la majorité de vos tickets d'assistance sans aucune intervention humaine ?
    </p>
    <h3 style="color: #1e293b; margin: 0 0 12px;">Ce que fait le Support Agent :</h3>
    <ul style="color: #64748b; padding-left: 20px; margin: 0 0 16px;">
      <li style="margin-bottom: 8px;"><strong>Réponse instantanée</strong> — Temps de réponse moyen de 2 secondes</li>
      <li style="margin-bottom: 8px;"><strong>80% de résolution automatique</strong> — Les questions courantes sont traitées sans humain</li>
      <li style="margin-bottom: 8px;"><strong>50+ langues supportées</strong> — Répond dans la langue du client</li>
      <li style="margin-bottom: 8px;"><strong>Disponible 24/7</strong> — Aucun temps d'arrêt, aucune pause café</li>
      <li style="margin-bottom: 8px;"><strong>Escalade intelligente</strong> — Transfère les cas complexes aux humains</li>
    </ul>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="text-align: center; padding: 12px;">
            <p style="margin: 0; color: #4F46E5; font-size: 28px; font-weight: 700;">80%</p>
            <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Tickets résolus automatiquement</p>
          </td>
          <td style="text-align: center; padding: 12px;">
            <p style="margin: 0; color: #4F46E5; font-size: 28px; font-weight: 700;">2s</p>
            <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Temps de réponse moyen</p>
          </td>
          <td style="text-align: center; padding: 12px;">
            <p style="margin: 0; color: #4F46E5; font-size: 28px; font-weight: 700;">50+</p>
            <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Langues supportées</p>
          </td>
        </tr>
      </table>
    </div>
    <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #c2410c; font-weight: 600;">💡 Résultat client</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
        Un e-commerce a réduit ses coûts support de 60% en activant le Support Agent. Les clients sont plus satisfaits et l'équipe se concentre sur l'essentiel.
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Activer le Support Agent
    </a>
  `
  return { subject: 'Comment le Support Agent gère 80% des tickets', html: baseTemplate(content) }
}

function email3_TopAgents(userName: string): { subject: string; html: string } {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">Les 3 agents les plus populaires (+ cas clients) 🏆</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      ${userName}, voici les agents les plus utilisés par nos clients et les résultats concrets qu'ils obtiennent.
    </p>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
      <h3 style="margin: 0 0 8px; color: #1e293b;">🥇 #1 — Support Agent</h3>
      <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">
        Gestion automatique du support client. Répond aux questions, résout les problèmes, escalade si nécessaire.
      </p>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 12px; margin-bottom: 8px;">
        <p style="margin: 0; color: #166534; font-size: 14px;">
          <strong>Cas client :</strong> SaaS B2B — a réduit les tickets support de 73% et augmenté la satisfaction client de 40%
        </p>
      </div>
    </div>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
      <h3 style="margin: 0 0 8px; color: #1e293b;">🥈 #2 — Lead Generation Agent</h3>
      <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">
        Trouve et qualifie des prospects ciblés. Enrichit les données de contact et score automatiquement.
      </p>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 12px; margin-bottom: 8px;">
        <p style="margin: 0; color: #166534; font-size: 14px;">
          <strong>Cas client :</strong> Agence marketing — génère 3x plus de leads qualifiés avec 50% moins d'effort manuel
        </p>
      </div>
    </div>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 8px; color: #1e293b;">🥉 #3 — Content Agent</h3>
      <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">
        Crée du contenu optimisé SEO, articles de blog, descriptions produits et posts réseaux sociaux.
      </p>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 12px; margin-bottom: 8px;">
        <p style="margin: 0; color: #166534; font-size: 14px;">
          <strong>Cas client :</strong> Site e-commerce — a multiplié par 5 sa production de contenu tout en améliorant son référencement
        </p>
      </div>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Découvrir tous les agents
    </a>
  `
  return { subject: 'Les 3 agents les plus populaires (+ cas clients)', html: baseTemplate(content) }
}

function email4_UpgradePro(userName: string): { subject: string; html: string } {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">Passez à Pro — accédez à 3 agents 🚀</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      ${userName}, vous utilisez AI Agent Factory depuis quelques jours. Voici ce que le plan Pro vous apporte.
    </p>
    <div style="margin-bottom: 24px;">
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
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">Mois d'utilisation</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; text-align: center;">Illimité</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #4F46E5; font-size: 14px; text-align: center; font-weight: 600;">Illimité</td>
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
      <p style="margin: 0; color: #166534; font-weight: 600;">💰 ROI moyen de nos clients Pro</p>
      <ul style="color: #166534; font-size: 14px; margin: 8px 0 0; padding-left: 20px;">
        <li>Économie de 20h/semaine sur les tâches répétitives</li>
        <li>Réduction de 60% des coûts opérationnels</li>
        <li>Augmentation de 35% du taux de conversion</li>
      </ul>
    </div>
    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #7c3aed; font-weight: 600;">🎁 Offre spéciale lancement</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">
        Utilisez le code <strong style="color: #7c3aed;">AGENTS30</strong> pour obtenir <strong>-30% sur votre premier mois</strong>.
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Passer à Pro maintenant
    </a>
  `
  return { subject: 'Passez à Pro — accédez à 3 agents', html: baseTemplate(content) }
}

function email5_LastChance(userName: string): { subject: string; html: string } {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">Dernière chance — offre lancement -30% expire demain ⏰</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      ${userName}, c'est le dernier rappel. L'offre de lancement AI Agent Factory avec -30% sur le plan Pro expire dans 24 heures.
    </p>
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #991b1b; font-weight: 600;">⚠️ Offre expire demain</p>
      <p style="margin: 8px 0 0; color: #991b1b; font-size: 14px;">
        Code <strong>AGENTS30</strong> — -30% sur votre premier mois Pro (29€ → 20,30€)
      </p>
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
      <p style="margin: 0; color: #166534; font-weight: 600;">⏱️ Temps restant</p>
      <p style="margin: 8px 0 0; color: #166534; font-size: 14px;">
        Cette offre disparaît après demain. Pas de prolongation, pas d'exception.
      </p>
    </div>
    <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Profiter de l'offre -30% avant qu'il ne soit trop tard
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
      Code promo : <strong>AGENTS30</strong> — entrez-le lors du paiement
    </p>
  `
  return { subject: 'Dernière chance — offre lancement -30% expire demain', html: baseTemplate(content) }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const DELAY_DAY = 24 * 60 * 60 * 1000

export async function sendAgentsOnboardingSequence(userEmail: string, userName?: string): Promise<void> {
  const name = userName || userEmail.split('@')[0]

  const emails = [
    { delay: 0, fn: () => email1_Welcome(name) },
    { delay: 2 * DELAY_DAY, fn: () => email2_SupportAgent(name) },
    { delay: 5 * DELAY_DAY, fn: () => email3_TopAgents(name) },
    { delay: 10 * DELAY_DAY, fn: () => email4_UpgradePro(name) },
    { delay: 21 * DELAY_DAY, fn: () => email5_LastChance(name) },
  ]

  for (const { delay, fn } of emails) {
    if (delay > 0) {
      await sleep(delay)
    }
    const { subject, html } = fn()
    await sendEmail(userEmail, subject, html)
  }
}
