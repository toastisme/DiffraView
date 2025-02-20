const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const { exec } = require('child_process');
const { shell } = require('electron');

let mainWindow;
let splash;
const SERVER_PORT = 50010;
const CLIENT_PORT = 50011;

function killProcessOnPort(port) {
  exec(`lsof -ti tcp:${port}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error finding process on port ${port}:`, err);
      return;
    }
    const pid = stdout.trim();
    if (pid) {
      console.log(`Killing process on port ${port} with PID: ${pid}`);
      exec(`kill -9 ${pid}`, (killErr, killStdout, killStderr) => {
        if (killErr) {
          console.error(`Error killing process with PID ${pid}:`, killErr);
        } else {
          console.log(`Successfully killed process with PID: ${pid}`);
        }
      });
    } else {
      console.log(`No process found on port ${port}`);
    }
  });
}

function createSplash() {
  splash = new BrowserWindow({
    fullscreen: false,
    frame: false,  
    alwaysOnTop: true,  
    transparent: true,
    width: 1024,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  
  splash.loadFile('splash.html');
  splash.center();
  splash.show();  
}

function waitForPort(port) {
  return new Promise((resolve, reject) => {
    const maxAttempts = 30;  
    let attempts = 0;
    
    const checkPort = () => {
      const http = require('http');
      const req = http.get(`http://localhost:${port}`, (res) => {
        resolve(true);
      }).on('error', (err) => {
        attempts++;
        if (attempts >= maxAttempts) {
          reject(new Error(`Server on port ${port} not ready after ${attempts} attempts`));
        } else {
          setTimeout(checkPort, 500);  
        }
      });
      req.end();
    };
    
    checkPort();
  });
}

async function createWindow() {
  try {
    await Promise.all([
      waitForPort(SERVER_PORT),
      waitForPort(CLIENT_PORT)
    ]);
  } catch (error) {
    console.error('Error waiting for ports:', error);
  }

  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'src/assets/icon.png'),
    fullscreen: false,
    width: 1024,
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: true,
    },
    autoHideMenuBar: true,
  });

  mainWindow.loadURL("http://localhost:" + CLIENT_PORT);

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

  mainWindow.once('ready-to-show', () => {
    if (splash) {
      splash.close();
    }
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(async () => {
  createSplash();
  
  await createWindow().catch(err => {
    console.error('Error creating main window:', err);
  });
});

app.on('before-quit', () => {
  killProcessOnPort(SERVER_PORT);
  killProcessOnPort(CLIENT_PORT);
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