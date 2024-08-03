<script setup lang="ts">

</script>

<template>
<div class="group cursor-pointer relative aspect-[5/3] bg-white rounded-2xl border-2 border-[#D0D7DE]">
  <img src="~/assets/GitHubBranch.svg" alt="GitHub Branch" class="absolute right-[4.25rem] h-full z-0">
  <div class="h-8 w-full py-2 px-4">
    <p class="font-bold text-[#636C76] text-sm">
      <font-awesome-icon icon="fa-duotone fa-solid fa-arrow-left" />
      SLIDE
    </p>
  </div>
  <div class="h-4 w-full bg-[#F6F8FA]"></div>
  <div class="h-1 w-full bg-[#E9EFF5]"></div>
  <div class="h-[calc(100%-3.25rem)] w-full p-4">
    <div class="h-16 w-full flex">
      <div class="relative w-16 h-full">
        <nuxt-img src="/yuua-icon-v4.png" alt="yuua's icon" class="absolute w-full h-full top-0 left-0 rounded-full border-2 border-[#68606C]"/>
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
    <div class="h-[calc(100%-4rem)]">
      <div class="h-[calc(100%-2rem)]"></div>
      <div class="h-8 w-full flex justify-between">
        <div class="h-full flex flex-col justify-center">
          <img src="~/assets/GitHubBarcode.svg" alt="GitHub Barcode" class="h-2/5 mb-[.1rem]">
          <p class="text-[.6rem] text-[#1F2328] font-bold">https://github.com/yuuahp</p>
        </div>
        <img src="~/assets/GitHub.svg" alt="GitHub Logo" class="h-full z-10"/>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>