const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

interface LaunchAnnouncementEmailProps {
  to: string
  userName?: string
  lang?: string
}

const LAUNCH_COPY: Record<string, {
  subject: string
  heading: string
  subtitle: string
  intro: string
  feature1Title: string
  feature1Desc: string
  feature2Title: string
  feature2Desc: string
  feature3Title: string
  feature3Desc: string
  ctaText: string
  closing: string
  signature: string
}> = {
  en: {
    subject: 'Introducing AI Agents — Your Autonomous Workforce',
    heading: 'AI Agents Are Here',
    subtitle: 'Deploy intelligent agents that work 24/7',
    intro: "We're thrilled to announce the launch of NeuraAPI AI Agents — your autonomous workforce that handles repetitive tasks so you can focus on what matters.",
    feature1Title: 'Autonomous Decision-Making',
    feature1Desc: 'AI agents that make decisions, take actions, and complete tasks without human intervention. They work around the clock, learning from every interaction.',
    feature2Title: 'No-Code Setup',
    feature2Desc: 'Describe your workflow in plain English. Connect your tools. Deploy in minutes. No coding required.',
    feature3Title: '87% Faster Response Times',
    feature3Desc: 'Our customers report dramatically faster response times, fewer errors, and 3.2x ROI within the first quarter.',
    ctaText: 'Deploy Your First Agent →',
    closing: "The future of work isn't about replacing humans — it's about freeing them to do their best work.",
    signature: 'The NeuraAPI Team',
  },
  fr: {
    subject: 'Introduction des AI Agents — Votre Force de Travail Autonome',
    heading: 'Les AI Agents sont arrivés',
    subtitle: 'Déployez des agents intelligents qui travaillent 24/7',
    intro: "Nous sommes ravis de vous annoncer le lancement des AI Agents NeuraAPI — votre force de travail autonome qui gère les tâches répétitives pour que vous puissiez vous concentrer sur l'essentiel.",
    feature1Title: 'Prise de Décision Autonome',
    feature1Desc: "Des agents IA qui prennent des décisions, effectuent des actions et complètent des tâches sans intervention humaine. Ils travaillent 24h/24, en apprenant de chaque interaction.",
    feature2Title: 'Configuration Sans Code',
    feature2Desc: 'Décrivez votre flux de travail en langage naturel. Connectez vos outils. Déployez en quelques minutes.',
    feature3Title: '87% de Temps de Réponse Plus Rapide',
    feature3Desc: 'Nos clients signalent des temps de réponse nettement plus rapides, moins d\'erreurs et un ROI de 3,2x dès le premier trimestre.',
    ctaText: 'Déployez Votre Premier Agent →',
    closing: "L'avenir du travail ne consiste pas à remplacer les humains — il s'agit de les libérer pour qu'ils fassent de leur mieux.",
    signature: "L'équipe NeuraAPI",
  },
}

export function getLaunchAnnouncementHtml({ to, userName, lang = 'en' }: LaunchAnnouncementEmailProps): {
  subject: string
  html: string
} {
  const c = LAUNCH_COPY[lang] || LAUNCH_COPY.en
  const greeting = userName ? `Hi ${userName},` : 'Hi there,'

  const subject = c.subject
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px;">
      <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">${c.heading}</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">${c.subtitle}</p>
        </div>
        <div style="padding: 32px;">
          <p style="color: #64748b; margin: 0 0 16px;">${greeting}</p>
          <p style="color: #1e293b; margin: 0 0 24px; line-height: 1.6;">${c.intro}</p>

          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px; color: #166534; font-weight: 600;">✨ ${c.feature1Title}</p>
            <p style="margin: 0; color: #64748b; font-size: 14px;">${c.feature1Desc}</p>
          </div>

          <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px; color: #1e40af; font-weight: 600;">⚡ ${c.feature2Title}</p>
            <p style="margin: 0; color: #64748b; font-size: 14px;">${c.feature2Desc}</p>
          </div>

          <div style="background: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px; color: #92400e; font-weight: 600;">📊 ${c.feature3Title}</p>
            <p style="margin: 0; color: #64748b; font-size: 14px;">${c.feature3Desc}</p>
          </div>

          <a href="${appUrl}/agents" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
            ${c.ctaText}
          </a>

          <p style="color: #64748b; font-style: italic; margin: 0 0 24px; line-height: 1.6;">${c.closing}</p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
          <p style="color: #94a3b8; font-size: 13px; margin: 0;">
            ${c.signature}
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  return { subject, html }
}
