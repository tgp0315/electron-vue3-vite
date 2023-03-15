const { ipcMain, BrowserWindow } = require('electron')
const WinState = require('electron-win-state').default
const winState = new WinState({
	width: 800,
	height: 600,
	// your normal BrowserWindow options...
})
ipcMain.handle('on-open-event', (e, url) => {
  const win = new BrowserWindow({
    ...winState.winOptions,
    show: false
  })
  win.on('ready-to-show', () => {
    win.show()
  })
  win.loadURL(url)
  winState.manage(win)
})
