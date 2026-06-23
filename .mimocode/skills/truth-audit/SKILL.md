---
name: truth-audit
description: "Audit site content for honesty: find fake testimonials, fake ratings, fake scarcity, fake social proof. Remove all invented content."
---

# Truth Audit

**Core principle: NE JAMAIS parler au nom des futurs acheteurs. Chaque humain est unique.**

This skill audits all user-facing content for dishonesty, invented claims, or manipulative dark patterns.

## What to Find & Remove

### Fake Social Proof
- Testimonial arrays with invented names (Marie D., Thomas L., etc.)
- Fake rating badges ("4.9/5", "Noté 4.9/5")
- Fake user counts ("23+ développeurs", "300+ users")
- Fake "X personnes regardent cette page"

### Fake Scarcity / Urgency
- Countdown timers with no real deadline
- "Places limitées" / "50 premiers inscrits" with random numbers
- "Offre expirée dans X heures" that resets on page reload
- Random `Math.random()` for fake scarcity numbers

### Fake Purchase Notifications
- Floating toasts saying "Marie de Paris a acheté..."
- Notifications about "X personnes ont acheté aujourd'hui"
- Any component inventing user activity

### Aggressive Dark Patterns
- Exit-intent popups with fake urgency ("24h seulement")
- "Non merci, je paierai le prix normal" manipulation text
- Hidden costs revealed only at checkout
- Bait-and-switch pricing

## Scan Commands

```bash
cd /home/momossss/.mimocode/ai-empire

# Find fake testimonials
grep -rn "TESTIMONIALS\|témoignage\|Marie D\.\|Thomas L\.\|Sarah K\." src/ --include="*.tsx" --include="*.ts"

# Find fake ratings
grep -rn "4\.9/5\|Note moyenne\|Noté 4\.\|rating.*5" src/ --include="*.tsx" --include="*.ts"

# Find fake scarcity
grep -rn "Places limitées\|50 premiers\|places restantes\|Math\.random" src/ --include="*.tsx" --include="*.ts"

# Find fake social proof notifications
grep -rn "SocialProof\|a acheté\|a souscrit\|a acheté le plan" src/ --include="*.tsx" --include="*.ts"

# Find fake countdown timers with no real deadline
grep -rn "CountdownTimer\|countdown\|Offre.*expire" src/ --include="*.tsx" --include="*.ts"
```

## What IS Allowed

- Real product features and capabilities
- Real pricing from the database
- Real template descriptions
- Real API documentation
- Honest comparison of what's included in each plan
- User-controlled reviews (when users can actually submit them)

## After Audit

1. Remove all fake content
2. Replace with honest product descriptions
3. Show REAL stats only (template count, API endpoints, features)
4. Let the product speak for itself
5. Deploy with `deploy-verify` skill
