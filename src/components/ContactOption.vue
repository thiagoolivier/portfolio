<template>
  <div class="group flex grow items-center space-x-6 justify-between relative" :title="title">
    <button type="button">
      <a :href="url" target="_blank">
        <slot name="contact-icon" class="svg-icon"></slot>
      </a>
    </button>

    <span ref="linkText"
      class="transition ease-in delay-[50ms] text-sm font-medium text-[#8c8a8a] group-hover:text-white">
      <slot name="link-text"></slot>
    </span>

    <button ref="copyBtn" @click="copyText" :title="$t('components.contactOption.copyContentTitle')" id="copy-btn" class="inline-block">
      <svg class="svg-icon" id="copy-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.2728 4H6.54549C5.74549 4 5.09094 4.65455 5.09094 5.45455V15.6364H6.54549V5.45455H15.2728V4ZM17.4546 6.90909H9.45458C8.65458 6.90909 8.00003 7.56364 8.00003 8.36364V18.5455C8.00003 19.3455 8.65458 20 9.45458 20H17.4546C18.2546 20 18.9091 19.3455 18.9091 18.5455V8.36364C18.9091 7.56364 18.2546 6.90909 17.4546 6.90909ZM17.4546 18.5455H9.45458V8.36364H17.4546V18.5455Z" />
      </svg>
    </button>
    <Transition name="copy">
      <CopyAlert v-if="isClicked"/>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CopyAlert from './CopyAlert.vue';

const props = defineProps({
  url: String,
  title: String,
})

const linkText = ref(null);
const copyBtn = ref(null);
const isClicked = ref(false);

const copyText = () => {
  navigator.clipboard.writeText(linkText.value.innerText);
  isClicked.value = true;
  setTimeout(() => {
    isClicked.value = false;
  }, 1500)
}
</script>

<style scoped>
.copy-enter-active {
  transition: opacity 200ms ease-in;
}

.copy-leave-active {
  transition: opacity 600ms ease-in;
}

.copy-enter-from,
.copy-leave-to {
  opacity: 0;
}
</style>