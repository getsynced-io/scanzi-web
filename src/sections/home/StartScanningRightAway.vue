<script setup>
import { ref } from "vue";

// assets/images

// start scanning right away images
import scanningAppMainViewPNG from "../../assets/images/start-scanning-right-away-section/start-scanning-right-away/scanning-app-main-view.png";
import scanningAppMainViewPNG2x from "../../assets/images/start-scanning-right-away-section/start-scanning-right-away/scanning-app-main-view-2x.png";
import scanningAppMainViewPNG3x from "../../assets/images/start-scanning-right-away-section/start-scanning-right-away/scanning-app-main-view-3x.png";

// create a system for you documents images
import createASystemViewPNG from "../../assets/images/start-scanning-right-away-section/create-a-system-for-your-documents/create-a-system-view.png";
import createASystemViewPNG2x from "../../assets/images/start-scanning-right-away-section/create-a-system-for-your-documents/create-a-system-view-2x.png";
import createASystemViewPNG3x from "../../assets/images/start-scanning-right-away-section/create-a-system-for-your-documents/create-a-system-view-3x.png";

// utilize a variety of filters
import utilizeAVarietyOfFiltersViewPNG from "../../assets/images/start-scanning-right-away-section/utilize-a-variety-of-filters/utilize-a-variety-of-filters-view.png";
import utilizeAVarietyOfFiltersViewPNG2x from "../../assets/images/start-scanning-right-away-section/utilize-a-variety-of-filters/utilize-a-variety-of-filters-view-2x.png";
import utilizeAVarietyOfFiltersViewPNG3x from "../../assets/images/start-scanning-right-away-section/utilize-a-variety-of-filters/utilize-a-variety-of-filters-view-3x.png";

// set up and structure in folders images
import setUpAndStructureInFoldersViewPNG from "../../assets/images/start-scanning-right-away-section/set-up-and-structure-in-folders/set-up-and-structure-in-folders-view.png";
import setUpAndStructureInFoldersViewPNG2x from "../../assets/images/start-scanning-right-away-section/set-up-and-structure-in-folders/set-up-and-structure-in-folders-view-2x.png";
import setUpAndStructureInFoldersViewPNG3x from "../../assets/images/start-scanning-right-away-section/set-up-and-structure-in-folders/set-up-and-structure-in-folders-view-3x.png";

// use a useful and efficient camera images
import useAUsefulAndEfficientCameraViewPNG from "../../assets/images/start-scanning-right-away-section/use-a-useful-and-efficient-camera/use-a-useful-and-efficient-camera-view.png";
import useAUsefulAndEfficientCameraViewPNG2x from "../../assets/images/start-scanning-right-away-section/use-a-useful-and-efficient-camera/use-a-useful-and-efficient-camera-view-2x.png";
import useAUsefulAndEfficientCameraViewPNG3x from "../../assets/images/start-scanning-right-away-section/use-a-useful-and-efficient-camera/use-a-useful-and-efficient-camera-view-3x.png";

// one clicking scanning, straightening, cropping, and OCR
import oneClickScanningStraighteningCroppingAndOCRViewPNG from "../../assets/images/start-scanning-right-away-section/one-click-scanning-straightening-cropping-and-ocr/one-click-scanning-straightening-cropping-and-ocr-view.png";
import oneClickScanningStraighteningCroppingAndOCRViewPNG2x from "../../assets/images/start-scanning-right-away-section/one-click-scanning-straightening-cropping-and-ocr/one-click-scanning-straightening-cropping-and-ocr-view-2x.png";
import oneClickScanningStraighteningCroppingAndOCRViewPNG3x from "../../assets/images/start-scanning-right-away-section/one-click-scanning-straightening-cropping-and-ocr/one-click-scanning-straightening-cropping-and-ocr-view-3x.png";

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
        <div class="flex items-center md:h-[358px]">
          <picture
            :class="
              activePart === 1
                ? 'block animate__animated animate__fadeIn'
                : 'hidden'
            "
          >
            <img
              :src="scanningAppMainViewPNG"
              :srcset="`${scanningAppMainViewPNG} 1x, ${scanningAppMainViewPNG2x} 2x, ${scanningAppMainViewPNG3x} 3x`"
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
            <img
              :src="createASystemViewPNG"
              :srcset="`${createASystemViewPNG} 1x, ${createASystemViewPNG2x} 2x, ${createASystemViewPNG3x} 3x`"
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
            <img
              :src="utilizeAVarietyOfFiltersViewPNG"
              :srcset="`${utilizeAVarietyOfFiltersViewPNG} 1x, ${utilizeAVarietyOfFiltersViewPNG2x} 2x, ${utilizeAVarietyOfFiltersViewPNG3x} 3x`"
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
            <img
              :src="setUpAndStructureInFoldersViewPNG"
              :srcset="`${setUpAndStructureInFoldersViewPNG} 1x, ${setUpAndStructureInFoldersViewPNG2x} 2x, ${setUpAndStructureInFoldersViewPNG3x} 3x`"
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
            <img
              :src="useAUsefulAndEfficientCameraViewPNG"
              :srcset="`${useAUsefulAndEfficientCameraViewPNG} 1x, ${useAUsefulAndEfficientCameraViewPNG2x} 2x, ${useAUsefulAndEfficientCameraViewPNG3x} 3x`"
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
            <img
              :src="oneClickScanningStraighteningCroppingAndOCRViewPNG"
              :srcset="`${oneClickScanningStraighteningCroppingAndOCRViewPNG} 1x, ${oneClickScanningStraighteningCroppingAndOCRViewPNG2x} 2x, ${oneClickScanningStraighteningCroppingAndOCRViewPNG3x} 3x`"
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
