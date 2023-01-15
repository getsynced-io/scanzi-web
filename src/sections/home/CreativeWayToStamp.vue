<script setup>
import { ref } from "vue";

// -- The images/assets

// - Creative way to stamp app view
import creativeWayToStampAppViewPNG from "../../assets/images/creative-way-to-stamp-section/creative-way-to-stamp/creative-way-to-stamp-app-view.png";
import creativeWayToStampAppViewPNG2x from "../../assets/images/creative-way-to-stamp-section/creative-way-to-stamp/creative-way-to-stamp-app-view-2x.png";
import creativeWayToStampAppViewPNG3x from "../../assets/images/creative-way-to-stamp-section/creative-way-to-stamp/creative-way-to-stamp-app-view-3x.png";
import creativeWayToStampAppViewWEBP2x from "../../assets/images/creative-way-to-stamp-section/creative-way-to-stamp/creative-way-to-stamp-app-view-2x.webp";

// - Professional way to protect your images app view
import professionalWayToProtectYourImagesAppViewPNG from "../../assets/images/creative-way-to-stamp-section/professional-way-to-protect-your-images/professional-way-to-protect-your-images-app-view.png";
import professionalWayToProtectYourImagesAppViewPNG2x from "../../assets/images/creative-way-to-stamp-section/professional-way-to-protect-your-images/professional-way-to-protect-your-images-app-view-2x.png";
import professionalWayToProtectYourImagesAppViewPNG3x from "../../assets/images/creative-way-to-stamp-section/professional-way-to-protect-your-images/professional-way-to-protect-your-images-app-view-3x.png";
import professionalWayToProtectYourImagesAppViewWEBP2x from "../../assets/images/creative-way-to-stamp-section/professional-way-to-protect-your-images/professional-way-to-protect-your-images-app-view-2x.webp";

// - The all-in-one solution annotating your documents app view
import theAllInOneSolutionAnnotatingYourDocumentsAppViewPNG from "../../assets/images/creative-way-to-stamp-section/the-all-in-one-solution-annotating-your-documents/the-all-in-one-solution-for-annotating-your-documents-app-view.png";
import theAllInOneSolutionAnnotatingYourDocumentsAppViewPNG2x from "../../assets/images/creative-way-to-stamp-section/the-all-in-one-solution-annotating-your-documents/the-all-in-one-solution-for-annotating-your-documents-app-view-2x.png";
import theAllInOneSolutionAnnotatingYourDocumentsAppViewPNG3x from "../../assets/images/creative-way-to-stamp-section/the-all-in-one-solution-annotating-your-documents/the-all-in-one-solution-for-annotating-your-documents-app-view-3x.png";
import theAllInOneSolutionAnnotatingYourDocumentsAppViewWEBP2x from "../../assets/images/creative-way-to-stamp-section/the-all-in-one-solution-annotating-your-documents/the-all-in-one-solution-for-annotating-your-documents-app-view-2x.webp";

// - Efficient way to extract text from images
import efficientWayToExtractTextFromImagesAppViewPMG from "../../assets/images/creative-way-to-stamp-section/efficient-way-to-extract-text-from-images/efficient-way-to-extract-text-text-from-images-app-view.png";
import efficientWayToExtractTextFromImagesAppViewPMG2x from "../../assets/images/creative-way-to-stamp-section/efficient-way-to-extract-text-from-images/efficient-way-to-extract-text-text-from-images-app-view-2x.png";
import efficientWayToExtractTextFromImagesAppViewPMG3x from "../../assets/images/creative-way-to-stamp-section/efficient-way-to-extract-text-from-images/efficient-way-to-extract-text-text-from-images-app-view-3x.png";
import efficientWayToExtractTextFromImagesAppViewWEBP2x from "../../assets/images/creative-way-to-stamp-section/efficient-way-to-extract-text-from-images/efficient-way-to-extract-text-text-from-images-app-view-2x.webp";

// - Save you files as jpg and pdf
import saveYourFilesAsJPGAndPDFAppViewPNG from "../../assets/images/creative-way-to-stamp-section/save-your-files-as-jpg-and-pdf/save-your-files-as-jpg-and-pdf-app-view.png";
import saveYourFilesAsJPGAndPDFAppViewPNG2x from "../../assets/images/creative-way-to-stamp-section/save-your-files-as-jpg-and-pdf/save-your-files-as-jpg-and-pdf-app-view-2x.png";
import saveYourFilesAsJPGAndPDFAppViewPNG3x from "../../assets/images/creative-way-to-stamp-section/save-your-files-as-jpg-and-pdf/save-your-files-as-jpg-and-pdf-app-view-3x.png";
import saveYourFilesAsJPGAndPDFAppViewWEBP2x from "../../assets/images/creative-way-to-stamp-section/save-your-files-as-jpg-and-pdf/save-your-files-as-jpg-and-pdf-app-view-2x.webp";

// - Enhance the protection of your data
import enhanceTheProtectionOfYourDataAppViewPNG from "../../assets/images/creative-way-to-stamp-section/enhance-the-protection-of-your-data/enhance-the-protection-of-your-data-app-view.png";
import enhanceTheProtectionOfYourDataAppViewPNG2x from "../../assets/images/creative-way-to-stamp-section/enhance-the-protection-of-your-data/enhance-the-protection-of-your-data-app-view-2x.png";
import enhanceTheProtectionOfYourDataAppViewPNG3x from "../../assets/images/creative-way-to-stamp-section/enhance-the-protection-of-your-data/enhance-the-protection-of-your-data-app-view-3x.png";
import enhanceTheProtectionOfYourDataAppViewWEBP2x from "../../assets/images/creative-way-to-stamp-section/enhance-the-protection-of-your-data/enhance-the-protection-of-your-data-app-view-2x.webp";

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
              Creative way to stamp
            </p>
          </li>

          <li class="">
            <p
              :class="activePart === 2 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(2)"
            >
              Professional way to protect your images
            </p>
          </li>

          <li class="">
            <p
              :class="activePart === 3 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(3)"
            >
              The all-in-one solution for annotating your documents
            </p>
          </li>

          <li class="">
            <p
              :class="activePart === 4 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(4)"
            >
              Efficient way to extract text from images
            </p>
          </li>

          <li class="">
            <p
              :class="activePart === 5 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(5)"
            >
              Save your files as JPG and PDF
            </p>
          </li>

          <li class="">
            <p
              :class="activePart === 6 ? 'text-darkBlue' : 'text-lightDarkBlue'"
              @click="changeIndex(6)"
            >
              Enhance the protection of your data
            </p>
          </li>
        </ul>
      </div>

      <div
        class="mt-8 md:mt-0 md:order-1 md:flex-1 xl:flex-[0_1_538px] lg:mt-0"
      >
        <div class="flex items-center aspect-[1/1]">
          <picture
            :class="
              activePart === 1
                ? 'block animate__animated animate__fadeIn'
                : 'hidden'
            "
          >
            <source
              type="image/webp"
              :srcset="creativeWayToStampAppViewWEBP2x"
            />
            <img
              :src="creativeWayToStampAppViewPNG"
              :srcset="`${creativeWayToStampAppViewPNG}, ${creativeWayToStampAppViewPNG2x} 2x, ${creativeWayToStampAppViewPNG3x} 3x`"
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
            <source
              type="image/webp"
              :srcset="professionalWayToProtectYourImagesAppViewWEBP2x"
            />
            <img
              :src="professionalWayToProtectYourImagesAppViewPNG"
              :srcset="`${professionalWayToProtectYourImagesAppViewPNG}, ${professionalWayToProtectYourImagesAppViewPNG2x} 2x, ${professionalWayToProtectYourImagesAppViewPNG3x} 3x`"
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
              :srcset="theAllInOneSolutionAnnotatingYourDocumentsAppViewWEBP2x"
            />
            <img
              :src="theAllInOneSolutionAnnotatingYourDocumentsAppViewPNG"
              :srcset="`${theAllInOneSolutionAnnotatingYourDocumentsAppViewPNG}, ${theAllInOneSolutionAnnotatingYourDocumentsAppViewPNG2x} 2x, ${theAllInOneSolutionAnnotatingYourDocumentsAppViewPNG3x} 3x`"
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
              :srcset="efficientWayToExtractTextFromImagesAppViewWEBP2x"
            />
            <img
              :src="efficientWayToExtractTextFromImagesAppViewPMG"
              :srcset="`${efficientWayToExtractTextFromImagesAppViewPMG}, ${efficientWayToExtractTextFromImagesAppViewPMG2x} 2x, ${efficientWayToExtractTextFromImagesAppViewPMG3x} 3x`"
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
              :srcset="saveYourFilesAsJPGAndPDFAppViewWEBP2x"
            />
            <img
              :src="saveYourFilesAsJPGAndPDFAppViewPNG"
              :srcset="`${saveYourFilesAsJPGAndPDFAppViewPNG}, ${saveYourFilesAsJPGAndPDFAppViewPNG2x} 2x, ${saveYourFilesAsJPGAndPDFAppViewPNG3x} 3x`"
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
              :srcset="enhanceTheProtectionOfYourDataAppViewWEBP2x"
            />
            <img
              :src="enhanceTheProtectionOfYourDataAppViewPNG"
              :srcset="`${enhanceTheProtectionOfYourDataAppViewPNG}, ${enhanceTheProtectionOfYourDataAppViewPNG2x} 2x, ${enhanceTheProtectionOfYourDataAppViewPNG3x} 3x`"
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
