export interface CampaignTemplate {
  id: string
  name: string
  type: 'product-launch' | 'seasonal' | 'referral' | 'black-friday' | 'new-year'
  duration: string
  channels: string[]
  budget: string
  objective: string
  content: CampaignTemplateContent
  schedule: CampaignSchedule[]
  metrics: CampaignMetrics
}

export interface CampaignTemplateContent {
  headline: string
  subheadline: string
  body: string
  cta: string
  hashtags: string[]
  emailSubject: string
  emailBody: string
  socialPost: string
}

export interface CampaignSchedule {
  day: string
  action: string
  channel: string
}

export interface CampaignMetrics {
  targetReach: string
  targetConversion: string
  targetRevenue: string
}

// ============================================================
// CAMPAGNE DE LANCEMENT DE PRODUIT
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: 'Lancement de Produit — AI Empire',
  type: 'product-launch',
  duration: '14 jours',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: 'Générer 500 inscriptions et €3,000 de revenue au premier mois',
  content: {
    headline: '🚀 Nouveau : La révolution AI pour SaaS est arrivée !',
    subheadline: 'Lancez votre SaaS en 24h avec des templates Next.js 14 + APIs IA puissantes',
    body: `Tu rêves de lancer ton SaaS mais le développement te prend des semaines ?

AI Empire change la donne :
✅ Templates Next.js 14 professionnels — design modernes, responsive, dark mode
✅ APIs IA intégrées — GPT-4, Groq, Gemini prêts à l'emploi
✅ Stripe + Auth inclus — paiements et authentification en 5 minutes
✅ Dashboard admin complet — gère tes utilisateurs, analytics, factures

🔥 Offre de lancement : -30% sur tous les templates pendant 72h !

Rejoins les premiers utilisateurs qui ont déjà lancé leur SaaS avec AI Empire.
Ne rate pas cette opportunité — la offre expire le [DATE].`,
    cta: '🚀 Commencer maintenant — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Lancement',
      '#TemplatesWeb', '#IndieHacker', '#StartupFrance', '#TechFR', '#IA'
    ],
    emailSubject: '🚀 C\'est officiel : AI Empire est lancé ! -30% pour toi',
    emailBody: `Salut [Prénom],

Le jour J est arrivé. AI Empire est enfin live !

Ce qu'on te propose :
🎨 6 templates Next.js 14 professionnels (€49-199)
🤖 APIs IA intégrées (GPT-4, Groq, Gemini)
💳 Stripe + Auth configurés
📊 Dashboard admin complet

🎁 Offre exclusive : -30% sur tous les templates pendant 72h uniquement.

Utilise le code LAUNCH30 à la caisse.

[CTA: Découvrir les templates →]

À bientôt,
L'équipe AI Empire 🇫🇷`,
    socialPost: `🚀 AI Empire est enfin LIVE !

La plateforme qui combine :
✅ Templates Next.js 14 pro
✅ APIs IA intégrées
✅ Stripe + Auth inclus
✅ Dashboard admin

🎁 -30% pendant 72h avec le code LAUNCH30

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Lancement`
  },
  schedule: [
    { day: 'J-7', action: 'Teaser sur les réseaux', channel: 'Twitter/X, LinkedIn' },
    { day: 'J-3', action: 'Email teaser aux abonnés newsletter', channel: 'Email' },
    { day: 'J-1', action: 'Compte à rebours Instagram Stories', channel: 'Instagram' },
    { day: 'J0', action: 'Lancement officiel — post + email + ads', channel: 'Tous les canaux' },
    { day: 'J+1', action: 'Témoignages early adopters', channel: 'Twitter/X, LinkedIn' },
    { day: 'J+3', action: 'Rappel offre -30%', channel: 'Email, Twitter' },
    { day: 'J+5', action: 'Tutorial "Comment créer ton premier SaaS"', channel: 'YouTube, Blog' },
    { day: 'J+7', action: 'Fin de l\'offre -30%', channel: 'Email, Social' },
    { day: 'J+10', action: 'Étude de cas client', channel: 'LinkedIn, Blog' },
    { day: 'J+14', action: 'Bilan + témoignages', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: 'Audience cible (selon la campagne)',
    targetConversion: 'Taux de conversion 1-2%',
    targetRevenue: 'Proportionnel au budget pub'
  }
}

// ============================================================
// CAMPAGNE PROMOTION SAISONNIÈRE
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: 'Promotion Saisonnière — Printemps/Été',
  type: 'seasonal',
  duration: '21 jours',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: 'Augmenter les ventes de 40% pendant la période estivale',
  content: {
    headline: '☀️ Soldes d\'été AI Empire — Jusqu\'à -40% !',
    subheadline: 'L\'été c\'est pour décoller ton SaaS, pas pour traîner sur la plage',
    body: `L'été approche, et c'est le moment parfait pour booster ton projet !

🌞 Offres spéciales printemps/été :
- NeuraStore (template e-commerce) : €39 → €29 (-25%)
- NeuraBlog (template blog) : €29 → €19 (-35%)
- Bundle complet (6 templates) : €599 → €359 (-40%)

⚡ Pourquoi l'été ?
→ Moins de concurrence sur le marché
→ Plus de temps pour builder avant la rentrée
→ Les startups qui lancent en été arrivent en septembre avec un produit

⏱️ Offre valable du [DATE_DEBUT] au [DATE_FIN]

Utilise le code ETE2024 pour -40% sur le bundle.`,
    cta: '☀️ Profiter des soldes — -40%',
    hashtags: [
      '#AIEmpire', '#Soldes', '#Ete2024', '#SaaS', '#Templates',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ Soldes d\'été : -40% sur tous les templates AI Empire !',
    emailBody: `Salut [Prénom],

L'été arrive et on te fait une offre qu'on ne peut pas refuser ! 🌞

☀️ Offres spéciales :
- NeuraStore : €39 → €29
- NeuraBlog : €29 → €19
- Bundle 6 templates : €599 → €359

⏰ Offre valable jusqu'au [DATE_FIN]

Utilise le code ETE2024 à la caisse.

[CTA: Voir les offres →]

Passe un bel été !
L'équipe AI Empire 🇫🇷`,
    socialPost: `☀️ SOLDÉS D'ÉTÉ AI EMPIRE ☀️

-40% sur le bundle complet :
✅ 6 templates Next.js 14
✅ APIs IA intégrées
✅ Support prioritaire

Code : ETE2024
⏰ Valable jusqu'au [DATE]

👉 ai-empire-steel.vercel.app

#AIEmpire #Soldes #Ete2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'J-3', action: 'Teaser "Quelque chose arrive en été..."', channel: 'Twitter/X, Instagram' },
    { day: 'J0', action: 'Annonce officielle soldes', channel: 'Tous les canaux' },
    { day: 'J+3', action: 'Témoignage client + avant/après', channel: 'LinkedIn, Facebook' },
    { day: 'J+7', action: 'Rappel mi-parcours + stock limité', channel: 'Email' },
    { day: 'J+10', action: 'Tutorial "Lance ton SaaS cet été"', channel: 'YouTube, Blog' },
    { day: 'J+14', action: 'Derniers jours — urgence', channel: 'Tous les canaux' },
    { day: 'J+18', action: 'Dernière chance', channel: 'Email, Twitter' },
    { day: 'J+21', action: 'Fin des soldes — bilan', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000 personnes',
    targetConversion: '300 ventes (1%)',
    targetRevenue: '€10,700 (300 × €35 moy.)'
  }
}

// ============================================================
// PROGRAMME DE PARRAINAGE
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: 'Programme de Parrainage — Gagne des crédits',
  type: 'referral',
  duration: 'Permanent',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500 (crédits offerts)',
  objective: 'Croissance virale : 1 parrain = 2 nouveaux utilisateurs',
  content: {
    headline: '🎁 Parraine un ami, gagne 500 crédits IA gratuits !',
    subheadline: 'Le bouche-à-oreille est notre meilleur canal de croissance',
    body: `Tu aimes AI Empire ? Partage-le et gagne des récompenses !

🎯 Comment ça marche :
1. Partage ton lien de parrainage unique
2. Ton ami s'inscrit avec ton lien
3. Vous recevez TOUS LES DEUX 500 crédits IA gratuits !

💰 Paliers de récompenses :
- 1 filleul = 500 crédits
- 3 filleuls = 1 500 crédits + badge "Ambassadeur"
- 5 filleuls = 2 500 crédits + accès Pro 1 mois
- 10 filleuls = 5 000 crédits + accès Pro 3 mois + mention sur le site

🔗 Ton lien unique : [REFERRAL_LINK]

Partage-le sur Twitter, LinkedIn, ou envoie-le directement à tes contacts !`,
    cta: '🎁 Partager mon lien de parrainage',
    hashtags: [
      '#AIEmpire', '#Parrainage', '#Gratuit', '#IA', '#SaaS',
      '#Ambassadeur', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 Tu veux 500 crédits IA gratuits ? Parraine un ami !',
    emailBody: `Salut [Prénom],

On a une surprise pour toi ! 🎁

Parraine un ami sur AI Empire et vous recevez TOUS LES DEUX 500 crédits IA gratuits.

Ton lien unique : [REFERRAL_LINK]

🎯 Paliers :
- 1 filleul → 500 crédits
- 3 filleuls → 1 500 crédits + badge
- 5 filleuls → 2 500 crédits + Pro 1 mois
- 10 filleuls → 5 000 crédits + Pro 3 mois

Partage ton lien dès maintenant !

[CTA: Partager mon lien →]

Merci de faire partie de l'aventure ! 💜
L'équipe AI Empire`,
    socialPost: `🎁 PARRAINE UN AMI, GAGNE 500 CRÉDITS ! 🎁

Tu aimes AI Empire ? Partage-le !

✅ Ton ami s'inscrit → 500 crédits gratuits
✅ TOI tu gagnes → 500 crédits gratuits

🔗 Lien de parrainage : [REFERRAL_LINK]

5 filleuls = accès Pro 1 mois GRATUIT 🚀

#AIEmpire #Parrainage #IA #SaaS #Gratuit`
  },
  schedule: [
    { day: 'Permanent', action: 'Email de bienvenue avec lien parrainage', channel: 'Email' },
    { day: 'J+7', action: 'Rappel programme parrainage', channel: 'Email' },
    { day: 'J+30', action: "Email \"Tu n'as pas encore parrainé...\"", channel: 'Email' },
    { day: 'Permanent', action: 'Lien parrainage visible dans le dashboard', channel: 'Dashboard' },
    { day: 'Hebdo', action: 'Classement des top parrains sur Twitter', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '1 000 partages/mois',
    targetConversion: '200 nouvelles inscriptions/mois',
    targetRevenue: 'Croissance organique +40%'
  }
}

// ============================================================
// CAMPAGNE BLACK FRIDAY / CYBER MONDAY
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: 'Black Friday / Cyber Monday — AI Empire',
  type: 'black-friday',
  duration: '5 jours (Mercredi-Samedi + Cyber Monday)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: 'Maximiser la portée et les conversions',
  content: {
    headline: '🖤 BLACK FRIDAY AI EMPIRE — -50% SUR TOUT !',
    subheadline: 'La plus grosse promotion de l\'année. Ne la rate pas.',
    body: `C'est le moment de passer à l'action. Pour la première fois :

🖤 BLACK FRIDAY — -50% SUR TOUT

📦 Offres exclusives :
- NeuraStore : €39 → €19.50
- NeuraBlog : €29 → €14.50
- NeuraPortfolio : €59 → €29.50
- Bundle Premium (6 templates) : €599 → €299.50
- Plan Pro (1 an) : €1,188 → €594

⚡ Ce n'est PAS une blague. C'est LA promotion de l'année.

⏱️ Délai : Du [MERCREDI] au [LUNDI] uniquement.

🔒 Stock limité : Les 50 premiers acheteurs reçoivent un template bonus gratuit.

Code : BLACKFRIDAY50`,
    cta: '🖤 Profiter de -50% maintenant',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Soldes',
      '#Promo', '#SaaS', '#Templates', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 BLACK FRIDAY : -50% sur tout AI Empire — 5 jours seulement !',
    emailBody: `Salut [Prénom],

C'est officiel. Le Black Friday est arrivé chez AI Empire. 🖤

-50% SUR TOUT :
📦 NeuraStore : €39 → €19.50
📦 NeuraBlog : €29 → €14.50
📦 Bundle Premium : €599 → €299.50
📦 Plan Pro 1 an : €1,188 → €594

⏰ Valable du [MERCREDI] au [LUNDI] uniquement.

Code : BLACKFRIDAY50

Les 50 premiers acheteurs reçoivent un template bonus gratuit ! 🎁

[CTA: Choper mes -50% →]

Ne rate pas ça.
L'équipe AI Empire 🖤`,
    socialPost: `🖤 BLACK FRIDAY AI EMPIRE 🖤

-50% SUR TOUT PENDANT 5 JOURS !

📦 Templates de €14.50 à €299.50
📦 Plan Pro -50%
📦 50 premiers = template bonus GRATUIT

Code : BLACKFRIDAY50
⏰ Du [MERCREDI] au [LUNDI]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: 'Mercredi J-1', action: 'Teaser "Demain, quelque chose de noir arrive..."', channel: 'Twitter, Instagram' },
    { day: 'Jeudi J0 (BF)', action: 'Lancement officiel Black Friday', channel: 'Tous les canaux + Email blast' },
    { day: 'Jeudi J0', action: 'Google Ads - campagne urgente', channel: 'Google Ads' },
    { day: 'Vendredi J+1', action: 'Rappel + témoignages acheteurs', channel: 'Email, Twitter' },
    { day: 'Samedi J+2', action: 'Social proof : "Déjà X ventes !"', channel: 'Instagram, LinkedIn' },
    { day: 'Dimanche J+3', action: 'Dernier jour pour le BF classique', channel: 'Email blast' },
    { day: 'Lundi CM', action: 'Cyber Monday — Extension spéciale', channel: 'Tous les canaux' },
    { day: 'Lundi CM', action: 'Offre flash 24h', channel: 'Email, Twitter' },
    { day: 'Mardi J+5', action: 'Fin du Black Friday — Merci', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'Audience cible (selon la campagne)',
    targetConversion: 'Taux de conversion 0,5-1%',
    targetRevenue: 'Proportionnel au budget pub'
  }
}

// ============================================================
// CAMPAGNE NOUVEL AN
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: 'Nouvel An — Résolutions SaaS 2025',
  type: 'new-year',
  duration: '14 jours (26 décembre - 9 janvier)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: 'Convertir les prospects de fin d\'année et démarrer fort en janvier',
  content: {
    headline: '🎆 2025 : Lance ton SaaS cette année !',
    subheadline: 'Nouvel an, nouveau SaaS. Commence fort avec AI Empire.',
    body: `2025, c'est TON année. 🎆

Tu as mis ton idée sur papier l'année dernière. Maintenant, passe à l'action.

🚀 Offre Nouvel An :
- -25% sur tous les templates avec le code NOUVELAN2025
- 500 crédits IA gratuits pour démarrer
- Accès prioritaire aux nouvelles features 2025

🎯 Résolutions 2025 :
✅ "Je lance mon SaaS" → Fait en 24h avec AI Empire
✅ "Je gagne en ligne" → Templates e-commerce + Stripe inclus
✅ "J'apprends l'IA" → APIs IA intégrées + tutoriels
✅ "Je me digitalise" → Dashboard admin complet

⏱️ Offre du 26 décembre au 9 janvier uniquement.

Fais de 2025 ton année de succès.`,
    cta: '🎆 Commencer 2025 avec AI Empire',
    hashtags: [
      '#AIEmpire', '#NouvelAn', '#2025', '#Résolutions', '#SaaS',
      '#Lancement', '#IndieHacker', '#StartupFrance', '#TechFR', '#IA'
    ],
    emailSubject: '🎆 Nouvel an, nouveau SaaS : -25% + 500 crédits offerts !',
    emailBody: `Salut [Prénom],

Bonne année ! 🎆

2025, c'est l'année où tu lances ton SaaS. Et on est là pour t'aider.

🎁 Offre Nouvel An :
- -25% sur tous les templates
- 500 crédits IA gratuits
- Accès prioritaire aux features 2025

Code : NOUVELAN2025

⏰ Offre du 26 décembre au 9 janvier.

Fais de cette année la bonne année.

[CTA: Découvrir les offres →]

Bonne année et bon courage !
L'équipe AI Empire 🇫🇷`,
    socialPost: `🎆 2025 : L'ANNÉE DE TON SAAS ! 🎆

Nouvel an, nouveau départ.

🎁 Offre spéciale :
✅ -25% sur les templates
✅ 500 crédits IA gratuits
✅ Accès prioritaire 2025

Code : NOUVELAN2025
⏰ Du 26/12 au 09/01

👉 ai-empire-steel.vercel.app

#AIEmpire #NouvelAn #2025 #SaaS #Résolutions`
  },
  schedule: [
    { day: '26 décembre', action: 'Email "Bonne année — voici ton cadeau"', channel: 'Email' },
    { day: '27 décembre', action: 'Post "Résolutions 2025 : lance ton SaaS"', channel: 'LinkedIn, Twitter' },
    { day: '30 décembre', action: 'Rappel offre + témoignages', channel: 'Email, Twitter' },
    { day: '1 janvier', action: 'Message "Bonne année — on est là pour toi"', channel: 'Email, Social' },
    { day: '2 janvier', action: 'Tutorial "5 étapes pour lancer ton SaaS en janvier"', channel: 'Blog, YouTube' },
    { day: '5 janvier', action: 'Social proof + urgence', channel: 'Twitter, Instagram' },
    { day: '7 janvier', action: 'Dernière chance', channel: 'Email' },
    { day: '9 janvier', action: 'Fin de l\'offre — bilan + preview 2025', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000 personnes',
    targetConversion: '400 inscriptions (1%)',
    targetRevenue: '€5,000 (200 × €25 moy.)'
  }
}

// ============================================================
// FONCTIONS UTILITAIRES
// ============================================================

export function getAllCampaignTemplates(): CampaignTemplate[] {
  return [
    productLaunchTemplate,
    seasonalPromotionTemplate,
    referralProgramTemplate,
    blackFridayTemplate,
    newYearTemplate,
  ]
}

export function getCampaignTemplateByType(type: CampaignTemplate['type']): CampaignTemplate | undefined {
  return getAllCampaignTemplates().find(t => t.type === type)
}

export function generateCampaignTemplateId(): string {
  return `campaign_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function generateEmailBlast(template: CampaignTemplate, recipientName: string): {
  subject: string
  body: string
  cta: string
} {
  return {
    subject: template.content.emailSubject.replace('[Prénom]', recipientName),
    body: template.content.emailBody.replace(/\[Prénom\]/g, recipientName),
    cta: template.content.cta,
  }
}

export function generateTemplateSocialPost(template: CampaignTemplate): string {
  return template.content.socialPost
}

export function formatScheduleForCalendar(schedule: CampaignSchedule[]): string {
  return schedule.map(s => `${s.day} | ${s.channel} | ${s.action}`).join('\n')
}

export function calculateTotalBudget(templates: CampaignTemplate[]): string {
  const total = templates.reduce((sum, t) => {
    const budgetNum = parseInt(t.budget.replace(/[^0-9]/g, ''), 10)
    return sum + (isNaN(budgetNum) ? 0 : budgetNum)
  }, 0)
  return `€${total.toLocaleString('fr-FR')}`
}
