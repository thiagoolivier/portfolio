<template>
  <div class="flex items-center justify-between">
    <span class="normal-text"><slot></slot></span>
    <div class="flex space-x-4">
      <template v-for="n in 5">
        <div class="w-2 h-2 bg-[#8C8A8A] rounded-full" :class="{ 'bg-white': n <= skillLevel }"></div>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skillLevel: Number, //1 to number of items in the template. Zero if you want none to be highlighted
})
</script>