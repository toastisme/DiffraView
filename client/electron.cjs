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

// First command-line argument naming an existing directory, e.g.
// `DiffraView.AppImage ./my_data_dir`.
function processingDirFromArgv() {
  const args = process.argv.slice(app.isPackaged ? 1 : 2);
  const dir = args.find(a => !a.startsWith('-') && fs.existsSync(a) && fs.statSync(a).isDirectory());
  return dir ? path.resolve(dir) : null;
}

function fatal(title, message) {
  dialog.showMessageBoxSync(mainWindow, { type: 'error', title, message });
  app.exit(1);
}

// Asks user to pick a DIALS environment
// Returns its python | null 
function locateDialsPython(reason) {
  for (;;) {
    const choice = dialog.showMessageBoxSync(mainWindow, {
      type: 'warning',
      title: 'DIALS not found',
      message: reason,
      detail:
        'DiffraView needs a DIALS installation. Select the DIALS environment folder ' +
        '(the one containing bin/python), for example a conda environment with dials ' +
        'installed, or the conda_base folder of a DIALS developer installation.',
      buttons: ['Locate DIALS…', 'Quit'],
      defaultId: 0,
      cancelId: 1,
    });
    if (choice !== 0) return null;

    const picked = dialog.showOpenDialogSync(mainWindow, {
      title: 'Select DIALS environment folder',
      properties: ['openDirectory'],
    });
    if (!picked) continue;
    const python = dialsEnv.pythonFor(picked[0]);
    if (!fs.existsSync(python)) {
      reason = `No Python found at ${python}.`;
      continue;
    }
    return python;
  }
}

// Finds DIALS, checks it can run the server (offering to install missing
// Python packages), then starts the server.
async function startManagedServer() {
  let python = dialsEnv.findDialsPython(process.argv);
  let reason = 'No DIALS installation was found.';
  for (;;) {
    if (!python) python = locateDialsPython(reason);
    if (!python) { app.exit(1); return; }

    const info = dialsEnv.inspectPython(python);
    if (!info.ok) {
      reason = `The Python at ${python} cannot be used with DiffraView:\n\n${info.error}\n\n` +
        'DiffraView requires DIALS 3.27 or later.';
      python = null;
      continue;
    }

    if (info.missing.length > 0) {
      const choice = dialog.showMessageBoxSync(mainWindow, {
        type: 'question',
        title: 'Missing Python packages',
        message: `The DIALS environment at ${path.dirname(path.dirname(python))} is missing ` +
          `Python packages DiffraView needs: ${info.missing.join(', ')}.`,
        detail: 'Install them into that environment now with pip?',
        buttons: ['Install', 'Choose another DIALS…', 'Quit'],
        defaultId: 0,
        cancelId: 2,
      });
      if (choice === 1) { python = null; reason = 'Select a different DIALS installation.'; continue; }
      if (choice === 2) { app.exit(1); return; }
      const install = dialsEnv.installRequirements(python, info.missing);
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
  serverProcess.once('exit', () => { serverExited = true; });

  try {
    await waitForPort(serverPort, 120000, () => !serverExited);
  } catch (error) {
    fatal('DiffraView server failed to start', `${error.message}\n\n${output}`);
  }
}

async function createWindow() {
  // Create and show the window immediately so it gets focus from the OS.
  // Show splash.html first to hide the blank loading period.
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'src/assets/icon.png'),
    fullscreen: false,
    frame: false,
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

  if (MANAGE_SERVER) {
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

// Native file/folder picker for the client's browse_* commands (see
// src/lib/electron.ts). Resolves to the chosen paths, [] if cancelled.
ipcMain.handle('select-paths', async (_event, { title, directory, multiple }) => {
  const properties = [directory ? 'openDirectory' : 'openFile'];
  if (multiple) properties.push('multiSelections');
  const result = await dialog.showOpenDialog(mainWindow, { title, properties });
  return result.canceled ? [] : result.filePaths;
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
