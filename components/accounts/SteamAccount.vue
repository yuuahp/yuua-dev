<script setup lang="ts">

import AccountCard from "~/components/accounts/AccountCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  link: string;
}>();

const mini = ref(false)
const micro = ref(false)

function onResize() {
  const inside = document.querySelector('.inside') as HTMLElement | null;

  if (inside) {
    mini.value = inside?.offsetWidth < 350
    micro.value = inside?.offsetWidth < 320
  }
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>

<template>
<AccountCard :link="link" class="relative border-2 border-[#3E5F8B] steam-gradient">
  <div class="absolute h-16 flex items-center gap-x-2 px-4 z-20">
    <font-awesome-icon icon="fa-brands fa-steam" class="text-white text-3xl" />
    <p class="text-white font-black text-2xl">
      STEAM
    </p>
  </div>
  <div class="absolute top-16 left-0 h-[100%-4rem] w-full flex justify-center items-center gap-x-4 z-20">
    <nuxt-img src="/yuua-icon-v4.png" alt="yuua's icon" :class="'border-2 border-[#524858] picture-box-shadow ' + (mini ? 'h-[4rem]' : 'h-[5rem]')"/>
    <div>
      <p :class="'font-bold text-white mb-1 group-hover:underline ' + (mini ? 'text-2xl' : 'text-3xl')">yuuaHP</p>
      <p :class="'text-[#9EB6D3] leading-tight ' + (mini ? 'text-sm' : 'text-base')">
        Level 6<br/>
        Sharp-Eyed Stockpiler
      </p>
    </div>
  </div>
  <font-awesome-icon icon="fa-brands fa-steam-symbol" :class="'absolute text-[#3D516A] top-4 left-0 z-10 ' + (mini ? 'text-[10rem]' : 'text-[12rem]')"/>
</AccountCard>
</template>

<style scoped>
.steam-gradient {
  background: linear-gradient(114deg, #232A33 14.06%, #263F5F 94.5%);
}

.picture-box-shadow {
  box-shadow: 0 6px 12px -1px rgba(0, 0, 0, 0.50);
}

.inside {
  transition: all 250ms ease-out;
}
</style>