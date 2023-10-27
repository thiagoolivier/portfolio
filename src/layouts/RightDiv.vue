<script setup>
import ContactOption from '../components/ContactOption.vue';
import Container from "../components/Container.vue";
</script>

<template>
  <div id="right-div" class="scroll-smooth">
    <Container id="about-me" class="bg-[#424242]">
      <h2 class="content-title">About me</h2>
      <div class="normal-text">
        <p>Hello! My name is Thiago. Nice to have you here!</p>
        <p>I'm a young web developer on the road to leave my mark in the world.</p>
        <p>For some time i've been studying about computer science and UX Design. Recently i finished my Google UX Design
          professional certification, but i know i must keep improving my knowledge.</p>
      </div>
    </Container>

    <Container id="projects">
      <h2 class="content-title">Projects</h2>
    </Container>

    <Container id="skills" class="bg-[#424242]">
      <h2 class="content-title">Skills</h2>
    </Container>

    <Container id="contact" class="flex flex-col items-center py-24 space-y-16">
      <h2 class="content-title">Contact</h2>
      <p class="normal-text text-center">Feel free to reach me through the following links</p>

      <div class="space-y-8">
        <ContactOption :title="'Link to Github'" :url="'https://www.github.com/thiagoolivier'">
          <template #contact-icon>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 0C21.7318 0 28 6.42621 28 14.353C28 20.7257 23.947 26.1256 18.3406 27.9987C18.3419 27.9935 18.3445 27.985 18.3445 27.985C18.3445 27.985 17.3995 27.5309 17.4198 26.7206C17.4421 25.8288 17.4198 23.7483 17.4198 22.9843C17.4198 21.673 16.6104 20.7439 16.6104 20.7439C16.6104 20.7439 22.9594 20.817 22.9594 13.8721C22.9594 11.1927 21.5931 9.79785 21.5931 9.79785C21.5931 9.79785 22.3109 6.93704 21.3449 5.72357C20.2625 5.60352 18.3228 6.78438 17.4949 7.33632C17.4949 7.33632 16.1827 6.78438 14 6.78438C11.8173 6.78438 10.5051 7.33632 10.5051 7.33632C9.67718 6.78438 7.73818 5.60352 6.65509 5.72357C5.68909 6.93704 6.40691 9.79785 6.40691 9.79785C6.40691 9.79785 5.04064 11.192 5.04064 13.8721C5.04064 20.817 11.3896 20.7439 11.3896 20.7439C11.3896 20.7439 10.7501 21.4851 10.6101 22.5746C10.1672 22.7286 9.51491 22.9191 8.988 22.9191C7.61027 22.9191 6.56218 21.5457 6.17782 20.9109C5.79918 20.2846 5.02282 19.7588 4.29864 19.7588C3.822 19.7588 3.58909 20.0034 3.58909 20.2827C3.58909 20.5619 4.25727 20.757 4.69827 21.275C5.628 22.3671 5.61145 24.8228 8.92436 24.8228C9.28391 24.8228 10.0183 24.7321 10.5713 24.6558C10.5681 25.4289 10.5668 26.245 10.5789 26.7219C10.5986 27.5322 9.65427 27.9863 9.65427 27.9863C9.65427 27.9863 9.65682 27.9941 9.65809 28C4.053 26.1256 0 20.7257 0 14.353C0 6.42621 6.26818 0 14 0Z"
                fill="#8C8A8A" />
            </svg>
          </template>

          <template #link-text>
            github.com/thiagoolivier
          </template>
        </ContactOption>

        <ContactOption :title="'Link to Linkedin'" :url="'https://www.linkedin.com/in/thiagoolivier/'">
          <template #contact-icon>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.6667 0H3.33333C1.49333 0 0 1.49333 0 3.33333V24.6667C0 26.5067 1.49333 28 3.33333 28H24.6667C26.5067 28 28 26.5067 28 24.6667V3.33333C28 1.49333 26.5067 0 24.6667 0ZM8.66667 10.6667V23.3333H4.66667V10.6667H8.66667ZM4.66667 6.98C4.66667 6.04667 5.46667 5.33333 6.66667 5.33333C7.86667 5.33333 8.62 6.04667 8.66667 6.98C8.66667 7.91333 7.92 8.66667 6.66667 8.66667C5.46667 8.66667 4.66667 7.91333 4.66667 6.98ZM23.3333 23.3333H19.3333C19.3333 23.3333 19.3333 17.16 19.3333 16.6667C19.3333 15.3333 18.6667 14 17 13.9733H16.9467C15.3333 13.9733 14.6667 15.3467 14.6667 16.6667C14.6667 17.2733 14.6667 23.3333 14.6667 23.3333H10.6667V10.6667H14.6667V12.3733C14.6667 12.3733 15.9533 10.6667 18.54 10.6667C21.1867 10.6667 23.3333 12.4867 23.3333 16.1733V23.3333Z"
                fill="#8C8A8A" />
            </svg>
          </template>

          <template #link-text>
            linkedin.com/in/thiagoolivier
          </template>
        </ContactOption>

        <ContactOption :title="'Send e-mail to dev.thiagoolivier@gmail.com'" :url="'mailto:dev.thiagoolivier@gmail.com'">
          <template #contact-icon>
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.2 4.57886H2.8C1.26 4.57886 0.014 5.86373 0.014 7.43412L0 24.5657C0 26.1361 1.26 27.421 2.8 27.421H25.2C26.74 27.421 28 26.1361 28 24.5657V7.43412C28 5.86373 26.74 4.57886 25.2 4.57886ZM25.2 10.2894L14 17.4275L2.8 10.2894V7.43412L14 14.5723L25.2 7.43412V10.2894Z"
                fill="#8C8A8A" />
            </svg>
          </template>

          <template #link-text>
            dev.thiagoolivier@gmail.com
          </template>
        </ContactOption>
      </div>
    </Container>

    <p class="py-12 text-center">
      <small class="normal-text align-bottom">Made with Vue.js and Love </small>
      <img class="inline w-6" src="/images/heart-tank.gif" alt="Megaman-x heart tank GIF.">
    </p>
  </div>
</template>

<style>
.content-title {
  @apply font-bold text-2xl text-white
}

.svg-icon {
  @apply inline transition ease-in delay-[50ms] fill-[#8C8A8A] hover:fill-white
}

.normal-text {
  @apply text-[#CBCBCB] space-y-4
}
</style>
