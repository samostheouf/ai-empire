import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

interface EmailOptions {
  to: string
  subject: string
  html: string
}

async function sendEmail({ to, subject, html }: EmailOptions) {
  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
    to,
    subject,
    html,
  })

  if (error) {
    return { success: false, error }
  }

  return { success: true, data }
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

export interface WelcomeEmailData {
  to: string
  name: string
}

export async function sendWelcomeEmail1({ to, name }: WelcomeEmailData) {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">Bienvenue ${name} ! 🎉</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Merci de rejoindre NeuraAPI. Vous avez maintenant accès à des APIs IA puissantes et des templates premium.
    </p>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">✅ Votre compte est actif</p>
      <p style="margin: 8px 0 0; color: #166534; font-size: 14px;">100 crédits offerts pour commencer</p>
    </div>
    <h3 style="color: #1e293b; margin: 0 0 12px;">Pour commencer :</h3>
    <ul style="color: #64748b; padding-left: 20px; margin: 0 0 24px;">
      <li style="margin-bottom: 8px;">Récupérez votre clé API dans le dashboard</li>
      <li style="margin-bottom: 8px;">Consultez la documentation rapide</li>
      <li style="margin-bottom: 8px;">Faites votre première requête API</li>
    </ul>
    <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Accéder au Dashboard
    </a>
  `
  return sendEmail({ to, subject: 'Bienvenue sur NeuraAPI ! Vos crédits gratuits vous attendent', html: baseTemplate(content) })
}

export async function sendWelcomeEmail2({ to, name }: WelcomeEmailData) {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">${name}, découvrez nos APIs IA 🚀</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Voici ce que vous pouvez créer avec NeuraAPI dès maintenant :
    </p>
    <div style="border-left: 4px solid #4F46E5; padding-left: 16px; margin-bottom: 16px;">
      <h4 style="color: #1e293b; margin: 0 0 4px;">Génération de contenu</h4>
      <p style="color: #64748b; margin: 0; font-size: 14px;">Articles, descriptions produits, posts réseaux sociaux</p>
    </div>
    <div style="border-left: 4px solid #7C3AED; padding-left: 16px; margin-bottom: 16px;">
      <h4 style="color: #1e293b; margin: 0 0 4px;">Analyse de texte</h4>
      <p style="color: #64748b; margin: 0; font-size: 14px;">Sentiment, résumé, classification automatique</p>
    </div>
    <div style="border-left: 4px solid #2563eb; padding-left: 16px; margin-bottom: 24px;">
      <h4 style="color: #1e293b; margin: 0 0 4px;">Assistant conversationnel</h4>
      <p style="color: #64748b; margin: 0; font-size: 14px;">Chatbots, support client, FAQ automatique</p>
    </div>
    <a href="${appUrl}/docs" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Voir la Documentation
    </a>
  `
  return sendEmail({ to, subject: 'Découvrez ce que vous pouvez créer avec NeuraAPI', html: baseTemplate(content) })
}

export async function sendWelcomeEmail3({ to, name }: WelcomeEmailData) {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">${name}, boostez votre productivité 💡</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Voici 3 astuces pour tirer le meilleur parti de NeuraAPI :
    </p>
    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
      <p style="margin: 0; color: #7c3aed; font-weight: 600;">1. Utilisez les webhooks</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">Automatisez vos workflows avec des notifications en temps réel</p>
    </div>
    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
      <p style="margin: 0; color: #2563eb; font-weight: 600;">2. Intégrez nos templates</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">Gagnez du temps avec nos templates Next.js prêts à l'emploi</p>
    </div>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">3. Invitez vos collègues</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">Gagnez 50 crédits supplémentaires pour chaque parrainage</p>
    </div>
    <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Découvrir les Templates
    </a>
  `
  return sendEmail({ to, subject: '3 astuces pour maîtriser NeuraAPI', html: baseTemplate(content) })
}

export interface AbandonedCartData {
  to: string
  templateName: string
  templatePrice: number
  templateSlug: string
}

export async function sendAbandonedCartEmail({ to, templateName, templatePrice, templateSlug }: AbandonedCartData) {
  const price = (templatePrice / 100).toFixed(2)
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">Vous avez laissé un template dans votre panier 🛒</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Le template <strong>${templateName}</strong> vous attend toujours !
    </p>
    <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #c2410c; font-weight: 600;">Offre spéciale : -20% avec le code RETOUR20</p>
      <p style="margin: 8px 0 0; color: #c2410c; font-size: 14px;">Valable 48 heures</p>
    </div>
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
      <div style="flex: 1;">
        <h3 style="margin: 0; color: #1e293b;">${templateName}</h3>
        <p style="margin: 4px 0 0; color: #64748b;">${price}€</p>
      </div>
    </div>
    <a href="${appUrl}/templates/${templateSlug}" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Finaliser mon achat
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
      Code promo : <strong>RETOUR20</strong> (appliqué automatiquement)
    </p>
  `
  return sendEmail({ to, subject: `${templateName} vous attend toujours !`, html: baseTemplate(content) })
}

export interface NewsletterData {
  to: string
  subject: string
  content: {
    title: string
    intro: string
    articles: Array<{
      title: string
      description: string
      url: string
    }>
    ctaText: string
    ctaUrl: string
  }
}

export async function sendNewsletter({ to, subject, content }: NewsletterData) {
  const articlesHtml = content.articles
    .map(
      (article) => `
      <div style="border-bottom: 1px solid #e2e8f0; padding: 16px 0;">
        <h4 style="margin: 0 0 8px; color: #1e293b;">${article.title}</h4>
        <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">${article.description}</p>
        <a href="${article.url}" style="color: #4F46E5; font-size: 14px; text-decoration: none;">Lire l'article →</a>
      </div>
    `
    )
    .join('')

  const emailContent = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">${content.title}</h2>
    <p style="color: #64748b; margin: 0 0 24px;">${content.intro}</p>
    ${articlesHtml}
    <div style="text-align: center; margin-top: 24px;">
      <a href="${content.ctaUrl}" style="display: inline-block; background: #4F46E5; color: white; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
        ${content.ctaText}
      </a>
    </div>
  `
  return sendEmail({ to, subject, html: baseTemplate(emailContent) })
}

export interface LaunchEmailData {
  to: string
  productName: string
  productDescription: string
  productUrl: string
  launchPrice: number
}

export async function sendProductLaunchEmail({ to, productName, productDescription, productUrl, launchPrice }: LaunchEmailData) {
  const price = (launchPrice / 100).toFixed(2)
  const content = `
    <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); border-radius: 8px; padding: 24px; text-align: center; margin-bottom: 24px;">
      <p style="color: rgba(255,255,255,0.8); margin: 0 0 8px; font-size: 14px;">Nouveau lancement 🚀</p>
      <h2 style="color: white; margin: 0;">${productName}</h2>
    </div>
    <p style="color: #64748b; margin: 0 0 16px;">${productDescription}</p>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; text-align: center; margin-bottom: 24px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">Prix de lancement : ${price}€</p>
      <p style="margin: 4px 0 0; color: #166534; font-size: 14px;">Offre limitée pour les premiers adoptants</p>
    </div>
    <a href="${productUrl}" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Découvrir maintenant
    </a>
  `
  return sendEmail({ to, subject: `Nouveau : ${productName} est arrivé !`, html: baseTemplate(content) })
}

export interface ReengagementData {
  to: string
  name: string
  lastActivity: string
}

export async function sendReengagementEmail({ to, name, lastActivity }: ReengagementData) {
  const content = `
    <h2 style="margin: 0 0 16px; color: #1e293b;">${name}, nous vous avons manqué ! 💜</h2>
    <p style="color: #64748b; margin: 0 0 16px;">
      Cela fait un moment que vous n'avez pas utilisé NeuraAPI. Voici ce qui a changé :
    </p>
    <ul style="color: #64748b; padding-left: 20px; margin: 0 0 16px;">
      <li style="margin-bottom: 8px;">Nouvelles APIs disponibles</li>
      <li style="margin-bottom: 8px;">Templates premium ajoutés</li>
      <li style="margin-bottom: 8px;"> performances améliorées</li>
    </ul>
    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #7c3aed; font-weight: 600;">Offre de retour : +100 crédits gratuits</p>
      <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">Utilisez le code BIENVENUE100</p>
    </div>
    <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
      Reprendre là où vous en étiez
    </a>
  `
  return sendEmail({ to, subject: `${name}, vos crédits gratuits vous attendent !`, html: baseTemplate(content) })
}
