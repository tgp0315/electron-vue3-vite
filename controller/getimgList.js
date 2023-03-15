const { ipcMain } = require('electron')
const fs = require('fs')
const path = require('path')
ipcMain.handle('on-getimgs-event', () => {
  const files = fs.readdirSync(path.resolve(__dirname, '../load'))
  console.log(files)
  return files ? files : []
})