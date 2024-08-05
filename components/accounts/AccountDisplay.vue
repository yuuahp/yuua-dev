<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import GitHubAccount from "~/components/accounts/GitHubAccount.vue";

const props = defineProps<{
  link: string;
}>();

function openLink() {
  window.open(props.link, '_blank')
}
</script>

<template>
  <div class="card3d group/card">
    <slot name="card" :openLink="openLink">
      <GitHubAccount class="w-full mb-2" @click="openLink"/>
    </slot>
    <p class="
      group-hover/card:ml-4 px-4 flex gap-x-2 items-center rounded-lg group-hover/card:bg-brown-primary
      group/label cursor-pointer
      w-fit max-w-[calc(100%-1rem)] transition-all" @click="openLink">
      <span class="font-bold text-brown-primary group-hover/card:text-brown-background text-nowrap">
        <slot name="name">
          <font-awesome-icon icon="fa-brands fa-github"/>
          GitHub
        </slot>
      </span>
      <span class="text-brown-secondary group-hover/label:underline truncate">
        <slot name="catch_copy">
          Let's build from here
        </slot>
      </span>
      <font-awesome-icon icon="fa-duotone fa-solid fa-up-right-from-square"
                         class="text-brown-primary group-hover/card:text-brown-background"/>
    </p>
  </div>
</template>

<style scoped>
.card3d {
  transform: scale(1);
  perspective: 400px;
}

.card3d:hover {
  z-index: 10;
  transform: scale(1.1);
}

.card3d:active {
  z-index: 10;
  transform: scale(1.05);
}

.card3d {
  transition: all 250ms ease-out;
}
</style>