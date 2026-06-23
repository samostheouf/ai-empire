import { NextRequest, NextResponse } from 'next/server'

const STARTER_TEMPLATE = `# NeuraStarter — Template Next.js 14 Gratuit

## Démarrage rapide

\`\`\`bash
npx create-next-app@14 my-saas --typescript --tailwind --app
cd my-saas
\`\`\`

## Fonctionnalités incluses

- Next.js 14 App Router
- Tailwind CSS
- Authentification de base
- Dashboard responsive
- Formulaire de contact
- SEO optimisé
- TypeScript
- Déploiement Vercel en 1 clic

## Structure

\`\`\`
src/
  app/
    page.tsx          # Page d'accueil
    layout.tsx        # Layout racine
    dashboard/        # Dashboard utilisateur
    login/            # Page de connexion
    register/         # Page d'inscription
  components/
    Header.tsx        # Navigation
    Footer.tsx        # Pied de page
  lib/
    auth.ts           # Logique d'authentification
    db.ts             # Configuration base de données
\`\`\`

## Configuration

1. Copiez \`.env.example\` en \`.env.local\`
2. Configurez vos variables d'environnement
3. Lancez \`npm run dev\`

## Déploiement

Déployez sur Vercel en un clic :
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/neuraapi/neurastarter)

## Licence

MIT — Utilisez librement pour vos projets.

---

Merci d'utiliser NeuraAPI ! https://ai-empire-steel.vercel.app
`

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return new NextResponse('Lien invalide', { status: 400 })
    }

    const encoder = new TextEncoder()
    const data = encoder.encode(STARTER_TEMPLATE)

    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename="NeuraStarter-README.md"',
        'Content-Length': String(data.length),
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return new NextResponse('Erreur lors du téléchargement', { status: 500 })
  }
}
