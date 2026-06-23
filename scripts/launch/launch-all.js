#!/usr/bin/env node

/**
 * NeuraAPI Social Media Auto-Poster
 * 
 * Usage:
 *   node launch-all.js              — Post on all platforms
 *   node launch-all.js twitter      — Post only on Twitter
 *   node launch-all.js reddit       — Post only on Reddit
 *   node launch-all.js linkedin     — Post only on LinkedIn
 *   node launch-all.js check        — Check API key status
 *   node launch-all.js test         — Test API connections
 * 
 * Setup:
 *   1. Fill in social-keys.json with your API credentials
 *   2. node launch-all.js test      — Verify connections
 *   3. node launch-all.js           — Launch!
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const KEYS_PATH = path.join(__dirname, 'social-keys.json');
const CONTENT_DIR = path.join(__dirname, '../../docs/product-hunt/content');

// Colors
const G = '\x1b[32m', R = '\x1b[31m', Y = '\x1b[33m', B = '\x1b[34m', D = '\x1b[0m', BOLD = '\x1b[1m';

function loadKeys() {
  if (!fs.existsSync(KEYS_PATH)) {
    console.log(`${R}❌ social-keys.json not found${D}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(KEYS_PATH, 'utf8'));
}

function loadContent(filename) {
  const fp = path.join(CONTENT_DIR, filename);
  if (!fs.existsSync(fp)) {
    console.log(`${R}❌ ${filename} not found in ${CONTENT_DIR}${D}`);
    return null;
  }
  return fs.readFileSync(fp, 'utf8').trim();
}

function httpRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const mod = options.protocol === 'https:' ? https : http;
    const req = mod.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, data }); }
      });
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

// ========== TWITTER ==========
async function postTwitter(keys, text) {
  if (!keys.twitter.apiKey) { console.log(`${Y}⏭ Twitter: clé API manquante${D}`); return false; }

  const crypto = require('crypto');
  const { apiKey, apiSecret, accessToken, accessTokenSecret } = keys.twitter;

  const oauth = {
    oauth_consumer_key: apiKey,
    oauth_token: accessToken,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_version: '1.0',
  };

  const params = {
    ...oauth,
    text: text.substring(0, 280),
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
  };

  const sortedParams = Object.keys(params).sort().map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
  const baseString = `POST&${encodeURIComponent('https://api.twitter.com/2/tweets')}&${encodeURIComponent(sortedParams)}`;
  const signingKey = `${encodeURIComponent(apiSecret)}&${encodeURIComponent(accessTokenSecret)}`;
  params.oauth_signature = crypto.createHmac('sha1', signingKey).update(baseString).digest('base64');

  const authHeader = 'OAuth ' + Object.keys(params).filter(k => k.startsWith('oauth_')).sort().map(k => `${encodeURIComponent(k)}="${encodeURIComponent(params[k])}"`).join(', ');

  try {
    const res = await httpRequest({
      hostname: 'api.twitter.com',
      path: '/2/tweets',
      method: 'POST',
      protocol: 'https:',
      headers: { 'Authorization': authHeader, 'Content-Type': 'application/json' },
    }, JSON.stringify({ text: text.substring(0, 280) }));

    if (res.status === 201) {
      console.log(`${G}✅ Twitter: tweet posted (ID: ${res.data?.data?.id})${D}`);
      return true;
    } else {
      console.log(`${R}❌ Twitter: ${res.status} — ${JSON.stringify(res.data)}${D}`);
      return false;
    }
  } catch (e) {
    console.log(`${R}❌ Twitter: ${e.message}${D}`);
    return false;
  }
}

// ========== REDDIT ==========
async function postReddit(keys, subreddit, title, body) {
  if (!keys.reddit.clientId) { console.log(`${Y}⏭ Reddit: clé API manquante${D}`); return false; }

  const { clientId, clientSecret, username, password, userAgent } = keys.reddit;

  // Get auth token
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  try {
    const tokenRes = await httpRequest({
      hostname: 'www.reddit.com',
      path: '/api/v1/access_token',
      method: 'POST',
      protocol: 'https:',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': userAgent,
      },
    }, `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);

    const token = tokenRes.data?.access_token;
    if (!token) {
      console.log(`${R}❌ Reddit: auth failed — ${JSON.stringify(tokenRes.data)}${D}`);
      return false;
    }

    // Submit post
    const postRes = await httpRequest({
      hostname: 'www.reddit.com',
      path: `/api/submit`,
      method: 'POST',
      protocol: 'https:',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': userAgent,
      },
    }, `sr=${subreddit}&kind=self&title=${encodeURIComponent(title)}&text=${encodeURIComponent(body)}`);

    if (postRes.status === 200) {
      console.log(`${G}✅ Reddit r/${subreddit}: post submitted${D}`);
      return true;
    } else {
      console.log(`${R}❌ Reddit: ${postRes.status} — ${JSON.stringify(postRes.data)}${D}`);
      return false;
    }
  } catch (e) {
    console.log(`${R}❌ Reddit: ${e.message}${D}`);
    return false;
  }
}

// ========== LINKEDIN ==========
async function postLinkedIn(keys, text) {
  if (!keys.linkedin.accessToken) { console.log(`${Y}⏭ LinkedIn: clé API manquante${D}`); return false; }

  const { accessToken, personId } = keys.linkedin;

  try {
    const res = await httpRequest({
      hostname: 'api.linkedin.com',
      path: `/v2/ugcPosts`,
      method: 'POST',
      protocol: 'https:',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0',
      },
    }, JSON.stringify({
      author: `urn:li:person:${personId}`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: { text },
          shareMediaCategory: 'NONE',
        },
      },
      visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
    }));

    if (res.status === 201) {
      console.log(`${G}✅ LinkedIn: post published${D}`);
      return true;
    } else {
      console.log(`${R}❌ LinkedIn: ${res.status} — ${JSON.stringify(res.data)}${D}`);
      return false;
    }
  } catch (e) {
    console.log(`${R}❌ LinkedIn: ${e.message}${D}`);
    return false;
  }
}

// ========== MAIN ==========
async function checkKeys() {
  const keys = loadKeys();
  console.log(`\n${BOLD}🔑 API Key Status:${D}\n`);
  
  const platforms = [
    { name: 'Twitter', key: keys.twitter.apiKey, note: keys.twitter.note },
    { name: 'Reddit', key: keys.reddit.clientId, note: keys.reddit.note },
    { name: 'LinkedIn', key: keys.linkedin.accessToken, note: keys.linkedin.note },
    { name: 'Product Hunt', key: keys.producthunt.clientId, note: keys.producthunt.note },
  ];

  for (const p of platforms) {
    const status = p.key ? `${G}✅ Configuré${D}` : `${R}❌ Manquant${D}`;
    console.log(`  ${p.name}: ${status}`);
    if (!p.key) console.log(`    ${Y}→ ${p.note}${D}`);
  }
  console.log();
}

async function main() {
  const args = process.argv.slice(2);
  const platform = args[0] || 'all';

  if (platform === 'check') { await checkKeys(); return; }

  const keys = loadKeys();
  const results = {};

  console.log(`\n${BOLD}🚀 NeuraAPI Social Media Launch${D}\n`);
  await checkKeys();

  // Twitter
  if (platform === 'all' || platform === 'twitter') {
    const thread = loadContent('twitter-thread.txt');
    if (thread) {
      const tweets = thread.split('---').map(t => t.replace(/^TWEET \d+:\n?/, '').trim()).filter(Boolean);
      for (const tweet of tweets) {
        results[`twitter_${tweets.indexOf(tweet)}`] = await postTwitter(keys, tweet);
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }

  // Reddit r/SaaS
  if (platform === 'all' || platform === 'reddit') {
    const redditPost = loadContent('reddit-post.txt');
    if (redditPost) {
      const lines = redditPost.split('\n');
      const title = lines[0].replace('Title: ', '');
      const body = lines.slice(2).join('\n').replace('Body:\n', '');
      results['reddit_saaS'] = await postReddit(keys, 'SaaS', title, body);
      await new Promise(r => setTimeout(r, 3000));
    }

    const redditDev = loadContent('reddit-webdev.txt');
    if (redditDev) {
      const lines = redditDev.split('\n');
      const title = lines[0].replace('Title: ', '');
      const body = lines.slice(2).join('\n').replace('Body:\n', '');
      results['reddit_webdev'] = await postReddit(keys, 'webdev', title, body);
    }
  }

  // LinkedIn
  if (platform === 'all' || platform === 'linkedin') {
    const linkedin = loadContent('linkedin-post.txt');
    if (linkedin) {
      results['linkedin'] = await postLinkedIn(keys, linkedin);
    }
  }

  // Summary
  console.log(`\n${BOLD}📊 Results:${D}`);
  const success = Object.values(results).filter(Boolean).length;
  const total = Object.values(results).length;
  console.log(`  ${success}/${total} posts successful`);
  if (success === total) console.log(`\n${G}🎉 All posts published!${D}`);
  console.log();
}

main().catch(console.error);
