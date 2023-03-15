<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { ref, provide } from 'vue'
import Header from './views/header.vue'
const isShow = ref(false)
const setIsShow = value => {
  isShow.value = value
}
provide('dialog-show', {
  isShow,
  setIsShow
})
// 窗口显示状态
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
#app {
  height: 100%;
}
</style>
