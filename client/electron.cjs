const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'src/assets/icons/dials_logo.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    },
    autoHideMenuBar: true,
  });

  //console.log(path.join(__dirname, 'build', 'index.html'));
  //mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
  mainWindow.loadURL("http://localhost:5173");
  return;
  mainWindow.loadFile(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5173'
      : url.format({
        pathname: path.join(__dirname, 'build', 'index.html'),
        protocol: 'file:',
        slashes: true,
      }) // Production build
  );


}

app.on('ready', createWindow);

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

