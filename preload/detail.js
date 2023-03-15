const { contextBridge, ipcRenderer } = require('electron')


const closeWin = () => {
  ipcRenderer.send('on-close-event')
}

contextBridge.exposeInMainWorld('detail', {
  closeWin
})
