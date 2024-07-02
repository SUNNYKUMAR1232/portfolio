#!/usr/bin/env sh
npm install -g serve npm install -g pm2
npm install -g nodemon
npm run build

npm run dev &
sleep 1
echo $! > .pidfile

echo 'Now...'
echo 'Visit http://localhost:3000 to see your Node.js/React application in action.'
