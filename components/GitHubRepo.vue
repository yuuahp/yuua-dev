<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  org: string;
  repo: string;
  description: string;
  language: string;
  language_color: string;
  private?: boolean;
}>();
</script>

<template>
  <div class="bg-white border border-[#d0d7de] rounded-lg p-4 font-inter">
    <p class="group mb-1 w-full">
      <font-awesome-icon v-if="!private" icon="fa-duotone fa-solid fa-book-bookmark" class="text-[#636c76] mr-2"/>
      <font-awesome-icon v-else icon="fa-duotone fa-solid fa-lock-keyhole" class="text-[#636c76] mr-2"/>
      <span :data-private="private" class="text-[#636c76] data-[private=false]:text-blue-500 data-[private=false]:group-hover:underline">{{ org }}/</span>
      <span :data-private="private" class="text-[#636c76] data-[private=false]:text-blue-500 data-[private=false]:group-hover:underline font-bold mr-2">{{ repo }}</span>
      <span class="text-xs font-bold text-[#636c76] py-1 px-2 border border-[#d0d7de] rounded-full">{{ private ? "Private" : "Public" }}</span>
    </p>
    <p class="text-[#636c76] text-xs mb-1">{{ description }}</p>
    <div class="flex items-center">
      <div class="h-3 w-3 rounded-full inline-block mr-1" :style="{backgroundColor: language_color}"/>
      <span class="text-[#636c76] text-xs">{{ language }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>