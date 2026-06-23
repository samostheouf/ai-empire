import Link from 'next/link'
import { Zap, Rocket, ArrowRight, Check, Star, DollarSign, Cpu, Globe } from 'lucide-react'

export const metadata = {
  title: 'NeuraAPI pour les freelances — Livrez 3x plus vite',
  description: 'Intégrez l\'IA dans vos prestations avec NeuraAPI. Templates, API IA documentée, tarification transparente. Pour les freelances qui veulent se différencier.',
  openGraph: {
    title: 'NeuraAPI pour les freelances',
    description: 'Livrez des projets 3x plus vite grâce à l\'IA. Templates et API pour freelances.',
    type: 'website',
  },
}

export default function FreelancersLandingPage() {
  return (
    <div className="bg-indigo-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <Rocket className="w-4 h-4" />
            Pour les freelances
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Livrez des projets <span className="text-indigo-400">3x plus vite</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            Gagnez du temps sur chaque mission. Intégrez l&apos;IA dans vos prestations avec NeuraAPI et proposez des services différenciants à vos clients.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              Voir les templates
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/docs" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              Explorer la doc
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">Ce que NeuraAPI change pour vous</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Génération de contenu en quelques secondes</h3>
              <p className="mt-2 text-indigo-300">
                Produisez du texte, des descriptions de produits, des articles de blog et des emails marketing en un clic. Fini les heures de rédaction à blanc.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Cpu className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">API IA documentée et rapide</h3>
              <p className="mt-2 text-indigo-300">
                Un SDK TypeScript unique, des endpoints clairs, un temps de réponse sous 200ms. Intégrez l&apos;IA dans n&apos;importe quel projet sans expertise ML.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <DollarSign className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Tarification transparente</h3>
              <p className="mt-2 text-indigo-300">
                Payez ce que vous utilisez. 100 crédits gratuits par mois, puis des plans adaptés aux freelances. Pas de surprise, pas d&apos;engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">Cas d&apos;usage concrets pour freelances</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Rédaction d\'articles de blog SEO optimisés en 10 minutes au lieu de 2 heures',
              'Génération de descriptions de produits e-commerce à grande échelle',
              'Création de templates de emails marketing personnalisés par client',
              'Automatisation de réponses support client avec l&apos;IA conversationnelle',
              'Traduction de contenus en 10 langues pour des clients internationaux',
              'Analyse de sentiment et de feedback clients en temps réel',
            ].map((useCase, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-indigo-200">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">Témoignages</h2>
          <p className="text-center mt-4 text-indigo-300">Témoignages bientôt disponibles</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-800/30 bg-indigo-900/20 p-8 opacity-60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-indigo-600" />
                ))}
              </div>
              <p className="text-indigo-400 italic">&quot;Avis bientôt disponible&quot;</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/30 bg-indigo-900/20 p-8 opacity-60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-indigo-600" />
                ))}
              </div>
              <p className="text-indigo-400 italic">&quot;Avis bientôt disponible&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">Un aperçu de nos tarifs</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">Gratuit</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">0€</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {['100 crédits/mois', 'Accès aux modèles de base', 'Support communautaire'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                Commencer
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-600 bg-indigo-900/40 p-8 ring-2 ring-indigo-600/50">
              <h3 className="text-lg font-semibold text-white">Pro</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">19€</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {['1 000 crédits/mois', 'Tous les modèles IA', 'Support prioritaire', 'Analytics détaillés'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-200">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-8 block rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500 transition-all">
                Choisir Pro
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">Entreprise</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">79€</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {['10 000 crédits/mois', 'Modèles premium (GPT-4, Claude)', 'Support dédié', 'SLA 99.9%', 'Facturation personnalisée'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="mailto:contact@neuraapi.com" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Globe className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">Prêt à booster vos missions ?</h2>
          <p className="mt-4 text-indigo-200">
            Créez votre compte gratuit et testez NeuraAPI sur votre prochain projet. 100 crédits offerts, sans engagement.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/register" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              Créer un compte gratuit
            </Link>
            <Link href="/pricing" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
