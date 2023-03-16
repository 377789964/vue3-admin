<template>
  <svg-icon
    :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
    @click="handlerClick"
  ></svg-icon>
</template>

<script setup lang="ts">
import screenfull from "screenfull"

const { proxy } = getCurrentInstance
const isFullscreen = ref(false)
const handlerClick = () => {
  if (screenfull.isEnabled) {
    // 浏览器是否允许全屏模式
    screenfull.toggle()
    return
  }
  return proxy?.$message({
    message: "you browser can not work",
    type: "warning"
  })
}
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}
onMounted(() => {
  if (screenfull.isEnabled) {
    // 浏览器是否允许全屏模式
    // 监听全屏切换状态
    screenfull.on("change", change)
  }
})
</script>
