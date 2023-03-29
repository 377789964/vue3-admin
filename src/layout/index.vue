<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <div clas="header">
        <navbar @showSetting="openSetting"></navbar>
        <!-- <div class="tags-view">tagsview</div> -->
        <tags-view v-if="showTagsView"></tags-view>
      </div>
      <div clas="app-main">
        <!-- <h2>app mian</h2> -->
        <!-- <router-view></router-view> -->
        <app-main></app-main>
      </div>
      <!-- 增添right-panel -->
      <right-panel
        v-model="showSetting"
        title="样式风格设置"
        :size="settingsPanelWidth"
      >
        <!-- settings 面板设置组件,稍后实现 -->
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script setup lang="ts">
import variables from "@/styles/variables.module.scss"
import { useSettingsStore } from "@/stores/settings"

const settingsStore = useSettingsStore()
const showTagsView = computed(() => settingsStore.settings.tagsView)
const otherHeight = computed(() => (showSetting.value ? 84 : 50) + "px")

const showSetting = ref(false)
const openSetting = () => {
  // 控制right-panel弹出
  showSetting.value = true
}
const settingsPanelWidth = computed(() => variables.settingPanelWidth)
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        height: 50px;
        background: #1890ff;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      /* main = 100% - navbar + tagsview */
      min-height: calc(100vh - v-bind(otherHeight));
      background: red;
    }
  }
}
</style>
