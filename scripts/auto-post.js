const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, 'social-media/config.json');

function loadConfig() {
  try {
    const data = fs.readFileSync(CONFIG_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('[AUTO-POST] Impossible de lire config.json:', err.message);
    return null;
  }
}

function validateKeys(config) {
  const missing = [];
  
  if (!config.twitter?.apiKey) missing.push('TWITTER: apiKey, apiSecret, accessToken, accessTokenSecret');
  if (!config.reddit?.clientId) missing.push('REDDIT: clientId, clientSecret, username, password');
  if (!config.linkedin?.accessToken) missing.push('LINKEDIN: accessToken, personUrn');
  
  return missing;
}

function printSetupInstructions(missing) {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║           CONFIGURATION DES CLES API REQUISE               ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');
  
  for (const platform of missing) {
    if (platform.startsWith('TWITTER')) {
      console.log('🐦 TWITTER:');
      console.log('   1. Va sur https://developer.twitter.com/en/portal/dashboard');
      console.log('   2. Crée un projet et active Read+Write');
      console.log('   3. Génère les clés dans config.json\n');
    } else if (platform.startsWith('REDDIT')) {
      console.log('🔴 REDDIT:');
      console.log('   1. Va sur https://www.reddit.com/prefs/apps');
      console.log('   2. Crée une app type "script"');
      console.log('   3. Redirect URI: http://localhost:8080\n');
    } else if (platform.startsWith('LINKEDIN')) {
      console.log('💼 LINKEDIN:');
      console.log('   1. Va sur https://www.linkedin.com/developers/apps');
      console.log('   2. Crée une app et active "Share on LinkedIn"');
      console.log('   3. Génère un OAuth 2.0 access token\n');
    }
  }
  
  console.log('Une fois les clés configurées, relance ce script.');
  console.log('Path du config: ' + CONFIG_PATH + '\n');
}

async function testTwitterConnection(config) {
  const { apiKey, apiSecret, accessToken, accessTokenSecret } = config.twitter;
  
  if (!apiKey || !apiSecret || !accessToken || !accessTokenSecret) {
    return { success: false, message: 'Clés manquantes' };
  }
  
  try {
    const OAuth = require('oauth-1.0a');
    const crypto = require('crypto');
    
    const oauth = new OAuth({
      consumer: { key: apiKey, secret: apiSecret },
      signature_method: 'HMAC-SHA1',
      hash_function: (base_string, key) => crypto.createHmac('sha1', key).update(base_string).digest('base64')
    });
    
    const token = { key: accessToken, secret: accessTokenSecret };
    const url = 'https://api.twitter.com/2/users/me';
    
    const authHeader = oauth.toHeader(oauth.generateRequest('GET', { url }, token));
    
    const response = await fetch(url, {
      headers: { ...authHeader, 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      const data = await response.json();
      return { success: true, message: `Connecté: @${data.data.username}` };
    }
    return { success: false, message: `Erreur ${response.status}: ${response.statusText}` };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

async function testRedditConnection(config) {
  const { clientId, clientSecret, username, password } = config.reddit;
  
  if (!clientId || !clientSecret || !username || !password) {
    return { success: false, message: 'Clés manquantes' };
  }
  
  try {
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    
    const response = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=password&username=${username}&password=${password}`
    });
    
    if (response.ok) {
      return { success: true, message: `Connecté: ${username}` };
    }
    return { success: false, message: `Erreur ${response.status}` };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

async function testLinkedInConnection(config) {
  const { accessToken, personUrn } = config.linkedin;
  
  if (!accessToken || !personUrn) {
    return { success: false, message: 'Clés manquantes' };
  }
  
  try {
    const response = await fetch('https://api.linkedin.com/v2/me', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    
    if (response.ok) {
      const data = await response.json();
      return { success: true, message: `Connecté: ${data.localizedFirstName}` };
    }
    return { success: false, message: `Erreur ${response.status}` };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

async function postToTwitter(content) {
  const config = loadConfig();
  if (!config?.twitter?.apiKey) throw new Error('Twitter non configuré');
  
  const OAuth = require('oauth-1.0a');
  const crypto = require('crypto');
  
  const oauth = new OAuth({
    consumer: { key: config.twitter.apiKey, secret: config.twitter.apiSecret },
    signature_method: 'HMAC-SHA1',
    hash_function: (base_string, key) => crypto.createHmac('sha1', key).update(base_string).digest('base64')
  });
  
  const token = { key: config.twitter.accessToken, secret: config.twitter.accessTokenSecret };
  const url = 'https://api.twitter.com/2/tweets';
  const body = JSON.stringify({ text: content });
  
  const authHeader = oauth.toHeader(oauth.generateRequest('POST', { url, body }, token));
  
  const maxRetries = 3;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { ...authHeader, 'Content-Type': 'application/json' },
        body
      });
      
      if (response.ok) {
        const data = await response.json();
        return { success: true, tweetId: data.data.id };
      }
      
      if (response.status === 429) {
        const retryAfter = response.headers.get('retry-after') || 60;
        console.log(`Rate limit. Attente ${retryAfter}s...`);
        await new Promise(r => setTimeout(r, retryAfter * 1000));
        continue;
      }
      
      const error = await response.json();
      throw new Error(error.detail || response.statusText);
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
  }
}

async function postToReddit(title, body, subreddit) {
  const config = loadConfig();
  if (!config?.reddit?.clientId) throw new Error('Reddit non configuré');
  
  const auth = Buffer.from(`${config.reddit.clientId}:${config.reddit.clientSecret}`).toString('base64');
  
  const tokenRes = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=password&username=${config.reddit.username}&password=${config.reddit.password}`
  });
  
  if (!tokenRes.ok) throw new Error('Échec auth Reddit');
  const { access_token } = await tokenRes.json();
  
  const maxRetries = 3;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(`https://oauth.reddit.com/api/submit`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'User-Agent': config.reddit.userAgent,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          sr: subreddit,
          kind: 'self',
          title,
          text: body
        }).toString()
      });
      
      if (response.ok) {
        const data = await response.json();
        return { success: true, postId: data.id, url: data.url };
      }
      
      const error = await response.json();
      throw new Error(error.reason || response.statusText);
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
  }
}

async function postToLinkedIn(content) {
  const config = loadConfig();
  if (!config?.linkedin?.accessToken) throw new Error('LinkedIn non configuré');
  
  const body = JSON.stringify({
    author: config.linkedin.personUrn,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text: content },
        shareMediaCategory: 'NONE'
      }
    },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' }
  });
  
  const maxRetries = 3;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch('https://api.linkedin.com/v2/ugcPosts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.linkedin.accessToken}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0'
        },
        body
      });
      
      if (response.ok) {
        const data = await response.json();
        return { success: true, postId: data.id };
      }
      
      const error = await response.json();
      throw new Error(error.message || response.statusText);
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
  }
}

module.exports = {
  postToTwitter,
  postToReddit,
  postToLinkedIn,
  testTwitterConnection,
  testRedditConnection,
  testLinkedInConnection,
  loadConfig,
  validateKeys,
  printSetupInstructions
};
