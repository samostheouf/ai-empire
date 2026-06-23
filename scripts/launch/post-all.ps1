# ============================================
# AI EMPIRE — Post Social Media (1-Click)
# Ouvre les 3 pages + copie le contenu
# ============================================

param(
    [string]$Platform = "all"
)

# === CONTENUS ===
$RedditTitle = "I built a Next.js 14 SaaS template marketplace with AI APIs — looking for honest feedback"
$RedditBody = @"
Hey r/webdev,

I've been working on AI Empire — a collection of production-ready Next.js 14 templates for building SaaS products.

What's included:
- 10 templates (SaaS, e-commerce, blog, portfolio, landing page, dashboard)
- Groq AI API integration (free tier: 100 credits)
- Stripe billing (subscriptions + one-time payments)
- Auth + admin dashboard
- 10 languages out of the box

Tech stack: Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma, Stripe, Resend

Why I built this:
Most SaaS projects spend weeks on auth, billing, and boilerplate before writing product code. Each template handles the technical foundation so you can focus on your product.

Free tier available — no credit card required. You can try the AI API immediately.

I'd love honest feedback:
- What would make this more useful for you?
- What features are missing?
- What's the right price point for templates like these?

Link: https://ai-empire-steel.vercel.app

Happy to answer any questions about the tech stack or implementation.
"@

$TwitterTweet1 = @"
I shipped a Next.js 14 SaaS template marketplace in 2 weeks.

10 templates. AI APIs built in. Stripe billing. 10 languages.

Free tier. No credit card.

What would you pay for in a SaaS template marketplace?

https://ai-empire-steel.vercel.app

#NextJS #SaaS #BuildInPublic #JavaScript
"@

$TwitterTweet2 = @"
The hardest part of building a SaaS isn't the product — it's the boilerplate.

Auth. Billing. Dashboard. Email.

I built AI Empire to solve this:
- 10 Next.js 14 templates
- Groq AI API (free tier)
- Stripe billing included
- 10 languages

Check it out: https://ai-empire-steel.vercel.app

#WebDev #NextJS #SaaS
"@

$TwitterTweet3 = @"
Behind the numbers:

- 10 templates built
- 8 AI API endpoints
- 230 email translations (10 languages)
- 500 ad campaigns (10 languages)
- 0$ invested (all free tiers)

Building in public with AI Empire

https://ai-empire-steel.vercel.app
"@

$LinkedInPost = @"
I just shipped AI Empire — a SaaS template marketplace built with Next.js 14.

The problem: every SaaS project starts with weeks of boilerplate (auth, billing, dashboard, email).

The solution: 10 production-ready templates that handle all of this.

What's included:
- Next.js 14 App Router + TypeScript
- Groq AI API integration (free tier)
- Stripe billing (subscriptions + one-time)
- Auth + admin dashboard
- 10 languages out of the box

I built this entirely with free tiers (Vercel, Resend, Groq) — zero investment.

If you're building a SaaS and want to skip boilerplate, check it out: https://ai-empire-steel.vercel.app

What features would you want in a SaaS template?
"@

# === FONCTIONS ===
function Open-And-Wait($url, $content, $instructions) {
    Write-Host ""
    Write-Host "=== $instructions ===" -ForegroundColor Cyan
    Write-Host "Ouverture de: $url" -ForegroundColor Yellow
    Start-Process $url
    Start-Sleep -Seconds 3
    
    # Copier dans le presse-papier
    $content | Set-Clipboard
    Write-Host "Contenu copie dans le presse-papier!" -ForegroundColor Green
    Write-Host "Colle-le dans le formulaire et publie." -ForegroundColor Gray
    Write-Host ""
    Read-Host "Appuie sur Entree quand c'est fait"
}

# === EXÉCUTION ===
Write-Host ""
Write-Host "=========================================" -ForegroundColor Magenta
Write-Host "  AI EMPIRE — Post Social Media" -ForegroundColor Magenta
Write-Host "=========================================" -ForegroundColor Magenta
Write-Host ""

if ($Platform -eq "reddit" -or $Platform -eq "all") {
    Open-And-Wait "https://www.reddit.com/r/webdev/submit" $RedditTitle "`n1. REDDIT — Colle le titre + contenu"
    # Pour Reddit, on met le titre ET le body
    $RedditTitle | Set-Clipboard
    Write-Host "Titre copie. Ensuite, colle le contenu ci-dessous dans le body :" -ForegroundColor Yellow
    Write-Host ""
    Write-Host $RedditBody -ForegroundColor DarkGray
    Write-Host ""
    $RedditBody | Set-Clipboard
    Write-Host "Contenu copie dans le presse-papier !" -ForegroundColor Green
    Read-Host "Appuie sur Entree quand c'est publie"
}

if ($Platform -eq "twitter" -or $Platform -eq "all") {
    Open-And-Wait "https://twitter.com/compose/tweet" $TwitterTweet1 "`n2. TWITTER — Tweet 1/3"
    $TwitterTweet2 | Set-Clipboard
    Write-Host "Tweet 2 copie !" -ForegroundColor Green
    Read-Host "Publie le Tweet 2, puis Entree"
    $TwitterTweet3 | Set-Clipboard
    Write-Host "Tweet 3 copie !" -ForegroundColor Green
    Read-Host "Publie le Tweet 3, puis Entree"
}

if ($Platform -eq "linkedin" -or $Platform -eq "all") {
    Open-And-Wait "https://www.linkedin.com/feed/new/" $LinkedInPost "`n3. LINKEDIN — Colle le post"
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Green
Write-Host "  TERMINÉ !" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Contenu publie sur:" -ForegroundColor Cyan
if ($Platform -eq "reddit" -or $Platform -eq "all") { Write-Host "  Reddit (r/webdev)" -ForegroundColor White }
if ($Platform -eq "twitter" -or $Platform -eq "all") { Write-Host "  Twitter (3 tweets)" -ForegroundColor White }
if ($Platform -eq "linkedin" -or $Platform -eq "all") { Write-Host "  LinkedIn" -ForegroundColor White }
Write-Host ""
Read-Host "Appuie sur Entree pour fermer"
