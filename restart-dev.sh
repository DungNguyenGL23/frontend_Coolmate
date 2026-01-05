#!/bin/bash
# Script để restart Next.js dev server

echo "🛑 Stopping any running Next.js processes..."
pkill -f "next dev" 2>/dev/null || true

echo "🧹 Clearing Next.js cache..."
rm -rf .next

echo "✅ Starting Next.js dev server..."
npm run dev

