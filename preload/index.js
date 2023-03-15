const { contextBridge, ipcRenderer } = require('electron')

const sendUrl =async  url => {
  const result = await ipcRenderer.invoke('on-url-event', url)
  console.log(result)
  return result
}

const addNotice = () => {
  ipcRenderer.send('on-add-success', true)
}

const open = (url) => {
  ipcRenderer.invoke('on-open-event', url)
}

const getImgList = async () => {
  const filesList = await ipcRenderer.invoke('on-getimgs-event')
  return filesList
}

const openDialog = (cb) => {
  ipcRenderer.on('on-open-dialog-event', cb)
}

contextBridge.exposeInMainWorld('dialog', {
  sendUrl,
  addNotice,
  open,
  getImgList,
  openDialog
})
