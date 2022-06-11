import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store).use(router).mount("#app");

// 取消使用inject中的root.value时的警告，这是一个临时配置
/**
 * [Vue warn]: injected property "root" is a ref and
 * will be auto-unwrapped and no longer needs `.value`
 * in the next minor release. To opt-in to the new
 * behavior now, set `app.config.unwrapInjectedRef = true`
 * (this config is temporary and will not be needed in the future.)
 */
app.config.unwrapInjectedRef = true;
