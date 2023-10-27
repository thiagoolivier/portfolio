<script setup>
import LeftDiv from "./layouts/LeftDiv.vue";
import RightDiv from "./layouts/RightDiv.vue";
import TranslateButton from "./components/TranslateButton.vue";
</script>

<template>
  <div class="md:max-h-[100vh] py-12 lg:px-2">
    <div class="grid lg:grid-cols-2 lg:max-w-6xl lg:mx-auto max-lg:mx-2">
      <TranslateButton />
    </div>
    <div class="grid gap-4 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto mt-4">
      <LeftDiv class="max-lg:mx-2" />
      <RightDiv class="rounded-lg lg:overflow-y-auto lg:h-[80vh] scrollbar-hide" />
    </div>
  </div>
</template>

<style scoped>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>