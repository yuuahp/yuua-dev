<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const localePath = useLocalePath()
</script>

<template>
  <div id="main" class="w-full h-full hide-scrollbar overflow-y-scroll md:rounded-2xl">
    <Header>
      <div class="flex gap-x-2 items-center">
        <NuxtLink :to="localePath('/')" class="cursor-pointer text-base font-bold">
          <font-awesome-icon icon="fa-duotone fa-solid fa-person-to-door" flip="horizontal" class="mr-1"/>
          <p class="hidden sm:inline-block">
            {{ $t('return-home') }}
          </p>
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