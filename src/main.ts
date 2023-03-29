import { createApp } from "vue"
import "./style.css"
import pinia from "@/stores/index"
import App from "./App.vue"
import router from "./router/index"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
// 全局css
import "@/styles/index.scss"
import initSvgIcon from "@/icons/index"
import "virtual:svg-icons-register"
// 注册element-plus
import installElementPlus from "./plugins/element"
import "./permission"

// console.log("pinia", pinia)

const app = createApp(App)
// 安装element-plus插件
app.use(installElementPlus)
app.use(router)
app.use(ElementPlus)
// 使用icon组件
app.use(initSvgIcon)
app.use(pinia)
app.mount("#app")
