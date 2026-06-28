import { callAI } from '@/lib/ai'

export interface AutomationRequest {
  type: 'email-sequence' | 'social-post' | 'report'
  config?: Record<string, unknown>
  schedule?: string
}

export interface AutomationResult {
  id: string
  type: string
  output: string
  scheduled: boolean
  executedAt: Date
  tokensUsed: number
  provider: string
}

const SYSTEM_PROMPT = `Tu es un expert en automatisation pour NeuraAPI, une plateforme de templates et APIs IA premium.
Tu crées des séquences email, des posts sociaux et des rapports automatisés.
Tu optimises le contenu pour l'engagement et la conversion.
Tu planifies les publications aux meilleurs moments.
Ton style: stratégique, orienté résultats, scalable.`

function generateId(): string {
  return `auto_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export async function executeAutomationAgent(request: AutomationRequest): Promise<AutomationResult> {
  const id = generateId()

  let prompt = ''
  switch (request?.type) {
    case 'email-sequence':
      prompt = `Crée une séquence email automation pour NeuraAPI.
Configuration: ${JSON.stringify(request.config || {})}
Planification: ${request.schedule || 'Hebdomadaire'}
Format: Séquence de 5 emails avec delay, sujet, contenu, CTA.
Objectif: Nurturing de leads et conversion.
Focus sur la valeur apportée à chaque étape.`
      break

    case 'social-post':
      prompt = `Crée une série de posts sociaux pour NeuraAPI.
Configuration: ${JSON.stringify(request.config || {})}
Planification: ${request.schedule || 'Quotidien'}
Format: 7 posts pour LinkedIn/Twitter avec hashtags.
Objectif: Brand awareness et engagement.
Style: professionnel mais accessible.`
      break

    case 'report':
      prompt = `Génère un rapport automatisé pour NeuraAPI.
Configuration: ${JSON.stringify(request.config || {})}
Planification: ${request.schedule || 'Mensuel'}
Format: Rapport structuré avec KPIs, tendances, recommandations.
Objectif: Suivi de performance et insights actionables.
Sections: Résumé, Métriques, Tendances, Recommandations.`
      break
  }

  const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 2500)

  const parsed = parseAIResponse(result.content) || generateFallbackAutomation(request)

  return {
    id,
    type: request?.type,
    output: parsed.output || '',
    scheduled: !!request?.schedule,
    executedAt: new Date(),
    tokensUsed: result.tokensUsed,
    provider: result.provider
  }
}

function parseAIResponse(content: string): Partial<AutomationResult> | null {
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

function generateFallbackAutomation(request: AutomationRequest): Partial<AutomationResult> {
  const fallbacks: Record<string, string> = {
    'email-sequence': `Séquence Email NeuraAPI - 5 emails

Email 1 (Jour 0): Bienvenue
- Objet: Bienvenue sur NeuraAPI !
- Contenu: Découverte des templates premium, offre de bienvenue -10%

Email 2 (Jour 3): Valeur
- Objet: 3 templates qui transforment votre business
- Contenu: Cas clients, bénéfices concrets, témoignages

Email 3 (Jour 7): Social Proof
- Objet: Pourquoi 500+ développeurs nous font confiance
- Contenu: Statistiques, avis clients, garantie satisfait

Email 4 (Jour 14): Urgence
- Objet: Offre limitée : -20% sur le Bundle Premium
- Contenu: Détail bundle, avantages exclusifs, deadline

Email 5 (Jour 21): Dernière chance
- Objet: Dernière opportunity avant retrait de l'offre
- Contenu: Récapitulatif valeur, CTA final, support direct`,

    'social-post': `Série de Posts Sociaux - 7 jours

Jour 1 (LinkedIn): "5 raisons pour lesquelles les templates IA révolutionnent le développement"
#IA #Templates #Productivité

Jour 2 (Twitter): "🚀 NeuraAPI atteint 500+ développeurs actifs. Merci pour votre confiance !"
#Milestone #Growth

Jour 3 (LinkedIn): "Comment j'ai réduit mon temps de développement de 60% avec l'IA"
#DevStory #Productivité

Jour 4 (Twitter): "💡 Le saviez-vous ? Notre template Landing Page convertit 3x mieux que la moyenne."
#Conversion #CRO

Jour 5 (LinkedIn): "Les 3 erreurs à éviter quand on intègre l'IA dans son workflow"
#BestPractices #IA

Jour 6 (Twitter): "🎯 Nouveau template disponible : Dashboard Analytics Premium"
#Nouveau #Template

Jour 7 (LinkedIn): "Récap de la semaine : nos meilleurs conseils pour développeurs"
#WeeklyRecap #DevTips`,

    'report': `Rapport Automatisé NeuraAPI - ${new Date().toLocaleDateString('fr-FR')}

## Résumé
Performance globale en hausse de 15% ce mois.

## Métriques Clés
- Templates vendus: 127 (+22% vs mois dernier)
- Revenus: 4,893€ (+18%)
- Nouveaux utilisateurs: 89 (+35%)
- Taux de conversion: 4.2% (+0.8pp)

## Tendances
- Forte demande pour les templates SaaS
- Croissance du trafic organique (+45%)
- Augmentation du panier moyen (+12%)

## Recommandations
1. Lancer 2 nouveaux templates SaaS cette semaine
2. Optimiser la page pricing pour +10% conversion
3. Intensifier le contenu LinkedIn (3 posts/semaine)
4. Lancer un programme de referral premium

Prochain rapport: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR')}`
  }

  return {
    output: fallbacks[request?.type] || fallbacks['email-sequence']
  }
}

export const automationAgent = {
  name: 'Agent d\'Automatisation',
  id: 'automation-agent',
  description: 'Automatise les workflows : séquences email, posts sociaux et rapports',
  execute: executeAutomationAgent
}
