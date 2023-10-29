<template>
  <div class="badge -right-7 -top-8 w-max py-1 px-1 text-xs font-bold shadow-md">
    Text copied
  </div>
</template>

<script setup>

</script>

<style scoped>
.badge {
  display: inline-block;
  background-color: #8C8A8A;
  color: #1E1E1E;
  border: 1px solid #8C8A8A;
  border-radius: 10px;
  position: absolute;
}

.badge::before {
  content: "";
  position: absolute;
  top: 120%;
  right: 45%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent #8C8A8A;
  transform: rotate(90deg);
}
</style>