import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("BookListComponent.vue");
app.component("HeaderComponent.vue");
app.mount("#app");
