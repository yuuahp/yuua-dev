<script setup lang="ts">

</script>

<template>
<div class="group cursor-pointer aspect-[5/3] bg-white rounded-2xl border-2 border-[#D0D7DE]">
  <div class="
    w-[calc(100%+4px)] h-16 bg-[#1D9BF0] rounded-t-[calc(1rem-2px)]
    mt-[-2px] mx-[-2px] border-2 border-b-0 border-[#78C7FD] overflow-hidden
    flex items-center justify-end px-4
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
  <div class="h-[calc(100%-4.5rem)] flex flex-col justify-between">
    <div class="px-4 pt-2 flex gap-x-4">
      <nuxt-img src="/yuua-icon-v4.png" alt="yuua's icon"
                class="h-[4.5rem] rounded-full border-4 border-white -mt-8"/>
      <div>
        <p class="font-black text-xl text-[#0F1419] group-hover:underline">yuuaHP</p>
        <p class="text-[#536471]">@yuuadev</p>
        <p class="text-xs text-[#A2AEB7]">
          Beginner Java & Kotlin developer.<br/>
          Joined December 2019
        </p>
      </div>
    </div>
    <div class="px-4 flex justify-between items-center">
      <div class="text-[#536471] text-xs">
        <p>
          https://twitter.com/yuuadev
        </p>
        <p>
          https://x.com/yuuadev
        </p>
      </div>
      <p class="text-lg font-black text-[#1D9BF0]">READ ONLY</p>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>