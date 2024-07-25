<template>
  <div class="main_container">
    <MyButton primary @click="handlePrimaryClick">Primary Button</MyButton>
    <VirtualList></VirtualList>
  </div>
</template>

<script setup>
import VirtualList from "@/components/VirtualList.vue";
import MyButton from "@/components/MyButton.vue";
import MessageBox from "@/components/MessageBox/MessageBox.js";

function handlePrimaryClick() {
  const mb = MessageBox({
    title: "测试 标题",
    content: "测试 内容",
    confirm: () => {
      console.log("测试 confirm");
      mb.destroyed();
    },
    cancel: () => {
      console.log("测试 cancel");
      mb.destroyed();
    },
  });
}
</script>

<style scoped>
.main_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
</style>
