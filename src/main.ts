// Packages
import { createApp } from "vue";
import { createPinia } from "pinia";

// Local imports
import App from "./App.vue";
import router from "./router";

// Custom styles
import "./assets/styles/css/reset.css";
import "./assets/styles/css/init.css";

// Initializations
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
