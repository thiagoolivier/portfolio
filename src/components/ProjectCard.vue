<template>
  <div id="project-card" class="group p-2 space-y-3 rounded hover-transition hover:bg-white/10">
    <div class="flex items-center space-x-3">
      <img class="max-h-20 rounded border-2 border-[#787878]" src="images/projects/portfolio_thumb.png" alt="Portfolio project thumbnail.">
      <div class="normal-text hover-transition group-hover:text-white">
        <div class="flex justify-between align-middle">
          <h4 class="font-bold">Portfolio Project</h4>
          <svg class="fill-[#CBCBCB] hover-transition group-hover:fill-white" width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 1.99992C13 1.44763 12.5522 0.999919 12 0.999919L2.99996 0.99992C2.44767 0.999919 1.99996 1.44763 1.99996 1.99992C1.99996 2.5522 2.44767 2.99992 2.99996 2.99992L11 2.99992L11 10.9999C11 11.5522 11.4477 11.9999 12 11.9999C12.5522 11.9999 13 11.5522 13 10.9999L13 1.99992ZM2.80757 12.6065L12.7071 2.70703L11.2929 1.29281L1.39336 11.1923L2.80757 12.6065Z"
            />
          </svg>
        </div>
        <p class="text-sm">A simple portfolio website to showcase information, skills, projects, contact and more.</p>
      </div>
    </div>
    <div class="flex justify-center space-x-2">
      <SkillTag>Vue.js</SkillTag>
      <SkillTag>Tailwind</SkillTag>
    </div>
  </div>
</template>

<script setup>
import SkillTag from './SkillTag.vue';
</script>

<style scoped>
  .hover-transition {
    @apply transition ease-in
  }
</style>