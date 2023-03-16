import { defineStore } from "pinia"
import { Size } from "@/plugins/element"
export const useAppStore = defineStore(
  "app",
  () => {
    // 状态
    const state = reactive({
      sidebar: {
        opened: true
      },
      size: "default"
    })
    const sidebar = computed(() => state.sidebar)
    const size = computed(() => state.size)
    // action
    const toggleSidebar = () => {
      state.sidebar.opened = !state.sidebar.opened
    }
    const setSize = (size: Size) => {
      state.size = size
    }
    return {
      state,
      size,
      setSize,
      sidebar,
      toggleSidebar
    }
  },
  {
    persist: {
      storage: window.sessionStorage,
      paths: ["state.siderbar.opened", "state.size"]
    }
  }
)
