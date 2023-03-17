const { Tray } = require('electron')
const path = require('path')

function createTray(app) {
  const tray = new Tray(path.resolve(__dirname, '../src/assets/private.png'))
  tray.setToolTip('收藏夹')
  tray.on('click', e => {
    if (e.shiftKey) {
      app.quit()
    }
  })
}

module.exports = createTray
