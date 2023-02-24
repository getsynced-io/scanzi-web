import { createApp } from "vue";

// App Component
import App from "./App.vue";

// vue router
import { createRouter, createWebHistory } from "vue-router";

// pages
import Home from "./pages/Home.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import TermsOfUse from "./pages/TermsOfUse.vue";

// css
import "./index.css";
import "animate.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/privacy",
      component: PrivacyPolicy,
    },
    {
      path: "/terms",
      component: TermsOfUse,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

createApp(App).use(router).mount("#app");
