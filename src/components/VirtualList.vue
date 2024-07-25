<script setup>
/**
 * 虚拟列表
 * 从始至终 dom 树上的 li元素  就几个而已
 */

import { ref, onMounted } from "vue";

const windowRef = ref(null);
const itemHeight = 100;
const bufferNum = 5;

// 数据数量：10W条
const allData = ref(Array.from({ length: 10000 }, (_, i) => i));
const showingList = ref([]);
const showingNum = ref(0);
const top = ref(0);

onMounted(() => {
  // showingList.value = allData.value;
  // 计算可视区域有几行dom
  showingNum.value =
    Math.ceil(
      parseFloat(window.getComputedStyle(windowRef.value).getPropertyValue("height")) / itemHeight
    ) + 1;
  // 从数据中截取显示的部分
  showingList.value = allData.value.slice(0, showingNum.value);
  windowRef.value.addEventListener("scroll", handleScroll);
});

function handleScroll(e) {
  // 计算起始索引
  const startIndex = Math.max(Math.floor(e.target.scrollTop / itemHeight) - bufferNum, 0);
  // 计算结束索引
  const endIndex = Math.min(startIndex + showingNum.value + bufferNum, allData.value.length);
  // 更新显示的数据
  showingList.value = allData.value.slice(startIndex, endIndex);
  // console.log(showingList.value);
  // 更新偏移量
  top.value = startIndex * itemHeight;
}
</script>

<template>
  <div class="container" ref="windowRef">
    <div class="inner" :style="{ top: top + 'px' }">
      <li class="item0" v-for="item in showingList">虚拟列表{{ item }}</li>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 200px;
  height: 600px;
  background-color: #00f7ff;
  display: flex;
  margin: auto;
  overflow: scroll;
  overflow-x: hidden;
  position: relative;
}
.inner {
  width: inherit;
  height: inherit;
  position: absolute;
}
.item0 {
  height: 100px;
  background-color: #9ff106;
  margin-top: 5px;
}
</style>
