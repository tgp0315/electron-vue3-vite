const { ipcMain, dialog } = require('electron')

ipcMain.on('on-add-success', (e) => {
  dialog.showMessageBox({
    message: '添加成功',
    type: 'info'
  })
})
