export interface EmailTemplate {
  id: string
  name: string
  subject: string
  content: string
  category: 'welcome' | 'launch' | 'newsletter' | 'reengagement' | 'referral'
}

export interface WelcomeEmailSequence {
  part: 1 | 2 | 3
  subject: string
  content: string
}

export const welcomeEmailSequence: WelcomeEmailSequence[] = [
  {
    part: 1,
    subject: '🎉 Bienvenue dans AI Empire ! Votre aventure commence ici',
    content: `
# Bienvenue dans AI Empire ! 🚀

Cher ${'{name}'},

Nous sommes ravis de vous accueillir dans la communauté AI Empire ! Vous faites maintenant partie d'un réseau grandissant de développeurs qui transforment leur façon de créer des applications web.

## Ce qui vous attend :

✅ **100 crédits gratuits** pour tester nos APIs IA
✅ **Accès à tous les templates** premium
✅ **Support technique** dédié
✅ **Communauté** active de développeurs

## Pour commencer :

1. **Connectez-vous à votre dashboard** : ${'{dashboard_url}'}
2. **Récupérez votre clé API** dans les paramètres
3. **Découvrez nos templates** et choisissez celui qui correspond à votre projet
4. **Lancez votre premier projet** en quelques clics !

## Besoin d'aide ?

Notre équipe est disponible 24/7 pour répondre à toutes vos questions. Répondez simplement à cet email ou consultez notre documentation complète.

À très bientôt sur AI Empire !

L'équipe AI Empire

---
*P.S. : Profitez de votre offre de bienvenue : -20% sur votre premier achat avec le code BIENVENUE20*
    `
  },
  {
    part: 2,
    subject: '💡 Découvrez ce que vous pouvez créer avec AI Empire',
    content: `
# Découvrez le potentiel d'AI Empire 💡

Cher ${'{name}'},

Maintenant que votre compte est actif, laissez-nous vous montrer ce que vous pouvez accomplir avec AI Empire.

## Cas d'utilisation populaires :

### 🚀 **SaaS en 24 heures**
Créez un SaaS complet en une journée grâce à nos templates pré-configurés avec authentification, paiements et dashboard admin.

### 🤖 **Chatbots intelligents**
Intégrez des chatbots IA dans vos applications pour améliorer l'expérience utilisateur et automatiser le support client.

### 📊 **Analytics en temps réel**
Ajoutez des tableaux de bord analytics à vos projets en quelques minutes grâce à nos composants React.

### 💳 **E-commerce**
Lancez votre boutique en ligne avec nos templates e-commerce intégrant Stripe pour les paiements.

## Tutoriels recommandés :

1. **Créer un SaaS avec Next.js 14** : ${'{tutorial_url}'}
2. **Intégrer l'IA dans votre application** : ${'{tutorial_url}'}
3. **Configurer les paiements Stripe** : ${'{tutorial_url}'}

Prêt à créer quelque chose d'extraordinaire ?

Commencez maintenant sur ${'{dashboard_url}'}`,
  },
  {
    part: 3,
    subject: '🚀 Prêt pour l\'étape suivante ? Optimisez votre workflow',
    content: `
# Optimisez votre workflow avec AI Empire 🚀

Cher ${'{name}'},

Vous avez maintenant une bonne connaissance d'AI Empire. Voici comment tirer le meilleur parti de notre plateforme :

## Fonctionnalités avancées :

### ⚡ **Templates personnalisables**
Chaque template est entièrement personnalisable. Adaptez les couleurs, les composants et les fonctionnalités selon vos besoins.

### 🔗 **Intégrations API**
Connectez AI Empire à vos outils existants : Slack, GitHub, Notion, et bien plus.

### 📈 **Optimisations performances**
Nos templates sont optimisés pour les meilleures performances et le SEO.

### 🤝 **Collaboration en équipe**
Partagez vos projets avec votre équipe et travaillez ensemble en temps réel.

## Offres exclusives pour vous :

🎁 **Parrainez un ami** et recevez 50 crédits supplémentaires
🔥 **Offre spéciale** : -30% sur le plan Pro avec le code PRO30
📚 **Webinaires gratuits** chaque mois sur les meilleures pratiques

## Prochaines étapes :

1. **Explorez tous les templates** disponibles
2. **Rejoignez notre communauté** Discord
3. **Participez à nos webinaires** mensuels
4. **Partagez vos créations** avec la communauté

Merci de faire partie d'AI Empire. Nous avons hâte de voir ce que vous allez créer !`,
  }
]

export const productLaunchEmail: EmailTemplate = {
  id: 'product-launch',
  name: 'Annonce de lancement produit',
  category: 'launch',
  subject: '🚀 NOUVEAU : AI Empire v2.0 est arrivé !',
  content: `
# 🚀 AI Empire v2.0 est officiellement lancé !

Cher ${'{name}'},

Nous sommes ravis de vous annoncer le lancement d'AI Empire v2.0 ! Cette nouvelle version représente une avancée majeure pour notre plateforme.

## Ce qui est nouveau :

### ✨ **Templates React 18+**
Découvrez nos nouveaux templates optimisés pour React 18 et Next.js 14, offrant des performances exceptionnelles.

### 🤖 **APIs GPT-4 intégrées**
Profitez des dernières avancées en IA avec nos APIs GPT-4 directement intégrées dans vos projets.

### 📊 **Analytics en temps réel**
Suivez les performances de vos applications avec notre nouveau tableau de bord analytics.

### 🎨 **Design System amélioré**
Un nouveau design system pour créer des interfaces plus cohérentes et professionnelles.

## Offre de lancement spéciale :

🔥 **-50%** sur tous les templates pendant 72 heures
🎁 **200 crédits IA gratuits** pour les premiers 1000 utilisateurs
⚡ **Support prioritaire** gratuit pendant 3 mois

**Code de lancement : LAUNCH2024**

## Découvrez les nouveautés :

${'{launch_url}'}

## Ce que disent nos premiers utilisateurs :

*"AI Empire v2.0 est une véritable révolution. Les performances sont incroyables !"*
— Marie L., Développeuse Full Stack

*"Enfin une plateforme qui comprend les besoins des développeurs modernes."*
— Thomas P., CTO

---

L'équipe AI Empire

*P.S. : Cette offre est strictement limitée. Ne manquez pas cette opportunité unique !*
  `
}

export const newsletterTemplate: EmailTemplate = {
  id: 'newsletter',
  name: 'Newsletter mensuelle',
  category: 'newsletter',
  subject: '📰 Newsletter AI Empire - Les dernières actualités et astuces',
  content: `
# Newsletter AI Empire 📰

Cher ${'{name}'},

Voici les dernières actualités et astuces du mois d'AI Empire !

---

## 🚀 Actualités du mois

### **Nouveau : Templates E-commerce**
Découvrez notre nouvelle collection de templates e-commerce, parfaitement intégrés avec Stripe pour des paiements sécurisés.

### **Mise à jour : SDK v2.1**
Notre SDK vient de recevoir une mise à jour majeure avec de nouvelles fonctionnalités d'optimisation des performances.

### **Communauté grandissante !**
Merci à notre communauté grandissante ! Pour célébrer, nous avons préparé des offres exclusives.

---

## 💡 Astuce du mois

**Optimisez le SEO de votre SaaS avec ces 5 étapes :**

1. Utilisez nos templates optimisés pour le SEO
2. Intégrez les balises meta automatiques
3. Créez du contenu de qualité avec nos assistants IA
4. Optimisez les performances avec notre cache intelligent
5. Suivez vos progrès avec nos analytics SEO

---

## 📚 Ressources recommandées

### **Tutoriel : Créer un chatbot IA en 30 minutes**
Apprenez à intégrer un chatbot intelligent dans votre application avec AI Empire.

### **Guide : Lancer un SaaS rentable en 2024**
Notre guide complet pour créer et monétiser votre SaaS.

### **Webinaire : Les tendances du développement web**
Rejoignez-nous le [date] pour découvrir les dernières tendances.

---

## 🎁 Offres exclusives

🔥 **Offre newsletter** : -25% sur tous les templates avec le code NEWSLETTER25
🎁 **Parrainage** : Gagnez 50 crédits pour chaque ami parrainé
📚 **Formation gratuite** : Accédez à notre cours "Lancer votre SaaS"

---

## 📅 Prochains événements

- **Webinaire** : [date] - "Optimiser ses APIs IA"
- **Atelier** : [date] - "Créer un dashboard analytics"
- **Communauté** : [date] - "Rencontre développeurs"

---

Merci de faire partie d'AI Empire !

L'équipe AI Empire

---
*Vous souhaitez vous désinscrire ? Cliquez ici : ${'{unsubscribe_url}'}*
  `
}

export const reengagementCampaign: EmailTemplate = {
  id: 'reengagement',
  name: 'Campagne de réengagement',
  category: 'reengagement',
  subject: '💜 Nous vous avons manqué ! Voici ce qui a changé...',
  content: `
# ${'{name}'}, nous vous avons manqué ! 💜

Cher ${'{name}'},

Nous avons remarqué que vous n'avez pas utilisé AI Empire depuis un moment. Nous voulions vous montrer ce qui a changé et vous inviter à revenir !

## Ce qui est nouveau depuis votre dernière visite :

### 🚀 **Nouvelles fonctionnalités**
- Templates React 18+ optimisés
- APIs GPT-4 intégrées
- Analytics en temps réel
- Nouveau design system

### 🤖 **Améliorations IA**
- Meilleure précision des réponses
- Temps de réponse réduits de 50%
- Nouvelles APIs spécialisées

### 🎨 **Nouveaux templates**
- 20+ nouveaux templates premium
- Templates e-commerce
- Templates SaaS avancés
- Templates dashboard admin

## Offre spéciale de retour :

🎁 **+100 crédits gratuits** pour vous souhaiter la bienvenue
🔥 **-30% sur votre prochain achat** avec le code BIENRETUR30
⚡ **Support prioritaire** gratuit pendant 1 mois

## Ce que vous avez raté :

📊 **Communauté grandissante** : des développeurs actifs nous font confiance
🏆 **Succès clients** : Plus de 1000 SaaS lancés avec succès
📈 **Performance** : 98% de satisfaction client

## Revenez nous voir !

${'{dashboard_url}'}

Nous avons hâte de vous revoir et de vous montrer toutes ces nouvelles fonctionnalités.

À bientôt sur AI Empire !

L'équipe AI Empire

---
*P.S. : Vos crédits inutilisés sont toujours disponibles dans votre compte.*
  `
}

export const referralProgramEmail: EmailTemplate = {
  id: 'referral',
  name: 'Programme de parrainage',
  category: 'referral',
  subject: '🤝 Parrainez vos amis et gagnez des récompenses !',
  content: `
# 🤝 Programme de parrainage AI Empire

Cher ${'{name}'},

Merci de faire partie de la communauté AI Empire ! Nous avons le plaisir de vous présenter notre nouveau programme de parrainage.

## Comment ça marche ?

### **Pour vous (le parrain) :**
🎁 **50 crédits gratuits** pour chaque ami parrainé
🔥 **-20% de réduction permanente** sur vos achats
⭐ **Statut VIP** après 5 parrainages

### **Pour votre ami (le filleul) :**
🎁 **100 crédits gratuits** pour commencer
🔥 **-25% sur son premier achat** avec votre code
📚 **Accès premium** pendant 1 mois

## Votre code de parrainage :

**Code : ${'{referral_code}'}**

Partagez ce lien : ${'{referral_link}'}

## Comment partager :

1. **Partagez votre code** avec vos amis développeurs
2. **Ils s'inscrivent** avec votre code
3. **Vous recevez vos récompenses** automatiquement

## Les avantages pour vos filleuls :

✅ Templates Next.js 14 professionnels
✅ APIs IA puissantes
✅ Support technique expert
✅ Communauté active

## Top parrains du mois :

1. 🥇 **Marie L.** - 12 parrainages - 600 crédits gagnés
2. 🥈 **Thomas P.** - 8 parrainages - 400 crédits gagnés
3. 🥉 **Sophie M.** - 6 parrainages - 300 crédits gagnés

## Partagez maintenant !

${'{referral_link}'}

Merci de nous aider à grandir la communauté AI Empire !

L'équipe AI Empire

---
*P.S. : Il n'y a pas de limite au nombre de parrainages ! Plus vous parrainez, plus vous gagnez.*
  `
}

export function getEmailTemplate(id: string): EmailTemplate | undefined {
  const allTemplates: EmailTemplate[] = [
    ...welcomeEmailSequence.map((seq, index) => ({
      id: `welcome-${index + 1}`,
      name: `Email de bienvenue - Partie ${index + 1}`,
      subject: seq.subject,
      content: seq.content,
      category: 'welcome' as const,
    })),
    productLaunchEmail,
    newsletterTemplate,
    reengagementCampaign,
    referralProgramEmail,
  ]

  return allTemplates.find(template => template.id === id)
}

export function getWelcomeEmail(part: 1 | 2 | 3): WelcomeEmailSequence | undefined {
  return welcomeEmailSequence.find(seq => seq.part === part)
}

export function getProductLaunchEmail(): EmailTemplate {
  return productLaunchEmail
}

export function getNewsletterTemplate(): EmailTemplate {
  return newsletterTemplate
}

export function getReengagementCampaign(): EmailTemplate {
  return reengagementCampaign
}

export function getReferralProgramEmail(): EmailTemplate {
  return referralProgramEmail
}

export function generatePersonalizedEmail(template: EmailTemplate, data: { name: string; dashboard_url: string; referral_code?: string }): string {
  let content = template.content

  content = content.replace(/{name}/g, data.name)
  content = content.replace(/{dashboard_url}/g, data.dashboard_url)

  if (data.referral_code) {
    content = content.replace(/{referral_code}/g, data.referral_code)
    content = content.replace(/{referral_link}/g, `https://ai-empire-steel.vercel.app/ref/${data.referral_code}`)
  }

  return content
}
