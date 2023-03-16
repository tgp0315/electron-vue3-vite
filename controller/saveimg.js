const { Menu, dialog } = require('electron')
const got = require('got')
const path = require('path')
const imageType = require('image-type')
const fs = require('fs')
let imgUrl = ''
const menu = Menu.buildFromTemplate([
  {
    label: '保存图片',
    accelerator: 'CmdOrCtrl+S',
    click: async () => {
      console.log(1111111)
      try {
        const response = await got.get(imgUrl)
        const { rawBody } = response
        const chunk = Buffer.from(rawBody)
        const imgType = imageType(chunk)
        const timeTesp = +new Date()
        let { filePath } = await dialog.showSaveDialog({
          title: '保存图片',
          defaultPath: path.resolve(__dirname, `../load/${timeTesp}.${imgType.ext}`),
          filters: [{ name: "Custom File Type", extensions: ["png", "jpg", 'gif'] }],
        })
        console.log(filePath)
        if (!filePath) return;
        fs.writeFileSync(filePath, chunk)
      } catch (e) {
        console.log(e)
      }
      // let base64 = imgUrl.replace(/^data:image\/\w+;base64,/, "");
      // let dataBuffer = new Buffer.from(base64, "base64");
      
    }
  }
])
const saveimg = (url) => {
  console.log(url)
  if (url) {
    imgUrl = url
    menu.popup()
  }
}

module.exports = saveimg