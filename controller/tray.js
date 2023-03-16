const { Tray } = require('electron')
const path = require('path')

function createTray(app, win) {
  const tray = new Tray(path.resolve(__dirname, '../src/assets/favorite.png'))
  tray.setToolTip('收藏夹')
  tray.on('click', e => {
    if (e.shiftKey) {
      app.qiut()
    }
  })
}

module.exports = createTray
