<template>
  <div class="mask" @click="maskClick">
    <div class="message-box">
      <div class="message-content">
        <div class="title">{{ title }}</div>
        <div class="content">{{ content }}</div>
      </div>
      <div class="message-buttons">
        <button @click="cancel">取消</button>
        <button @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  content: {
    type: String,
    default: "内容",
  },
  confirm: {
    type: Function,
    default: () => {
      console.log(666);
    },
  },
  cancel: {
    type: Function,
    default: () => {
      console.log(444);
    },
  },
  destroyed: {
    type: Function,
  },
});

const maskClick = () => {
  props.destroyed();
};

const handleEscKey = (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    // console.log("Esc 键被按下");
    props.destroyed();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscKey);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscKey);
});
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.message-box {
  width: 500px;
  height: 200px;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.message-content {
  flex: 1;
  text-align: left;
}

.message-buttons {
  display: flex;
  justify-content: flex-end;
}

.message-buttons button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.message-buttons button:first-child {
  background-color: #ccc;
}

.message-buttons button:last-child {
  background-color: #007bff;
  color: white;
}
</style>
