const { app, BrowserWindow, dialog, ipcMain, shell } = require('electron');
const fs = require('fs');
const net = require('net');
const path = require('path');
const dialsEnv = require('./dials-env.cjs');

app.commandLine.appendSwitch('js-flags', '--harmony-float16array');

let mainWindow;
let serverProcess = null;
const SERVER_ADDR = '127.0.0.1';
// Vite dev server, only used when running unpackaged (./diffraview).
const CLIENT_PORT = Number(process.env.DIFFRAVIEW_CLIENT_PORT) || 50011;

// The server is started and passes its port in 
// DIFFRAVIEW_SERVER_PORT. Only a standalone packaged app (e.g. the AppImage)
// runs its own, on a free port chosen in startManagedServer().
const MANAGE_SERVER = app.isPackaged && !process.env.DIFFRAVIEW_SERVER_PORT;
let serverPort = Number(process.env.DIFFRAVIEW_SERVER_PORT) || 50010;

function isPortOpen(port) {
  return new Promise(resolve => {
    const socket = net.connect(port, SERVER_ADDR);
    socket.once('connect', () => { socket.destroy(); resolve(true); });
    socket.once('error', () => resolve(false));
  });
}

// `preferred` if nothing is listening on it, otherwise any free port.
function findFreePort(preferred) {
  const tryListen = port => new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once('error', reject);
    server.listen(port, SERVER_ADDR, () => {
      const { port: bound } = server.address();
      server.close(() => resolve(bound));
    });
  });
  return tryListen(preferred).catch(() => tryListen(0));
}

async function waitForPort(port, timeoutMs, isAlive = () => true) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await isPortOpen(port)) return;
    if (!isAlive()) throw new Error('process exited during startup');
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error(`nothing listening on port ${port} after ${timeoutMs / 1000}s`);
}

// On macOS a folder dropped on the Dock icon, or opened with DiffraView in
// Finder, arrives as an open-file event rather than on the command line.
// Only used if it arrives before the server starts.
let openedPath = null;
app.on('open-file', (event, filePath) => {
  event.preventDefault();
  openedPath = filePath;
});

// Folder from open-file, or the first command-line argument naming an
// existing directory, e.g. `DiffraView.AppImage ./my_data_dir`.
function processingDirFromArgv() {
  if (openedPath && fs.existsSync(openedPath) && fs.statSync(openedPath).isDirectory()) {
    return openedPath;
  }
  const args = process.argv.slice(app.isPackaged ? 1 : 2);
  const dir = args.find(a => !a.startsWith('-') && fs.existsSync(a) && fs.statSync(a).isDirectory());
  return dir ? path.resolve(dir) : null;
}

function fatal(title, message) {
  dialog.showMessageBoxSync(mainWindow, { type: 'error', title, message });
  app.exit(1);
}

const MIN_DIALS = dialsEnv.MIN_DIALS.join('.');

// Asks whether to use CCP4's DIALS or a local one; returns its python | null.
// `rejected` pythons have already failed inspection.
function chooseDials(reason, rejected) {
  const ccp4 = dialsEnv.ccp4Installs()
    .map(dialsEnv.pythonFor)
    .filter(python => !rejected.has(python));
  const local = dialsEnv.findDialsPython(process.argv, rejected);
  const prefix = python => path.dirname(path.dirname(python));
  const found = [
    ...ccp4.map(python => `CCP4: ${prefix(python)}`),
    local && `Local DIALS: ${prefix(local)}`,
  ].filter(Boolean);

  for (;;) {
    const choice = dialog.showMessageBoxSync(mainWindow, {
      type: reason ? 'warning' : 'question',
      title: 'Choose DIALS',
      message: reason || 'Which DIALS installation should DiffraView use?',
      detail:
        'DiffraView can use the DIALS in a CCP4 installation, or a local DIALS ' +
        'installation such as a conda environment or a DIALS developer install ' +
        `(its conda_base folder). It needs DIALS ${MIN_DIALS} or later.\n\n` +
        (found.length ? `Found:\n${found.join('\n')}` : 'No DIALS installation was found automatically.') +
        '\n\nYour choice is remembered.',
      buttons: ['Use CCP4', 'Use local DIALS', 'Choose folder…', 'Quit'],
      defaultId: ccp4.length ? 0 : 1,
      cancelId: 3,
    });
    if (choice === 3) return null;
    if (choice === 0 && ccp4.length === 1) return ccp4[0];
    if (choice === 1 && local) return local;

    // Several CCP4 installs, none found, or "Choose folder…"
    const defaultPath = choice === 0 && ccp4.length ? path.dirname(prefix(ccp4[0]))
      : process.platform === 'darwin' ? '/Applications' : undefined;
    const picked = dialog.showOpenDialogSync(mainWindow, {
      title: choice === 0 ? 'Select the CCP4 folder (e.g. ccp4-9)' : 'Select the DIALS environment folder',
      defaultPath,
      properties: ['openDirectory'],
    });
    if (!picked) continue;
    const python = dialsEnv.pythonFor(picked[0]);
    if (fs.existsSync(python)) return python;
    reason = `No Python found in ${picked[0]} (looked for bin/python and bin/ccp4-python).`;
  }
}

function unusableMessage(python, info) {
  const where = dialsEnv.isCcp4(python)
    ? `The CCP4 installation at ${path.dirname(path.dirname(python))}`
    : `The DIALS environment at ${path.dirname(path.dirname(python))}`;
  if (info.tooOld) {
    return `${where} has DIALS ${info.dialsVersion || '(unknown version)'} with Python ` +
      `${info.pythonVersion}, which is too old for DiffraView.\n\n` +
      `DiffraView needs DIALS ${MIN_DIALS} or later (with Python 3.10 or later) for its ` +
      'time-of-flight integration and profile fitting. ' +
      (dialsEnv.isCcp4(python)
        ? 'Choose a newer CCP4 release or a local DIALS installation.'
        : 'Choose a newer DIALS installation.');
  }
  return `${where} cannot be used with DiffraView:\n\n${info.error}\n\n` +
    `DiffraView requires DIALS ${MIN_DIALS} or later.`;
}

// Finds DIALS (asking CCP4 or local on first run), checks it can run the
// server (offering to install missing Python packages), then starts the server.
async function startManagedServer() {
  let python = dialsEnv.configuredPython(process.argv);
  let reason = null;
  const rejected = new Set();
  for (;;) {
    if (!python) python = chooseDials(reason, rejected);
    if (!python) { app.exit(1); return; }

    const info = dialsEnv.inspectPython(python);
    if (!info.ok) {
      rejected.add(python);
      reason = unusableMessage(python, info);
      python = null;
      continue;
    }

    if (info.missing.length > 0) {
      const choice = dialog.showMessageBoxSync(mainWindow, {
        type: 'question',
        title: 'Missing Python packages',
        message: `The DIALS environment at ${path.dirname(path.dirname(python))} is missing ` +
          `Python packages DiffraView needs: ${info.missing.join(', ')}.`,
        detail: info.writable
          ? 'Install them into that environment now with pip?'
          : 'That environment is read-only, so they will be installed with pip into ' +
            '~/.config/diffraview, for DiffraView only. Install them now?',
        buttons: ['Install', 'Choose another DIALS…', 'Quit'],
        defaultId: 0,
        cancelId: 2,
      });
      if (choice === 1) { rejected.add(python); python = null; reason = 'Select a different DIALS installation.'; continue; }
      if (choice === 2) { app.exit(1); return; }
      const install = dialsEnv.installRequirements(python, info.missing, info.writable);
      if (!install.ok) {
        fatal('Installation failed', `pip install failed:\n\n${install.output.slice(-2000)}`);
        return;
      }
    }
    break;
  }
  dialsEnv.saveDialsPython(python);
  serverPort = await findFreePort(serverPort);

  console.log(`Starting DiffraView server with ${python}`);
  serverProcess = dialsEnv.startServer({
    python,
    serverDir: path.join(process.resourcesPath, 'server'),
    addr: SERVER_ADDR,
    port: serverPort,
    processingDir: processingDirFromArgv(),
  });

  // Keep the tail of the server's output to show if it fails to start.
  let output = '';
  const record = chunk => {
    process.stdout.write(chunk);
    output = (output + chunk.toString()).slice(-4000);
  };
  serverProcess.stdout.on('data', record);
  serverProcess.stderr.on('data', record);
  let serverExited = false;
  serverProcess.once('exit', () => {
    serverExited = true;
    serverProcess = null;
  });

  try {
    await waitForPort(serverPort, 120000, () => !serverExited);
  } catch (error) {
    fatal('DiffraView server failed to start', `${error.message}\n\n${output}`);
  }
}

async function createWindow() {
  // Create and show the window immediately so it gets focus from the OS.
  // Show splash.html first to hide the blank loading period.
  // The client draws its own title bar (AppMenubar.tsx). On macOS keep the
  // native traffic-light buttons, inset into it; elsewhere it draws its own.
  const titleBarOptions = process.platform === 'darwin'
    ? { titleBarStyle: 'hiddenInset', trafficLightPosition: { x: 14, y: 14 } }
    : { frame: false };

  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'src/assets/icon.png'),
    fullscreen: false,
    ...titleBarOptions,
    width: 1024,
    height: 800,
    backgroundColor: '#020817',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: true,
    },
  });

  mainWindow.maximize();
  mainWindow.loadFile('splash.html');

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (url !== mainWindow.webContents.getURL()) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('maximize', () => mainWindow.webContents.send('window-maximized', true));
  mainWindow.on('unmaximize', () => mainWindow.webContents.send('window-maximized', false));

  // Wait for splash to render, then wait for ports and a minimum display time.
  await new Promise(resolve => mainWindow.webContents.once('did-finish-load', resolve));

  // On macOS the app outlives its window, so clicking the Dock icon creates a
  // new window while the server from the first one is still running.
  if (MANAGE_SERVER && !serverProcess) {
    await startManagedServer();
  }

  const waits = [
    waitForPort(serverPort, 15000),
    new Promise(resolve => setTimeout(resolve, 1500)),
  ];
  // In dev, the client is served by the Vite dev server on CLIENT_PORT.
  // In a packaged build, the client is bundled statically and loaded from disk.
  if (!app.isPackaged) {
    waits.push(waitForPort(CLIENT_PORT, 15000));
  }

  try {
    await Promise.all(waits);
  } catch (error) {
    console.error('Error waiting for ports:', error);
  }

  if (!mainWindow) return;
  // The client reads the server's port from ?port= (see src/lib/server.ts).
  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'), { query: { port: String(serverPort) } });
  } else {
    mainWindow.loadURL(`http://localhost:${CLIENT_PORT}/?port=${serverPort}`);
  }
}

ipcMain.on('minimize-window', () => mainWindow?.minimize());
ipcMain.on('maximize-window', () => {
  if (mainWindow?.isMaximized()) mainWindow.unmaximize();
  else mainWindow?.maximize();
});
ipcMain.on('close-window', () => mainWindow?.close());
ipcMain.on('quit-app', () => app.quit());

// Native file/folder picker for the client's browse_* commands (see
// src/lib/electron.ts). Resolves to the chosen paths, [] if cancelled.
ipcMain.handle('select-paths', async (_event, { title, directory, multiple, filters }) => {
  const properties = [directory ? 'openDirectory' : 'openFile'];
  if (multiple) properties.push('multiSelections');
  const result = await dialog.showOpenDialog(mainWindow, { title, properties, filters });
  return result.canceled ? [] : result.filePaths;
});

// Native save dialog for the client's save_*/export commands. Resolves to
// [chosen path], [] if cancelled, matching select-paths.
ipcMain.handle('select-save-path', async (_event, { title, defaultName, filters }) => {
  const result = await dialog.showSaveDialog(mainWindow, { title, defaultPath: defaultName, filters });
  return result.canceled || !result.filePath ? [] : [result.filePath];
});

app.whenReady().then(async () => {
  await createWindow().catch(err => {
    console.error('Error creating main window:', err);
  });
});

app.on('will-quit', () => {
  serverProcess?.kill();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
