# ========================================
# NeuraAPI Product Hunt Launch Script
# ========================================
# Exécute: .\LAUNCH-ALL.ps1
# Puis suis les instructions dans chaque onglet

Write-Host "🚀 NeuraAPI Product Hunt Launch" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Product Hunt
Write-Host "📝 ÉTAPE 1/5: Product Hunt" -ForegroundColor Yellow
Write-Host "Ouverture de Product Hunt..."
Start-Process "https://www.producthunt.com/posts/new"
Write-Host ""
Write-Host "Remplis ces champs:" -ForegroundColor Green
Write-Host "  Name: NeuraAPI"
Write-Host "  Tagline: AI APIs + Premium Next.js Templates in 10 languages"
Write-Host "  Website: https://ai-empire-steel.vercel.app"
Write-Host "  Topics: Developer Tools, Artificial Intelligence, SaaS"
Write-Host ""
Write-Host "Description (copie-colle):" -ForegroundColor Green
Write-Host "  NeuraAPI is a developer platform that makes AI accessible to everyone."
Write-Host "  AI API endpoints (text, code, SEO), Premium Next.js templates,"
Write-Host "  10 languages, real-time chatbot. Built with Next.js 14, Python/FastAPI."
Write-Host "  Starter FREE, Pro EUR19/mo (-30%), Enterprise EUR99/mo."
Write-Host ""
Write-Host "Appuie sur ENTRÉE quand c'est fait..." -ForegroundColor Yellow
Read-Host

# Step 2: Twitter
Write-Host ""
Write-Host "🐦 ÉTAPE 2/5: Twitter" -ForegroundColor Yellow
Write-Host "Ouverture de Twitter avec le tweet pré-rempli..."
Start-Process "https://twitter.com/intent/tweet?text=%F0%9F%9A%80%20I%20just%20launched%20NeuraAPI%20on%20%40ProductHunt!%0A%0AAI%20APIs%20%2B%20Next.js%20Templates%20in%2010%20languages.%0A%0ASupport%20us%3A%20https%3A%2F%2Fwww.producthunt.com%2Fposts%2Fneuraapi%0A%0A%23ProductHunt%20%23AI%20%23NextJS%20%23SaaS"
Write-Host ""
Write-Host "Le tweet est pré-rempli. Clique POST." -ForegroundColor Green
Write-Host "Puis poste les tweets 2-5 depuis docs/product-hunt/content/twitter-thread.txt"
Write-Host ""
Write-Host "Appuie sur ENTRÉE quand c'est fait..." -ForegroundColor Yellow
Read-Host

# Step 3: LinkedIn
Write-Host ""
Write-Host "💼 ÉTAPE 3/5: LinkedIn" -ForegroundColor Yellow
Write-Host "Ouverture de LinkedIn..."
Start-Process "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.producthunt.com%2Fposts%2Fneuraapi"
Write-Host ""
Write-Host "Colle ce post:" -ForegroundColor Green
Write-Host "  I just launched NeuraAPI on Product Hunt!"
Write-Host "  AI API endpoints, Premium Next.js templates, 10 languages."
Write-Host "  Free tier available. Built with Next.js 14, TypeScript, Python/FastAPI."
Write-Host "  https://ai-empire-steel.vercel.app/launch"
Write-Host "  #ProductHunt #AI #NextJS #SaaS"
Write-Host ""
Write-Host "Appuie sur ENTRÉE quand c'est fait..." -ForegroundColor Yellow
Read-Host

# Step 4: Reddit SaaS
Write-Host ""
Write-Host "🤖 ÉTAPE 4/5: Reddit r/SaaS" -ForegroundColor Yellow
Write-Host "Ouverture de Reddit..."
Start-Process "https://www.reddit.com/r/SaaS/submit"
Write-Host ""
Write-Host "Title: I built an AI API platform + Next.js templates in 10 languages" -ForegroundColor Green
Write-Host "Body: Hey r/SaaS! AI API endpoints + Premium Next.js templates + 10 languages."
Write-Host "  Free tier (100 credits/month). Launch offer: Pro at EUR19/month (-30%)."
Write-Host "  Feedback: https://ai-empire-steel.vercel.app/launch"
Write-Host ""
Write-Host "Appuie sur ENTRÉE quand c'est fait..." -ForegroundColor Yellow
Read-Host

# Step 5: Reddit webdev
Write-Host ""
Write-Host "🤖 ÉTAPE 5/5: Reddit r/webdev" -ForegroundColor Yellow
Write-Host "Ouverture de Reddit..."
Start-Process "https://www.reddit.com/r/webdev/submit"
Write-Host ""
Write-Host "Title: I built a multi-language AI API platform with Next.js 14" -ForegroundColor Green
Write-Host "Body: NeuraAPI: AI endpoints + Premium Next.js templates in 10 languages."
Write-Host "  Stack: Next.js 14, TypeScript, Python/FastAPI, PostgreSQL, Stripe."
Write-Host "  Live demo: https://ai-empire-steel.vercel.app"
Write-Host ""
Write-Host "Appuie sur ENTRÉE quand c'est fait..." -ForegroundColor Yellow
Read-Host

# Summary
Write-Host ""
Write-Host "🎉 LANCEMENT TERMINÉ!" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""
Write-Host "5 plateformes publiées:" -ForegroundColor Cyan
Write-Host "  ✅ Product Hunt"
Write-Host "  ✅ Twitter"
Write-Host "  ✅ LinkedIn"
Write-Host "  ✅ Reddit r/SaaS"
Write-Host "  ✅ Reddit r/webdev"
Write-Host ""
Write-Host "Prochaines étapes:" -ForegroundColor Yellow
Write-Host "  - Réponds à TOUS les commentaires dans les 2 premières heures"
Write-Host "  - Partage le lien PH sur tes réseaux"
Write-Host "  - Envoie des DMs à 5 devs pour le feedback"
Write-Host ""
Write-Host "Bonne chance! 🚀" -ForegroundColor Cyan
