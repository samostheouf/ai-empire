import { callAI } from '@/lib/ai'
import { prisma, safeQuery } from '@/lib/db'
import { MetadataRoute } from 'next'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

interface ContentLog {
  id: string
  type: string
  action: string
  status: 'success' | 'error' | 'skipped'
  details: string
  timestamp: Date
}

const logs: ContentLog[] = []

function log(type: string, action: string, status: ContentLog['status'], details: string) {
  const entry: ContentLog = {
    id: `content_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    type,
    action,
    status,
    details,
    timestamp: new Date(),
  }
  logs.push(entry)
}

interface GeneratedBlogPost {
  title: string
  slug: string
  content: string
  excerpt: string
  keywords: string[]
  category: string
}

export async function generateWeeklyBlogPosts(): Promise<GeneratedBlogPost[]> {
  const posts: GeneratedBlogPost[] = []

  const topics = [
    { topic: 'Comment l\'IA révolutionne le développement web en 2024', keywords: ['ia', 'développement web', 'nextjs'] },
    { topic: 'Les meilleures APIs IA pour vos projets SaaS', keywords: ['api ia', 'saas', 'intégration'] },
    { topic: 'Optimiser son SEO avec l\'intelligence artificielle', keywords: ['seo', 'ia', 'référencement'] },
    { topic: 'Templates Next.js : pourquoi et comment les utiliser', keywords: ['nextjs', 'templates', 'react'] },
    { topic: 'Automatiser son marketing avec l\'IA', keywords: ['marketing', 'automatisation', 'ia'] },
  ]

  const selectedTopics = topics.sort(() => Math.random() - 0.5).slice(0, 2)

  for (const { topic, keywords } of selectedTopics) {
    const aiResult = await callAI(
      `Rédige un article de blog optimisé SEO sur: "${topic}"
      Audience: développeurs et entrepreneurs
      Ton: professionnel et engageant
      Mots-clés: ${keywords.join(', ')}
      Longueur: 800-1200 mots
      
      Format:
      - Titre H2 accrocheur
      - Introduction avec hook
      - 3-4 sous-sections H3
      - Liste à puces pour les points clés
      - Conclusion avec CTA vers NeuraAPI
      - Mention naturelle de nos templates et APIs`,
      2000
    )

    const slug = topic
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const post: GeneratedBlogPost = {
      title: topic,
      slug,
      content: aiResult.content || generateFallbackBlog(topic, keywords),
      excerpt: (aiResult.content || topic).slice(0, 160),
      keywords,
      category: 'ia',
    }

    posts.push(post)
    log('blog', `article_${slug}`, 'success', `Article généré: ${topic}`)
  }

  return posts
}

function generateFallbackBlog(topic: string, keywords: string[]): string {
  return `## ${topic}

Dans un monde digital en constante évolution, ${keywords[0]} est devenu incontournable pour les développeurs et entrepreneurs.

### Pourquoi ${keywords[0]} est essentiel

${keywords[0]} transforme la façon dont nous créons des applications web. Avec des outils comme NeuraAPI, vous pouvez :

- Intégrer des APIs IA en quelques minutes
- Gagner un temps considérable sur le développement
- Réduire les coûts de production
- Améliorer la qualité du code généré

### Comment commencer

1. **Choisissez le bon template** : Nos templates Next.js sont conçus pour démarrer rapidement
2. **Intégrez l'IA** : Utilisez nos APIs pour ajouter des fonctionnalités intelligentes
3. **Déployez** : Mettez en production en quelques clics

### Les avantages de NeuraAPI

NeuraAPI offre une solution complète pour les développeurs modernes :

- Templates premium optimisés
- APIs IA performantes
- Documentation complète
- Support technique réactif

### Conclusion

Prêt à transformer votre projet avec ${keywords[0]} ? Découvrez nos templates et APIs sur NeuraAPI.

[Commencer maintenant →](${appUrl}/templates)`
}

export interface SocialMediaContent {
  platform: 'twitter' | 'linkedin'
  posts: Array<{
    content: string
    hashtags: string[]
    scheduledAt: Date
  }>
}

export async function generateSocialMediaPosts(): Promise<SocialMediaContent[]> {
  const socialContents: SocialMediaContent[] = []

  const aiResult = await callAI(
    `Génère 3 posts Twitter et 3 posts LinkedIn pour NeuraAPI cette semaine.
    Thèmes: nouveaux templates, astuces IA, témoignages clients.
    Ton: professionnel mais engageant.
    Inclus: emojis, hashtags (max 5 par post), CTA.
    
    Format JSON:
    {
      "twitter": [{ "content": "...", "hashtags": ["..."] }],
      "linkedin": [{ "content": "...", "hashtags": ["..."] }]
    }`,
    1500
  )

  let socialData: { twitter?: Array<{ content: string; hashtags: string[] }>; linkedin?: Array<{ content: string; hashtags: string[] }> } | null
  try {
    const jsonMatch = aiResult.content.match(/\{[\s\S]*\}/)
    socialData = jsonMatch ? JSON.parse(jsonMatch[0]) : null
  } catch {
    socialData = null
  }

  if (!socialData) {
    socialData = {
      twitter: [
        { content: '🚀 Découvrez nos nouveaux templates Next.js premium !\n\n✅ Design moderne\n✅ Code optimisé\n✅ Support inclus\n\nDécouvrez → ' + appUrl + '/templates', hashtags: ['NextJS', 'Templates', 'WebDev'] },
        { content: '💡 Astuce du jour : Intégrez l\'IA dans votre SaaS en 5 minutes avec NeuraAPI\n\n→ APIs performantes\n→ Documentation claire\n→ Déploiement rapide', hashtags: ['IA', 'SaaS', 'DevTips'] },
        { content: '🎉 +500 développeurs font déjà confiance à NeuraAPI\n\nRejoignez la communauté et transformez vos projets avec l\'IA.', hashtags: ['Community', 'Developers', 'AI'] },
      ],
      linkedin: [
        { content: '🚀 Nous venons de lancer de nouveaux templates professionnels pour développeurs.\n\nCe qui les rend uniques :\n→ Code Next.js 14 + Tailwind CSS\n→ Intégration IA native\n→ Déploiement en minutes\n\nDécouvrez-les sur neuraapi.com', hashtags: ['WebDevelopment', 'NextJS', 'AI'] },
        { content: '💡 Comment l\'IA transforme le développement web :\n\n1. Génération de code automatisée\n2. Tests intelligentes\n3. Optimisation SEO assistée\n\nNeuraAPI vous donne accès à toutes ces capacités.\n\nEn savoir plus → neuraapi.com', hashtags: ['Innovation', 'AI', 'Development'] },
        { content: '⭐ Témoignage client :\n\n"NeuraAPI a divisé par 3 notre temps de développement. Les templates sont impeccables et l\'API IA est très performante."\n\n— Développeur SaaS', hashtags: ['Testimonial', 'ClientSuccess', 'SaaS'] },
      ],
    }
  }

  const now = new Date()
  const twitterPosts = (socialData.twitter || []).map((post, i) => ({
    content: post.content,
    hashtags: post.hashtags || ['NeuraAPI'],
    scheduledAt: new Date(now.getTime() + (i + 1) * 4 * 60 * 60 * 1000),
  }))

  const linkedinPosts = (socialData.linkedin || []).map((post, i) => ({
    content: post.content,
    hashtags: post.hashtags || ['NeuraAPI'],
    scheduledAt: new Date(now.getTime() + (i + 1) * 6 * 60 * 60 * 1000),
  }))

  socialContents.push({ platform: 'twitter', posts: twitterPosts })
  socialContents.push({ platform: 'linkedin', posts: linkedinPosts })

  log('social', 'generate_posts', 'success', `${twitterPosts.length} posts Twitter, ${linkedinPosts.length} posts LinkedIn générés`)

  return socialContents
}

export interface SEOContent {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  structuredData: object
}

export async function generateSEOContent(page: string): Promise<SEOContent> {
  const aiResult = await callAI(
    `Génère le contenu SEO optimisé pour la page "${page}" de NeuraAPI.
    Format JSON:
    {
      "metaTitle": "... (max 60 caractères)",
      "metaDescription": "... (max 160 caractères)",
      "keywords": ["mot-clé 1", "mot-clé 2", ...],
      "structuredData": { "@context": "https://schema.org", "@type": "WebPage", ... }
    }
    
    Mots-clés cibles: templates ia, api ia, nextjs, saas, développement web
    Localisation: France`,
    800
  )

  let seoData: SEOContent
  try {
    const jsonMatch = aiResult.content.match(/\{[\s\S]*\}/)
    seoData = jsonMatch ? JSON.parse(jsonMatch[0]) : generateFallbackSEO(page)
  } catch {
    seoData = generateFallbackSEO(page)
  }

  log('seo', `optimize_${page}`, 'success', `SEO optimisé pour ${page}`)
  return seoData
}

function generateFallbackSEO(page: string): SEOContent {
  const titles: Record<string, string> = {
    home: 'NeuraAPI — Templates & APIs IA Premium pour Développeurs',
    templates: 'Templates Next.js Premium — NeuraAPI',
    pricing: 'Tarifs — NeuraAPI Templates & APIs IA',
    blog: 'Blog — Astuces IA & Développement Web | NeuraAPI',
  }

  return {
    metaTitle: titles[page] || `NeuraAPI — ${page}`,
    metaDescription: `Découvrez ${page} sur NeuraAPI. Templates Next.js premium et APIs IA pour développeurs. Déployez votre projet en quelques minutes.`,
    keywords: ['neuraapi', 'templates ia', 'api ia', 'nextjs', 'saas', page],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: titles[page] || page,
      description: `Page ${page} de NeuraAPI`,
      url: `${appUrl}/${page}`,
    },
  }
}

export function generateUpdatedSitemap(blogSlugs: string[]): MetadataRoute.Sitemap {
  const now = new Date()
  const baseUrl = appUrl

  const mainPages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/templates`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.95 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const regionalPages = [
    { url: `${baseUrl}/en/usa`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/uk`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/de/de`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/ja/jp`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/pt/br`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
  ]

  log('sitemap', 'update', 'success', `Sitemap mis à jour avec ${blogPages.length} pages blog`)

  return [...mainPages, ...blogPages, ...regionalPages]
}

export async function runAutoContent(): Promise<{
  totalActions: number
  successful: number
  failed: number
  logs: ContentLog[]
  generatedPosts: GeneratedBlogPost[]
  socialContent: SocialMediaContent[]
}> {
  const runLogs: ContentLog[] = []
  const beforeCount = logs.length

  const blogPosts = await generateWeeklyBlogPosts()
  const socialContent = await generateSocialMediaPosts()

  const blogSlugs = blogPosts.map((p) => p.slug)
  const existingSlugs = await safeQuery(
    () => prisma.template.findMany({ select: { slug: true } }),
    []
  )
  const allSlugs = [...blogSlugs, ...existingSlugs.map((t) => t.slug)]
  generateUpdatedSitemap(allSlugs)

  runLogs.push(...logs.slice(beforeCount))
  const successful = runLogs.filter((l) => l.status === 'success').length
  const failed = runLogs.filter((l) => l.status === 'error').length

  return {
    totalActions: runLogs.length,
    successful,
    failed,
    logs: runLogs,
    generatedPosts: blogPosts,
    socialContent,
  }
}

export function getAutoContentLogs(): ContentLog[] {
  return [...logs]
}
