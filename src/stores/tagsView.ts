import { defineStore } from "pinia"
import {
  RouteLocationNormalizedLoaded,
  RouteRecordName,
  RouteLocationNormalized
} from "vue-router"

export const useTagsView = defineStore("tag", () => {
  const visitedViews = ref<RouteLocationNormalizedLoaded[]>([])
  // 添加视图
  const addView = (view: RouteLocationNormalizedLoaded) => {
    // 去重
    if (visitedViews.value.some((v) => v.path === view.path)) return
    visitedViews.value.push(
      Object.assign({}, view, {
        title: view.meta?.title || "tag-name"
      })
    )
    addCachedView(view)
  }
  // 删除视图
  const delView = (view: RouteLocationNormalizedLoaded) => {
    const i = visitedViews.value.indexOf(view)
    if (i > -1) {
      visitedViews.value.splice(i, 1)
    }
    delCacheView(view)
  }

  const cachedViews = ref<RouteRecordName[]>([])
  const addCachedView = (view: RouteLocationNormalized) => {
    if (cachedViews.value.includes(view.name!)) return
    if (!view.meta.noCache) {
      // 需要缓存
      cachedViews.value.push(view.name!)
    }
  }
  const delCacheView = (view: RouteLocationNormalized) => {
    const index = cachedViews.value.indexOf(view.name!)
    index > -1 && cachedViews.value.splice(index, 1)
  }

  return {
    visitedViews,
    addView,
    delView,
    cachedViews,
    addCachedView,
    delCacheView
  }
})
