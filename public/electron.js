const { app, BrowserWindow, ipcMain, remote } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const fs = require("fs");
const systemPreferences = remote.systemPreferences;

const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS", "DEVTRON"];

  return Promise.all(
    extensions.map((name) => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

// available in global scope
let mainWindow;

// create app window
function createWindow() {
  process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
  mainWindow = new BrowserWindow({
    width: 550,
    height: 550,
    minWidth: 550,
    minHeight: 550,
    resizable: false,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // monitor, and debug your Electron
  require("devtron").install();

  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }

  // clean-up
  mainWindow.on("closed", () => (mainWindow = null));

  // Install React Dev Tools
  const {
    default: installExtensions,
    REACT_DEVELOPER_TOOLS,
  } = require("electron-devtools-installer");

  installExtensions(REACT_DEVELOPER_TOOLS)
    .then((name) => {
      console.log(`Added Extension:  ${name}`);
    })
    .catch((err) => {
      console.log("An error occurred: ", err);
    });
}

app.on("ready", async () => {
  if (process.argv.indexOf("--noDevServer") === -1) {
    await installExtensions();
  }
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
