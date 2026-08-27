# SaaS #4 "Prévio" — Plan d'internationalisation (EN-first + FR)

*Complément EN de `saas4-niche-analysis.md` — août 2026. Sources : recherche web EN (LivePlan, PrometAI, Upmetrics, VentureKit, Bizketch, businessplan.ai, Etsy/Gumroad).*

## 1. Analyse du marché anglophone

### Qui domine aujourd'hui
| Acteur | Modèle | Prix | Force | Faiblesse exploitable |
|---|---|---|---|---|
| **LivePlan** (leader historique) | SaaS mensuel | ~$20/mois ($15/an) | Marque, SEO massif, templates sectoriels (jusqu'au "Etsy business plan") | Abonnement pour un besoin one-shot ; orienté investisseurs/banques, pas créateurs |
| **Upmetrics** | SaaS | ~$20/mois | Alternatives SEO agressive vs LivePlan, templates YouTube/creators | Même piège abonnement |
| **PrometAI** | SaaS IA | dès $55/mois (~$25/mois annuel) | Projections "investor-grade", valorisation | Cher, complexe, surdimensionné pour un solopreneur |
| **VentureKit / Bizketch / Businessplan.ai / Bizplanr / Plania** | Génératifs IA | Freemium → $16-40/mois | Vitesse ("3 minutes") | Contenu générique sans prévisionnel fiable ni pack téléchargeable ; churn élevé |

### Ce qui existe déjà côté creators
LivePlan, Upmetrics et Growthink ont des templates "Content creator / YouTube", mais ce sont des pages d'appât pour leurs abonnements. Sur Etsy/Gumroad EN, les BP téléchargeables sont soit des PDF Word génériques à $5-15 sans prévisionnel chiffré, soit des Notion templates sans volet financier sérieux.

### L'angle libre confirmé
Personne ne combine les 4 éléments suivants :
1. **Pack one-shot $29** (vs $180-660/an chez les leaders) — le marché est habitué au paiement unique via Gumroad/Etsy.
2. **Prévisionnel Sheets/Excel inclus avec formules** — les générateurs IA produisent du texte, pas un modèle financier vérifiable.
3. **Niche "digital creators & solopreneurs"** explicite (newsletter, infoproduits, freelance dev, YouTube, e-commerce solo) avec chiffres pré-remplis crédibles.
4. **PDF instantané présentable + prompts IA de personnalisation** — le meilleur des deux mondes (template + IA) sans abonnement.

Positionnement EN en une phrase : *"The $29 instant business plan for digital creators — investor-ready PDF + working financial model in one evening. No subscription."*

## 2. Décision de séquencement : **EN-first, FR en semaine 2**

Justification :
- Le marché EN est ~10x plus grand et la demande transactionnelle (Gumroad/Etsy) y est native ; chaque vente EN finance la suite.
- La concurrence EN est forte en **tête** de requête ("business plan generator") mais **faible en longue traîne transactionnelle one-shot** ("[niche] business plan template pdf instant download", "$29 business plan for newsletter creators") — c'est par là qu'on entre, comme en FR.
- Simultané = dilution : 2 fois moins d'articles par langue en S1, aucun effet de masse. Décalé d'une semaine seulement, le coût est faible car **le site est multilingue dès le jour 1** (i18n cloné), seule l'intensité de contenu diffère.
- Concrètement : S1 = build produit + site EN live + 15 articles EN ; S2 = traduction packs FR + landing FR + 15 articles FR + relaunch communautés FR.

## 3. Architecture multilingue

### Site (Next.js)
Cloner directement le système i18n 10 locales du noyau ai-empire (`src/i18n/config.ts`, `translations/{locale}.ts`, `useI18n` / server `getLocaleFromCookies`). Coût marginal quasi nul → on garde les 10 locales pour le **site** (landing, blog, légal) dès le départ ; seuls les fichiers UI sont traduits (les agents peuvent générer les 10 fichiers de traductions).

### Packs produits (PDF/Sheets) — réaliste au lancement
- **Jour 1 : EN uniquement** (packs + template Sheets en $).
- **Semaine 2 : FR** (traduction des 20 BP + template adapté micro/BNC/BIC en €).
- **Mois 2-3 : ES puis DE**, seulement si données de ventes/trafic le justifient (Gumroad analytics + Search Console). Ne pas pré-produire ES/DE : 20 BP × 2 langues = 40 documents à maintenir pour un marché non prouvé.
- Les autres locales (it, pt, ja...) restent pour le **site vitrine** (capture emails) mais jamais pour les packs avant preuve de demande.

## 4. Plan de build en phases

### Phase A — Produit (S1, ~5-7 jours)
À donner aux agents :
1. Template prévisionnel Sheets/Excel EN (3 ans, break-even, cash-flow, pricing en $) — structure CSV/XLSX avec formules documentées ; **validation manuelle humaine une fois** (chiffres de contrôle).
2. 20 business plans sectoriels EN (newsletter, infoproduits, freelance dev/design, agence solo, YouTube, coaching, e-commerce dropshipping/print-on-demand, SaaS micro, podcast, community, Etsy seller, Notion/template seller, UGC creator, affiliate site, course creator...). Chaque BP ≈ 8-10 pages : executive summary, market snapshot chiffré, offer/pricing, go-to-market, prévisionnel pré-rempli branché sur le template.
3. Traduction/adaptation FR des 20 BP + template € (statuts micro/BNC/BIC) — semaine 2.
4. Guide "Business plan in 7 steps" EN+FR + checklist banque/taxes.
5. Bibliothèque de prompts IA EN+FR pour personnaliser chaque section.

**Volumes générables** : 20 BP EN ≈ 2 jours d'agents (batch de 5/jour avec relecture humaine échantillonnée) ; template 1 jour + validation ; FR ≈ 2 jours (traduction assistée + adaptation fiscale manuelle). Total phase A ≈ 60-80 documents générés.

### Phase B — Site & distribution (S1-S2, parallèle à A)
1. Clone Next.js du noyau ai-empire avec i18n 10 locales ; réduire aux routes utiles (~30 pages : landing, pricing, 20 pages sectorielles, blog, legal). Attention aux contraintes Edge runtime et patterns `safeQuery()` documentés dans AGENTS.md.
2. Landing EN-first + FR ; Stripe Checkout (one-shot $29/$49 bundle) + Gumroad en miroir (découverte marketplace).
3. Lead magnet : "Free 1-page business plan" EN + "BP 1 page gratuit" FR contre email (Resend).
4. Design PDF propre (template réutilisable, branding Prévio).

**Volumes** : site ≈ 3 jours d'agents (clone + adaptations) ; intégration paiements 1 jour ; QA humaine obligatoire avant mise en ligne.

### Phase C — Acquisition SEO + communauté (S2 → M6)
1. **Cadence : 15 articles/semaine EN + 10/semaine FR**, longue traîne transactionnelle :
   - EN : "[niche] business plan template pdf", "business plan for [newsletter/course/freelance] creators", "[tool] vs LivePlan for solopreneurs", "free [niche] financial model spreadsheet".
   - FR : reprendre la liste de l'analyse initiale ("business plan auto-entrepreneur", "prévisionnel infopreneur"...).
   - Objectif cumulé : 300+ pages indexées à M4.
2. Lead magnet offert : 1 BP sectoriel gratuit/semaine (traffic engine, collecte emails).
3. Distribution : X (EN+FR), Reddit r/SideProject, r/Entrepreneur, r/newsletters + r/Entreprendre, r/FrenchEntrepreneurs, Product Hunt au lancement EN, Gumroad Discover + Etsy listing test.
4. Itération M3+ : version "générateur web" (formulaire → dossier assemblé par agents sur Vercel), montée en prix du bundle ($59-79).

**Volumes** : ~25 articles/semaine générés par agents (relecture humaine légère), soutenable sur 4 mois = 400+ actifs SEO.

### KPI
| Jalon | Cible |
|---|---|
| M1 | 500 emails (EN+FR), 20 ventes, site live 2 langues |
| M2 | 50 ventes cumulées, 100 articles indexés |
| M4 | 300+ pages indexées, décision GO/NO-GO ES-DE sur data |
| M6 | Top 1-3 sur "business plan + [secteur digital]" EN longue traîne ET FR ; lancement générateur web |

---
*Règle transverse : tout contenu réglementaire reste positionné "modèles + guides", jamais conseil financier.*
