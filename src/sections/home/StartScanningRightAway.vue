<script setup>
import { ref } from "vue";

// illustration
import scanningApp from "../../assets/images/start-scanning-right-away/scanning-app.png";
import scanningApp2x from "../../assets/images/start-scanning-right-away/scanning-app-2x.png";
import scanningApp3x from "../../assets/images/start-scanning-right-away/scanning-app-3x.png";
import scanningAppWebp from "../../assets/images/start-scanning-right-away/scanning-app.webp";

const activePart = ref(1);

const changeIndex = (index) => {
  activePart.value = index;
};
</script>

<template>
  <section class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-8 px-4 md:flex md:gap-8 lg:py-16 xl:px-[150px] lg:items-center lg:gap-16 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div class="md:order-2 md:flex-1">
        <ul
          class="flex flex-col gap-4 [&_p]:text-xl [&_p]:cursor-pointer [&_p]:font-bold lg:[&_p]:text-2xl"
        >
          <li class="">
            <p
              :class="activePart === 1 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(1)"
            >
              Start scanning right away
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 2 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(2)"
            >
              Scan, Deskew, Crop and OCR with one click
            </p>
          </li>
          <li>
            <p
              :class="activePart === 3 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(3)"
            >
              Use your iPhone to scan on the go
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 4 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(4)"
            >
              Save as a PDF file with an invisible text layer
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 5 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(5)"
            >
              Super high compression for monochrome scans
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 6 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(6)"
            >
              Create custom OCR workflows
            </p>
          </li>
        </ul>
      </div>
      <div
        class="mt-8 md:mt-0 md:order-1 md:flex-1 xl:flex-[0_1_538px] lg:mt-0"
      >
        <picture>
          <source type="image/webp" :srcset="scanningAppWebp" />
          <img
            :src="scanningApp"
            :srcset="`${scanningApp} 1x, ${scanningApp2x} 2x, ${scanningApp3x} 3x`"
            alt=""
            class="max-w-none w-full"
          />
        </picture>
      </div>
    </div>
  </section>
</template>
