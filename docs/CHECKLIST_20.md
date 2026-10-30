# Check-list 20/20 — ai-empire (Next.js 16.4.3)

## Qualité (4)
1. Build Vercel READY (prod) — OK
2. TypeScript strict compile — OK (npx tsc --noEmit)
3. ESLint sans erreur — OK (0 errors, warnings only)
4. Tests unitaires verts (jest) — OK (35 tests, 7 suites)

## Cohérence (4)
5. package.json / lock cohérents — OK
6. Contact form fonctionnel (POST /api/contact + feedback) — OK
7. i18n clés synchronisées — OK (10 locales, routes /[locale]/*)
8. Middleware edge-safe — OK

## Sécurité (4)
9. Headers sécurité (CSP, HSTS, X-Frame-Options...) — OK
10. CSRF Origin/Referer — OK
11. Session secret fort + fallback build — OK
12. Aucun secret ni PII dans le repo — OK (fichiers fiscaux retirés)

## Efficacité (4)
13. Speed Insights code + package — OK (dashboard à activer manuellement)
14. Core Web Vitals composant — OK
15. Cache headers ISR — OK
16. Checkout vérifié server-side (Stripe payment_status) — OK

## Conformité (4)
17. Cookie consent RGPD — OK
18. security.txt publié — OK
19. Analytics anonymisées (hash visitorId) — OK
20. Kanban tâches créées — OK
