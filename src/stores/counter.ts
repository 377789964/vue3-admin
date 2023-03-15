// import pinia from "./index"
import { defineStore } from "pinia"
import { ref } from "vue"
// console.log("counter.vue", pinia)
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  return {
    count,
    increment
  }
})
