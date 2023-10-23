<template>
  <a class="group flex items-center p-2">
    <span class="left-bar"></span>
    <span class="side-text">
      <slot></slot>
    </span>
  </a>
</template>

<script setup>
</script>

<style>
 .left-bar {
  @apply w-8 rounded border-[1px] border-[#8C8A8A] mr-4 transition-all ease-in delay-[20ms] group-hover:w-16 group-hover:border-white;
 }
 
 .side-text {
  @apply text-[#8C8A8A] group-hover:text-white font-bold transition-all ease-in delay-[20ms];
 }

 .active .left-bar {
  @apply w-16 border-white
 }

 .active .side-text {
  @apply text-white
 }
</style>