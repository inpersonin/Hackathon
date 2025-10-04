#!/bin/bash

# Fake News Detection Platform Startup Script

echo "🚀 Starting Fake News Detection Platform..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm run install:all

echo "🌐 Starting frontend server (React + Vite)..."
npm run dev &

echo "⚙️  Starting backend server (Node.js + Express)..."r
cd backend && npm run dev &

echo "✅ Both servers are starting up!"
echo ""
echo "🔗 Frontend: http://localhost:5173"
echo "🔗 Backend API: http://localhost:3001"
echo "🔗 API Health: http://localhost:3001/api/health"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user input to stop
wait
