import { callAI } from '@/lib/ai'

export interface ContentRequest {
  type: 'blog' | 'product' | 'social' | 'email'
  topic: string
  keywords?: string[]
  tone?: string
  targetAudience?: string
  maxLength?: number
}

export interface GeneratedContent {
  id: string
  type: string
  title: string
  body: string
  excerpt: string
  keywords: string[]
  seoScore: number
  generatedAt: Date
  tokensUsed: number
  provider: string
}

const SYSTEM_PROMPT = `Tu es un rédacteur expert pour NeuraAPI, une plateforme de templates et APIs IA premium.
Tu génères du contenu optimisé SEO en français, engageant et professionnel.
Ton style: clair, concis, orienté conversion. Tu utilises des mots-clés pertinents naturellement.
Tu formates toujours en Markdown.`

function generateId(): string {
  return `content_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

function calculateSEOScore(content: string, keywords: string[]): number {
  let score = 50
  const lowerContent = content.toLowerCase()

  for (const keyword of keywords) {
    const count = (lowerContent.match(new RegExp(keyword.toLowerCase(), 'g')) || []).length
    if (count >= 2 && count <= 5) score += 10
    else if (count > 5) score += 5
  }

  if (content.length >= 300 && content.length <= 2000) score += 15
  if (content.includes('##')) score += 10
  if (content.includes('- ') || content.includes('* ')) score += 5

  return Math.min(100, score)
}

export async function executeContentCreator(request: ContentRequest): Promise<GeneratedContent> {
  const id = generateId()
  const keywords = request?.keywords || [request?.topic || ""]
  const tone = request?.tone || 'professionnel et engageant'
  const maxLength = request?.maxLength || 1500

  let prompt = ''
  switch (request?.type) {
    case 'blog':
      prompt = `Rédige un article de blog sur: "${request?.topic}"
Audience cible: ${request?.targetAudience || 'développeurs et entrepreneurs'}
Ton: ${tone}
Mots-clés à intégrer: ${keywords.join(', ')}
Longueur max: ${maxLength} caractères.

Format: Titre H2, introduction accrocheuse, sous-sections H3, conclusion avec CTA.`
      break

    case 'product':
      prompt = `Rédige une description produit pour: "${request?.topic}"
Ton: ${tone}
Mots-clés: ${keywords.join(', ')}
Format: Titre percutant, liste de bénéfices (pas de features), preuve sociale, CTA.
Max ${maxLength} caractères.`
      break

    case 'social':
      prompt = `Crée 3 posts réseaux sociaux pour: "${request?.topic}"
Ton: ${tone}
Mots-clés: ${keywords.join(', ')}
Inclus: emoji pertinents, hashtags (max 5), CTA clair.
Chaque post max 280 caractères.`
      break

    case 'email':
      prompt = `Rédige un email marketing pour: "${request?.topic}"
Ton: ${tone}
Mots-clés: ${keywords.join(', ')}
Format: Objet d'email, pré-header, corps avec bénéfices, CTA.
Max ${maxLength} caractères.`
      break
  }

  const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 2000)

  const body = result.content || generateFallbackContent(request)
  const title = extractTitle(body)
  const excerpt = extractExcerpt(body)

  return {
    id,
    type: request?.type,
    title,
    body,
    excerpt,
    keywords,
    seoScore: calculateSEOScore(body, keywords),
    generatedAt: new Date(),
    tokensUsed: result.tokensUsed,
    provider: result.provider
  }
}

function extractTitle(content: string): string {
  const h2Match = content.match(/##\s+(.+)/)
  if (h2Match) return h2Match[1].trim()
  const firstLine = content.split('\n').find(l => l.trim().length > 0)
  return firstLine?.replace(/^#+\s*/, '').trim() || 'Contenu généré'
}

function extractExcerpt(content: string): string {
  const lines = content.split('\n').filter(l => l.trim().length > 0)
  const firstParagraph = lines.find(l => !l.startsWith('#') && !l.startsWith('-'))
  return firstParagraph?.slice(0, 160) || content.slice(0, 160)
}

function generateFallbackContent(request: ContentRequest): string {
  const templates: Record<string, string> = {
    blog: `## ${request?.topic}\n\nDécouvrez comment ${request?.topic} peut transformer votre business.\n\n### Pourquoi c'est important\n\nDans un monde digital en constante évolution, ${request?.topic} est devenu incontournable.\n\n### Les bénéfices clés\n\n- Gain de temps considérable\n- Réduction des coûts\n- Amélioration de la qualité\n\n### Conclusion\n\nPrêt à passer à l'action ? ${request?.topic} est votre allié.`,

    product: `## ${request?.topic}\n\nLe ${request?.topic} premium pour les professionnels.\n\n**Bénéfices :**\n- Solution tout-en-un\n- Support dédié 24/7\n- Mises à jour gratuites\n\n**Tarif :** À partir de 29€\n\n[Commencer maintenant →]`,

    social: `🚀 ${request?.topic} - La révolution est là !\n\n✅ Gain de temps\n✅ Résultats garantis\n✅ Support premium\n\nDécouvrez → [lien]\n\n#${request.keywords?.[0] || 'neuraapi'} #ia #tech`,

    email: `Objet : ${request?.topic} - Offre exclusive\n\nBonjour,\n\n${request?.topic} peut changer votre façon de travailler.\n\nNos clients constatent en moyenne 3x plus de productivité.\n\n👉 Découvrez l'offre\n\nÀ bientôt,\nL'équipe NeuraAPI`
  }

  return templates[request?.type] || templates.blog
}

export const contentCreatorAgent = {
  name: 'Créateur de Contenu',
  id: 'content-creator',
  description: 'Génère du contenu optimisé SEO : articles, descriptions, posts, emails',
  execute: executeContentCreator
}
