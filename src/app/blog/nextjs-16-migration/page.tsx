import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Next.js 16 : Turbopack, Cache Components et proxy, ce qui change vraiment pour votre SaaS',
    description: 'Next.js 16 en pratique : Turbopack par défaut, Cache Components, proxy.ts, next/image, React Compiler, et la checklist de migration 15 vers 16 sans casser votre production.',
    path: '/blog/nextjs-16-migration',
    type: 'article',
    keywords: ['Next.js 16', 'migrer Next.js 16', 'Turbopack', 'Cache Components', 'proxy Next.js', 'React Compiler', 'Next.js 16 breaking changes'],
    publishedTime: '2026-10-23',
    modifiedTime: '2026-10-23',
  })
}

export default function BlogNextjs16() {
  const articleSchema = generateArticleSchema({
    title: 'Next.js 16 : Turbopack, Cache Components et proxy, ce qui change vraiment pour votre SaaS',
    description: 'Next.js 16 en pratique : Turbopack par défaut, Cache Components, proxy.ts, next/image, React Compiler, et la checklist de migration 15 vers 16 sans casser votre production.',
    slug: 'nextjs-16-migration',
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Next.js 16', path: '/blog/nextjs-16-migration' },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Next.js 16', href: '/blog/nextjs-16-migration' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Migration
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 23 octobre 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 14 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Next.js 16 : Turbopack, Cache Components et proxy, ce qui change vraiment pour votre SaaS
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/nextjs-16-migration`} title="Next.js 16 : guide de migration" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Next.js 16 est sorti le 22 octobre 2025, et la version stable la plus récente au moment où
            j&apos;écris ces lignes est la 16.4.x. Un an après, la question n&apos;est plus de savoir si la
            migration en vaut la peine, mais quand elle va vous tomber dessus — parce que votre version
            actuelle vieillit et que vos dépendances finissent par l&apos;exiger. Cet article fait le tour
            de ce qui change réellement, avec le code avant/après, et une checklist pour migrer un projet
            en production sans casser ce qui marche déjà.
          </p>
          <p>
            Deux précisions honnêtes avant de commencer. D&apos;abord, les chiffres de performance que je
            cite sont ceux annoncés par l&apos;équipe : mesurez sur <em>votre</em> projet, les résultats
            varient fortement selon la taille du code et le nombre de routes. Ensuite, si vous lisez cet
            article après une nouvelle version mineure, vérifiez la documentation officielle — plusieurs
            options ont bougé de version mineure en version mineure. Le lien est en bas de page.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Ce qu&apos;il faut retenir en une minute</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Turbopack est le bundler par défaut</strong> pour <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next dev</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next build</code>. Le flag <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">--turbopack</code> est devenu inutile ; <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">--webpack</code> permet de revenir en arrière.</li>
            <li><strong className="text-white">Cache Components</strong> remplace PPR, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">useCache</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">dynamicIO</code> par un seul flag : <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">cacheComponents: true</code>.</li>
            <li><strong className="text-white">Les APIs de requête sont 100 % asynchrones</strong>. L&apos;échappatoire de compatibilité de Next.js 15 est supprimée : <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">cookies()</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">headers()</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">draftMode()</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">params</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">searchParams</code> retournent des Promesses.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">middleware.ts</code> devient <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">proxy.ts</code></strong> et tourne en Node.js, pas en Edge.</li>
            <li><strong className="text-white">React 19.2 et React Compiler</strong> sont inclus. Le compilateur reste opt-in.</li>
            <li><strong className="text-white">Plancher relevé</strong> : Node.js 20.9+, TypeScript 5.1+, navigateurs Chrome/Edge/Firefox 111+, Safari 16.4+.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Turbopack par défaut : ce qui change concrètement</h2>
          <p>
            C&apos;est le changement le plus visible, et le plus simple. Avant, il fallait ajouter un flag
            pour en profiter ; maintenant, il faut un flag pour s&apos;en passer. Si votre projet n&apos;a pas de
            configuration webpack personnalisée, vous n&apos;avez rien à faire : le script de build fonctionne
            tel quel.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// package.json — avant (Next.js 15)
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack"
  }
}

// package.json — après (Next.js 16) : les flags ne servent plus à rien
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">Le piège de la configuration webpack</h3>
          <p>
            Si votre projet déclare une fonction <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">webpack</code> dans
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> next.config.js</code>, le build échoue volontairement.
            Next.js préfère refuser de compiler plutôt que d&apos;exécuter silencieusement une config que le
            nouveau bundler ignorerait. Trois issues possibles :
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Basculer sur Turbopack</strong> : la configuration se déclare à la racine de <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next.config</code> sous la clé <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">turbopack</code>, plus dans <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">experimental</code>.</li>
            <li><strong className="text-white">Continuer avec webpack</strong> : <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next build --webpack</code>.</li>
            <li><strong className="text-white">Découvrir une config que vous n&apos;avez pas écrite</strong> : si le build échoue sans que vous ayez déclaré de fonction webpack, c&apos;est qu&apos;un plugin en ajoute une. Regardez vos dépendances.</li>
          </ul>
          <p>
            Deux détails de migration Turbopack à connaître. Le préfixe tilde des imports Sass
            (<code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">@import &apos;~bootstrap/…&apos;</code>) n&apos;est plus supporté :
            il faut écrire le chemin direct. Et si votre code client importe un module Node
            (<code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">fs</code>, par exemple), Turbopack propose
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> turbopack.resolveAlias</code> pour charger un module vide côté navigateur —
            mais la bonne réponse reste de ne pas importer un module Node côté client.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Cache Components : un seul flag pour le caching</h2>
          <p>
            Next.js 15 a fait entrer le rendu partiel (PPR) et des APIs de cache expérimentales dans les
            projets. Next.js 16 range tout ça sous une seule bannière : <strong className="text-white">Cache Components</strong>. Quand on
            active le flag, le modèle de rendu devient PPR par défaut, et le compilateur met en cache ce qui
            peut l&apos;être.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// next.config.js — Next.js 16
/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
}

module.exports = nextConfig`}</code>
            </pre>
          </div>

          <p>
            Point important, et c&apos;est là que beaucoup de migrations se corsent : activer ce flag n&apos;est pas
            un simple renommage. Si vous l&apos;activez sur un projet qui lit des données non mises en cache en
            dehors d&apos;un <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">&lt;Suspense&gt;</code>, la construction échoue. Il faut adopter le
            modèle : entourer les lectures dynamiques, déclarer ce qui est mis en cache, et gérer
            l&apos;expiration. Si vous n&apos;utilisiez ni PPR ni <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">dynamicIO</code>, ne l&apos;activez pas
            « pour faire la migration » : supprimez plutôt les flags expérimentaux devenus inutiles.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Les APIs de requête sont devenues asynchrones</h2>
          <p>
            Next.js 15 avait introduit cette rupture avec une période de tolérance. En 16, la tolérance est
            terminée. Toute lecture de la requête est une Promesse. Les cas concernés :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">cookies()</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">headers()</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">draftMode()</code> depuis <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next/headers</code></li>
            <li><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">params</code> dans <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">layout.js</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">page.js</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">route.js</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">default.js</code>, et les fichiers de génération d&apos;images</li>
            <li><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">searchParams</code> dans <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">page.js</code></li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Avant (Next.js 14/15)
const store = await cookies()
const theme = store.get('theme')?.value

// Après (Next.js 16)
const store = await cookies()
const theme = (await store).get('theme')?.value`}</code>
            </pre>
          </div>

          <p>
            Deux autres endroits méritent votre attention. D&apos;abord les <strong className="text-white">paramètres
            asynchrones des images générées</strong> : la fonction qui produit un <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">opengraph-image</code>,
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> twitter-image</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">icon</code> ou <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">apple-icon</code> reçoit
            désormais <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">params</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">id</code> sous forme de Promesses, alors que
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> generateImageMetadata</code> continue de recevoir <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">params</code> de façon synchrone.
            Ensuite, si vous utilisez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">generateSitemaps</code>, le paramètre <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">id</code> de
            votre fonction <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">sitemap</code> est aussi une Promesse.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">middleware.ts devient proxy.ts</h2>
          <p>
            Le fichier change de nom et de fonction exportée. <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">middleware</code> est
            toujours reconnu en 16 — il est déprécié, pas supprimé — mais le nom <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">proxy</code> est la
            convention cible.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Avant — src/middleware.ts
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // logique
}

// Après — src/proxy.ts
import { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // logique
}`}</code>
            </pre>
          </div>

          <p>
            La subtilité à ne pas rater : <strong className="text-white">le runtime Edge n&apos;est pas
            disponible dans <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">proxy</code></strong>. C&apos;est Node.js, et ce n&apos;est pas configurable.
            Si votre middleware dépend d&apos;API Edge — ou si vous le gardez volontairement léger pour un
            démarrage froid minimal — restez sur <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">middleware.ts</code>. La migration n&apos;est donc pas
            automatique : c&apos;est une décision, pas une formalité. Les options de configuration qui portaient
            le nom « middleware » ont été renommées en conséquence, par exemple
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> skipMiddlewareUrlNormalize</code> devient <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">skipProxyUrlNormalize</code>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Ce qui est supprimé, et par quoi le remplacer</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">AMP</strong> : toutes les APIs et la clé de configuration <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">amp</code> disparaissent. Les bénéfices de performance passent désormais par les optimisations intégrées et les standards du web.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next lint</code></strong> : la commande est retirée, et le build ne lance plus le lint. Il faut appeler ESLint directement.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">serverRuntimeConfig</code> / <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">publicRuntimeConfig</code></strong> : remplacés par les variables d&apos;environnement. Pour une valeur serveur, lisez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">process.env</code> côté serveur ; pour une valeur exposée au client, préfixez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">NEXT_PUBLIC_</code>.</li>
            <li><strong className="text-white">La clé <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">eslint</code> de la config Next</strong> : retirée, elle aussi.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">experimental.dynamicIO</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">experimental.useCache</code></strong> : supprimés, à remplacer par <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">cacheComponents</code> ou à supprimer selon votre usage.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next/legacy/image</code></strong> et <strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">images.domains</code></strong> : dépréciés au profit de <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next/image</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">images.remotePatterns</code>.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">next/image : six changements de comportement</h2>
          <p>
            Si votre site utilise beaucoup d&apos;images, c&apos;est la section qui peut vous surprendre après
            coup. Aucun de ces changements n&apos;est dramatique, mais ils peuvent modifier le rendu ou échouer
            silencieusement.
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Chaînes de requête sur les images locales</strong> : <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">/photo.jpg?v=2</code> en local exige désormais <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">images.localPatterns.search</code>, sinon l&apos;optimisation renvoie une erreur.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">minimumCacheTTL</code></strong> passe de 60 secondes à 4 heures par défaut. Si vous tenez à l&apos;ancien comportement, le déclarer explicitement.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">imageSizes</code></strong> : la valeur <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">16</code> sort du défaut. À rajouter si vous en avez besoin.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">qualities</code></strong> : le défaut devient <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">[75]</code>. Une qualité demandée hors de la liste est ramenée à la valeur la plus proche, et les requêtes <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">/_next/image</code> avec un <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">q</code> non supporté renvoient une erreur 400.</li>
            <li><strong className="text-white">Adresses IP locales</strong> : l&apos;optimisation des images servies depuis une IP privée est bloquée par défaut, pour des raisons de sécurité. À réactiver uniquement si vous savez ce que vous faites.</li>
            <li><strong className="text-white"><code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">maximumRedirects</code></strong> : plafonné à 3 au lieu d&apos;être illimité.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Les APIs de cache évoluent</h2>
          <p>
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">revalidateTag</code> exige désormais un second argument : un profil <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">cacheLife</code>. La forme
            à un seul argument est dépréciée et produit une erreur TypeScript.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Avant
revalidateTag('posts')

// Après
revalidateTag('posts', 'max')`}</code>
            </pre>
          </div>

          <p>
            Deux APIs arrivent en 16. <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">updateTag</code>, réservée aux Server Actions,
            expire et rafraîchit dans la même requête : l&apos;utilisateur voit son changement immédiatement,
            sans donnée obsolète transitoire. C&apos;est le bon outil pour un formulaire ou un réglage de
            compte. <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">revalidateTag</code> reste le bon choix pour du contenu où un court délai
            est acceptable — articles de blog, catalogue, documentation.
          </p>
          <p>
            Dernière nouveauté : <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">cacheLife</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">cacheTag</code> sont stables, le préfixe
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> unstable_</code> n&apos;est plus nécessaire, et
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> refresh()</code> permet de rafraîchir le routeur client depuis une Server Action.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">React 19.2 et React Compiler</h2>
          <p>
            L&apos;App Router de Next.js 16 s&apos;appuie sur React 19.2. Au menu : les View Transitions pour
            animer les éléments qui changent pendant une transition ou une navigation,
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> useEffectEvent</code> pour extraire d&apos;une Effect une logique non réactive,
            et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">Activity</code> pour masquer une interface tout en conservant son état.
          </p>
          <p>
            <strong className="text-white">React Compiler est stable</strong>, mais pas activé par défaut : l&apos;équipe
            continue de recueillir des données de performance de build. Pour l&apos;activer, il faut la clé
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10"> reactCompiler</code> dans la configuration et le plugin Babel.
            Attendez-vous à des temps de compilation plus longs, en développement comme en build.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Trois pièges supplémentaires avant de migrer</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Routes parallèles</strong> : chaque slot <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">@modal</code> doit déclarer un <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">default.js</code>. Sans lui, le build échoue. Créez un fichier qui appelle <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">notFound()</code> ou qui retourne <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">null</code>.</li>
            <li><strong className="text-white">Comportement de défilement</strong> : Next.js ne neutralise plus votre <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">scroll-behavior: smooth</code> pendant les navigations. Si vous teniez à l&apos;ancien comportement, ajoutez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">data-scroll-behavior=&quot;smooth&quot;</code> sur l&apos;élément <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">&lt;html&gt;</code>.</li>
            <li><strong className="text-white">Métriques de build</strong> : la taille du bundle et le First Load JS ne sont plus affichés dans la sortie de <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next build</code>. Mesurez avec Lighthouse ou un outil d&apos;analyse orienté Core Web Vitals.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Checklist de migration, dans l&apos;ordre</h2>
          <p>
            L&apos;ordre compte plus que la vitesse. Voici la séquence qui limite les allers-retours.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8">Avant de toucher au code</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Vérifiez le plancher : Node.js 20.9+, TypeScript 5.1+, et que vos navigateurs cibles sont dans la liste supportée.</li>
            <li>Sauvegardez l&apos;état actuel : un build qui passe et des tests verts avant migration valent mieux qu&apos;une migration aveugle.</li>
            <li>Inventoriez : une config webpack ? des <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">middleware.ts</code> ? des <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next/image</code> avec chaîne de requête locale ? des flags expérimentaux ?</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8">Pendant la migration</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Faites monter Next.js, React et React DOM, puis <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">@types/react</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">@types/react-dom</code>.</li>
            <li>Lancez le codemod <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">upgrade</code> : il met à jour la config Turbopack, retire le préfixe <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">unstable_</code>, et fait passer <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">middleware</code> en <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">proxy</code>.</li>
            <li>Si votre code lit encore des APIs de requête de façon synchrone, lancez le codemod dédié <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next-async-request-api</code>. Il ne tourne pas tout seul.</li>
            <li>Décidez de <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">cacheComponents</code> en connaissance de cause, pas par réflexe.</li>
            <li>Mettez à jour <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">revalidateTag</code> et vos appels <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">next/image</code>.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8">Après la migration</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Un build vert ne suffit pas. Vérifiez le comportement à l&apos;exécution : routes, redirections, images, génération d&apos;images OG, sitemaps.</li>
            <li>Testez les requêtes <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">/_next/image</code> directement, et rechargez les routes en navigation directe — c&apos;est là que les slots parallèles sans <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">default.js</code> se trahissent.</li>
            <li>Ne remettez pas le lint dans le build : il ne s&apos;y exécute plus, il faut l&apos;appeler séparément.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Notre position sur la version à choisir</h2>
          <p>
            Nous maintenons plusieurs applications Next.js en production, et notre règle est simple :
            <strong className="text-white"> on ne migre pas un projet en production le jour de la sortie
            d&apos;une majeure</strong>. On attend la première ou la deuxième version mineure, le temps que les
            codemods se stabilisent et que les retours d&apos;expérience remontent. Pour un nouveau projet, en
            revanche, il n&apos;y a aucune raison de partir sur une version antérieure : Turbopack par défaut et
            les outils de diagnostic valent le détour dès le premier commit.
          </p>
          <p>
            Si vous partez de zéro ou si vous voulez éviter de porter une migration seule,
            nos <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">templates SaaS</Link> sont
            livrés sur une base récente, avec l&apos;authentification, la facturation et l&apos;intégration IA déjà câblées.{' '}
            <Link href="/pricing" className="text-indigo-400 hover:text-indigo-300 underline">Voir les offres</Link>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Next.js 16 n&apos;est pas une révolution de paradigme : c&apos;est une consolidation. Turbopack
            devient la norme, le caching devient explicite avec un seul flag, et les APIs de requête
            cessent de tolérer l&apos;asynchrone optionnel. La migration se passe bien tant qu&apos;on ne la traite
            pas comme un simple <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">npm install</code> : l&apos;inventaire préalable des points de rupture
            — config webpack, middleware, images, APIs de cache — fait toute la différence.
          </p>
          <p>
            Le coût réel d&apos;une migration se mesure en heures d&apos;inventaire, pas en heures de code. Une
            fois ces points vérifiés, la majeure partie du travail est mécanique.
          </p>
          <p>
            Sources de cet article :{' '}
            <a href="https://nextjs.org/docs/app/guides/upgrading/version-16" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">le guide officiel de mise à niveau vers Next.js 16</a>{' '}
            et la documentation <a href="https://nextjs.org/docs/app/guides/proxy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">proxy</a>. Les dates et numéros de version
            cités correspondent à l&apos;état de la documentation au moment de la rédaction ; vérifiez la version
            installée chez vous avant de migrer.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/nextjs-15-server-actions-ia" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Next.js 15 Server Actions + IA : le guide pratique
              </Link>
            </li>
            <li>
              <Link href="/blog/nextjs-ia-saas-architecture-2026" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Architecture Next.js + IA pour un SaaS rentable en 2026
              </Link>
            </li>
            <li>
              <Link href="/blog/optimisation-couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Optimiser les coûts LLM en production
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
