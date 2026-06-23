export interface SocialMediaPost {
  platform: 'twitter' | 'linkedin' | 'facebook'
  content: string
  hashtags: string[]
  cta: string
  emojis: string[]
}

export interface TwitterPost {
  id: number
  content: string
  hashtags: string[]
  cta: string
  emojis: string[]
}

export interface LinkedInPost {
  id: number
  content: string
  hashtags: string[]
  cta: string
  emojis: string[]
}

export interface FacebookPost {
  id: number
  content: string
  hashtags: string[]
  cta: string
  emojis: string[]
}

export const twitterPosts: TwitterPost[] = [
  {
    id: 1,
    content: `🚀 Révolutionnez votre développement avec AI Empire ! 

Intégrez des APIs IA puissantes en quelques clics. 
Notre plateforme vous offre :
• Templates Next.js 14 premium
• APIs IA prêtes à l'emploi
• Déploiement instantané sur Vercel

Lancement spécial : -30% sur tous les templates !
→ Découvrez maintenant sur ai-empire-steel.vercel.app`,
    hashtags: ['#AI', '#NextJS', '#WebDev', '#SaaS', '#Templates'],
    cta: 'Commencez votre essai gratuit',
    emojis: ['🚀', '💡', '⚡', '🎯']
  },
  {
    id: 2,
    content: `💡 Les développeurs qui utilisent AI Empire développent 3x plus vite !

Notre kit complet inclut :
✅ Authentification intégrée
✅ Paiements Stripe
✅ Dashboard admin
✅ Templates responsive

Économisez 200+ heures de développement.
Rejoignez les premiers utilisateurs satisfaits !`,
    hashtags: ['#Productivity', '#DevTools', '#AI', '#Automation'],
    cta: 'Testez gratuitement',
    emojis: ['💡', '✅', '⚡', '🔥']
  },
  {
    id: 3,
    content: `🎯 "AI Empire a transformé notre façon de développer des SaaS"

Témoignage de @DevPro_FR :
"En 24h, nous avons lancé notre MVP grâce aux templates AI Empire. 
Le support est exceptionnel !"

Devenez le prochain succès story 🚀`,
    hashtags: ['#Testimonial', '#Success', '#AI', '#SaaS'],
    cta: 'Lisez les témoignages',
    emojis: ['🎯', '⭐', '🚀', '💜']
  },
  {
    id: 4,
    content: `🔥 NOUVEAU : AI Empire v2.0 est arrivé !

Ce qui a changé :
✨ Templates React 18+ optimisés
✨ APIs GPT-4 intégrées
✨ Analytics en temps réel
✨ Support prioritaire

Offre de lancement : 50% de réduction
Utilisez le code AIEMPIRE50`,
    hashtags: ['#Launch', '#AI', '#React', '#NextJS', '#Promo'],
    cta: 'Profitez de l\'offre',
    emojis: ['🔥', '✨', '🚀', '💰']
  },
  {
    id: 5,
    content: `📊 Les chiffres parlent :

• 98% de satisfaction client
• 24h pour lancer un SaaS
• 60% de temps gagné
• 3x plus rapide que le développement traditionnel

AI Empire : La référence pour les développeurs modernes.

Découvrez pourquoi les premiers utilisateurs nous font confiance 👇`,
    hashtags: ['#Stats', '#AI', '#WebDev', '#Productivity'],
    cta: 'Rejoignez-nous',
    emojis: ['📊', '📈', '🎯', '✅']
  },
  {
    id: 6,
    content: `💡 Astuce du jour : Comment intégrer l'IA dans votre SaaS en 5 minutes

1️⃣ Installez le SDK AI Empire
2️⃣ Configurez votre clé API
3️⃣ Utilisez nos templates pré-configurés
4️⃣ Déployez sur Vercel
5️⃣ Profitez de l'IA !

Simple, rapide, efficace.
→ Tutorial complet sur notre blog`,
    hashtags: ['#Tutorial', '#AI', '#NextJS', '#DevTips'],
    cta: 'Suivez le tutoriel',
    emojis: ['💡', '📝', '⚡', '🎯']
  },
  {
    id: 7,
    content: `🎉 Merci à tous nos utilisateurs !

Merci à toute notre communauté 🙏
Pour célébrer :
🎁 -40% sur tous les templates
🎁 100 crédits IA gratuits
🎁 Support premium 3 mois

Code : MILESTONE5000
Valable jusqu'à dimanche minuit !`,
    hashtags: ['#Milestone', '#Community', '#AI', '#Promo'],
    cta: 'Profitez de l\'offre',
    emojis: ['🎉', '🙏', '🎁', '💰']
  },
  {
    id: 8,
    content: `⚡ Votre SaaS en 24h ? C'est possible !

AI Empire vous offre :
🔧 Templates Next.js 14 professionnels
🤖 APIs IA intégrées
💳 Système de paiement Stripe
📊 Dashboard analytics

Tout est prêt, il ne vous reste qu'à personnaliser !

Commencez maintenant 👇`,
    hashtags: ['#SaaS', '#FastLaunch', '#AI', '#NextJS'],
    cta: 'Lancez votre SaaS',
    emojis: ['⚡', '🔧', '🤖', '🚀']
  },
  {
    id: 9,
    content: `🧠 L'avenir du développement, c'est l'IA !

AI Empire combine :
• Templates professionnels
• APIs IA puissantes
• Support technique expert
• Communauté active

Développez plus vite, mieux, plus intelligemment.

Rejoignez la révolution AI 👇`,
    hashtags: ['#Future', '#AI', '#Innovation', '#WebDev'],
    cta: 'Rejoignez la révolution',
    emojis: ['🧠', '🚀', '💡', '⚡']
  },
  {
    id: 10,
    content: `🎯 Offre spéciale développeurs !

Seulement aujourd'hui :
🔥 -50% sur le plan Pro
🔥 200 crédits IA gratuits
🔥 Support prioritaire 6 mois

Ne manquez pas cette opportunité unique !
Code : DEVPLAN50

→ ai-empire-steel.vercel.app`,
    hashtags: ['#SpecialOffer', '#AI', '#DevTools', '#Promo'],
    cta: 'Profitez maintenant',
    emojis: ['🎯', '🔥', '💰', '⚡']
  }
]

export const linkedinPosts: LinkedInPost[] = [
  {
    id: 1,
    content: `🚀 AI Empire : La plateforme qui révolutionne le développement SaaS

En tant que développeur, je sais à quel point le temps de développement peut être un défi. C'est pourquoi nous avons créé AI Empire : une plateforme complète qui combine des templates Next.js 14 professionnels avec des APIs IA puissantes.

Ce qui nous différencie :
✅ Templates prêts à l'emploi
✅ Intégration IA transparente
✅ Support technique expert
✅ Communauté active de développeurs

Résultat ? Nos utilisateurs développent 3x plus vite tout en maintenant une haute qualité de code.

Vous souhaitez transformer votre façon de développer ?

→ Découvrez AI Empire : ai-empire-steel.vercel.app`,
    hashtags: ['#AI', '#WebDevelopment', '#SaaS', '#Innovation', '#NextJS'],
    cta: 'En savoir plus',
    emojis: ['🚀', '✅', '💡', '🎯']
  },
  {
    id: 2,
    content: `💡 Comment AI Empire aide les entreprises à innover plus rapidement

Dans un monde où la vitesse de mise sur le marché est cruciale, AI Empire offre aux équipes de développement un avantage concurrentiel significatif.

Nos clients constatent :
📊 60% de réduction du temps de développement
🎯 95% de satisfaction utilisateur
⚡ Déploiement en 24h contre 3 semaines
💰 ROI atteint en 2 mois

La clé ? Des templates professionnels combinés à des APIs IA de pointe, le tout soutenu par un support technique d'exception.

Prêt à accélérer votre innovation ?

→ ai-empire-steel.vercel.app`,
    hashtags: ['#Innovation', '#Business', '#AI', '#Productivity', '#SaaS'],
    cta: 'Découvrez notre approche',
    emojis: ['💡', '📊', '⚡', '🚀']
  },
  {
    id: 3,
    content: `🎯 Témoignage client : Comment [Entreprise] a transformé son activité avec AI Empire

"AI Empire nous a permis de lancer notre SaaS en 24 heures au lieu des 3 mois prévus. Les templates sont professionnels, l'intégration IA est transparente, et le support technique est exceptionnel."

— Directeur Technique, [Entreprise]

Ce qui a fait la différence :
🔧 Templates Next.js 14 optimisés
🤖 APIs IA intégrées
💳 Système de paiement Stripe
📊 Dashboard analytics

Vous voulez obtenir les mêmes résultats ?

→ Testez AI Empire gratuitement`,
    hashtags: ['#Testimonial', '#SuccessStory', '#AI', '#WebDevelopment'],
    cta: 'Lisez plus de témoignages',
    emojis: ['🎯', '⭐', '🚀', '💜']
  },
  {
    id: 4,
    content: `🧠 L'avenir du développement web est intelligent

AI Empire combine l'intelligence artificielle avec des outils de développement modernes pour créer une expérience unique :

✨ Génération de code assistée par IA
✨ Templates adaptatifs
✨ Optimisation automatique des performances
✨ Suggestions d'amélioration en temps réel

Nous ne créons pas seulement des outils, nous créons l'avenir du développement.

Rejoignez les premiers utilisateurs qui font déjà partie de cette révolution.

→ ai-empire-steel.vercel.app`,
    hashtags: ['#FutureOfWork', '#AI', '#Innovation', '#WebDev', '#Technology'],
    cta: 'Rejoignez la révolution',
    emojis: ['🧠', '✨', '🚀', '💡']
  },
  {
    id: 5,
    content: `📊 AI Empire en chiffres :

• Développeurs actifs
• 98% de satisfaction client
• 24h pour lancer un SaaS
• 60% de temps gagné
• 3x plus rapide que le développement traditionnel
• 100+ templates professionnels
• 50+ APIs IA disponibles

Ces chiffres témoignent de notre engagement à fournir des solutions qui font véritablement la différence pour les développeurs.

Vous souhaitez rejoindre cette communauté grandissante ?

→ ai-empire-steel.vercel.app`,
    hashtags: ['#Stats', '#Growth', '#AI', '#Community', '#Success'],
    cta: 'Rejoignez-nous',
    emojis: ['📊', '📈', '🎯', '✅']
  }
]

export const facebookPosts: FacebookPost[] = [
  {
    id: 1,
    content: `🎉 FANTASTIQUE ! Merci à toute notre communauté !

Merci infiniment à toute notre communauté pour votre confiance et votre soutien 🙏

Pour célébrer ce jalon incroyable, nous avons préparé des offres spéciales :

🎁 -40% sur TOUS nos templates
🎁 100 crédits IA gratuits pour chaque nouvel utilisateur
🎁 Support premium gratuit pendant 3 mois

Code promo : MILESTONE5000
Valable jusqu'à dimanche minuit !

C'est le moment parfait pour rejoindre l'aventure AI Empire 🚀

Découvrez tout sur ai-empire-steel.vercel.app`,
    hashtags: ['#AI', '#Milestone', '#Community', '#Promo', '#WebDev'],
    cta: 'Profitez de l\'offre',
    emojis: ['🎉', '🙏', '🎁', '🚀', '💜']
  },
  {
    id: 2,
    content: `💡 Vous rêvez de lancer votre SaaS en 24 heures ? 

AI Empire rend cela possible ! 🚀

Notre plateforme vous offre tout ce dont vous avez besoin :
✅ Templates Next.js 14 professionnels
✅ APIs IA intégrées et prêtes à l'emploi
✅ Système de paiement Stripe configuré
✅ Dashboard admin complet
✅ Support technique expert 24/7

Concrètement, vous pouvez avoir votre SaaS fonctionnel demain matin !

Comment ça marche ?
1️⃣ Choisissez un template adapté à votre projet
2️⃣ Personnalisez-le selon vos besoins
3️⃣ Connectez les APIs IA
4️⃣ Déployez sur Vercel
5️⃣ Lancez votre business ! 

Vous voulez voir comment ça marche exactement ?
→ Regardez notre démo gratuite sur ai-empire-steel.vercel.app`,
    hashtags: ['#SaaS', '#Launch', '#AI', '#Tutorial', '#WebDev'],
    cta: 'Regardez la démo',
    emojis: ['💡', '🚀', '✅', '🎯', '⚡']
  },
  {
    id: 3,
    content: `🔥 ATTENTION : Offre limitée pour les développeurs !

Seulement cette semaine :
• -50% sur le plan Pro AI Empire
• 200 crédits IA gratuits (valeur 200€)
• Support prioritaire pendant 6 mois
• Accès à toutes les mises à jour futures

Code : DEVPLAN50

Pourquoi profiter de cette offre ?

Parce que AI Empire est la solution la plus complète pour développer des SaaS modernes :
🧠 Intelligence artificielle intégrée
⚡ Templates performants et responsive
💰 Monétisation facile avec Stripe
📊 Analytics en temps réel

Cette offre expire vendredi minuit ! Ne manquez pas votre chance de transformer votre façon de développer.

→ ai-empire-steel.vercel.app`,
    hashtags: ['#SpecialOffer', '#AI', '#DevTools', '#Promo', '#LimitedTime'],
    cta: 'Profitez maintenant',
    emojis: ['🔥', '💰', '⚡', '🎯', '🚀']
  }
]

export function generateSocialPost(type: 'twitter' | 'linkedin' | 'facebook', content: string, hashtags: string[], cta: string, emojis: string[]): SocialMediaPost {
  return {
    platform: type,
    content,
    hashtags,
    cta,
    emojis,
  }
}

export function getTwitterPosts(): TwitterPost[] {
  return twitterPosts
}

export function getLinkedInPosts(): LinkedInPost[] {
  return linkedinPosts
}

export function getFacebookPosts(): FacebookPost[] {
  return facebookPosts
}

export function getRandomTwitterPost(): TwitterPost {
  return twitterPosts[Math.floor(Math.random() * twitterPosts.length)]
}

export function getRandomLinkedInPost(): LinkedInPost {
  return linkedinPosts[Math.floor(Math.random() * linkedinPosts.length)]
}

export function getRandomFacebookPost(): FacebookPost {
  return facebookPosts[Math.floor(Math.random() * facebookPosts.length)]
}
