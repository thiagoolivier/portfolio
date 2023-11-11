<template>
  <div class="relative">
    <span ref="target">
      <button id="lang-options-btn" @click="isVisible = !isVisible" class="inline-block">
        <svg class="transition ease-in delay-50 hover:fill-white" :class="[isVisible ? 'fill-white' : '']" fill="#8C8A8A"
          height="36px" width="36px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.00 32.00" xml:space="preserve" stroke="#ffffff"
          stroke-width="0.00032">
          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
            stroke-width="0.064" />
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M10,11c0.4-0.6,0.8-1.2,0.9-2H9.1C9.2,9.7,9.6,10.4,10,11z" />
              <path
                d="M19,18V2c0-0.6-0.4-1-1-1H2C1.4,1,1,1.4,1,2v16c0,0.6,0.4,1,1,1h16C18.6,19,19,18.6,19,18z M14,13c0.6,0,1,0.4,1,1 s-0.4,1-1,1c-1.5,0-2.9-0.5-4-1.3C8.9,14.5,7.5,15,6,15c-0.6,0-1-0.4-1-1s0.4-1,1-1c0.9,0,1.8-0.3,2.5-0.7C7.8,11.4,7.3,10.2,7.1,9 H6C5.4,9,5,8.6,5,8s0.4-1,1-1h3V5c0-0.6,0.4-1,1-1s1,0.4,1,1v2h3c0.6,0,1,0.4,1,1s-0.4,1-1,1h-1.1c-0.2,1.2-0.7,2.4-1.4,3.3 C12.2,12.7,13.1,13,14,13z" />
              <polygon points="20.6,23 23.4,23 22,20.2 " />
              <path
                d="M30,13h-9v4.8l0.1-0.2c0.3-0.7,1.4-0.7,1.8,0l4,8c0.2,0.5,0,1.1-0.4,1.3C26.3,27,26.2,27,26,27c-0.4,0-0.7-0.2-0.9-0.6 l-0.8-1.5C24.2,25,24.1,25,24,25h-4c-0.1,0-0.2,0-0.3-0.1l-0.8,1.5c-0.2,0.5-0.8,0.7-1.3,0.4c-0.5-0.2-0.7-0.8-0.4-1.3l2.5-5 c-0.5,0.3-1,0.5-1.6,0.5h-5v9c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V14C31,13.4,30.6,13,30,13z" />
            </g>
          </g>
        </svg>
      </button>

      <Transition name="lang">
        <div v-show="isVisible" class="lang-card">
          <ul class="space-y-1">
            <template v-for="language in languages" :key="language.id">
              <LanguageOption @click="handleTranslateClick(); setLocale(language.locale)" :name="language.name"
                :url="language.url" :alt="language.alt" />
            </template>
          </ul>
        </div>
      </Transition>
    </span>
  </div>
</template>

<script setup>
import { ref  } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useI18n } from "vue-i18n";
import LanguageOption from './LanguageOption.vue';

const { locale } = useI18n();
const target = ref(null);
const isVisible = ref(false);

const languages = [
  {
    id: 1,
    name: 'English',
    url: 'images/us-flag-icon.png',
    alt: 'United States flag',
    locale: 'en'
  },
  {
    id: 2,
    name: 'Português',
    url: 'images/br-flag-icon.png',
    alt: 'Brazil flag',
    locale: 'pt_BR'
  }
];

function handleTranslateClick() {
  if (isVisible.value == true) {
    isVisible.value = false;
  }
}

function setLocale(input) {
  locale.value = input;
}

onClickOutside(target, () => {
  handleTranslateClick();
})
</script>

<style>
.lang-card {
  @apply absolute -top-5 left-10 inline-block rounded p-2 bg-[#3A3A3A]
}

.lang-enter-active,
.lang-leave-active {
  transition: opacity 200ms ease-out;
}

.lang-enter-from,
.lang-leave-to {
  opacity: 0;
}
</style>