#!/bin/bash

echo "🔄 Pulling latest code..."
git pull origin master || { echo "❌ Gagal git pull"; exit 1; }

echo "📦 Installing dependencies..."
pnpm install || { echo "❌ Gagal install dependencies"; exit 1; }

echo "🏗️ Building Next.js app..."
pnpm build || { echo "❌ Build gagal"; exit 1; }

echo "🚀 Restarting PM2 process..."
pm2 restart zbio || { echo "❌ Gagal restart PM2"; exit 1; }

echo "✅ Deploy complete! App live at: http://10.10.10.10:3003"