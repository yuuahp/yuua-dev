<script setup lang="ts">
const props = defineProps<{
  link: string;
}>();
</script>

<template>
  <!-- mini version - sm - normal - md - mini version - lg - normal-->
  <div class="group cursor-pointer aspect-[23/13] rounded-2xl inside overflow-hidden">
    <a :href="link" target="_blank">
      <slot/>
    </a>
  </div>
</template>

<style scoped>
.inside {
  transition: all 250ms ease-out;
}
</style>