#!/usr/bin/env bash
# Prints docs/cv-pdf/cv.html to public/cv.pdf with headless Chrome (Windows Chrome under WSL).
set -euo pipefail
cd "$(dirname "$0")/../.."
CHROME="${CHROME:-/mnt/c/Program Files/Google/Chrome/Application/chrome.exe}"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --user-data-dir="$(wslpath -w "$PROFILE")" --no-first-run \
  --virtual-time-budget=5000 \
  --print-to-pdf="$(wslpath -w "$PWD/public")\\cv.pdf" \
  "file:///$(wslpath -w "$PWD/docs/cv-pdf/cv.html" | tr '\\' '/')"
