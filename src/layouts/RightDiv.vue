<template>
  <div id="right-div" class="scroll-smooth">
    <!-- About Me -->
    <Container id="about-me" class="bg-[#424242]">
      <h2 class="content-title">{{ $t('about.title') }}</h2>
      <div class="normal-text">
        <p>{{ $t('about.p1') }}</p>
        <p>{{ $t('about.p2') }}</p>
        <p>{{ $t('about.p3') }}</p>
        <p>{{ $t('about.p4') }}</p>
        <p>{{ $t('about.p5') }}</p>
      </div>
    </Container>

    <!-- Projects -->
    <Container id="projects">
      <h2 class="content-title">{{ $t('projects.title') }}</h2>
      <div class="space-y-4 max-sm:space-y-4">
        <ProjectCard :title="$t('projects.myerp.title')" :details="$t('projects.myerp.details')"
          :thumbnail="$t('projects.myerp.thumbnail')" :thumbnailAlt="$t('projects.myerp.thumbnailAlt')"
          :pdf="$t('projects.myerp.pdf')" :skillTags="projects.myerp.skillTags" />

        <ProjectCard :title="$t('projects.portfolio.title')" :details="$t('projects.portfolio.details')"
          :thumbnail="$t('projects.portfolio.thumbnail')" :thumbnailAlt="$t('projects.portfolio.thumbnailAlt')"
          :pdf="$t('projects.portfolio.pdf')" :skillTags="projects.portfolio.skillTags" />

        <ProjectCard :title="$t('projects.tfitness.title')" :details="$t('projects.tfitness.details')"
          :thumbnail="$t('projects.tfitness.thumbnail')" :thumbnailAlt="$t('projects.tfitness.thumbnailAlt')"
          :pdf="$t('projects.tfitness.pdf')" :skillTags="projects.tfitness.skillTags" />
      </div>
    </Container>

    <!-- Skills -->
    <Container id="skills" class="bg-[#424242]">
      <h2 class="content-title">{{ $t('skills.title') }}</h2>
      <Skill :skillLevel="4">
        <slot>{{ $t('skills.skill1') }}</slot>
      </Skill>
      <Skill :skillLevel="2">
        <slot>{{ $t('skills.skill2') }}</slot>
      </Skill>
      <Skill :skillLevel="4">
        <slot>{{ $t('skills.skill7') }}</slot>
      </Skill>
      <Skill :skillLevel="2">
        <slot>{{ $t('skills.skill8') }}</slot>
      </Skill>
      <Skill :skillLevel="2">
        <slot>{{ $t('skills.skill9') }}</slot>
      </Skill>
      <Skill :skillLevel="3">
        <slot>{{ $t('skills.skill3') }}</slot>
      </Skill>
      <Skill :skillLevel="4">
        <slot>{{ $t('skills.skill4') }}</slot>
      </Skill>
      <Skill :skillLevel="4">
        <slot>{{ $t('skills.skill5') }}</slot>
      </Skill>
      <Skill :skillLevel="4">
        <slot>{{ $t('skills.skill6') }}</slot>
      </Skill>
      <div class="flex justify-center">
        <button class="group flex py-4 space-x-2">
          <a class="text-md text-[#cbcbcb] group-hover:text-white font-bold transition ease-out delay-100"
            :href="$t('skills.resumePath')" target="_blank">{{ $t('skills.resume') }}</a>
          <svg class="fill-[#CBCBCB] group-hover:fill-white my-auto transition ease-out delay-100" width="14"
            height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 1.99992C13 1.44763 12.5522 0.999919 12 0.999919L2.99996 0.99992C2.44767 0.999919 1.99996 1.44763 1.99996 1.99992C1.99996 2.5522 2.44767 2.99992 2.99996 2.99992L11 2.99992L11 10.9999C11 11.5522 11.4477 11.9999 12 11.9999C12.5522 11.9999 13 11.5522 13 10.9999L13 1.99992ZM2.80757 12.6065L12.7071 2.70703L11.2929 1.29281L1.39336 11.1923L2.80757 12.6065Z" />
          </svg>
        </button>
      </div>
    </Container>

    <!-- Contact -->
    <Container id="contact" class="flex flex-col items-center pt-[12rem] pb-[16rem] max-sm:pb-[20rem] space-y-[4rem]">
      <h2 class="content-title">{{ $t('contact.title') }}</h2>
      <p class="normal-text text-center">{{ $t('contact.feelFree') }}</p>

      <div class="space-y-8">
        <ContactOption :title="$t('contact.github.title')" :url="'https://www.github.com/thiagoolivier'">
          <template #contact-icon>
            <svg class="svg-icon" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 0C21.7318 0 28 6.42621 28 14.353C28 20.7257 23.947 26.1256 18.3406 27.9987C18.3419 27.9935 18.3445 27.985 18.3445 27.985C18.3445 27.985 17.3995 27.5309 17.4198 26.7206C17.4421 25.8288 17.4198 23.7483 17.4198 22.9843C17.4198 21.673 16.6104 20.7439 16.6104 20.7439C16.6104 20.7439 22.9594 20.817 22.9594 13.8721C22.9594 11.1927 21.5931 9.79785 21.5931 9.79785C21.5931 9.79785 22.3109 6.93704 21.3449 5.72357C20.2625 5.60352 18.3228 6.78438 17.4949 7.33632C17.4949 7.33632 16.1827 6.78438 14 6.78438C11.8173 6.78438 10.5051 7.33632 10.5051 7.33632C9.67718 6.78438 7.73818 5.60352 6.65509 5.72357C5.68909 6.93704 6.40691 9.79785 6.40691 9.79785C6.40691 9.79785 5.04064 11.192 5.04064 13.8721C5.04064 20.817 11.3896 20.7439 11.3896 20.7439C11.3896 20.7439 10.7501 21.4851 10.6101 22.5746C10.1672 22.7286 9.51491 22.9191 8.988 22.9191C7.61027 22.9191 6.56218 21.5457 6.17782 20.9109C5.79918 20.2846 5.02282 19.7588 4.29864 19.7588C3.822 19.7588 3.58909 20.0034 3.58909 20.2827C3.58909 20.5619 4.25727 20.757 4.69827 21.275C5.628 22.3671 5.61145 24.8228 8.92436 24.8228C9.28391 24.8228 10.0183 24.7321 10.5713 24.6558C10.5681 25.4289 10.5668 26.245 10.5789 26.7219C10.5986 27.5322 9.65427 27.9863 9.65427 27.9863C9.65427 27.9863 9.65682 27.9941 9.65809 28C4.053 26.1256 0 20.7257 0 14.353C0 6.42621 6.26818 0 14 0Z" />
            </svg>
          </template>

          <template #link-text>
            github.com/thiagoolivier
          </template>
        </ContactOption>

        <ContactOption :title="$t('contact.linkedin.title')" :url="'https://www.linkedin.com/in/thiagoolivier/'">
          <template #contact-icon>
            <svg class="svg-icon" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.6667 0H3.33333C1.49333 0 0 1.49333 0 3.33333V24.6667C0 26.5067 1.49333 28 3.33333 28H24.6667C26.5067 28 28 26.5067 28 24.6667V3.33333C28 1.49333 26.5067 0 24.6667 0ZM8.66667 10.6667V23.3333H4.66667V10.6667H8.66667ZM4.66667 6.98C4.66667 6.04667 5.46667 5.33333 6.66667 5.33333C7.86667 5.33333 8.62 6.04667 8.66667 6.98C8.66667 7.91333 7.92 8.66667 6.66667 8.66667C5.46667 8.66667 4.66667 7.91333 4.66667 6.98ZM23.3333 23.3333H19.3333C19.3333 23.3333 19.3333 17.16 19.3333 16.6667C19.3333 15.3333 18.6667 14 17 13.9733H16.9467C15.3333 13.9733 14.6667 15.3467 14.6667 16.6667C14.6667 17.2733 14.6667 23.3333 14.6667 23.3333H10.6667V10.6667H14.6667V12.3733C14.6667 12.3733 15.9533 10.6667 18.54 10.6667C21.1867 10.6667 23.3333 12.4867 23.3333 16.1733V23.3333Z" />
            </svg>
          </template>

          <template #link-text>
            linkedin.com/in/thiagoolivier
          </template>
        </ContactOption>

        <ContactOption :title="$t('contact.email.title')" :url="'mailto:dev.thiagoolivier@gmail.com'">
          <template #contact-icon>
            <svg class="svg-icon" width="28" height="32" viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.2 4.57886H2.8C1.26 4.57886 0.014 5.86373 0.014 7.43412L0 24.5657C0 26.1361 1.26 27.421 2.8 27.421H25.2C26.74 27.421 28 26.1361 28 24.5657V7.43412C28 5.86373 26.74 4.57886 25.2 4.57886ZM25.2 10.2894L14 17.4275L2.8 10.2894V7.43412L14 14.5723L25.2 7.43412V10.2894Z" />
            </svg>
          </template>

          <template #link-text>
            dev.thiagoolivier@gmail.com
          </template>
        </ContactOption>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ContactOption from '../components/ContactOption.vue';
import Container from "../components/Container.vue";
import Skill from "../components/Skill.vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = reactive({
  portfolio: {
    skillTags: [
      'Vue.js',
      'Tailwind CSS'
    ]
  },
  myerp: {
    skillTags: [
      'Laravel',
      'MySQL',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS'
    ]
  },
  tfitness: {
    skillTags: [
      'UX Design',
      'Figma'
    ]
  },
});

</script>