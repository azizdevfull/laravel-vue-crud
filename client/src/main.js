import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import uiComponents from "./ui-components";
import store from "./store";
import { languages, defaultLocale } from "./i18n";
import { createI18n, useI18n } from "vue-i18n";
const localStorageLang = localStorage.getItem("lang");
const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: "uz",
    messages,
});

const app = createApp(App);
uiComponents.map((component) => app.component(component.name, component));

app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
