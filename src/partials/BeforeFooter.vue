<script setup>
import logoWEBP2x from "../assets/logo/logo-2x.webp";
import logoPNG from "../assets/logo/logo.png";
import logoPNG2x from "../assets/logo/logo-2x.png";
import logoPNG3x from "../assets/logo/logo-3x.png";

import { RouterLink } from "vue-router";
</script>

<template>
  <div class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-4 px-4 flex justify-center lg:items-center lg:gap-16 xl:px-[150px] 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <RouterLink to="/">
        <picture>
          <source :srcset="logoWEBP2x" type="image/webp" />
          <img
            :src="logoPNG"
            alt=""
            :srcset="`${logoPNG} 1x, ${logoPNG2x} 2x, ${logoPNG3x} 3x`"
            loading="lazy"
            class="w-[132px]"
          />
        </picture>
      </RouterLink>
    </div>
  </div>
</template>
