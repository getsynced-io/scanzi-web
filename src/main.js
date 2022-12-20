import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";

// vue router
import { createRouter, createWebHistory } from "vue-router";

// pages
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import Home from "./pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/privacy-policy",
      component: PrivacyPolicy,
    },
  ],
});

createApp(App).use(router).mount("#app");
