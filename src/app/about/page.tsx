import Link from 'next/link'
import { Sparkles, Code, Globe, Shield, Users, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      {/* Hero */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400 mb-6" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            À propos de <span className="text-indigo-400">NeuraAPI</span>
          </h1>
          <p className="mt-6 text-lg text-indigo-200 max-w-2xl mx-auto">
            NeuraAPI est une plateforme de développement qui rend l&apos;intelligence artificielle accessible à tous les développeurs, dans le monde entier.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">Notre mission</h2>
            <div className="space-y-4 text-indigo-200 leading-relaxed">
              <p>
                L&apos;intelligence artificielle est devenue accessible, mais son intégration reste complexe pour les développeurs. NeuraAPI existe pour combler ce fossé.
              </p>
              <p>
                Nous fournissons des APIs IA prêtes à l&apos;emploi, des templates premium, et une documentation claire — le tout en 10 langues pour servir les développeurs du monde entier.
              </p>
              <p>
                Notre objectif : permettre à chaque développeur d&apos;intégrer l&apos;IA dans son projet en 5 minutes, pas en 5 semaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Nos valeurs</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Zap className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Vitesse</h3>
              <p className="text-sm text-indigo-300">
                Temps de réponse &lt;200ms. Intégration en 5 minutes. Pas de configuration complexe.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Globe className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Accessibilité</h3>
              <p className="text-sm text-indigo-300">
                10 langues. Documentation claire. Prix abordable. L&apos;IA est pour tout le monde.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Shield className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Confiance</h3>
              <p className="text-sm text-indigo-300">
                Transparence totale. Contenu honnête. Aucun faux témoignage. Conformité RGPD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Stack technique</h2>
          <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
                <ul className="space-y-2 text-sm text-indigo-300">
                  <li className="flex items-center gap-2"><Code className="w-4 h-4 text-indigo-400" /> Next.js 14 + TypeScript</li>
                  <li className="flex items-center gap-2"><Code className="w-4 h-4 text-indigo-400" /> Tailwind CSS</li>
                  <li className="flex items-center gap-2"><Code className="w-4 h-4 text-indigo-400" /> Prisma ORM</li>
                  <li className="flex items-center gap-2"><Code className="w-4 h-4 text-indigo-400" /> Stripe Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Backend & AI</h3>
                <ul className="space-y-2 text-sm text-indigo-300">
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> Groq (Llama 3.3)</li>
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> Google Gemini</li>
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> OpenAI</li>
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> Python FastAPI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Users className="mx-auto h-12 w-12 text-indigo-400 mb-4" />
          <h2 className="text-3xl font-bold text-white">Rejoignez-nous</h2>
          <p className="mt-4 text-indigo-200">
            Commencez gratuitement et découvrez comment NeuraAPI peut accélérer vos projets.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/register" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              Commencer gratuitement
            </Link>
            <Link href="/contact" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
