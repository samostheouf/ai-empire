import Link from 'next/link'
import { Rocket, Zap, TrendingUp, ArrowRight, Check, Star, Clock, Cpu, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'NeuraAPI pour les startups — Lancez votre SaaS en 48h',
  description: 'Templates SaaS Next.js, IA intégrée, déploiement Vercel. Passez du concept au produit fonctionnel en un week-end avec NeuraAPI.',
  openGraph: {
    title: 'NeuraAPI pour les startups',
    description: 'Lancez votre SaaS en 48h avec des templates Next.js et l\'IA NeuraAPI.',
    type: 'website',
  },
}

export default function StartupsLandingPage() {
  return (
    <div className="bg-indigo-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <Rocket className="w-4 h-4" />
            Pour les startups
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Lancez votre SaaS <span className="text-indigo-400">en 48h</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            Vous avez une idée de SaaS ? Ne la gardez pas 6 mois en dev. Avec nos templates Next.js et l&apos;API IA NeuraAPI, passez du concept au produit fonctionnel en un week-end.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              Voir les templates SaaS
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/blog/nextjs-saas-starter" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              Lire le guide 48h
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">Tout ce dont vous avez besoin pour lancer</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Clock className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Templates SaaS prêts à déployer</h3>
              <p className="mt-2 text-indigo-300">
                Auth, dashboard, facturation Stripe, landing page — tout est pré-configuré. Personnalisez le design et le contenu, pas l&apos;architecture.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Cpu className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">IA intégrée dès le premier jour</h3>
              <p className="mt-2 text-indigo-300">
                Ajoutez des fonctionnalités IA à votre produit (génération, analyse, chat) en quelques lignes de code. Zéro expertise ML requise.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <BarChart3 className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Scalable dès le jour 1</h3>
              <p className="mt-2 text-indigo-300">
                Déployé sur Vercel, base de données PostgreSQL, API serverless. Vous scalez de 10 à 10 000 utilisateurs sans changer une ligne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-16">De l&apos;idée au SaaS en 3 étapes</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: '1', title: 'Choisissez un template', desc: 'Sélectionnez un template SaaS adapté à votre cas d\'usage. Auth, UI, et intégrations déjà en place.' },
              { step: '2', title: 'Personnalisez et intégrez l\'IA', desc: 'Ajoutez votre branding, configurez vos fonctionnalités IA, connectez Stripe.' },
              { step: '3', title: 'Déployez et lancez', desc: 'Un `vercel --prod` et votre SaaS est en ligne. Commencez à acquérir vos premiers utilisateurs.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-indigo-300">{item.desc}</p>
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
                {['100 crédits/mois', 'Templates open-source', 'Support communautaire'].map((item, i) => (
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
                {['1 000 crédits/mois', 'Templates premium', 'Support prioritaire', 'Analytics'].map((item, i) => (
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
                {['10 000 crédits/mois', 'Modèles premium', 'Support dédié', 'SLA 99.9%'].map((item, i) => (
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
          <TrendingUp className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">Arrêtez de rêver, commencez à construire</h2>
          <p className="mt-4 text-indigo-200">
            Chaque semaine que vous passez en développement, vos concurrents avancent. Lancez votre MVP ce week-end.
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
