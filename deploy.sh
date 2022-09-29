#!/usr/bin/env sh
set -e
npm run build
cd dist

git init
git add -A
git commit -m "new deploy"
git push -f git@github.com:xoxkoo/weather-app.git main:build

cd -