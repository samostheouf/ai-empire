import { NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'
import {
  generateSEOTitle,
  generateMetaDescription,
  generateSlug,
  analyzeKeywords,
  calculateSEOScore,
  generateBlogOutline,
  generateFullSEOContent,
} from '@/lib/marketing/seo'

export async function GET(request: Request) {
  try {
    const auth = await authenticateApiKey(request);
    if (auth.error) return auth.error;

    const { searchParams } = new URL(request.url)
    const topic = searchParams.get('topic')
    const keywords = searchParams.get('keywords')?.split(',') || []

    if (!topic) {
      return NextResponse.json({ error: 'Sujet requis' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    const outline = generateBlogOutline(topic, keywords)
    const title = generateSEOTitle(topic, keywords)
    const metaDescription = generateMetaDescription(topic, keywords)

    return NextResponse.json({
      title,
      metaDescription,
      slug: generateSlug(title),
      outline,
      suggestions: [
        'Utilisez des sous-titres H2 et H3 pour structurer le contenu',
        'Incluez des mots-clés naturellement dans le texte',
        'Ajoutez des images avec des balises alt descriptives',
        'Créez des liens internes vers vos pages pertinentes',
        'Utilisez des listes et des tableaux pour améliorer la lisibilité',
      ],
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function POST(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const { type, topic, keywords, content } = body

    if (!topic) {
      return NextResponse.json({ error: 'Sujet requis' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    const keywordList = keywords || []

    switch (type) {
      case 'meta': {
        const title = generateSEOTitle(topic, keywordList)
        const metaDescription = generateMetaDescription(topic, keywordList)
        const slug = generateSlug(title)

        return NextResponse.json({
          success: true,
          title,
          metaDescription,
          slug,
          score: calculateSEOScore({
            title,
            metaDescription,
            keywords: keywordList,
            content: '',
            slug,
            readingTime: 0,
            score: 0,
          }),
        })
      }

      case 'outline': {
        const outline = generateBlogOutline(topic, keywordList)

        return NextResponse.json({
          success: true,
          outline,
        }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
      }

      case 'keywords': {
        if (!content) {
          return NextResponse.json({ error: 'Contenu requis pour l\'analyse' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
        }
        const analysis = analyzeKeywords(content, keywordList)

        return NextResponse.json({
          success: true,
          analysis,
          averageDensity: analysis.reduce((sum, k) => sum + k.density, 0) / analysis.length,
        }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
      }

      case 'full': {
        const seoContent = generateFullSEOContent(topic, keywordList)
        seoContent.score = calculateSEOScore(seoContent)

        return NextResponse.json({
          success: true,
          content: seoContent,
        }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
      }

      default:
        return NextResponse.json({ error: 'Type invalide' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la génération' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}
