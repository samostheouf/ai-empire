const { loadConfig, validateKeys, testTwitterConnection, testRedditConnection, testLinkedInConnection, printSetupInstructions } = require('../auto-post');

async function main() {
  console.log('Test des connexions API...\n');
  
  const config = loadConfig();
  if (!config) {
    console.error('Impossible de charger config.json');
    process.exit(1);
  }
  
  const missing = validateKeys(config);
  if (missing.length > 0) {
    printSetupInstructions(missing);
  }
  
  const results = {};
  
  if (config.twitter?.apiKey) {
    console.log('Test Twitter...');
    results.twitter = await testTwitterConnection(config);
  } else {
    results.twitter = { success: false, message: 'Non configuré' };
  }
  
  if (config.reddit?.clientId) {
    console.log('Test Reddit...');
    results.reddit = await testRedditConnection(config);
  } else {
    results.reddit = { success: false, message: 'Non configuré' };
  }
  
  if (config.linkedin?.accessToken) {
    console.log('Test LinkedIn...');
    results.linkedin = await testLinkedInConnection(config);
  } else {
    results.linkedin = { success: false, message: 'Non configuré' };
  }
  
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║                   RESULTATS DES TESTS                      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');
  
  const platforms = [
    { name: 'Twitter', icon: '🐦', result: results.twitter },
    { name: 'Reddit', icon: '🔴', result: results.reddit },
    { name: 'LinkedIn', icon: '💼', result: results.linkedin }
  ];
  
  for (const { name, icon, result } of platforms) {
    const status = result.success ? '✅' : '❌';
    console.log(`${icon} ${name}: ${status} ${result.message}`);
  }
  
  const ready = platforms.filter(p => p.result.success).length;
  console.log(`\n${ready}/3 plateformes prêtes à poster.\n`);
  
  if (ready === 0) {
    console.log('Aucune API configurée. Exécute: node scripts/social-media/configure.js');
  }
}

main().catch(err => {
  console.error('Erreur:', err.message);
  process.exit(1);
});
