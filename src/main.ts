import { createApp } from "vue";
import Vant from "vant";
import "lib-flexible/flexible";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/plugins/axios";
import icons from "@/icons"; // icon
import components from "@/components"; // icon
import "vant/lib/index.css"; // 全局引入样式
import "./mock/mock";
import eventBus from "./utils/eventBus";
import { registerPlugins } from "./utils/util";

const plugins = [Vant, store, router, axios, icons, components, eventBus];
const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(registerPlugins(plugins));
app.mount("#app");
