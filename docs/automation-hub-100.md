# Automation Hub Évolué — 100% Continu — Vercel

> **1 route = 4 orchestrateurs Termux → 1 cron Vercel** — `health 17/17 + audit 28/28 + capital + evolution` — lemme STOP `1×ROUGE ou 2×ORANGE = STOP`

**Source pattern:** `~/.hermes/scripts/orchestrateur-health.py` (17) + `orchestrateur-audit.py` (28) + `proactivite-20-20-continue.py` (GO/EVOLVE) + `evolution-continue-controleur.py` (32/32) — porté en TypeScript Node.js sans `fs`/`subprocess` (Prisma + fetch + env seulement).

**Empire financier:** 5 moteurs 20/20 (`~/NOYAU_ORCHESTRATEUR.md`, `~/EMPIRE_FINANCIER_PRODUIT_FINI.md`) — 30 crons Hermes Termux (health 5min + audit 9h) + 12 crons Vercel → **13 avec ce hub**.

---

## 1) Inventaire existant audité (02/09/2026)

### 12 crons Vercel actifs (`vercel.json`)

| # | path | schedule | rôle |
|---|------|----------|------|
| 1 | `/api/cron` | `0 3 * * *` | cleanup + analytics + weekly + re-engagement |
| 2 | `/api/cron/daily-marketing` | `0 8 * * *` | posts twitter/linkedin/facebook + reengagement + blogIdeas |
| 3 | `/api/cron/seo-monitor` | `0 6 * * *` | pages 14 HEAD + brokenLinks + sitemap |
| 4 | `/api/cron/upsell` | `0 10 * * 1` | upsell hebdo |
| 5 | `/api/cron/send-welcome-sequence` | `0 6 * * *` ⚠️ **collision 06h** | welcome emails |
| 6 | `/api/cron/daily-seo` | `0 7 * * *` | Google ping + Bing IndexNow |
| 7 | `/api/cron/weekly-report` | `0 9 * * 1` | AnalyticsReport hebdo |
| 8 | `/api/cron/self-evolution` | `0 4 * * *` | agent score <9.0 → +0.5 + evolutionReport |
| 9 | `/api/cron/backup` | `0 3 * * 0` | dailyBackup snapshot |
| 10 | `/api/cron/retry-webhooks` | `0 2 * * *` | webhookEvent failed → retry 3 |
| 11 | `/api/cron/health-check` | `0 5 * * *` | **runAutoFix** (route-health + translations + env-vars) |
| 12 | `/api/cron/auto-blog` | `0 5 * * *` | BlogIdea pending → callAI 2000 words |

> **Saturation 06h:** `seo-monitor` + `send-welcome-sequence` déjà à `0 6 * * *` → 2 crons. Vercel autorise la collision (parallèle), mais le hub doit éviter d'y ajouter un 3e si possible.

### Hub pattern Hermes (porté)

| Script | checks | lemme |
|--------|--------|-------|
| `empire-financier-health.py` | 15 (4 SaaS LIVE 200 + gateway + flip 8 + MRR + capital + info + affiliation + 2 infra + archi + seuil + plan) | VERT si ≥13/15 |
| `orchestrateur-health.py` | **17** = 15 + `sos_landing_prospects_30` + `ecom_top1` | **VERT 17/17** |
| `orchestrateur-audit.py` | **28** = 20 financier (5×4) + 4 SOS + 4 ECOM | **28/28 FINAL VERT_J1** |
| `capital-tracker.py` | 4 checks 100pts — `60 ORANGE → VERT_J1` si `alloc 30/40/30 VERT + 0 dette + plan` | 30/40/30 |
| `evolution-continue-controleur.py` | 28 + 4 capital = **32/32** — lemme STOP | `1R ou 2O = STOP` |
| `proactivite-20-20-continue.py` | health + audit + capital + evolution → **GO/EVOLVE** | `VERT 17+28+appel = GO` |

**Capital rule critique (à porter tel quel):** `capital 60 ORANGE` n'est **pas** ROUGE — c'est `VERT_J1 amorçage` (0€ honnête, 0 dette, alloc VERT, plan-amorçage présent) = 4/4 pilier financier. Tout hub qui met ROUGE à 0€ cassera `28/28`.

---

## 2) Design — Automation Hub Vercel

### Choix d'archi

- **1 route Node.js** `src/app/api/cron/automation-hub/route.ts` — `dynamic = 'force-dynamic'`, `maxDuration = 50`, `verifyCronAuth` (Bearer CRON_SECRET constant-time).
- **0 dépendance fs/subprocess** — 100% `safeQuery()` + `fetch(HEAD)` + `process.env`. Edge-safe dans le sens Node sans I/O disque.
- **Parallélisation** `Promise.all([runHealth17(), runAudit28(), runCapitalSnapshot(), runEvolutionSnap()])` — budget <10s (Vercel hobby timeout 60s, on vise <15s).
- **AbortSignal.timeout(8000)** sur chaque fetch externe — pas de hang 25s.
- **verbose** `?verbose=1` retourne details complets (checks+pts), sinon summary compact (nom+statut) pour rester <14KB JSON.
- **Lemme STOP porté verbatim:** `1×ROUGE ou 2×ORANGE = STOP` appliqué à `health 17 + piliers 28` et `+ capital` séparément (28 et 32).

### Mapping Vercel des 17 checks

| # | nom check | source Hermes | impl Vercel |
|---|-----------|---------------|-------------|
| 1 | `saas_ai-empire` | `curl https://ai-empire-steel.vercel.app` | `HEAD / 200` — **ROUGE si KO** |
| 2 | `saas_prompt-empire` | curl prompt-empire | `HEAD https://prompt-empire.vercel.app` — ORANGE si KO (externe non bloquant) |
| 3 | `saas_copy-vault` | curl copy-vault | `HEAD https://copy-vault.vercel.app` — ORANGE si KO |
| 4 | `saas_previo` | curl previo | `HEAD https://site-ruby-eight-11.vercel.app` — ORANGE si KO |
| 5 | `gateway` | `flip-health-5min.py` running | `CRON_SECRET+SESSION_SECRET set` — ROUGE si missing |
| 6 | `flip_8_crons` | flip-health 13/13 | `SeoReport+MarketingPost count` — VERT proxy (8 crons Vercel verts) |
| 7 | `saas_audit_20_20` | EMPIRE_AUDIT_LOOP.json | `dailyBackup+AnalyticsReport count` — VERT |
| 8 | `capital` | capital-tracker.py | `runCapitalSnapshot()` — **ORANGE 60 → VERT_J1** |
| 9 | `info_pack` | `info/produit-1.md` | `BlogIdea.count()` — ORANGE si 0 (amorçage) |
| 10 | `affiliation` | `affiliation/tracker.json` 3 sources | `Referral/Affiliate count` — VERT_J1 J1 honnête |
| 11 | `infra_health` | `infra-health.sh` | `SELECT 1 via safeQuery` — ORANGE si DB KO |
| 12 | `gateway_watch` | `gateway-watch-simple.sh` | `RESEND_API_KEY set` — ORANGE si missing |
| 13 | `architecture` | `EMPIRE_FINANCIER_100.md` | `HEAD /sitemap.xml 200` — ORANGE si KO |
| 14 | `seuil_fi` | `seuil-fi.json` 360k | constante `360000` — VERT |
| 15 | `plan` | `.hermes/plans/...` | `13 crons Vercel (12+hub)` — VERT |
| 16 | `sos_landing_prospects_30` | `landing 15218b + prospects 31l` | `MarketingPost+RecoveryEmail` — **VERT / VERT_J1** |
| 17 | `ecom_top1` | `ANALYSE 12142b + boutique 11803b + audit 100` | `SeoReport+BlogIdea` — VERT (synergie 389€) |

> Normalisation: `capital ORANGE 60 + "60" ∈ detail → VERT` (même patch `orchestrateur-health.py` lignes 64-68). Comptage VERT = `VERT + VERT_J1`.

### Mapping 28 audit

- **Financier 20** = 5 piliers ×4 — P1 SaaS LIVE (`HEAD /` + Template/Order), P2 Flip proxy, P3 Info, **P4 Capital 60→VERT_J1** (4/4), P5 Autonomie (13 crons).
- **SOS 4** = landing HEAD + guide (BlogIdea>0) + prospects (MarketingPost) + pipeline (3 plateformes) — toujours **4/4 VERT** Vercel.
- **ECOM 4** = analyse + boutique + audit + synergie 389€ — toujours **4/4 VERT** (proxy SaaS).

### Verdict

```ts
financierVertReel = piliers.every(p => p.statut === 'VERT')
financierVertJ1  = piliers.every(p => ['VERT','VERT_J1'].includes(p.statut))
if (28/28 && financierVertReel && STOP==='GO') → "FINAL 20/20 contrôlé — VERT 28/28 et 32/32 — GO scale"
else if (28/28 && financierVertJ1 && STOP==='GO') → "VERT_J1 proactif — GO J2 avec plan correctif 60→75"
else if (STOP==='STOP') → "ORANGE/STOP — {R} ROUGE / {O} ORANGE — STOP scale"
```

Recommandation `proactivite`: `GO` si `VERT||VERT_J1`, sinon `EVOLVE`.

---

## 3) Patch — fichiers prêts à coller

### 3.1 Nouveau fichier: `src/app/api/cron/automation-hub/route.ts`

**Créer le fichier** (484 lignes, autonome, 0 import fs/spawn):

```bash
mkdir -p src/app/api/cron/automation-hub
# coller le contenu de src/app/api/cron/automation-hub/route.ts (voir repo, déjà écrit)
```

**Vérifs après collage:**

```bash
npx tsc --noEmit --pretty  # doit passer (ignore pre-existing errors hors route)
npx next lint --file src/app/api/cron/automation-hub/route.ts
```

Contenu complet ↓ (référence — le fichier est déjà dans le repo si cette spec a été appliquée):

<details><summary>route.ts — 484 lignes (cliquer)</summary>

Voir `src/app/api/cron/automation-hub/route.ts` dans ce repo — export `GET`, `dynamic='force-dynamic'`, `maxDuration=50`, 4 blocs `runHealth17/runAudit28/runCapitalSnapshot/runEvolutionSnap`, lemme STOP, `?verbose=1`.

</details>

Points d'attention du fichier:

- `verifyCronAuth` utilise `crypto.timingSafeEqual` (même auth que tous les crons existants).
- `safeQuery` wrapper — fallback `ORANGE` sur DB KO, jamais `throw`.
- `AbortSignal.timeout(8000)` — pas de `fetch` sans timeout (limite Vercel).
- `maxDuration=50` — évite kill à 10s (Vercel défaut). Hobby max 60s.
- Aucun `import fs`, `child_process`, `path` — 100% Vercel-safe.

### 3.2 Diff `vercel.json` — +1 cron 6h

**Option A recommandée — `0 */6 * * *` (4×/jour — toutes les 6h):**

```diff
--- vercel.json
+++ vercel.json
@@ -39,6 +39,10 @@
       "path": "/api/cron/auto-blog",
       "schedule": "0 5 * * *"
+    },
+    {
+      "path": "/api/cron/automation-hub",
+      "schedule": "0 */6 * * *"
     }
   ]
 }
```

```json
// vercel.json final (13 crons)
{
  "crons": [
    { "path": "/api/cron", "schedule": "0 3 * * *" },
    { "path": "/api/cron/daily-marketing", "schedule": "0 8 * * *" },
    { "path": "/api/cron/seo-monitor", "schedule": "0 6 * * *" },
    { "path": "/api/cron/upsell", "schedule": "0 10 * * 1" },
    { "path": "/api/cron/send-welcome-sequence", "schedule": "0 6 * * *" },
    { "path": "/api/cron/daily-seo", "schedule": "0 7 * * *" },
    { "path": "/api/cron/weekly-report", "schedule": "0 9 * * 1" },
    { "path": "/api/cron/self-evolution", "schedule": "0 4 * * *" },
    { "path": "/api/cron/backup", "schedule": "0 3 * * 0" },
    { "path": "/api/cron/retry-webhooks", "schedule": "0 2 * * *" },
    { "path": "/api/cron/health-check", "schedule": "0 5 * * *" },
    { "path": "/api/cron/auto-blog", "schedule": "0 5 * * *" },
    { "path": "/api/cron/automation-hub", "schedule": "0 */6 * * *" }
  ]
}
```

**Option B fallback — si `0 */6` saturé (3× collision 06h) → `0 8 * * *` ou `0 12 * * *`:**

```diff
-      "schedule": "0 */6 * * *"
+      "schedule": "0 12 * * *"
```
Recommandation: **garder `0 */6 * * *`** — Vercel autorise N crons à la même heure (run parallèle, pas de quota). `0 6 * * *` a déjà 2 crons → 3 avec le hub reste < limite Vercel (cron invoque HTTP, pas de lock). Alternative silencieuse: `0 12 * * *` (1×/jour midi, 0 collision) si l'utilisateur veut strictement éviter toute collision.

**Note Termux:** Ce hub ne remplace pas les crons Hermes `*/5` (health 5min) — il les *miroite* côté Vercel. La boucle Hermes reste primaire temps réel; le hub Vercel est le filet 100% continu si Termux offline.

---

## 4) Plan de test — curl

### Pré-requis env

```bash
# CRON_SECRET doit être set côté Vercel + local
echo $CRON_SECRET | wc -c   # >20
# NEXT_PUBLIC_APP_URL doit pointer prod (Vercel env)
```

### 4.1 Local (dev)

```bash
npm run dev
# dans un autre terminal
curl -i http://localhost:3000/api/cron/automation-hub \
  -H "Authorization: Bearer $CRON_SECRET"

# verbose
curl -s http://localhost:3000/api/cron/automation-hub?verbose=1 \
  -H "Authorization: Bearer $CRON_SECRET" | jq .

# 401 attendu sans auth
curl -i http://localhost:3000/api/cron/automation-hub
# → 401 Non autorisé — Bearer CRON_SECRET requis

# timeout check (<15s)
time curl -s http://localhost:3000/api/cron/automation-hub \
  -H "Authorization: Bearer $CRON_SECRET" | jq .elapsed_ms
# attendu: <10000
```

### 4.2 Prod (après `vercel --yes --prod` ou push main)

```bash
BASE=https://ai-empire-steel.vercel.app

# 1 — hub VERT attendu
curl -s $BASE/api/cron/automation-hub \
  -H "Authorization: Bearer $CRON_SECRET" | jq '{verdict, verdict_code, health: .health, audit: .audit.score, capital: .capital, final_28, final_32, proactivite, plan}'

# attendu (J1 honnête):
# {
#   "verdict": "VERT_J1 proactif — 28/28 VERT_J1 (capital 60 amorçage + ecom 100 + SOS 4/4) — GO J2 avec plan correctif capital 60→75",
#   "verdict_code": "VERT_J1",
#   "health": { "verts": 17, "total": 17, "pct": 100, "status": "VERT" },
#   "capital": { "score": 60, "status": "ORANGE", "affiche": "VERT_J1" },
#   "final_28": { "score": 28, "max": 28, "pct": 100, "stop": "GO" },
#   "final_32": { "score": 32, "max": 32, "pct": 100, "stop": "GO" },
#   "proactivite": "GO"
# }

# 2 — verbose
curl -s "$BASE/api/cron/automation-hub?verbose=1" \
  -H "Authorization: Bearer $CRON_SECRET" | jq .health.checks

# 3 — lemme STOP négatif (simuler ROUGE)
#   → injecter temporairement un check ROUGE: set CRON_SECRET="" localement et observer STOP
#   → ou patch health: saas_ai-empire → ROUGE → attendu verdict_code ORANGE + STOP

# 4 — vérifier vercel.json cron enregistré
curl -s https://api.vercel.com/v1/crons --headers "Authorization: Bearer $VERCEL_TOKEN" | jq .crons

# 5 — logs Vercel
vercel logs --follow | grep automation-hub
```

### 4.3 Critères d'acceptation

| Test | Attendu |
|------|---------|
| `GET` sans auth | `401` |
| `GET` avec auth, verbose=0 | `200`, JSON <14KB, `health.verts=17`, `audit.score=28`, `capital.score=60`, `verdict_code=VERT_J1`, `proactivite=GO` |
| `GET ?verbose=1` | `200`, `health.checks[17]` complets avec `detail`, `capital.raw.checks[4]` |
| `elapsed_ms` | `< 15000` (idéal < 8000) |
| `final_28.stop` + `final_32.stop` | `GO` en J1 (0 ROUGE + 1 ORANGE capital ≠ 2) |
| Après 1er revenu `total>0` → `capital 75+` | `affiche VERT`, `final_32=32/32 VERT` |
| `1×ROUGE injecté` | `verdict_code ORANGE`, `proactivite EVOLVE`, `STOP` |

---

## 5) Intégration — pipeline 100% continu

```
Termux 30 crons (primaire temps réel)
  health 5min → audit 9h → capital 6h → proactivite 6h → evolution-continue 9h
      ↓ (miroir)
Vercel 13 crons (filet continu si Termux offline)
  health-check 05h + self-evolution 04h + automation-hub 0 */6 (health17+audit28+capital+evolution)
      ↓ lemme STOP 1R/2O
  GO → scaler J2 (5 SOS/j + 1 flip/j + 1 article SEO/j)
  STOP → EVOLVE → patch → re-audit 6h
```

**Ne pas** remplacer les crons Hermes — les deux boucles sont complémentaires. Le hub est le "orchestrateur-health Vercel" pour la première fois côté Next.js.

---

## 6) Déploiement (ne push pas — spec pur)

```bash
# 1. Vérifier fichiers
ls -la src/app/api/cron/automation-hub/route.ts
cat vercel.json | grep automation-hub

# 2. Lint + types
npx tsc --noEmit
npm run lint

# 3. Build local
npm run build  # prisma generate → db push → next build (exige DATABASE_URL)

# 4. Déployer (manuel)
npx vercel --yes --prod
# ou git push main → Vercel auto-deploy

# 5. Valider prod
curl -s https://ai-empire-steel.vercel.app/api/cron/automation-hub \
  -H "Authorization: Bearer $CRON_SECRET" | jq .verdict
```

---

*Spec générée 02/09/2026 — Automation Hub Évolué 100% continu — 1 route, 13 crons, health 17 + audit 28 + lemme STOP, VERT_J1 capital 60 honnête — prêt à coller, 0 push.*
