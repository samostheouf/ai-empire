# ============================================
# AI Empire — Reddit Browser Post (Simple)
# ============================================
# Opens Reddit with title pre-filled in browser.
# No API credentials needed — just log in and post.
# ============================================

param(
    [string]$Subreddit = "webdev",
    [string]$Title = "I built a Next.js 14 SaaS template marketplace with AI APIs - looking for honest feedback"
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  AI EMPIRE — Reddit Browser Post" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# URL-encode the title for the query parameter
Add-Type -AssemblyName System.Web
$encodedTitle = [System.Web.HttpUtility]::UrlEncode($Title)

# Build the Reddit submit URL with pre-filled title
$redditUrl = "https://www.reddit.com/r/$Subreddit/submit?selftext=true&title=$encodedTitle"

Write-Host "Subreddit: r/$Subreddit" -ForegroundColor Yellow
Write-Host "Title: $Title" -ForegroundColor Yellow
Write-Host ""
Write-Host "Opening Reddit in your browser..." -ForegroundColor Green
Write-Host "1. Log in to your Reddit account" -ForegroundColor Gray
Write-Host "2. The title will be pre-filled" -ForegroundColor Gray
Write-Host "3. Paste the post body below and submit" -ForegroundColor Gray
Write-Host ""

# Copy post body to clipboard for easy paste
$postBody = @"
Hey r/$Subreddit,

I've been working on AI Empire - a collection of production-ready Next.js 14 templates for building SaaS products.

**What's included:**
- 10 templates (SaaS, e-commerce, blog, portfolio, landing page, dashboard)
- Groq AI API integration (free tier: 100 credits)
- Stripe billing (subscriptions + one-time payments)
- Auth + admin dashboard
- 10 languages out of the box

**Tech stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma, Stripe, Resend

**Why I built this:**
Most SaaS projects spend weeks on auth, billing, and boilerplate before writing product code. Each template handles the technical foundation so you can focus on your product.

**Free tier available** - no credit card required. You can try the AI API immediately.

I'd love honest feedback:
- What would make this more useful for you?
- What features are missing?
- What's the right price point for templates like these?

Link: https://ai-empire-steel.vercel.app

Happy to answer any questions about the tech stack or implementation.
"@

Set-Clipboard -Value $postBody
Write-Host "Post body copied to clipboard!" -ForegroundColor Green
Write-Host ""

Start-Process $redditUrl

Write-Host "Browser opened. Paste the post body from clipboard and submit." -ForegroundColor Cyan
Write-Host ""
