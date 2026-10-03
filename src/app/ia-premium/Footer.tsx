import Link from 'next/link'

const LEGAL_LINKS = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/cgv', label: 'CGV' },
  { href: '/confidentialite', label: 'Confidentialité' },
  { href: '/remboursement', label: 'Remboursement' },
]

const ECOSYSTEM_LINKS = [
  { href: 'https://ai-empire.vercel.app', label: 'AI Empire' },
  { href: 'https://prompt-empire.vercel.app', label: 'Prompt Empire' },
  { href: 'https://copy-vault.vercel.app', label: 'Copy Vault' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.05] px-6 py-12 text-center text-sm text-white/25 bg-[#0c0818]/50">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-widest text-white/20 mb-6">
          © {year} IA Premium — Tous droits réservés
        </p>
        <nav
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6"
          aria-label="Liens légaux"
        >
          <Link href="/blog" className="hover:text-amber-400/50 transition-colors">
            Blog
          </Link>
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-amber-400/50 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <nav
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          aria-label="Écosystème IA"
        >
          {ECOSYSTEM_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400/50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="mt-6 text-xs tracking-wide text-white/20">
          samilaboulette21@gmail.com · Conçu en France
        </p>
      </div>
    </footer>
  )
}
