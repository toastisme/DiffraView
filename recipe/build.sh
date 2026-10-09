#!/bin/bash
set -euo pipefail

# 1. Build the web client into src/diffraview/web/, where setuptools picks it
#    up as package data and the server serves it in browser mode.
pushd client
npm ci
npm run build:web
popd

# 2. Install the Python package (the run-time deps in meta.yaml already
#    cover its dependencies, so skip pip's own dependency resolution).
${PYTHON} -m pip install . -vv --no-deps --no-build-isolation
