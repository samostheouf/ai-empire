import type { EmailSequence } from '../email-sequences'

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
      subject: 'Bienvenue sur AI Empire — Ton API IA est prête',
      preview: 'Tu as 100 crédits gratuits. Commence maintenant.',
      body: `Salut [Prénom],

Bienvenue sur AI Empire !

Tu as maintenant accès à :
- 100 crédits IA gratuits
- APIs GPT-4, Groq et Gemini
- Templates Next.js 14 professionnels
- Support technique en français

Ton API key : [API_KEY]
Dashboard : https://ai-empire-steel.vercel.app/dashboard

Prochaine étape : Fais ton premier appel API en 2 minutes.

1. Va sur ton dashboard
2. Copie ton API key
3. Lance ce curl :
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer TON_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Bonjour, comment ça va?"}'

C'est tout ! Tu as maintenant accès à l'IA.

À bientôt,
L'équipe AI Empire`,
      cta: 'Lancer mon premier test',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '3 astuces pour tirer le meilleur parti d\'AI Empire',
      preview: 'Des conseils pour aller plus loin.',
      body: `Salut [Prénom],

Hier, tu as créé ton compte. Aujourd'hui, voici 3 astuces pour aller plus loin :

Astuce 1 : Explore les templates
Nos templates sont conçus pour être immédiatement utilisables. Commence par NeuraBlog (€19) ou NeuraStore (€29).

Astuce 2 : Utilise les APIs IA
Génère du contenu, analyse du texte, crée un chatbot. Les APIs sont gratuites jusqu'à tes 100 crédits.

Astuce 3 : Intègre dans ton projet
Nos tutoriels te montrent comment intégrer AI Empire dans un projet Next.js en 5 minutes.

Tutoriels : https://ai-empire-steel.vercel.app/docs

Bonne découverte !
L'équipe AI Empire`,
      cta: 'Voir les tutoriels',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: 'Le template parfait pour ton projet',
      preview: 'Découvre nos templates adaptés à ton besoin.',
      body: `Salut [Prénom],

Tu veux créer un SaaS ? Voici le template qu'il te faut :

E-commerce → NeuraStore (€29)
Template e-commerce Next.js 14 avec panier, paiements Stripe, dashboard admin.

Blog → NeuraBlog (€19)
Blog premium avec SEO optimisé, système de commentaires, newsletter intégrée.

Portfolio → NeuraPortfolio (€29)
Portfolio professionnel avec animations, formulaires, mode sombre.

Bundle complet → 6 templates (€299)
Tous nos templates + support prioritaire + mises à jour gratuites.

Utilise le code WELCOME10 pour -10% sur ton premier achat.

L'équipe AI Empire`,
      cta: 'Découvrir les templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: 'Comment lancer un SaaS rapidement avec AI Empire',
      preview: 'Construisez votre projet avec nos templates prêts à l\'emploi.',
      body: `Salut [Prénom],

Lancer un SaaS ne nécessite plus des mois de développement.

Avec AI Empire, voici ce que tu peux réaliser :
- Un e-commerce complet en 24h avec NeuraStore (€29)
- Stripe déjà intégré et prêt à accepter les paiements
- Déploiement sur Vercel en quelques clics
- Dashboard admin inclus dans le template

NeuraStore inclut :
- Panier d'achat fonctionnel
- Gestion des produits et du stock
- Paiements sécurisés via Stripe
- Interface d'administration complète
- Design responsive et mode sombre

Commence par choisir le template qui correspond à ton projet.

L'équipe AI Empire`,
      cta: 'Voir les templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '-20% sur ton premier template',
      preview: 'Une offre de bienvenue pour toi.',
      body: `Salut [Prénom],

Merci pour ta fidélité ! Voici une réduction de bienvenue :
-20% sur ton premier template.

Code : WELCOME20

Options :
- NeuraBlog : €19 → €15.20
- NeuraStore : €29 → €23.20
- NeuraPortfolio : €29 → €23.20
- Bundle complet : €299 → €239.20

C'est le moment de passer à l'action.

L'équipe AI Empire`,
      cta: 'Profiter de -20%',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

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
      subject: 'Voici ce que tu peux créer avec AI Empire',
      preview: 'Des exemples concrets pour t\'inspirer.',
      body: `Salut [Prénom],

Tu as un compte AI Empire mais tu n'as pas encore exploré tout ce que tu peux créer.

Voici 5 projets concrets :

1. Blog SEO-optimisé → NeuraBlog
2. E-commerce avec Stripe → NeuraStore
3. Portfolio professionnel → NeuraPortfolio
4. Chatbot IA → Intègre nos APIs
5. SaaS complet → Bundle premium

Chaque projet est réalisable en 24h.

L'équipe AI Empire`,
      cta: 'Explorer les projets',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: 'L\'erreur n°1 des indie hackers',
      preview: 'Comment éviter de perdre du temps.',
      body: `Salut [Prénom],

L'erreur n°1 des indie hackers : tout développer soi-même.

Tu passes des semaines à coder :
- L'authentification (AI Empire le fait pour toi)
- Les paiements (Stripe est déjà intégré)
- Le dashboard (Il est déjà prêt)
- Le design (Les templates sont professionnels)

Pendant ce temps, tes concurrents lancent leur produit.

AI Empire t'économise 6 mois de développement.

L'équipe AI Empire`,
      cta: 'Voir les templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: 'Des milliers de développeurs utilisent déjà AI Empire',
      preview: 'Rejoins une communauté grandissante.',
      body: `Salut [Prénom],

Des milliers de développeurs font déjà confiance à AI Empire.

Voici ce qu'ils ont créé :
- Des dizaines de SaaS e-commerce
- Des blogs professionnels
- Des portfolios créatifs
- Des chatbots IA

Et toi ? Qu'est-ce que tu vas créer ?

L'équipe AI Empire`,
      cta: 'Rejoindre la communauté',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: 'Le ROI d\'AI Empire en chiffres',
      preview: 'Des chiffres qui parlent.',
      body: `Salut [Prénom],

Voici le ROI réel d'AI Empire :

- Coût moyen : €50 (1 template + crédits IA)
- Temps économisé : 6 mois de développement
- Un seul client à €50/mois suffit pour rentabiliser ton investissement

Le reste ? Du profit pur.

L'équipe AI Empire`,
      cta: 'Voir les prix',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: 'Découvre NeuraStore — Le template e-commerce',
      preview: 'Le template le plus populaire.',
      body: `Salut [Prénom],

NeuraStore est notre template e-commerce le plus populaire.

Ce qu'il contient :
- Panier d'achat
- Paiements Stripe
- Gestion des produits
- Dashboard admin
- Design responsive
- Mode sombre

Prix : €29 (au lieu de €500+ pour un développeur)

L'équipe AI Empire`,
      cta: 'Découvrir NeuraStore',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: 'Comment intégrer AI Empire en 5 minutes',
      preview: 'Un tutoriel rapide pour démarrer.',
      body: `Salut [Prénom],

Tu veux intégrer AI Empire dans ton projet ? Voici comment :

1. Installe le template
npx create-next-app@latest mon-saas --template ai-empire

2. Configure tes APIs
Copie ton API key dans .env.local

3. Déploie sur Vercel
git push et ton site est en ligne

C'est tout ! En 5 minutes, tu as ton SaaS.

L'équipe AI Empire`,
      cta: 'Voir le tutoriel',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: 'Offre early adopters : -30% sur les templates',
      preview: 'Une offre pour les premiers utilisateurs.',
      body: `Salut [Prénom],

Tu es avec nous depuis [NOMBRE] jours.

Pour te remercier, voici une offre :
-30% sur tous les templates.

Code : EARLY30

Options :
- NeuraBlog : €19 → €13.30
- NeuraStore : €29 → €20.30
- NeuraPortfolio : €29 → €20.30
- Bundle complet : €299 → €209.30

L'équipe AI Empire`,
      cta: 'Profiter de -30%',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

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
      subject: '[Prénom], tu nous manques',
      preview: 'On a du nouveau pour toi.',
      body: `Salut [Prénom],

On a remarqué que tu n'as pas utilisé AI Empire depuis un moment.

Est-ce qu'on peut t'aider ?

- Besoin d'un tutoriel ?
- Un problème technique ?
- Une fonctionnalité manquante ?

On est là pour toi. Réponds à cet email — on lit tout.

L'équipe AI Empire`,
      cta: 'Revenir au dashboard',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: 'Voici ce que tu as raté chez AI Empire',
      preview: 'Des nouveautés qui vont te plaire.',
      body: `Salut [Prénom],

Depuis ta dernière visite, on a ajouté :

- Nouveaux templates (NeuraBlog, NeuraStore)
- APIs IA améliorées (GPT-4, Groq, Gemini)
- Dashboard refondu
- Design optimisé

Tu n'as rien raté — c'est le moment de revenir.

L'équipe AI Empire`,
      cta: 'Découvrir les nouveautés',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '50 crédits gratuits pour revenir',
      preview: 'Un cadeau pour te dire qu\'on pense à toi.',
      body: `Salut [Prénom],

Pour te dire qu'on pense à toi, voici 50 crédits IA gratuits.

Ton solde : +50 crédits
Valable 30 jours

Utilise-les pour :
- Générer du contenu
- Analyser du texte
- Créer un chatbot
- Tester nos APIs

L'équipe AI Empire`,
      cta: 'Récupérer mes crédits',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: 'Tes crédits expirent dans 16 jours',
      preview: 'Pense à les utiliser.',
      body: `Salut [Prénom],

Tu as 50 crédits gratuits qui expirent dans 16 jours.

Expire le [DATE]

Utilise-les pour :
- Créer ton premier projet
- Tester nos APIs
- Découvrir AI Empire

L'équipe AI Empire`,
      cta: 'Utiliser mes crédits',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: 'Tes crédits expirent bientôt',
      preview: 'N\'oublie pas de les utiliser.',
      body: `Salut [Prénom],

Tes 50 crédits gratuits expirent dans 7 jours.

Expire le [DATE]

Après ça, tu perdras tes crédits.

C'est ta dernière chance de les utiliser.

L'équipe AI Empire`,
      cta: 'Utiliser mes crédits',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

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
      subject: '[Prénom], tu es sur le point d\'atteindre la limite',
      preview: 'Ton utilisation augmente — voici comment passer à la vitesse supérieure.',
      body: `Salut [Prénom],

Bonne nouvelle : tu utilises intensivement AI Empire !

Voici ton utilisation actuelle :
- Appels API : [NOMBRE]/100
- Crédits restants : [NOMBRE]
- Jours d'activité : [NOMBRE]

Tu es sur le point d'atteindre la limite du plan gratuit.

Le plan Pro te donne :
- Appels API illimités
- Accès prioritaire
- Support dédié
- Templates premium

L'équipe AI Empire`,
      cta: 'Passer au Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: 'Le plan Pro : ce que tu rates',
      preview: 'Des fonctionnalités exclusives.',
      body: `Salut [Prénom],

Voici ce que tu rates avec le plan gratuit :

Plan Pro (€99/mois) :
- Appels API illimités
- Accès prioritaire aux nouvelles features
- Support dédié (réponse sous 2h)
- Templates premium (€199 de valeur)
- Dashboard analytics avancé
- API webhook personnalisé

L'équipe AI Empire`,
      cta: 'Découvrir le Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '-20% sur ton premier mois Pro',
      preview: 'Une offre pour toi.',
      body: `Salut [Prénom],

Pour te remercier de ta fidélité, voici une offre :
-20% sur ton premier mois Pro.

Au lieu de €99/mois → €79/mois

Code : PRO20

Passage au Pro :
- Appels API illimités
- Support dédié
- Templates premium
- Analytics avancés

L'équipe AI Empire`,
      cta: 'Activer mon offre',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: 'Comment les utilisateurs Pro optimisent leurs coûts',
      preview: 'Un aperçu des avantages du plan Pro.',
      body: `Salut [Prénom],

Voici comment nos utilisateurs Pro optimisent leurs coûts :

Avec le plan Pro (€99/mois) :
- Réduction des coûts IA grâce aux APIs optimisées
- Gain de productivité avec les templates premium
- Support dédié pour résoudre les problèmes rapidement
- Analytics avancés pour suivre tes performances

Le plan Pro est conçu pour les projets sérieux qui ont besoin de plus de puissance.

L'équipe AI Empire`,
      cta: 'Passer au Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '-20% sur le plan Pro — Dernière opportunité',
      preview: 'Ne rate pas cette offre.',
      body: `Salut [Prénom],

Ton offre -20% sur le plan Pro est toujours disponible.

€79/mois au lieu de €99/mois

Passage au Pro :
- Appels API illimités
- Support dédié
- Templates premium
- Analytics avancés

C'est une bonne occasion de tester le plan Pro à tarif réduit.

L'équipe AI Empire`,
      cta: 'Profiter de -20%',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: 'Merci [Prénom] — On reste là si tu changes d\'avis',
      preview: 'Pas de pression. On est là pour toi.',
      body: `Salut [Prénom],

On comprend que le plan Pro n'est peut-être pas pour toi en ce moment.

Pas de souci. On reste là si tu changes d'avis.

En attendant, tu peux toujours :
- Utiliser le plan gratuit (100 crédits/mois)
- Explorer les templates (à partir de €19)
- Nous contacter si tu as des questions

On est là pour toi.

L'équipe AI Empire`,
      cta: 'Nous contacter',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
