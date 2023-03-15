<template>
  <div class="dialog-wrap">
    <div class="content">
      <div class="input">
        <input type="text" v-model="url" placeholder="请输入网址...">
      </div>
      <div class="btns">
        <button :disabled="isclick" @click="handleAdd">添加</button>
        <button @click="cancle">取消</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { inject, ref } from 'vue'
import userWebsiteStore from '@/store'
const websiteStore = userWebsiteStore()
const { setIsShow } = inject('dialog-show')
const url = ref('https://juejin.cn/user/1978776660216136')
const isclick = ref(false)
const cancle = () => {
  setIsShow(false)
}
const handleAdd = async () => {
  isclick.value = true
  // console.log(url, 'url')
  const result = await window.dialog.sendUrl(url.value)
  // console.log(result, 'result')
  result && websiteStore.add(result)
  isclick.value = false
  cancle()
  result && dialog.addNotice()
}
</script>

<style lang='less'>
.dialog-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 100%;
    padding: 0 20px;

    input {
      height: 30px;
      width: 100%;
      outline: none;
      margin-bottom: 10px;
      font-size: 12px;
    }

    .btns {
      button {
        height: 30px;
        margin-right: 10px ;
        line-height: 30px;
        display: inline-block;
        padding: 0 8px;
      }
    }
  }
}
</style>

