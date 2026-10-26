# AI Empire — Notice d'utilisation (USER GUIDE)

Version 1.0.0 — Dernière mise à jour : 2026-10-26

Ce document est la notice d'utilisation complète du projet **ai-empire**. Il couvre l'installation, la configuration, le déploiement, l'utilisation des fonctionnalités (IA, Stripe, i18n, admin, API) et le dépannage.

---

## 1. Présentation

ai-empire est une application web **Next.js 14 (App Router)** qui combine :

- un site marketing multilingue (pages produits, pricing, blog, FAQ, contact) ;
- des outils d'IA générative (chat, code, contenu, SEO) ;
- un commerce en ligne basé sur **Stripe** (produits, checkout, webhooks, portail client) ;
- un back-office **admin** (agents, analytics, commerce, templates, utilisateurs) ;
- des **agents automatisés** et des **cron jobs** Vercel ;
- une API REST documentée (`/api-docs`).

**Stack technique**

| Couche | Technologie |
|---|---|
| Framework | Next.js 14.2.35 (App Router) |
| UI | React 18.3.1, Tailwind CSS 3.4.14, lucide-react |
| Langage | TypeScript 5.6.3 (strict) |
| ORM | Prisma 5.22.0 |
| Base de données | PostgreSQL (Vercel Postgres) |
| Paiements | Stripe 17.3.1 |
| IA | OpenAI SDK 4.x, Groq, GLM, Gemini (selon clés) |
| Email | Resend 6.x |
| Stockage | Vercel Blob |
| Monitoring | @vercel/speed-insights 2.x, web-vitals |
| Tests | Jest 29.x + ts-jest |
| Déploiement | Vercel (prod auto sur push `main`) |

---

## 2. Prérequis

- **Node.js** 20.x (LTS)
- **npm** 10.x
- **PostgreSQL** 14+ (local ou Vercel Postgres)
- **Git**
- Comptes : Vercel, Stripe, OpenAI (et optionnellement Groq, Resend, Vercel Blob)

---

## 3. Installation

### 3.1 Cloner et installer

```bash
git clone https://github.com/samostheouf/ai-empire.git
cd ai-empire
npm install
```

Le script `postinstall` exécute `prisma generate` automatiquement.

### 3.2 Base de données

```bash
# Appliquer le schéma
npx prisma db push

# (optionnel) Seed des templates/produits
npm run db:seed
```

Pour inspecter la base : `npx prisma studio`.

### 3.3 Lancer en développement

```bash
npm run dev
```

Application disponible sur http://localhost:3000.

---

## 4. Configuration

### 4.1 Variables d'environnement

Créer un fichier `.env.local` à la racine (ou configurer dans Vercel → Settings → Environment Variables). Toutes les variables sont listées ci-dessous.

#### Base de données

| Variable | Requis | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | URL PostgreSQL (pooled) |
| `POSTGRES_URL` | optionnel | Alias Vercel Postgres |
| `PRISMA_DATABASE_URL` | optionnel | URL directe pour Prisma |
| `aiEmpire_DATABASE_URL` / `aiEmpire_POSTGRES_URL` / `aiEmpire_PRISMA_DATABASE_URL` | optionnel | Variantes préfixées projet |

#### Authentification & session

| Variable | Requis | Description |
|---|---|---|
| `SESSION_SECRET` | ✅ | Secret de signature de session (min. 32 chars). Fallback build autorisé. |
| `ADMIN_PASSWORD` | ✅ | Mot de passe admin (login `/admin`) |
| `ADMIN_API_KEY` | optionnel | Clé pour les routes admin API |
| `OWNER_EMAILS` | optionnel | Liste d'emails propriétaires (séparés par virgule) |
| `ADMIN_EMAIL` | optionnel | Email admin pour notifications |

#### Application

| Variable | Requis | Description |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | ✅ | URL publique de l'app (ex. https://ai-empire-steel.vercel.app) |
| `NEXT_URL` | optionnel | URL interne |
| `NODE_ENV` | auto | `development` / `production` |

#### Stripe (commerce)

| Variable | Requis | Description |
|---|---|---|
| `STRIPE_SECRET_KEY` | ✅ (commerce) | Clé secrète Stripe (sk_live_… / sk_test_…) |
| `STRIPE_PUBLISHABLE_KEY` | ✅ (commerce) | Clé publique Stripe (pk_…) |
| `STRIPE_WEBHOOK_SECRET` | ✅ (webhooks) | Secret de signature webhook (whsec_…) |

#### IA

| Variable | Requis | Description |
|---|---|---|
| `OPENAI_API_KEY` | ✅ (IA) | Clé OpenAI |
| `GROQ_API_KEY` | optionnel | Clé Groq (inférence rapide) |
| `GLM_API_KEY` | optionnel | Clé GLM |
| `GEMINI_API_KEY` | optionnel | Clé Google Gemini |
| `NEURA_API_KEY` / `NEURAAPI_KEY` / `NEURAPI_KEY` | optionnel | Clés providers internes |
| `NEXT_PUBLIC_NEURAAPI_KEY` | optionnel | Clé publique (exposée au client) |
| `AI_API_KEY` | optionnel | Clé générique IA |

#### Email

| Variable | Requis | Description |
|---|---|---|
| `RESEND_API_KEY` | optionnel | Clé Resend (envoi d'emails) |
| `EMAIL_FROM` | optionnel | Adresse d'expédition (ex. noreply@ai-empire.com) |

#### Stockage (Vercel Blob)

| Variable | Requis | Description |
|---|---|---|
| `BLOB_READ_WRITE_TOKEN` | optionnel | Token Vercel Blob |

#### Cron / sécurité

| Variable | Requis | Description |
|---|---|---|
| `CRON_SECRET` | ✅ (cron) | Secret pour authentifier les cron jobs (`Authorization: Bearer …`) |

#### eBay (intégration optionnelle)

| Variable | Description |
|---|---|
| `EBAY_ENV` | `sandbox` ou `production` |
| `EBAY_APP_ID`, `EBAY_CERT_ID`, `EBAY_DEV_ID` | Identifiants application eBay |
| `EBAY_RU_NAME` | Redirect URL name |
| `EBAY_REDIRECT_URI` | URI de callback |
| `EBAY_TOKEN_ENCRYPTION_KEY` | Clé de chiffrement des tokens |
| `EBAY_REFRESH_TOKEN`, `EBAY_REFRESH_ENCRYPTED` | Tokens de rafraîchissement |
| `EBAY_PAYMENT_POLICY_ID`, `EBAY_RETURN_POLICY_ID`, `EBAY_FULFILLMENT_POLICY_ID` | IDs de politiques |
| `EBAY_MERCHANT_LOCATION_KEY`, `EBAY_OAUTH_STATE` | Config marchand |

#### Services internes / monitoring

| Variable | Description |
|---|---|
| `CORE_SERVICE_URL`, `BIZ_SERVICE_URL`, `OBS_SERVICE_URL` | URLs de services internes |
| `LOG_LEVEL` | Niveau de log (debug/info/warn/error) |
| `NEXT_PUBLIC_GA_ID` | ID Google Analytics |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID Meta Pixel |
| `GOOGLE_SITE_VERIFICATION` | Code de vérification Google |
| `INDEXNOW_KEY` | Clé IndexNow |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Redis Upstash (rate limiting) |
| `QSTASH_TOKEN`, `QSTASH_URL`, `QSTASH_CURRENT_SIGNING_KEY` | QStash (files d'attente) |

#### Sécurité build

- Ne jamais committer `.env.local` ni de secrets.
- Vérifier avec `grep -R "sk_live\|whsec_" src` avant commit.

---

## 5. Déploiement

### 5.1 Vercel (production)

Le projet est lié au projet Vercel `ai-empire` (team `samilaboulette21-2976`). Chaque push sur `main` déclenche un déploiement automatique.

- URL production : https://ai-empire-steel.vercel.app
- Build command : `prisma generate && next build`
- Framework : Next.js (auto-détecté)
- Cron jobs (`vercel.json`) : `/api/cron/luxury-hub` et `/api/cron/luxury-pricing` à 09:00 UTC.

### 5.2 Déploiement manuel (si besoin)

```bash
# Via Vercel CLI (si installé)
vercel --prod

# Ou via API (token requis)
curl -X POST "https://api.vercel.com/v13/deployments?teamId=team_AkhUHK5QceCtfS9rOx16SLHS" \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"ai-empire","gitSource":{"type":"github","repo":"samostheouf/ai-empire","ref":"main"},"target":"production"}'
```

### 5.3 Variables d'environnement sur Vercel

Vercel → Project → Settings → Environment Variables. S'assurer que les variables sont définies pour `Production`, `Preview` et `Development`.

---

## 6. Utilisation des fonctionnalités

### 6.1 IA (`/api/ai/*`)

| Endpoint | Méthode | Description |
|---|---|---|
| `/api/ai/chat` | POST | Chat conversationnel (OpenAI/Groq selon clé) |
| `/api/ai/code` | POST | Génération de code |
| `/api/ai/generate` | POST | Génération de contenu |
| `/api/ai/seo` | POST | Assistance SEO |

Exemple :

```bash
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Bonjour"}]}'
```

### 6.2 Stripe (commerce)

- Pages : `/pricing`, `/products`, `/products/[slug]`, `/checkout`
- API : `/api/checkout`, `/api/stripe-products`, `/api/webhooks/stripe`, `/api/affiliate`
- Webhook Stripe à configurer vers `https://<domaine>/api/webhooks/stripe` avec `STRIPE_WEBHOOK_SECRET`.
- Back-office commerce : `/admin/commerce`, `/admin/orders`, `/admin/stripe-products`.

### 6.3 i18n (internationalisation)

- Routage par locale : `src/app/[locale]/...`
- Dictionnaires synchronisés via `scripts/sync-i18n.mjs`.
- Locales supportées : voir `src/i18n` / `messages`.
- Ajouter une clé : suivre `.mimocode/command/i18n-key-add.md`.

### 6.4 Administration (`/admin/*`)

Accès protégé par `ADMIN_PASSWORD` (login `/admin`).

| Section | URL | Description |
|---|---|---|
| Dashboard | `/admin` | Vue d'ensemble |
| Agents | `/admin/agents` | Gestion des agents IA |
| Analytics | `/admin/analytics` | Métriques et événements |
| Commerce | `/admin/commerce` | Produits, commandes |
| Templates | `/admin/templates` | Templates de contenu |
| Utilisateurs | `/admin/users` | Gestion des utilisateurs |
| Marketing | `/admin/marketing` | Campagnes |
| Évolution | `/admin/evolution` | Suivi d'évolution |

### 6.5 API & documentation

- Documentation interactive : `/api-docs`
- Santé : `/api/health`, `/api/monitoring`
- Cron : `/api/cron/health-check`, `/api/cron/luxury-hub`, `/api/cron/luxury-pricing`

### 6.6 Agents automatisés

- Exécution : `/api/agents/execute`
- Planification : `/api/agents/schedule`
- Liste : `/api/agents`

---

## 7. Tests

```bash
npm test              # Jest
npx tsc --noEmit      # TypeScript
npm run lint          # ESLint
```

Tests présents : `ai`, `db`, `schema`, `csrf`, `input-validation`, `luxury-intent` (dans `src/lib/__tests__` et `src/lib`).

CI : `.github/workflows/ci.yml` exécute lint + tsc + jest sur push/PR vers `main`.

---

## 8. Monitoring & performance

- **Speed Insights** : package `@vercel/speed-insights` intégré dans le layout racine. Dashboard à activer dans Vercel → Speed Insights (requiert plan Pro pour la version Plus).
- **Core Web Vitals** : composant `SpeedInsights` dans le root layout.
- **Bundle analyzer** : `ANALYZE=true npm run build`.
- **Health checks** : `/api/health`, `/api/monitoring`.

---

## 9. Troubleshooting

### Build échoue sur Vercel

- Vérifier `buildCommand` = `prisma generate && next build`.
- Vérifier que `DATABASE_URL` est défini pour Production.
- Consulter les logs de déploiement (0 erreurs attendus).

### Tests Jest échouent

- Vérifier `jest.config.js` (preset ts-jest, moduleNameMapper `@/` → `src/`).
- Exécuter `npx prisma generate` avant les tests si besoin.

### Stripe webhook non reçu

- Vérifier l'URL webhook dans le dashboard Stripe.
- Vérifier `STRIPE_WEBHOOK_SECRET`.
- Tester avec `stripe listen --forward-to localhost:3000/api/webhooks/stripe`.

### IA ne répond pas

- Vérifier `OPENAI_API_KEY` (ou `GROQ_API_KEY`).
- Consulter les logs serveur (`LOG_LEVEL=debug`).

### i18n : clés manquantes

- Exécuter `node scripts/sync-i18n.mjs`.
- Vérifier les dictionnaires dans `messages/`.

### Speed Insights : pas de données

- Activer le dashboard dans Vercel (Settings → Speed Insights).
- Attendre des visites réelles (hasData=true après trafic).
- Vérifier que `<SpeedInsights />` est dans le root layout.

### Token GitHub absent (push/PR)

- Créer un PAT GitHub (scope `repo`).
- `git remote set-url origin https://<TOKEN>@github.com/samostheouf/ai-empire.git`
- Pousser les changements préparés (`.github/workflows/ci.yml`, `docs/*`).

### PR Dependabot erronée

- Fermer manuellement la PR qui bump `eslint-config-next` ≥ 15 (incompatible Next 14).
- Les majors sont ignorés via `.github/dependabot.yml`.

---

## 10. Structure du projet

```
ai-empire/
├── src/
│   ├── app/                  # App Router (pages, API routes)
│   │   ├── [locale]/         # Pages multilingues
│   │   ├── admin/            # Back-office
│   │   ├── api/              # Routes API (ai, stripe, agents, cron, ...)
│   │   └── ...
│   ├── components/           # Composants React
│   ├── lib/                  # Utilitaires, services, tests
│   └── middleware.ts         # CSP, i18n, auth
├── prisma/                   # Schéma et seed
├── public/                   # Assets statiques
├── scripts/                  # Scripts utilitaires (i18n, launch, ...)
├── docs/                     # Documentation
├── .github/                  # Workflows CI, Dependabot
├── next.config.js
├── package.json
├── tsconfig.json
├── jest.config.js
└── vercel.json
```

---

## 11. Sécurité

- Headers de sécurité (CSP via middleware, HSTS, X-Frame-Options, etc.)
- CSRF Origin/Referer validation
- Session secret fort
- Aucun secret dans le repo
- Voir `SECURITY.md`

---

## 12. Contacts & support

- Propriétaire : samilaboulette21@gmail.com
- Repo : https://github.com/samostheouf/ai-empire
- Production : https://ai-empire-steel.vercel.app
