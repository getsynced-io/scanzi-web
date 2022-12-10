<script setup>
import LogoSVG from "../assets/logo.svg";
</script>

<template>
  <header
    class="p-4 [box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]  xl:px-[150px]"
  >
    <div class="container mx-auto flex justify-between">
      <div class="logo">
        <LogoSVG />
      </div>
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
