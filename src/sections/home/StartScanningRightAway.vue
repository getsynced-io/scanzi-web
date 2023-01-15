<script setup>
import { ref } from "vue";

// assets/images

// start scanning right away images
import scanningAppMainAppViewPNG from "../../assets/images/start-scanning-right-away-section/start-scanning-right-away/scanning-app-main-app-view.png";
import scanningAppMainAppViewPNG2x from "../../assets/images/start-scanning-right-away-section/start-scanning-right-away/scanning-app-main-app-view-2x.png";
import scanningAppMainAppViewPNG3x from "../../assets/images/start-scanning-right-away-section/start-scanning-right-away/scanning-app-main-app-view-3x.png";
import scanningAppMainAppViewWEBP3x from "../../assets/images/start-scanning-right-away-section/start-scanning-right-away/scanning-app-main-app-view-3x.webp";

// create a system for you documents images
import createASystemAppViewPNG from "../../assets/images/start-scanning-right-away-section/create-a-system-for-your-documents/create-a-system-app-view.png";
import createASystemAppViewPNG2x from "../../assets/images/start-scanning-right-away-section/create-a-system-for-your-documents/create-a-system-app-view-2x.png";
import createASystemAppViewPNG3x from "../../assets/images/start-scanning-right-away-section/create-a-system-for-your-documents/create-a-system-app-view-3x.png";
import createASystemAppViewWEBP3x from "../../assets/images/start-scanning-right-away-section/create-a-system-for-your-documents/create-a-system-app-view-3x.webp";

// utilize a variety of filters
import utilizeAVarietyOfFiltersAppViewPNG from "../../assets/images/start-scanning-right-away-section/utilize-a-variety-of-filters/utilize-a-variety-of-filters-app-view.png";
import utilizeAVarietyOfFiltersAppViewPNG2x from "../../assets/images/start-scanning-right-away-section/utilize-a-variety-of-filters/utilize-a-variety-of-filters-app-view-2x.png";
import utilizeAVarietyOfFiltersAppViewPNG3x from "../../assets/images/start-scanning-right-away-section/utilize-a-variety-of-filters/utilize-a-variety-of-filters-app-view-3x.png";
import utilizeAVarietyOfFiltersAppViewWBP3x from "../../assets/images/start-scanning-right-away-section/utilize-a-variety-of-filters/utilize-a-variety-of-filters-app-view-3x.webp";

// set up and structure in folders images
import setUpAndStructureInFoldersAppViewPNG from "../../assets/images/start-scanning-right-away-section/set-up-and-structure-in-folders/set-up-and-structure-in-folders-app-view.png";
import setUpAndStructureInFoldersAppViewPNG2x from "../../assets/images/start-scanning-right-away-section/set-up-and-structure-in-folders/set-up-and-structure-in-folders-app-view-2x.png";
import setUpAndStructureInFoldersAppViewPNG3x from "../../assets/images/start-scanning-right-away-section/set-up-and-structure-in-folders/set-up-and-structure-in-folders-app-view-3x.png";
import setUpAndStructureInFoldersAppViewWEBP3x from "../../assets/images/start-scanning-right-away-section/set-up-and-structure-in-folders/set-up-and-structure-in-folders-app-view-3x.webp";

// use a useful and efficient camera images
import useAUsefulAndEfficientCameraAppViewPNG from "../../assets/images/start-scanning-right-away-section/use-a-useful-and-efficient-camera/use-a-useful-and-efficient-camera-app-view.png";
import useAUsefulAndEfficientCameraAppViewPNG2x from "../../assets/images/start-scanning-right-away-section/use-a-useful-and-efficient-camera/use-a-useful-and-efficient-camera-app-view-2x.png";
import useAUsefulAndEfficientCameraAppViewPNG3x from "../../assets/images/start-scanning-right-away-section/use-a-useful-and-efficient-camera/use-a-useful-and-efficient-camera-app-view-3x.png";
import useAUsefulAndEfficientCameraAppViewWEBP3x from "../../assets/images/start-scanning-right-away-section/use-a-useful-and-efficient-camera/use-a-useful-and-efficient-camera-app-view-3x.webp";

// one clicking scanning, straightening, cropping, and OCR
import oneClickScanningStraighteningCroppingAndOCRAppViewPNG from "../../assets/images/start-scanning-right-away-section/one-click-scanning-straightening-cropping-and-ocr/one-click-scanning-straightening-cropping-and-ocr-app-view.png";
import oneClickScanningStraighteningCroppingAndOCRAppViewPNG2x from "../../assets/images/start-scanning-right-away-section/one-click-scanning-straightening-cropping-and-ocr/one-click-scanning-straightening-cropping-and-ocr-app-view-2x.png";
import oneClickScanningStraighteningCroppingAndOCRAppViewPNG3x from "../../assets/images/start-scanning-right-away-section/one-click-scanning-straightening-cropping-and-ocr/one-click-scanning-straightening-cropping-and-ocr-app-view-3x.png";
import oneClickScanningStraighteningCroppingAndOCRAppViewWEBP3x from "../../assets/images/start-scanning-right-away-section/one-click-scanning-straightening-cropping-and-ocr/one-click-scanning-straightening-cropping-and-ocr-app-view-3x.webp";

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
              Create a system for your documents
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 3 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(3)"
            >
              Utilize a variety of filters
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 4 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(4)"
            >
              Set up and structure in folders
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 5 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(5)"
            >
              Use a useful and efficient camera
            </p>
          </li>
          <li class="">
            <p
              :class="activePart === 6 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(6)"
            >
              One-click scanning, straightening, cropping and OCR
            </p>
          </li>
        </ul>
      </div>
      <div
        class="mt-8 md:mt-0 md:order-1 md:flex-1 xl:flex-[0_1_538px] lg:mt-0"
      >
        <div class="flex items-center aspect-[269/179]">
          <picture
            :class="
              activePart === 1
                ? 'block animate__animated animate__fadeIn'
                : 'hidden'
            "
          >
            <source type="image/webp" :srcset="scanningAppMainAppViewWEBP3x" />
            <img
              :src="scanningAppMainAppViewPNG"
              :srcset="`${scanningAppMainAppViewPNG}, ${scanningAppMainAppViewPNG2x} 2x, ${scanningAppMainAppViewPNG3x} 3x`"
              alt=""
              class="max-w-none w-full"
              loading="lazy"
            />
          </picture>

          <picture
            :class="
              activePart === 2
                ? 'block animate__animated animate__fadeIn'
                : 'hidden'
            "
          >
            <source type="image/webp" :srcset="createASystemAppViewWEBP3x" />
            <img
              :src="createASystemAppViewPNG"
              :srcset="`${createASystemAppViewPNG}, ${createASystemAppViewPNG2x} 2x, ${createASystemAppViewPNG3x} 3x`"
              alt=""
              class="max-w-none w-full"
              loading="lazy"
            />
          </picture>

          <picture
            :class="
              activePart === 3
                ? 'block animate__animated animate__fadeIn'
                : 'hidden'
            "
          >
            <source
              type="image/webp"
              :srcset="utilizeAVarietyOfFiltersAppViewWBP3x"
            />
            <img
              :src="utilizeAVarietyOfFiltersAppViewPNG"
              :srcset="`${utilizeAVarietyOfFiltersAppViewPNG}, ${utilizeAVarietyOfFiltersAppViewPNG2x} 2x, ${utilizeAVarietyOfFiltersAppViewPNG3x} 3x`"
              alt=""
              class="max-w-none w-full"
              loading="lazy"
            />
          </picture>

          <picture
            :class="
              activePart === 4
                ? 'block animate__animated animate__fadeIn'
                : 'hidden'
            "
          >
            <source
              type="image/webp"
              :srcset="setUpAndStructureInFoldersAppViewWEBP3x"
            />
            <img
              :src="setUpAndStructureInFoldersAppViewPNG"
              :srcset="`${setUpAndStructureInFoldersAppViewPNG}, ${setUpAndStructureInFoldersAppViewPNG2x} 2x, ${setUpAndStructureInFoldersAppViewPNG3x} 3x`"
              alt=""
              class="max-w-none w-full"
              loading="lazy"
            />
          </picture>

          <picture
            :class="
              activePart === 5
                ? 'block animate__animated animate__fadeIn'
                : 'hidden'
            "
          >
            <source
              type="image/webp"
              :srcset="useAUsefulAndEfficientCameraAppViewWEBP3x"
            />
            <img
              :src="useAUsefulAndEfficientCameraAppViewPNG"
              :srcset="`${useAUsefulAndEfficientCameraAppViewPNG}, ${useAUsefulAndEfficientCameraAppViewPNG2x} 2x, ${useAUsefulAndEfficientCameraAppViewPNG3x} 3x`"
              alt=""
              class="max-w-none w-full"
              loading="lazy"
            />
          </picture>

          <picture
            :class="
              activePart === 6
                ? 'block animate__animated animate__fadeIn'
                : 'hidden'
            "
          >
            <source
              type="image/webp"
              :srcset="oneClickScanningStraighteningCroppingAndOCRAppViewWEBP3x"
            />
            <img
              :src="oneClickScanningStraighteningCroppingAndOCRAppViewPNG"
              :srcset="`${oneClickScanningStraighteningCroppingAndOCRAppViewPNG}, ${oneClickScanningStraighteningCroppingAndOCRAppViewPNG2x}, ${oneClickScanningStraighteningCroppingAndOCRAppViewPNG3x}`"
              alt=""
              class="max-w-none w-full"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
