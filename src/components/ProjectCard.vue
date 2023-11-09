<template>
  <button :title="$t('components.project.title')" id="project-card" class="project-card group">
    <a :href="project.pdf" target="_blank">
      <div class="flex items-center space-x-3">
        <img class="project-thumbnail" :src="project.thumbnail" :alt="project.thumbnailAlt">
        <div class="project-card-header normal-text">
          <div class="flex justify-between align-middle">
            <h4 class="font-bold">
              {{ project.name }}
            </h4>
            <svg class="arrow-svg" width="18" height="18" viewBox="0 0 14 14" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 1.99992C13 1.44763 12.5522 0.999919 12 0.999919L2.99996 0.99992C2.44767 0.999919 1.99996 1.44763 1.99996 1.99992C1.99996 2.5522 2.44767 2.99992 2.99996 2.99992L11 2.99992L11 10.9999C11 11.5522 11.4477 11.9999 12 11.9999C12.5522 11.9999 13 11.5522 13 10.9999L13 1.99992ZM2.80757 12.6065L12.7071 2.70703L11.2929 1.29281L1.39336 11.1923L2.80757 12.6065Z" />
            </svg>
          </div>
          <p class="text-sm">
            {{ project.description }}
          </p>
        </div>
      </div>
      <div class="flex justify-center space-x-2">
        <SkillTag v-for="skillTag in project.skillTags" :key="skillTag">{{ skillTag }}</SkillTag>
      </div>
    </a>
  </button>
</template>

<script setup>
import SkillTag from './SkillTag.vue';

const props = defineProps({
  project: {
    name: '',
    thumbnail: '',
    thumbnailAlt: '',
    description: '',
    pdf: '',
    skillTags: [],
  },
});
</script>

<style lang="postcss" scoped>
.project-card {
  @apply p-2 space-y-3 rounded transition ease-in hover:bg-white/10
}

.project-thumbnail {
  @apply max-h-20 rounded border-2 border-[#787878]
}

.project-card-header {
  @apply transition ease-in group-hover:text-white
}

.arrow-svg {
  @apply fill-[#CBCBCB] transition ease-in group-hover:fill-white
}
</style>