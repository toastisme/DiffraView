#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_DIR="$HOME/.config/diffraview"
BIN_DIR="$HOME/.local/bin"

# Resolve conda path
if [ -n "$1" ]; then
    CONDA_BASE="$1"
else
    read -p "Enter path to DIALS conda base (e.g. /path/to/dials/conda_base): " CONDA_BASE
fi

if [ ! -f "$CONDA_BASE/etc/profile.d/conda.sh" ]; then
    echo "Error: conda.sh not found at $CONDA_BASE/etc/profile.d/conda.sh" >&2
    exit 1
fi

mkdir -p "$CONFIG_DIR"
echo "CONDA_BASE=$CONDA_BASE" > "$CONFIG_DIR/config"
echo "Config written to $CONFIG_DIR/config"

mkdir -p "$BIN_DIR"
ln -sf "$SCRIPT_DIR/diffraview" "$BIN_DIR/diffraview"
echo "Symlink created: $BIN_DIR/diffraview -> $SCRIPT_DIR/diffraview"

# Warn if ~/.local/bin not on PATH
if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
    echo "Warning: $BIN_DIR is not on your PATH."
    echo "Add this to your ~/.bashrc or ~/.zshrc:"
    echo "  export PATH=\"\$HOME/.local/bin:\$PATH\""
fi

echo "Installation complete. Run 'diffraview' or 'diffraview ./my_data_dir' to start."
