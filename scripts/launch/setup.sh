#!/bin/bash
# NeuraAPI Auto-Poster — Setup Script
# Usage: bash setup.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
KEYS_FILE="$SCRIPT_DIR/social-keys.json"

echo "🔧 NeuraAPI Auto-Poster Setup"
echo "=============================="
echo ""

# Check if keys exist
if [ ! -f "$KEYS_FILE" ]; then
  echo "❌ social-keys.json not found"
  exit 1
fi

# Check node
if ! command -v node &>/dev/null; then
  echo "❌ Node.js not found. Install: https://nodejs.org"
  exit 1
fi

echo "✅ Node.js: $(node -v)"
echo ""

# Test connections
echo "🔌 Testing API connections..."
node "$SCRIPT_DIR/launch-all.js" check

echo ""
echo "📋 Setup Instructions:"
echo "======================"
echo ""
echo "1. Twitter (https://developer.twitter.com/en/portal/dashboard)"
echo "   → Create app → Generate keys → Fill in social-keys.json"
echo ""
echo "2. Reddit (https://www.reddit.com/prefs/apps)"
echo "   → Create app (type: script) → Fill in social-keys.json"
echo ""
echo "3. LinkedIn (https://www.linkedin.com/developers/apps)"
echo "   → Create app → Get access token → Fill in social-keys.json"
echo ""
echo "4. Once keys are filled:"
echo "   node $SCRIPT_DIR/launch-all.js test    # Test connections"
echo "   node $SCRIPT_DIR/launch-all.js          # Launch all posts"
echo ""
