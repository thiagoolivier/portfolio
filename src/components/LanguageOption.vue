<template>
  <div class="language-option">
    <img :src="url" :alt="alt" class="h-5">
    <span class="text-sm font-bold text-white tracking-wide px-1">{{ name }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  url: String,
  alt: String,
})
</script>

<style>
  .language-option {
    @apply transition ease-in delay-[25ms] flex rounded space-x-2 p-1
  }

  .language-option:hover {
    @apply bg-white/10 cursor-pointer
  }
</style>