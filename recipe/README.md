# Packaging DiffraView

DiffraView is three pieces:

- the Python WebSocket server (`src/diffraview`), which must run in a DIALS
  Python environment because it imports `dials`/`dxtbx` and runs `dials.*`
  commands
- the web client (`client/`), built to static files with Vite
- an optional Electron desktop shell (`client/electron.cjs`) around the client.

It is distributed two ways:

| | Contains | DIALS comes from |
|---|---|---|
| conda package (`recipe/`) | server + built web client; `diffraview` opens it in the browser | the same environment (`dials` is a run dependency) |
| `diffraview-desktop` conda package (`recipe-desktop/`), Windows and Linux | the unpacked Electron app, opened by `diffraview` | the same environment (via `diffraview`) |
| desktop app (`npm run dist` in `client/`): AppImage on Linux, `.dmg` on macOS | Electron + built client + server source | an existing DIALS install, found at startup |

## Conda package

`noarch: python`: the server is pure Python and the client is static files
(built by `npm run build:web`, which copies `client/build/` into
`src/diffraview/web/` so setuptools ships it as package data). `diffraview`
starts the server (on port 50010 if free, otherwise any free port) and opens
it in the default browser.
If a packaged Electron app is installed at `$PREFIX/libexec/diffraview/diffraview`
(`DiffraView.exe` on Windows), or named by `DIFFRAVIEW_ELECTRON`, it opens that
instead.

Installing the package creates a DiffraView shortcut from `menu/diffraview.json`,
via menuinst. The shortcut doesn't activate the environment: `diffraview`
puts the environment's program folders on `PATH` itself, so the `dials.*`
commands are found. On Windows it runs under `pythonw`, so no console window
opens. Output goes to `%LOCALAPPDATA%\DiffraView\diffraview.log` 
(previous runs kept as `diffraview.previous.log`).

The shortcut is created by the menuinst of whatever performs the install (the
base environment's conda, or the installer's bundled conda), not the
`menuinst` this package depends on. menuinst 2.5.2 writes a broken `Icon=`
line on Linux, so the shortcut has no icon there
([conda/menuinst#535](https://github.com/conda/menuinst/pull/535), fixed after
2.5.2). Build installers with a conda-standalone that doesn't bundle 2.5.2.

Build locally:

```bash
conda build recipe/ -c conda-forge
```

`source.url`/`source.sha256` in `meta.yaml` point at a GitHub release tarball
for the tag matching `version`. When cutting a new version: tag the release
first, then update `version` and `sha256` (`curl -sL <tarball-url> | sha256sum`)
together in the same commit.

**DIALS developer installs** (made with DIALS' `bootstrap.py`): don't
`conda install diffraview` into the bootstrap `conda_base`, as it would pull
conda-forge `dials` over the development checkout. Use `install.sh` (which
`pip install`s DiffraView into `conda_base`) or the AppImage instead.

## Desktop conda package (`recipe-desktop/`)

`diffraview-desktop` puts the Electron app, unpacked (`npm run dist:dir`), in
`$PREFIX/libexec/diffraview/`. It depends on the matching `diffraview`, whose
launcher (`diffraview` and the shortcut) then opens the app instead of the
browser and runs the server itself, so the app never has to look for DIALS.
This is the desktop app for single installers that bundle DIALS.

Unlike `diffraview` it is built per platform: on Linux with `build.sh`, on
Windows with `bld.bat`. 

```bash
conda build recipe-desktop/ -c conda-forge -c <channel with diffraview>
```

Its `version` and `sha256` must match `recipe/meta.yaml`. Prefix rewriting is
turned off (Electron's files contain no install prefix), and `nodejs` is
needed only to build it.

## CI and publishing

`.github/workflows/conda-packages.yml` builds both app versions from the commit
being tested.

To build locally from a checkout:

```bash
DIFFRAVIEW_SOURCE_DIR=$PWD conda build recipe/ -c conda-forge
```

## Desktop app (AppImage, macOS .dmg)

For users who already have DIALS env

```bash
cd client
npm ci
npm run dist
```

`npm run dist` builds the client, stages the server source into
`client/build-server/` (bundled as `resources/server`), and runs
`electron-builder` for the platform it runs on: on Linux it makes
`release/DiffraView-<version>-x86_64.AppImage`, on macOS
`release/DiffraView-<version>-{x64,arm64}.dmg` (both from one Mac). A `.dmg`
can only be built on macOS; `.github/workflows/build-desktop.yml` builds both
on GitHub Actions for version tags, or when run manually.

### macOS signing

The `.dmg` is ad-hoc signed (`"identity": "-"` in `client/package.json`),
which Apple Silicon needs for the app to launch at all, but it is not signed
with an Apple Developer ID or notarised. macOS therefore blocks it the first
time it is opened. Users can right-click the app and choose Open, or run:

```bash
xattr -dr com.apple.quarantine /Applications/DiffraView.app
```

### Finding DIALS

DIALS is not bundled. At startup `client/dials-env.cjs` looks for a Python
where `import dials` works, in this order:

1. `--dials-python=<env or python>` on the command line
2. `DIFFRAVIEW_DIALS_PYTHON`
3. `DIALS_PYTHON` or `CONDA_BASE` in `~/.config/diffraview/config`
4. the active conda environment (`$CONDA_PREFIX`)
5. the environment containing `dials.import` on `PATH`
6. `~/*/conda_base` and `~/*/*/conda_base` (bootstrap installs)
7. every environment listed in `~/.conda/environments.txt`, which conda
   keeps of all environments it has created or used
8. named environments (`envs/*`) under common conda/mamba installs, then
   those installs' base environments: `~/{miniforge3,mambaforge,miniconda3,anaconda3}`,
   the same under `~/opt` and `/opt`, Homebrew's `Caskroom/{miniforge,miniconda,anaconda}/base`,
   `~/micromamba`, `~/.local/share/mamba` and `~/.conda`

An app opened from the macOS Finder or Dock doesn't inherit the shell's
`PATH` or `CONDA_PREFIX`, so there 4 and 5 rarely apply and 6-8 do the work.

If none is found, or the one found can't import what the server needs, the
user is asked to locate their DIALS environment. If server dependencies
(`websockets`, `aiofiles`, `lz4`, ...) are missing, the app offers to
`pip install` them into that environment. The chosen Python is saved to
`~/.config/diffraview/config` as `DIALS_PYTHON`.

The server is then started as `<dials python> -m diffraview.server` with the
bundled source first on `PYTHONPATH`, the environment's `bin/` first on
`PATH`, and its `etc/conda/activate.d/*.sh` scripts sourced (which is what
`conda activate` does, without needing conda's shell hook).

