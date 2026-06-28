export interface SEOContent {
  title: string
  metaDescription: string
  slug: string
  keywords: string[]
  content: string
  readingTime: number
  score: number
}

export interface KeywordAnalysis {
  keyword: string
  density: number
  occurrences: number
  suggestions: string[]
}

export interface BlogOutline {
  title: string
  sections: Array<{
    heading: string
    subheadings: string[]
    keywords: string[]
    wordCount: number
  }>
  totalWordCount: number
  estimatedReadingTime: number
}

export function generateSEOTitle(topic: string, keywords: string[]): string {
  const primaryKeyword = keywords[0] || topic
  return `${primaryKeyword} : Guide Complet ${new Date().getFullYear()} | NeuraAPI`
}

export function generateMetaDescription(topic: string, keywords: string[]): string {
  const keywordList = keywords.slice(0, 3).join(', ')
  const description = `Découvrez tout sur ${topic}. Guide complet avec ${keywordList}. Conseils pratiques et meilleures pratiques pour ${new Date().getFullYear()}.`
  return description.substring(0, 160)
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function analyzeKeywords(content: string, targetKeywords: string[]): KeywordAnalysis[] {
  const words = content.toLowerCase().split(/\s+/)
  const totalWords = words.length

  return targetKeywords.map(keyword => {
    const lowerKeyword = keyword.toLowerCase()
    const occurrences = words.filter(w => w.includes(lowerKeyword)).length
    const density = totalWords > 0 ? (occurrences / totalWords) * 100 : 0

    const suggestions: string[] = []
    if (density < 1) suggestions.push('Densité trop faible. Augmentez l\'utilisation du mot-clé.')
    if (density > 3) suggestions.push('Densité trop élevée. Réduisez l\'utilisation du mot-clé.')
    if (occurrences === 0) suggestions.push('Mot-clé absent. Ajoutez-le dans le contenu.')

    return {
      keyword,
      density: Math.round(density * 100) / 100,
      occurrences,
      suggestions,
    }
  })
}

export function calculateSEOScore(content: SEOContent): number {
  let score = 0

  if (content.title.length >= 30 && content.title.length <= 60) score += 20
  else if (content.title.length > 0) score += 10

  if (content.metaDescription.length >= 120 && content.metaDescription.length <= 160) score += 20
  else if (content.metaDescription.length > 0) score += 10

  if (content.keywords.length >= 3) score += 15
  else if (content.keywords.length > 0) score += 5

  if (content.content.length >= 300) score += 15
  else if (content.content.length > 0) score += 5

  if (content.readingTime >= 3 && content.readingTime <= 10) score += 10

  const headings = (content.content.match(/^#{1,3}\s/gm) || []).length
  if (headings >= 3) score += 10

  const wordCount = content.content.split(/\s+/).length
  if (wordCount >= 300) score += 10

  return Math.min(score, 100)
}

export function generateBlogOutline(topic: string, keywords: string[]): BlogOutline {
  const primaryKeyword = keywords[0] || topic

  return {
    title: `${primaryKeyword} : Guide Complet ${new Date().getFullYear()}`,
    sections: [
      {
        heading: `Introduction à ${primaryKeyword}`,
        subheadings: [
          `Qu'est-ce que ${primaryKeyword} ?`,
          'Pourquoi c\'est important en 2025',
        ],
        keywords: [primaryKeyword, keywords[1] || ''],
        wordCount: 200,
      },
      {
        heading: `Les bases de ${primaryKeyword}`,
        subheadings: [
          'Concepts fondamentaux',
          'Terminologie clé',
          'Prérequis',
        ],
        keywords: [primaryKeyword, 'bases', 'fondamentaux'],
        wordCount: 400,
      },
      {
        heading: `Guide pas à pas`,
        subheadings: [
          'Étape 1 : Installation',
          'Étape 2 : Configuration',
          'Étape 3 : Première utilisation',
        ],
        keywords: ['tutorial', 'guide', 'étapes'],
        wordCount: 600,
      },
      {
        heading: 'Bonnes pratiques',
        subheadings: [
          'Optimisation des performances',
          'Sécurité',
          'Maintenabilité',
        ],
        keywords: ['bonnes pratiques', 'optimisation', 'sécurité'],
        wordCount: 400,
      },
      {
        heading: 'Cas d\'utilisation',
        subheadings: [
          'Exemples concrets',
          'Retours d\'expérience',
          'Intégration avec d\'autres outils',
        ],
        keywords: ['exemples', 'cas d\'utilisation', 'intégration'],
        wordCount: 400,
      },
      {
        heading: 'Conclusion',
        subheadings: [
          'Récapitulatif',
          'Prochaines étapes',
          'Ressources complémentaires',
        ],
        keywords: ['conclusion', 'résumé', 'ressources'],
        wordCount: 200,
      },
    ],
    totalWordCount: 2200,
    estimatedReadingTime: 9,
  }
}

export function generateFullSEOContent(topic: string, keywords: string[]): SEOContent {
  const outline = generateBlogOutline(topic, keywords)
  const sections = outline.sections.map(s =>
    `## ${s.heading}\n\n${s.subheadings.map(h => `### ${h}\n\nContenu à développer...`).join('\n\n')}`
  ).join('\n\n')

  return {
    title: outline.title,
    metaDescription: generateMetaDescription(topic, keywords),
    slug: generateSlug(outline.title),
    keywords,
    content: `# ${outline.title}\n\n${sections}`,
    readingTime: outline.estimatedReadingTime,
    score: 0,
  }
}
