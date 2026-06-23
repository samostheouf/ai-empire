import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function EarlyAdopterBanner() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-indigo-900/30 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            Templates premium + API IA
          </h3>
          <p className="text-sm text-indigo-300">
            Accédez à 10 templates Next.js prêts pour la production et à une API IA avec 8+ endpoints (génération de texte, SEO, code, sentiment, chatbot, classification).
          </p>
        </div>
        <Link
          href="/register"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg"
        >
          Créer un compte gratuit
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-indigo-300">
        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> 100 crédits/mois gratuits</span>
        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> SDK TypeScript</span>
        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> Sans carte bancaire</span>
        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> Annulation libre</span>
      </div>
    </div>
  )
}
