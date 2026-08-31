'use client'
import Link from 'next/link'
import { Gift, ArrowRight, Sparkles } from 'lucide-react'

export function BlogLeadMagnet({ utm = 'utm_source=blog&utm_medium=content&utm_campaign=sans_x_20260831' }: { utm?: string }) {
  return (
    <div className="my-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent p-6 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-xl bg-emerald-500/20 p-3">
          <Gift className="h-6 w-6 text-emerald-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Gratuit — lead magnet</span>
          </div>
          <h3 className="mt-1 text-lg font-bold text-white">Template NeuraStarter gratuit</h3>
          <p className="mt-1 text-sm text-indigo-200/70">Next.js 14 + Tailwind + Auth + Dashboard. Laisse ton email, reçois le ZIP instantanément. Upsell soft vers templates premium dans l'email.</p>
          <Link href={`/free?${utm}&utm_content=blog_lead_magnet`} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors">
            Télécharger gratuit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function BlogCrossSell({ utm = 'utm_source=blog&utm_medium=content&utm_campaign=sans_x_20260831' }: { utm?: string }) {
  return (
    <div className="my-8 grid gap-3 sm:grid-cols-3">
      <a href={`https://prompt-empire.vercel.app?${utm}&utm_content=blog_cross_prompt`} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/5 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition-colors">
        <div className="text-sm font-semibold text-white">Prompt Empire</div>
        <div className="mt-1 text-xs text-indigo-300/60">300+ prompts IA testés</div>
      </a>
      <a href={`https://copy-vault-nine.vercel.app?${utm}&utm_content=blog_cross_copy`} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/5 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition-colors">
        <div className="text-sm font-semibold text-white">Copy Vault</div>
        <div className="mt-1 text-xs text-indigo-300/60">Copywriting prêt à envoyer</div>
      </a>
      <a href={`https://site-ruby-eight-11.vercel.app?${utm}&utm_content=blog_cross_previo`} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/5 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition-colors">
        <div className="text-sm font-semibold text-white">Prévio</div>
        <div className="mt-1 text-xs text-indigo-300/60">Business plan instantané 29$</div>
      </a>
    </div>
  )
}
