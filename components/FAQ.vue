<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="flex">
    <div class="w-16 bg-white rounded-lg rounded-tr-none flex items-center justify-center">
      <font-awesome-icon :icon="['fad', icon]" class="text-4xl text-brown-primary"/>
    </div>
    <div class="w-[calc(100%-4rem)]">
      <p class="relative bg-white px-4 text-brown-secondary rounded-r-lg inline-block mb-1">
        <span class="absolute left-0 -bottom-4 w-4 h-4 rounded-full bg-brown-background z-10"></span>
        <span class="absolute left-0 -bottom-4 w-4 h-4 rounded-full rounded-tl-lg bg-white"></span>
        <slot name="question">Who are you?</slot>
      </p>
      <p class="text-lg text-brown-primary pl-4">
        <slot name="answer">
          I'm <span class="font-bold">a university student</span> in Japan and a hobby developer who <span class="font-bold">absolutely loves Kotlin</span>.
        </slot>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>