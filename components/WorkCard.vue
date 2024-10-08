<script setup lang="ts">
const localePath = useLocalePath()

const props = defineProps<{
  icon: string;
  title: string;
  details: string;
  no_right_truncate?: boolean;
  external_link?: string;
  internal_link?: string;
}>();

function openLink() {
  if (props.external_link) {
    window.open(props.external_link, "_blank");
  }
}
</script>

<template>
  <NuxtLink :to="localePath(internal_link || '/')">
    <div class="
      bg-white border-8 border-brown-primary rounded-2xl p-4 relative cursor-pointer group transition-all
      hover:border-[10px] flat-shadow w-full h-48 inline-block select-none
    " @click="openLink">
      <div v-if="external_link != null" class="absolute w-8 aspect-square rounded-lg bg-white z-40 right-2 top-2 flex justify-center items-center">
        <font-awesome-icon icon="fa-duotone fa-solid fa-up-right-from-square" class="text-xl text-brown-primary" />
      </div>
      <div class="absolute w-[calc(100%-2rem)] bottom-4 z-40">
        <h1 class="text-2xl font-black text-brown-primary text-outline text-nowrap truncate">
          <font-awesome-icon :icon="'fad fa-' + icon" />
          {{ title }}
        </h1>
        <p class="font-medium text-brown-secondary text-outline truncate">{{ details }}</p>
      </div>
      <div class="
        absolute -bottom-1 -right-1 z-30
        h-12 w-12 group-hover:h-14 group-hover:w-14
        right-triangle bg-brown-primary
        transition-all
      "></div>
      <div class="absolute w-full h-4/5 bottom-0 left-0 z-20">
        <div class="w-full h-full gradient rounded-b-2xl"/>
      </div>
      <div :data-truncate="!no_right_truncate"
            class="
              !font-noto-serif text-nowrap w-full h-full overflow-hidden
              truncate-right
              relative
            ">
        <slot/>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.gradient {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.70) 25.82%, #FFF 47.79%, #FFF 100%);
}

.right-triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.truncate-right[data-truncate=true]:before {
  content: "";
  position: absolute;
  right: 0;
  width: 1rem;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #FFFFFF);
}

.flat-shadow {
  margin-bottom: .75rem;
  box-shadow: 0 .75rem 0 0 #1E1D1B; /* bg-brown-depth */
}

.flat-shadow:hover {
  margin-top: .25rem;
  margin-bottom: .5rem;
  box-shadow: 0 .5rem 0 0 #1E1D1B; /* bg-brown-depth */
}

.flat-shadow:active {
  margin-top: .55rem;
  margin-bottom: .2rem;
  box-shadow: 0 .2rem 0 0 #1E1D1B; /* bg-brown-depth */
}

</style>