// ============================================
// AI Empire — Social Media Auto-Poster
// Post sur Reddit, Twitter, LinkedIn en 1 clic
// ============================================

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// === LIRE LES CREDENTIALS ===
function loadCredentials() {
  const credFile = path.join(__dirname, 'credentials.txt');
  if (!fs.existsSync(credFile)) {
    console.log('❌ Fichier credentials.txt non trouvé');
    console.log('   Crée-le avec tes credentials');
    process.exit(1);
  }
  
  const content = fs.readFileSync(credFile, 'utf8');
  const creds = {};
  content.split('\n').forEach(line => {
    const [key, ...value] = line.split('=');
    if (key && value.length) creds[key.trim()] = value.join('=').trim();
  });
  return creds;
}

// === CONTENUS DES POSTS ===
const POSTS = {
  reddit: {
    subreddit: 'webdev',
    title: 'I built a Next.js 14 SaaS template marketplace with AI APIs — looking for honest feedback',
    body: `Hey r/webdev,

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

Happy to answer any questions about the tech stack or implementation.`
  },
  twitter: {
    tweets: [
      `🚀 I shipped a Next.js 14 SaaS template marketplace in 2 weeks.

10 templates. AI APIs built in. Stripe billing. 10 languages.

Free tier. No credit card.

What would you pay for in a SaaS template marketplace?

https://ai-empire-steel.vercel.app

#NextJS #SaaS #BuildInPublic #JavaScript`,

      `💡 The hardest part of building a SaaS isn't the product — it's the boilerplate.

Auth. Billing. Dashboard. Email.

I built AI Empire to solve this:
→ 10 Next.js 14 templates
→ Groq AI API (free tier)
→ Stripe billing included
→ 10 languages

Check it out: https://ai-empire-steel.vercel.app

#WebDev #NextJS #SaaS`,

      `📊 Behind the numbers:

• 10 templates built
• 8 AI API endpoints
• 230 email translations (10 languages)
• 500 ad campaigns (10 languages)
• 0$ invested (all free tiers)

Building in public with AI Empire 🚀

https://ai-empire-steel.vercel.app`
    ]
  },
  linkedin: {
    post: `I just shipped AI Empire — a SaaS template marketplace built with Next.js 14.

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

What features would you want in a SaaS template?`
  }
};

// === REDDIT ===
async function postReddit(creds) {
  console.log('\n📱 Posting on Reddit...');
  
  try {
    // Auth
    const authBody = 'grant_type=password&username=' + encodeURIComponent(creds.REDDIT_USERNAME) + '&password=' + encodeURIComponent(creds.REDDIT_PASSWORD);
    const authHeaders = {
      'Authorization': 'Basic ' + Buffer.from(creds.REDDIT_CLIENT_ID + ':' + creds.REDDIT_CLIENT_SECRET).toString('base64'),
      'User-Agent': 'NeuraAPI-Launch/1.0'
    };
    
    const token = await makeRequest('https://www.reddit.com/api/v1/access_token', 'POST', authBody, authHeaders);
    const accessToken = token.access_token;
    
    if (!accessToken) {
      console.log('  ❌ Auth Reddit échouée');
      return false;
    }
    
    // Post
    const postBody = 'sr=' + POSTS.reddit.subreddit + '&kind=self&title=' + encodeURIComponent(POSTS.reddit.title) + '&text=' + encodeURIComponent(POSTS.reddit.body);
    const postHeaders = {
      'Authorization': 'Bearer ' + accessToken,
      'User-Agent': 'NeuraAPI-Launch/1.0',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    
    const result = await makeRequest('https://oauth.reddit.com/api/submit', 'POST', postBody, postHeaders);
    
    if (result.jquery) {
      console.log('  ✅ Reddit posté sur r/' + POSTS.reddit.subreddit);
      console.log('     https://www.reddit.com/r/' + POSTS.reddit.subreddit + '/new/');
      return true;
    } else {
      console.log('  ❌ Reddit erreur:', JSON.stringify(result).substring(0, 100));
      return false;
    }
  } catch (e) {
    console.log('  ❌ Reddit erreur:', e.message);
    return false;
  }
}

// === TWITTER ===
async function postTwitter(creds) {
  console.log('\n🐦 Posting on Twitter...');
  
  try {
    for (let i = 0; i < POSTS.twitter.tweets.length; i++) {
      const tweet = POSTS.twitter.tweets[i];
      const body = 'text=' + encodeURIComponent(tweet);
      const headers = {
        'Authorization': 'Bearer ' + creds.TWITTER_ACCESS_TOKEN,
        'User-Agent': 'NeuraAPI-Launch/1.0',
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      
      const result = await makeRequest('https://api.twitter.com/2/tweets', 'POST', body, headers);
      
      if (result.data) {
        console.log('  ✅ Tweet ' + (i + 1) + '/' + POSTS.twitter.tweets.length + ' posté');
      } else {
        console.log('  ❌ Tweet ' + (i + 1) + ' erreur:', JSON.stringify(result).substring(0, 100));
      }
      
      // Rate limit: 1 tweet per 5 seconds
      if (i < POSTS.twitter.tweets.length - 1) {
        await new Promise(r => setTimeout(r, 5000));
      }
    }
    return true;
  } catch (e) {
    console.log('  ❌ Twitter erreur:', e.message);
    return false;
  }
}

// === LINKEDIN ===
async function postLinkedIn(creds) {
  console.log('\n💼 Posting on LinkedIn...');
  
  try {
    const body = JSON.stringify({
      author: 'urn:li:person:' + creds.LINKEDIN_PERSON_ID,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: { text: POSTS.linkedin.post },
          shareMediaCategory: 'NONE'
        }
      },
      visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' }
    });
    
    const headers = {
      'Authorization': 'Bearer ' + creds.LINKEDIN_ACCESS_TOKEN,
      'User-Agent': 'NeuraAPI-Launch/1.0',
      'Content-Type': 'application/json'
    };
    
    const result = await makeRequest('https://api.linkedin.com/v2/ugcPosts', 'POST', body, headers);
    
    if (result.id) {
      console.log('  ✅ LinkedIn posté');
      console.log('     https://www.linkedin.com/feed/');
      return true;
    } else {
      console.log('  ❌ LinkedIn erreur:', JSON.stringify(result).substring(0, 100));
      return false;
    }
  } catch (e) {
    console.log('  ❌ LinkedIn erreur:', e.message);
    return false;
  }
}

// === HTTP REQUEST HELPER ===
function makeRequest(url, method, body, headers) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method,
      headers: { ...headers, 'Content-Length': Buffer.byteLength(body || '') }
    };
    
    const transport = urlObj.protocol === 'https:' ? https : http;
    const req = transport.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve({ raw: data });
        }
      });
    });
    
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

// === MAIN ===
async function main() {
  console.log('=========================================');
  console.log('  AI EMPIRE — Social Media Auto-Poster');
  console.log('=========================================');
  
  const creds = loadCredentials();
  const platform = process.argv[2] || 'all';
  
  let results = {};
  
  if (platform === 'all' || platform === 'reddit') {
    results.reddit = await postReddit(creds);
  }
  
  if (platform === 'all' || platform === 'twitter') {
    results.twitter = await postTwitter(creds);
  }
  
  if (platform === 'all' || platform === 'linkedin') {
    results.linkedin = await postLinkedIn(creds);
  }
  
  console.log('\n=========================================');
  console.log('  RÉSULTATS');
  console.log('=========================================');
  Object.entries(results).forEach(([platform, success]) => {
    console.log('  ' + platform + ': ' + (success ? '✅' : '❌'));
  });
  console.log('=========================================');
}

main().catch(console.error);
