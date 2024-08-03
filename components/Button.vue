<script setup lang="ts">
const props = defineProps<{
  icon: string;
  bordered?: boolean;
}>();
</script>

<template>
  <div :data-bordered="bordered" class="
    px-4 py-1
    data-[bordered=false]:px-[calc(1rem+2px)] data-[bordered=false]:py-[calc(0.25rem+2px)]
    data-[bordered=true]:border-2 data-[bordered=true]:border-brown-primary
    font-bold cursor-pointer inline-block rounded-xl select-none
    bg-white
    hover:bg-brown-primary hover:text-brown-background transition-all">
    <font-awesome-icon :icon="'fad fa-solid fa-' + icon" class="mr-1"/>
    <slot/>
  </div>
</template>

<style scoped>

</style>