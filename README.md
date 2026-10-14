![Slide26](https://github.com/user-attachments/assets/87813493-9084-4dee-8ab9-f0791ae23317)
DiffraView allows you to process and visualise single-crystal diffraction patterns in the browser (or as a desktop app), providing a common interface to multiple reduction software packages. 

### Status
DiffraView is currently in development and is not yet feature complete.

## Installation

DiffraView needs DIALS 3.31 or later. Until DIALS 3.31 is released, the
installer and conda packages use a development build of DIALS main instead.

| | Windows | Linux | macOS |
|---|:---:|:---:|:---:|
| [Installer](#installer-windows), with DIALS included | ✓ | | |
| [Desktop app](#desktop-app-with-your-own-dials-linux-and-macos) for your own DIALS | | AppImage | `.dmg` |
| [Conda](#conda-windows-and-linux) | ✓ | ✓ | |
| [From source](#from-source-dials-developer-installs) | | ✓ | ✓ |

Downloads are on the [Releases](https://github.com/toastisme/diffraview/releases) page.

### Installing DiffraView on top of Existing DIALS Install (Linux, MacOS)
- **Linux:** download `DiffraView-<version>-x86_64.AppImage`, then
  ```bash
  chmod +x DiffraView-*.AppImage
  ./DiffraView-*.AppImage
  ```
- **macOS:** download `DiffraView-<version>-arm64.dmg` (Apple Silicon) or
  `-x64.dmg` (Intel), open it and drag DiffraView to Applications. The app
  isn't notarised, so macOS blocks it the first time: right-click it and choose
  **Open**, or run
  ```bash
  xattr -dr com.apple.quarantine /Applications/DiffraView.app
  ```

The app looks for DIALS in the usual conda locations and in developer
installs. If it can't find DIALS, it asks where it is and stores the
answer. 

### From source on top of Existing DIALS install
Installs into an existing DIALS environment
Needs Node.js and npm.

```bash
git clone https://github.com/toastisme/diffraview.git
cd diffraview
./install.sh /path/to/dials/conda_base
```

This adds `diffraview` (desktop app) and `diffraview-browser` to
`~/.local/bin`.

### Installing DiffraView bundled with DIALS
- **Windows installer**: Download `DiffraView-<version>-Windows-x86_64.exe` and run it. Windows
    may warn that the installer is unrecognised: choose
   **More info**, then **Run anyway**. Open DiffraView from the Start menu or the desktop shortcut. It installs to `%LOCALAPPDATA%\DiffraView` by default. If DiffraView fails to
start, the details are in `%LOCALAPPDATA%\DiffraView\diffraview.log`.
- **Windows/Linux conda install**: 

```bash
conda create -n diffraview \
  -c toastisme/label/dials-main -c conda-forge -c toastisme \
  diffraview diffraview-desktop
```

On Windows, put the command on one line. Once DIALS 3.31 is on conda-forge,
the `-c toastisme/label/dials-main` channel is no longer needed.

This adds a DiffraView shortcut to the Start menu (Windows) or the
applications menu (Linux). Or run DiffraView from the command line, without
activating the environment:

```bash
conda run -n diffraview diffraview                # desktop app
conda run -n diffraview diffraview path/to/data   # open a processing folder
conda run -n diffraview diffraview --browser      # use the web browser instead
```

Leave out `diffraview-desktop` to install only the browser version.

Don't install the conda package into a DIALS developer install's
`conda_base`: it would replace the development DIALS with conda-forge's. Use
the desktop app or install from source instead.

For packaging and release details, see [recipe/README.md](recipe/README.md)
and [installer/README.md](installer/README.md).

## Roadmap
- [x] Complete reduction workflow for neutron time-of-flight Laue data using DIALS
- [x] Desktop Electron app
- [ ] Complete reduction workflow for X-ray rotation data using DIALS (in development)
- [ ] Complete reduction workflow for X-ray rotation data using XDS (in development)
- [ ] Complete reduction workflow for neutron time-of-flight Laue data using Mantid
- [ ] Deployment in CCP4 Cloud
- [ ] Shared sessions between multiple users


