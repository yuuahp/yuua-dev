<script setup lang="ts">
const props = defineProps<{
  link: string;
}>();

function openLink() {
  window.open(props.link, '_blank')
}
</script>

<template>
  <div class="group cursor-pointer aspect-[23/13] rounded-2xl inside"
       @click="openLink">
    <slot/>
  </div>
</template>

<style scoped>
.inside {
  transition: all 250ms ease-out;
}
</style>