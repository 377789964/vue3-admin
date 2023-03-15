<template>
  <div class="sidebar-item-container" v-if="!item.meta || !item.meta.hidden">
    <template v-if="theOnlyOneChildRoute">
      <el-menu-item
        v-if="theOnlyOneChildRoute.meta"
        :index="resolvePath(theOnlyOneChildRoute.path)"
      >
        <el-icon v-if="icon">
          <svg-icon class="menu-icon" :icon-class="icon"></svg-icon>
        </el-icon>
        <template #title>
          {{ theOnlyOneChildRoute.meta?.title }}
        </template>
      </el-menu-item>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)" teleported>
      <template #title>
        <!-- {{ item.meta }} -->
        <el-icon v-if="item.meta?.icon">
          <svg-icon class="menu-icon" :icon-class="item.meta.icon"> </svg-icon>
        </el-icon>
        <span class="submenu-title">{{ item.meta?.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      ></sidebar-item>
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import type { RouteRecordRaw } from "vue-router"
import path from "path-browserify"
const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  basePath: {
    // 父路由路径（子路由路径如果是相对的 要基于父路径）
    type: String,
    required: true
  }
})

// 渲染菜单主要先看子路由
// 比如我们的路由 一级路由一般都是layout组件 二级路由才是我们考虑要渲染成菜单的
const showingChildNumber = computed(() => {
  // hidden路由排除， 只算可渲染的子路由
  const children = (props.item.children || []).filter((child) => {
    if (child.meta && child.meta.hidden) return false
    return true
  })
  return children.length
})

// 要渲染的单个路由 如果该路由只有一个子路由 默认渲染这个子路由
// theOnlyOneChildRoute直接通过el-menu-item组件来渲染
const { item } = toRefs(props)
const theOnlyOneChildRoute = computed(() => {
  // 多个children时， 直接return null 多children需要用el-submenu来渲染
  if (showingChildNumber.value > 1) {
    return null
  }
  // 只有一个子路由 还要筛选路由meta里有无hidden属性 hidden：true则过滤出去 不用管
  // 路由meta里我们会配置hidden属性表示不渲染成菜单，比如login 401 404页面是不渲染成菜单的
  if (item.value.children) {
    for (const child of item.value.children) {
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }
  // showingChildNumber === 0 无可渲染的子路由 （可能有子路由 hidden属性为true）
  // 无可渲染chiildren时 把当前路由item作为仅有的子路由渲染
  return {
    ...props.item,
    path: ""
  }
})

// menu icon
const icon = computed(() => {
  // 子路由 如果没有icon就用父路由的
  return (
    theOnlyOneChildRoute.value?.meta?.icon ||
    (props.item.meta && props.item.meta.icon)
  )
})
// 利用path.resolve 根据父路径+子路径 解析成正确路径 子路径可能是相对的
// resolvePath在模板中使用
const resolvePath = (childPath: string) => {
  return path.resolve(props.basePath, childPath)
}
</script>
