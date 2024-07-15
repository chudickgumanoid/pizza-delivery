import "@/assets/scss/index.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const components = [
  import.meta.glob("./components/UI/*.vue", { eager: true }),
  import.meta.glob("./components/UI/icons/*.vue", { eager: true }),
];
components.forEach((el) => {
  Object.entries(el).forEach(([path, component]) => {
    app.component(
      path
        .split("/")
        .pop()
        .replace(/\.\w+$/, ""),
      component.default
    );
  });
});

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);

app.mount("#app");
