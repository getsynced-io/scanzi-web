<script setup>
import { onMounted } from "vue";
import Header from "./sections/Header.vue";

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
</template>
