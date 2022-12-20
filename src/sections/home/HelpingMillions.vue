<script setup>
import ArrowRight from "../../assets/icons/arrow-right.svg";
import helpingMillionsIllustrationWEBP from "../../assets/images/helping-millions/helping-millions-illustration.webp";
import helpingMillionsIllustrationPNG from "../../assets/images/helping-millions/helping-millions-illustration.png";
import helpingMillionsIllustrationPNG2x from "../../assets/images/helping-millions/helping-millions-illustration-2x.png";
import helpingMillionsIllustrationPNG3x from "../../assets/images/helping-millions/helping-millions-illustration-3x.png";
</script>

<template>
  <section class="[box-shadow:_inset_0_-1px_rgba(5,_30,_86,_0.16)]">
    <div
      class="py-8 px-4 lg:py-16 lg:items-center lg:gap-16 xl:px-[150px] 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div class="bg-white py-8 rounded-2xl px-4 md:flex md:[&>*]:flex-1 md:gap-8 md:items-center lg:pr-16 lg:pl-8 lg:gap-16">
        <div class="md:order-2">
          <h2 class="text-darkBlue font-bold text-2xl lg:text-[32px] lg:leading-[48px]">
            Helps millions of users handle tasks on the go
          </h2>
          <p class="text-base text-lightDarkBlue font-normal mt-4">
            Based on a self-learning neural network, algorithms of recognition
            precisely detect borders and crop docs without quality loss.
          </p>
          <a href="#" class="flex mt-4 gap-2 lg:mt-8">
            <span class="text-base font-bold text-darkBlue">Read more</span>
            <ArrowRight />
          </a>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <picture>
            <source
              type="image/webp"
              :srcset="helpingMillionsIllustrationWEBP"
            />
            <img
              :src="helpingMillionsIllustrationPNG"
              alt="Helping Millions Illustration"
              :srcset="`${helpingMillionsIllustrationPNG} 1x, ${helpingMillionsIllustrationPNG2x} 2x, ${helpingMillionsIllustrationPNG3x} 3x`"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
