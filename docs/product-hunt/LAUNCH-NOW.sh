#!/bin/bash

# NeuraAPI Product Hunt Launch Script
# Run this script to open all launch URLs in sequence

echo "🚀 NeuraAPI Product Hunt Launch"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# URLs
PRODUCT_HUNT_NEW="https://www.producthunt.com/posts/new"
PRODUCT_HUNT_PAGE="https://www.producthunt.com/posts/neuraapi"
TWITTER_COMPOSE="https://twitter.com/intent/tweet?text=%F0%9F%9A%80%20We're%20live%20on%20%40ProductHunt!%0A%0ANeuraAPI%20%E2%80%94%20AI%20APIs%20%2B%20Next.js%20Templates%20in%2010%20languages%0A%0A%E2%86%92%203%20AI%20endpoints%20(text%2C%20code%2C%20SEO)%0A%E2%86%92%20Premium%20templates%20included%0A%E2%86%92%20Free%20tier%20available%0A%E2%86%92%20Launch%20offer%3A%20-30%25%20on%20Pro%20plan%0A%0ASupport%20us%20%F0%9F%91%89%20https%3A%2F%2Fwww.producthunt.com%2Fposts%2Fneuraapi%0A%0A%23ProductHunt%20%23AI%20%23NextJS%20%23SaaS"
LINKEDIN_SHARE="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.producthunt.com%2Fposts%2Fneuraapi"
REDDIT_SAAS="https://www.reddit.com/r/SaaS/submit"
REDDIT_WEBDEV="https://www.reddit.com/r/webdev/submit"
MAIN_SITE="https://ai-empire-steel.vercel.app"
LAUNCH_PAGE="https://ai-empire-steel.vercel.app/launch"

# Function to open URL with delay
open_url() {
    local url=$1
    local description=$2
    local delay=$3
    
    echo -e "${CYAN}📌 Step: ${description}${NC}"
    echo -e "   URL: ${url}"
    
    # Open URL based on OS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open "$url"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open "$url" 2>/dev/null || echo "   (Manual open required)"
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
        start "$url"
    else
        echo "   (Manual open required)"
    fi
    
    if [ $delay -gt 0 ]; then
        echo -e "${YELLOW}   Waiting ${delay} seconds...${NC}"
        sleep $delay
    fi
    echo ""
}

# Main launch sequence
echo -e "${GREEN}Phase 1: Create Product Hunt Post${NC}"
open_url "$PRODUCT_HUNT_NEW" "Create new Product Hunt post" 0

echo -e "${GREEN}Phase 2: View Your Product Page${NC}"
open_url "$PRODUCT_HUNT_PAGE" "View your Product Hunt page" 0

echo -e "${GREEN}Phase 3: Share on Twitter${NC}"
open_url "$TWITTER_COMPOSE" "Compose tweet with PH link" 0

echo -e "${GREEN}Phase 4: Share on LinkedIn${NC}"
open_url "$LINKEDIN_SHARE" "Share on LinkedIn" 0

echo -e "${GREEN}Phase 5: Post on Reddit${NC}"
open_url "$REDDIT_SAAS" "Post to r/SaaS" 0
open_url "$REDDIT_WEBDEV" "Post to r/webdev" 0

echo -e "${GREEN}Phase 6: Your Website${NC}"
open_url "$MAIN_SITE" "Main NeuraAPI site" 0
open_url "$LAUNCH_PAGE" "Launch landing page" 0

echo ""
echo -e "${GREEN}✅ All URLs opened!${NC}"
echo ""
echo "📝 Quick Reference:"
echo "   - Tagline: AI APIs + Premium Next.js Templates in 10 languages"
echo "   - Maker Comment: See docs/product-hunt/launch-guide.md"
echo "   - Tweet Thread: See docs/product-hunt/launch-script.md"
echo ""
echo "⏰ Remember to:"
echo "   1. Fill out the Product Hunt form completely"
echo "   2. Post the maker comment immediately after launch"
echo "   3. Share on Twitter and LinkedIn"
echo "   4. Monitor and respond to comments"
echo ""
echo -e "${CYAN}Good luck with the launch! 🚀${NC}"