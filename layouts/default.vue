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
        <p class="cursor-pointer font-bold hidden sm:inline-block" @click="scrollTo('#works')">
          {{ $t('home.sections.works.short') }}
        </p>
        <font-awesome-icon icon="fa-duotone fa-solid fa-pen-ruler" class="cursor-pointer inline-block sm:!hidden" @click="scrollTo('#works')"/>
        <div class="bg-brown-secondary h-1 w-1 rounded-full"></div>
        <p class="cursor-pointer font-bold hidden sm:inline-block" @click="scrollTo('#socials')">
          {{ $t('home.sections.socials.title') }}
        </p>
        <font-awesome-icon icon="fa-duotone fa-solid fa-thumbs-up" class="cursor-pointer inline-block sm:!hidden" @click="scrollTo('#socials')"/>
        <div class="bg-brown-secondary h-1 w-1 rounded-full"></div>
        <p class="cursor-pointer font-bold hidden sm:inline-block" @click="scrollTo('#faq')">FAQ</p>
        <font-awesome-icon icon="fa-duotone fa-solid fa-messages-question" class="cursor-pointer inline-block sm:!hidden" @click="scrollTo('#faq')"/>
      </div>
    </Header>
    <div class="p-8">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>