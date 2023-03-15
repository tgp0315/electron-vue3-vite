<template>
  <div class="home">
    <search-bar></search-bar>
    <dialog-c v-if="isShow"></dialog-c>
    <list-c></list-c>
  </div>
</template>
<script setup>
import { inject, onMounted } from 'vue';
import SearchBar from './searchBar.vue'
import DialogC from './dialog.vue'
import ListC from './list.vue'
const { isShow, setIsShow } = inject('dialog-show')
const setDialog = () => {
  setIsShow(true)
}
onMounted(() => {
  dialog.openDialog(setDialog)
})
</script>
<style lang="less">
  .home {
    height: 100%;
  }
</style>