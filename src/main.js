import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";

// vue router
import { createRouter, createWebHistory } from "vue-router";

// pages
import Home from "./pages/Home.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import TermsOfUse from "./pages/TermsOfUse.vue";


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
    },{
      path: "/terms-of-use",
      component: TermsOfUse
    }
  ],
});

createApp(App).use(router).mount("#app");
