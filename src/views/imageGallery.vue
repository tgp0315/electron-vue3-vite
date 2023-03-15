<template>
  <div class="img-container">
    <img v-for="item, index in fileList" :key="index" :src="`../../load/${item}`" alt="">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const fileList = ref([])
onMounted(async() => {
  fileList.value = await dialog.getImgList()
  console.log(fileList.value)
})
</script>

<style lang="less">
.img-container {
  padding: 20px;

  img {
    width: 150px;
  }
}
</style>