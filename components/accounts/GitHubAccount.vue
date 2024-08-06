<script setup lang="ts">
import AccountCard from "~/components/accounts/AccountCard.vue";

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
  <AccountCard :link="link" class="relative bg-white border-2 border-[#D0D7DE] z-0">
    <img src="~/assets/GitHubBranch.svg" alt="GitHub Branch" :class="'absolute h-full z-0 ' + (mini ? 'right-8' : 'right-[4.25rem]')">
    <div :class="'w-full px-4 ' + (micro ? 'py-1 h-6' : 'py-2 h-8')">
      <p :class="'font-bold text-[#636C76] ' + (micro ? 'text-xs' : 'text-sm')">
        <font-awesome-icon icon="fa-duotone fa-solid fa-arrow-left"/>
        SLIDE
      </p>
    </div>
    <div class="h-4 w-full bg-[#F6F8FA]"></div>
    <div class="h-1 w-full bg-[#E9EFF5]"></div>
    <div :class="'h-[calc(100%-3.25rem)] w-full z-10 flex flex-col justify-between ' + (micro ? 'px-4 py-2' : 'p-4')">
      <div :class="'w-full flex ' + (micro ? 'h-14' : 'h-16')">
        <div class="relative w-16 h-full">
          <nuxt-img src="/yuua-icon-v4.png" alt="yuua's icon"
                    class="absolute h-full top-0 left-0 rounded-full border-2 border-[#68606C]"/>
          <div class="
            absolute w-4 h-4 right-0 bottom-0
            rounded-full border-2 border-[#D0D7DE] bg-white
          ">
          </div>
        </div>
        <div class="w-[calc(100%-4rem)] h-full flex flex-col justify-center pl-6">
          <p class="text-sm text-[#636C76] font-bold -mb-1">Personal Account</p>
          <p class="text-lg text-[#1F2328] font-black group-hover:underline">yuuaHP</p>
        </div>
      </div>
      <div>
        <div class="h-8 w-full flex justify-between">
          <div class="h-full flex flex-col justify-end">
            <img src="~/assets/GitHubBarcode.svg" alt="GitHub Barcode" :class="'h-2/5 mb-[.1rem] ' + (mini ? 'hidden' : 'block')">
            <p class="text-[.6rem] text-[#1F2328] font-bold">https://github.com/yuuahp</p>
          </div>
          <img src="~/assets/GitHub.svg" alt="GitHub Logo" class="h-full z-10"/>
        </div>
      </div>
    </div>
  </AccountCard>
</template>

<style scoped>

</style>