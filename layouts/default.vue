<script setup lang="ts">
function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({behavior: 'smooth'})
}
</script>

<template>
  <!--TODO: 404-->
  <div id="main" class="w-full h-full hide-scrollbar overflow-y-scroll md:rounded-2xl">
    <Header>
      <div class="flex gap-x-2 items-center">
        <p class="cursor-pointer text-base font-bold" @click="scrollTo('#works')">Works</p>
        <div class="bg-brown-secondary h-1 w-1 rounded-full"></div>
        <p class="cursor-pointer text-base font-bold" @click="scrollTo('#socials')">Socials</p>
        <div class="bg-brown-secondary h-1 w-1 rounded-full"></div>
        <p class="cursor-pointer text-base font-bold" @click="scrollTo('#faq')">FAQ</p>
      </div>
    </Header>
    <div class="p-8">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>