<template>
  <div class="header-container">
    <template v-for="item, index in list" :key="index">
      <div class="tab" :class="{isSelected: selected === index}" @click="changTab(index)">
        <router-link :to="item.link">
          {{ item.label }}
        </router-link>
      </div>
      
    </template>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref(0)
const list = ref([
  {
    label: '网站收藏',
    link: '/home'
  },
  {
    label: '图片收藏',
    link: '/imageGallery'
  }
])

const changTab = (t) => {
  selected.value = t
}
</script>

<style scoped lang="less">
.header-container {
  display: flex;
  align-items: center;
  background: #584ada;
  color: #fff;
  justify-content: space-around;

  .tab {
    flex: 1;

    a {
      display: inline-block;
      width: 100%;
      text-align: center;
    }
    &:hover {
      background: #3cbf81;

      a {
        color: #c6368c;
      }
    }

    &.isSelected {
      a {

        color: #c6368c;
      }
      background: #3cbf81;
    }
  }
}
</style>