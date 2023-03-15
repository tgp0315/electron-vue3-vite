<template>
  <div class="list">
    <p class="no-data" v-if="!websiteStore.websites.length">暂无数据</p>
    <div class="content" v-else>
      <div
        :class="['sub', { selected: isSelected === index }]"
        v-for="(item, index) in websiteStore.websites"
        :key="index"
        @click="selected(index, item.url)"
      >
        <img class="img" :src="item.img" alt="" />
        <h2>{{ item.title }}</h2>
        <button @click.prevent.stop="deleteWebsite(index)">X</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import userWebsiteStore from "@/store";
import Dialog from "./dialog.vue";
const websiteStore = userWebsiteStore();
const deleteWebsite = (index) => {
  websiteStore.delete(index);
  isSelected.value = 0
  if (!websiteStore.websites.length) {
    isSelected.value = ''
  }
};
const isSelected = ref("");
const selected = (index, url)=> {
  isSelected.value = index
  // window.open(url, '_blank', 'top=20,left=200,nodeIntegration=no')
  dialog.open(url)
}
</script>

<style lang="less" scoped>
.no-data {
  font-weight: bold;
  color: silver;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 100px;
  z-index: -1;
}

.sub {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #999;
    border-left: 2px solid dodgerblue;
  }

  &.selected {
    background: #999;
    border-left: 2px solid dodgerblue;
  }
  .img {
    width: 100px;
    height: 100px;
  }
}
</style>
