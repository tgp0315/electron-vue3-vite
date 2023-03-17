import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import {
//   rmSync
// } from 'node:fs'
// import electron from 'vite-plugin-electron'
// import pkg from './package.json'

// let whiteListedModules = ['vue']  
// import renderer from 'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
export default defineConfig(({
      command
    }) => {
      // rmSync('dist-electron', {
      //   recursive: true,
      //   force: true
      // })
      // const isServe = command === 'serve'
      // const isBuild = command === 'build'
      // const sourcemap = isServe || !!process.env.VSCODE_DEBUG
      return {
        // base: './',
        plugins: [
          vue(),
          // electron([
          //   {
          //     entry: './controller/alert.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/controller',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './controller/buildMenu.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/controller',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './controller/getimgList.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/controller',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './controller/getSource.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/controller',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './controller/openWindow.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/controller',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './controller/saveimg.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/controller',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './controller/tray.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/controller',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './preload/detail.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/preload',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './preload/index.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: isBuild,
          //         outDir: 'dist-electron/preload',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }, {
          //     entry: './main.js',
          //     vite: {
          //       build: {
          //         sourcemap,
          //         minify: process.env.NODE_ENV === 'production',
          //         outDir: 'dist-electron',
          //         rollupOptions: {
          //           external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
          //         },
          //       },
          //     }
          //   }])
          //   // Use Node.js API in the Renderer-process
          //   // renderer({
          //   //   nodeIntegration: true,
          //   // }))
          ],
          resolve: {
            alias: {
              '@': path.resolve(__dirname, 'src')
            }
          },
          // server: process.env.VSCODE_DEBUG && (() => {
          //   const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
          //   return {
          //     host: url.hostname,
          //     port: +url.port,
          //   }
          // })(),
          // clearScreen: false,
        }
      })