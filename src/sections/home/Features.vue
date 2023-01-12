<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";

// icons/images
import ArrowRight from "../../assets/icons/arrow-right.svg";

// adjust your images app view
import adjustYourImagesAppViewPNG from "../../assets/images/features/adjust-your-images-app-view.png";
import adjustYourImagesAppViewPNG2x from "../../assets/images/features/adjust-your-images-app-view-2x.png";
import adjustYourImagesAppViewPNG3x from "../../assets/images/features/adjust-your-images-app-view-3x.png";
import adjustYourImagesAppViewWEBP2x from "../../assets/images/features/adjust-your-images-app-view-2x.webp";

// artistic touches app view
import artisticTouchesAppViewPNG from "../../assets/images/features/artistic-touches-app-view.png";
import artisticTouchesAppViewPNG2x from "../../assets/images/features/artistic-touches-app-view-2x.png";
import artisticTouchesAppViewPNG3x from "../../assets/images/features/artistic-touches-app-view-3x.png";
import artisticTouchesAppViewWEBP2x from "../../assets/images/features/artistic-touches-app-view-2x.webp";

// sign documents digitally app view
import signDocumentsDigitallyAppViewPNG from "../../assets/images/features/sign-documents-digitally-app-view.png";
import signDocumentsDigitallyAppViewPNG2x from "../../assets/images/features/sign-documents-digitally-app-view-2x.png";
import signDocumentsDigitallyAppViewPNG3x from "../../assets/images/features/sign-documents-digitally-app-view-3x.png";
import signDocumentsDigitallyAppViewWEBP2x from "../../assets/images/features/sign-documents-digitally-app-view-2x.webp";

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

function tabsTitlesClicked(e) {
  const target = e.currentTarget;
  const tabValue = Number(target.getAttribute("data-tab"));
  tab.value = tabValue;
}
</script>

<template>
  <section class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div class="py-8 lg:py-16">
      <!-- tabs -->
      <div class="relative">
        <Swiper
          :slides-per-view="1"
          :space-between="0"
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
              >Adjust your images</span
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
              >Artistic touches</span
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
              >Sign documents digitally</span
            >
          </SwiperSlide>
        </Swiper>
        <span
          class="absolute bottom-0 left-0 w-full h-[1px] [border-bottom:1px_solid_rgba(5,_30,_86,_0.32)]"
        ></span>
      </div>

      <!-- tabs' content -->
      <div class="">
        <div
          class="mt-8 mx-4 md:[&>*]:flex-1 md:gap-8 md:mt-16 2xl:max-w-[1440px] 2xl:mx-auto xl:px-[150px] lg:gap-16"
          :class="[
            tab === 1 ? 'md:flex animate__animated animate__fadeIn' : 'hidden',
          ]"
        >
          <div
            class="bg-white p-4 rounded-2xl md:flex md:flex-col md:justify-between lg:p-8"
          >
            <div class="">
              <h2
                class="text-[2rem] leading-[3rem] font-bold text-darkBlue lg:text-5xl lg:leading-[64px]"
              >
                Customize your scans
              </h2>
              <p class="mt-4 text-base font-normal text-lightDarkBlue">
                With our app, you have complete control over your scans. Whether
                you want to adjust the brightness, contrast, color balance, or
                any other aspect, our app makes it easy to get the exact look
                and feel you want. Simply load your scan, make your adjustments,
                and save your changes. It's that simple!
              </p>
            </div>

            <a href="#" class="flex mt-4 gap-2">
              <span class="text-base font-bold text-darkBlue">Read more</span>
              <ArrowRight />
            </a>
          </div>

          <div class="mt-8 md:mt-0 2xl:flex-[0_1_538px]">
            <picture>
              <source
                type="image/webp"
                :srcset="adjustYourImagesAppViewWEBP2x"
              />
              <img
                :src="adjustYourImagesAppViewPNG"
                :srcset="`${adjustYourImagesAppViewPNG}, ${adjustYourImagesAppViewPNG2x} 2x, ${adjustYourImagesAppViewPNG3x} 3x`"
                alt=""
                class="max-w-none w-full"
              />
            </picture>
          </div>
        </div>

        <div
          class="mt-8 mx-4 md:[&>*]:flex-1 md:gap-8 md:mt-16 2xl:max-w-[1440px] 2xl:mx-auto xl:px-[150px] lg:gap-16"
          :class="[
            tab === 2 ? 'md:flex animate__animated animate__fadeIn' : 'hidden',
          ]"
        >
          <div
            class="bg-white p-4 rounded-2xl md:flex md:flex-col md:justify-between lg:p-8"
          >
            <div class="">
              <h2
                class="text-[2rem] leading-[3rem] font-bold text-darkBlue lg:text-5xl lg:leading-[64px]"
              >
                Image filters for an elegant look
              </h2>
              <p class="mt-4 text-base font-normal text-lightDarkBlue">
                Get the refined and sophisticated look you desire with our
                elegant image filters. From soft and subtle to bold and
                striking, our filters offer a wide range of options to enhance
                the beauty and style of your photos. With just a few clicks, you
                can transform your images into stunning works of art that exude
                class and grace.
              </p>
            </div>

            <a href="#" class="flex mt-4 gap-2">
              <span class="text-base font-bold text-darkBlue">Read more</span>
              <ArrowRight />
            </a>
          </div>
          <div class="mt-8 md:mt-0 2xl:flex-[0_1_538px]">
            <picture>
              <source
                type="image/webp"
                :srcset="artisticTouchesAppViewWEBP2x"
              />
              <img
                :src="artisticTouchesAppViewPNG"
                :srcset="`${artisticTouchesAppViewPNG}, ${artisticTouchesAppViewPNG2x} 2x, ${artisticTouchesAppViewPNG3x} 3x`"
                alt=""
                class="max-w-none w-full"
              />
            </picture>
          </div>
        </div>

        <div
          class="mt-8 mx-4 md:[&>*]:flex-1 md:gap-8 md:mt-16 2xl:max-w-[1440px] 2xl:mx-auto xl:px-[150px] lg:gap-16"
          :class="[
            tab === 3 ? 'md:flex animate__animated animate__fadeIn' : 'hidden',
          ]"
        >
          <div
            class="bg-white p-4 rounded-2xl md:flex md:flex-col md:justify-between lg:p-8"
          >
            <div class="">
              <h2
                class="text-[2rem] leading-[3rem] font-bold text-darkBlue lg:text-5xl lg:leading-[64px]"
              >
                The easy way to sign documents
              </h2>
              <p class="mt-4 text-base font-normal text-lightDarkBlue">
                Gone are the days of printing, signing, and scanning documents.
                With our app, you can quickly and securely sign documents
                digitally from anywhere at any time. Whether at the office, on
                the go, or working remotely, our app makes signing and sending
                documents convenient and hassle-free.
              </p>
            </div>

            <a href="#" class="flex mt-4 gap-2">
              <span class="text-base font-bold text-darkBlue">Read more</span>
              <ArrowRight />
            </a>
          </div>
          <div class="mt-8 md:mt-0 2xl:flex-[0_1_538px]">
            <picture>
              <source
                type="image/webp"
                :srcset="signDocumentsDigitallyAppViewWEBP2x"
              />
              <img
                :src="signDocumentsDigitallyAppViewPNG"
                :srcset="`${signDocumentsDigitallyAppViewPNG}, ${signDocumentsDigitallyAppViewPNG2x} 2x, ${signDocumentsDigitallyAppViewPNG3x} 3x`"
                alt=""
                class="max-w-none w-full"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
