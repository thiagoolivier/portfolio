<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

import CorneredContainer from '../components/CorneredContainer.vue';
import Container from '../components/Container.vue';
import DesktopNavItem from '../components/DesktopNavItem.vue';

const useBreakpoints = () => {
  let windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  const width = computed(() => windowWidth.value)

  return { width }
}

const { width } = useBreakpoints()

const desktopNavItems = [
  {
    "htmlId": 'about-me-nav',
    "href": '#about-me',
    "innerText": "About me"
  },
  {
    "htmlId": 'projects-nav',
    "href": "#projects",
    "innerText": "Projects"
  },
  {
    "htmlId": 'skills-nav',
    "href": "#skills",
    "innerText": "Skills"
  },
  {
    "htmlId": 'contact-nav',
    "href": "#contact",
    "innerText": "Contact"
  },
]

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
      }, 400);
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

<template>
  <div>
    <div class="space-y-8">
      <div class="flex flex-row place-content-between">
        <CorneredContainer></CorneredContainer>
        <CorneredContainer class="rotate-90"></CorneredContainer>
      </div>

      <div class="font-normal px-8 space-y-4">
        <h1 class="text-3xl text-white">Hey there!</h1>
        <p class="text-2xl text-[#CBCBCB] space-y-4">
          <span class="inline-block">My name is <span class="text-white font-bold">Thiago Olivier</span>.</span><br>
          <span class="inline-block">I'm a <span class="text-[#BE8BFF]">Web Developer</span> and <span
              class="text-[#BE8BFF]">UX Designer</span>.</span><br>
          <span class="inline-block">I create user-centered products, prioritizing <span
              class="text-white font-bold">accessibility</span> and <span class="text-white font-bold">user
              experience</span>.</span>
        </p>
      </div>

      <div class="flex flex-row place-content-between rotate-180">
        <CorneredContainer></CorneredContainer>
        <CorneredContainer class="rotate-90"></CorneredContainer>
      </div>
    </div>
    <nav v-if="width >= 1024" class="mt-4">
      <ul id="desktop-nav" class="w-max">
        <template v-for="(item, index) in desktopNavItems" :key="index">
          <li :id="item.htmlId">
            <DesktopNavItem :href="item.href">
              {{ item.innerText }}
            </DesktopNavItem>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>