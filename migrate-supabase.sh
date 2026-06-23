#!/bin/bash
# Script de migration Supabase pour ai-empire
# Usage: ./migrate-supabase.sh "postgresql://postgres:password@db.supabase.co:5432/postgres"

if [ -z "$1" ]; then
  echo "Usage: ./migrate-supabase.sh \"DATABASE_URL\""
  echo "Example: ./migrate-supabase.sh \"postgresql://postgres:xxxx@aws-0-eu-west-1.pooler.supabase.com:6543/postgres\""
  exit 1
fi

export DATABASE_URL="$1"

echo "=== Migration Supabase ==="
echo "Database: $DATABASE_URL"
echo ""

# Generate Prisma client
echo "1. Generating Prisma client..."
/home/momossss/.local/bin/node node_modules/prisma/build/index.js generate

# Push schema to Supabase
echo "2. Pushing schema to Supabase..."
/home/momossss/.local/bin/node node_modules/prisma/build/index.js db push

# Seed data
echo "3. Seeding database..."
/home/momossss/.local/bin/node prisma/seed.js

echo ""
echo "=== Migration terminée ==="
echo "Mets à jour .env avec: DATABASE_URL=\"$DATABASE_URL\""
echo "Puis lance: vercel --yes --prod"
