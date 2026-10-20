![Slide26](https://github.com/user-attachments/assets/87813493-9084-4dee-8ab9-f0791ae23317)
DiffraView allows you to process and visualise single-crystal diffraction patterns in the browser (or in a desktop app), providing a common interface to multiple reduction software packages. 

### Status
DiffraView is currently in development and is not yet feature complete.

## Installation

DiffraView needs DIALS 3.31 or later. Until DIALS 3.31 is released, the
installer and conda packages use a development build of DIALS main instead.

| | Windows | Linux | macOS |
|---|:---:|:---:|:---:|
| [Installer](#installing-diffraview-bundled-with-dials), with DIALS included | ✓ | | |
| [Conda](#installing-diffraview-bundled-with-dials), with DIALS included | ✓ | ✓ | |
| [Desktop app](#installing-diffraview-on-top-of-existing-dials-install-linux-macos) using preinstalled DIALS | | AppImage | `.dmg` |
| [From source](#from-source-on-top-of-existing-dials-install) using preinstalled DIALS | | ✓ | ✓ |

Downloads are on the [Releases](https://github.com/toastisme/diffraview/releases) page.

### Installing DiffraView bundled with DIALS
- **Windows installer:** download `DiffraView-<version>-Windows-x86_64.exe`
  and run it. Windows may warn that the installer is unrecognised: choose
  **More info**, then **Run anyway**. Open DiffraView from the Start menu or
  the desktop shortcut. It installs to `%LOCALAPPDATA%\Programs\DiffraView` by
  default. If DiffraView fails to start, the details are in
  `%LOCALAPPDATA%\DiffraView\diffraview.log`.
- **Windows/Linux conda install:**
  ```bash
  conda create -n diffraview \
    -c toastisme/label/dials-main -c conda-forge -c toastisme \
    diffraview diffraview-desktop
  ```
  On Windows, put the command on one line. Once DIALS 3.31 is on conda-forge,
  the `-c toastisme/label/dials-main` channel is no longer needed.

  This adds a DiffraView shortcut to the Start menu (Windows) or the
  applications menu (Linux; with conda's menuinst 2.5.2 the shortcut has no
  icon). Or run DiffraView from the command line, without activating the
  environment:
  ```bash
  conda run -n diffraview diffraview                # desktop app
  conda run -n diffraview diffraview path/to/data   # open a processing folder
  conda run -n diffraview diffraview --browser      # use the web browser instead
  ```
  Leave out `diffraview-desktop` to install only the browser version.

  Don't install the conda package into a DIALS developer install's
  `conda_base`: it would replace the development DIALS with conda-forge's. Use
  the desktop app or install from source instead.

### Installing DiffraView on top of existing DIALS install (Linux, MacOS)
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

The first time it runs, the app asks whether to use the DIALS from a CCP4
installation (found in `/Applications`, `/opt/xtal` and other usual places,
or a `ccp4-<version>` folder you select) or a local DIALS installation (found
in the usual conda locations and developer installs, or a folder you select),
and remembers the answer in `~/.config/diffraview/config`. If that DIALS is
missing Python packages the server needs, the app offers to install them with
pip. For a read-only installation such as CCP4, they go into
`~/.config/diffraview/python-packages/`. If the DIALS is too old, the app says
which version it found. It needs DIALS 3.31 or later.

```bash
conda create -n dials -c toastisme/label/dials-main -c conda-forge dials
```

### From source on top of existing DIALS install
Installs into an existing DIALS environment, which needs DIALS 3.31 or later
(see above). Needs npm and Node.js 20.19+ or 22.12+ (for Vite; `diffraview`
checks this before starting).

```bash
git clone https://github.com/toastisme/diffraview.git
cd diffraview
./install.sh /path/to/dials/conda_base
```

This adds `diffraview` (desktop app) and `diffraview-browser` to
`~/.local/bin`.

For packaging and release details, see [recipe/README.md](recipe/README.md)
and [installer/README.md](installer/README.md).

## Development

### How the server is organised
Data are always held as DIALS `.expt`/`.refl` files, whichever program
produced them, so each processing step can be run by a different program.

- **Backends** (`src/diffraview/backends/`) run steps (import, find spots,
  index, ...) with a processing program. A backend other than DIALS converts
  its inputs from, and its outputs back to, DIALS files. The program for a step
  is the one chosen in the Software menu when the step is run.
- **Modes** (`src/diffraview/modes/`) hold what depends on the type of
  experiment (TOF, Laue, rotation, ...): the parameters sent to each tab after a
  step, and tools such as the TOF experiment planner. A mode is chosen after
  import from the experiment type.
- Each mode has its own client pipeline, independent of the others.
  ToF Laue data use `client/src/components/tof_laue/` and
  `client/src/contexts/tof_laue/` (`ToFLaue*`), rotation data
  `client/src/components/rotation/` and `client/src/contexts/rotation/`
  (`Rotation*`). Only generic UI (`components/ui/`,
  the Import tab, the viewers) is shared. Before import, the
  `components/pre_import/` tabs show only Import.
  `session.capabilities` (which gives the experiment type) is sent before the
  import step's tab updates, and `RootContext` passes each `state.update` for
  `find_spots`, `index`, `refine` or `integrate` to the current mode's
  contexts.
- Each processing folder records which program ran each step, and the files it
  produced, in `diffraview_state.json`. It also keeps any instrument and
  experiment descriptions the user edited in the summary bar (by experiment
  index). Without an edit, these come from the format class's
  `get_instrument_name` / `get_experiment_description`, or are "Unknown" if
  the format class doesn't provide them.
- A xia2 run (DIALS pipeline) can be opened like a processing folder
  (`backends/dials/xia2.py`). DiffraView changes the files it opens (it adds
  columns to reflection tables), so each sweep is copied into its own
  `dv_xia2_<sweep>_<date>` folder in the processing folder (or the xia2 run
  if none is set). Opening the run again reuses these folders, found by the
  `source` recorded in their manifest.
  - Files come from `xia2.json`: Find Spots from the indexer's spot list,
    Index from its chosen Bravais setting (as after DiffraView's reindexing),
    then the refiner's and integrater's final files.
  - Each step's arguments come from its job's command in `xia2-debug.txt`, and
    its log joins xia2's numbered job logs (e.g. `9_` and `10_dials.refine`,
    and `dials.search_beam_position` before indexing). The Import log names
    the run and shows `xia2-summary.dat`.

### Message protocol
The client and server exchange JSON over a WebSocket
(`src/diffraview/protocol.py`, `client/src/lib/protocol.ts`).

- Client to server: `{"channel": "server", "type": "workflow.run", "payload": {"step": "find_spots", "backend": "DIALS", "args": {...}}}`.
  Types are grouped by namespace (`session.`, `file.`, `workflow.`, `planner.`,
  `rlv.`, ...); each is handled by a method decorated with `@command` in
  `src/diffraview/handlers/`.
- Server to client: `{"channel": "gui", "type": "state.update", "target": "find_spots", "params": {...}}`
  updates the state of a tab or viewer. Other types are `session.error`,
  `session.clear_experiment`, `session.lost_connection` and
  `session.capabilities`.
- `session.capabilities`, sent once a dataset is loaded, lists the programs
  available and the steps each can run, and the mode's viewers and features.
  The client uses it to choose which algorithm tabs, viewer tabs and Software
  menu entries to show.
- The embedded viewers send the same `{"channel": "server", "type", "payload"}`
  messages, and the server sends them `{"channel": "<viewer>", "type", "payload"}`
  (`send_viewer`), or msgpack `{"type", "payload"}` for image and mesh data
  (`send_binary`).
- Each connection sends `session.connect {id}` (`gui` or the viewer's name).
  If another window connects with the same id, for example a second browser
  tab, the server sends to the new one and closes the old one with code 4001.
  The old window then shows a message saying it was opened elsewhere.

### Adding a viewer, mode or backend
- **Viewer tab**: add a `Trigger` and `Panel` in
  `client/src/components/viewers/` and register them in `registry.ts`, then
  list the viewer in the `viewers` of the modes that show it.
- **Mode**: subclass `ExperimentMode`, provide `_<step>_output_params` for
  each step and the methods the base leaves to each mode,
  set `viewers` and `features`, and return it from `create_mode`.
  Handlers for mode-only tools declare `@command(..., requires="<feature>")`;
  add `optional=True` to ignore the message, rather than report an error,
  for modes without the feature.
  On the client, copy a mode's `components/<mode>/` and `contexts/<mode>/`
  folders (its `<Mode>AlgorithmTabs`, tabs, `<Mode>ReflectionTable` and the
  `<Mode>Mode.tsx` providers and state hook), then add the mode to
  `client/src/lib/modes.ts`, `components/modes.tsx`, `AppProviders.tsx` and
  the `modeStates` in `RootContext.tsx`.
- **Backend**: implement `Backend` (`supports`, `log_file`, `log_files`,
  `run_step`) and add it to `get_backend` and `available_backends`.

## Roadmap
- [x] Complete reduction workflow for neutron time-of-flight Laue data using DIALS
- [x] Desktop Electron app
- [ ] Complete reduction workflow for X-ray rotation data using DIALS (in development)
- [ ] Complete reduction workflow for X-ray rotation data using XDS (in development)
- [ ] Complete reduction workflow for neutron time-of-flight Laue data using Mantid
- [ ] Deployment in CCP4 Cloud
- [ ] Shared sessions between multiple users


