export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  readingTime: number
  author: string
  publishDate: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'ai-api-future',
    title: 'Pourquoi les APIs IA sont l\'avenir du développement web',
    slug: 'pourquoi-apis-ia-avenir-developpement-web',
    excerpt: 'Découvrez comment les APIs d\'intelligence artificielle transforment le développement web et pourquoi elles deviennent indispensables pour les développeurs modernes.',
    content: `
# Pourquoi les APIs IA sont l'avenir du développement web

## Introduction

L'intelligence artificielle est en train de révolutionner le monde du développement web. Les APIs IA permettent désormais aux développeurs d'intégrer des fonctionnalités avancées comme la génération de contenu, l'analyse de texte et les assistants conversationnels en quelques lignes de code.

Dans cet article, nous allons explorer pourquoi les APIs IA deviennent incontournables pour les développeurs modernes et comment elles peuvent transformer vos projets.

## L'évolution des APIs IA

### Les débuts : simples connecteurs

À l'origine, les APIs IA étaient de simples connecteurs permettant d'envoyer des requêtes et de recevoir des réponses basiques. Leur utilisation était limitée et complexe.

### Aujourd'hui : des outils puissants

Aujourd'hui, les APIs IA offrent :
- **Génération de contenu** : Articles, descriptions, posts réseaux sociaux
- **Analyse de texte** : Sentiment, résumé, classification
- **Assistants conversationnels** : Chatbots, support client, FAQ
- **Traduction automatique** : Plus de 100 langues supportées

### Demain : l'intégration transparente

Demain, les APIs IA seront intégrées de manière transparente dans tous les outils de développement, permettant aux développeurs de se concentrer sur la logique métier plutôt que sur les détails techniques.

## Pourquoi les APIs IA sont essentielles

### 1. Gain de temps considérable

Les APIs IA permettent de réduire le temps de développement de 60% en automatisant les tâches répétitives et en fournissant des solutions prêtes à l'emploi.

### 2. Amélioration de la qualité

Grâce à l'IA, vous pouvez obtenir :
- **Code plus propre** : Suggestions d'optimisation en temps réel
- **Meilleur SEO** : Génération de métadonnées optimisées
- **Expérience utilisateur** : Chatbots intelligents et assistants

### 3. Réduction des coûts

En automatisant les tâches à faible valeur ajoutée, vous pouvez vous concentrer sur les fonctionnalités qui créent véritablement de la valeur pour vos utilisateurs.

## Comment intégrer les APIs IA dans vos projets

### Étape 1 : Choisissez la bonne API

Il existe de nombreuses APIs IA disponibles. Voici les plus populaires :
- **OpenAI GPT-4** : Génération de texte avancée
- **Anthropic Claude** : Analyse et résumé
- **Google PaLM** : Multi-modale (texte, image, audio)

### Étape 2 : Intégrez l'API dans votre projet

Avec un SDK comme AI Empire, l'intégration est simple :

\`\`\`javascript
import { AI } from '@ai-empire/sdk'

const ai = new AI(process.env.AI_API_KEY)

// Générer du contenu
const content = await ai.generate({
  prompt: 'Écris un article sur le développement web',
  maxTokens: 1000
})
\`\`\`

### Étape 3 : Optimisez les performances

- Utilisez le **cache** pour les requêtes répétitives
- Implémentez le **rate limiting** pour éviter les abus
- Surveillez les **métriques** d'utilisation

## Cas d'utilisation concrets

### Chatbots de support client

\`\`\`javascript
// Créer un chatbot intelligent
const chatbot = await ai.createChatbot({
  knowledge: 'FAQ de votre entreprise',
  language: 'français',
  tone: 'professionnel'
})
\`\`\`

### Génération de contenu automatisée

\`\`\`javascript
// Générer des descriptions produits
const descriptions = await ai.generate({
  prompt: 'Décris ce produit : iPhone 15 Pro',
  style: 'marketing',
  maxTokens: 200
})
\`\`\`

### Analyse de feedback utilisateur

\`\`\`javascript
// Analyser les avis clients
const analysis = await ai.analyze({
  text: 'Avis client',
  aspects: ['sentiment', 'topics', 'urgency']
})
\`\`\`

## Les défis à relever

### 1. Coût des APIs

Les APIs IA peuvent être coûteuses à grande échelle. Solutions :
- **Optimiser les appels** : Réduire les requêtes inutiles
- **Utiliser des modèles plus petits** pour les tâches simples
- **Mettre en cache** les réponses fréquentes

### 2. Qualité des réponses

L'IA n'est pas parfaite. Il est important de :
- **Valider les résultats** avant de les utiliser
- **Former le modèle** avec des données spécifiques
- **Implémenter des garde-fous** pour les erreurs

### 3. Sécurité des données

Envoi de données sensibles à des APIs externes :
- **Chiffrer les données** en transit et au repos
- **Utiliser des APIs privées** pour les données sensibles
- **Respecter les réglementations** (RGPD, etc.)

## L'avenir des APIs IA

### Vers une intégration native

Les frameworks comme Next.js intègrent de plus en plus de fonctionnalités IA nativement, rendant l'intégration plus simple que jamais.

### Des modèles plus spécialisés

Les modèles IA deviennent plus spécialisés pour des cas d'utilisation spécifiques : code, créativité, analyse, etc.

### L'IA comme copilote

L'IA devient un véritable copilote pour les développeurs, suggérant du code, détectant des bugs et optimisant les performances en temps réel.

## Conclusion

Les APIs IA ne sont plus l'avenir, elles sont le présent. Les développeurs qui adoptent ces outils aujourd'hui auront un avantage concurrentiel significatif demain.

Avec des plateformes comme AI Empire, l'intégration des APIs IA n'a jamais été aussi simple. Commencez dès maintenant à transformer vos projets avec l'intelligence artificielle.

---

*Prêt à intégrer l'IA dans vos projets ? Découvrez AI Empire et ses APIs puissantes.*
    `,
    category: 'Tendances',
    tags: ['IA', 'APIs', 'Développement Web', 'Next.js', 'Innovation'],
    readingTime: 8,
    author: 'Équipe AI Empire',
    publishDate: '2024-01-15',
    metaTitle: 'Pourquoi les APIs IA sont l\'avenir du développement web | AI Empire',
    metaDescription: 'Découvrez comment les APIs d\'intelligence artificielle transforment le développement web et pourquoi elles deviennent indispensables pour les développeurs modernes.',
    keywords: ['APIs IA', 'intelligence artificielle', 'développement web', 'Next.js', 'IA']
  },
  {
    id: 'saas-24-hours',
    title: 'Comment construire un SaaS en 24 heures avec AI Empire',
    slug: 'construire-saar-24-heures-ai-empire',
    excerpt: 'Guide étape par étape pour créer et lancer un SaaS complet en 24 heures grâce aux templates et APIs d\'AI Empire.',
    content: `
# Comment construire un SaaS en 24 heures avec AI Empire

## Introduction

Vous rêvez de lancer votre propre SaaS mais pensez que cela prend des mois de développement ? AI Empire prouve le contraire ! Grâce à nos templates pré-configurés et nos APIs IA, vous pouvez créer un SaaS complet en 24 heures seulement.

Dans cet article, nous allons vous montrer comment faire, étape par étape.

## Prérequis

Avant de commencer, assurez-vous d'avoir :
- **Un compte AI Empire** : ${'{signup_url}'}
- **Node.js 18+** installé
- **Un compte Vercel** pour le déploiement
- **Un compte Stripe** pour les paiements

## Étape 1 : Choisissez votre template (30 minutes)

### Analysez votre marché

Avant de choisir un template, définissez clairement :
- **Votre niche** : Quel problème résolvez-vous ?
- **Votre cible** : Qui sont vos utilisateurs ?
- **Vos fonctionnalités** : Qu'est-ce qui est essentiel ?

### Sélectionnez le template adapté

AI Empire propose des templates pour différents cas d'utilisation :
- **SaaS B2B** : Pour les entreprises
- **SaaS B2C** : Pour les particuliers
- **Marketplace** : Pour connecter offreurs et demandeurs
- **Plateforme SaaS** : Pour des services complexes

### Personnalisez les couleurs et le branding

Modifiez les couleurs, le logo et les textes pour refléter votre identité.

## Étape 2 : Configurez l'authentification (1 heure)

### Intégration NextAuth.js

Nos templates incluent déjà l'intégration de NextAuth.js. Vous devez simplement :

1. **Configurer les providers** : Google, GitHub, Email
2. **Créer la base de données** : PostgreSQL avec Prisma
3. **Définir les rôles** : Admin, User, Premium

### Exemple de configuration :

\`\`\`typescript
// next.config.js
module.exports = {
  experimental: {
    serverActions: true,
  },
}
\`\`\`

## Étape 3 : Intégrez les paiements Stripe (2 heures)

### Configuration Stripe

1. **Créez un compte Stripe**
2. **Configurez les produits et prix**
3. **Intégrez Stripe Checkout**

### Code d'intégration :

\`\`\`typescript
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function createCheckoutSession(priceId: string) {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: '${'{APP_URL}'}/success',
    cancel_url: '${'{APP_URL}'}/cancel',
  })
  return session
}
\`\`\`

## Étape 4 : Ajoutez les APIs IA (3 heures)

### Intégrez le SDK AI Empire

\`\`\`typescript
import { AI } from '@ai-empire/sdk'

const ai = new AI(process.env.AI_API_KEY!)

// Fonction de génération de contenu
export async function generateContent(prompt: string) {
  return await ai.generate({
    prompt,
    maxTokens: 1000,
    temperature: 0.7,
  })
}

// Fonction d'analyse de texte
export async function analyzeText(text: string) {
  return await ai.analyze({
    text,
    aspects: ['sentiment', 'topics'],
  })
}
\`\`\`

### Créez des fonctionnalités IA

1. **Chatbot de support** : Répond aux questions des utilisateurs
2. **Générateur de contenu** : Crée du texte optimisé
3. **Analyseur de feedback** : Comprend les avis clients

## Étape 5 : Créez le dashboard admin (4 heures)

### Composants inclus

Nos templates incluent :
- **Tableau de bord** avec graphiques
- **Gestion des utilisateurs**
- **Suivi des paiements**
- **Statistiques d'utilisation**

### Personnalisez selon vos besoins

Ajoutez des métriques spécifiques à votre SaaS :
- **KPIs principaux** : MRR, churn, LTV
- **Graphiques** : Évolution dans le temps
- **Alertes** : Notifications importantes

## Étape 6 : Déployez sur Vercel (30 minutes)

### Configuration du déploiement

1. **Connectez votre repository GitHub**
2. **Configurez les variables d'environnement**
3. **Activez les preview déployments**

### Commandes de déploiement :

\`\`\`bash
# Installer les dépendances
npm install

# Lancer en local
npm run dev

# Déployer sur Vercel
vercel deploy
\`\`\`

## Étape 7 : Testez et optimisez (4 heures)

### Tests essentiels

1. **Tests fonctionnels** : Vérifiez toutes les fonctionnalités
2. **Tests de performance** : Optimisez le temps de chargement
3. **Tests de sécurité** : Protégez les données utilisateurs

### Optimisations

- **Cache** : Mettez en cache les requêtes fréquentes
- **Compression** : Compressez les assets
- **CDN** : Utilisez un CDN pour les fichiers statiques

## Étape 8 : Lancez votre marketing (8 heures)

### Préparez votre lancement

1. **Page de landing** : Présentez votre SaaS
2. **Documentation** : Expliquez comment l'utiliser
3. **Support** : Préparez les FAQ et le support

### Canaux de distribution

- **Product Hunt** : Pour le lancement
- **Reddit** : Dans les subreddits pertinents
- **Twitter** : Avec les bons hashtags
- **LinkedIn** : Pour le B2B

## Étape 9 : Analysez et améliorez (2 heures)

### Métriques à suivre

- **Acquisition** : D'où viennent vos utilisateurs ?
- **Activation** : Utilisent-ils vos fonctionnalités ?
- **Rétention** : Reviennent-ils ?
- **Revenus** : Combien dépensent-ils ?
- **Recommandation** : Recommandent-ils ?

### Outils d'analyse

- **Google Analytics** : Trafic et comportement
- **Stripe Dashboard** : Paiements et revenus
- **AI Empire Analytics** : Utilisation des APIs IA

## Conclusion

Créer un SaaS en 24 heures n'est plus un rêve, c'est une réalité avec AI Empire. En suivant ces étapes, vous pouvez lancer votre propre SaaS et commencer à générer des revenus dès le premier jour.

N'attendez plus, commencez votre aventure entrepreneuriale dès maintenant !

---

*Prêt à créer votre SaaS ? Rejoignez AI Empire et commencez aujourd'hui !*
    `,
    category: 'Tutoriels',
    tags: ['SaaS', 'Next.js', 'AI Empire', 'Tutoriel', 'Lancement'],
    readingTime: 12,
    author: 'Équipe AI Empire',
    publishDate: '2024-01-20',
    metaTitle: 'Comment construire un SaaS en 24 heures avec AI Empire',
    metaDescription: 'Guide étape par étape pour créer et lancer un SaaS complet en 24 heures grâce aux templates et APIs d\'AI Empire.',
    keywords: ['SaaS', '24 heures', 'AI Empire', 'Next.js', 'lancement']
  },
  {
    id: 'top-10-ai-tools',
    title: 'Top 10 des outils IA pour développeurs en 2024',
    slug: 'top-10-outils-ia-developpeurs-2024',
    excerpt: 'Découvrez les meilleurs outils d\'intelligence artificielle pour développeurs en 2024, des APIs aux assistants de code.',
    content: `
# Top 10 des outils IA pour développeurs en 2024

## Introduction

L'intelligence artificielle est devenue un allié incontournable pour les développeurs modernes. En 2024, les outils IA ont évolué pour offrir des fonctionnalités de plus en plus avancées.

Dans cet article, nous présentons les 10 meilleurs outils IA pour développeurs en 2024.

## 1. AI Empire - La plateforme tout-en-un

### Pourquoi AI Empire ?

AI Empire se distingue par son approche complète :
- **Templates Next.js 14** professionnels
- **APIs IA** puissantes et faciles à intégrer
- **Support technique** expert 24/7
- **Communauté** active de développeurs

### Cas d'utilisation

- **SaaS en 24 heures** : Lancez rapidement votre projet
- **Chatbots intelligents** : Automatisez le support client
- **Génération de contenu** : Créez du texte optimisé

## 2. GitHub Copilot - L'assistant de code

### Fonctionnalités

- **Complétion de code** en temps réel
- **Suggestions** basées sur le contexte
- **Support** de 15+ langages

### Avantages

- Intégration native avec VS Code
- Apprentissage continu
- Prix abordable

## 3. ChatGPT - Le conversationnel polyvalent

### Utilisations pour développeurs

- **Génération de code** : Écrire du code à partir de descriptions
- **Débogage** : Identifier et corriger les erreurs
- **Documentation** : Créer de la documentation technique

### Limitations

- Nécessite une validation humaine
- Pas toujours à jour avec les dernières versions

## 4. Tabnine - L'autocomplete intelligent

### Caractéristiques

- **Prédiction** de code avancée
- **Apprentissage** de votre style
- **Privacy** : Fonctionne en local

### Idéal pour

- Les développeurs qui souhaitent un assistant discret
- Les entreprises soucieuses de la confidentialité

## 5. Kite - Le complémenteur de code

### Fonctionnalités

- **Complétion** basée sur l'apprentissage automatique
- **Documentation** intégrée
- **Exemples** de code en temps réel

### Langages supportés

- Python, JavaScript, TypeScript, Go, et plus

## 6. Replit AI - L'assistant de développement

### Avantages

- **Environnement de développement** complet
- **Collaboration** en temps réel
- **Déploiement** instantané

### Idéal pour

- Les débutants qui souhaitent apprendre
- Les prototypages rapides

## 7. Amazon CodeWhisperer - L'assistant AWS

### Spécificités

- **Optimisé** pour AWS
- **Sécurité** intégrée
- **Gratuit** pour les particuliers

### Langages supportés

- Python, Java, JavaScript, TypeScript, C#, et plus

## 8. Google Bard - Le multimodal

### Capacités

- **Compréhension** de texte et d'images
- **Génération** de code à partir de maquettes
- **Recherche** intégrée

### Avantages

- Multimodal (texte, image, audio)
- Accès à l'information en temps réel

## 9. Claude - L'assistant éthique

### Caractéristiques

- **Sécurité** renforcée
- **Transparence** des réponses
- **Long context** : Traite de longs textes

### Utilisations

- Analyse de code long
- Documentation technique
- Révision de code

## 10. Tabnine Enterprise - La solution entreprise

### Fonctionnalités

- **Déploiement** on-premise
- **Personnalisation** avancée
- **Support** dédié

### Idéal pour

- Les grandes entreprises
- Les projets sensibles

## Comment choisir le bon outil ?

### Critères de sélection

1. **Cas d'utilisation** : Quel problème résolvez-vous ?
2. **Langages** : Quels langages utilisez-vous ?
3. **Budget** : Combien pouvez-vous investir ?
4. **Confidentialité** : Vos données sont-elles sensibles ?

### Recommandations

- **Débutants** : AI Empire + GitHub Copilot
- **Freelances** : AI Empire + Tabnine
- **Entreprises** : AI Empire Enterprise + Claude

## Conclusion

Les outils IA pour développeurs ont considérablement évolué en 2024. Que vous soyez débutant ou expert, il existe un outil adapté à vos besoins.

AI Empire se positionne comme la solution la plus complète, offrant un écosystème complet pour créer des applications modernes avec l'intelligence artificielle.

---

*Découvrez AI Empire et transformez votre façon de développer !*
    `,
    category: 'Outils',
    tags: ['IA', 'Outils', 'Développeurs', 'Productivité', 'Innovation'],
    readingTime: 10,
    author: 'Équipe AI Empire',
    publishDate: '2024-01-25',
    metaTitle: 'Top 10 des outils IA pour développeurs en 2024 | AI Empire',
    metaDescription: 'Découvrez les meilleurs outils d\'intelligence artificielle pour développeurs en 2024, des APIs aux assistants de code.',
    keywords: ['outils IA', 'développeurs', '2024', 'productivité', 'innovation']
  },
  {
    id: 'case-study-10k-mrr',
    title: 'Guide : Comment AI Empire peut accélérer votre lancement SaaS',
    slug: 'guide-acceleration-lancement-saas-ai-empire',
    excerpt: 'Un guide montrant comment AI Empire peut aider à accélérer le développement et le lancement de votre SaaS.',
    content: `
# Guide : Comment AI Empire peut accélérer votre lancement SaaS

## Introduction

Lancer un SaaS rapidement est un défi pour toute équipe. Dans cet article, nous présentons un scénario montrant comment AI Empire pourrait accélérer le processus de développement et de lancement.

## Le contexte

### L'équipe

- **Développeuse Full Stack** : Expérimentée en React et Node.js
- **Designer UI/UX** : Spécialisée en interfaces modernes
- **Responsable marketing** : Compétent en acquisition

### L'idée

Créer une plateforme de gestion de projets pour les équipes distantes, avec des fonctionnalités IA pour automatiser les tâches répétitives.

### Le défi

- **Temps limité** : Volonté de lancer rapidement
- **Budget serré** : Pas de levée de fonds prévue
- **Marché concurrentiel** : Beaucoup d'alternatives existantes

## Pourquoi AI Empire ?

### Les critères de choix

L'équipe a choisi AI Empire pour plusieurs raisons :

1. **Templates professionnels** : Gagner du temps sur le design
2. **APIs IA intégrées** : Ajouter de l'intelligence à l'application
3. **Support technique** : Aide en cas de problème
4. **Coût abordable** : Pas besoin d'investir massivement

### La décision

*"AI Empire nous a permis de nous concentrer sur notre valeur ajoutée plutôt que sur les aspects techniques."*
— Marie, Développeuse Full Stack

## Le développement

### Semaine 1 : Configuration

- **Choix du template** : SaaS Dashboard
- **Personnalisation** : Couleurs, logo, textes
- **Intégration** : Authentification, paiements

### Semaine 2-3 : Fonctionnalités principales

- **Gestion de projets** : Kanban, calendrier, tâches
- **Chat en temps réel** : Messages, notifications
- **Intégration IA** : Suggestions automatiques

### Semaine 4 : Tests et optimisation

- **Tests utilisateurs** : 50 beta testeurs
- **Optimisation** : Performances, SEO
- **Documentation** : Guides, tutoriels

### Semaine 5 : Lancement

- **Product Hunt** : 1ère place du jour
- **Reddit** : Publications dans les subreddits pertinents
- **Twitter** : Campagne avec les bons hashtags

## Les résultats

### Mois 1 : 500€ MRR

- **Utilisateurs** : 100
- **Taux de conversion** : 5%
- **Feedback** : Très positif

### Mois 3 : 3 000€ MRR

- **Utilisateurs** : 600
- **Taux de conversion** : 8%
- **Fonctionnalités** : Ajout du chat IA

### Mois 6 : 10 000€ MRR

- **Utilisateurs** : 2 000
- **Taux de conversion** : 12%
- **Churn** : Réduit à 5%

## Les clés du succès

### 1. Time-to-market rapide

Grâce à AI Empire, l'équipe a lancé en 5 semaines au lieu des 6 mois prévus.

### 2. Qualité du code

Les templates AI Empire ont fourni une base solide et maintenable.

### 3. Intégration IA

Les APIs IA ont ajouté une vraie valeur ajoutée :
- **Suggestions de tâches** automatiques
- **Résumé de projets** en temps réel
- **Prédiction des délais** basée sur l'historique

### 4. Support client

L'équipe AI Empire a aidé à résoudre rapidement les problèmes techniques.

## Les leçons apprises

### 1. Commencer petit

L'équipe a lancé avec les fonctionnalités essentielles et a ajouté des features selon les retours.

### 2. Écouter les utilisateurs

Les meilleurs idées de fonctionnalités sont venues des utilisateurs.

### 3. Automatiser au maximum

L'IA a permis d'automatiser de nombreuses tâches, réduisant la charge de travail.

### 4. Investir dans le marketing

Le produit excellent ne suffit pas, il faut aussi le promouvoir.

## Ce qui a changé avec AI Empire v2.0

### Nouvelles fonctionnalités utilisées

- **Templates React 18+** : Performances améliorées
- **APIs GPT-4** : Meilleure qualité de réponse
- **Analytics avancés** : Suivi plus précis

### Impact

- **Conversion** : +20%
- **Satisfaction** : +15%
- **Performance** : +30%

## Conseils pour reproduire ce succès

### 1. Choisissez le bon template

AI Empire propose des templates pour différents cas d'utilisation. Choisissez celui qui correspond le mieux à votre projet.

### 2. Intégrez l'IA tôt

N'attendez pas pour ajouter de l'intelligence à votre application. Les APIs AI Empire sont faciles à intégrer.

### 3. Lancez rapidement

Ne perfectionnez pas votre produit. Lancez avec les fonctionnalités essentielles et améliorez selon les retours.

### 4. Investissez dans le support

Un bon support client fait la différence. Utilisez les APIs IA pour automatiser le support de niveau 1.

## Conclusion

AI Empire peut fournir les outils nécessaires pour accélérer votre lancement SaaS. Chaque projet est unique, mais les templates et APIs peuvent vous faire gagner un temps précieux.

Vous aussi, vous pouvez reproduire ce succès. Rejoignez AI Empire et commencez votre aventure entrepreneuriale dès maintenant !

---

*Prêt à créer votre succès ? Découvrez AI Empire et lancez votre SaaS !*
    `,
    category: 'Guides',
    tags: ['SaaS', 'AI Empire', 'Guide', 'Lancement'],
    readingTime: 15,
    author: 'Équipe AI Empire',
    publishDate: '2024-02-01',
    metaTitle: 'Guide : Comment AI Empire peut accélérer votre lancement SaaS',
    metaDescription: 'Un guide montrant comment AI Empire peut aider à accélérer le développement et le lancement de votre SaaS.',
    keywords: ['guide', 'SaaS', 'MRR', 'AI Empire', 'lancement']
  }
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag))
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getLatestBlogPosts(count: number): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count)
}

export function searchBlogPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase()
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

export function generateBlogPostSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
