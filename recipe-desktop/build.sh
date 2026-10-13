#!/bin/bash
set -euo pipefail

# Build the unpacked Electron app (client/release/linux-unpacked/).
pushd client
npm ci
npm run dist:dir
popd

# Install it where diffraview.launcher.find_desktop_app() looks.
mkdir -p "${PREFIX}/libexec/diffraview"
cp -a client/release/linux-unpacked/. "${PREFIX}/libexec/diffraview/"
