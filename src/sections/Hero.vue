<script setup>
import DownloadOnAppStoreSVG from "../assets/icons/download-on-app-store.svg";

// illustration
import heroIllustrationSVG from "../assets/images/hero/hero-illustration.svg?url";
import heroIllustrationWebp from "../assets/images/hero/hero-illustration.webp";
import heroIllustration from "../assets/images/hero/hero-illustration.png";
import heroIllustration2x from "../assets/images/hero/hero-illustration-2x.png";
import heroIllustration3x from "../assets/images/hero/hero-illustration-3x.png";
</script>

<template>
  <section class="mt-8 px-4 lg:mt-16 xl:px-[150px]">
    <div class="container mx-auto md:flex md:items-center md:gap-8 lg:gap-16">
      <div class="xl:flex-[1_1_538px]">
        <h1
          class="text-darkBlue font-bold text-5xl leading-[64px] lg:text-[64px] lg:leading-[96px]"
        >
          Scanner in your pocket
        </h1>
        <p class="text-lightDarkBlue mt-4 font-normal text-xl lg:text-2xl">
          You no longer need to keep piles of paper or stuff your wallet with
          receipts.
        </p>
        <button
          class="bg-darkBlue flex gap-[9px] px-[14px] pb-[9px] pt-[11px] rounded-2xl mt-4 lg:mt-8"
        >
          <DownloadOnAppStoreSVG />
        </button>
      </div>
      <div class="mt-8 md:mt-0">
        <picture>
          <source type="image/svg+xml" :srcset="heroIllustrationSVG" />
          <source type="image/webp" :srcset="heroIllustrationWebp" />
          <img
            :src="heroIllustration"
            alt=""
            :srcset="`${heroIllustration} 1x, ${heroIllustration2x} 2x, ${heroIllustration3x} 3x`"
          />
        </picture>
      </div>
    </div>
  </section>
</template>
