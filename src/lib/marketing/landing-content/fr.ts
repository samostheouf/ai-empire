export interface LandingContent {
  hero: {
    headline: string
    subheadline: string
    ctaText: string
  }
  features: Array<{
    title: string
    description: string
  }>
  howItWorks: Array<{
    step: number
    title: string
    description: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
}

export const landingContent: LandingContent = {
  hero: {
    headline: 'Lancez vos produits SaaS plus vite avec Next.js 14 et l\'IA',
    subheadline: 'Des templates prêts pour la production avec API Groq AI, facturation Stripe et authentification — construits pour que vous puissiez vous concentrer sur votre produit.',
    ctaText: 'Commencer gratuitement'
  },
  features: [
    {
      title: 'Templates Next.js 14 App Router',
      description: 'Construits avec les derniers patterns Next.js. TypeScript, Tailwind CSS et serveurs React inclus.'
    },
    {
      title: 'Intégration API Groq AI',
      description: 'Inférence rapide propulsée par Groq. Inclut le chat en streaming, les compléments structurés et l\'analyse de documents.'
    },
    {
      title: 'Facturation Stripe Prête',
      description: 'Gestion des abonnements, tarification à l\'usage, portail client et gestion des webhooks — tout pré-configuré.'
    },
    {
      title: 'Authentification et Rôles',
      description: 'Authentification intégrée avec contrôle d\'accès basé sur les rôles. Pas de librairie tierce nécessaire.'
    },
    {
      title: 'Dashboard Admin',
      description: 'Gérez les utilisateurs, visualisez les analytics et configurez les paramètres via une interface admin pré-construite.'
    },
    {
      title: 'Tier Gratuit Disponible',
      description: 'Commencez avec 100 crédits API. Pas de carte bancaire requise. Passez à Pro quand vous en avez besoin.'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Choisissez un Template',
      description: 'Sélectionnez parmi 6 templates prêts pour la production : SaaS starter, marketplace, dashboard, blog, portfolio ou landing page.'
    },
    {
      step: 2,
      title: 'Personnalisez Votre Produit',
      description: 'Ajoutez votre logique métier, configurez votre clé API Groq et paramétrez Stripe. Le boilerplate est déjà géré.'
    },
    {
      step: 3,
      title: 'Déployez et Livrez',
      description: 'Poussez sur Vercel ou votre plateforme préférée. Votre SaaS est prêt pour les utilisateurs.'
    }
  ],
  faq: [
    {
      question: 'Qu\'est-ce que le tier gratuit ?',
      answer: 'Le tier gratuit comprend 100 crédits API propulsés par Groq AI. Pas de carte bancaire requise. Vous pouvez utiliser tous les templates et fonctionnalités de base sans payer.'
    },
    {
      question: 'Ai-je besoin de mes propres clés API ?',
      answer: 'Oui, vous avez besoin d\'une clé API Groq (tier gratuit disponible sur groq.com) et d\'un compte Stripe pour la facturation. AI Empire gère l\'intégration — vous branchez simplement vos clés.'
    },
    {
      question: 'Puis-je utiliser ces templates pour des projets commerciaux ?',
      answer: 'Oui. Vous pouvez utiliser les templates AI Empire pour des projets personnels et commerciaux. Vous êtes propriétaire du code que vous construisez dessus.'
    },
    {
      question: 'Quelles technologies sont utilisées ?',
      answer: 'Next.js 14 (App Router), TypeScript, Tailwind CSS, API Groq AI pour l\'inférence, Stripe pour les paiements et un système d\'authentification pré-construit avec contrôle d\'accès par rôles.'
    },
    {
      question: 'Y a-t-il de la documentation ?',
      answer: 'Oui. Chaque template inclut des instructions de configuration, une référence API et des commentaires de code. Nous fournissons également des guides pour les patterns de personnalisation courants.'
    },
    {
      question: 'Quelle est la différence avec les autres templates SaaS ?',
      answer: 'AI Empire se concentre sur le code fonctionnel plutôt que sur le marketing. Chaque template est prêt pour la production, inclut l\'intégration d\'API IA et est accompagné de documentation honnête. Pas de faux témoignages ni de stats gonflées.'
    }
  ]
}
