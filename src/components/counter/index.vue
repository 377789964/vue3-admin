<template>
  <div>
    <button @click="handlerClick"></button>
    <span>{{ counter.count }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter"
const counter = useCounterStore()
// console.log(counter, "counter")
const handlerClick = () => {
  counter.increment()
}
</script>
