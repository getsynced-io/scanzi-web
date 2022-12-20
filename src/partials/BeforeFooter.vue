<script setup>
import LogoSVG from "../assets/logo.svg";

import { RouterLink } from "vue-router";
</script>

<template>
  <div class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-4 px-4 flex justify-center lg:items-center lg:gap-16 xl:px-[150px] 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <RouterLink to="/">
        <LogoSVG />
      </RouterLink>
    </div>
  </div>
</template>
