<template>
  <div class="md:max-h-[100vh] py-6 lg:px-2">
    <div class="grid lg:grid-cols-1 lg:max-w-6xl lg:mx-auto max-lg:mx-2">
      <TranslateButton />
    </div>
    <div class="grid gap-4 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto mt-4">
      <LeftDiv class="max-lg:mx-2" />
      <RightDiv class="rounded-lg lg:overflow-y-auto lg:h-[80vh] scrollbar-hide" />
    </div>
    <footer class="grid lg:grid-cols-1 lg:max-w-6xl lg:mx-auto max-lg:mx-2">
      <p class="py-4 text-center">
        <small class="text-xs normal-text align-bottom">Made with Vue.js and Love </small>
        <img class="inline w-5" src="/images/heart-tank.gif" alt="Megaman-x heart tank GIF.">
      </p>
    </footer>
  </div>
</template>

<script setup>
import LeftDiv from "./layouts/LeftDiv.vue";
import RightDiv from "./layouts/RightDiv.vue";
import TranslateButton from "./components/TranslateButton.vue";
</script>