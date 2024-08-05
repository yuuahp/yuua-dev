<script setup lang="ts">

import AccountCard from "~/components/accounts/AccountCard.vue";

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
<AccountCard link="" class="bg-white border-2 border-[#D0D7DE]">
  <div class="
    w-[calc(100%+4px)] h-4 bg-[#F0F0F0] rounded-t-[calc(1rem-2px)]
    mt-[-2px] mx-[-2px] border-2 border-b-0 border-[#D0D7DE] px-4
  ">
    <p class="text-[.6rem]">HTTPS://WWW.REDDIT.COM/USER/YUUAHP</p>
  </div>
  <div class="h-[2px] w-full bg-[#808080]"></div>
  <div class="h-12 w-full bg-[#CEE3F8] border-b-2 border-[#5F99CF] flex gap-x-2 justify-between pl-4 items-end">
    <div class="h-10 w-[7.5rem] px-2 bg-white -mb-[2px] border-2 border-b-0 border-[#5F99CF] flex items-center justify-center">
      <p class="font-bold text-2xl text-[#FF4500] text-nowrap">
        <font-awesome-icon icon="fa-brands fa-reddit" />
        reddit
      </p>
    </div>
    <div class="h-6 max-w-[calc(100%-8.5rem)] bg-[#EFF7FF] px-2 rounded-tl-xl flex items-center">
      <p :class="'text-[#336699] text-nowrap truncate ' + (mini ? 'text-xs' : 'text-sm')">the front page of the internet</p>
    </div>
  </div>
  <div class="h-[calc(100%-4rem)] w-full p-4">
    <div class="flex gap-x-4 items-center mb-4">
      <div class="flex flex-col items-center">
        <font-awesome-icon icon="fa-duotone fa-solid fa-up" class="text-[#FF4500]" />
        <p class="font-bold text-[#FF4500]">1</p>
        <font-awesome-icon icon="fa-duotone fa-solid fa-down" class="text-gray-400" />
      </div>
      <img src="/yuua-icon-v4.png" alt="yuua's icon" class="h-12">
      <div>
        <div class="flex gap-x-2">
          <p class="text-[#0000FF] group-hover:underline">YUUAHP</p>
          <p class="text-sm p-1 bg-[#646D73] rounded text-white leading-none h-fit">Read Only</p>
        </div>
        <p :class="'text-[#929292] ' + (mini ? 'text-xs' : 'text-sm')">
          submitted 4 years ago by
          <span class="font-bold text-[#336699] text-nowrap">u/yuuaHP</span>
        </p>
      </div>
    </div>
    <div v-if="!micro" :class="'border-[#808080] ' + (mini ? 'h-auto bg-transparent border-b' : 'h-8 bg-[#F4F4F4] border-none')">
      <p class="text-xs text-[#808080]">SIGN HERE</p>
    </div>
  </div>
</AccountCard>
</template>

<style scoped>
.inside {
  transition: all 250ms ease-out;
}
</style>