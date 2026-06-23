# ============================================
# AI EMPIRE — Copie rapide dans le presse-papier
# Usage: .\copy-content.ps1 reddit
#        .\copy-content.ps1 twitter
#        .\copy-content.ps1 linkedin
#        .\copy-content.ps1 all
# ============================================

param([string]$Platform = "all")

$Contents = @{
    "reddit_title" = "I built a Next.js 14 SaaS template marketplace with AI APIs — looking for honest feedback"
    "reddit_body" = "Hey r/webdev,`n`nI've been working on AI Empire — a collection of production-ready Next.js 14 templates for building SaaS products.`n`nWhat's included:`n- 10 templates (SaaS, e-commerce, blog, portfolio, landing page, dashboard)`n- Groq AI API integration (free tier: 100 credits)`n- Stripe billing (subscriptions + one-time payments)`n- Auth + admin dashboard`n- 10 languages out of the box`n`nTech stack: Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma, Stripe, Resend`n`nWhy I built this:`nMost SaaS projects spend weeks on auth, billing, and boilerplate before writing product code. Each template handles the technical foundation so you can focus on your product.`n`nFree tier available — no credit card required. You can try the AI API immediately.`n`nI'd love honest feedback:`n- What would make this more useful for you?`n- What features are missing?`n- What's the right price point for templates like these?`n`nLink: https://ai-empire-steel.vercel.app`n`nHappy to answer any questions about the tech stack or implementation."
    "twitter_1" = "I shipped a Next.js 14 SaaS template marketplace in 2 weeks.`n`n10 templates. AI APIs built in. Stripe billing. 10 languages.`n`nFree tier. No credit card.`n`nWhat would you pay for in a SaaS template marketplace?`n`nhttps://ai-empire-steel.vercel.app`n`n#NextJS #SaaS #BuildInPublic #JavaScript"
    "twitter_2" = "The hardest part of building a SaaS isn't the product — it's the boilerplate.`n`nAuth. Billing. Dashboard. Email.`n`nI built AI Empire to solve this:`n- 10 Next.js 14 templates`n- Groq AI API (free tier)`n- Stripe billing included`n- 10 languages`n`nCheck it out: https://ai-empire-steel.vercel.app`n`n#WebDev #NextJS #SaaS"
    "twitter_3" = "Behind the numbers:`n`n- 10 templates built`n- 8 AI API endpoints`n- 230 email translations (10 languages)`n- 500 ad campaigns (10 languages)`n- 0$ invested (all free tiers)`n`nBuilding in public with AI Empire`n`nhttps://ai-empire-steel.vercel.app"
    "linkedin" = "I just shipped AI Empire — a SaaS template marketplace built with Next.js 14.`n`nThe problem: every SaaS project starts with weeks of boilerplate (auth, billing, dashboard, email).`n`nThe solution: 10 production-ready templates that handle all of this.`n`nWhat's included:`n- Next.js 14 App Router + TypeScript`n- Groq AI API integration (free tier)`n- Stripe billing (subscriptions + one-time)`n- Auth + admin dashboard`n- 10 languages out of the box`n`nI built this entirely with free tiers (Vercel, Resend, Groq) — zero investment.`n`nIf you're building a SaaS and want to skip boilerplate, check it out: https://ai-empire-steel.vercel.app`n`nWhat features would you want in a SaaS template?"
}

function Copy-Platform($name) {
    $content = $Contents[$name]
    if ($content) {
        $content | Set-Clipboard
        Write-Host "Copie: $name dans le presse-papier" -ForegroundColor Green
    }
}

function Open-Platform($url, $name) {
    Start-Process $url
    Copy-Platform $name
    Write-Host "Ouvert: $url" -ForegroundColor Cyan
}

Write-Host "AI EMPIRE — Contenu copie dans le presse-papier" -ForegroundColor Magenta
Write-Host ""

switch ($Platform) {
    "reddit" {
        Copy-Platform "reddit_title"
        Write-Host "Titre copie. Colle-le dans Reddit." -ForegroundColor Yellow
        Write-Host ""
        Copy-Platform "reddit_body"
        Write-Host "Contenu copie. Colle-le dans le body Reddit." -ForegroundColor Yellow
        Open-Platform "https://www.reddit.com/r/webdev/submit" "reddit_title"
    }
    "twitter" {
        Copy-Platform "twitter_1"
        Write-Host "Tweet 1 copie. Colle-le dans Twitter." -ForegroundColor Yellow
        Open-Platform "https://twitter.com/compose/tweet" "twitter_1"
    }
    "linkedin" {
        Copy-Platform "linkedin"
        Write-Host "Post LinkedIn copie. Colle-le dans LinkedIn." -ForegroundColor Yellow
        Open-Platform "https://www.linkedin.com/feed/new/" "linkedin"
    }
    "all" {
        Write-Host "Contenu pour Reddit, Twitter, LinkedIn copie." -ForegroundColor Green
        Write-Host "Utilise: .\copy-content.ps1 reddit" -ForegroundColor Gray
        Write-Host "         .\copy-content.ps1 twitter" -ForegroundColor Gray
        Write-Host "         .\copy-content.ps1 linkedin" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Termine!" -ForegroundColor Green
