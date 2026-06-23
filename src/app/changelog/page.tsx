import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

const releases = [
  {
    version: '1.0.0',
    date: '23 Juin 2026',
    title: 'Lancement officiel',
    changes: [
      '🤖 Chatbot IA réel (Groq/OpenAI)',
      '📝 Blog avec 4 articles SEO',
      '📧 Newsletter subscription',
      '🌍 10 langues supportées',
      '📊 Dashboard monitoring (/status)',
      '🔒 CI/CD Pipeline GitHub Actions',
      '🛡️ Error pages (404, 500, loading)',
      '🚀 Page de lancement Product Hunt',
      '👥 Inscription beta testers',
      '💰 Offre Early Adopter -30%',
    ],
  },
  {
    version: '0.9.0',
    date: '19 Juin 2026',
    title: 'Marketing i18n & fix Vercel 404',
    changes: [
      '🌍 Marketing traduit en 10 langues',
      '📝 4 articles de blog avec JSON-LD',
      '🔧 Fix du 404 Vercel (dossier app/ fantôme)',
      '📰 Newsletter avec formulaire',
      '🔗 Social sharing buttons',
      '📋 Sitemap mis à jour',
    ],
  },
  {
    version: '0.8.0',
    date: '18 Juin 2026',
    title: 'Sécurité & Rate Limiting',
    changes: [
      '🔑 API key authentication sur tous les services',
      '⏱️ Rate limiting (100 req/min, 10 req/min AI)',
      '🛡️ Security headers (CSP, HSTS)',
      '📊 67 tests passants',
    ],
  },
  {
    version: '0.7.0',
    date: '17 Juin 2026',
    title: 'Backend microservices',
    changes: [
      '🤖 AI/ML Service (FastAPI, port 8000)',
      '⚙️ Core Services (Workflow Engine, port 8001)',
      '📊 Observability Service (port 8002)',
      '💼 Business Operations (port 8003)',
      '🐳 Configuration Docker',
    ],
  },
  {
    version: '0.6.0',
    date: '16 Juin 2026',
    title: 'Frontend complet',
    changes: [
      '🏠 Homepage avec i18n',
      '💰 Page pricing avec Stripe',
      '📚 Documentation API',
      '🛒 Checkout avec paiement',
      '👤 Dashboard utilisateur',
      '📝 Mentions légales françaises',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-4">Changelog</h1>
          <p className="text-indigo-300 mb-12">
            Historique des mises à jour de NeuraAPI.
          </p>

          <div className="space-y-12">
            {releases.map((release, i) => (
              <div key={release.version} className="relative">
                {i < releases.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-indigo-800/50" />
                )}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm z-10">
                    v{release.version.split('.')[0]}
                  </div>
                  <div className="flex-1 rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
                        <Tag className="w-3 h-3" />
                        v{release.version}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-indigo-400">
                        <Calendar className="w-3 h-3" />
                        {release.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{release.title}</h3>
                    <ul className="space-y-2">
                      {release.changes.map((change, j) => (
                        <li key={j} className="text-sm text-indigo-300 flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors"
            >
              Voir la documentation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
