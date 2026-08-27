// Bannière cross-sell écosystème — moat top-1 honnête.
// Chaque site pointe vers les 3 autres (one-shot, pas d'abonnement).
// Aucune fausse preuve : libellés = descriptifs réels des produits.

interface EcosystemSite {
  name: string
  url: string
  tagline: string
}

const SITES: EcosystemSite[] = [
  {
    name: 'Prompt Empire',
    url: 'https://prompt-empire.vercel.app',
    tagline: '300+ prompts IA testés (ChatGPT, Claude, Gemini)',
  },
  {
    name: 'Copy Vault',
    url: 'https://copy-vault-nine.vercel.app',
    tagline: 'Copywriting & scripts de vente prêts à l’emploi',
  },
  {
    name: 'Prévio',
    url: 'https://previo.app',
    tagline: 'Business plan instantané pour créateurs (29$)',
  },
]

export default function EcosystemBanner({ current }: { current?: string }) {
  const others = SITES.filter((s) => s.name !== current)
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
            Écosystème créateurs
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Un achat, pas un abonnement
          </h2>
          <p className="mt-3 text-indigo-300/70 max-w-2xl mx-auto">
            D’autres outils one-shot pour lancer et monétiser, sans engagement mensuel.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <a
              key={s.name}
              href={s.url}
              rel="noopener"
              className="group glass-card rounded-2xl p-6 text-center transition-all hover:scale-[1.02]"
            >
              <div className="text-lg font-semibold text-white">{s.name}</div>
              <div className="mt-2 text-sm text-indigo-300/70">{s.tagline}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
