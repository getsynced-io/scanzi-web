<script setup>
import { onMounted } from "vue";

// components
import Header from "./sections/Header.vue";
import Hero from "./sections/Hero.vue";
import StartScanningRightAway from "./sections/StartScanningRightAway.vue";
import Features from "./sections/Features.vue";
import Organize from "./sections/Organize.vue";

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
  <div class="h-[4000px]">
    <Header />
    <Hero />
    <StartScanningRightAway />
    <Features />
    <Organize />
  </div>
</template>
