const { ipcMain, BrowserWindow } = require('electron')
const path = require('path')
const WinState = require('electron-win-state').default
const saveimg = require('./saveimg')
let win = null
const style = `width: 80px;height: 30px;background: #fe45a0;border-radius: 6px;text-align: center;line-height: 30px;position: fixed;right: 10px;bottom: 20px;` 

const js = `
  const div = document.createElement('div')
  div.id = 'close-button'
  div.innerHTML = '关闭窗口'
  div.style.cssText = '${style}'
  div.onclick = () => {
    window.detail.closeWin()
  }
  document.body.appendChild(div)
`

ipcMain.handle('on-open-event', (e, url) => {
  const winState = new WinState({
    width: 800,
    height: 600,
    electronStoreOptions: {
      name: 'window-state-url'
    }
    // your normal BrowserWindow options...
  })
  win = new BrowserWindow({
    ...winState.winOptions,
    show: false,
    webPreferences: {
      preload: path.resolve(__dirname, '../preload/detail.js') 
    }
  })
  win.on('ready-to-show', () => {
    win.show()
  })
  win.loadURL(url)
  win.webContents.openDevTools()
  win.webContents.executeJavaScript(js).catch(() => {})
  winState.manage(win)

  win.webContents.on('context-menu', (e, args) => {
    const { srcURL } = args
    saveimg(srcURL)
  })
})

ipcMain.on('on-close-event', () => {
  win.close()
})
