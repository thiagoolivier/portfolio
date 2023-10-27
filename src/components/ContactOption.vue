<script setup>

import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  url: String,
  title: String,
})

</script>

<template>
    <Transition name="contact-item">
      <div class="flex grow items-center space-x-6 justify-between" :title="title">
        <button type="button">
          <a :href="url" target="_blank">
            <slot name="contact-icon"></slot>
          </a>
        </button>

        <span class="text-sm font-medium text-[#8c8a8a]">
          <slot name="link-text"></slot>
        </span>

        <span class="inline-block">
          <svg id="copy-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.2728 4H6.54549C5.74549 4 5.09094 4.65455 5.09094 5.45455V15.6364H6.54549V5.45455H15.2728V4ZM17.4546 6.90909H9.45458C8.65458 6.90909 8.00003 7.56364 8.00003 8.36364V18.5455C8.00003 19.3455 8.65458 20 9.45458 20H17.4546C18.2546 20 18.9091 19.3455 18.9091 18.5455V8.36364C18.9091 7.56364 18.2546 6.90909 17.4546 6.90909ZM17.4546 18.5455H9.45458V8.36364H17.4546V18.5455Z"
              fill="#8C8A8A" />
          </svg>
        </span>
      </div>
    </Transition>
</template>

<style>
.lang-card {
  @apply absolute -top-10 left-10 inline-block rounded p-2 bg-[#3A3A3A]
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