export interface SocialPost {
  platform: 'twitter' | 'linkedin'
  content: string
  hashtags: string[]
  mediaUrl?: string
}

export interface TemplatePostData {
  templateName: string
  templateSlug: string
  templateDescription: string
  category: string
  price: number
  features: string[]
}

export function generateTwitterPost(data: TemplatePostData): SocialPost {
  const price = (data.price / 100).toFixed(0)
  const featureList = data.features.slice(0, 3).join(' • ')
  
  return {
    platform: 'twitter',
    content: `🚀 Nouveau template premium disponible !

${data.templateName}
${data.templateDescription}

✨ ${featureList}
💰 ${price}€

#NextJS #TailwindCSS #WebDev`,
    hashtags: ['NextJS', 'TailwindCSS', 'WebDev', 'Templates', 'Premium'],
    mediaUrl: `/templates/${data.templateSlug}/og.png`,
  }
}

export function generateLinkedInPost(data: TemplatePostData): SocialPost {
  const price = (data.price / 100).toFixed(0)
  const featureList = data.features.map((f) => `✅ ${f}`).join('\n')
  
  return {
    platform: 'linkedin',
    content: `🎯 Nouveau template professionnel disponible sur NeuraAPI

${data.templateName} est maintenant disponible pour les développeurs qui souhaitent lancer rapidement leur projet.

Ce template inclut :
${featureList}

Pourquoi choisir NeuraAPI ?
→ Code Next.js 14 + Tailwind CSS
→ Documentation complète
→ Support technique inclus
→ Déploiement en quelques minutes

Tarif : ${price}€

Découvrez-le maintenant 👇`,
    hashtags: ['WebDevelopment', 'NextJS', 'TailwindCSS', 'SaaS', 'Startup'],
    mediaUrl: `/templates/${data.templateSlug}/og.png`,
  }
}

export interface PromotionalPostData {
  type: 'discount' | 'launch' | 'feature' | 'testimonial'
  title: string
  description: string
  code?: string
  discount?: number
  testimonial?: {
    name: string
    role: string
    content: string
  }
}

export function generatePromotionalTwitterPost(data: PromotionalPostData): SocialPost {
  let content = ''

  switch (data.type) {
    case 'discount':
      content = `🔥 OFFRE LIMITÉE

${data.title}

${data.description}
${data.code ? `Code : ${data.code}` : ''}

⚡ Valable 48h seulement !`
      break
    case 'launch':
      content = `🚀 NOUVEAU

${data.title}

${data.description}

Soyez parmi les premiers à l'essayer !`
      break
    case 'feature':
      content = `✨ NOUVELLE FONCTIONNALITÉ

${data.title}

${data.description}

Disponible maintenant sur NeuraAPI`
      break
    case 'testimonial':
      content = `⭐ TÉMOIGNAGE CLIENT

"${data.testimonial?.content}"

— ${data.testimonial?.name}, ${data.testimonial?.role}`
      break
  }

  return {
    platform: 'twitter',
    content,
    hashtags: ['NeuraAPI', 'AI', 'Templates', 'SaaS'],
  }
}

export function generatePromotionalLinkedInPost(data: PromotionalPostData): SocialPost {
  let content = ''

  switch (data.type) {
    case 'discount':
      content = `🔥 Offre spéciale NeuraAPI

${data.title}

${data.description}

Pourquoi profiter de cette offre ?
→ Templates professionnels prêts à l'emploi
→ Code propre et bien documenté
→ Support technique réactif
${data.code ? `\nCode promo : ${data.code}` : ''}

⚡ Offre limitée dans le temps

Découvrez nos templates sur neuraapi.com`
      break
    case 'launch':
      content = `🚀 Lancement NeuraAPI

${data.title}

${data.description}

Ce nouveau produit a été conçu pour :
→ Réduire le temps de développement
→ Fournir une base solide et scalable
→ Permettre une mise en production rapide

Soyez parmi les premiers à découvrir cette innovation.

Visitez neuraapi.com pour en savoir plus.`
      break
    case 'feature':
      content = `✨ Évolution NeuraAPI

${data.title}

${data.description}

Cette amélioration vous permet de :
→ Gagner en productivité
→ Améliorer la qualité de votre code
→ Réduire les coûts de développement

Disponible maintenant pour tous nos utilisateurs.`
      break
    case 'testimonial':
      content = `⭐ Le succès de nos clients fait notre fierté

"${data.testimonial?.content}"

— ${data.testimonial?.name}, ${data.testimonial?.role}

Chez NeuraAPI, nous nous engageons à fournir des solutions qui font la différence.

Découvrez comment nous pouvons vous aider : neuraapi.com`
      break
  }

  return {
    platform: 'linkedin',
    content,
    hashtags: ['NeuraAPI', 'Innovation', 'WebDevelopment', 'SaaS'],
  }
}

export interface ShowcaseCardData {
  templateName: string
  category: string
  features: string[]
  gradient: string
}

export function generateShowcaseCard(data: ShowcaseCardData): {
  title: string
  badge: string
  features: string[]
  gradient: string
} {
  return {
    title: data.templateName,
    badge: data.category,
    features: data.features.slice(0, 4),
    gradient: data.gradient || 'from-indigo-500 to-purple-600',
  }
}
