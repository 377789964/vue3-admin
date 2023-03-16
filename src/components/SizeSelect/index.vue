<template>
  <el-dropdown trigger="click" @command="handlerSize">
    <div>
      <svg-icon class-name="size-icon" icon-class="size"></svg-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in sizeOptions"
          :key="item.value"
          :command="item.value"
          :disabled="item.value === size"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { Size } from "@/plugins/element"
import { useAppStore } from "@/stores/app"
import { storeToRefs } from "pinia"

const store = useAppStore()
const { size } = storeToRefs(store)
const { proxy } = getCurrentInstance()
const sizeOptions = ref([
  { label: "Default", value: "default" },
  { label: "Large", value: "large" },
  { label: "Small", value: "small" }
])

const handlerSize = (command: Size) => {
  // console.log(command, "command")
  store.setSize(command)
  proxy?.$message.success({
    type: "success",
    message: "Switch Size Success"
  })
}
</script>

<style lang="scss">
.size-icon {
  font-size: 18px;
}
</style>
