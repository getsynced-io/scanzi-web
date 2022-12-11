<script setup>
import { onMounted } from "vue";

// components
import Header from "./sections/Header.vue";
import Hero from "./sections/Hero.vue";
import StartScanningRightAway from "./sections/StartScanningRightAway.vue";

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
  <Hero />
  <StartScanningRightAway />
</template>
