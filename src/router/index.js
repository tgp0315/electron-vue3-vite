import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/imageGallery',
     component: () => import(/* webpackChunkName: "imageGallery" */ '../views/imageGallery.vue')
  }
]

const router =  createRouter({
  history: createWebHashHistory(),
  routes
})

export default router