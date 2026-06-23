import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'fr',
  productDescriptionShort:
    "AI Empire est une plateforme de développement qui combine des modèles professionnels Next.js 14 avec une API IA unifiée (Groq et Gemini), la facturation Stripe et l'authentification — permettant aux développeurs de créer et déployer des produits SaaS propulsés par l'IA plus rapidement.",
  productDescriptionLong:
    "AI Empire offre un kit d'outils complet pour la création de produits SaaS propulsés par l'IA. La plateforme propose des modèles Next.js 14 prêts pour la production — dont NeuraStore (e-commerce), NeuraBlog (publication de contenus) et NeuraPortfolio (portfolio de développeur) — chacun doté d'un design responsive moderne, du mode sombre et d'une optimisation SEO intégrée.\n\nTous les modèles s'intègrent à l'API unifiée d'AI Empire, qui donne accès aux modèles Groq et Gemini via un seul endpoint. La plateforme comprend également une intégration de facturation Stripe, une authentification et un tableau de bord administrateur, réduisant le temps de développement typique d'un SaaS de plusieurs mois à quelques jours.\n\nAI Empire s'adresse aux développeurs, aux indépendants, aux fondateurs de startups et aux petites et moyennes entreprises qui souhaitent lancer des produits propulsés par l'IA sans construire l'infrastructure de zéro. La plateforme fonctionne selon un modèle freemium : l'API IA propose un forfait gratuit avec 100 crédits, et les modèles sont disponibles à l'achat individuel (19 € à 29 €) ou en pack complet (299 €).",
  keyFeatures: [
    'API IA unifiée — Accès aux modèles Groq et Gemini via un seul endpoint',
    'Modèles professionnels Next.js 14 — NeuraStore, NeuraBlog, NeuraPortfolio et plus',
    'Intégration de facturation Stripe — Paiements prêts à l\'emploi',
    'Authentification incluse — Gestion des utilisateurs sans configuration tierce',
    'Tableau de bord administrateur — Gestion des utilisateurs, analytics et contenus',
    'Forfait gratuit — 100 crédits API à l\'inscription, sans carte bancaire',
    'Design responsive — Modèles mobile-first avec mode sombre',
    'Optimisation SEO — Balises meta, données structurées et optimisation des performances',
    'Prêt pour Vercel — Déploiement en un clic pour toutes les modèles',
    'SDK JavaScript et Python — Intégration conviviale pour les développeurs',
  ],
  pricingTable: [
    {
      name: 'Forfait gratuit',
      price: '0 €',
      description: 'Commencez avec les API IA sans frais',
      features: [
        '100 crédits API IA',
        'Accès à Groq et Gemini',
        'API REST + SDK',
        'Support communautaire',
        'Sans carte bancaire',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '19 €',
      description: 'Modèle de blog professionnel pour Next.js 14',
      features: [
        'Support MDX',
        'Mode sombre',
        'Flux RSS',
        'Optimisation SEO',
        'Intégration newsletter',
        'Achat unique',
      ],
    },
    {
      name: 'NeuraStore',
      price: '29 €',
      description: 'Modèle e-commerce complet pour Next.js 14',
      features: [
        'Paiements Stripe',
        'Gestion du panier',
        'Tableau de bord administrateur',
        'Recommandations IA de produits',
        'Design responsive',
        'Achat unique',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '29 €',
      description: 'Modèle de portfolio développeur pour Next.js 14',
      features: [
        'Animations Framer Motion',
        'Mode sombre',
        'Formulaire de contact',
        'Design responsive',
        'Optimisation SEO',
        'Achat unique',
      ],
    },
    {
      name: 'Pack complet',
      price: '299 €',
      description: 'Toutes les modèles plus le support prioritaire',
      features: [
        'Les 6 modèles',
        'Support prioritaire',
        'Mises à jour gratuites',
        'Accès anticipé aux nouvelles modèles',
        'Licence commerciale',
        'Économisez plus de 400 € vs achat individuel',
      ],
    },
  ],
  founderQuote: {
    text: "Nous avons créé AI Empire parce que nous croyons que chaque développeur devrait pouvoir créer des produits propulsés par l'IA sans passer des mois sur l'infrastructure. Nos modèles et notre API vous permettent de vous concentrer sur ce qui compte vraiment — votre produit et vos utilisateurs.",
    attribution: "Équipe AI Empire",
    title: "Fondateurs d'AI Empire",
  },
  logoUsage: {
    primaryUsage: "Utilisez le logo d'AI Empire sur un fond blanc ou foncé avec un contraste suffisant.",
    clearSpace: "Maintenez un espace libre minimal égal à la hauteur du « A » du logo sur tous les côtés.",
    minimumSize: "Le logo ne doit pas être reproduit à une taille inférieure à 120 px de large (numérique) ou 30 mm (impression).",
    donts: [
      "Ne pas étirer, pivoter ni déformer le logo",
      "Ne pas modifier les couleurs du logo",
      "Ne pas placer le logo sur des arrière-plans encombrés sans conteneur",
      "Ne pas ajouter d'effets tels que des ombres, des lueurs ou des dégradés au logo",
      "Ne pas réorganiser ni modifier les éléments du logo",
    ],
  },
  contactInfo: {
    press: 'presse@ai-empire.dev',
    partnerships: 'partenariats@ai-empire.dev',
    general: 'bonjour@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    "AI Empire est une plateforme de développement qui propose des modèles professionnels Next.js 14 avec des API IA intégrées (Groq et Gemini), la facturation Stripe et l'authentification. Créée pour aider les développeurs à créer des produits SaaS propulsés par l'IA plus rapidement, AI Empire s'adresse aux développeurs, aux indépendants et aux fondateurs de startups du monde entier. La plateforme propose un forfait API gratuit et des modèles à partir de 19 €. Pour plus d'informations, rendez-vous sur ai-empire-steel.vercel.app.",
};
