export interface EmailSequence {
  id: string
  name: string
  type: 'onboarding' | 'nurture' | 'winback' | 'upsell'
  duration: string
  emails: Email[]
  trigger: string
  goal: string
}

export interface Email {
  day: number
  subject: string
  preview: string
  body: string
  cta: string
  ctaUrl: string
}

// ============================================================
// SÉQUENCE D'ONBOARDING (5 JOURS)
// ============================================================
export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: 'Séquence d\'Onboarding — 5 jours',
  type: 'onboarding',
  duration: '5 jours',
  trigger: 'Nouvel utilisateur inscrit',
  goal: 'Activer l\'utilisateur : premier appel API + premier template acheté',
  emails: [
    {
      day: 0,
      subject: '🚀 Bienvenue sur AI Empire — Ton API IA est prête !',
      preview: 'Tu as 100 crédits gratuits. Commence maintenant.',
      body: `Salut [Prénom],

Bienvenue sur AI Empire ! 🎉

Tu as maintenant accès à :
✅ 100 crédits IA gratuits
✅ APIs GPT-4, Groq et Gemini
✅ Templates Next.js 14 professionnels
✅ Support technique en français

Ton API key : [API_KEY]
Dashboard : https://ai-empire-steel.vercel.app/dashboard

🎯 Prochaine étape : Fais ton premier appel API en 2 minutes.

1. Va sur ton dashboard
2. Copie ton API key
3. Lance ce curl :
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer TON_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Bonjour, comment ça va?"}'

C'est tout ! Tu as maintenant accès à l'IA.

À bientôt,
L'équipe AI Empire 🇫🇷`,
      cta: '🚀 Lancer mon premier test',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '💡 3 astuces pour tirer le meilleur parti d\'AI Empire',
      preview: 'Des conseils pour aller plus loin.',
      body: `Salut [Prénom],

Hier, tu as créé ton compte. Aujourd'hui, voici 3 astuces pour aller plus loin :

🎯 Astuce 1 : Explore les templates
Nos templates sont conçus pour être immédiatement utilisables. Commence par NeuraBlog (€19) ou NeuraStore (€29).

💡 Astuce 2 : Utilise les APIs IA
Génère du contenu, analyse du texte, crée un chatbot. Les APIs sont gratuites jusqu'à tes 100 crédits.

⚡ Astuce 3 : Intègre dans ton projet
Nos tutoriels te montrent comment intégrer AI Empire dans un projet Next.js en 5 minutes.

📚 Tutoriels : https://ai-empire-steel.vercel.app/docs

Bonne découverte !
L'équipe AI Empire 🇫🇷`,
      cta: '📚 Voir les tutoriels',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: '📦 Le template parfait pour ton projet',
      preview: 'Découvre nos templates adaptés à ton besoin.',
      body: `Salut [Prénom],

Tu veux créer un SaaS ? Voici le template qu'il te faut :

🛒 E-commerce → NeuraStore (€29)
Template e-commerce Next.js 14 avec panier, paiements Stripe, dashboard admin.

📝 Blog → NeuraBlog (€19)
Blog premium avec SEO optimisé, système de commentaires, newsletter intégrée.

💼 Portfolio → NeuraPortfolio (€29)
Portfolio professionnel avec animations, formulaires, mode sombre.

📦 Bundle complet → 6 templates (€299)
Tous nos templates + support prioritaire + mises à jour gratuites.

Utilise le code WELCOME10 pour -10% sur ton premier achat.

[CTA: Découvrir les templates →]

L'équipe AI Empire 🇫🇷`,
      cta: '🛒 Découvrir les templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: '🏆 Comment Marie a lancé son SaaS en 24h',
      preview: 'Une histoire inspirante de notre communauté.',
      body: `Salut [Prénom],

Voici l'histoire de Marie, développeuse full-stack :

"J'avais une idée de SaaS mais je n'arrivais pas à trouver le temps de tout développer. AI Empire m'a permis de lancer mon projet en 24 heures.

J'ai acheté NeuraStore (€29), j'ai connecté Stripe en 5 minutes, et j'ai déployé sur Vercel. Le jour suivant, j'avais déjà mes premiers clients.

Aujourd'hui, mon SaaS génère €2 000 de MRR. Tout ça grâce à un investissement initial de €29."

Tu veux reproduire le succès de Marie ?
Commence par choisir le bon template.

[CTA: Voir les templates →]

L'équipe AI Empire 🇫🇷`,
      cta: '🚀 Créer mon SaaS',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '🎁 -20% sur ton premier template (offre 48h)',
      preview: 'Une offre exclusive pour toi.',
      body: `Salut [Prénom],

On te récompense pour ta fidélité ! 🎁

Voici une offre exclusive :
-20% sur ton premier template pendant 48 heures.

Code : WELCOME20

📦 Options :
- NeuraBlog : €19 → €15.20
- NeuraStore : €29 → €23.20
- NeuraPortfolio : €29 → €23.20
- Bundle complet : €299 → €239.20

⏰ Offre valable 48 heures.

C\'est le moment de passer à l'action.

[CTA: Profiter de -20% →]

L'équipe AI Empire 🇫🇷`,
      cta: '🎁 Profiter de -20%',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

// ============================================================
// SÉQUENCE NURTURE (7 JOURS)
// ============================================================
export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: 'Séquence Nurture — 7 jours',
  type: 'nurture',
  duration: '7 jours',
  trigger: 'Utilisateur inscrit mais pas encore acheté',
  goal: 'Convertir l\'utilisateur gratuit en client payant',
  emails: [
    {
      day: 0,
      subject: '📊 Voici ce que tu peux créer avec AI Empire',
      preview: 'Des exemples concrets pour t\'inspirer.',
      body: `Salut [Prénom],

Tu as un compte AI Empire mais tu n'as pas encore exploré tout ce que tu peux créer.

Voici 5 projets concrets :

1️⃣ Blog SEO-optimisé → NeuraBlog
2️⃣ E-commerce avec Stripe → NeuraStore
3️⃣ Portfolio professionnel → NeuraPortfolio
4️⃣ Chatbot IA → Intègre nos APIs
5️⃣ SaaS complet → Bundle premium

Chaque projet est réalisable en 24h.

[CTA: Explorer les possibilités →]

L'équipe AI Empire 🇫🇷`,
      cta: '🚀 Explorer les projets',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: '💡 L\'erreur n°1 des indie hackers',
      preview: 'Comment éviter de perdre du temps.',
      body: `Salut [Prénom],

L'erreur n°1 des indie hackers : tout développer soi-même.

Tu passes des semaines à coder :
→ L'authentification ❌ (AI Empire le fait pour toi)
→ Les paiements ❌ (Stripe est déjà intégré)
→ Le dashboard ❌ (Il est déjà prêt)
→ Le design ❌ (Les templates sont pro)

Pendant ce temps, tes concurrents lancent leur produit.

AI Empire t'économise 6 mois de développement.

[CTA: Voir ce qui est déjà prêt →]

L'équipe AI Empire 🇫🇷`,
      cta: '📊 Voir les templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: '🏆 5 000+ développeurs ont déjà lancé leur SaaS',
      preview: 'Rejoins une communauté grandissante.',
      body: `Salut [Prénom],

5 000+ développeurs font déjà confiance à AI Empire.

Voici ce qu'ils ont créé :
→ 200+ SaaS e-commerce
→ 150+ blogs professionnels
→ 100+ portfolios créatifs
→ 50+ chatbots IA

Et toi ? Qu'est-ce que tu vas créer ?

[CTA: Rejoindre la communauté →]

L'équipe AI Empire 🇫🇷`,
      cta: '🤝 Rejoindre 5 000+ devs',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: '💰 Le ROI d\'AI Empire en chiffres',
      preview: 'Des chiffres qui parlent.',
      body: `Salut [Prénom],

Voici le ROI réel d'AI Empire :

💰 Coût moyen : €50 (1 template + crédits IA)
📈 ROI moyen : 1 000% (un client suffit à rentabiliser)
⏱️ Temps économisé : 6 mois de développement
💵 Économie réelle : €49 950

Un seul client à €50/mois suffit pour rentabiliser ton investissement.

Le reste ? Du profit pur.

[CTA: Calculer mon ROI →]

L'équipe AI Empire 🇫🇷`,
      cta: '💰 Calculer mon ROI',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: '🎨 Découvre NeuraStore — Le template e-commerce',
      preview: 'Le template le plus populaire.',
      body: `Salut [Prénom],

NeuraStore est notre template e-commerce le plus populaire.

Ce qu'il contient :
✅ Panier d'achat
✅ Paiements Stripe
✅ Gestion des produits
✅ Dashboard admin
✅ Design responsive
✅ Mode sombre

Prix : €29 (au lieu de €500+ pour un développeur)

[CTA: Découvrir NeuraStore →]

L'équipe AI Empire 🇫🇷`,
      cta: '🛒 Découvrir NeuraStore',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: '⚡ Comment intégrer AI Empire en 5 minutes',
      preview: 'Un tutoriel rapide pour démarrer.',
      body: `Salut [Prénom],

Tu veux intégrer AI Empire dans ton projet ? Voici comment :

1️⃣ Installe le template
npx create-next-app@latest mon-saas --template ai-empire

2️⃣ Configure tes APIs
Copie ton API key dans .env.local

3️⃣ Déploie sur Vercel
git push && ton site est en ligne

C'est tout ! En 5 minutes, tu as ton SaaS.

[CTA: Suivre le tutoriel →]

L'équipe AI Empire 🇫🇷`,
      cta: '📖 Voir le tutoriel',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: '🎁 Offre exclusive : -30% pour les early adopters',
      preview: 'Une offre que tu ne peux pas refuser.',
      body: `Salut [Prénom],

Tu es avec nous depuis [NOMBRE] jours.

Pour te remercier, voici une offre exclusive :
-30% sur tous les templates pendant 48h.

Code : EARLY30

📦 Options :
- NeuraBlog : €19 → €13.30
- NeuraStore : €29 → €20.30
- NeuraPortfolio : €29 → €20.30
- Bundle complet : €299 → €209.30

⏰ Offre valable 48 heures.

C\'est le moment de passer à l'action.

[CTA: Profiter de -30% →]

L'équipe AI Empire 🇫🇷`,
      cta: '🎁 Profiter de -30%',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

// ============================================================
// SÉQUENCE WIN-BACK
// ============================================================
export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: 'Séquence Win-Back — Réactivation',
  type: 'winback',
  duration: '21 jours',
  trigger: 'Utilisateur inactif depuis 30 jours',
  goal: 'Réactiver l\'utilisateur inactif et le fidéliser',
  emails: [
    {
      day: 0,
      subject: '💜 [Prénom], tu nous manques !',
      preview: 'On a du nouveau pour toi.',
      body: `Salut [Prénom],

On a remarqué que tu n'as pas utilisé AI Empire depuis un moment.

Est-ce qu'on peut t'aider ?

→ Besoin d'un tutoriel ?
→ Un problème technique ?
→ Une fonctionnalité manquante ?

On est là pour toi. Réponds à cet email — on lit tout.

[CTA: Revenir au dashboard →]

L'équipe AI Empire 💜`,
      cta: '🚀 Revenir au dashboard',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: '🚀 Voici ce que tu as raté chez AI Empire',
      preview: 'Des nouveautés qui vont te plaire.',
      body: `Salut [Prénom],

Depuis ta dernière visite, on a ajouté :

🆕 Nouveaux templates (NeuraBlog, NeuraStore)
🤖 APIs IA améliorées (GPT-4, Groq, Gemini)
📊 Dashboard refondu
🎨 Design optimisé

Tu n'as rien raté — c'est le moment de revenir.

[CTA: Découvrir les nouveautés →]

L'équipe AI Empire 🇫🇷`,
      cta: '🆕 Découvrir les nouveautés',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '🎁 50 crédits gratuits pour revenir',
      preview: 'Un cadeau pour te dire qu\'on pense à toi.',
      body: `Salut [Prénom],

Pour te dire qu'on pense à toi, voici 50 crédits IA gratuits.

💰 Ton solde : +50 crédits
⏰ Valable 30 jours

Utilise-les pour :
→ Générer du contenu
→ Analyser du texte
→ Créer un chatbot
→ Tester nos APIs

[CTA: Récupérer mes crédits →]

L'équipe AI Empire 🇫🇷`,
      cta: '💰 Récupérer mes crédits',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: '⚠️ Tes crédits expirent dans 16 jours',
      preview: 'Ne les gaspille pas.',
      body: `Salut [Prénom],

Tu as 50 crédits gratuits qui expirent dans 16 jours.

⏰ Expire le [DATE]

Ne les gaspille pas. Utilise-les pour :
→ Créer ton premier projet
→ Tester nos APIs
→ Découvrir AI Empire

[CTA: Utiliser mes crédits →]

L'équipe AI Empire 🇫🇷`,
      cta: '⚡ Utiliser mes crédits',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: '👋 Dernière chance — Tes crédits expirent',
      preview: 'C\'est maintenant ou jamais.',
      body: `Salut [Prénom],

Tes 50 crédits gratuits expirent dans 7 jours.

⏰ Expire le [DATE]

Après ça, tu perdras tes crédits.

C\'est ta dernière chance de les utiliser.

[CTA: Dernière chance →]

L'équipe AI Empire 🇫🇷`,
      cta: '⚡ Dernière chance',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

// ============================================================
// SÉQUENCE UPSELL
// ============================================================
export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: 'Séquence Upsell — Passage au Plan Pro',
  type: 'upsell',
  duration: '14 jours',
  trigger: 'Utilisateur avec plus de 100 appels API ou 30 jours d\'activité',
  goal: 'Convertir l\'utilisateur gratuit en client Pro',
  emails: [
    {
      day: 0,
      subject: '📊 [Prénom], tu es sur le point d\'atteindre la limite',
      preview: 'Ton utilisation augmente — voici comment passer à la vitesse supérieure.',
      body: `Salut [Prénom],

Bonne nouvelle : tu utilises intensivement AI Empire ! 📈

Voici ton utilisation actuelle :
→ Appels API : [NOMBRE]/100
→ Crédits restants : [NOMBRE]
→ Jours d'activité : [NOMBRE]

Tu es sur le point d'atteindre la limite du plan gratuit.

Le plan Pro te donne :
✅ Appels API illimités
✅ Accès prioritaire
✅ Support dédié
✅ Templates premium

[CTA: Passer au Pro →]

L'équipe AI Empire 🇫🇷`,
      cta: '🚀 Passer au Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: '💎 Le plan Pro : ce que tu rates',
      preview: 'Des fonctionnalités exclusives.',
      body: `Salut [Prénom],

Voici ce que tu rates avec le plan gratuit :

💎 Plan Pro (€99/mois) :
→ Appels API illimités
→ Accès prioritaire aux nouvelles features
→ Support dédié (réponse sous 2h)
→ Templates premium (€199 de valeur)
→ Dashboard analytics avancé
→ API webhook personnalisé

💰 ROI moyen de nos clients Pro : 500%

[CTA: Découvrir le plan Pro →]

L'équipe AI Empire 🇫🇷`,
      cta: '💎 Découvrir le Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '🎁 -20% sur ton premier mois Pro',
      preview: 'Une offre exclusive pour toi.',
      body: `Salut [Prénom],

Pour te remercier de ta fidélité, voici une offre exclusive :
-20% sur ton premier mois Pro.

💰 Au lieu de €99/mois → €79/mois

Code : PRO20

⏰ Offre valable 48 heures.

Passage au Pro :
✅ Appels API illimités
✅ Support dédié
✅ Templates premium
✅ Analytics avancés

[CTA: Activer mon offre →]

L'équipe AI Empire 🇫🇷`,
      cta: '🎁 Profiter de -20%',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: '🏆 Comment Thomas a multiplié son revenue par 5',
      preview: 'Un témoignage inspirant.',
      body: `Salut [Prénom],

Voici l'histoire de Thomas, CTO d'InnovateLab :

"Avant AI Empire, on dépensait €5 000/mois en APIs IA tierces.

Depuis qu'on utilise le plan Pro :
→ -80% sur les coûts IA
→ +300% sur la productivité
→ Revenue multiplié par 5

Le plan Pro a payé en 2 semaines."

Tu veux le même succès ? Passe au Pro.

[CTA: Passer au Pro →]

L'équipe AI Empire 🇫🇷`,
      cta: '🚀 Rejoindre Thomas',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '⏰ Dernière chance : -20% expire dans 48h',
      preview: 'Ne rate pas cette offre.',
      body: `Salut [Prénom],

Ton offre -20% sur le plan Pro expire dans 48 heures.

💰 €79/mois au lieu de €99/mois

⏰ Expire le [DATE]

Passage au Pro :
✅ Appels API illimités
✅ Support dédié
✅ Templates premium
✅ Analytics avancés

C'est ta dernière chance de profiter de cette offre.

[CTA: Dernière chance →]

L'équipe AI Empire 🇫🇷`,
      cta: '⚡ Dernière chance',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: '👋 Merci [Prénom] — On reste là si tu changes d\'avis',
      preview: 'Pas de pression. On est là pour toi.',
      body: `Salut [Prénom],

On comprend que le plan Pro n'est peut-être pas pour toi en ce moment.

Pas de souci. On reste là si tu changes d'avis.

En attendant, tu peux toujours :
→ Utiliser le plan gratuit (100 crédits/mois)
→ Explorer les templates (à partir de €19)
→ Nous contacter si tu as des questions

On est là pour toi.

L'équipe AI Empire 💜`,
      cta: '💬 Nous contacter',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}

// ============================================================
// FONCTIONS UTILITAIRES
// ============================================================

export function getAllSequences(): EmailSequence[] {
  return [onboardingSequence, nurtureSequence, winbackSequence, upsellSequence]
}

export function getSequenceByType(type: EmailSequence['type']): EmailSequence | undefined {
  return getAllSequences().find(s => s.type === type)
}

export function generateEmailId(): string {
  return `email_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function formatEmailWithPersonalization(email: Email, variables: Record<string, string>): Email {
  let subject = email.subject
  let body = email.body

  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`\\[${key}\\]`, 'g')
    subject = subject.replace(regex, value)
    body = body.replace(regex, value)
  }

  return { ...email, subject, body }
}
