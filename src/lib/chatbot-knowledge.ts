export interface KnowledgeEntry {
  keywords: string[]
  response: string
  category: string
  priority: number
}

export const knowledgeBase: KnowledgeEntry[] = [
  // GREETING — highest priority
  {
    keywords: ['bonjour', 'salut', 'hello', 'hey', 'coucou', 'bonsoir', 'good morning', 'good evening'],
    response: 'Bonjour ! Bienvenue sur NeuraAPI. Je suis votre assistant intelligent. 👋\n\nJe peux vous aider avec :\n• 🤖 Nos APIs IA (génération de texte, code, SEO)\n• 📦 Templates Next.js premium\n• 💰 Tarifs et abonnements\n• 🛠 Support technique\n\nComment puis-je vous aider ?',
    category: 'greeting',
    priority: 100,
  },

  // API OVERVIEW — high priority
  {
    keywords: ['api', 'endpoint', 'requête', 'request', 'intégrer', 'intégration', 'utiliser api', 'how to use api', 'api endpoints'],
    response: 'Nos APIs IA sont accessibles via 3 endpoints :\n\n1️⃣ **POST /api/ai/generate** — Génération de texte\n2️⃣ **POST /api/ai/seo** — Contenu optimisé SEO\n3️⃣ **POST /api/ai/code** — Génération de code\n\n🔑 Authentification : `x-api-key: napi_votre_clé`\n\n📊 Rate limiting : Starter 10 req/min, Pro 100 req/min, Enterprise illimité\n\n👉 Consultez /docs pour la documentation complète.',
    category: 'api',
    priority: 90,
  },

  // API GENERATE — specific endpoint
  {
    keywords: ['generate', 'génération', 'texte', 'contenu', 'article', 'blog', 'générer', 'text generation'],
    response: 'L\'endpoint **POST /api/ai/generate** génère du texte à partir d\'un prompt.\n\n```json\n{\n  "prompt": "Écris un article sur l\'IA",\n  "maxTokens": 1000\n}\n```\n\n⚡ Réponse en <200ms via Groq\n💰 1 crédit par requête (Starter)\n\n👉 Voir /docs pour les détails.',
    category: 'api',
    priority: 85,
  },

  // API SEO
  {
    keywords: ['seo', 'référencement', 'optimisation', 'google', 'métadonnée', 'meta', 'seo content'],
    response: 'L\'endpoint **POST /api/ai/seo** génère du contenu optimisé pour le SEO.\n\n```json\n{\n  "topic": "Intelligence artificielle",\n  "keywords": ["IA", "machine learning"],\n  "maxTokens": 2000\n}\n```\n\nRetourne : titre SEO, méta-description, contenu structuré.',
    category: 'api',
    priority: 85,
  },

  // API CODE
  {
    keywords: ['code', 'coding', 'programmation', 'developer', 'développeur', 'react', 'typescript', 'python', 'code generation'],
    response: 'L\'endpoint **POST /api/ai/code** génère du code à partir d\'une description.\n\n```json\n{\n  "description": "Composant React pour une liste de tâches",\n  "language": "typescript",\n  "framework": "react"\n}\n```\n\nRetourne le code généré avec le langage et framework spécifiés.',
    category: 'api',
    priority: 85,
  },

  // API CHAT (chatbot itself)
  {
    keywords: ['chatbot', 'chat ia', 'assistant ia', 'ai chat', 'bot', 'assistant'],
    response: 'Vous êtes déjà en train d\'utiliser le chatbot ! 🤖\n\nCet assistant utilise une IA réelle (Groq/OpenAI) pour répondre à vos questions sur NeuraAPI.\n\nIl peut vous aider avec :\n• Les APIs IA et comment les utiliser\n• Les templates et leur personnalisation\n• Les tarifs et les plans\n• Le support technique\n\nPosez-moi votre question directement !',
    category: 'chatbot',
    priority: 95,
  },

  // PRICING — specific
  {
    keywords: ['prix', 'tarif', 'coût', 'combien', 'cher', 'abonnement', 'price', 'pricing', 'cost'],
    response: 'Nos tarifs :\n\n🟢 **Starter** — Gratuit (100 crédits/mois)\n🔵 **Pro** — 19€/mois (10 000 crédits) — Offre -30% avec code LANCEMENT30\n🟣 **Enterprise** — 69€/mois (illimité)\n\n👉 /pricing pour les détails',
    category: 'pricing',
    priority: 88,
  },

  // FREE TIER
  {
    keywords: ['gratuit', 'free', 'essai', 'trial', 'tester', 'essayer', 'sans payer', 'no cost', 'free tier', 'without paying'],
    response: 'Le plan **Starter est 100% gratuit** :\n• 100 crédits/mois\n• 3 endpoints IA (generate, SEO, code)\n• Documentation complète\n• Support par email\n\n💡 Pas de limite de temps — le tier gratuit est permanent !\n\nInscrivez-vous sur /register — aucune carte bancaire requise.',
    category: 'pricing',
    priority: 89,
  },

  // PROMO
  {
    keywords: ['promo', 'lancement', 'réduction', 'remise', 'offre', 'code promo', 'coupon', 'discount', 'launch offer'],
    response: '🎉 Offre de lancement !\n\nCode **LANCEMENT30** → -30% sur le premier mois Pro ou Enterprise.\n\n👉 Inscrivez-vous sur /register et utilisez le code.',
    category: 'promotions',
    priority: 86,
  },

  // UPGRADE
  {
    keywords: ['upgrade', 'pro', 'premium', 'passer pro', 'upgrader'],
    response: '⬆️ Passez au plan **Pro** pour débloquer tout le potentiel :\n\n🔵 **19€/mois** au lieu de 27€ (-30% avec le code **LANCEMENT30**)\n• 10 000 crédits/mois\n• Tous les endpoints IA\n• Templates premium inclus\n• Support prioritaire\n• Analytics avancés\n\n👉 /pricing pour comparer les plans et utiliser votre code promo.',
    category: 'upgrade',
    priority: 88,
  },

  // WHY NEURAAPI
  {
    keywords: ['why', 'pourquoi', 'why neuraapi', 'why you', 'avantage', 'advantage', 'difference', 'vs openai'],
    response: '🏆 Pourquoi NeuraAPI ?\n\n✅ **10 langues** — Interface et API multilingue (FR, EN, ES, DE, IT, PT, JA, ZH, KO, AR)\n✅ **Tier gratuit** — 100 crédits/mois, pas de carte bancaire\n✅ **Setup instantané** — Clé API en 30 secondes\n✅ **Templates premium** — 10 templates Next.js prêts à l\'emploi\n\n💡 **vs OpenAI direct** :\n• OpenAI = anglais uniquement, plus cher\n• NeuraAPI = 10 langues, tier gratuit, plus abordable\n\n👉 /register pour essayer gratuitement.',
    category: 'why',
    priority: 87,
  },

  // TEMPLATES — specific
  {
    keywords: ['template', 'templates', 'theme', 'thème', 'modèle', 'starter kit', 'nextjs template', 'boilerplate', 'starter'],
    response: 'Nos 10 templates premium Next.js :\n\n📦 **NeuraSaaS** — 97€ (SaaS Starter)\n📦 **NeuraCommerce** — 129€ (E-commerce)\n📦 **NeuraBlog** — 59€ (Blog)\n📦 **NeuraLanding** — 79€ (Landing Page)\n📦 **NeuraDashboard** — 99€ (Dashboard Admin)\n📦 **NeuraStore** — 149€ (Boutique)\n📦 **NeuraPortfolio** — 59€ (Portfolio)\n📦 **NeuraStudio** — 89€ (Agence)\n📦 **NeuraChat** — 69€ (Chat IA)\n📦 **NeuraAPI** — 199€ (Plateforme API)\n\n💰 De 59€ à 199€ — code source complet, docs, mises à jour gratuites.\n\n👉 /templates pour les démos et détails.',
    category: 'templates',
    priority: 88,
  },

  // ACCOUNT — start
  {
    keywords: ['inscription', 'register', 'signup', 'créer compte', 's\'inscrire', 'create account', 'sign up'],
    response: 'Inscription gratuite en 3 étapes :\n\n1️⃣ Allez sur /register\n2️⃣ Entrez votre email\n3️⃣ Votre clé API est générée instantanément\n\n✅ 100 crédits offerts\n✅ Aucune carte bancaire\n✅ Accès immédiat',
    category: 'account',
    priority: 85,
  },

  // ACCOUNT — login
  {
    keywords: ['connexion', 'login', 'connecter', 'se connecter', 'dashboard', 'espace', 'sign in'],
    response: 'Pour accéder à votre espace :\n\n1️⃣ Allez sur /login\n2️⃣ Entrez votre email et mot de passe\n3️⃣ Accédez à votre dashboard\n\nVous y trouverez votre clé API, vos crédits, et vos commandes.',
    category: 'account',
    priority: 84,
  },

  // ACCOUNT — API key
  {
    keywords: ['clé api', 'clé', 'api key', 'key', 'token', 'authentification', 'auth', 'napi_'],
    response: 'Votre clé API est générée lors de l\'inscription.\n\nTrouvez-la dans :\n• Dashboard → Mon Espace → Clé API\n• Email de confirmation\n\nFormat : `napi_XXXXXXXXXXXXXXXXXXXXXXXX`\n\nUtilisez-la dans vos requêtes :\n```\n-H "x-api-key: napi_votre_cle"\n```',
    category: 'account',
    priority: 83,
  },

  // BILLING — payment
  {
    keywords: ['paiement', 'payment', 'payer', 'stripe', 'carte', 'visa', 'mastercard', 'paypal', 'apple pay'],
    response: 'Paiements sécurisés via Stripe :\n\n💳 Visa, Mastercard, Amex\n📱 Apple Pay, Google Pay\n💰 PayPal\n\nTous les paiements sont chiffrés et sécurisés. Nous ne stockons pas vos données bancaires.',
    category: 'billing',
    priority: 82,
  },

  // BILLING — refund
  {
    keywords: ['remboursement', 'refund', 'annuler', 'annulation', 'cancel', 'rembourser', 'money back'],
    response: '🔄 Garantie satisfait ou remboursé 30 jours.\n\nContactez-nous à contact@neuraapi.com pour toute demande de remboursement. Nous traitons les demandes sous 48h.',
    category: 'billing',
    priority: 81,
  },

  // SECURITY
  {
    keywords: ['sécurité', 'security', 'protection', 'données', 'data', 'chiffrement', 'ssl', 'sécurisé'],
    response: '🔒 Sécurité NeuraAPI :\n• Chiffrement TLS/SSL\n• Authentification par clé API\n• Rate limiting (protection attaques)\n• Données non stockées côté serveur\n• Conformité RGPD\n• Paiements sécurisés par Stripe',
    category: 'security',
    priority: 80,
  },

  // GDPR
  {
    keywords: ['rgpd', 'gdpr', 'confidentialité', 'privacy', 'données personnelles', 'suppression données', 'data protection'],
    response: '📋 Conformité RGPD :\n\n• Données minimales collectées\n• Droit d\'accès, rectification, suppression\n• Suppression sur demande : contact@neuraapi.com\n• Données supprimées sous 30 jours\n• Hébergement en Europe (Vercel)\n\n👉 /politique-confidentialite pour les détails.',
    category: 'legal',
    priority: 79,
  },

  // SUPPORT
  {
    keywords: ['contact', 'support', 'email', 'téléphone', 'phone', 'aide', 'help', 'assistance', 'reach out'],
    response: '📬 Contact :\n• Email : contact@neuraapi.com\n• Téléphone : 06 29 41 85 24 (lun-ven 9h-18h)\n• Page : /contact\n\nNous répondons sous 24h ouvrées.',
    category: 'support',
    priority: 78,
  },

  // TROUBLESHOOTING
  {
    keywords: ['bug', 'erreur', 'error', 'problème', 'marche pas', 'ne fonctionne pas', 'crash', '401', '403', '500'],
    response: '🔧 En cas de problème :\n\n1. Vérifiez votre clé API (Dashboard → Mon Espace)\n2. Vérifiez vos crédits restants\n3. Consultez la documentation : /docs\n4. Contactez le support : contact@neuraapi.com\n\nCodes d\'erreur courants :\n• 401 = Clé API invalide\n• 402 = Crédits insuffisants\n• 429 = Trop de requêtes (attendez 1 min)',
    category: 'support',
    priority: 77,
  },

  // UPTIME
  {
    keywords: ['uptime', 'disponibilité', 'panne', 'maintenance', 'status', 'hors ligne', 'offline'],
    response: '📊 Statut du système :\n\n• Uptime : 99.9%\n• Temps de réponse API : <200ms\n• Surveillance : /api/monitoring\n• Status : /status\n\nEn cas de problème, consultez /status pour les dernières mises à jour.',
    category: 'support',
    priority: 76,
  },

  // DOCS
  {
    keywords: ['documentation', 'docs', 'guide', 'tutorial', 'tutoriel', 'apprendre', 'learn'],
    response: '📚 Documentation :\n\n• /docs — Documentation API complète\n• /guide — Guide de démarrage étape par étape\n• /blog — Articles et tutoriels\n\nChaque endpoint est documenté avec des exemples de code.',
    category: 'docs',
    priority: 82,
  },

  // GETTING STARTED
  {
    keywords: ['start', 'commencer', 'démarrer', 'getting started', 'premier pas', 'first step', 'première étape', 'quickstart', 'how to start'],
    response: '🚀 Commencez en 3 étapes simples :\n\n1️⃣ **Inscrivez-vous** sur /register — gratuit, sans carte bancaire\n2️⃣ **Récupérez votre clé API** instantanément dans le dashboard\n3️⃣ **Faites votre premier appel** :\n```\ncurl -X POST https://api.neuraapi.com/generate \\\n  -H "x-api-key: napi_votre_cle" \\\n  -d \'{"prompt":"Bonjour"}\'\n```\n\n✅ 100 crédits offerts dès l\'inscription\n✅ Aucune carte bancaire requise\n✅ Clé API générée instantanément\n\n👉 /register pour démarrer maintenant !',
    category: 'guide',
    priority: 92,
  },

  // COURTESY — thank you
  {
    keywords: ['merci', 'thanks', 'super', 'parfait', 'génial', 'bravo', 'excellent'],
    response: 'Avec plaisir ! 😊 N\'hésitez pas si vous avez d\'autres questions. Je suis là pour vous aider.',
    category: 'courtesy',
    priority: 50,
  },

  // COURTESY — goodbye
  {
    keywords: ['au revoir', 'bye', 'à bientôt', 'goodbye', 'see you'],
    response: 'Au revoir ! Merci d\'avoir utilisé NeuraAPI. 🙏\n\nN\'hésitez pas à revenir si vous avez des questions. Bonne journée !',
    category: 'courtesy',
    priority: 50,
  },
]

export const quickActions = [
  { label: '📦 Templates', message: 'Montrez-moi vos templates' },
  { label: '💰 Tarifs', message: 'Quels sont vos tarifs ?' },
  { label: '📚 Docs', message: 'Où est la documentation ?' },
  { label: '📞 Contact', message: 'Comment vous contacter ?' },
]

export function findResponse(input: string, locale: string = 'fr'): string {
  const normalized = input.toLowerCase().trim()

  // Sort by priority (highest first)
  const sorted = [...knowledgeBase].sort((a, b) => b.priority - a.priority)

  // Find first matching entry
  for (const entry of sorted) {
    for (const keyword of entry.keywords) {
      if (normalized.includes(keyword)) {
        // Return English response if locale is not French
        if (locale !== 'fr') {
          const enResponses: Record<string, string> = {
            'greeting': 'Hello! Welcome to NeuraAPI. I\'m your intelligent assistant. 👋\n\nI can help you with:\n• 🤖 Our AI APIs (text, code, SEO generation)\n• 📦 Premium Next.js templates\n• 💰 Pricing & subscriptions\n• 🛠 Technical support\n\nHow can I help you?',
            'api': 'Our AI APIs are accessible via 3 endpoints:\n\n1️⃣ **POST /api/ai/generate** — Text generation\n2️⃣ **POST /api/ai/seo** — SEO-optimized content\n3️⃣ **POST /api/ai/code** — Code generation\n\n🔑 Auth: `x-api-key: napi_your_key`\n📊 Rate limits: Starter 10 req/min, Pro 100 req/min, Enterprise unlimited\n\n👉 Check /docs for full documentation.',
            'pricing': 'Our pricing plans:\n\n🟢 **Starter** — Free (100 credits/month)\n🔵 **Pro** — €19/month (10,000 credits) — Launch offer -30% with code LAUNCH30\n🟣 **Enterprise** — €69/month (unlimited)\n\n👉 /pricing for details',
            'templates': 'Our 10 premium templates:\n\n📦 **NeuraSaaS** — €97 (SaaS Starter)\n📦 **NeuraCommerce** — €129 (E-commerce)\n📦 **NeuraBlog** — €59 (Blog)\n📦 **NeuraLanding** — €79 (Landing Page)\n📦 **NeuraDashboard** — €99 (Dashboard)\n\n👉 /templates for the full catalog',
            'contact': '📬 Contact us:\n• Email: contact@neuraapi.com\n• Phone: +33 6 29 41 85 24 (Mon-Fri 9am-6pm)\n• Page: /contact\n\nWe respond within 24 business hours.',
            'support': '📬 Contact us:\n• Email: contact@neuraapi.com\n• Phone: +33 6 29 41 85 24 (Mon-Fri 9am-6pm)\n• Page: /contact\n\nWe respond within 24 business hours.',
            'courtesy': 'You\'re welcome! If you need anything else, I\'m here. 😊',
            'template': 'Our 10 premium templates are available at /templates.\n\nEach template includes:\n• Full source code\n• Documentation\n• Free updates\n• Email support\n\nStarting from €59.',
            'legal': 'Our legal pages include:\n• Terms of Service (/terms)\n• Privacy Policy (/privacy)\n• Cookie Policy (/cookie-policy)\n• DPA (/dpa)\n\nWe comply with French and EU regulations (LCEN, RGPD, ePrivacy).',
            'monitoring': 'Our monitoring page is live at /status\n\nYou can check:\n• System health\n• API uptime\n• Response times\n\nWe use GitHub Actions for continuous health checks.',
            'bug': 'If you encounter a bug, please report it:\n\n📧 Email: samilaboulette21@gmail.com\n📝 Include: steps to reproduce, browser, expected vs actual behavior\n\nWe respond within 48 hours.',
            'referral': 'Our referral program gives you credits for every friend who signs up.\n\n1. Share your referral link\n2. Friend creates an account\n3. You both get bonus credits\n\nCheck /referral for details.',
            'upgrade': '⬆️ Upgrade to **Pro** and unlock full potential:\n\n🔵 **€19/month** instead of €27 (-30% with code LAUNCH30)\n• 10,000 credits/month\n• All AI endpoints\n• Premium templates included\n• Priority support\n• Advanced analytics\n\n👉 /pricing to compare plans and use your promo code.',
            'why': '🏆 Why NeuraAPI?\n\n✅ **10 languages** — Multilingual interface and API (FR, EN, ES, DE, IT, PT, JA, ZH, KO, AR)\n✅ **Free tier** — 100 credits/month, no credit card\n✅ **Instant setup** — API key in 30 seconds\n✅ **Premium templates** — 10 ready-to-use Next.js templates\n\n💡 **vs OpenAI direct**:\n• OpenAI = English only, more expensive\n• NeuraAPI = 10 languages, free tier, more affordable\n\n👉 /register to try for free.',
            'guide': '🚀 Getting started in 3 simple steps:\n\n1️⃣ **Sign up** at /register — free, no credit card\n2️⃣ **Get your API key** instantly in the dashboard\n3️⃣ **Make your first call**:\n```\ncurl -X POST https://api.neuraapi.com/generate \\\n  -H "x-api-key: napi_your_key" \\\n  -d \'{"prompt":"Hello"}\'\n```\n\n✅ 100 free credits on signup\n✅ No credit card required\n✅ API key generated instantly\n\n👉 /register to start now!',
          }
          return enResponses[entry.category] || entry.response
        }
        return entry.response
      }
    }
  }

  // Fallback
  if (locale !== 'fr') {
    const fallbacks = [
      'I\'m not sure I understand your question. Try:\n• "Pricing" for plans\n• "Templates" for models\n• "API" for documentation\n• "Contact" to reach us',
      'Great question! I can help with our APIs, templates, pricing or support.\n\nAsk me a more specific question or visit /docs for full documentation.',
    ]
    return fallbacks[Math.floor(Math.random() * fallbacks.length)]
  }

  const fallbacks = [
    'Je ne suis pas sûr de comprendre votre question. Essayez avec :\n• "Tarifs" pour les prix\n• "Templates" pour les modèles\n• "API" pour la documentation\n• "Contact" pour nous joindre',
    'Bonne question ! Je peux vous aider avec nos APIs, templates, tarifs ou support.\n\nPosez-moi une question plus précise ou consultez /docs pour la documentation complète.',
  ]
  return fallbacks[Math.floor(Math.random() * fallbacks.length)]
}
