import { callAI } from '@/lib/ai'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface SalesRequest {
  type: 'welcome' | 'abandoned-cart' | 'upsell' | 'referral'
  customerEmail?: string
  customerName?: string
  cartItems?: CartItem[]
  purchaseHistory?: PurchaseRecord[]
  referralCode?: string
}

export interface CartItem {
  id: string
  name: string
  price: number
}

export interface PurchaseRecord {
  templateId: string
  templateName: string
  price: number
  purchasedAt: Date
}

export interface SalesResult {
  id: string
  type: string
  emailSent: boolean
  subject: string
  content: string
  sequence?: EmailSequence[]
  executedAt: Date
  tokensUsed: number
  provider: string
}

export interface EmailSequence {
  delay: number
  subject: string
  content: string
  cta: string
}

const SYSTEM_PROMPT = `Tu es un expert en vente et conversion pour NeuraAPI, une plateforme de templates et APIs IA premium.
Tu crées des séquences email automation efficaces en français.
Ton style: personnel, orienté valeur, non agressif. Tu focus sur les bénéfices, pas les features.
Tu incluts toujours un CTA clair et une offre pertinente.`

function generateId(): string {
  return `sales_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function executeSalesAgent(request: SalesRequest): Promise<SalesResult> {
  const id = generateId()

  let prompt = ''
  switch (request?.type) {
    case 'welcome':
      prompt = `Crée un email de bienvenue pour un nouvel inscrit à NeuraAPI.
Nom: ${request.customerName || 'Client'}
Objectif: Lui faire découvrir les templates et le convertir rapidement.
Inclus: offres de bienvenue, lien vers les meilleurs templates, support.
Format: Objet email + corps email HTML.`
      break

    case 'abandoned-cart':
      prompt = `Crée une séquence de relance panier abandonné pour NeuraAPI.
Client: ${request.customerName || 'Client'}
Articles abandonnés: ${request?.cartItems?.map(i => `${i.name} (${i.price/100}€)`).join(', ') || 'Template premium'}
Séquence: 3 emails sur 7 jours.
Format: [{delay, subject, content, cta}]`
      break

    case 'upsell':
      prompt = `Propose un upsell pertinent pour un client NeuraAPI.
Achats: ${request?.purchaseHistory?.map(p => p.templateName).join(', ') || 'Template Landing Page'}
Objectif: Augmenter la valeur moyenne de commande.
Format: Email personnalisé avec recommandation + offre spéciale.`
      break

    case 'referral':
      prompt = `Crée le contenu pour le programme de parrainage NeuraAPI.
Code parrain: ${request?.referralCode || 'AMI-2024'}
Objectif: Encourager le parrainage avec une offre attractive.
Format: Email activation + Landing page copy.
Offre: -20% pour le parrain et le filleul.`
      break
  }

  const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 2000)

  const parsed = parseAIResponse(result.content) || generateFallbackSales(request)

  let emailSent = false
  if (request?.customerEmail && request?.type === 'welcome') {
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
        to: request?.customerEmail,
        subject: parsed.subject || '',
        html: buildEmailHTML(parsed.content || '', request.customerName)
      })
      emailSent = true
    } catch (error) {
    }
  }

  return {
    id,
    type: request?.type,
    emailSent,
    subject: parsed.subject || '',
    content: parsed.content || '',
    sequence: parsed.sequence,
    executedAt: new Date(),
    tokensUsed: result.tokensUsed,
    provider: result.provider
  }
}

function parseAIResponse(content: string): Partial<SalesResult> | null {
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
  } catch {
    // Fallback
  }
  return null
}

function buildEmailHTML(content: string, name?: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px 20px;">
      <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
        </div>
        <div style="padding: 32px;">
          <p style="color: #1e293b; margin: 0 0 16px;">Bonjour ${name || 'CLIENT'},</p>
          <div style="color: #64748b; line-height: 1.6; margin-bottom: 24px;">
            ${content.split('\n').map(l => `<p style="margin: 0 0 12px;">${l}</p>`).join('')}
          </div>
          <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
            Découvrir nos templates →
          </a>
          <p style="color: #94a3b8; font-size: 13px; margin: 24px 0 0;">
            L'équipe NeuraAPI
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateFallbackSales(request: SalesRequest): Partial<SalesResult> {
  const fallbacks: Record<string, Partial<SalesResult>> = {
    welcome: {
      subject: '🎉 Bienvenue sur NeuraAPI ! Votre offre de -10% vous attend',
      content: `Bienvenue sur NeuraAPI !\n\nPour célébrer votre arrivée, voici une offre exclusive :\n\n🔥 -10% sur votre premier template avec le code BIENVENUE10\n\nNos templates les plus populaires :\n- Landing Page SaaS (29€)\n- Dashboard Admin (39€)\n- Blog Next.js (24€)\n\nChaque template est livré avec :\n✅ Documentation complète\n✅ Support prioritaire\n✅ Mises à gratuites\n\nN'hésitez pas si vous avez des questions !`
    },
    'abandoned-cart': {
      subject: '🛒 Vous avez oublié quelque chose...',
      content: `Il semble que vous ayez quitté votre panier.\n\nVos articles vous attendent :\n${request?.cartItems?.map(i => `- ${i.name} (${i.price/100}€)`).join('\n') || '- Template premium'}\n\n💡 Saviez-vous que 93% de nos clients recommandent nos templates ?\n\nPour vous aider à décider, voici un code exclusif : PANIER10 (-10%)\n\nCe code expire dans 48h.`,
      sequence: [
        { delay: 1, subject: 'Rappel : votre template vous attend', content: 'N\'oubliez pas votre sélection...', cta: 'Finaliser l\'achat' },
        { delay: 3, subject: 'Offre spéciale : -15% pour 24h', content: 'Votre panier expire bientôt...', cta: 'Profiter de l\'offre' },
        { delay: 7, subject: 'Dernière chance : -20% aujourd\'hui', content: 'Offre finale et exclusive...', cta: 'Acheter maintenant' }
      ]
    },
    upsell: {
      subject: '⬆️ Complétez votre collection NeuraAPI',
      content: `Bonjour !\n\nJ'ai remarqué que vous avez acheté ${request?.purchaseHistory?.[0]?.templateName || 'un template'}.\n\nPour aller plus loin, je vous recommande :\n\n🎯 Bundle Complet (-30%)\n- Tous nos templates premium\n- Support VIP\n- Mises à vie\n\n💰 Valeur totale : 199€\n🏷️ Prix bundle : 139€\n\nCette offre est valable 7 jours.\n\nBesoin d'aide ? Répondez à cet email !`
    },
    referral: {
      subject: '🎁 Parrainez un ami, économisez -20%',
      content: `Merci d'utiliser NeuraAPI !\n\nVotre code de parrainage : ${request?.referralCode || 'AMI-2024'}\n\nLe principe :\n- Partagez ce code avec vos contacts\n- Votre ami obtient -20% sur sa première commande\n- Vous recevez -20% sur votre prochain achat\n\nPas de limite ! Plus vous parrainez, plus vous économisez.\n\n💡 Partagez-le maintenant : ${appUrl}/referral/${request?.referralCode || 'AMI-2024'}`
    }
  }

  return fallbacks[request?.type] || fallbacks.welcome
}

export const salesAgent = {
  name: 'Agent Commercial',
  id: 'sales-agent',
  description: 'Gère les séquences de bienvenue, relances panier abandonné, upsells et parrainages',
  execute: executeSalesAgent
}
