#!/bin/bash

echo "🚀 Starting ShopApp Development Environment"
echo "=============================================="

# Check if .env exists in backend
if [ ! -f backend/.env ]; then
  echo "⚠️  backend/.env not found. Creating from template..."
  cp backend/.env.example backend/.env
  echo "📝 Please edit backend/.env and add your MongoDB URI"
fi

# Start backend in background
echo ""
echo "🔧 Starting Backend Server (port 5000)..."
cd backend
npm install 2>/dev/null
npm run dev &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start frontend
echo ""
echo "🎨 Starting Frontend (port 5173)..."
cd ..
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are running!"
echo "   - Backend: http://localhost:5000"
echo "   - Frontend: http://localhost:5173"
echo ""
echo "To stop: kill $BACKEND_PID $FRONTEND_PID"

# Handle shutdown
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" SIGINT SIGTERM
wait

