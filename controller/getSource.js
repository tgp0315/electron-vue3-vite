const { ipcMain, BrowserWindow } = require('electron')

const getSource = (url) => {
  return new Promise((resolve, reject) => {
    // ipcMain.handle('on-url-event', (e, url) => {
    const win = new BrowserWindow({
      width: 500,
      height: 500,
      show: false,
      webPreferences: {
        offscreen: true
      }
    })
    win.loadURL(url)
    const { webContents } = win
    webContents.on('did-finish-load', async () => {
      const title = win.getTitle()
      try {
        const image = await webContents.capturePage()
        const img = image.toDataURL()
        if (image.isEmpty()) {
          resolve()
        } else {
          resolve({
            title,
            img, 
            url
          })
        }
      } catch (e) {
        reject(e)
      }
    })
  })
}

ipcMain.handle('on-url-event', async (e, url) => {
  let result = ''
  try {
    result = await getSource(url)
  } catch(e) {
    result = null
  }
  return result
})

// module.exports = getSource