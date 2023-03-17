const { app, BrowserWindow } = require('electron')
const path = require('path')
const WinState = require('electron-win-state').default
const buildMenu = require('./controller/buildMenu')
const createTray = require('./controller/tray')
require('./controller/getSource')
require('./controller/alert')
require('./controller/openWindow')
require('./controller/getimgList')
const winState = new WinState({
	width: 1200,
	height: 600,
  electronStoreOptions: {
    name: 'window-state-main'
  }
	// your normal BrowserWindow options...
})
const createWindow = () => {
  const win = new BrowserWindow({
    ...winState.winOptions,
    show: false,
    webPreferences: {
      preload: path.resolve(__dirname, './preload/index.js')
    }
  })
  // console.log(app.getAppPath())
  // if (!app.isPackaged) { // electron-vite-vue#298
    win.loadURL('http://127.0.0.1:5173/')
    // Open devTool if the app is not packaged
    win.webContents.openDevTools()
  // } else {
  //   win.loadFile(path.resolve(__dirname, './index.html'))
  // }
  // win.loadURL('http://127.0.0.1:5174')
  // win.webContents.openDevTools()
  buildMenu(win)
  win.on('ready-to-show', () => {
    win.show()
    createTray(app)
  })
  winState.manage(win)
  // const menu = new Menu()
  // const menuItem = new MenuItem({
  //   label: 'actions',
  //   submenu: [
  //     {
  //       label: '添加',
  //       click: () => {
  //         // win.webContents.send('on-open-dialog')
  //         console.log(win)
  //       }
  //     }
  //   ]
  // })
  // menu.append(menuItem)
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})