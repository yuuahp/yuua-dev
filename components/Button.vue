<script setup lang="ts">
const props = defineProps<{
  icon: string;
  dark?: boolean;
}>();
</script>

<template>
  <div :data-dark="dark" class="
    px-4 py-1
    font-bold cursor-pointer inline-block rounded-xl select-none
    bg-white h-fit
    data-[dark=true]:bg-brown-depth data-[dark=true]:text-brown-background
    hover:bg-brown-primary hover:text-brown-background
    data-[dark=true]:hover:bg-brown-background data-[dark=true]:hover:text-brown-primary
    transition-all">
    <font-awesome-icon :icon="['fad', icon]" class="mr-1" />
    <slot/>
  </div>
</template>

<style scoped>

</style>