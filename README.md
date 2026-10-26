# AI Empire

**Version 1.0.0** — Plateforme SaaS Next.js 14 (App Router) pour l'automatisation marketing, l'IA générative, le commerce Stripe et l'administration.

- Production : https://ai-empire-steel.vercel.app
- Repo : https://github.com/samostheouf/ai-empire
- Stack : Next.js 14.2.35, React 18.3.1, TypeScript 5.6, Prisma 5.22, PostgreSQL, Tailwind 3.4

## Démarrage rapide

```bash
# 1. Cloner
git clone https://github.com/samostheouf/ai-empire.git
cd ai-empire

# 2. Installer
npm install

# 3. Configurer l'environnement
cp .env.example .env.local   # voir docs/USER_GUIDE.md § Variables d'environnement
# remplir DATABASE_URL, SESSION_SECRET, STRIPE_*, OPENAI_API_KEY, etc.

# 4. Base de données
npx prisma generate
npx prisma db push
npm run db:seed

# 5. Lancer
npm run dev
# http://localhost:3000
```

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Serveur de développement Next.js |
| `npm run build` | `prisma generate && next build` |
| `npm run start` | Serveur de production |
| `npm run lint` | ESLint (next lint) |
| `npm test` | Jest (ai, db, schema, csrf, input-validation, luxury-intent) |
| `npm run db:push` | Applique le schéma Prisma |
| `npm run db:seed` | Seed des templates/produits |

## Documentation

- **Notice d'utilisation complète** : [`docs/USER_GUIDE.md`](docs/USER_GUIDE.md)
- Checklist 20/20 : [`docs/CHECKLIST_20.md`](docs/CHECKLIST_20.md)
- Statut projet : [`docs/STATUS.md`](docs/STATUS.md)
- Sécurité : [`SECURITY.md`](SECURITY.md)

## Fonctionnalités principales

- **IA** : chat, génération de code, génération de contenu, SEO assisté (`/api/ai/*`)
- **Stripe** : produits, checkout, webhooks, portail client (`/api/stripe/*`, `/api/checkout`, `/api/webhooks/stripe`)
- **i18n** : routage par locale `[locale]`, dictionnaires synchronisés (`scripts/sync-i18n.mjs`)
- **Admin** : dashboard agents, analytics, commerce, templates, utilisateurs (`/admin/*`)
- **API** : documentation interactive `/api-docs`, routes REST documentées
- **Automatisation** : cron jobs Vercel (luxury-hub, luxury-pricing), agents planifiés

## Déploiement

Déployé automatiquement sur Vercel à chaque push sur `main`. Voir `docs/USER_GUIDE.md` § Déploiement.

## Licence

Projet privé — tous droits réservés.
