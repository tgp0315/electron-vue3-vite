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

contextBridge.exposeInMainWorld('dialog', {
  sendUrl,
  addNotice,
  open
})
