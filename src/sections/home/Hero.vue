<script setup>
import DownloadOnAppStoreSVG from "../../assets/icons/download-on-app-store.svg";

// illustration
import heroIllustrationWEBP2x from "../../assets/images/hero/hero-illustration-2x.webp";
import heroIllustrationPNG from "../../assets/images/hero/hero-illustration.png";
import heroIllustrationPNG2x from "../../assets/images/hero/hero-illustration-2x.png";
import heroIllustrationPNG3x from "../../assets/images/hero/hero-illustration-3x.png";
</script>

<template>
  <section class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-8 pb-8 px-4 md:flex md:items-center md:justify-between md:gap-8 lg:gap-16 lg:py-16 xl:px-[150px] 2xl:max-w-[1440px] 2xl:mx-auto"
    >
      <div class="md:flex-[0_1_538px]">
        <h1
          class="text-darkBlue font-bold text-5xl leading-[64px] lg:text-[64px] lg:leading-[96px]"
        >
          Scanner in your pocket
        </h1>
        <p class="text-lightDarkBlue mt-4 font-normal text-xl lg:text-2xl">
          You no longer need to keep piles of paper or stuff your wallet with
          receipts.
        </p>
        <a
          href="https://apps.apple.com/app/id1637256978"
          class="bg-darkBlue flex gap-[9px] px-[14px] pb-[9px] pt-[11px] w-fit rounded-2xl mt-4 lg:mt-8"
        >
          <DownloadOnAppStoreSVG />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:flex-[0_1_538px]">
        <picture>
          <source type="image/webp" :srcset="heroIllustrationWEBP2x" />
          <img
            :src="heroIllustrationPNG"
            alt=""
            :srcset="`${heroIllustrationPNG}, ${heroIllustrationPNG2x} 2x, ${heroIllustrationPNG3x} 3x`"
            loading="lazy"
            class="max-w-none w-full aspect-[1/1]"
          />
        </picture>
      </div>
    </div>
  </section>
</template>
