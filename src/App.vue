<script setup>
import { onMounted } from "vue";

// partials
import Header from "./partials/Header.vue";
import BeforeFooter from "./partials/BeforeFooter.vue";
import Footer from "./partials/Footer.vue";

// vue router
import { RouterView } from "vue-router";

// Utilities
import WebFont from "webfontloader";

onMounted(() => {
  WebFont.load({
    google: {
      families: ["Manrope:400,700&display=swap"],
    },
  });
});
</script>

<template>
  <Header />
  <RouterView />
  <BeforeFooter />
  <Footer />
</template>
