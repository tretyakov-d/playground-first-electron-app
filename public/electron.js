const { app, BrowserWindow } = require('electron');
const path = require("path");

const windowUrl = app.isPackaged
    ? `file://${path.join(__dirname, '../build/index.html')}`
    : `http://localhost:3000`;

let mainWindow;
let interval;

function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 800, 
    height: 600 ,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js'),
      nodeIntegration: false
    }
  });
  mainWindow.loadURL(windowUrl);
  mainWindow.on(`closed`, () => {
      clearInterval(interval)
      mainWindow = null
  });
  interval = setInterval(() => {
    const msg = new Date().toLocaleTimeString()
    mainWindow.webContents.send('TICK', msg)
  }, 1000)
}

app.on(`ready`, createWindow);

app.on(`window-all-closed`, () => {
  if (process.platform !== `darwin`) {
    app.quit();
  }
});

app.on(`activate`, () => {
  if (mainWindow === null) {
    createWindow();
  }
});