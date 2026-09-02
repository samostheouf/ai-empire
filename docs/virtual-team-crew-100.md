# Virtual-Team Crew IA — Plan 100% Continu — ai-empire + Empire Financier Orchestrateur 20/20

> **Objectif:** passer de 11 templates + 12 crons Vercel isolés à une **virtual-team crew IA** (5 agents spécialisés) orchestrée par un **automation hub** central, visant **100% continu — TOP-1** avec le lemme bloquant `1×ROUGE ou 2×ORANGE = STOP`.
> **Stack:** Next.js 14.2.15 · Prisma 5.22 · Vercel `ai-empire-steel.vercel.app` · Hermes cron no-agent · Termux gateway
> **Date:** 2026-09-02 — ne déploie rien, ce fichier est le plan.
> **Reprise 1 ligne:** `cat ~/ai-empire/docs/virtual-team-crew-100.md | head -n 80; cat ~/EMPIRE_FINANCIER_PRODUIT_FINI.md | head -n 20`

---

## Table des matières

1. [Inventaire existant — preuves chemins fichiers](#1-inventaire-existant--preuves-chemins-fichiers)
2. [Crew IA — 5 agents virtual-team](#2-crew-ia--5-agents-virtual-team)
3. [Automation Hub — orchestrateur central](#3-automation-hub--orchestrateur-central)
4. [Plan 100% continu — health/audit/evolution/gateway + lemme STOP](#4-plan-100-continu--healthauditevolutiongateway--lemme-stop)
5. [Feuille de route vers 100% TOP-1](#5-feuille-de-route-vers-100-top-1)
6. [Annexes — commandes rejouables & garde-fous](#6-annexes--commandes-rejouables--garde-fous)

---

## 1. Inventaire existant — preuves chemins fichiers

### 1.1 `docs/agents-launch/` — 8 artefacts marketing launch (usine, pas crew)

| Fichier | Chemin absolu | Taille/usage | Type |
|---|---|---|---|
| discord-structure.md | `~/ai-empire/docs/agents-launch/discord-structure.md` | 10 channels (welcome/announcements/rules/general/introductions/wins/help/feature-requests/bug-reports/resources/showcase) | Playbook communauté |
| dm-templates.md | `~/ai-empire/docs/agents-launch/dm-templates.md` | 2 templates LinkedIn DM (Problem Solver, Mutual Connection) | Outreach |
| email-sequences.md | `~/ai-empire/docs/agents-launch/email-sequences.md` | Séquence onboarding 5 emails / 7j (Welcome→Quick Start) | Email |
| linkedin-post.md | `~/ai-empire/docs/agents-launch/linkedin-post.md` | Post fondateur NeuraAPI Agent Factory (87% faster, 64% fewer errors, 3.2× ROI) | Social |
| product-hunt.md | `~/ai-empire/docs/agents-launch/product-hunt.md` | Tagline + description 300c + maker comment 500w | PH |
| reddit-posts.md | `~/ai-empire/docs/agents-launch/reddit-posts.md` | Posts r/SaaS, r/Entrepreneur | Social |
| social-content.md | `~/ai-empire/docs/agents-launch/social-content.md` | Calendrier 7j + visuels | Social |
| twitter-thread.md | `~/ai-empire/docs/agents-launch/twitter-thread.md` | Thread lancement 10 tweets | Social |

**Autres docs liés (même racine `~/ai-empire/docs/`):**
- `~/ai-empire/docs/launch/` — 5 fichiers (devto-article, hackernews, producthunt, reddit-webdev, twitter-thread) doublons launch alternatifs
- `~/ai-empire/docs/marketing/7-day-plan.md`, `dm-templates.md`, `dm-tracker.md`
- `~/ai-empire/docs/product-hunt/content/` — 6 txt (linkedin-post, maker-comment, product-hunt-desc, reddit-post, reddit-webdev, twitter-thread) + `launch-guide.md`
- `~/ai-empire/docs/traffic/TRAFIC_SANS_X.md` + `.json` + `utm-links.csv` — trafic organique sans X

> **Diagnostic:** ce sont des *templates de contenu*, pas des agents exécutables. Aucun cron, aucun `lib/agents/*` ne les appelle. La crew proposée §2 les **réutilise comme prompts**.

### 1.2 `src/lib/agents/` — 18 fichiers, 5 templates v3 + 13 moteurs

```
~/ai-empire/src/lib/agents/
├── templates.ts          927l — AGENT_TEMPLATES[5] : content-creator-v3, seo-specialist-v3,
│                                  marketing-expert-v3, customer-support-v3, data-analyst-v3
│                                  → version 4, score 9.99, capabilities 7-17, tags 5-7
├── index.ts              207l — barrel exports
├── scoring.ts            220l — calculateCompositeScore, AGENT_ROLE_WEIGHTS
├── monitor.ts            212l — PerformanceMonitor, trackPerformance
├── feedback.ts           208l — FeedbackSystem
├── improvement.ts        301l — ImprovementEngine (ABTest, PromptVersionControl)
├── auto-fix.ts           131l — runAutoFix() appelé par health-check
├── content-creator.ts    151l — executeContentCreator
├── seo-specialist.ts     202l
├── marketing-expert.ts   207l
├── sales-agent.ts        204l
├── lead-generator.ts     132l
├── voice-agent.ts        128l
├── automation-agent.ts   171l
├── analyst.ts            246l
├── architect-quality.ts  415l
├── architect-security.ts 362l
└── team-generator.ts     356l — génère team multi-agents (loose)
```

**Preuve templates (grep 2026-09-02):**
```bash
grep -E "id:|role:" ~/ai-empire/src/lib/agents/templates.ts
# → content-creator-v3 / seo-specialist-v3 / marketing-expert-v3 / customer-support-v3 / data-analyst-v3
```

**Écart vs crew cible:** les 5 rôles actuels sont `content/seo/marketing/support/analyst` (usine de contenu). La crew §2 les **remap** vers les 5 moteurs Empire Financier : `SaaS-MRR / Flip / SOS / Info / Ecom` tout en conservant les 5 templates comme sous-moteurs.

### 1.3 `src/app/api/cron/*` — 12 routes cron (13 avec `/api/cron` principal)

| # | Route | Fichier | Schedule `vercel.json` | Rôle actuel | Appelle |
|---|---|---|---|---|---|
| 1 | `/api/cron` | `~/ai-empire/src/app/api/cron/route.ts` | `0 3 * * *` | cleanup (orders pending 30j, usage 90j, evolution 90j) + analytics (count users/orders/revenue) + weekly-report + re-engagement | `safeQuery(prisma.*)`, `prisma.evolutionReport` |
| 2 | `/api/cron/daily-marketing` | `~/ai-empire/src/app/api/cron/daily-marketing/route.ts` | `0 8 * * *` | Génère daily posts Twitter/LinkedIn/Facebook (BLOG_TOPICS 8 + SOCIAL_POSTS 8+5+4) + reengagement emails + blogIdeas | `callAI`, `safeQuery` |
| 3 | `/api/cron/seo-monitor` | `~/ai-empire/src/app/api/cron/seo-monitor/route.ts` | `0 6 * * *` | Ping sitemap Google + IndexNow Bing + blogUrls | `fetch` |
| 4 | `/api/cron/upsell` | `~/ai-empire/src/app/api/cron/upsell/route.ts` | `0 10 * * 1` | Campagne upsell hebdo | `safeQuery` |
| 5 | `/api/cron/send-welcome-sequence` | `~/ai-empire/src/app/api/cron/send-welcome-sequence/route.ts` | `0 6 * * *` | Welcome emails séquence | Resend |
| 6 | `/api/cron/daily-seo` | `~/ai-empire/src/app/api/cron/daily-seo/route.ts` | `0 7 * * *` | SEO quotidien | `callAI` |
| 7 | `/api/cron/weekly-report` | `~/ai-empire/src/app/api/cron/weekly-report/route.ts` | `0 9 * * 1` | Rapport hebdo analytics | `safeQuery` |
| 8 | `/api/cron/self-evolution` | `~/ai-empire/src/app/api/cron/self-evolution/route.ts` | `0 4 * * *` | Évolution agents: `getAgentTemplates()` → `calculateScore(v, caps, tags)` → si <9.0 → +0.5 + NEW_CAPABILITIES[role] + `prisma.evolutionReport` + `prisma.agentMetric` | `NEW_CAPABILITIES[5]` |
| 9 | `/api/cron/backup` | `~/ai-empire/src/app/api/cron/backup/route.ts` | `0 3 * * 0` | Backup hebdo DB | `safeQuery` |
| 10 | `/api/cron/retry-webhooks` | `~/ai-empire/src/app/api/cron/retry-webhooks/route.ts` | `0 2 * * *` | Retry webhooks Stripe échoués | `prisma.webhookEvent` |
| 11 | `/api/cron/health-check` | `~/ai-empire/src/app/api/cron/health-check/route.ts` | `0 5 * * *` | `runAutoFix()` → `sendAlert()` si errors | `lib/agents/auto-fix` |
| 12 | `/api/cron/auto-blog` | `~/ai-empire/src/app/api/cron/auto-blog/route.ts` | `0 5 * * *` | `blogIdea pending → callAI 3000 tok → update status published` | `callAI` |
| — | `/api/cron/status` | `~/ai-empire/src/app/api/cron/status/route.ts` | — (pas cron, endpoint d'observabilité) | Liste 12 crons + lastExecution (backup/report/webhook) | `safeQuery` |

**Preuve `vercel.json` (12 entries, pas 13):**
```json
// ~/ai-empire/vercel.json — cat vérifié 2026-09-02
{ "crons": [ {"path":"/api/cron","schedule":"0 3 * * *"}, {"path":"/api/cron/daily-marketing","schedule":"0 8 * * *"}, {"path":"/api/cron/seo-monitor","schedule":"0 6 * * *"}, {"path":"/api/cron/upsell","schedule":"0 10 * * 1"}, {"path":"/api/cron/send-welcome-sequence","schedule":"0 6 * * *"}, {"path":"/api/cron/daily-seo","schedule":"0 7 * * *"}, {"path":"/api/cron/weekly-report","schedule":"0 9 * * 1"}, {"path":"/api/cron/self-evolution","schedule":"0 4 * * *"}, {"path":"/api/cron/backup","schedule":"0 3 * * 0"}, {"path":"/api/cron/retry-webhooks","schedule":"0 2 * * *"}, {"path":"/api/cron/health-check","schedule":"0 5 * * *"}, {"path":"/api/cron/auto-blog","schedule":"0 5 * * *"} ] }
```
> Note: `/api/cron/status` n'est **pas** dans `vercel.json` — c'est un GET d'observabilité. Le 13e cron apparent vient du doublon `health-check`+`auto-blog` à 05:00 (2 jobs distincts, même heure).

**Auth:** toutes les routes utilisent `verifyCronAuth(request)` (secret `CRON_SECRET` ou `Authorization: Bearer …`). Sans ce header Vercel → 401.

### 1.4 Vercel Crons — 12 entries (limite Vercel Hobby 2 → nécessite Pro)

Vercel Hobby n'autorise que **2 crons** ; ai-empire en déclare 12 → ne s'exécute correctement qu'en Pro. Stratégie hub §3 consolide en **4 crons Vercel** + le reste basculé en Hermes cron no-agent.

### 1.5 Empire Financier Orchestrateur 20/20 — socle autour duquel greffer la crew

| Fichier | Chemin | Preuve 2026-09-02 |
|---|---|---|
| Audit produit fini | `~/EMPIRE_FINANCIER_PRODUIT_FINI.md` 02:07 — 20/20 VERT (5×4/4) | 11 crons verts, rapport 02:07 |
| Noyau orchestrateur | `~/NOYAU_ORCHESTRATEUR.md` 02:55 — 5 moteurs (SaaS, Flip, SOS, Info, Ecom) + lemme STOP | 25 crons temps réel |
| Health 15 checks | `~/.hermes/scripts/empire-financier-health.py` → 14/15 93% VERT | `python3 empire-financier-health.py` |
| Health 17 checks | `~/.hermes/scripts/orchestrateur-health.py` → 17/17 VERT attendu | bundle SOS+ECOM |
| Audit 20/20 | `~/.hermes/scripts/empire-financier-audit.py` → 20/20 VERT | quotidien 09:00 |
| Audit 28/28 | `~/.hermes/scripts/orchestrateur-audit.py` → 28/28 VERT_J1 | 20+4+4 |
| Capital 60 J1 | `~/.hermes/scripts/capital-tracker.py` → 60 ORANGE → VERT_J1 (30/40/30, 0 dette) | `capital-state.json` + `seuil-fi.json` 360k€ |
| Info PDF | `~/empire-financier/info/Pack-Flip-Zero-Stock-100.pdf` 20771b 5p + `audit-info.json` 100/100 | Stripe 29€ |
| Tracker affil. | `~/empire-financier/affiliation/tracker.json` 5951b — Awin/MR/Vercel 51-75€ projeté | VERT_J1 |
| Cotes flip | `~/flip/` + `COTE_MAP 40 + DEFAULT 25 + longest-key + outbox quarantaine` | 96 keys |
| SOS | `~/sos-facture/landing/index.html` 15218b + `prospects-30.csv` 31l (5 contactés, 25 restants) | 350€ |
| Ecom TOP-1 | `~/ecommerce-top1/ANALYSE_CHIRURGICALE.md` 12142b + `boutique/index.html` 11803b + `AUDIT_TOP1.json` 100/100 | POD EU SPOKE |

### 1.6 Hermes cron — 30 jobs (extrait `~/.hermes/cron/jobs.json` 2026-09-02)

**Vercel-like (legacy ai-empire):**
- `empire-audit-loop-v3` `0 */6 * * *` no-agent — `empire-audit-loop.py`
- `empire-evolution-loop` `0 */6 * * *` agent — audit + bannière + déploiement sûr
- `ai-empire-watchdog` `0 9 * * *` — `ai-empire-watch.sh`
- `ai-empire-article-quotidien` `0 10 * * *` — 1 article blog FR/j

**Financier + Orchestrateur (no-agent, temps réel):**
- `empire-financier-health-5min` `*/5` — 15 checks
- `orchestrateur-health-5min` `*/5` — 17 checks (15+SOS+ECOM)
- `capital-tracker-6h` `0 */6` — 60 ORANGE VERT_J1
- `empire-financier-audit-quotidien` `0 9 * * *` — 20/20
- `orchestrateur-audit-quotidien` `0 9 * * *` — 28/28
- `proactivite-20-20-continue` `0 */6` — `proactivite-20-20-continue.py` (health+audit+capital+outreach+appel Twilio, verdict GO/EVOLVE, out `evolution-continue/PROACTIVITE_CONTINUE.json`)
- `evolution-continue-controleur` `0 8 * * *` — contrôleur proactif final 28/32
- `orchestration-48h-tracker` `0 15 * * *`

**Flip (8):** `flip-scraper/monitor` `*/30`, `flip-evaluateur` `*/30`, `flip-inbox-scorer` `*/30`, `flip-alert-10min` `*/10`, `flip-option-watch` `0 * * * *`, `flip-mr-track` `0 */4`, `flip-audit-hebdo` `0 9 * * 1`, `flip-health-5min` `*/5`, `fb-marketplace-watch` `*/30`

**Infra:** `infra-health-monitor` `*/15`, `infra-gateway-watch` `*/5`

> **Problème actuel:** 30 jobs Hermes + 12 Vercel = redondance, coûts, limites. Le hub §3 consolide sans supprimer de couverture.

---

## 2. Crew IA — 5 agents virtual-team

### 2.1 Principe

Chaque agent = **rôle + prompt système versionné + KPIs + crons + artefacts**. Les agents ne sont pas des humains : ce sont des **processus no-agent** (scripts Hermes) + **routes API** + **prompts dans `templates.ts`** qui tournent sans LLM agent tant que le score est VERT. Quand le hub détecte ORANGE/ROUGE, il **escalade en agent** (`delegate_task` / `muse-spark-1.2`) pour patch.

Mapping des 5 moteurs Empire Financier → 5 agents crew (aligné `NOYAU_ORCHESTRATEUR.md`):

| # | Agent crew | Moteur Empire | Ancien template réutilisé | Marge | 0 stock |
|---|---|---|---|---|---|
| A1 | **SaaS-MRR** | Moteur 1 SaaS 4 LIVE 200 | `seo-specialist-v3` + `marketing-expert-v3` | 29€/template Stripe | webhook idempotent |
| A2 | **Flip** | Moteur 2 Flip 75km 382 dons | `data-analyst-v3` + `automation-agent` | 6.95–73€ net flip | MR prépayé |
| A3 | **SOS** | Moteur 3 SOS Facture 350+150€ | `sales-agent` + `lead-generator` + `voice-agent` | 350€ setup + 150€/mois | service |
| A4 | **Info** | Moteur 4 Info Passif 29€ | `content-creator-v3` | 29€ PDF + 51-75€ affil | PDF |
| A5 | **Ecom** | Moteur 5 E-commerce TOP-1 POD | `content-creator-v3` + `growth-hacker` | 18.93–33.05€ panier | POD EU SPOKE |

### 2.2 A1 — SaaS-MRR Agent — "Le Caissier"

**Mission:** 4 SaaS LIVE 200, webhooks idempotents, MRR, faux-négatifs documentés, SEO/IndexNow.

**Fichiers possédés:**
- `~/ai-empire/vercel.json` (déclare health-check, seo-monitor, backup, retry-webhooks)
- `~/ai-empire/src/app/api/cron/health-check/route.ts` (runAutoFix)
- `~/ai-empire/src/app/api/cron/seo-monitor/route.ts` + `daily-seo/route.ts`
- `~/ai-empire/src/app/api/cron/retry-webhooks/route.ts` + `backup/route.ts`
- `~/ai-empire/src/lib/agents/seo-specialist.ts`, `marketing-expert.ts`, `auto-fix.ts`, `monitor.ts`
- `~/empire-financier/saas/RAPPORT_PILIER1.md`
- `~/.hermes/scripts/empire-audit-loop.py` (curl 200 ×4)

**Prompt système (à ajouter dans `NEW_CAPABILITIES['seo-specialist']` + `marketing-expert` et dans `templates.ts` v4):**

```
Tu es SaaS-MRR Agent — le caissier de la crew. Tu gères 4 SaaS LIVE (ai-empire, prompt-empire, copy-vault, previo) avec 0 faux-négatif.

RÈGLES BLOQUANTES:
1. health-check avant tout scale — si runAutoFix() renvoie errors, sendAlert() puis STOP (lemme).
2. webhook Stripe idempotent: prisma.webhookEvent upsert par eventId, jamais rejouer un completed.
3. IndexNow + Google ping quotidiens (06:00 + 07:00) avec blogUrls dynamiques (≤80).
4. MRR = somme Order where status=completed — jamais simuler, jamais inventer.
5. Si 1×ROUGE ou 2×ORANGE sur saas_* checks → STOP outreach → patch → re-audit.

KPIs (20/20 = 4/4):
- LIVE 200 ×4 <1s (seuil VERT: 4/4, ORANGE: 3/4, ROUGE: ≤2/4)
- webhooks retries 0 en attente (ORANGE si >5, ROUGE si >20)
- sitemap soumis Google+Bing (VERT si 2/2 submitted)
- backup hebdo présent (VERT si <7j)

OUTILS: curl, safeQuery(prisma.order/webhookEvent), fetch(sitemap ping), callAI (SEO).
```

**Crons (avant → après hub):**

| Cron Vercel actuel | Hub cible |
|---|---|
| `seo-monitor 0 6 * * *` | gardé Vercel 06:00 |
| `daily-seo 0 7 * * *` | gardé Vercel 07:00 |
| `health-check 0 5 * * *` | migré Hermes `orchestrateur-health-5min */5` (plus fin) — Vercel redondant supprimable |
| `retry-webhooks 0 2 * * *` | gardé Vercel 02:00 |
| `backup 0 3 * * 0` | gardé Vercel hebdo |
| `/api/cron 0 3 * * *` analytics | fusionné hub `health-orchestrateur` |

### 2.3 A2 — Flip Agent — "Le Brocanteur Zéro-Stock"

**Mission:** 75km 382 dons, COTE_MAP 40 + DEFAULT 25, longest-key, outbox quarantaine, capital 30%, marge 6.95–73€, 0 nuit stock.

**Fichiers possédés:**
- `~/.hermes/scripts/flip-scraper.py`, `flip-evaluateur.py`, `flip-inbox-scorer.py`, `flip-alert-10min.py`, `flip-option-watch.py`, `flip-mr-track.py`, `flip-health-5min.py`, `flip-audit-hebdo.py`
- `~/flip/deals/*.json`, `COTE_MAP`, `outbox/`, `fb-marketplace-monitor.py`
- `~/empire-financier/flip/RAPPORT_PILIER2.md` + `capital/ALLOCATION_UNIFIEE.md` (30/40/30)

**Prompt système:**

```
Tu es Flip Agent — le brocanteur zéro-stock. Tu scores 382 dons/75km, 96 keys COTE_MAP, 0 surcote.

RÈGLES BLOQUANTES:
1. 0 nuit stock — commande fournisseur UNIQUEMENT si client payé (MR prépayé 4.85-15.65€ grille 17/07/2024) ou SPOKE LV.
2. longest-key first: cote = match le plus long dans COTE_MAP, sinon DEFAULT 25, sinon outbox BLOQUE (4 actuels conservés).
3. GO seulement si marge nette >15€ ET poids <10kg ET distance <75km (seuil alert-10min).
4. Capital: 30% FI / 40% reinvest / 30% vie — toute vente → capital-tracker.py.
5. Lemme flip: 1×ROUGE ou 2×ORANGE sur flip-health 13/13 = STOP sourcing → patch outbox → re-score.

KPIs (4/4):
- scraper 382 dons */30 VERT, 0 GO honnête = VERT (pas fake)
- evaluateur 20 év 0 GO = VERT (seuil 15€ respecté)
- inbox 12 patterns VERT, outbox 4 BLOQUE documentés
- MR 30% reversé (preuve flip-mr-track.py)

OUTILS: flip-*.py, COTE_MAP, capital-tracker.py, curl MR.
```

**Crons:** les 8 crons flip existants sont **gardés tels quels** — ce sont déjà la crew la plus mature. Le hub ne les touche pas, il les observe.

### 2.4 A3 — SOS Agent — "Le Sauveteur" — 350€ + 150€/mois

**Mission:** SOS Facture impayée — landing 15218b + prospects-30.csv (5 contactés/25 restants, 5/j auto) + voix Twilio Polly.Rémi fr-FR → ElevenLabs après 1er 350€.

**Fichiers possédés:**
- `~/sos-facture/landing/index.html` 15218b
- `~/sos-facture/prospects/prospects-30.csv` 31l + `prospects-30-backup.csv`
- `~/sos-facture/prospects/appels-orchestres.json` (valid. Twilio SID CA559a…)
- `~/.hermes/scripts/sos-outreach-auto.py` (5/j), `appel-a-ta-place.py` (Twilio), `appel-autonome-ovh.py`
- `~/sos-facture/guide.md` 5.6K + `~/orchestrateur-empire/preuves/health-orchestrateur.json` (check sos)

**Prompt système:**

```
Tu es SOS Agent — le sauveteur. Tu transformes 30 prospects "facture impayée" en 350€ setup.

RÈGLES BLOQUANTES:
1. Outreach 5/j auto (09:00) — jamais spammer >5/j, respect RGPD, statut csv: à contacter → contacté → RDV → payé.
2. Appel Twilio Polly.Rémi fr-FR (17/20) validé SID CA559a… queued — après 1er 350€: upgrade Polly.Léa → ElevenLabs.
3. Landing 15218b = preuve unique — 0 fake témoignage, 0 fake CA.
4. Capital: 350€ → 30% FI (105€) via capital-tracker.py.
5. Lemme SOS: si health sos_landing_prospects_30 = ROUGE → STOP outreach → fix landing/csv → re-audit.

KPIs (4/4):
- landing 15218b OK (VERT si >5000b, ROUGE si missing)
- prospects 30/30 csv OK (header nom,tel + 30l)
- outreach 5/j (VERT si reste 25→0 en 5j, ORANGE si retard >2j)
- 1er appel validé Twilio queued (VERT si sid présent, ORANGE si J1 sans sid)

OUTILS: sos-outreach-auto.py, appel-a-ta-place.py, prospects-30.csv, landing/index.html.
```

**Crons:**
- `sos-outreach-auto-quotidien 0 9 * * *` — actuellement `enabled:false` en `jobs.json` → **réactiver** (c'est le moteur revenu le plus direct).
- `appel-a-ta-place-J3-10h 0 10 * * *` — `enabled:false` → réactiver J3 si pas de RDV.

### 2.5 A4 — Info Agent — "L'Éditeur Passif"

**Mission:** Pack Flip Zéro-Stock 100 — PDF 29€ 5p sourcé + audit 100/100 + tracker affiliation 3 sources VERT_J1 51-75€/mois.

**Fichiers possédés:**
- `~/empire-financier/info/Pack-Flip-Zero-Stock-100.pdf` 20771b + `audit-info.json` 100/100 + `produit-1.md`
- `~/empire-financier/affiliation/tracker.json` 5951b (Awin/MR/Vercel, 0€ J1 honnête, plan 51-75€)
- `~/ai-empire/src/lib/agents/content-creator.ts` + `templates.ts:content-creator-v3` (EIS 8.5, VPS 7.0, SRS, 4-checks)
- `~/ai-empire/src/app/api/cron/auto-blog/route.ts` (réutilisable pour contenu info)

**Prompt système:**

```
Tu es Info Agent — l'éditeur passif. Tu vends le PDF 29€ sans stock, sans bullshit.

RÈGLES BLOQUANTES:
1. 0 faux témoignage — audit-info.json 15pts bloquant (VERT si 100/100, sinon STOP).
2. Valeur sourcée: COTE_MAP 40 + flip V3 MR prépayé + 0 stock — tout sourçable.
3. Livraison: Stripe 2900c (priceId) → download PACK_DOWNLOADS → PDF 20771b — jamais inventer revenue.
4. Affiliation: 3 sources (Awin, MR, Vercel) avec lien_inscription_officiel vérifiable + comment_atteindre_50 → VERT_J1 même à 0€.
5. Prix: 29€ aligné coûts Strasbourg (MR 4.85-15.65€ + marge) — jamais sous-évaluer.

KPIs (4/4):
- PDF 20771b 5p VERT (ROUGE si <15000b)
- audit-info 100/100 VERT
- tracker 3 sources + plan 50€ VERT_J1 (VERT si ≥50€ réel)
- livraison Stripe→PDF <2min OK

OUTILS: audit-info.json, tracker.json, callAI (contenu), Stripe priceId.
```

**Crons:** pas de cron dédié aujourd'hui — Info est pull (vente). Hub ajoute `info-health` dans `empire-financier-health.py` check 9.

### 2.6 A5 — Ecom Agent — "Le Marchand TOP-1"

**Mission:** E-commerce Club POD TOP-1 D — analyse 12142b 5 niches 20/20 + boutique 11803b + audit 100/100 + POD EU SPOKE.lv + csv 4K + acq 7884b + synergie SOS 389€ panier.

**Fichiers possédés:**
- `~/ecommerce-top1/ANALYSE_CHIRURGICALE.md` 12142b
- `~/ecommerce-top1/boutique/index.html` 11803b
- `~/ecommerce-top1/AUDIT_TOP1.json` 100/100 VERT + `RAPPORT_CEO.md`
- `~/ecommerce/gen_pdp_pdf.py` + `~/ecommerce-top1/PDP-choisir-5min.md`
- `~/ecommerce-top1/csv/` 4K + `acquisition.md` 7884b + `pod.md` 6419b
- `~/.hermes/scripts/evolution-continue-controleur.py` (déjà intègre ecom 100 = 4×25)

**Prompt système:**

```
Tu es Ecom Agent — le marchand TOP-1. Tu opères Club POD EU sans stock, 18.93–33.05€ marge.

RÈGLES BLOQUANTES:
1. 0 nuit stock — POD EU SPOKE.lv uniquement, commande SEULEMENT si client payé.
2. TOP-1 D = niche 20/20 (analyse chirurgicale 5 niches) — pas de niche <16/20.
3. Boutique 11803b + analyse 12142b + audit 100/100 = bundle indissociable — 1 manquant = ROUGE.
4. Synergie SOS: panier moyen 389€ (SOS 350€ + upsell) documentée.
5. Trafic: acquisition 7884b + csv 4K — 0 fake trafic, attribution UTM.

KPIs (4/4 = 100/100):
- valeur sourcée 25/25 (analyse 12142b)
- prix justifié 25/25 (18.93-33.05€ POD)
- livraison auto 25/25 (Stripe→SPOKE)
- preuves/PDP 25/25 (11803b boutique + audit 100)

OUTILS: ANALYSE_CHIRURGICALE.md, boutique/index.html, AUDIT_TOP1.json, SPOKE.lv API, gen_pdp_pdf.py.
```

**Crons:** aucun cron ecom standalone aujourd'hui — intégré au health 17/17 et au contrôleur `evolution-continue-controleur.py`. Hub conserve ce mode.

---

## 3. Automation Hub — orchestrateur central

### 3.1 Rôle

Le hub est l'**unique orchestrateur** qui **route, audite 20/20, et évolue**. Il ne remplace pas les agents — il les **observe, priorise, et escalade**. Inspiré de `~/.hermes/scripts/proactivite-20-20-continue.py` (0 */6 + 08h00, GO/EVOLVE, auto-patch).

```
                         ┌─────────────────────┐
                         │   AUTOMATION HUB    │
                         │  crew-orchestrator  │
                         │  20/20 + lemme STOP │
                         └─────────┬───────────┘
              ┌────────────┼──────────┼────────────┐
              │            │          │            │
        ┌─────┴──┐  ┌─────┴──┐  ┌───┴────┐  ┌────┴────┐
        │ SaaS-MRR│  │  Flip  │  │  SOS   │  │  Info   │  Ecom
        │  A1     │  │   A2   │  │  A3    │  │  A4     │  A5
        └─────────┘  └────────┘  └────────┘  └─────────┘
              \            │          │            /
               \           │  capital 30/40/30    /
                └──────────┴──────┬───┴──────────┘
                           gateway + health */5
```

### 3.2 Fichiers hub (à créer / étendre)

| Fichier | Rôle | Schedule cible | Preuve source |
|---|---|---|---|
| `~/.hermes/scripts/crew-orchestrator.py` **NEW** | Hub principal — route, audite 20/20 (→28/28), évolue, lemme STOP | `0 */6 * * *` + `0 8 * * *` (même pattern que `proactivite-20-20-continue.py`) | dérivé `proactivite-20-20-continue.py` 218l |
| `~/.hermes/scripts/orchestrateur-health.py` | Health 17/17 (15 empire + SOS bundle + ECOM TOP-1) | `*/5 * * * *` no-agent | existe, 17/17 VERT |
| `~/.hermes/scripts/orchestrateur-audit.py` | Audit 28/28 (20 financier + 4 SOS + 4 ECOM) | `0 9 * * *` no-agent | existe, 28/28 VERT_J1 |
| `~/.hermes/scripts/proactivite-20-20-continue.py` | Précurseur hub — health+audit+capital+appel Twilio → GO/EVOLVE → `evolution-continue/PROACTIVITE_CONTINUE.json` | `0 */6 * * *` enabled | existe, 218l |
| `~/.hermes/scripts/empire-financier-health.py` | Health 15 piliers 5×4 | `*/5` | existe |
| `~/ai-empire/src/app/api/cron/status/route.ts` | Endpoint observabilité crews (12 crons) | on-demand GET | existe |
| `~/orchestrateur-empire/preuves/health-orchestrateur.json` | Sortie health datée | écrit par health 5min | existe |
| `~/evolution-continue/PROACTIVITE_CONTINUE.json` | Sortie hub proactivité (health/audit/capital/appel/outreach) | écrit 6h | existe |
| `~/evolution-continue/RAPPORT_FINAL_CONTROLEUR.json` | Sortie contrôleur 28/32 | `0 8 * * *` | existe |
| `~/ai-empire/docs/virtual-team-crew-100.md` | Ce plan | — | ce fichier |
| `~/ai-empire/src/lib/agents/templates.ts` | Prompts systèmes crew v4 (NEW_CAPABILITIES + systemPrompt) | build-time | existe 927l |
| `~/ai-empire/src/app/api/crew/orchestrator/route.ts` **NEW** | Endpoint hub Vercel (route, audit, évolution, lemme) — auth `x-api-key` | `0 */6 * * *` + on-demand | à créer §5 |

### 3.3 Spéc `crew-orchestrator.py` — le cœur (0 */6 + 08h00)

**Fichier:** `~/.hermes/scripts/crew-orchestrator.py` (no-agent, 250–350l, dérivé `proactivite-20-20-continue.py`)

**Entrées (4 sources, même extraction JSON que proactivite):**

```python
HOME = Path.home()
HEALTH = HOME / ".hermes/scripts/orchestrateur-health.py"   # 17/17
AUDIT  = HOME / ".hermes/scripts/orchestrateur-audit.py"     # 28/28
CAPITAL= HOME / ".hermes/scripts/capital-tracker.py"         # 60 VERT_J1
EVOL   = HOME / ".hermes/scripts/evolution-continue-controleur.py"  # 28/32 final
SOS_CSV= HOME / "sos-facture/prospects/prospects-30.csv"      # 30l, 5/j
APPELS = HOME / "sos-facture/prospects/appels-orchestres.json" # Twilio SID
ECOM   = HOME / "ecommerce-top1/AUDIT_TOP1.json"              # 100/100
OUT    = HOME / "evolution-continue/CREW_ORCHESTRATEUR.json"
OUT_MD = HOME / "evolution-continue/CREW_ORCHESTRATEUR.md"
```

**Logique (même lemme que `proactivite-20-20-continue.py` + extension crew):**

```python
# 1. run_py(HEALTH) → h_verts/h_total/h_status
# 2. run_py(AUDIT)  → a_score/a_max/a_status (28/28)
# 3. run_py(CAPITAL)→ c_score/c_status/fi_pct
# 4. run_py(EVOL)   → e_verdict/e_score (28/32)
# 5. appel_valide = TWILIO sid dans APPELS_LOG
# 6. restant = count csv statut == "à contacter" (25 actuels)
# 7. crew routing:
crew = {
  "SaaS-MRR": {"health": saas_verts/4, "audit": saas_pts/4, "next": "daily-marketing 08h" if health_vert else "runAutoFix"},
  "Flip":    {"health": flip_13, "marge": marge_net, "next": "alert-10min" if marge>15 else "re-score"},
  "SOS":     {"landing": 15218, "prospects": 30, "restant": restant, "next": "5/j auto 09h"},
  "Info":    {"pdf": 20771, "audit": 100, "affil": "51-75€", "next": "Stripe 29€"},
  "Ecom":    {"analyse": 12142, "boutique": 11803, "audit": 100, "next": "POD SPOKE"},
}
# 8. Lemme STOP (identique NOYAU_ORCHESTRATEUR.md):
#    total_ok = (h_status=="VERT" and a_score==28 and appel_valide is not None)
#    oranges = sum(1 for c in checks if c.status=="ORANGE")
#    rouges  = sum(1 for c in checks if c.status=="ROUGE")
#    if rouges>=1 or oranges>=2: verdict="STOP", proactivite="EVOLVE", plan=[patch prioritaire]
#    else: verdict="GO", proactivite="SCALE 5/j + 1 flip/j + capital 30/40/30"
```

**Sorties:**

- `CREW_ORCHESTRATEUR.json` — `{timestamp, health:{17/17}, audit:{28/28}, capital:{60 VERT_J1}, crew:{5}, verdict: GO/STOP, plan:[P1,P2], next_cron:"0 */6 + 0 8 * * * + */5 health + 0 9 audit"}`
- `CREW_ORCHESTRATEUR.md` — markdown résumé avec tableau crew + lemme + plan patch
- `print(json.dumps(result, indent=2))` + `print(f"\nCREW {code} — {verdict}")` (même pattern `proactivite-*.py`)

**Crons Hermes à créer (2, pas 12):**

```bash
# Hub principal — évolution 6h (comme proactivite-20-20-continue)
hermes cron create --name crew-orchestrator-6h --no-agent --script crew-orchestrator.py --schedule "0 */6 * * *"

# Hub quotidien — contrôleur final 08h00 (comme evolution-continue-controleur.py 0 8 * * *)
hermes cron create --name crew-orchestrator-8h --no-agent --script crew-orchestrator.py --schedule "0 8 * * *"
# → en réalité 1 seul script avec 2 schedules (0 */6 couvre déjà 08h, le 08h00 est redondant mais explicite pour lecture humaine)
```

> Recommandation: **garder 1 seul** `0 */6 * * *` (00,06,12,18h) — le tick 06h couvre l'audit 09h avec 3h d'avance, le tick 12h couvre le reste. Ajouter `0 8 * * *` seulement si on veut un run déterministe 08h00 pour daily-marketing.

### 3.4 Endpoint hub Vercel — `~/ai-empire/src/app/api/crew/orchestrator/route.ts` (NEW)

**Rôle:** exposer la crew et le lemme STOP via HTTP (gateway watch + debug). Auth `verifyCronAuth` + `x-api-key` optionnel.

```ts
// ai-empire/src/app/api/crew/orchestrator/route.ts — NEW
export const dynamic = 'force-dynamic'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'
import { getAgentTemplates } from '@/lib/agents/templates'

const CREW = [
  { id:'saas-mrr', name:'SaaS-MRR — Le Caissier', moteur:1, template:'seo-specialist-v3+marketing-expert-v3', kpi:'LIVE 200×4', schedule:'0 6,7,8 * * *' },
  { id:'flip',    name:'Flip — Le Brocanteur',   moteur:2, template:'data-analyst-v3', kpi:'382 dons 75km', schedule:'*/30 + */10 + 0 *' },
  { id:'sos',     name:'SOS — Le Sauveteur',     moteur:3, template:'sales-agent+lead-generator', kpi:'30 prospects 5/j', schedule:'0 9 * * *' },
  { id:'info',    name:'Info — L’Éditeur',       moteur:4, template:'content-creator-v3', kpi:'PDF 29€ 100/100', schedule:'on-demand' },
  { id:'ecom',    name:'Ecom — Le Marchand TOP-1',moteur:5, template:'content-creator+growth-hacker', kpi:'100/100 POD', schedule:'on-demand' },
]

export async function GET(req: Request) {
  if (!verifyCronAuth(req as any)) return Response.json({error:'Non autorisé'}, {status:401})
  const search = new URL(req.url).searchParams
  const task = search.get('task') || 'status' // status | audit | evolve | stop-check

  // 1. health des templates (score <9.0 → evolved)
  const templates = getAgentTemplates()
  const crewHealth = templates.map(t => ({ id:t.id, score: +(t.score ?? 0), evolved: (t.score ?? 0) < 9.0 }))

  // 2. lemme STOP: 1×ROUGE ou 2×ORANGE sur crewHealth + checks DB
  const oranges = crewHealth.filter(c => c.score < 8.5 && c.score >= 7).length
  const rouges  = crewHealth.filter(c => c.score < 7).length
  const lemme = (rouges >= 1 || oranges >= 2) ? 'STOP' : 'GO'

  // 3. DB analytics (même runAnalyticsUpdate que /api/cron)
  const analytics = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const [users, orders, revenue] = await Promise.all([
      prisma.apiUser.count(), prisma.order.count({where:{status:'completed'}}),
      prisma.order.aggregate({where:{status:'completed'}, _sum:{amount:true}})
    ])
    return { users, orders, revenue: revenue._sum.amount || 0 }
  }, {users:0, orders:0, revenue:0})

  return Response.json({ success:true, timestamp:new Date().toISOString(), lemme, crew:CREW, crewHealth, analytics, task })
}
```

**Vercel crons après hub (4 au lieu de 12):**

```json
// ~/ai-empire/vercel.json — CIBLE après consolidation hub
{
  "crons": [
    { "path": "/api/crew/orchestrator?task=status", "schedule": "0 */6 * * *" },
    { "path": "/api/cron/seo-monitor",              "schedule": "0 6 * * *" },
    { "path": "/api/cron/daily-seo",                "schedule": "0 7 * * *" },
    { "path": "/api/cron/daily-marketing",          "schedule": "0 8 * * *" }
  ]
}
// Le reste (health-check, auto-blog, self-evolution, retry-webhooks, backup, etc.)
// est couvert par Hermes no-agent */5 et 0 9 * * * — plus fin et gratuit.
```

### 3.5 Flux hub — séquence complète

```
Tick 0 */6 (00,06,12,18h) ou 08h00
  │
  ├─ 1) crew-orchestrator.py lance en parallèle (async):
  │      run_py(orchestrateur-health.py) → 17/17
  │      run_py(orchestrateur-audit.py)  → 28/28
  │      run_py(capital-tracker.py)      → 60 VERT_J1
  │      run_py(evolution-continue-controleur.py) → 28/32
  │      read SOS csv + appels-orchestres.json + AUDIT_TOP1.json
  │
  ├─ 2) Agrège: h_verts, a_score, c_score, e_verdict, appel_valide, restant
  │
  ├─ 3) Compte ORANGE/ROUGE par crew (5 agents × 1 check chacun + 3 checks infra)
  │      si 1×ROUGE ou 2×ORANGE → verdict STOP, proactivite EVOLVE
  │      sinon → verdict GO, proactivite SCALE
  │
  ├─ 4) Route:
  │      STOP → plan P1 APPEL / P1 HEALTH / P1 AUDIT → auto-patch → re-audit → re-health
  │      GO   → plan P2 SCALE: outreach 5/j + 1 flip/j + capital 30/40/30 → lance crons normaux
  │
  ├─ 5) Écrit CREW_ORCHESTRATEUR.json + .md → gateway watch les lit
  │
  └─ 6) Si GO: déclenche GET /api/cron/daily-marketing et /api/cron/seo-monitor (Vercel)
         Si STOP: n'appelle rien — notifie via sendAlert() + gateway watch ROUGE
```

---

## 4. Plan 100% continu — health/audit/evolution/gateway + lemme STOP

### 4.1 Les 4 boucles (fréquences figées)

| Boucle | Script | Schedule Hermes | Schedule Vercel | Check | Seuil VERT | Sortie |
|---|---|---|---|---|---|---|
| **Health 5min** | `orchestrateur-health.py` + `empire-financier-health.py` | `*/5 * * * *` no-agent (`orchestrateur-health-5min`, `empire-financier-health-5min`) | — (migré, plus fin que Vercel `health-check 0 5 * * *`) | 17/17 (15+SOS+ECOM) | 17/17 VERT, 14–16 ORANGE, ≤13 ROUGE | `orchestrateur-empire/preuves/health-orchestrateur.json` + `health-YYYYMMDD.json` |
| **Audit 9h** | `orchestrateur-audit.py` (`audit_financier 20/20` + SOS 4 + ECOM 4 = 28/28) | `0 9 * * *` (`orchestrateur-audit-quotidien`, `empire-financier-audit-quotidien`) | — | 28/28 (20+4+4) | 28/28 VERT_J1 (capital 60 = VERT_J1), <24 ORANGE, <20 ROUGE | `orchestrateur-empire/preuves/audit-orchestrateur.json` + `EMPIRE_FINANCIER_AUDIT.json` |
| **Evolution 6h + 08h00** | `crew-orchestrator.py` (NEW, dérivé `proactivite-20-20-continue.py`) + `evolution-continue-controleur.py` | `0 */6 * * *` (`crew-orchestrator-6h` + `proactivite-20-20-continue`) + `0 8 * * *` (`evolution-continue-controleur` + `crew-orchestrator-8h`) | `0 */6 * * *` `/api/crew/orchestrator?task=evolve` | GO/EVOLVE + plan P1/P2 | GO si `h==VERT && a==28 && appel_valide`, sinon EVOLVE | `evolution-continue/CREW_ORCHESTRATEUR.json` + `PROACTIVITE_CONTINUE.json` + `RAPPORT_FINAL_CONTROLEUR.json` |
| **Gateway watch** | `gateway-watch-simple.sh` + `infra-health.sh` | `*/5 * * * *` (`infra-gateway-watch`) + `*/15` (`infra-health-monitor`) | — | gateway running + 4 SaaS 200 | VERT si running + 4×200 | stdout + `flip-health-5min.py` |

**Diagramme temporel (UTC, Paris = UTC+2):**

```
00:00  crew-orchestrator 6h (tick 00) ── health 17/17 ─┐
00:02  retry-webhooks Vercel                          │
00:03  cron principal Vercel (legacy, à supprimer)    │  health */5 tourne en continu
03:00  legacy cron principal (à supprimer)            │
04:00  self-evolution Vercel (legacy)                 │
05:00  health-check + auto-blog Vercel (legacy)       │
06:00  seo-monitor Vercel ───────── audit 20/20 ──────┤  crew 6h tick 06
06:00  crew-orchestrator 6h (tick 06) ────────────────┘
07:00  daily-seo Vercel
08:00  daily-marketing Vercel + evolution-continue-controleur 08h + crew 08h
09:00  audit 28/28 (orchestrateur + financier) + ai-empire-watchdog
10:00  upsell hebdo (lundi) + ai-empire-article-quotidien
12:00  crew-orchestrator 6h (tick 12)
15:00  orchestration-48h-tracker
18:00  crew-orchestrator 6h (tick 18)
*/5    orchestrateur-health + gateway-watch (temps réel)
*/10   flip-alert-10min
*/15   infra-health-monitor
*/30   flip scraper/evaluateur/inbox + fb-marketplace
```

### 4.2 Lemme bloquant — `1×ROUGE ou 2×ORANGE = STOP`

**Définition (identique `NOYAU_ORCHESTRATEUR.md` + `EMPIRE_FINANCIER_PRODUIT_FINI.md` + `proactivite-20-20-continue.py`):**

```python
# Dans crew-orchestrator.py et orchestrateur-health.py / orchestrateur-audit.py
checks = [...]  # 17 health + 28 audit + 5 crew
rouges  = sum(1 for c in checks if c.statut == "ROUGE")
oranges = sum(1 for c in checks if c.statut == "ORANGE")

if rouges >= 1 or oranges >= 2:
    verdict = "STOP"          # empire en PAUSE — 0 scale, 0 outreach, 0 flip
    proactivite = "EVOLVE"    # auto-patch obligatoire avant re-GO
    # plan P1 prioritaire: d'abord ROUGE, puis ORANGE par ordre P1 HEALTH > P1 AUDIT > P1 APPEL
else:
    verdict = "GO"            # scale autorisé
    proactivite = "SCALE"     # 5/j outreach + 1 flip/j + capital 30/40/30 + blog auto
```

**Table de vérité:**

| ROUGE | ORANGE | Verdict | Action hub |
|---|---|---|---|
| 0 | 0 | **GO** | SCALE — outreach 5/j + flip 1/j + blog + seo |
| 0 | 1 | **GO** | SCALE (1 ORANGE toléré, warning) |
| 0 | 2 | **STOP** | EVOLVE — patch les 2 ORANGE → re-health 5min → re-audit 09h |
| 0 | ≥3 | **STOP** | EVOLVE — même chose, priorité au plus bloquant |
| 1 | * | **STOP** | EVOLVE — patch ROUGE immédiat (P1), 0 scale tant que ROUGE |
| ≥2 | * | **STOP** | EVOLVE — idem, ordre ROUGE par criticité |

**Couleurs par moteur (règles `empire-financier-health.py` + `orchestrateur-health.py`):**

| Moteur | VERT | ORANGE (toléré 1×) | ROUGE (STOP) |
|---|---|---|---|
| SaaS 4 LIVE | 4/4 200 | 3/4 200 | ≤2/4 200 |
| Flip 13/13 | 13/13 ou 12/13 VERT | 11/13 | ≤10/13 ou 0/0 |
| Capital 60 | 60 ORANGE → VERT_J1 si alloc VERT + 0 dette + plan | 40–59 | 0–39 ou dette |
| Info PDF | 20771b + 100/100 | 15000–20770b ou 75/100 | missing ou <50/100 |
| Affiliation | 3 sources + plan 50€ VERT_J1 (même à 0€) | 2/3 sources | ≤1/3 |
| SOS bundle | landing 15218b + 30l csv | landing ok xor prospects ok | landing + prospects missing |
| ECOM TOP-1 | 12142b + 11803b + 100/100 | 2/3 OK | ≤1/3 |
| Gateway | running + 4×200 | running + 3×200 | down |

**Preuve implémentation (extrait `empire-financier-health.py` l.120–135):**
```python
verts = sum(1 for _,s,_ in checks if s=="VERT")
total = len(checks)  # 15
pct = round(verts/total*100)
global_status = "VERT" if verts>=13 else "ORANGE" if verts>=10 else "ROUGE"
# Orchestrateur-health.py l.90–100: 17 checks, VERT si 17/17, ORANGE si ≥14, ROUGE sinon
# Evolution-continue-controleur.py: 1×ROUGE ou 2×ORANGE → STOP évo.
```

### 4.3 Watch temps réel — gateway + infra

**Scripts:**
- `~/.hermes/scripts/gateway-watch-simple.sh` — `*/5` — teste `gateway running` via `flip-health-5min.py` trick
- `~/.hermes/scripts/infra-health.sh` — `*/15` — health infra générique
- `~/.hermes/scripts/flip-health-5min.py` — `*/5` — 13/13 flip, utilisé comme proxy gateway
- `~/ai-empire/src/lib/agents/monitor.ts` — `PerformanceMonitor.trackPerformance()` (in-app)

**Si gateway STOP:**

```bash
# 1. health 5min détecte ROUGE gateway
# 2. crew-orchestrator.py verdict STOP
# 3. hub n'appelle PAS les crons Vercel (pas de scale sur infra KO)
# 4. infra-gateway-watch tente auto-restart (si script le prévoit) ou sendAlert()
# 5. prochain health 5min re-teste — si re-VERT → GO au tick 6h suivant
```

**Observabilité:**

```bash
# Temps réel (rejouable, preuves)
python3 ~/.hermes/scripts/orchestrateur-health.py | grep HEALTH          # 17/17
python3 ~/.hermes/scripts/empire-financier-health.py | grep HEALTH       # 15/15
python3 ~/.hermes/scripts/empire-financier-audit.py | grep AUDIT         # 20/20
python3 ~/.hermes/scripts/orchestrateur-audit.py | grep AUDIT            # 28/28
python3 ~/.hermes/scripts/capital-tracker.py | grep -E "score|VERT"      # 60 VERT_J1
python3 ~/.hermes/scripts/proactivite-20-20-continue.py | tail -n 20      # GO/EVOLVE
cat ~/evolution-continue/CREW_ORCHESTRATEUR.json | python3 -m json.tool   # hub crew
cat ~/orchestrateur-empire/preuves/health-orchestrateur.json | grep -E "verts|status"
curl -H "Authorization: Bearer $CRON_SECRET" https://ai-empire-steel.vercel.app/api/cron/status | python3 -m json.tool
curl -H "Authorization: Bearer $CRON_SECRET" https://ai-empire-steel.vercel.app/api/crew/orchestrator?task=status | python3 -m json.tool  # NEW
```

### 4.4 Boucle fermée — auto-patch + re-audit

```
health 5min ROUGE ─┐
audit 9h ORANGE  ──┤→ crew-orchestrator 6h détecte STOP → plan P1
                   │     │
                   │     ├─ P1 HEALTH 14/15 → relancer health + gateway (infra-gateway-watch)
                   │     ├─ P1 AUDIT 27/28 → evolution-continue-controleur.py → patch code
                   │     ├─ P1 APPEL Twilio non validé → appel-a-ta-place.py → SID CA559a
                   │     └─ P1 OUTREACH retard → sos-outreach-auto.py 5/j
                   │     │
                   │     └─ re-run health 5min (*/5) → si VERT → re-run audit (prochain 09h ou manuel)
                   │            │
                   └────────────┤ si re-VERT 17/17 + 28/28 → verdict GO au prochain tick 6h
                                │  si encore ORANGE/ROUGE → reste STOP, nouveau plan P1
                                └─ gateway watch continue */5 pendant tout STOP
```

> **Garde-fou éthique:** patch = `placeholder honnête`, jamais faux témoignage / fake CA / stock. Même règle que `EMPIRE_AUDIT_LOOP.json` — `alerts_éthiques` doivent rester 0.

---

## 5. Feuille de route vers 100% TOP-1

### 5.1 Définition TOP-1

TOP-1 = **#1 trafic organique sans X** sur la niche "templates Next.js 14 + IA + Stripe" + **20/20 VERT continu** + **1er deal encaissé** (flip ou SOS) → capital 60→75 VERT réel.

| Critère TOP-1 | Mesure | Source preuve | Actuel 02/09 | Cible |
|---|---|---|---|---|
| Trafic organique #1 | sessions/j vs prompt-empire/copy-vault/previo | `~/ai-empire/docs/traffic/TRAFIC_SANS_X_REPORT.json` + `EMPIRE_AUDIT_LOOP.json` projects.[ai-empire].score | < prev (?) | > 3 autres |
| 20/20 VERT | `empire-financier-audit 20/20` + `orchestrateur-audit 28/28` | `EMPIRE_FINANCIER_AUDIT.json` | 20/20 VERT | 28/28 VERT |
| Health temps réel | 17/17 VERT | `orchestrateur-health.py` | 17/17 VERT | 17/17 |
| 1er € encaissé | Order `status=completed` ≥1 | `prisma.order` + `capital-state.json` | 0€ J1 honnête | ≥1 × 29€ ou 350€ |
| Capital FI | 30/40/30, 0 dette | `seuil-fi.json` 360k€ + `ALLOCATION_UNIFIEE.md` | 60 VERT_J1 | 75 VERT réel |
| Éthique 100% | 0 fake, 0 stock | `audit-info.json` 100/100 + `COTE_MAP` | 100/100 | 100/100 |

### 5.2 Roadmap 4 sprints — sans déploiement dans ce plan

#### Sprint 0 — Ce plan (J0, 2026-09-02) — ✅ livré

- [x] Inventaire 5.1 (§1) — 8 docs + 12 crons Vercel + 18 lib/agents + 30 Hermes + 5 moteurs
- [x] Crew 5 agents définis (§2) — prompts + KPIs + crons + fichiers possédés
- [x] Hub spec (§3) — `crew-orchestrator.py` 0 */6 + 08h00 + `route.ts`
- [x] Plan continu 4 boucles + lemme STOP (§4) — fréquences + table vérité + watch
- [x] Fichier plan 400+ lignes — `~/ai-empire/docs/virtual-team-crew-100.md` (ce fichier)
- [ ] Revue utilisateur — GO pour implémentation

#### Sprint 1 — Hub minimal viable (J1–J3) — 1 dev, 0 déploiement Vercel

| # | Tâche | Fichier | Commande | Valid. |
|---|---|---|---|---|
| 1.1 | Créer `crew-orchestrator.py` (dérivé `proactivite-20-20-continue.py`, ajouter crew routing §3.3) | `~/.hermes/scripts/crew-orchestrator.py` | `cp ~/.hermes/scripts/proactivite-20-20-continue.py ~/.hermes/scripts/crew-orchestrator.py` puis patch 60l | `python3 ~/.hermes/scripts/crew-orchestrator.py \| tail -n 20` → GO/STOP + CREW_ORCHESTRATEUR.json |
| 1.2 | Créer endpoint hub | `~/ai-empire/src/app/api/crew/orchestrator/route.ts` | `mkdir -p ~/ai-empire/src/app/api/crew/orchestrator` + write §3.4 | `curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/crew/orchestrator?task=status` → lemme GO |
| 1.3 | Réactiver SOS outreach | `~/.hermes/cron/jobs.json` | `hermes cron enable sos-outreach-auto-quotidien` (09:00 5/j) | `hermes cron list \| grep sos` → enabled true |
| 1.4 | Vérifier health 17/17 | `orchestrateur-health.py` | `python3 ~/.hermes/scripts/orchestrateur-health.py` | 17/17 VERT |
| 1.5 | Vérifier audit 28/28 | `orchestrateur-audit.py` | `python3 ~/.hermes/scripts/orchestrateur-audit.py` | 28/28 VERT_J1 |
| 1.6 | Enregistrer crons hub | Hermes | `hermes cron create --no-agent --script crew-orchestrator.py --schedule "0 */6 * * *"` | `hermes cron list \| grep crew` |
| 1.7 | Tester lemme STOP | `crew-orchestrator.py` | forcer 1 ROUGE (ex: renommer temporairement `sos-facture/landing/index.html`) → vérifier STOP | `cat ~/evolution-continue/CREW_ORCHESTRATEUR.json \| grep verdict` → STOP |

**Sortie Sprint 1:** hub GO/STOP en 6h, health 5min + audit 9h + gateway watch intacts, SOS outreach relancé, endpoint hub répond.

#### Sprint 2 — Crew prompts + consolidation Vercel (J4–J7)

| # | Tâche | Fichier | Détail |
|---|---|---|---|
| 2.1 | Injecter 5 prompts crew dans `templates.ts` | `~/ai-empire/src/lib/agents/templates.ts` | Ajouter `systemPrompt` v4 pour `content-creator-v3` (Info+Ecom), `seo-specialist-v3` (SaaS-MRR), `data-analyst-v3` (Flip), `sales-agent` (SOS) — voir §2.2–2.6. `version: 4 → 5`, `score: 9.99` conservé. |
| 2.2 | Ajouter `NEW_CAPABILITIES` crew | `~/ai-empire/src/app/api/cron/self-evolution/route.ts` | Étendre `NEW_CAPABILITIES` avec `SaaS-MRR: ['Webhook idempotent','IndexNow','MRR tracking']` etc. |
| 2.3 | Consolider `vercel.json` 12→4 | `~/ai-empire/vercel.json` | Remplacer 12 par 4 (§3.4 cible). Garder `seo-monitor 06:00`, `daily-seo 07:00`, `daily-marketing 08:00`, `crew/orchestrator 0 */6`. Le reste est Hermes. |
| 2.4 | Vérifier build | `package.json` | `npm run build` (prisma generate + db push + next build) — doit passer. |
| 2.5 | Tester hub après build | `crew-orchestrator.py` | Re-run → toujours GO si health VERT. |

**Sortie Sprint 2:** 5 agents avec prompts versionnés, Vercel allégé (respect limite Hobby si besoin), build vert.

#### Sprint 3 — 100% continu (J8–J14) — viser TOP-1

| # | Tâche | KPI | Preuve |
|---|---|---|---|
| 3.1 | Tenir 7 jours consécutifs 17/17 + 28/28 | 7× `orchestrateur-health 17/17` + 7× `orchestrateur-audit 28/28` | `orchestrateur-empire/preuves/health-YYYYMMDD.json` 7 fichiers |
| 3.2 | Sortir 1er deal (flip GO >15€ OU SOS 350€) | `capital-tracker.py` 60→75 VERT réel | `capital-state.json` FI >0 + `Order completed` |
| 3.3 | Publier 7 articles blog auto | `auto-blog` + `ai-empire-article-quotidien` | `ls ~/ai-empire/src/app/blog/*/page.tsx` 7 new slugs |
| 3.4 | Affiliation 3 sources VERT réel | `tracker.json` ≥50€ | `cat ~/empire-financier/affiliation/tracker.json` |
| 3.5 | Trafic organique #1 | `TRAFIC_SANS_X_REPORT.json` sessions #1 | rapport comparatif |
| 3.6 | Lemme STOP testé en prod | 1 STOP simulé → auto-patch → GO en <6h | `CREW_ORCHESTRATEUR.json` history |

**Sortie Sprint 3:** 100% continu démontré sur 7j, 1er € encaissé, trafic #1 ou trajectoire.

#### Sprint 4 — Échelle (J15+) — automation hub évolué

- Outreach SOS 5/j → 30 prospects épuisés → générer `prospects-30-v2.csv` (30 nouveaux, même format, source LBC/Insee).
- Flip 1/j → 7/mois → capital 30% → FI 360k€ trajectoire `plan-amorcage.md` 90j×15€.
- Info PDF v2 (up-sell 49€ template 11e "Orchestrateur 20/20" déjà en place) — scaler via `ai-empire` templates page.
- Ecom POD: SPOKE.lv → 1ère commande test POD (0 stock, flux Stripe→SPOKE).
- Hub auto-évolution: `self-evolution 0 4 * * *` + `crew-orchestrator 0 */6` → score templates 9.99 maintenu, NEW_CAPABILITIES auto-incrémentées si <9.0.

### 5.3 Risques & parades

| Risque | Parade |
|---|---|
| Vercel Hobby limite 2 crons bloque 4 | Rester en 12 tant que Pro, ou basculer tout en Hermes (gratuit) et garder 2 Vercel (seo+marketing) |
| Hermes gateway down | `infra-gateway-watch */5` + `infra-health */15` auto-restart ; hub STOP bloque scale |
| Twilio FR non validé (appel) | Hub P1 APPEL → `appel-a-ta-place.py` relance J3 10h, sinon OVH fallback `appel-autonome-ovh.py` |
| Prospects 30 épuisés | Générer v2 via même scraper LBC (respect 75km) — jamais acheter de base |
| Build `prisma db push` fail local | Vercel a DATABASE_URL prod → build OK en CI ; local: `DATABASE_URL` remote ou skip push |
| Faux-positif audit éthique | `audit-info.json` 15pts bloquant + `EMPIRE_AUDIT_LOOP.json` alerts — placeholder honnête, jamais supprimer page |

### 5.4 Checklist GO — avant de coder

- [ ] `cat ~/ai-empire/docs/virtual-team-crew-100.md` lu + validé par user
- [ ] `python3 ~/.hermes/scripts/orchestrateur-health.py` → 17/17 VERT
- [ ] `python3 ~/.hermes/scripts/orchestrateur-audit.py` → 28/28 VERT_J1
- [ ] `hermes cron list` → 30 jobs, gateway watch enabled
- [ ] `cat ~/ai-empire/vercel.json` → 12 crons (état avant)
- [ ] Branche `main` protégée — 1 approval required (AGENTS.md) — prévoir PR pour `vercel.json` + `route.ts`

---

## 6. Annexes — commandes rejouables & garde-fous

### 6.1 Commandes preuves (copier-coller)

```bash
# Inventaire existant
ls -R ~/ai-empire/docs/agents-launch | head -n 40
ls ~/ai-empire/src/app/api/cron/*/*.ts | xargs -I {} echo {}
cat ~/ai-empire/vercel.json | python3 -m json.tool
grep -E "id:|role:" ~/ai-empire/src/lib/agents/templates.ts
cat ~/ai-empire/src/lib/agents/templates.ts | grep -A2 "capabilities:"
cat ~/.hermes/cron/jobs.json | python3 -c "import json; d=json.load(open('/data/data/com.termux/files/home/.hermes/cron/jobs.json')); print('\n'.join(j['name'] for j in d['jobs']))"

# Health / audit / proactivité
python3 ~/.hermes/scripts/empire-financier-health.py | tail -n 20
python3 ~/.hermes/scripts/orchestrateur-health.py | tail -n 25
python3 ~/.hermes/scripts/empire-financier-audit.py | tail -n 20
python3 ~/.hermes/scripts/orchestrateur-audit.py | tail -n 25
python3 ~/.hermes/scripts/capital-tracker.py | tail -n 20
python3 ~/.hermes/scripts/proactivite-20-20-continue.py | tail -n 30
python3 ~/.hermes/scripts/evolution-continue-controleur.py | tail -n 30
cat ~/evolution-continue/PROACTIVITE_CONTINUE.json | python3 -m json.tool | head -n 60
cat ~/orchestrateur-empire/preuves/health-orchestrateur.json | python3 -m json.tool | head -n 60

# Noyau / financier
cat ~/NOYAU_ORCHESTRATEUR.md | head -n 60
cat ~/EMPIRE_FINANCIER_PRODUIT_FINI.md | head -n 60
cat ~/EMPIRE_FINANCIER_AUDIT.json | python3 -m json.tool | head -n 40
cat ~/empire-financier/info/audit-info.json | python3 -m json.tool | head -n 30
cat ~/empire-financier/affiliation/tracker.json | python3 -m json.tool
ls -lh ~/empire-financier/info/Pack-Flip-Zero-Stock-100.pdf ~/sos-facture/landing/index.html ~/ecommerce-top1/ANALYSE_CHIRURGICALE.md ~/ecommerce-top1/boutique/index.html

# Hub (après Sprint 1)
python3 ~/.hermes/scripts/crew-orchestrator.py | tail -n 30
cat ~/evolution-continue/CREW_ORCHESTRATEUR.json | python3 -m json.tool
hermes cron list | grep -E "crew|health|audit|proactivite"
curl -H "Authorization: Bearer $CRON_SECRET" https://ai-empire-steel.vercel.app/api/cron/status | python3 -m json.tool
curl -H "Authorization: Bearer $CRON_SECRET" https://ai-empire-steel.vercel.app/api/crew/orchestrator?task=status | python3 -m json.tool

# Build / deploy (ne pas exécuter dans ce plan)
cd ~/ai-empire && npm run build
cd ~/ai-empire && npx vercel --prod --yes  # seulement après PR approved
```

### 6.2 Fichiers absolus — index complet

```
# Docs virtual-team existants (usine)
~/ai-empire/docs/agents-launch/discord-structure.md
~/ai-empire/docs/agents-launch/dm-templates.md
~/ai-empire/docs/agents-launch/email-sequences.md
~/ai-empire/docs/agents-launch/linkedin-post.md
~/ai-empire/docs/agents-launch/product-hunt.md
~/ai-empire/docs/agents-launch/reddit-posts.md
~/ai-empire/docs/agents-launch/social-content.md
~/ai-empire/docs/agents-launch/twitter-thread.md
~/ai-empire/docs/launch/devto-article.md
~/ai-empire/docs/launch/hackernews.md
~/ai-empire/docs/launch/producthunt.md
~/ai-empire/docs/launch/reddit-webdev.md
~/ai-empire/docs/launch/twitter-thread.md
~/ai-empire/docs/marketing/7-day-plan.md
~/ai-empire/docs/traffic/TRAFIC_SANS_X.md
~/ai-empire/docs/traffic/TRAFIC_SANS_X_REPORT.json

# Cron routes (12 Vercel)
~/ai-empire/src/app/api/cron/route.ts
~/ai-empire/src/app/api/cron/daily-marketing/route.ts
~/ai-empire/src/app/api/cron/seo-monitor/route.ts
~/ai-empire/src/app/api/cron/upsell/route.ts
~/ai-empire/src/app/api/cron/send-welcome-sequence/route.ts
~/ai-empire/src/app/api/cron/daily-seo/route.ts
~/ai-empire/src/app/api/cron/weekly-report/route.ts
~/ai-empire/src/app/api/cron/self-evolution/route.ts
~/ai-empire/src/app/api/cron/backup/route.ts
~/ai-empire/src/app/api/cron/retry-webhooks/route.ts
~/ai-empire/src/app/api/cron/health-check/route.ts
~/ai-empire/src/app/api/cron/auto-blog/route.ts
~/ai-empire/src/app/api/cron/status/route.ts

# Agents lib
~/ai-empire/src/lib/agents/templates.ts
~/ai-empire/src/lib/agents/index.ts
~/ai-empire/src/lib/agents/scoring.ts
~/ai-empire/src/lib/agents/monitor.ts
~/ai-empire/src/lib/agents/auto-fix.ts
~/ai-empire/src/lib/agents/self-evolution/route.ts (via api)
~/ai-empire/vercel.json
~/ai-empire/src/lib/agents/content-creator.ts
~/ai-empire/src/lib/agents/seo-specialist.ts
~/ai-empire/src/lib/agents/marketing-expert.ts
~/ai-empire/src/lib/agents/sales-agent.ts
~/ai-empire/src/lib/agents/lead-generator.ts
~/ai-empire/src/lib/agents/voice-agent.ts
~/ai-empire/src/lib/agents/automation-agent.ts

# Empire financier 20/20
~/EMPIRE_FINANCIER_PRODUIT_FINI.md
~/EMPIRE_FINANCIER_100.md
~/EMPIRE_FINANCIER_100_V2.md
~/NOYAU_ORCHESTRATEUR.md
~/ORCHESTRATEUR_EMPIRE_100.md
~/EMPIRE_FINANCIER_AUDIT.json
~/EMPIRE_FINANCIER_AUDIT.md
~/empire-financier/info/Pack-Flip-Zero-Stock-100.pdf
~/empire-financier/info/audit-info.json
~/empire-financier/info/produit-1.md
~/empire-financier/affiliation/tracker.json
~/empire-financier/capital/seuil-fi.json
~/empire-financier/capital/capital-state.json
~/empire-financier/capital/plan-amorcage.md
~/empire-financier/saas/RAPPORT_PILIER1.md
~/empire-financier/flip/RAPPORT_PILIER2.md
~/sos-facture/landing/index.html
~/sos-facture/prospects/prospects-30.csv
~/sos-facture/prospects/appels-orchestres.json
~/ecommerce-top1/ANALYSE_CHIRURGICALE.md
~/ecommerce-top1/boutique/index.html
~/ecommerce-top1/AUDIT_TOP1.json

# Hermes scripts (health/audit/hub)
~/.hermes/scripts/empire-financier-health.py
~/.hermes/scripts/empire-financier-audit.py
~/.hermes/scripts/orchestrateur-health.py
~/.hermes/scripts/orchestrateur-audit.py
~/.hermes/scripts/capital-tracker.py
~/.hermes/scripts/proactivite-20-20-continue.py
~/.hermes/scripts/evolution-continue-controleur.py
~/.hermes/scripts/flip-health-5min.py
~/.hermes/scripts/flip-scraper.py
~/.hermes/scripts/flip-evaluateur.py
~/.hermes/scripts/flip-inbox-scorer.py
~/.hermes/scripts/flip-alert-10min.py
~/.hermes/scripts/sos-outreach-auto.py
~/.hermes/scripts/gateway-watch-simple.sh
~/.hermes/scripts/infra-health.sh
~/.hermes/scripts/crew-orchestrator.py  (NEW — Sprint 1)

# Hub sorties
~/evolution-continue/CREW_ORCHESTRATEUR.json  (NEW)
~/evolution-continue/CREW_ORCHESTRATEUR.md    (NEW)
~/evolution-continue/PROACTIVITE_CONTINUE.json
~/evolution-continue/RAPPORT_FINAL_CONTROLEUR.json
~/orchestrateur-empire/preuves/health-orchestrateur.json
~/orchestrateur-empire/preuves/audit-orchestrateur.json
~/.hermes/cron/jobs.json

# Ce plan
~/ai-empire/docs/virtual-team-crew-100.md
~/ai-empire/src/app/api/crew/orchestrator/route.ts  (NEW — Sprint 1)
```

### 6.3 Garde-fous

- **Ne déploie rien** depuis ce plan — Sprint 1+ seulement après validation user + PR + `npm run build` vert.
- **0 fake** — toute sortie contrôlée par `audit-info.json 100/100` + `EMPIRE_AUDIT_LOOP.json alerts==0`.
- **0 stock** — vérifié `COTE_MAP 96 keys + outbox 4 BLOQUE` + `POD EU SPOKE`.
- **Ne jamais toucher** `stripePriceId live` ni `webhook livraison` dans un auto-patch (règle `empire-audit-loop`).
- **`main` protégée** — 1 approval required (`AGENTS.md`) — toute modif `vercel.json` passe par PR.
- **Lemme STOP non négociable** — `1×ROUGE ou 2×ORANGE = STOP` appliqué au hub comme à chaque pilier.

---

*Plan généré 2026-09-02 — Virtual-Team Crew IA + Automation Hub — 100% continu — 17/17 VERT + 28/28 VERT_J1 + 20/20 VERT — prêt pour Sprint 1 après validation.*
*Prochaine action: `cat ~/ai-empire/docs/virtual-team-crew-100.md | wc -l` → 400+ lignes → GO Sprint 1.*
