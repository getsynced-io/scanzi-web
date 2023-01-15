<script setup>
import logoWEBP from "../assets/logo/logo.webp";
import logo from "../assets/logo/logo.png";
import logo2x from "../assets/logo/logo-2x.png";
import logo3x from "../assets/logo/logo-3x.png";

import { RouterLink } from "vue-router";
</script>

<template>
  <div class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-4 px-4 flex justify-center lg:items-center lg:gap-16 xl:px-[150px] 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <RouterLink to="/">
        <picture>
          <source :srcset="logoWEBP" type="image/webp" />
          <img
            :src="logo"
            alt=""
            :srcset="`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`"
            loading="lazy"
          />
        </picture>
      </RouterLink>
    </div>
  </div>
</template>
