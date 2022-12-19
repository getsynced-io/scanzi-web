<script setup>
import LogoSVG from "../assets/logo.svg";
</script>

<template>
  <header
    class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)] sticky top-0 left-0 bg-[#fdf8fd] z-50"
  >
    <div
      class="p-4 flex justify-between 2xl:max-w-[1440px] 2xl:mx-auto xl:px-[150px]"
    >
      <a class="block" href="/">
        <LogoSVG />
      </a>
      <div class="">
        <button
          class="font-bold bg-[rgba(5,_30,_86,_0.16)] py-1 px-4 rounded-[32px] text-darkBlue"
        >
          Contact
        </button>
      </div>
    </div>
  </header>
</template>
