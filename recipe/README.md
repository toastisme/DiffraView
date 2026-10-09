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
| AppImage (`npm run dist` in `client/`) | Electron + built client + server source | an existing DIALS install, found at startup |

## Conda package

`noarch: python`: the server is pure Python and the client is static files
(built by `npm run build:web`, which copies `client/build/` into
`src/diffraview/web/` so setuptools ships it as package data). `diffraview`
starts the server (on port 50010 if free, otherwise any free port) and opens
it in the default browser.
If a packaged Electron app is installed at `$PREFIX/libexec/diffraview/diffraview`
(or named by `DIFFRAVIEW_ELECTRON`) it opens that instead

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

## AppImage

```bash
cd client
npm ci
npm run dist   
```

`npm run dist` builds the client, stages the server source into
`client/build-server/` (bundled as `resources/server`), and runs
`electron-builder`. 

DIALS is not bundled. At startup `client/dials-env.cjs` looks for a Python
where `import dials` works, in this order:

1. `--dials-python=<env or python>` on the command line
2. `DIFFRAVIEW_DIALS_PYTHON`
3. `DIALS_PYTHON` or `CONDA_BASE` in `~/.config/diffraview/config`
4. the active conda environment (`$CONDA_PREFIX`)
5. the environment containing `dials.import` on `PATH`
6. `~/*/conda_base` and `~/*/*/conda_base` (bootstrap installs)
7. `~/{miniforge3,mambaforge,miniconda3,anaconda3,micromamba,.conda}/envs/*`

If none is found, or the one found can't import what the server needs, the
user is asked to locate their DIALS environment. If server dependencies
(`websockets`, `aiofiles`, `lz4`, ...) are missing, the app offers to
`pip install` them into that environment. The chosen Python is saved to
`~/.config/diffraview/config` as `DIALS_PYTHON`.

The server is then started as `<dials python> -m diffraview.server` with the
bundled source first on `PYTHONPATH`, the environment's `bin/` first on
`PATH`, and its `etc/conda/activate.d/*.sh` scripts sourced (which is what
`conda activate` does, without needing conda's shell hook).

