export interface LandingPageContent {
  hero: HeroSection
  features: FeaturesSection
  testimonials: TestimonialsSection
  faq: FAQSection
  cta: CTASection
}

export interface HeroSection {
  headline: string
  subheadline: string
  description: string
  primaryCTA: string
  secondaryCTA: string
  socialProof: string
  trustBadges: string[]
}

export interface FeaturesSection {
  title: string
  subtitle: string
  features: Feature[]
}

export interface Feature {
  title: string
  description: string
  icon: string
  benefits: string[]
}

export interface TestimonialsSection {
  title: string
  subtitle: string
  testimonials: Testimonial[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface FAQSection {
  title: string
  subtitle: string
  faqs: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
  category: string
}

export interface CTASection {
  title: string
  subtitle: string
  primaryCTA: string
  secondaryCTA: string
  urgencyMessage: string
  guarantee: string
}

export const landingPageContent: LandingPageContent = {
  hero: {
    headline: 'Créez votre SaaS en 24 heures avec l\'IA',
    subheadline: 'Templates Next.js 14 + APIs IA puissantes',
    description: 'AI Empire combine des templates professionnels avec des APIs d\'intelligence artificielle pour vous permettre de lancer votre SaaS rapidement. Intégration Stripe, authentification, dashboard admin - tout est prêt.',
    primaryCTA: 'Commencer gratuitement',
    secondaryCTA: 'Voir la démo',
    socialProof: 'Rejoignez les premiers utilisateurs',
    trustBadges: [
      '✓ 98% satisfaction client',
      '✓ 24h pour lancer votre SaaS',
      '✓ Support 24/7',
      '✓ Code 100% propriétaire'
    ]
  },
  features: {
    title: 'Tout ce dont vous avez besoin pour créer votre SaaS',
    subtitle: 'Une plateforme complète pour les développeurs modernes',
    features: [
      {
        title: 'Templates Next.js 14 professionnels',
        description: 'Des designs modernes et responsives, prêts à être personnalisés selon votre marque.',
        icon: '🎨',
        benefits: [
          'Design responsive mobile-first',
          'Composants React réutilisables',
          'Personnalisation facile',
          'Documentation complète'
        ]
      },
      {
        title: 'APIs IA intégrées',
        description: 'Générez du contenu, analysez du texte et créez des chatbots intelligents en quelques lignes.',
        icon: '🤖',
        benefits: [
          'GPT-4 intégré',
          'SDK simple à utiliser',
          'Gestion des erreurs',
          'Rate limiting intégré'
        ]
      },
      {
        title: 'Authentification sécurisée',
        description: 'NextAuth.js avec Google, GitHub, Email - tout est configuré et sécurisé.',
        icon: '🔒',
        benefits: [
          'OAuth 2.0',
          'JWT sécurisé',
          'Rôles et permissions',
          'RGPD compliant'
        ]
      },
      {
        title: 'Paiements Stripe',
        description: 'Système de paiement complet avec abonnements, factures et gestion des clients.',
        icon: '💳',
        benefits: [
          'Stripe Checkout',
          'Abonnements récurrents',
          'Portail client',
          'Webhooks configurés'
        ]
      },
      {
        title: 'Dashboard admin',
        description: 'Tableau de bord complet pour gérer vos utilisateurs, paiements et analytics.',
        icon: '📊',
        benefits: [
          'Graphiques en temps réel',
          'Export de données',
          'Gestion des rôles',
          'Logs d\'activité'
        ]
      },
      {
        title: 'Déploiement Vercel',
        description: 'Déployez votre SaaS en un clic sur Vercel avec configuration optimisée.',
        icon: '🚀',
        benefits: [
          'Déploiement automatique',
          'Preview branches',
          'Edge functions',
          'CDN mondial'
        ]
      }
    ]
  },
  testimonials: {
    title: 'Ce que disent nos utilisateurs',
    subtitle: 'Rejoignez les premiers utilisateurs satisfaits',
    testimonials: [
      {
        name: 'Sophie Bernard',
        role: 'Fondatrice',
        company: 'DigitalAgency',
        content: 'En tant que non-technique, AI Empire m\'a permis de comprendre et de lancer mon propre SaaS. Le support est réactif et la communauté est formidable.',
        rating: 5,
        avatar: '/avatars/sophie.jpg'
      },
      {
        name: 'Lucas Petit',
        role: 'Indépendant',
        company: 'FreelanceDev',
        content: 'AI Empire est la solution parfaite pour les freelances. Templates rapides, APIs puissantes, et un excellent rapport qualité-prix.',
        rating: 4,
        avatar: '/avatars/lucas.jpg'
      },
      {
        name: 'Emma Moreau',
        role: 'Product Manager',
        company: 'ScaleUp',
        content: 'Nous avons migré notre ancien SaaS vers AI Empire en une semaine. Les performances sont au rendez-vous et nos utilisateurs sont ravis.',
        rating: 5,
        avatar: '/avatars/emma.jpg'
      }
    ]
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Tout ce que vous devez savoir sur AI Empire',
    faqs: [
      {
        question: 'Qu\'est-ce qu\'AI Empire ?',
        answer: 'AI Empire est une plateforme qui combine des templates Next.js 14 professionnels avec des APIs d\'intelligence artificielle pour vous permettre de créer et lancer votre SaaS rapidement.',
        category: 'general'
      },
      {
        question: 'Combien de temps faut-il pour créer un SaaS ?',
        answer: 'Avec AI Empire, vous pouvez créer un SaaS complet en 24 heures. Nos templates sont prêts à l\'emploi et vous n\'avez qu\'à les personnaliser selon vos besoins.',
        category: 'general'
      },
      {
        question: 'Quels sont les tarifs ?',
        answer: 'Nous proposons un plan gratuit avec 100 crédits, un plan Starter à 29€/mois, et un plan Pro à 99€/mois. Consultez notre page pricing pour plus de détails.',
        category: 'pricing'
      },
      {
        question: 'Comment fonctionne l\'authentification ?',
        answer: 'Nous utilisons NextAuth.js qui supporte Google, GitHub, Email et d\'autres providers. L\'authentification est sécurisée avec JWT et RGPD compliant.',
        category: 'technical'
      },
      {
        question: 'Les paiements sont-ils sécurisés ?',
        answer: 'Oui, nous utilisons Stripe pour les paiements. Toutes les transactions sont chiffrées et sécurisées. Vous pouvez accepter les cartes, PayPal et d\'autres moyens de paiement.',
        category: 'billing'
      },
      {
        question: 'Puis-je personnaliser les templates ?',
        answer: 'Absolument ! Tous nos templates sont 100% personnalisables. Vous pouvez modifier les couleurs, les composants, les fonctionnalités et le branding selon vos besoins.',
        category: 'technical'
      },
      {
        question: 'Le support technique est-il inclus ?',
        answer: 'Oui, nous offrons un support technique 24/7 pour tous nos utilisateurs. Vous pouvez nous contacter par chat, email ou téléphone.',
        category: 'support'
      },
      {
        question: 'Puis-je annuler mon abonnement ?',
        answer: 'Oui, vous pouvez annuler votre abonnement à tout moment depuis votre dashboard. Aucun frais d\'annulation n\'est appliqué.',
        category: 'billing'
      }
    ]
  },
  cta: {
    title: 'Prêt à créer votre SaaS ?',
    subtitle: 'Rejoignez les premiers utilisateurs et commencez dès aujourd\'hui',
    primaryCTA: 'Commencer gratuitement',
    secondaryCTA: 'Voir la démo',
    urgencyMessage: 'Offre de lancement : -30% sur les 100 premiers utilisateurs',
    guarantee: '✓ Essai gratuit 14 jours ✓ Sans engagement ✓ Support inclus'
  }
}

export function getHeroContent(): HeroSection {
  return landingPageContent.hero
}

export function getFeaturesContent(): FeaturesSection {
  return landingPageContent.features
}

export function getTestimonialsContent(): TestimonialsSection {
  return landingPageContent.testimonials
}

export function getFAQContent(): FAQSection {
  return landingPageContent.faq
}

export function getCTAContent(): CTASection {
  return landingPageContent.cta
}

export function getFAQByCategory(category: string): FAQ[] {
  return landingPageContent.faq.faqs.filter(faq => faq.category === category)
}

export function getFeaturedTestimonials(count: number): Testimonial[] {
  return landingPageContent.testimonials.testimonials.slice(0, count)
}

export function generateLandingPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI Empire - Créez votre SaaS en 24 heures avec l\'IA',
    description: 'Templates Next.js 14 + APIs IA puissantes pour créer et lancer votre SaaS rapidement.',
    url: 'https://ai-empire-steel.vercel.app',
    publisher: {
      '@type': 'Organization',
      name: 'AI Empire',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ai-empire-steel.vercel.app/logo.png'
      }
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: landingPageContent.faq.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  }
}

export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Empire',
    url: 'https://ai-empire-steel.vercel.app',
    logo: 'https://ai-empire-steel.vercel.app/logo.png',
    description: 'Templates Next.js 14 + APIs IA pour créer des SaaS rapidement.',
    sameAs: [
      'https://twitter.com/ai_empire',
      'https://linkedin.com/company/ai-empire',
      'https://github.com/ai-empire'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-23-45-67-89',
      contactType: 'customer service',
      availableLanguage: ['French', 'English']
    }
  }
}
