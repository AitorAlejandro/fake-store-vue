import { createApp } from "vue";
import App from "./App.vue";
import router from "./ui/router";

import "normalize.css";
import "milligram";

createApp(App).use(router).mount("#app");
