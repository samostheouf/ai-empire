export interface KnowledgeEntry {
  keywords: string[]
  response: string
  category: string
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ['bonjour', 'salut', 'hello', 'hey', 'coucou', 'bonsoir'],
    response: 'Bonjour ! Bienvenue sur NeuraAPI. Je suis votre assistant intelligent. Comment puis-je vous aider aujourd\'hui ? Je peux vous renseigner sur nos APIs, templates, tarifs ou support technique.',
    category: 'greeting',
  },
  {
    keywords: ['merci', 'thanks', 'super', 'parfait', 'génial'],
    response: 'Avec plaisir ! N\'hésitez pas si vous avez d\'autres questions. Je suis là pour vous aider.',
    category: 'courtesy',
  },
  {
    keywords: ['au revoir', 'bye', 'à bientôt'],
    response: 'Au revoir ! Merci d\'avoir utilisé NeuraAPI. N\'hésitez pas à revenir si vous avez des questions. Bonne journée !',
    category: 'courtesy',
  },
  {
    keywords: ['prix', 'tarif', 'coût', 'combien', 'cher', 'abonnement'],
    response: 'Nos tarifs sont simples et transparents :\n\n🟢 **Starter** — Gratuit (100 crédits/mois)\n• Accès aux endpoints de base\n• Support par email\n• Documentation complète\n\n🔵 **Pro** — 29€/mois (10 000 crédits/mois)\n• Tous les endpoints IA\n• Support prioritaire\n• Templates premium inclus\n• Analytics avancés\n\n🟣 **Enterprise** — 99€/mois (crédits illimités)\n• Tous les endpoints IA\n• Support dédié 24/7\n• Templates premium + personnalisés\n• SLA garanti\n• Intégration sur mesure\n\n👉 Visitez /pricing pour plus de détails.',
    category: 'pricing',
  },
  {
    keywords: ['promo', 'lancement', 'réduction', 'remise', 'offre', 'code promo', 'coupon'],
    response: 'Offre de lancement valable ! 🎉\n\nUtilisez le code **LANCEMENT30** pour bénéficier de -30% sur votre premier mois de plan Pro ou Enterprise.\n\n👉 Inscrivez-vous sur /register et profitez de cette offre.',
    category: 'promotions',
  },
  {
    keywords: ['api', 'endpoint', 'requête', 'request', 'intégrer', 'intégration', 'utiliser api'],
    response: 'Nos APIs IA sont accessibles via 3 endpoints principaux :\n\n1️⃣ **POST /api/ai/generate** — Génération de texte\n2️⃣ **POST /api/ai/seo** — Contenu optimisé SEO\n3️⃣ **POST /api/ai/code** — Génération de code\n\nAuthentification : incluez `x-api-key: napi_votre_cle` dans vos en-têtes.\n\n👉 Consultez /docs pour la documentation complète avec exemples de code.',
    category: 'api',
  },
  {
    keywords: ['generate', 'génération', 'texte', 'contenu', 'article', 'blog'],
    response: 'L\'endpoint **POST /api/ai/generate** génère du texte à partir d\'un prompt.\n\nExemple de requête :\n```json\n{\n  "prompt": "Écris un article sur l\'IA",\n  "maxTokens": 1000,\n  "model": "gpt-4"\n}\n```\n\nChaque requête consomme des crédits selon votre plan. Voir /docs pour les détails.',
    category: 'api',
  },
  {
    keywords: ['seo', 'référencement', 'optimisation', 'google', 'métadonnée', 'meta'],
    response: 'L\'endpoint **POST /api/ai/seo** génère du contenu optimisé pour le référencement.\n\nExemple de requête :\n```json\n{\n  "topic": "Intelligence artificielle pour entreprises",\n  "keywords": ["IA", "machine learning", "business"],\n  "maxTokens": 2000\n}\n```\n\nRetourne : titre SEO, méta-description, contenu structuré et mots-clés.',
    category: 'api',
  },
  {
    keywords: ['code', 'coding', 'programmation', 'developer', 'développeur', 'react', 'typescript', 'python'],
    response: 'L\'endpoint **POST /api/ai/code** génère du code à partir d\'une description.\n\nExemple de requête :\n```json\n{\n  "description": "Composant React pour une liste de tâches",\n  "language": "typescript",\n  "framework": "react"\n}\n```\n\nRetourne le code généré avec le langage et framework spécifiés.',
    category: 'api',
  },
  {
    keywords: ['template', 'templates', 'theme', 'thème', 'modèle', 'starter kit'],
    response: 'Nous proposons 10 templates premium pour démarrer rapidement :\n\n• **NeuraSaaS Kit** — 97€ (Kit complet SaaS)\n• **NeuraAI Studio** — 199€ (Studio IA avancé)\n• **NeuraDashboard** — 79€ (Dashboard analytics)\n• **NeuraEcom** — 89€ (E-commerce)\n• **NeuraBlog** — 49€ (Blog Next.js)\n• **NeuraForm** — 59€ (Formulaires)\n• **NeuraAuth** — 69€ (Authentification)\n• **NeuraAPI Dashboard** — 129€ (Dashboard API)\n• **NeuraLanding** — 39€ (Landing page)\n• **NeuraChat** — 159€ (Chat en temps réel)\n\n👉 Visitez /templates pour voir tous les détails et screenshots.',
    category: 'templates',
  },
  {
    keywords: ['acheter template', 'buy template', 'commander', 'purchase', 'paiement template'],
    response: 'Pour acheter un template :\n\n1️⃣ Visitez /templates et choisissez votre template\n2️⃣ Cliquez sur "Acheter" sur la carte du template\n3️⃣ Entrez votre email et procédez au paiement\n4️⃣ Recevez un email de confirmation avec le lien de téléchargement\n\nPaiement sécurisé par Stripe (cartes bancaires, PayPal, Apple Pay).',
    category: 'templates',
  },
  {
    keywords: ['crédit', 'credits', 'consommation', 'usage', 'quota', 'limite'],
    response: 'Chaque plan inclut des crédits API :\n\n• **Starter** : 100 crédits/mois\n• **Pro** : 10 000 crédits/mois\n• **Enterprise** : Crédits illimités\n\nChaque appel API consomme des crédits selon la complexité. Consultez votre dashboard /dashboard pour suivre votre consommation en temps réel.',
    category: 'account',
  },
  {
    keywords: ['inscription', 'register', 'signup', 'créer compte', 's\'inscrire', 'register'],
    response: 'Pour créer votre compte :\n\n1️⃣ Visitez /register\n2️⃣ Entrez votre adresse email\n3️⃣ Vous recevrez votre clé API par email\n4️⃣ Connectez-vous sur /dashboard\n\nC\'est gratuit avec le plan Starter (100 crédits inclus) !',
    category: 'account',
  },
  {
    keywords: ['connexion', 'login', 'connecter', 'se connecter', 'dashboard', 'espace'],
    response: 'Pour vous connecter à votre espace :\n\n👉 Visitez /dashboard et entrez votre email. Vous recevrez un lien de connexion par email.\n\nDans votre dashboard, vous pouvez :\n• Voir votre clé API\n• Suivre votre consommation\n• Gérer votre abonnement\n• Accéder à vos templates achetés',
    category: 'account',
  },
  {
    keywords: ['clé api', 'clé', 'api key', 'key', 'token', 'authentification', 'auth'],
    response: 'Votre clé API commence par `napi_` et est unique à votre compte.\n\nPour la trouver :\n1️⃣ Connectez-vous sur /dashboard\n2️⃣ Cliquez sur "Clé API"\n3️⃣ Copiez-la dans vos en-têtes de requête\n\nUtilisation : `x-api-key: napi_votre_cle_ici`\n\n⚠️ Ne partagez jamais votre clé API publiquement.',
    category: 'account',
  },
  {
    keywords: ['paiement', 'payment', 'payer', 'stripe', 'carte', 'visa', 'mastercard', 'paypal'],
    response: 'Nous acceptons les modes de paiement suivants :\n\n💳 Cartes bancaires (Visa, Mastercard)\n🅿️ PayPal\n🍎 Apple Pay\n\nTous les paiements sont sécurisés par **Stripe**. Aucune donnée bancaire n\'est stockée sur nos serveurs.',
    category: 'billing',
  },
  {
    keywords: ['remboursement', 'refund', 'annuler', 'annulation', 'cancel', 'rembourser'],
    response: 'Nous offrons un remboursement sous **30 jours** après l\'achat.\n\nPour demander un remboursement :\n1️⃣ Envoyez un email à contact@neuraapi.com\n2️⃣ Indiquez votre email et numéro de commande\n3️⃣ Nous traitons votre demande sous 48h\n\nLes remboursements sont effectués sur le même moyen de paiement.',
    category: 'billing',
  },
  {
    keywords: ['sécurité', 'security', 'protection', 'données', 'data', 'chiffrement', 'ssl'],
    response: 'La sécurité est notre priorité :\n\n🔒 Paiements sécurisés par Stripe\n🔒 Données chiffrées (SSL/TLS)\n🔒 Authentification API sécurisée\n🔒 Clés API hashées\n🔒 Conformité RGPD\n🔒 Pas de stockage de données bancaires',
    category: 'security',
  },
  {
    keywords: ['rgpd', 'gdpr', 'confidentialité', 'privacy', 'données personnelles'],
    response: 'Nous sommes conformes au RGPD :\n\n✅ Données chiffrées et sécurisées\n✅ Droit d\'accès à vos données\n✅ Droit de suppression\n✅ Consentement cookies\n✅ DPO désigné\n\nConsultez /politique-confidentialite pour les détails.',
    category: 'security',
  },
  {
    keywords: ['contact', 'support', 'email', 'téléphone', 'phone', 'aide', 'help', 'assistance'],
    response: 'Contactez-nous :\n\n📧 Email : contact@neuraapi.com\n📍 Formulaire : /contact\n\n⏰ Horaires : Lun-Ven 9h-18h\n\nOu utilisez le formulaire de contact sur /contact.',
    category: 'support',
  },
  {
    keywords: ['bug', 'erreur', 'error', 'problème', 'marche pas', 'ne fonctionne pas', ' crash'],
    response: 'En cas de problème technique :\n\n1️⃣ Vérifiez que votre clé API est valide dans /dashboard\n2️⃣ Vérifiez le format de votre requête (voir /docs)\n3️⃣ Vérifiez que vous avez des crédits disponibles\n4️⃣ Consultez les logs dans votre dashboard\n\nSi le problème persiste, contactez-nous via /contact avec les détails de l\'erreur.',
    category: 'support',
  },
  {
    keywords: ['documentation', 'docs', 'guide', 'tutorial', 'tutoriel', 'apprendre'],
    response: 'Notre documentation complète est disponible sur /docs :\n\n📖 Authentification\n📖 Endpoint /api/ai/generate\n📖 Endpoint /api/ai/seo\n📖 Endpoint /api/ai/code\n📖 Limites de requêtes\n📖 Exemples de code\n\nNous avons aussi une page /guide avec un tutoriel pas à pas pour démarrer.',
    category: 'docs',
  },
  {
    keywords: ['guide', 'étape', 'step', 'commencer', 'démarrer', 'getting started', 'tutorial'],
    response: 'Notre guide pas à pas est disponible sur /guide !\n\nIl couvre :\n1️⃣ Inscription et création de compte\n2️⃣ Obtention de la clé API\n3️⃣ Utilisation de chaque endpoint\n4️⃣ Achat de templates\n5️⃣ Gestion de votre compte\n6️⃣ Dépannage\n\n👉 Visitez /guide pour démarrer.',
    category: 'docs',
  },
  {
    keywords: ['enterprise', 'entreprise', 'business', 'grand compte', 'personnalisé', 'custom'],
    response: 'Le plan **Enterprise** à 99€/mois est idéal pour les entreprises :\n\n• Crédits API illimités\n• Tous les endpoints IA\n• Support dédié 24/7\n• Templates premium + personnalisés\n• SLA garanti (99.9% uptime)\n• Intégration sur mesure\n• Facturation personnalisée\n\nContactez-nous via /contact pour un devis personnalisé.',
    category: 'pricing',
  },
  {
    keywords: ['rate limit', 'limite requête', '429', 'trop de requêtes', 'throttling'],
    response: 'Limites de requêtes par plan :\n\n• **Starter** : 10 requêtes/minute\n• **Pro** : 60 requêtes/minute\n• **Enterprise** : Illimité\n\nSi vous atteignez la limite, attendez quelques secondes avant de réessayer. Le plan Pro ou Enterprise élimine ces restrictions.',
    category: 'api',
  },
  {
    keywords: ['étape 1', 'première étape', 'commencer', 'premier pas', 'premier pas'],
    response: 'Voici le guide étape par étape pour démarrer avec NeuraAPI :\n\n**Étape 1 : Créer votre compte**\n→ Allez sur /register\n→ Entrez votre email\n→ Vous recevrez votre clé API\n\n**Étape 2 : Accéder au dashboard**\n→ Allez sur /dashboard\n→ Entrez votre email pour vous connecter\n→ Copiez votre clé API\n\n**Étape 3 : Tester l\'API**\n→ Faites un appel curl avec votre clé :\n```\ncurl -X POST https://ai-empire-steel.vercel.app/api/ai/generate \\\n  -H "x-api-key: VOTRE_CLE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"prompt": "Bonjour"}\'\n```\n\n**Étape 4 : Explorer les templates**\n→ Visitez /templates pour découvrir nos templates premium\n\nSouhaitez-vous plus de détails sur une étape spécifique ?',
    category: 'guide',
  },
  {
    keywords: ['étape 2', 'deuxième étape', 'dashboard', 'connexion', 'se connecter'],
    response: '**Étape 2 : Accéder au dashboard**\n\n1️⃣ Allez sur /dashboard\n2️⃣ Entrez l\'email utilisé lors de l\'inscription\n3️⃣ Votre espace s\'affiche automatiquement\n\nDans votre dashboard, vous pouvez :\n• Voir votre clé API (commençant par `napi_`)\n• Suivre vos crédits restants\n• Voir vos commandes\n• Gérer votre abonnement\n\n💡 Astuce : Vous pouvez aussi accéder directement via /dashboard?email=votre@email.com',
    category: 'guide',
  },
  {
    keywords: ['étape 3', 'troisième étape', 'premier appel', 'tester api', 'curl'],
    response: '**Étape 3 : Tester votre première API**\n\n1️⃣ Copiez votre clé API depuis /dashboard\n\n2️⃣ Utilisez cet exemple curl :\n```\ncurl -X POST https://ai-empire-steel.vercel.app/api/ai/generate \\\n  -H "x-api-key: napi_VOTRE_CLE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"prompt": "Écris un paragraphe sur l\'IA"}\'\n```\n\n3️⃣ Ou testez l\'autre endpoint :\n```\ncurl -X POST https://ai-empire-steel.vercel.app/api/ai/seo \\\n  -H "x-api-key: napi_VOTRE_CLE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"topic": "Intelligence artificielle", "keywords": ["IA", "ML"]}\'\n```\n\nChaque appel consomme des crédits selon votre plan.',
    category: 'guide',
  },
  {
    keywords: ['étape 4', 'quatrième étape', 'template', 'acheter', 'projet'],
    response: '**Étape 4 : Explorer et acheter des templates**\n\n1️⃣ Visitez /templates pour voir tous les templates disponibles\n\n2️⃣ Choisissez un template qui correspond à votre projet :\n• NeuraSaaS Kit (97€) — Kit complet SaaS\n• NeuraBlog (49€) — Blog Next.js\n• NeuraEcom (89€) — E-commerce\n• NeuraDashboard (79€) — Dashboard analytics\n\n3️⃣ Cliquez sur "Acheter" et entrez votre email\n\n4️⃣ Procédez au paiement sécurisé par Stripe\n\n5️⃣ Recevez le lien de téléchargement par email\n\n💡 Astuce : Utilisez le code LANCEMENT30 pour -30% sur votre premier mois Pro !',
    category: 'guide',
  },
  {
    keywords: ['gratuit', 'free', 'essai', 'trial', 'tester', 'essayer'],
    response: 'Le plan **Starter est gratuit** et comprend :\n\n• 100 crédits API/mois\n• Accès aux 3 endpoints IA\n• Documentation complète\n• Support par email\n\nInscrivez-vous sur /register pour commencer immédiatement.',
    category: 'pricing',
  },
  {
    keywords: ['whatsapp', 'webhook', 'intégration', 'slack', 'discord'],
    response: 'Nous proposons des webhooks et intégrations pour le plan Enterprise.\n\nIntégrations disponibles :\n• WhatsApp Business API\n• Slack\n• Discord\n• Webhooks personnalisés\n\nContactez-nous pour en savoir plus.',
    category: 'api',
  },
  {
    keywords: ['facture', 'invoice', 'reçu', 'receipt'],
    response: 'Vos factures sont disponibles dans votre dashboard :\n\n1️⃣ Connectez-vous sur /dashboard\n2️⃣ Allez dans "Facturation"\n3️⃣ Téléchargez vos factures au format PDF\n\nLes factures sont générées automatiquement après chaque paiement.',
    category: 'billing',
  },
  {
    keywords: ['upgrade', 'passer pro', 'passer enterprise', 'changer plan', 'upgrader'],
    response: 'Pour changer de plan :\n\n1️⃣ Connectez-vous sur /dashboard\n2️⃣ Allez dans "Abonnement"\n3️⃣ Sélectionnez le nouveau plan\n4️⃣ Procédez au paiement\n\nLe changement est effectif immédiatement. Le crédit restant est reporté.',
    category: 'account',
  },
  {
    keywords: ['uptime', 'disponibilité', 'panne', 'maintenance', 'status'],
    response: 'Notre plateforme garantit un uptime de **99.9%**.\n\n• Monitoring 24/7\n• Serveurs redondants\n• SLA garanti (plan Enterprise)\n• Notifications en cas de maintenance\n\nEn cas de panne, consultez le status page ou contactez le support.',
    category: 'support',
  },
]

export const quickActions = [
  { label: 'Templates', message: 'Montrez-moi vos templates' },
  { label: 'Pricing', message: 'Quels sont vos tarifs ?' },
  { label: 'Docs', message: 'Où est la documentation ?' },
  { label: 'Contact', message: 'Comment vous contacter ?' },
]

export const fallbackResponses = [
  'Merci pour votre message ! Je peux vous aider avec :\n• Nos APIs et templates\n• Tarifs et plans\n• Support technique\n• Questions sur la facturation\n\nQue souhaitez-vous savoir ?',
  'Je ne suis pas sûr de comprendre. Voici ce que je peux vous aider :\n• Informations sur nos APIs\n• Tarifs et plans\n• Achat de templates\n• Support technique\n\nReformulez votre question ou choisissez un sujet ci-dessus.',
  'Bonne question ! Pour une réponse précise, contactez-nous via /contact ou envoyez un email à contact@neuraapi.com. En attendant, puis-je vous aider avec autre chose ?',
]

export function findResponse(input: string): string {
  const lower = input.toLowerCase().trim()

  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword)) {
        return entry.response
      }
    }
  }

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}
