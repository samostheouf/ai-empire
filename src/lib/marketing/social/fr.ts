export interface Post {
  id: number
  content: string
  hashtags: string[]
  cta: string
  emojis: string[]
}

export const twitterPosts: Post[] = [
  {
    id: 1,
    content: `Construit avec Next.js 14 + API Groq AI\n\nAI Empire vous offre :\n• Templates SaaS prêts pour la prod\n• Inférence rapide via Groq\n• Facturation Stripe intégrée\n• Tier gratuit : 100 crédits API\n\nCommencez à livrer dès aujourd'hui.`,
    hashtags: ['#NextJS14', '#AI', '#SaaS', '#GroqAI', '#WebDev'],
    cta: 'Essayer gratuitement',
    emojis: ['⚡', '🚀', '💡']
  },
  {
    id: 2,
    content: `Votre stack SaaS, tout prêt :\n\n✅ Next.js 14 App Router\n✅ Intégration API Groq AI\n✅ Abonnements Stripe\n✅ Auth + dashboard admin\n\nChoisissez un template, personnalisez, déployez.`,
    hashtags: ['#NextJS', '#SaaS', '#Stripe', '#FullStack', '#DevTools'],
    cta: 'Voir les templates',
    emojis: ['✅', '🔧', '🎯']
  },
  {
    id: 3,
    content: `Intégrer l'IA dans votre app ne devrait pas prendre des semaines.\n\nAvec l'API Groq d'AI Empire :\n• /api/chat — réponses en streaming\n• /api/completions — sortie structurée\n• /api/analyze — traitement de documents\n\nTout est inclus dans les templates Next.js 14.`,
    hashtags: ['#AI', '#NextJS', '#GroqAPI', '#API', '#WebDev'],
    cta: 'Voir la doc',
    emojis: ['🤖', '⚡', '📋']
  },
  {
    id: 4,
    content: `Intégration Stripe incluse dans chaque template AI Empire.\n\n• Facturation par abonnement\n• Gestion des webhooks\n• Portail client\n• Tarification à l'usage\n\nAucune librairie tierce nécessaire pour les paiements.`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#Billing'],
    cta: 'Commencer gratuitement',
    emojis: ['💳', '💰', '🔒']
  },
  {
    id: 5,
    content: `J'ai lancé une marketplace de templates SaaS Next.js 14.\n\nCe qui est inclus :\n• 6 templates de production\n• API Groq AI (tier gratuit : 100 crédits)\n• Facturation Stripe\n• Auth + accès par rôles\n• Dashboard admin\n\nOuvert aux retours.`,
    hashtags: ['#BuildInPublic', '#NextJS14', '#SaaS', '#Marketplace', '#DevTools'],
    cta: 'Découvrir',
    emojis: ['🔨', '🛠️', '🚀']
  },
  {
    id: 6,
    content: `FAQ : « Comment fonctionne le tier gratuit ? »\n\n• 100 crédits API pour commencer\n• Inférence via Groq AI\n• Pas de carte bancaire requise\n• Mise à niveau quand vous êtes prêt\n\nConçu pour les indépendants et les petites équipes.`,
    hashtags: ['#FreeTier', '#IndieHacker', '#SaaS', '#AI', '#GroqAI'],
    cta: 'Commencer gratuitement',
    emojis: ['❓', '🆓', '💡']
  },
  {
    id: 7,
    content: `Templates Next.js 14 + Groq AI + Stripe = SaaS production en quelques jours.\n\nAI Empire gère le boilerplate pour que vous vous concentriez sur votre produit.\n\nTemplates : saas-starter, marketplace, dashboard, blog, portfolio, landing.`,
    hashtags: ['#NextJS14', '#Templates', '#AI', '#SaaS', '#GroqAI'],
    cta: 'Explorer les templates',
    emojis: ['📦', '⚡', '🎯']
  },
  {
    id: 8,
    content: `Fondateurs de SaaS B2B : la partie la plus difficile, c'est passer de 0 à 1.\n\nAI Empire vous offre :\n• Auth + facturation pré-construits\n• APIs Groq AI prêtes à l'emploi\n• Dashboard admin\n• Intégration Stripe\n\nConcentrez-vous sur vos utilisateurs, pas sur le boilerplate.`,
    hashtags: ['#B2B', '#SaaS', '#Founders', '#NextJS', '#AI'],
    cta: 'En savoir plus',
    emojis: ['🏗️', '🔑', '🚀']
  },
  {
    id: 9,
    content: `Benchmarks API Groq AI :\n\n• Llama 3.1 8B : ~500 tokens/sec\n• Mixtral 8x7B : ~300 tokens/sec\n• Gemma 7B : ~600 tokens/sec\n\nDisponible via les templates AI Empire.\n\nInférence rapide, pas de GPU requis.`,
    hashtags: ['#GroqAI', '#AI', '#LLM', '#Performance', '#NextJS'],
    cta: 'Tester',
    emojis: ['⚡', '📊', '🚀']
  },
  {
    id: 10,
    content: `AI Empire v1.0 est en ligne.\n\nCe que nous avons construit :\n• 6 templates SaaS Next.js 14\n• Intégration API Groq AI\n• Facturation Stripe (abonnements + usage)\n• Auth + RBAC\n• Dashboard admin\n\nTier gratuit disponible. Retours bienvenus.`,
    hashtags: ['#Launch', '#NextJS14', '#SaaS', '#AI', '#Stripe'],
    cta: 'Commencer',
    emojis: ['🎉', '🚀', '💻']
  }
]

export const linkedinPosts: Post[] = [
  {
    id: 1,
    content: `Je travaille sur AI Empire — une marketplace de templates SaaS Next.js 14 avec intégration d'APIs IA.\n\nL'idée : la plupart des projets SaaS passent des semaines sur l'auth, la facturation et le boilerplate avant d'écrire une ligne de code produit.\n\nAI Empire est livré avec :\n• Templates Next.js 14 App Router\n• Intégration API Groq AI\n• Facturation Stripe (abonnements + usage)\n• Auth + accès par rôles\n• Dashboard admin\n\nLe tier gratuit comprend 100 crédits API — pas de carte bancaire requise.\n\nJ'apprécierais les retours honnêtes des autres développeurs.`,
    hashtags: ['#SaaS', '#NextJS', '#AI', '#BuildInPublic', '#IndieHacker'],
    cta: 'Découvrir',
    emojis: ['💡', '🛠️', '🚀']
  },
  {
    id: 2,
    content: `Honnêtement, construire un SaaS en 2024 :\n\nLa stack technique est suffisamment mature pour que la difficulté ne soit pas le code — ce sont les décisions produit.\n\nC'est pourquoi j'ai construit AI Empire : une collection de templates Next.js 14 qui gèrent la base technique (auth, facturation, APIs IA, dashboards) pour que vous vous concentriez sur l'essentiel.\n\nFonctionnalités :\n✅ Inférence IA via Groq\n✅ Abonnements Stripe\n✅ Templates prêts pour la prod\n✅ Tier gratuit avec 100 crédits\n\nPas de marketing agressif. Juste un outil utile pour les développeurs.`,
    hashtags: ['#SaaS', '#WebDevelopment', '#AI', '#NextJS', '#Product'],
    cta: 'En savoir plus',
    emojis: ['🎯', '📊', '💡']
  },
  {
    id: 3,
    content: `Comparaison rapide pour les développeurs qui évaluent les options d'API IA :\n\n• OpenAI : 0,002$/1K tokens (gpt-3.5-turbo)\n• Anthropic : 0,003$/1K tokens (Claude 3 Haiku)\n• Groq : tier gratuit disponible, inférence rapide\n\nLes templates AI Empire fonctionnent avec Groq par défaut.\n\n100 crédits gratuits pour tester. Pas d'enfermement.\n\nQuelle est votre configuration API IA actuelle ?`,
    hashtags: ['#AI', '#LLM', '#GroqAI', '#OpenAI', '#DevTools'],
    cta: 'Tester le tier gratuit',
    emojis: ['📊', '🔍', '⚡']
  },
  {
    id: 4,
    content: `Une chose que j'ai apprise en construisant AI Empire :\n\nLes développeurs ne veulent pas un autre framework — ils veulent du code fonctionnel qu'ils peuvent lire, modifier et déployer.\n\nChaque template AI Empire :\n• Utilise les patterns standards Next.js 14\n• A une structure de fichiers claire\n• Inclut Stripe + auth + APIs IA\n• Vient avec un dashboard admin\n\nLe meilleur code, c'est le code qu'on comprend.\n\nRecherche des retours de la communauté.`,
    hashtags: ['#WebDev', '#NextJS', '#CodeQuality', '#SaaS', '#AI'],
    cta: 'Voir les templates',
    emojis: ['📖', '💡', '🔍']
  },
  {
    id: 5,
    content: `Pour les indépendants et les fondateurs solo :\n\nLe goulot d'étranglement, ce n'est pas la compétence en code — c'est le temps.\n\nAI Empire fournit :\n• Templates Next.js 14 SaaS pré-construits\n• Intégration API Groq AI (tier gratuit)\n• Configuration facturation Stripe\n• Auth + dashboard admin\n\nChoisissez un template, personnalisez la couche produit, déployez.\n\nConcentrez-vous sur vos utilisateurs, pas sur l'infrastructure.`,
    hashtags: ['#IndieHacker', '#SoloFounder', '#SaaS', '#NextJS', '#AI'],
    cta: 'Commencer à construire',
    emojis: ['⏱️', '🎯', '🚀']
  }
]

export const facebookPosts: Post[] = [
  {
    id: 1,
    content: `AI Empire est en ligne — une marketplace de templates SaaS Next.js 14 avec des APIs IA intégrées.\n\nCe qui est inclus :\n• 6 templates prêts pour la production\n• Intégration API Groq AI\n• Facturation Stripe (abonnements + usage)\n• Auth + dashboard admin\n• Tier gratuit : 100 crédits API\n\nQue vous construisiez un outil IA, une marketplace ou un dashboard — il y a un template pour vous.`,
    hashtags: ['#NextJS', '#AI', '#SaaS', '#WebDev', '#Stripe'],
    cta: 'Explorer les templates',
    emojis: ['🚀', '💡', '✅']
  },
  {
    id: 2,
    content: `Comment ajouter l'IA à votre app Next.js en 5 minutes :\n\n1. Clonez un template AI Empire\n2. Ajoutez votre clé API Groq\n3. Utilisez l'endpoint /api/chat intégré\n4. Personnalisez l'interface\n5. Déployez sur Vercel\n\nLe tier gratuit vous donne 100 crédits pour tout tester.`,
    hashtags: ['#NextJS', '#Tutorial', '#AI', '#GroqAI', '#WebDev'],
    cta: 'Suivre le guide',
    emojis: ['📝', '⚡', '🎯']
  },
  {
    id: 3,
    content: `J'ai construit quelque chose d'utile : AI Empire.\n\nC'est une collection de templates SaaS Next.js 14 avec :\n• API Groq AI (inférence rapide)\n• Abonnements Stripe\n• Auth + rôles\n• Dashboard admin\n\nPublic cible : indépendants, petites équipes, tous ceux qui construisent des produits SaaS.\n\nRetours bienvenus — qu'est-ce qui rendrait ça plus utile pour vous ?`,
    hashtags: ['#BuildInPublic', '#SaaS', '#NextJS', '#AI', '#IndieHacker'],
    cta: 'Donner votre avis',
    emojis: ['🔨', '💬', '🛠️']
  },
  {
    id: 4,
    content: `Intégration Stripe, bien faite.\n\nChaque template AI Empire inclut :\n✅ Facturation par abonnement (mensuel/annuel)\n✅ Tarification à l'usage\n✅ Portail client\n✅ Gestion des webhooks\n✅ Mode test activé par défaut\n\nPas besoin de configurer les paiements de zéro.`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#WebDev'],
    cta: 'Voir en action',
    emojis: ['💳', '✅', '🔒']
  },
  {
    id: 5,
    content: `Tier gratuit AI Empire :\n• 100 crédits API\n• Inférence via Groq AI\n• Pas de carte bancaire requise\n• Tous les templates inclus\n• Support communautaire\n\nPassez à Pro pour plus de crédits et un support prioritaire.\n\nEssayez sur ai-empire-steel.vercel.app`,
    hashtags: ['#FreeTier', '#AI', '#SaaS', '#NextJS', '#GroqAI'],
    cta: 'Commencer gratuitement',
    emojis: ['🆓', '🚀', '💡']
  }
]

export const redditPosts: Post[] = [
  {
    id: 1,
    content: `J'ai construit une marketplace de templates SaaS Next.js 14 avec intégration API Groq AI\n\nSalut r/webdev — J'ai travaillé sur AI Empire, une collection de templates Next.js 14 production-ready pour construire des produits SaaS.\n\nCe qui est inclus :\n• 6 templates (saas-starter, marketplace, dashboard, blog, portfolio, landing)\n• Intégration API Groq AI (tier gratuit : 100 crédits)\n• Facturation Stripe (abonnements + usage)\n• Auth + accès par rôles\n• Dashboard admin\n\nTous les templates utilisent l'App Router, TypeScript et Tailwind CSS.\n\nJe recherche des retours honnêtes — qu'est-ce qui rendrait ça plus utile ?`,
    hashtags: ['#webdev', '#nextjs', '#saas'],
    cta: 'Découvrir',
    emojis: ['🚀', '💡']
  },
  {
    id: 2,
    content: `L'API Groq AI est étonnamment rapide — je l'ai ajoutée à mes templates SaaS Next.js 14\n\nJ'ai testé Groq pour l'inférence et c'est vraiment impressionnant :\n• Llama 3.1 8B à ~500 tokens/sec\n• Mixtral 8x7B à ~300 tokens/sec\n\nJ'ai construit AI Empire pour faciliter l'intégration de Groq dans les apps Next.js. Les templates incluent :\n• /api/chat (streaming)\n• /api/completions (sortie structurée)\n• /api/analyze (traitement de documents)\n\nTier gratuit : 100 crédits. Pas de carte bancaire requise.\n\nD'autres utilisent Groq ? Quelle est votre expérience ?`,
    hashtags: ['#nextjs', '#ai', '#groqai'],
    cta: 'Tester',
    emojis: ['⚡', '🤖']
  },
  {
    id: 3,
    content: `r/nextjs — Template SaaS Next.js 14 avec facturation Stripe pré-configurée\n\nJe vois régulièrement des posts sur les difficultés d'intégration Stripe dans Next.js. J'ai construit AI Empire pour résoudre ce problème.\n\nChaque template inclut :\n• Facturation par abonnement (mensuel/annuel)\n• Support tarification à l'usage\n• Portail client\n• Gestion des webhooks\n• Mode test activé\n\nPlus intégration API Groq AI et auth.\n\nTout en TypeScript, App Router, Tailwind. Apprécierais les retours.`,
    hashtags: ['#nextjs', '#stripe', '#saas'],
    cta: 'Jeter un œil',
    emojis: ['💳', '🔧']
  },
  {
    id: 4,
    content: `r/SaaS — Retours honnêtes recherchés sur ma marketplace de templates\n\nJ'ai construit AI Empire : une collection de templates SaaS Next.js 14 avec APIs IA.\n\nCe qui fonctionne :\n• 6 templates avec une qualité de code cohérente\n• Intégration Groq AI (tier gratuit)\n• Facturation Stripe incluse\n• Auth + dashboard admin\n\nCe dont je ne suis pas sûr :\n• Modèle de tarification (actuellement tier gratuit + Pro)\n• Sélection de templates (6 actuellement)\n• Complétude de la documentation\n\nRetours honnêtes appréciés. Que paieriez-vous dans une marketplace de templates SaaS ?`,
    hashtags: ['#saas', '#feedback', '#nextjs'],
    cta: 'Partager votre avis',
    emojis: ['💬', '🔍']
  },
  {
    id: 5,
    content: `J'ai construit un template SaaS Next.js 14 avec Groq AI + Stripe — je le partage pour avoir vos retours\n\nAI Empire est une marketplace de templates pour produits SaaS. Chaque template inclut :\n\n• Next.js 14 App Router\n• TypeScript + Tailwind\n• API Groq AI (tier gratuit : 100 crédits)\n• Facturation Stripe\n• Auth + rôles\n• Dashboard admin\n\nJe cible les indépendants et les petites équipes qui veulent livrer rapidement sans réinventer la roue.\n\nQuelles fonctionnalités aimeriez-vous dans un template SaaS ?`,
    hashtags: ['#nextjs', '#saas', '#indiehackers'],
    cta: 'Découvrir',
    emojis: ['📦', '🚀']
  }
]
