import Link from 'next/link'
import { Users, Zap, Palette, Briefcase, ArrowRight, Check, Star, Globe } from 'lucide-react'

export const metadata = {
  title: 'NeuraAPI pour les agences — Intégrez l\'IA dans vos projets clients',
  description: 'White-label IA, templates SaaS, support multi-client. Les agences choisissent NeuraAPI pour livrer des solutions IA performantes.',
  openGraph: {
    title: 'NeuraAPI pour les agences',
    description: 'White-label IA, templates SaaS, support multi-client pour agences.',
    type: 'website',
  },
}

export default function AgenciesLandingPage() {
  return (
    <div className="bg-indigo-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <Briefcase className="w-4 h-4" />
            Pour les agences
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Vos clients veulent de l&apos;IA, <span className="text-indigo-400">on la fournit</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            Intégrez l&apos;intelligence artificielle dans les projets de vos clients sans recruter une équipe ML. NeuraAPI vous donne les APIs, les templates et le support pour livrer des solutions IA performantes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              Explorer les templates
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="mailto:partners@neuraapi.com" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">Pourquoi les agences choisissent NeuraAPI</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Palette className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">White-label ready</h3>
              <p className="mt-2 text-indigo-300">
                Intégrez NeuraAPI dans vos propres produits. Pas de branding visible, pas de dépendance client directe. Vous restez le héros du projet.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Livraison rapide</h3>
              <p className="mt-2 text-indigo-300">
                Les templates SaaS prêts à déployer réduisent vos délais de 60%. Vos clients reçoivent un produit fonctionnel plus vite, vous facturez plus vite.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Users className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Multi-client</h3>
              <p className="mt-2 text-indigo-300">
                Gérez plusieurs projets clients depuis un seul compte. Clés API séparées, quotas par projet, facturation centralisée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-16">Comment ça marche</h2>
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { step: '1', title: 'Choisissez un template', desc: 'Sélectionnez le template adapté au projet client : SaaS, e-commerce, dashboard...' },
              { step: '2', title: 'Personnalisez', desc: 'Appliquez le branding client, configurez les fonctionnalités IA nécessaires.' },
              { step: '3', title: 'Intégrez l\'IA', desc: 'Ajoutez les endpoints IA : génération de contenu, analyse, chat, traduction.' },
              { step: '4', title: 'Livrez et facturez', desc: 'Déployez, formez le client, et facturez votre prestation à sa juste valeur.' },
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
          <h2 className="text-center text-3xl font-bold text-white mb-12">Tarifs adaptés aux agences</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">Pro</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">19€</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {['1 000 crédits/mois', 'Templates premium', 'Support prioritaire'].map((item, i) => (
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
              <h3 className="text-lg font-semibold text-white">Entreprise</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">79€</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {['10 000 crédits/mois', 'Clés API multi-client', 'Support dédié', 'SLA 99.9%', 'Onboarding personnalisé'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-200">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="mailto:partners@neuraapi.com" className="mt-8 block rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500 transition-all">
                Contacter
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">Partenariat</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">Sur devis</span>
              </div>
              <ul className="mt-6 space-y-3">
                {['Crédits illimités', 'API dédiée', 'Account manager', 'Commission sur referrals', 'Co-branding'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="mailto:partners@neuraapi.com" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                Parler à notre équipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Globe className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">Vos clients demandent de l&apos;IA ? On vous la donne.</h2>
          <p className="mt-4 text-indigo-200">
            Rejoignez les agences qui utilisent NeuraAPI pour livrer des projets IA différenciants. Devenez partenaire dès aujourd&apos;hui.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="mailto:partners@neuraapi.com" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              Devenir partenaire
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
