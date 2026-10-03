import Header from './Header'
import Footer from './Footer'
import BuyButton from './BuyButton'
import { JsonLdProduit, JsonLdSite, FaqJsonLd, OFFRES } from './JsonLd'
import Link from 'next/link'

/**
 * Témoignages — AFFICHES UNIQUEMENT SI PREUVES REELLES.
 *
 * BUG CORRIGE (30/09) : ce commutateur valait `true` alors qu'aucun
 * client n existe. Les avis de « Marie Durand » et « Sophie Marchand »
 * etaient affiches en production, avec un nombre et une note : fausse
 * preuve chiffree, pratique commerciale trompeuse (C. conso. art. L121-2).
 *
 * L'interrupteur existait deja et n'etait pas honore. On l'honore.
 * Le tableau reste dans le fichier : il servira des le premier avis reel,
 * signe et verifiable. Supprimer des leger serait jeter du travail.
 */
const HAS_REAL_TESTIMONIALS = false
const TESTIMONIALS = [
  {
    name: 'Marie Durand',
    role: 'Fondatrice · Mode & Beauté',
    text: 'Les prompts IA Premium ont transformé notre façon de créer du contenu. Ce que nous faisions en 3 jours, nous le faisons maintenant en 2 heures. Le coffret en vaut absolument la peine.',
    rating: 5,
  },
  {
    name: 'Thomas Leroy',
    role: 'Directeur Marketing · SaaS B2B',
    text: 'J\'ai testé plusieurs collections de prompts. Celle-ci est de un ordre supérieur. Les templates sont prêts à l\'emploi, le framework stratégique est solide. ROI immédiat.',
    rating: 5,
  },
  {
    name: 'Sophie Marchand',
    role: 'Consultante en croissance · Indépendante',
    text: 'Le mentoring 1:1 inclus dans le coffret a été un tournant. On ne se contente pas de prompts — on apprend à les utiliser stratégiquement. Je recommande à 100%.',
    rating: 5,
  },
]

const FAQ_ITEMS = [
  {
    q: "Qu'est-ce que IA Premium ?",
    a: 'IA Premium est une collection exclusive de prompts IA avancés, frameworks stratégiques et templates businesses conçus pour les entrepreneurs qui veulent exploiter l\'intelligence artificielle au plus haut niveau.',
  },
  {
    q: 'Quelle est la différence entre les trois offres ?',
    a: 'Contenu Premium (49€) donne accès au contenu de base. Pack 5 (79€) ajoute 5 packs thématiques avec +200 prompts exclusifs. Le Coffret Exclusif (149€) est le tout-en-un avec mentoring 1:1, communauté privée et mises à jour à vie.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Le paiement est traité par Stripe. Carte bancaire, Apple Pay et Google Pay acceptés. Paiement unique, aucun abonnement, aucun frais caché.',
  },
  {
    q: 'Quand est-ce que je reçois mon contenu ?',
    a: 'Immédiatement. Dès que le paiement est confirmé, tu reçois ton accès par email et sur la page de confirmation. Tu peux commencer à utiliser les prompts dans les 5 minutes.',
  },
  {
    q: "Et si le contenu ne me convient pas ?",
    a: "Tu as 14 jours pour changer d'avis. Un simple email suffit : remboursement intégral, sans justification. Tu ne risques rien.",
  },
  {
    q: 'Les contenus sont-ils vraiment avancés ?',
    a: 'Oui. Conçus par des experts IA avec des années d\'expérience en stratégie business. Chaque prompt est testé et optimisé pour des résultats professionnels.',
  },
  {
    q: 'Est-ce que je recevrai les futures mises à jour ?',
    a: 'Oui, les mises à jour sont à vie pour toutes les offres. Chaque enrichissement est envoyé gratuitement par email.',
  },
  {
    q: 'Le mentoring est-il inclus dans toutes les offres ?',
    a: 'Le mentoring 1:1 (2 séances) est exclusif au Coffret Exclusif (149€). Places limitées à 50 pour 2026.',
  },
]

export default function IAPremiumPage() {
  return (
    <>
      <Header />

      {/* ─────────────────────────────────────────────────────────────
          HERO — Storytelling premium
      ───────────────────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden px-6 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        {/* Ornement décoratif ambre */}
        <div className="absolute top-1/3 left-0 w-px h-24 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-px h-24 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
        <div className="absolute top-1/2 right-1/4 w-64 h-px bg-gradient-to-l from-transparent via-amber-500/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge élégant */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs tracking-[0.2em] text-amber-400/70">
            <span className="w-1 h-1 rounded-full bg-amber-500/50" />
            Édition 2026 · Places limitées
          </div>

          {/* Titre principal — serif, grande taille */}
          <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-balance tracking-tight text-white leading-[1.1]">
            L&apos;intelligence
            <br />
            <span className="text-amber-gradient font-serif">artificielle</span>
            <br />
            à votre service
          </h1>

          {/* Sous-titre — storytelling */}
          <p className="mt-6 text-base sm:text-lg md:text-xl font-serif-alt text-white/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Une collection exclusive de prompts IA avancés, de frameworks stratégiques et de templates businesses.
            <br />
            Conçus par des experts. Résultats professionals. Téléchargement immédiat.
          </p>

          {/* CTA duo */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#pricing"
              className="btn-premium inline-flex items-center gap-2 rounded-sm px-8 py-4 text-sm tracking-widest text-[#0c0818]"
            >
              Découvrir les offres
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.03] px-8 py-4 text-sm tracking-widest text-white/60 hover:text-white hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              Fonctionnalités
            </Link>
          </div>

          {/* Indicateurs de confiance.
              Les 5 etoiles n apparaissent que s il existe de VRAIS avis :
              5 etoiles seules, sans note ni temoignage, sont une fausse
              preuve — plus discrete qu un chiffre invente, et tout aussi
              trompeuse. Un visiteur y lit une satisfaction mesuree. */}
          <div className="mt-12 flex flex-col items-center gap-2">
            {HAS_REAL_TESTIMONIALS && <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-3.5 w-3.5 fill-amber-500/70 text-amber-500/70" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fillRule="evenodd" />
                </svg>
              ))}
            </div>}
            <p className="text-xs text-white/30 tracking-wide">
              {/* BUG CORRIGE (30/09) : « 312 avis verifies · 4.8/5 » etait
                  une fausse preuve CHIFFREE, en production, sur une page
                  qui n a jamais eu un client. Une note inventee est une
                  pratique commerciale trompeuse (C. conso. art. L121-2),
                  et c est precisement ce que ce projet ne doit pas faire.
                  On affiche ce qui est vrai : le contenu est livre. */}
              Contenu à vie · Téléchargement immédiat
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TRUST BAR — Preuve sociale immédiate
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 py-10 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { label: 'Téléchargement immédiat', sub: 'PDF livré dès confirmation Stripe' },
            { label: 'Paiement sécurisé', sub: 'Stripe · Carte · Apple Pay · Google Pay' },
            { label: 'Garantie 14 jours', sub: 'Satisfait ou remboursé — zéro risque' },
          ].map((item) => (
            <div key={item.label} className="glass-premium rounded-xl p-5">
              <p className="text-sm font-serif text-white/80">{item.label}</p>
              <p className="mt-1 text-xs text-white/30 tracking-wide">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FEATURES — Ce que fait le produit
      ───────────────────────────────────────────────────────────── */}
      <section id="features" className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center">
            <span className="inline-block text-xs tracking-[0.2em] text-amber-500/60 mb-4">Fonctionnalités</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Ce que vous obtenez
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/40 max-w-xl mx-auto font-serif-alt leading-relaxed">
              Tout ce qu&apos;un entrepreneur a besoin pour exploiter l&apos;IA au quotidien — sans formation, sans complexité.
            </p>
          </div>

          {/* Grille de features */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6 text-amber-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                title: '200+ prompts avancés',
                text: 'Prompts testés et optimisés pour des résultats professionnels. Pas de contenu générique — chaque prompt est conçu pour un cas d\'usage réel.',
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-amber-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                ),
                title: 'Framework stratégique',
                text: 'Une méthode structurée pour penser vos stratégies business avec l\'IA. Pas juste des prompts — un cadre de réflexion complet.',
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-amber-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                  </svg>
                ),
                title: 'Templates prêts à l\'emploi',
                text: 'Des templates businesses que vous adaptez en quelques minutes. Emails, pages landing, scripts de vente, plans de contenu.',
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-amber-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                ),
                title: 'Téléchargement immédiat',
                text: 'Dès le paiement confirmé, vous recevez votre accès par email. Pas d\'attente, pas d\'inscription complexe. 5 minutes pour commencer.',
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-amber-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-5a2 2 0 00-2 0l-7 5A2 2 0 003 8v8a2 2 0 001 1.73l7 5a2 2 0 002 0l7-5A2 2 0 0021 16z" />
                    <polyline points="3.27,6.98 12,12.02 20.73,6.98" />
                    <line x1="12" y1="22.02" x2="12" y2="12" />
                  </svg>
                ),
                title: 'Mises à jour à vie',
                text: 'Chaque enrichissement du contenu vous est envoyé gratuitement. Un achat, un accès permanent, un contenu qui évolue avec le marché.',
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-amber-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: 'Communauté privée',
                text: 'Accès exclusif à une communauté d\'entrepreneurs qui utilisent IA Premium. Partage de cas, retours, nouvelles idées.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="glass-premium rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">{feature.icon}</div>
                  <div>
                    <h3 className="font-serif text-base text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed font-serif-alt">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider premium */}
      <div className="divider-premium mx-auto max-w-5xl px-6" />

      {/* ─────────────────────────────────────────────────────────────
          PRICING — 3 offres
      ───────────────────────────────────────────────────────────── */}
      <section id="pricing" className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="text-center">
            <span className="inline-block text-xs tracking-[0.2em] text-amber-500/60 mb-4">Tarifs</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Choisissez votre niveau
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/40 max-w-xl mx-auto font-serif-alt leading-relaxed">
              Une offre pour chaque étape. Toutes incluent le téléchargement immédiat et les mises à jour à vie.
            </p>
          </div>

          {/* Grille de 3 offres */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3 items-start">
            {/* Contenu Premium — 1ère colonne */}
            <div className="glass-premium rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.2em] text-white/30">Offre 01</span>
                <span className="text-xs tracking-[0.15em] text-amber-500/60 border border-amber-500/15 bg-amber-500/5 rounded-full px-3 py-1">
                  Essentiel
                </span>
              </div>
              <h3 className="font-serif text-xl text-white mb-2">Contenu Premium</h3>
              <p className="text-sm text-white/40 font-serif-alt mb-6">
                La base solide pour démarrer avec l&apos;IA en business.
              </p>
              <div className="mb-8">
                <span className="text-5xl font-serif text-white">49<span className="text-lg text-white/30">€</span></span>
                <p className="mt-2 text-xs text-white/30 tracking-wide">paiement unique · sans abonnement</p>
              </div>
              <JsonLdProduit id="contenu-premium" />
              <ul className="space-y-3 mb-8 min-h-[160px]">
                {[
                  '200+ prompts IA avancés',
                  'Framework stratégique complet',
                  'Templates businesses prêts à l\'emploi',
                  'Téléchargement immédiat',
                  'Mises à jour à vie',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-amber-500/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <span className="text-sm text-white/60">{f}</span>
                  </li>
                ))}
              </ul>
              <BuyButton
                price={49}
                variant="contenu"
                productId="contenu-premium"
              />
            </div>

            {/* Pack 5 — 2ème colonne, centrée, mise en avant */}
            <div className="pricing-featured rounded-2xl p-8 relative">
              {/* Badge privilège */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs tracking-[0.15em] text-amber-400">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
                  </svg>
                  Recommandé
                </span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.2em] text-amber-400/60">Offre 02</span>
                <span className="text-xs tracking-[0.15em] text-amber-500/60 border border-amber-500/15 bg-amber-500/5 rounded-full px-3 py-1">
                  Plus complet
                </span>
              </div>
              <h3 className="font-serif text-xl text-white mb-2">Pack 5</h3>
              <p className="text-sm text-white/40 font-serif-alt mb-6">
                5 packs thématiques pour couvrir tous vos besoins.
              </p>
              <div className="mb-8">
                <span className="text-5xl font-serif text-white">79<span className="text-lg text-white/30">€</span></span>
                <p className="mt-2 text-xs text-white/30 tracking-wide">paiement unique · sans abonnement</p>
              </div>
              <JsonLdProduit id="pack5" />
              <ul className="space-y-3 mb-8 min-h-[160px]">
                {[
                  'Tout le contenu Contenu Premium',
                  'Pack E-commerce : 50 prompts',
                  'Pack SaaS B2B : 40 prompts',
                  'Pack Content Marketing : 40 prompts',
                  'Pack Réseaux Sociaux : 40 prompts',
                  'Pack Copywriting avancé : 30 prompts',
                  'Communauté privée d\'accès',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-amber-500/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <span className="text-sm text-white/60">{f}</span>
                  </li>
                ))}
              </ul>
              <BuyButton
                price={79}
                variant="pack5"
                productId="pack5"
              />
            </div>

            {/* Coffret Exclusif — 3ème colonne */}
            <div className="glass-premium rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.2em] text-white/30">Offre 03</span>
                <span className="text-xs tracking-[0.15em] text-amber-500/60 border border-amber-500/15 bg-amber-500/5 rounded-full px-3 py-1">
                  Le plus complet
                </span>
              </div>
              <h3 className="font-serif text-xl text-white mb-2">Coffret Exclusif</h3>
              <p className="text-sm text-white/40 font-serif-alt mb-6">
                Le tout-en-un pour les entrepreneurs sérieux.
              </p>
              <div className="mb-8">
                <span className="text-5xl font-serif text-white">149<span className="text-lg text-white/30">€</span></span>
                <p className="mt-2 text-xs text-white/30 tracking-wide">paiement unique · places limitées 50</p>
              </div>
              <JsonLdProduit id="coffret" />
              <ul className="space-y-3 mb-8 min-h-[160px]">
                {[
                  'Tout le contenu Pack 5',
                  'Tous les packs complémentaires',
                  '2 séances mentoring 1:1 (1h chacune)',
                  'Accès communauté privée prioritaire',
                  'Rapports exclusifs trimestriels',
                  'Mises à jour à vie illimitées',
                  'Priorité aux futurs packs',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-amber-500/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <span className="text-sm text-white/60">{f}</span>
                  </li>
                ))}
              </ul>
              <BuyButton
                price={149}
                variant="coffret"
                productId="coffret"
              />
            </div>
          </div>

          {/* Note garantie */}
          <p className="mt-10 text-center text-xs text-white/30 tracking-wide max-w-md mx-auto">
            Toutes les offres incluent la garantie satisfait ou remboursé de 14 jours.
            Paiement sécurisé par Stripe. Aucun abonnement, aucun frais caché.
          </p>
        </div>
      </section>

      {/* Divider premium */}
      <div className="divider-premium mx-auto max-w-5xl px-6" />

      {/* ─────────────────────────────────────────────────────────────
          TÉMOIGNAGES — Preuve sociale
      ───────────────────────────────────────────────────────────── */}
      <section
        id="temoignages"
        className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 border-t border-white/[0.04]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="inline-block text-xs tracking-[0.2em] text-amber-500/60 mb-4">Preuve sociale</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Ce qu&apos;en disent nos clients
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/40 max-w-xl mx-auto font-serif-alt leading-relaxed">
              {/* Un seul affichage possible : soit des avis reels et signs,
                  soit rien. Jamais « des avis verifies » sans les avis. */}
              {HAS_REAL_TESTIMONIALS
                ? 'Des avis vérifiés de vrais entrepreneurs qui utilisent IA Premium au quotidien.'
                : "Le contenu, sa méthode et son prix sont décrits en détail plus bas. Aucun avis client pour l'instant : ce produit est neuf et je préfère te montrer exactement ce que tu reçois plutôt qu'inventer une réputation."}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {/* La grille ne s'affiche que s'il existe de VRAIS avis. Sinon elle
                disparaissent — pas de place vide, pas de silhouette. */}
            {HAS_REAL_TESTIMONIALS && TESTIMONIALS.map((t) => (
              <figure key={t.name} className="glass-premium rounded-2xl p-6 flex flex-col">
                {/* Étoiles */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 fill-amber-500/70 text-amber-500/70" viewBox="0 0 24 24">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fillRule="evenodd" />
                    </svg>
                  ))}
                </div>
                {/* Citation */}
                <blockquote className="text-sm text-white/60 leading-relaxed font-serif-alt flex-1 italic">
                  « {t.text} »
                </blockquote>
                {/* Auteur */}
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-serif text-amber-400/80">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-serif text-white/70">{t.name}</p>
                    <p className="text-xs text-white/30 font-serif-alt">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Divider premium */}
      <div className="divider-premium mx-auto max-w-5xl px-6" />

      {/* ─────────────────────────────────────────────────────────────
          FAQ
      ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <span className="inline-block text-xs tracking-[0.2em] text-amber-500/60 mb-4">Questions fréquentes</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Tout ce que vous demandez
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 open:border-amber-500/20 open:bg-amber-500/5 transition-all duration-300"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-serif text-base text-white/80">
                  {item.q}
                  <svg
                    className="h-4 w-4 text-amber-500/60 transition-transform duration-300 group-open:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-white/40 leading-relaxed font-serif-alt">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CTA final
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs tracking-[0.2em] text-amber-500/60 mb-4">Premiers pas</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6">
            Arrêtez d&apos;attendre l&apos;opportunité parfaite.
          </h2>
          <p className="text-base sm:text-lg text-white/40 font-serif-alt max-w-xl mx-auto leading-relaxed mb-10">
            Les entrepreneurs qui réussissent avec l&apos;IA ne sont pas ceux qui attendent.
            Ce sont ceux qui commencent.
          </p>
          <Link
            href="#pricing"
            className="btn-premium inline-flex items-center gap-2 rounded-sm px-10 py-5 text-base tracking-widest text-[#0c0818]"
          >
            Choisir mon offre
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-6 text-xs text-white/25 tracking-wide">
            Garantie 14 jours · Paiement Stripe sécurisé · Téléchargement immédiat
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────────────────────────── */}
      <JsonLdSite />
      <FaqJsonLd />
      <Footer />
    </>
  )
}
