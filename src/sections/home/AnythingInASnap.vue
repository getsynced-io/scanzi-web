<script setup>
import anythingInASnapWEBP2x from "../../assets/images/anything-in-a-snap/anything-in-a-snap-2x.webp";
import anythingInASnapPNG from "../../assets/images/anything-in-a-snap/anything-in-a-snap.png";
import anythingInASnapPNG2x from "../../assets/images/anything-in-a-snap/anything-in-a-snap-2x.png";
import anythingInASnapPNG3x from "../../assets/images/anything-in-a-snap/anything-in-a-snap-3x.png";

// icons
import DownloadOnAppStoreSVG from "../../assets/icons/download-on-app-store.svg";
</script>

<template>
  <section class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-8 px-4 lg:py-16 lg:items-center lg:gap-16 xl:px-[150px] 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div class="max-w-[749px] mx-auto">
        <picture>
          <source type="image/webp" :srcset="anythingInASnapWEBP2x" />
          <img
            :src="`${anythingInASnapPNG}`"
            alt="ScanWizard logo"
            :srcset="`${anythingInASnapPNG} 1x, ${anythingInASnapPNG2x} 2x, ${anythingInASnapPNG3x} 3x`"
            class="max-w-[64px] mx-auto"
            loading="lazy"
          />
        </picture>
        <h2
          class="text-5xl text-darkBlue leading-[64px] font-bold text-center mt-4 lg:mt-8 lg:text-[64px] lg:leading-[96px]"
        >
          Anything in a snap
        </h2>
        <p class="text-xl text-lightDarkBlue text-center mt-4 lg:text-2xl">
          With ScanWizard, easily capture and convert documents, forms, business
          cards and whiteboards into high-quality PDFs.
        </p>
        <a
          href="#"
          class="w-fit bg-darkBlue flex gap-[9px] px-[14px] pb-[9px] pt-[11px] rounded-2xl mt-4 mx-auto lg:mt-8"
        >
          <DownloadOnAppStoreSVG />
        </a>
      </div>
    </div>
  </section>
</template>
