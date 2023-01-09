<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="">
    <div
      class="py-4 px-4 lg:items-center lg:py-[20px] lg:gap-16 lg:flex lg:justify-between xl:px-[150px] 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <p class="text-center text-lightDarkBlue text-base">
        @ 2023 Scanzi. All rights reserved.
      </p>
      <div class="mt-4 flex gap-4 justify-center lg:mt-0">
        <RouterLink
          to="/privacy-policy"
          class="text-darkBlue font-bold text-base"
          >Privacy Policy</RouterLink
        >
        <RouterLink to="/terms-of-use" class="text-darkBlue font-bold text-base"
          >Terms of Use</RouterLink
        >
      </div>
    </div>
  </footer>
</template>
