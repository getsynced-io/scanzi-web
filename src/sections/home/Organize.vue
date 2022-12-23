<script setup>
import { ref } from "vue";

import organizeIllustration from "../../assets/images/organize/organize-illustration.png";
import organizeIllustration2x from "../../assets/images/organize/organize-illustration-2x.png";
import organizeIllustration3x from "../../assets/images/organize/organize-illustration-3x.png";
import organizeIllustrationWebp from "../../assets/images/organize/organize-illustration.webp";

const activePart = ref(1);

const changeIndex = (index) => {
  activePart.value = index;
};
</script>

<template>
  <section class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-8 px-4 md:flex md:gap-8 lg:py-16 xl:px-[150px] md:items-center lg:gap-16 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div class="md:order-2 md:flex-1">
        <ul
          class="flex flex-col gap-4 [&_p]:cursor-pointer [&_p]:text-xl [&_p]:font-bold lg:[&_p]:text-2xl"
        >
          <li class="">
            <p
              :class="activePart === 1 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(1)"
            >
              Organize your scans
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 2 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(2)"
            >
              Manage documents—all in one place
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 3 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(3)"
            >
              Automatically apply perspective transformation
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 4 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(4)"
            >
              Add a signature and a stamp from a photo
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 5 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(5)"
            >
              Scan your documents, IDs, receipts, and more
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 6 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(6)"
            >
              Easily extract text from a scanned page
            </p>
          </li>
        </ul>
      </div>
      <div
        class="mt-8 md:mt-0 md:order-1 md:flex-1 xl:flex-[0_1_538px] lg:mt-0"
      >
        <picture>
          <source type="image/webp" :srcset="organizeIllustrationWebp" />
          <img
            :src="organizeIllustration"
            :srcset="`${organizeIllustration} 1x, ${organizeIllustration2x} 2x, ${organizeIllustration3x} 3x`"
            alt=""
            class="max-w-none w-full"
          />
        </picture>
      </div>
    </div>
  </section>
</template>
