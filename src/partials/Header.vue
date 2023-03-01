<script setup>
import logoWEBP2x from "../assets/logo/logo-2x.webp";
import logoPNG from "../assets/logo/logo.png";
import logoPNG2x from "../assets/logo/logo-2x.png";
import logoPNG3x from "../assets/logo/logo-3x.png";

import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)] sticky top-0 left-0 bg-[#fdf8fd] z-50"
  >
    <div
      class="p-4 flex justify-between 2xl:max-w-[1440px] 2xl:mx-auto xl:px-[150px]"
    >
      <RouterLink to="/">
        <picture>
          <source :srcset="logoWEBP2x" type="image/webp" />
          <img
            :src="logoPNG"
            alt=""
            :srcset="`${logoPNG} 1x, ${logoPNG2x} 2x, ${logoPNG3x} 3x`"
            loading="lazy"
            class="w-[132px] md:w-[141px]"
          />
        </picture>
      </RouterLink>
      <div class="">
        <a
          href="mailto:support@scanwizard.app"
          class="font-bold bg-[rgba(5,_30,_86,_0.16)] py-1 px-4 rounded-[32px] text-darkBlue block"
        >
          Contact
        </a>
      </div>
    </div>
  </header>
</template>
