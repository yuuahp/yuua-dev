<script setup lang="ts">

</script>

<template>
  <div id="main" class="w-full h-full hide-scrollbar overflow-y-scroll md:rounded-2xl">
    <Header>
      <div class="flex gap-x-2 items-center">
        <NuxtLink to="/" class="cursor-pointer text-base font-bold">
          Return to Home
        </NuxtLink>
      </div>
    </Header>
    <div class="p-8">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>