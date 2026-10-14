# DiffraView installer

`construct.yaml` builds a single installer that bundles DiffraView, its
desktop app and DIALS, for users who don't have DIALS installed. It is built
with [constructor](https://github.com/conda/constructor), like the DIALS and
DUI installers, and is aimed mainly at Windows (`DiffraView-<version>-Windows-x86_64.exe`).
On Linux the same file builds a `.sh` installer.

The installer contains the `diffraview` and `diffraview-desktop` conda
packages (see `recipe/README.md`) and their dependencies, from conda-forge,
installed into one environment. It doesn't install conda itself.

- **Install location:** a per-user install to `%LOCALAPPDATA%\Programs\DiffraView`
  (`~/diffraview` on Linux), so no admin rights are needed. Paths with spaces
  are allowed. It is kept apart from `%LOCALAPPDATA%\DiffraView`, where
  DiffraView writes its log, so uninstalling keeps the log.
- **Shortcuts:** the installer creates DiffraView's Start menu and desktop
  shortcuts (the `diffraview` package's `Menu/diffraview.json`), and nothing
  else (`menu_packages`).
- **Self-contained:** the installer doesn't add DiffraView to `PATH`, register
  its Python as the system's, or list the environment in
  `~/.conda/environments.txt`.
- **Uninstalling:** "DiffraView <version>" in Installed apps, or
  `Uninstall-DiffraView.exe` in the install folder.
- **Signing:** none yet, so Windows SmartScreen warns the first time the
  installer is opened. The user has to choose "More info" and then "Run anyway".

## Building

```bash
conda install -n base constructor
constructor installer --output-dir dist
```

The installer must be built on the platform it is for. Environment variables:

| Variable | Default | |
|---|---|---|
| `DIFFRAVIEW_VERSION` | the version in `construct.yaml` | DiffraView release to bundle |
| `DIFFRAVIEW_CHANNEL` | `https://conda.anaconda.org/toastisme` | channel with the `diffraview` and `diffraview-desktop` packages; can be a local channel (`file:///...`) |

The DIALS version is whatever the newest conda-forge build is that satisfies
the `diffraview` package's `dials` requirement.

The version default in `construct.yaml` is one of the places CI checks
against the release tag.

## CI

The `installer` job in `.github/workflows/conda-packages.yml` runs on
`windows-latest` for pushes to `main`, version tags and manual runs (not pull
requests). It:

1. builds the installer from the packages the same run built and tested, via
   a local channel, so it is tested before anything is published;
2. installs it silently into a folder with spaces;
3. checks the Start menu and desktop shortcuts exist and run the installed
   `pythonw.exe`;
4. runs `tests/` with the installed Python, not activated and from a folder
   with spaces;
5. uninstalls it, and checks the shortcuts are removed.

For version tags, the `release` job then attaches the `.exe` to a draft GitHub
release, together with the AppImage and `.dmg`s from `build-desktop.yml`.

To install silently yourself:

```bat
DiffraView-0.1.1-Windows-x86_64.exe /InstallationType=JustMe /S /D=C:\path\to\DiffraView
```

`/D=` must come last and must not be quoted, even if the path has spaces.
