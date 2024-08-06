<script setup lang="ts">

import AccountCard from "~/components/accounts/AccountCard.vue";

const props = defineProps<{
  link: string;
}>();

// todo

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
  <AccountCard :link="link" class="bg-white border-2 border-[#D0D7DE]">
    <div :class="
      'w-[calc(100%+4px)] bg-[#1D9BF0] rounded-t-[calc(1rem-2px)] ' +
      'mt-[-2px] mx-[-2px] border-2 border-b-0 border-[#78C7FD] overflow-hidden ' +
      'flex items-center justify-end px-4 ' + (micro ? 'h-14' : 'h-16')
    ">
      <div class="h-10 flex gap-x-2 items-center">
        <font-awesome-icon icon="fa-brands fa-twitter" class="text-white text-4xl"/>
        <div>
          <p class="text-white text-lg font-black -mb-2">Twitter / X</p>
          <p class="text-[#89C8F2] text-sm font-bold">Happening now</p>
        </div>
        <p class="text-[#89C8F2]">|</p>
        <font-awesome-icon icon="fa-brands fa-x-twitter" class="text-white text-3xl"/>
      </div>
    </div>
    <div :class="'flex flex-col justify-between px-4 py-2 ' + (micro ? 'h-[calc(100%-3.5rem)]' : 'h-[calc(100%-4rem)]')">
      <div class="flex gap-x-4">
        <nuxt-img src="/yuua-icon-v4.png" alt="yuua's icon"
                  class="h-[4.5rem] rounded-full border-4 border-white -mt-8"/>
        <div>
          <p class="font-black text-xl text-[#0F1419] group-hover:underline">yuuaHP</p>
          <p class="text-[#536471]">@yuuadev</p>
          <p v-if="!mini" class="text-xs text-[#A2AEB7]">
            Beginner Java & Kotlin developer.
          </p>
          <p v-if="!micro"  class="text-xs text-[#A2AEB7]">
            Joined December 2019
          </p>
        </div>
      </div>
      <div class="flex justify-between items-end">
        <div class="text-[#536471] text-xs">
          <p>
            https://twitter.com/yuuadev
          </p>
          <p :class="mini ? 'hidden' : 'block'">
            https://x.com/yuuadev
          </p>
        </div>
        <p :class="'font-black text-[#1D9BF0] ' + (mini ? 'text-sm' : 'text-lg')">READ ONLY</p>
      </div>
    </div>
  </AccountCard>
</template>

<style scoped>
</style>