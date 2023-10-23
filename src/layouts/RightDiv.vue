<script setup>
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

    <Container id="contact" class="text-center py-24 space-y-12">
      <h2 class="content-title">Contact</h2>
      <p class="normal-text">Feel free to reach me through the following</p>
      <div class="flex flex-col space-y-8">
        <small class="normal-text">dev.thiagoolivier@gmail.com</small>
        <a title="Github link" href="https://github.com/thiagoolivier" target="_blank">
          <svg class="svg-icon" width="37" height="37" viewBox="0 0 37 37">
            <path
              d="M18.5 0C28.717 0 37 8.49177 37 18.9664C37 27.3875 31.6442 34.5232 24.2358 36.9983C24.2375 36.9914 24.2409 36.9802 24.2409 36.9802C24.2409 36.9802 22.9921 36.3801 23.019 35.3094C23.0485 34.1309 23.019 31.3816 23.019 30.3721C23.019 28.6393 21.9494 27.4116 21.9494 27.4116C21.9494 27.4116 30.3392 27.5082 30.3392 18.331C30.3392 14.7903 28.5337 12.9472 28.5337 12.9472C28.5337 12.9472 29.4823 9.16681 28.2058 7.56328C26.7754 7.40466 24.2123 8.96507 23.1183 9.69442C23.1183 9.69442 21.3843 8.96507 18.5 8.96507C15.6157 8.96507 13.8817 9.69442 13.8817 9.69442C12.7877 8.96507 10.2255 7.40466 8.79423 7.56328C7.51773 9.16681 8.46627 12.9472 8.46627 12.9472C8.46627 12.9472 6.66084 14.7895 6.66084 18.331C6.66084 27.5082 15.0506 27.4116 15.0506 27.4116C15.0506 27.4116 14.2055 28.391 14.0205 29.8307C13.4352 30.0342 12.5733 30.2859 11.877 30.2859C10.0564 30.2859 8.67145 28.4712 8.16355 27.6323C7.6632 26.8047 6.63729 26.1098 5.68034 26.1098C5.0505 26.1098 4.74273 26.4331 4.74273 26.8021C4.74273 27.1711 5.62568 27.4289 6.20843 28.1134C7.437 29.5565 7.41514 32.8015 11.7929 32.8015C12.268 32.8015 13.2384 32.6817 13.9692 32.5808C13.965 33.6024 13.9633 34.6809 13.9793 35.3111C14.0053 36.3819 12.7574 36.9819 12.7574 36.9819C12.7574 36.9819 12.7608 36.9922 12.7625 37C5.35575 34.5232 0 27.3875 0 18.9664C0 8.49177 8.28296 0 18.5 0Z" />
          </svg>
        </a>
        <a title="Linkedin link" href="https://www.linkedin.com/in/thiago-olivier-b48365202/" target="_blank">
          <svg class="svg-icon" width="36" height="37" viewBox="0 0 36 37" fill="none">
            <path
              d="M31.7143 0H4.28571C1.92 0 0 1.97333 0 4.40476V32.5952C0 35.0267 1.92 37 4.28571 37H31.7143C34.08 37 36 35.0267 36 32.5952V4.40476C36 1.97333 34.08 0 31.7143 0ZM11.1429 14.0952V30.8333H6V14.0952H11.1429ZM6 9.22357C6 7.99024 7.02857 7.04762 8.57143 7.04762C10.1143 7.04762 11.0829 7.99024 11.1429 9.22357C11.1429 10.4569 10.1829 11.4524 8.57143 11.4524C7.02857 11.4524 6 10.4569 6 9.22357ZM30 30.8333H24.8571C24.8571 30.8333 24.8571 22.6757 24.8571 22.0238C24.8571 20.2619 24 18.5 21.8571 18.4648H21.7886C19.7143 18.4648 18.8571 20.2795 18.8571 22.0238C18.8571 22.8255 18.8571 30.8333 18.8571 30.8333H13.7143V14.0952H18.8571V16.3505C18.8571 16.3505 20.5114 14.0952 23.8371 14.0952C27.24 14.0952 30 16.5002 30 21.3719V30.8333Z" />
          </svg>
        </a>
      </div>

    </Container>

    <p class="py-[8rem] text-center">
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
