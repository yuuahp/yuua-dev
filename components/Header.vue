<script setup lang="ts">

</script>

<template>
  <div class="group w-full h-8 hover:h-12 glass sticky top-0 z-50 border-b border-brown-background text-brown-secondary hover:text-brown-primary flex items-center justify-between px-3 hover:px-4 transition-all">
    <a href="/" class="hidden group-hover:inline-block">
      <img src="~/assets/yuua-logo-light.svg" alt="yuua's logo" class="h-6"/>
    </a>
    <a href="/" class="inline-block group-hover:hidden h-2 w-16 bg-brown-secondary rounded-full"></a>
    <slot/>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(245, 245, 245, 0.9);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.glass:hover {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
</style>