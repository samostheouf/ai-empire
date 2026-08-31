# TRAFIC SANS X — Stratégie Top-1 Empire 20/20
> 31/08/2026 — X auto-posting bloqué (pas de tokens). Top-1 = SEO organique (IndexNow+sitemap+48 articles) × Gumroad Discover. Reddit/IH/PH/HN = amplificateurs.

## Classement canaux sans X (effort → ROI)
| Rang | Canal | Effort J0 | Trafic J7 | Trafic J90 | Moat | Statut |
|------|-------|-----------|-----------|------------|------|--------|
| 🥇 | **SEO 48 articles + IndexNow + sitemap hreflang 10 langues** | code only | faible | **dominant** | inimitable | ✅ câblé, enrichi ce jour |
| 🥇bis | **Gumroad Marketplace Discover** (15 tags/API) | 30min | **moyen-passif** | durable | marketplace | 🟡 script prêt, token bloquant |
| 🥈 | **Reddit 9 subs value-first** | 30min/j | **fort immédiat** | moyen | karma | ✅ drafts 01-08 prêts |
| 🥉 | **IndieHackers** | 15min | moyen | faible | community | ✅ kit prêt |
| 4 | **Product Hunt launch** | 2h | pic J0 | faible | launch | ⏳ manuel user |
| 5 | **HN Show** | 15min | pic volatile | faible | launch | ⏳ manuel user |

## Principe: UTM partout, X nulle part
- `src/lib/utm.ts` central, `withUtm()` helper, `/api/utm/links` endpoint public
- `HomeInteractive CtaLink` préserve UTM en navigation interne
- `analytics.ts` capture + stocke UTM first-touch, envoie à `/api/analytics/track`
- Cross-sell `EcosystemBanner` + `BlogLeadMagnet` avec `utm_content` dédié

## Gumroad marketplace (sans X, sans pub)
- 15 tags par produit via API `PUT /v2/products/:id` (script `traffic-gumroad-sync.py`)
- UTM: `?utm_source=gumroad&utm_medium=marketplace&utm_campaign=sans_x_20260831`
- Apparaît dans Gumroad Discover (2M visites/mois) sans création de contenu quotidien
- One-shot pricing (29-199$) = panier moyen élevé vs abonnement

## Cross-sell & newsletter
- `/free` (NeuraStarter) = lead magnet gratuit → email Resend → upsell séquence `/api/free-template`
- `BlogLeadMagnet` injectable sur chaque article (1 import)
- `EcosystemBanner` sur tous les sites déjà en place
- Newsletter `/api/newsletter` (rate-limit 5/min) alimente waitlist

## IndexNow déjà câblé (amélioré ce jour)
- `/api/indexnow` (48 URLs blog) + `/api/cron/daily-seo` (Google ping + Bing IndexNow enrichi 80 URLs)
- Cron Vercel `0 7 * * *` daily-seo + `0 6 * * *` seo-monitor
- Clé: `aiempire-indexnow-9f3c2a7e8b1d4f60a5c2e9b7d3f1a8c4.txt` dans `/public`
