<script setup>
// imports
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

// data
import reviewsData from "../../data/reviews.json";

// utils
import isInViewport from "../../utils/isInViewport";

let swiperProxyObj;

const onInit = (swiper) => {
  swiperProxyObj = swiper;
  window.swiperProxyObj = swiper;
  swiperProxyObj.autoplay.pause();
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (isInViewport(swiperProxyObj.el) && swiperProxyObj.autoplay.paused) {
      swiperProxyObj.autoplay.resume();
    }

    if (!isInViewport(swiperProxyObj.el) && !swiperProxyObj.autoplay.paused) {
      swiperProxyObj.autoplay.pause();
    }
  });
});
</script>

<template>
  <section class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-8 px-4 lg:py-16 lg:px-[150px] lg:items-center lg:gap-16 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div class="">
        <h1
          class="font-bold text-[32px] text-darkBlue text-center lg:text-5xl lg:leading-[64px] 2xl:max-w-[749px] 2xl:mx-auto"
        >
          A significant number of positive reviews and ratings
        </h1>
        <div class="mt-8 lg:mt-16">
          <Swiper
            :slides-per-view="'auto'"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :modules="[Autoplay]"
            :breakpoints="{
              320: { spaceBetween: 16 },
              1024: { spaceBetween: 32 },
            }"
            @swiper="onInit"
            class="mx-[-1rem_!important] px-[1rem_!important] lg:mx-[-150px_!important] 2xl:mx-[-150px_!important] 2xl:px-[150px_!important] cursor-pointer"
          >
            <swiper-slide
              v-for="review in reviewsData"
              :key="review.id"
              class="w-[256px_!important] h-[328px_!important] flex items-end lg:w-[358px_!important] lg:h-[328px_!important]"
            >
              <div
                class="bg-white pt-12 pb-4 px-4 rounded-2xl h-[296px] w-full flex flex-col justify-between relative lg:h-[296px] lg:pt-16 lg:pb-8 lg:px-8"
              >
                <picture class="absolute top-[-32px] left-4 lg:left-8">
                  <source
                    type="image/webp"
                    :srcset="`/assets/images/clients/${review.name}/${review.name}.webp`"
                  />
                  <img
                    :src="`/assets/images/clients/${review.name}/${review.name}.png`"
                    :alt="`${review.name} profile image`"
                    :srcset="`/assets/images/clients/${review.name}/${review.name}.png 1x,/assets/images/clients/${review.name}/${review.name}-2x.png 2x,/assets/images/clients/${review.name}/${review.name}-3x.png 3x`"
                    loading="lazy"
                  />
                </picture>
                <p class="text-base text-darkBlue">{{ review.feedback }}</p>
                <a href="#" class="font-bold text-base text-darkBlue">
                  {{ review.tag }}
                </a>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
