<template>
  <div>
    <div class="search-container">
      <div class="button" @click="handleClick">+</div>
      <div class="input">
        <input type="text" placeholder="请输入关键字...">
      </div>
    </div> 
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const { setIsShow } = inject('dialog-show')
const handleClick = () => {
  setIsShow(true)
}

</script>

<style lang="less">
.search-container {
  height: 60px;
  background: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #1e90ff;
    padding-left: 0;
    border-radius: 5px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    cursor: default;
  }

  .input {
    flex: 1;
    height: 36px;
    padding: 0 6px;
    border: 1px solid #ccc;
    border-radius: 5px;

    input {
      height: 100%;
      width: 100%;

    }
  }
}
</style>