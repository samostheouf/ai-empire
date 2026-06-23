import { NextResponse } from 'next/server'
import { callAI, isDemoMode } from '@/lib/ai'

export const dynamic = 'force-dynamic'

const DEMO_PROMPTS: Record<string, string> = {
  generate: 'Écris un paragraphe court sur l\'intelligence artificielle pour un blog',
  seo: 'Donne 3 conseils SEO pour un site e-commerce',
  code: 'Écris une fonction TypeScript pour valider un email',
  chat: 'Explique le machine learning en 2 phrases simples',
}

export async function POST(request: Request) {
  try {
    const { prompt, endpoint } = await request.json()
    const effectivePrompt = (typeof prompt === 'string' && prompt.trim()) || DEMO_PROMPTS[endpoint] || DEMO_PROMPTS.generate

    if (effectivePrompt.length > 2000) {
      return NextResponse.json({ error: 'Prompt trop long (max 2000 caractères)' }, { status: 400 })
    }

    const result = await callAI(effectivePrompt, 300)

    if (result.provider === 'demo' || isDemoMode()) {
      const demoContent = generateDemoContent(endpoint || 'generate', effectivePrompt)
      return NextResponse.json({
        text: demoContent,
        tokensUsed: 0,
        provider: 'demo',
        demo: true,
        message: 'Mode démo — Configurez GROQ_API_KEY ou GEMINI_API_KEY pour des réponses réelles',
      })
    }

    return NextResponse.json({
      text: result.content,
      tokensUsed: result.tokensUsed,
      provider: result.provider,
    })
  } catch {
    return NextResponse.json({ text: 'Erreur lors de la génération. Réessayez.', provider: 'error' })
  }
}

function generateDemoContent(endpoint: string, prompt: string): string {
  switch (endpoint) {
    case 'seo':
      return `Voici 3 conseils SEO pour votre site e-commerce :\n\n1. **Optimisez vos balises title et meta description** pour chaque page produit avec des mots-clés pertinents.\n\n2. **Créez du contenu unique** pour chaque fiche produit — évitez les descriptions dupliquées.\n\n3. **Améliorez la vitesse de chargement** : compressez les images et utilisez le cache côté serveur.\n\n---\n💡 Connectez une clé API pour des conseils personnalisés.`
    case 'code':
      return `\`\`\`typescript\nfunction validateEmail(email: string): boolean {\n  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return regex.test(email);\n}\n\n// Utilisation\nconsole.log(validateEmail("test@example.com")); // true\nconsole.log(validateEmail("invalid")); // false\n\`\`\`\n\n---\n💡 Connectez une clé API pour des générations de code réelles.`
    case 'chat':
      return `Le machine learning est une branche de l'IA qui permet aux ordinateurs d'apprendre à partir de données sans être explicitement programmés. Il identifie des patterns dans les données pour faire des prédictions ou des décisions.`
    default:
      return `L'intelligence artificielle révolutionne notre façon de travailler. Des assistants virtuels aux voitures autonomes, l'IA s'intègre dans tous les aspects de notre vie quotidienne, créant de nouvelles opportunités pour les développeurs et les entreprises.\n\n---\n💡 Configurez GROQ_API_KEY ou GEMINI_API_KEY pour des réponses IA en temps réel.`
  }
}
