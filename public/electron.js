const { app, BrowserWindow } = require('electron');
const path = require("path");

const windowUrl = app.isPackaged
    ? `file://${path.join(__dirname, '../build/index.html')}`
    : `http://localhost:3000`;

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 800, 
    height: 600 
  });
  mainWindow.loadURL(windowUrl);
  mainWindow.on(`closed`, () => (mainWindow = null));
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