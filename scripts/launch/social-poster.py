#!/usr/bin/env python3
"""
AI EMPIRE — Social Media Auto-Poster
Poste automatiquement sur Reddit, Twitter, LinkedIn
"""

import json
import os
import sys
import time
import webbrowser
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
CREDENTIALS_FILE = SCRIPT_DIR / "credentials.json"

# === CONTENUS DES POSTS ===
REDDIT_POST = {
    "subreddit": "webdev",
    "title": "I built a Next.js 14 SaaS template marketplace with AI APIs — looking for honest feedback",
    "body": """Hey r/webdev,

I've been working on AI Empire — a collection of production-ready Next.js 14 templates for building SaaS products.

**What's included:**
- 10 templates (SaaS, e-commerce, blog, portfolio, landing page, dashboard)
- Groq AI API integration (free tier: 100 credits)
- Stripe billing (subscriptions + one-time payments)
- Auth + admin dashboard
- 10 languages out of the box

**Tech stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma, Stripe, Resend

**Why I built this:**
Most SaaS projects spend weeks on auth, billing, and boilerplate before writing product code. Each template handles the technical foundation so you can focus on your product.

**Free tier available** — no credit card required. You can try the AI API immediately.

I'd love honest feedback:
- What would make this more useful for you?
- What features are missing?
- What's the right price point for templates like these?

Link: https://ai-empire-steel.vercel.app

Happy to answer any questions about the tech stack or implementation."""
}

TWITTER_TWEETS = [
    "I shipped a Next.js 14 SaaS template marketplace in 2 weeks.\n\n10 templates. AI APIs built in. Stripe billing. 10 languages.\n\nFree tier. No credit card.\n\nWhat would you pay for in a SaaS template marketplace?\n\nhttps://ai-empire-steel.vercel.app\n\n#NextJS #SaaS #BuildInPublic #JavaScript",
    "The hardest part of building a SaaS isn't the product — it's the boilerplate.\n\nAuth. Billing. Dashboard. Email.\n\nI built AI Empire to solve this:\n- 10 Next.js 14 templates\n- Groq AI API (free tier)\n- Stripe billing included\n- 10 languages\n\nCheck it out: https://ai-empire-steel.vercel.app\n\n#WebDev #NextJS #SaaS",
    "Behind the numbers:\n\n- 10 templates built\n- 8 AI API endpoints\n- 230 email translations (10 languages)\n- 500 ad campaigns (10 languages)\n- 0$ invested (all free tiers)\n\nBuilding in public with AI Empire\n\nhttps://ai-empire-steel.vercel.app"
]

LINKEDIN_POST = """I just shipped AI Empire — a SaaS template marketplace built with Next.js 14.

The problem: every SaaS project starts with weeks of boilerplate (auth, billing, dashboard, email).

The solution: 10 production-ready templates that handle all of this.

What's included:
→ Next.js 14 App Router + TypeScript
→ Groq AI API integration (free tier)
→ Stripe billing (subscriptions + one-time)
→ Auth + admin dashboard
→ 10 languages out of the box

I built this entirely with free tiers (Vercel, Resend, Groq) — zero investment.

If you're building a SaaS and want to skip boilerplate, check it out: https://ai-empire-steel.vercel.app

What features would you want in a SaaS template?"""


# === CONFIGURATION ===
def load_credentials():
    if CREDENTIALS_FILE.exists():
        with open(CREDENTIALS_FILE, "r") as f:
            return json.load(f)
    return {}

def save_credentials(creds):
    with open(CREDENTIALS_FILE, "w") as f:
        json.dump(creds, f, indent=2)
    os.chmod(CREDENTIALS_FILE, 0o600)

def setup_credentials():
    creds = load_credentials()

    # Vérifier que les credentials sont remplis
    missing = []
    if not creds.get("reddit", {}).get("client_id") or creds["reddit"]["client_id"] == "REMPLIR":
        missing.append("Reddit (client_id)")
    if not creds.get("twitter", {}).get("api_key") or creds["twitter"]["api_key"] == "REMPLIR":
        missing.append("Twitter (api_key)")
    if not creds.get("linkedin", {}).get("access_token") or creds["linkedin"]["access_token"] == "REMPLIR":
        missing.append("LinkedIn (access_token)")

    if missing:
        print(f"\n❌ Credentials manquants : {', '.join(missing)}")
        print(f"\nRemplis le fichier : {CREDENTIALS_FILE}")
        print("Puis relance le script.\n")
        sys.exit(1)

    return creds


# === REDDIT ===
def post_reddit(creds):
    print("\n📱 Reddit...")
    try:
        import praw
        r = praw.Reddit(
            client_id=creds["reddit"]["client_id"],
            client_secret=creds["reddit"]["client_secret"],
            username=creds["reddit"]["username"],
            password=creds["reddit"]["password"],
            user_agent="NeuraAPI-Launch/1.0 (by /u/" + creds["reddit"]["username"] + ")"
        )
        submission = r.subreddit(REDDIT_POST["subreddit"]).submit(
            title=REDDIT_POST["title"],
            selftext=REDDIT_POST["body"]
        )
        url = f"https://reddit.com{submission.permalink}"
        print(f"  ✅ Reddit: {url}")
        return True
    except Exception as e:
        print(f"  ❌ Reddit: {e}")
        return False


# === TWITTER ===
def post_twitter(creds):
    print("\n🐦 Twitter...")
    try:
        import tweepy
        client = tweepy.Client(
            consumer_key=creds["twitter"]["api_key"],
            consumer_secret=creds["twitter"]["api_secret"],
            access_token=creds["twitter"]["access_token"],
            access_token_secret=creds["twitter"]["access_secret"]
        )
        for i, tweet in enumerate(TWITTER_TWEETS):
            response = client.create_tweet(text=tweet)
            tweet_id = response.data["id"]
            username = creds["twitter"]["access_token"][:10]
            print(f"  ✅ Tweet {i+1}/3: https://twitter.com/i/status/{tweet_id}")
            if i < len(TWITTER_TWEETS) - 1:
                time.sleep(5)
        return True
    except Exception as e:
        print(f"  ❌ Twitter: {e}")
        return False


# === LINKEDIN ===
def post_linkedin(creds):
    print("\n💼 LinkedIn...")
    try:
        import requests
        headers = {
            "Authorization": f"Bearer {creds['linkedin']['access_token']}",
            "Content-Type": "application/json",
            "X-Restli-Protocol-Version": "2.0.0"
        }
        payload = {
            "author": f"urn:li:person:{creds['linkedin']['person_id']}",
            "lifecycleState": "PUBLISHED",
            "specificContent": {
                "com.linkedin.ugc.ShareContent": {
                    "shareCommentary": {"text": LINKEDIN_POST},
                    "shareMediaCategory": "NONE"
                }
            },
            "visibility": {"com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"}
        }
        response = requests.post(
            "https://api.linkedin.com/v2/ugcPosts",
            headers=headers,
            json=payload
        )
        if response.status_code == 201:
            post_id = response.json().get("id", "unknown")
            print(f"  ✅ LinkedIn: https://www.linkedin.com/feed/")
            return True
        else:
            print(f"  ❌ LinkedIn: {response.status_code} - {response.text[:200]}")
            return False
    except Exception as e:
        print(f"  ❌ LinkedIn: {e}")
        return False


# === MAIN ===
def main():
    print("=========================================")
    print("  AI EMPIRE — Social Media Auto-Poster")
    print("=========================================")

    creds = load_credentials()
    if not creds:
        print(f"\n❌ Fichier credentials.json non trouvé : {CREDENTIALS_FILE}")
        print("Remplis le fichier avec tes credentials et relance le script.\n")
        sys.exit(1)
    creds = setup_credentials()

    platform = sys.argv[1] if len(sys.argv) > 1 else "all"

    results = {}

    if platform in ("reddit", "all"):
        results["reddit"] = post_reddit(creds)

    if platform in ("twitter", "all"):
        results["twitter"] = post_twitter(creds)

    if platform in ("linkedin", "all"):
        results["linkedin"] = post_linkedin(creds)

    print("\n=========================================")
    print("  RÉSULTATS")
    print("=========================================")
    for p, success in results.items():
        print(f"  {p}: {'✅' if success else '❌'}")
    print("=========================================")


if __name__ == "__main__":
    main()
