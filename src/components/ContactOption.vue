<template>
  <div class="group flex grow items-center space-x-6 relative" :title="title">
    <button type="button">
      <a :href="url" target="_blank">
        <slot name="contact-icon" class="svg-icon"></slot>
      </a>
    </button>

    <span ref="linkText"
      class="transition ease-in delay-[50ms] text-sm font-medium text-[#8c8a8a] group-hover:text-white">
      <slot name="link-text"></slot>
    </span>
    <Transition name="copy">
      <CopyAlert v-if="isClicked" />
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