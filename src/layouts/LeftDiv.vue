<template>
  <div>
    <div class="space-y-8">
      <div class="flex flex-row place-content-between">
        <CorneredContainer></CorneredContainer>
        <CorneredContainer class="rotate-90"></CorneredContainer>
      </div>

      <div class="font-normal px-8 space-y-4">
        <h1 class="text-3xl text-white">{{ $t('salutation.hey_there') }}</h1>
        <p class="text-2xl text-[#CBCBCB] space-y-4">
          <span class="inline-block">{{ $t('salutation.my_name_is') }} <span class="text-white font-bold">Thiago
              Olivier</span>.</span><br>
          <span class="inline-block">{{ $t('salutation.im_a') }} <span class="text-[#BE8BFF]">Web Developer</span> {{
            $t('salutation.and') }}<span class="text-[#BE8BFF]"> UX Designer</span>.</span><br>
          <span class="inline-block">{{ $t('salutation.i_create') }} <span class="text-white font-bold">{{
            $t('salutation.accessibility') }}</span> {{ $t('salutation.and') }} <span class="text-white font-bold">
              {{ $t('salutation.ux') }}</span>.</span>
        </p>
      </div>

      <div class="flex flex-row place-content-between rotate-180">
        <CorneredContainer></CorneredContainer>
        <CorneredContainer class="rotate-90"></CorneredContainer>
      </div>
    </div>
    <nav v-if="width >= 1024" class="mt-4">
      <ul id="desktop-nav" class="w-max">
        <li :id="'about-me-nav'">
          <DesktopNavItem :href="'#about-me'">
            {{ $t('desktop_nav_items.about_me') }}
          </DesktopNavItem>
        </li>
        <li :id="'projects-nav'">
          <DesktopNavItem :href="'#projects'">
            {{ $t('desktop_nav_items.projects') }}
          </DesktopNavItem>
        </li>
        <li :id="'skills-nav'">
          <DesktopNavItem :href="'#skills'">
            {{ $t('desktop_nav_items.skills') }}
          </DesktopNavItem>
        </li>
        <li :id="'contact-nav'">
          <DesktopNavItem :href="'#contact'">
            {{ $t('desktop_nav_items.contact') }}
          </DesktopNavItem>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

import CorneredContainer from '../components/CorneredContainer.vue';
import DesktopNavItem from '../components/DesktopNavItem.vue';

const useBreakpoints = () => {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => windowWidth.value = window.innerWidth;
  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  const width = computed(() => windowWidth.value);

  return { width }
}

const { width } = useBreakpoints();

function handleRightDivScroll() {
  const parentDiv = document.getElementById('right-div');
  const childrenSections = parentDiv.querySelectorAll('section');
  let navItems = '';

  if (document.getElementById('desktop-nav')) {
    navItems = document.getElementById('desktop-nav').querySelectorAll('li');
    navItems[0].querySelector('a').classList.add('active');
  }

  const parentDivTop = parentDiv.getBoundingClientRect().top;

  let scrolling = false;

  parentDiv.addEventListener('scroll', () => {
    if (!scrolling && navItems.length > 0) {
      scrolling = true;

      setTimeout(() => {
        childrenSections.forEach(section => {
          if (section.getBoundingClientRect().top <= parentDivTop) {
            navItems.forEach(item => {
              if (item.id === `${section.id}-nav`) {
                item.querySelector('a').classList.add('active')
              } else {
                item.querySelector('a').classList.remove('active')
              }
            })
          }
        });

        scrolling = false;
      }, 250);
    }
  });
}

onMounted(() => {
  handleRightDivScroll();

  window.addEventListener('resize', () => {
    handleRightDivScroll();
  });
})
</script>