<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";

// icons/images
import ArrowRight from "../../assets/icons/arrow-right.svg";
import featuresIllustration from "../../assets/images/features/features-illustration.png";
import featuresIllustration2x from "../../assets/images/features/features-illustration-2x.png";
import featuresIllustration3x from "../../assets/images/features/features-illustration-3x.png";
import featuresIllustrationSVG from "../../assets/images/features/features-illustration.svg?svg";
import featuresIllustrationWebp from "../../assets/images/features/features-illustration.webp";

const tab = ref(1);

const tabsTitleBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
};

function onSlideChange(swiper) {
  tab.value = swiper.activeIndex + 1;
}

function tabsTitlesClicked(e) {
  const target = e.currentTarget;
  tab.value = Number(target.getAttribute("data-tab"));
}
</script>

<template>
  <section class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div class="py-8 lg:py-16">
      <div class="relative">
        <Swiper
          :slides-per-view="1"
          :space-between="0"
          @slideChange="onSlideChange"
          :breakpoints="tabsTitleBreakpoints"
          class="xl:px-[150px_!important] 2xl:max-w-screen-2xl 2xl:mx-auto"
        >
          <SwiperSlide class="cursor-pointer">
            <span
              class="block text-xl text-center mx-4 pb-4 lg:pb-8 lg:text-2xl lg:mx-0 transition-colors"
              :class="[
                tab === 1
                  ? 'text-darkBlue [border-bottom:1px_solid_#051E56] font-bold'
                  : 'text-[rgba(5,20,86,0.32)] font-normal',
              ]"
              data-tab="1"
              @click="tabsTitlesClicked"
              >AI-enhanced scans</span
            >
          </SwiperSlide>
          <SwiperSlide class="cursor-pointer">
            <span
              class="block text-xl text-center mx-4 pb-4 lg:pb-8 lg:text-2xl lg:mx-0 transition-colors"
              :class="[
                tab === 2
                  ? 'text-darkBlue font-bold [border-bottom:1px_solid_#051E56]'
                  : 'text-[rgba(5,20,86,0.32)] font-normal',
              ]"
              data-tab="2"
              @click="tabsTitlesClicked"
              >Save pages as JPEG</span
            >
          </SwiperSlide>
          <SwiperSlide class="cursor-pointer">
            <span
              class="block text-xl text-center mx-4 pb-4 lg:pb-8 lg:text-2xl lg:mx-0 transition-colors"
              :class="[
                tab === 3
                  ? 'text-darkBlue font-bold [border-bottom:1px_solid_#051E56]'
                  : 'text-[rgba(5,20,86,0.32)] font-normal',
              ]"
              data-tab="3"
              @click="tabsTitlesClicked"
              >Enhance your PDFs</span
            >
          </SwiperSlide>
        </Swiper>
        <span
          class="absolute bottom-0 left-0 w-full h-[1px] [border-bottom:1px_solid_rgba(5,_30,_86,_0.32)]"
        ></span>
      </div>
      <div class="">
        <div
          class="mt-8 mx-4 md:[&>*]:flex-1 md:gap-8 md:mt-16 2xl:max-w-[1440px] 2xl:mx-auto xl:px-[150px] lg:gap-16"
          :class="[tab === 1 ? 'md:flex' : 'hidden']"
        >
          <div
            class="bg-white p-4 rounded-2xl md:flex md:flex-col md:justify-between lg:p-8"
          >
            <div class="">
              <h2
                class="text-[2rem] leading-[3rem] font-bold text-darkBlue lg:text-5xl lg:leading-[64px]"
              >
                Intelligently cleaner and clearer scans
              </h2>
              <p class="mt-4 text-base font-normal text-lightDarkBlue">
                Using Scanzi, the powerful AI behind many of our intelligent
                features, Adobe Scan corrects image perspective and sharpens
                handwritten or printed text, while removing elements you don’t
                want, like glare and shadow.
              </p>
            </div>

            <a href="#" class="flex mt-4 gap-2">
              <span class="text-base font-bold text-darkBlue">Read more</span>
              <ArrowRight />
            </a>
          </div>
          <div class="mt-8 md:mt-0 2xl:flex-[0_1_538px]">
            <picture>
              <source type="image/svg+xml" :srcset="featuresIllustrationSVG" />
              <source type="image/webp" :srcset="featuresIllustrationWebp" />
              <img
                :src="featuresIllustration"
                :srcset="`${featuresIllustration} 1x, ${featuresIllustration2x} 2x, ${featuresIllustration3x} 3x`"
                alt=""
              />
            </picture>
          </div>
        </div>

        <div
          class="mt-8 mx-4 md:[&>*]:flex-1 md:gap-8 md:mt-16 2xl:max-w-[1440px] 2xl:mx-auto xl:px-[150px] lg:gap-16"
          :class="[tab === 2 ? 'md:flex' : 'hidden']"
        >
          <div
            class="bg-red-500 p-4 rounded-2xl md:flex md:flex-col md:justify-between lg:p-8"
          >
            <div class="">
              <h2
                class="text-[2rem] leading-[3rem] font-bold text-darkBlue lg:text-5xl lg:leading-[64px]"
              >
                Intelligently cleaner and clearer scans
              </h2>
              <p class="mt-4 text-base font-normal text-lightDarkBlue">
                Using Scanzi, the powerful AI behind many of our intelligent
                features, Adobe Scan corrects image perspective and sharpens
                handwritten or printed text, while removing elements you don’t
                want, like glare and shadow.
              </p>
            </div>

            <a href="#" class="flex mt-4 gap-2">
              <span class="text-base font-bold text-darkBlue">Read more</span>
              <ArrowRight />
            </a>
          </div>
          <div class="mt-8 md:mt-0 2xl:flex-[0_1_538px]">
            <picture>
              <source type="image/svg+xml" :srcset="featuresIllustrationSVG" />
              <source type="image/webp" :srcset="featuresIllustrationWebp" />
              <img
                :src="featuresIllustration"
                :srcset="`${featuresIllustration} 1x, ${featuresIllustration2x} 2x, ${featuresIllustration3x} 3x`"
                alt=""
              />
            </picture>
          </div>
        </div>

        <div
          class="mt-8 mx-4 md:[&>*]:flex-1 md:gap-8 md:mt-16 2xl:max-w-[1440px] 2xl:mx-auto xl:px-[150px] lg:gap-16"
          :class="[tab === 3 ? 'md:flex' : 'hidden']"
        >
          <div
            class="bg-blue-500 p-4 rounded-2xl md:flex md:flex-col md:justify-between lg:p-8"
          >
            <div class="">
              <h2
                class="text-[2rem] leading-[3rem] font-bold text-darkBlue lg:text-5xl lg:leading-[64px]"
              >
                Intelligently cleaner and clearer scans
              </h2>
              <p class="mt-4 text-base font-normal text-lightDarkBlue">
                Using Scanzi, the powerful AI behind many of our intelligent
                features, Adobe Scan corrects image perspective and sharpens
                handwritten or printed text, while removing elements you don’t
                want, like glare and shadow.
              </p>
            </div>

            <a href="#" class="flex mt-4 gap-2">
              <span class="text-base font-bold text-darkBlue">Read more</span>
              <ArrowRight />
            </a>
          </div>
          <div class="mt-8 md:mt-0 2xl:flex-[0_1_538px]">
            <picture>
              <source type="image/webp" :srcset="featuresIllustrationWebp" />
              <img
                :src="featuresIllustration"
                :srcset="`${featuresIllustration} 1x, ${featuresIllustration2x} 2x, ${featuresIllustration3x} 3x`"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
