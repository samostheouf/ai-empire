#!/usr/bin/env node

/**
 * NeuraAPI Social Media Automation System v2
 * 
 * Commands:
 *   node launch.js status          — Show API key status
 *   node launch.js post <platform> — Post to specific platform (twitter/reddit/linkedin)
 *   node launch.js launch          — Launch all posts with countdown
 *   node launch.js schedule        — Show optimal posting schedule
 *   node launch.js preview         — Preview content before posting
 *   node launch.js history         — Show post history
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const G = '\x1b[32m', R = '\x1b[31m', Y = '\x1b[33m', BL = '\x1b[34m', P = '\x1b[35m', D = '\x1b[0m', BD = '\x1b[1m';

const BASE = path.join(__dirname);
const CONFIG_PATH = path.join(BASE, 'config.json');
const CONTENT_DIR = path.join(BASE, '../../docs/product-hunt/content');
const HISTORY_PATH = path.join(BASE, 'post-history.json');

function loadConfig() {
  try { return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')); }
  catch { console.log(`${R}❌ config.json introuvable${D}`); process.exit(1); }
}

function loadContent(file) {
  try { return fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8').trim(); }
  catch { return null; }
}

function saveHistory(entry) {
  let history = [];
  try { history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8')); } catch {}
  history.push({ ...entry, timestamp: new Date().toISOString() });
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));
}

function httpReq(opts, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => { try { resolve({ s: res.statusCode, d: JSON.parse(d) }); } catch { resolve({ s: res.statusCode, d }); } });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

// ============ PLATFORMS ============

async function postTwitter(cfg, text) {
  const { apiKey, apiSecret, accessToken, accessTokenSecret } = cfg.twitter;
  if (!apiKey) return { ok: false, msg: 'Clé API manquante' };

  const nonce = crypto.randomBytes(16).toString('hex');
  const ts = Math.floor(Date.now() / 1000).toString();
  const params = {
    oauth_consumer_key: apiKey, oauth_token: accessToken,
    oauth_signature_method: 'HMAC-SHA1', oauth_version: '1.0',
    oauth_nonce: nonce, oauth_timestamp: ts, text: text.substring(0, 280),
  };
  const sorted = Object.keys(params).sort().map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
  const base = `POST&${encodeURIComponent('https://api.twitter.com/2/tweets')}&${encodeURIComponent(sorted)}`;
  const sig = crypto.createHmac('sha1', `${encodeURIComponent(apiSecret)}&${encodeURIComponent(accessTokenSecret)}`).update(base).digest('base64');
  params.oauth_signature = sig;
  const auth = 'OAuth ' + Object.keys(params).filter(k => k.startsWith('oauth_')).sort().map(k => `${encodeURIComponent(k)}="${encodeURIComponent(params[k])}"`).join(', ');

  const res = await httpReq({
    hostname: 'api.twitter.com', path: '/2/tweets', method: 'POST',
    headers: { 'Authorization': auth, 'Content-Type': 'application/json' },
  }, JSON.stringify({ text: text.substring(0, 280) }));

  if (res.s === 201) return { ok: true, id: res.d?.data?.id };
  return { ok: false, msg: `${res.s}: ${JSON.stringify(res.d)}` };
}

async function postReddit(cfg, sub, title, body) {
  const { clientId, clientSecret, username, password, userAgent } = cfg.reddit;
  if (!clientId) return { ok: false, msg: 'Clé API manquante' };

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const tokenRes = await httpReq({
    hostname: 'www.reddit.com', path: '/api/v1/access_token', method: 'POST',
    headers: { 'Authorization': `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': userAgent },
  }, `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);

  const token = tokenRes.d?.access_token;
  if (!token) return { ok: false, msg: `Auth failed: ${JSON.stringify(tokenRes.d)}` };

  const res = await httpReq({
    hostname: 'www.reddit.com', path: '/api/submit', method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': userAgent },
  }, `sr=${sub}&kind=self&title=${encodeURIComponent(title)}&text=${encodeURIComponent(body)}`);

  return res.s === 200 ? { ok: true } : { ok: false, msg: `${res.s}: ${JSON.stringify(res.d)}` };
}

async function postLinkedIn(cfg, text) {
  const { accessToken, personUrn } = cfg.linkedin;
  if (!accessToken) return { ok: false, msg: 'Clé API manquante' };

  const res = await httpReq({
    hostname: 'api.linkedin.com', path: '/v2/ugcPosts', method: 'POST',
    headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json', 'X-Restli-Protocol-Version': '2.0.0' },
  }, JSON.stringify({
    author: personUrn, lifecycleState: 'PUBLISHED',
    specificContent: { 'com.linkedin.ugc.ShareContent': { shareCommentary: { text }, shareMediaCategory: 'NONE' } },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
  }));

  return res.s === 201 ? { ok: true } : { ok: false, msg: `${res.s}: ${JSON.stringify(res.d)}` };
}

// ============ COMMANDS ============

function showStatus() {
  const cfg = loadConfig();
  console.log(`\n📋 STATUT DES CLÉS API${D}\n`);
  const platforms = [
    { name: 'Twitter/X', key: cfg.twitter.apiKey, color: '1DA1F2' },
    { name: 'Reddit', key: cfg.reddit.clientId, color: 'FF4500' },
    { name: 'LinkedIn', key: cfg.linkedin.accessToken, color: '0077B5' },
  ];
  for (const p of platforms) {
    const icon = p.key ? `${G}✅${D}` : `${R}❌${D}`;
    console.log(`  ${icon} ${p.name} — ${p.key ? 'Configuré' : 'Non configuré'}`);
  }
  console.log();
}

function preview() {
  console.log(`\n👁 APERÇU DU CONTENU${D}\n`);
  const files = ['product-hunt-desc.txt', 'maker-comment.txt', 'twitter-thread.txt', 'linkedin-post.txt', 'reddit-post.txt', 'reddit-webdev.txt'];
  for (const f of files) {
    const content = loadContent(f);
    if (content) {
      const lines = content.split('\n');
      console.log(`${P}📄 ${f}${D}`);
      console.log(`   ${lines[0].substring(0, 80)}${lines[0].length > 80 ? '...' : ''}`);
      console.log();
    }
  }
}

function showSchedule() {
  console.log(`\n📅 CALENDRIER DE PUBLICATION${D}\n`);
  const schedule = [
    { time: '09:00', action: 'Product Hunt — Créer le produit', platform: '🌐' },
    { time: '09:05', action: 'Product Hunt — Maker comment', platform: '🌐' },
    { time: '09:10', action: 'Twitter — Premier tweet', platform: '🐦' },
    { time: '09:15', action: 'Twitter — Tweets 2-5 (thread)', platform: '🐦' },
    { time: '10:00', action: 'LinkedIn — Post de lancement', platform: '💼' },
    { time: '11:00', action: 'Reddit r/SaaS — Post communautaire', platform: '🤖' },
    { time: '11:05', action: 'Reddit r/webdev — Post technique', platform: '🤖' },
    { time: '12:00', action: 'Répondre commentaires PH', platform: '🌐' },
    { time: '15:00', action: 'Twitter — Mi-journée (stats)', platform: '🐦' },
    { time: '21:00', action: 'Twitter — Fin de journée (merci)', platform: '🐦' },
  ];
  for (const s of schedule) {
    console.log(`  ${G}${s.time}${D} ${s.platform} ${s.action}`);
  }
  console.log();
}

function showHistory() {
  let history = [];
  try { history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8')); } catch {}
  console.log(`\n📊 HISTORIQUE DES POSTS${D}\n`);
  if (history.length === 0) {
    console.log(`  ${Y}Aucun post effectué pour l'instant${D}`);
  } else {
    for (const h of history.reverse()) {
      const icon = h.ok ? `${G}✅${D}` : `${R}❌${D}`;
      console.log(`  ${icon} [${h.timestamp}] ${h.platform} — ${h.msg || 'OK'}`);
    }
  }
  console.log();
}

async function postTo(platform) {
  const cfg = loadConfig();
  const results = [];

  if (platform === 'twitter' || platform === 'all') {
    const thread = loadContent('twitter-thread.txt');
    if (thread) {
      const tweets = thread.split('---').map(t => t.replace(/^TWEET \d+:\n?/, '').trim()).filter(Boolean);
      console.log(`\n🐦 Posting ${tweets.length} tweets...`);
      for (let i = 0; i < tweets.length; i++) {
        const r = await postTwitter(cfg, tweets[i]);
        results.push({ platform: 'twitter', ...r });
        console.log(`  ${r.ok ? G+'✅' : R+'❌'} Tweet ${i+1}/${tweets.length} — ${r.msg || 'OK'}`);
        saveHistory({ platform: 'twitter', tweet: i+1, ...r });
        if (i < tweets.length - 1) await new Promise(r => setTimeout(r, 3000));
      }
    }
  }

  if (platform === 'reddit' || platform === 'all') {
    console.log(`\n🤖 Posting to Reddit...`);
    const posts = [
      { file: 'reddit-post.txt', sub: 'SaaS' },
      { file: 'reddit-webdev.txt', sub: 'webdev' },
    ];
    for (const p of posts) {
      const content = loadContent(p.file);
      if (content) {
        const lines = content.split('\n');
        const title = lines[0].replace('Title: ', '');
        const body = lines.slice(2).join('\n').replace('Body:\n', '');
        const r = await postReddit(cfg, p.sub, title, body);
        results.push({ platform: `reddit/${p.sub}`, ...r });
        console.log(`  ${r.ok ? G+'✅' : R+'❌'} r/${p.sub} — ${r.msg || 'OK'}`);
        saveHistory({ platform: `reddit/${p.sub}`, ...r });
        await new Promise(r => setTimeout(r, 3000));
      }
    }
  }

  if (platform === 'linkedin' || platform === 'all') {
    console.log(`\n💼 Posting to LinkedIn...`);
    const content = loadContent('linkedin-post.txt');
    if (content) {
      const r = await postLinkedIn(cfg, content);
      results.push({ platform: 'linkedin', ...r });
      console.log(`  ${r.ok ? G+'✅' : R+'❌'} LinkedIn — ${r.msg || 'OK'}`);
      saveHistory({ platform: 'linkedin', ...r });
    }
  }

  console.log(`\n📊 Résumé: ${results.filter(r => r.ok).length}/${results.length} posts réussis\n`);
}

async function launchAll() {
  console.log(`\n🚀 LANCEMENT NEURAAPI — SOCIAL MEDIA${D}`);
  console.log(`=======================================${D}\n`);

  showStatus();
  showSchedule();
  preview();

  console.log(`${Y}⚠️  Ce processus va poster sur toutes les plateformes configurées.${D}`);
  console.log(`${Y}    Appuie sur Ctrl+C pour annuler, ou attends 5 secondes...${D}\n`);

  await new Promise(r => setTimeout(r, 5000));
  await postTo('all');
}

// ============ CLI ============

const cmd = process.argv[2] || 'status';

(async () => {
  switch (cmd) {
    case 'status': showStatus(); break;
    case 'preview': preview(); break;
    case 'schedule': showSchedule(); break;
    case 'history': showHistory(); break;
    case 'post': await postTo(process.argv[3] || 'all'); break;
    case 'launch': await launchAll(); break;
    default:
      console.log(`\nUsage: node launch.js <command>\n`);
      console.log('Commands:');
      console.log('  status    — Show API key status');
      console.log('  preview   — Preview content');
      console.log('  schedule  — Show posting schedule');
      console.log('  history   — Show post history');
      console.log('  post      — Post to all platforms');
      console.log('  post twitter  — Post to Twitter only');
      console.log('  post reddit   — Post to Reddit only');
      console.log('  post linkedin — Post to LinkedIn only');
      console.log('  launch    — Full launch with countdown');
  }
})();
