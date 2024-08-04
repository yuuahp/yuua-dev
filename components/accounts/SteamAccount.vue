<script setup lang="ts">

</script>

<template>
<div class="group cursor-pointer relative aspect-[23/13] rounded-2xl border-2 border-[#3E5F8B] steam-gradient inside">
  <div class="absolute h-16 flex items-center gap-x-2 px-4 z-20">
    <font-awesome-icon icon="fa-brands fa-steam" class="text-white text-3xl" />
    <p class="text-white font-black text-2xl">
      STEAM
    </p>
  </div>
  <div class="absolute top-16 left-0 h-[100%-4rem] w-full flex justify-center items-center gap-x-4 z-20">
    <nuxt-img src="/yuua-icon-v4.png" alt="yuua's icon" class="h-[5rem] border-2 border-[#524858] picture-box-shadow"/>
    <div>
      <p class="text-3xl font-bold text-white mb-1 group-hover:underline">yuuaHP</p>
      <p class="text-[#9EB6D3] leading-tight">
        Level 6<br/>
        Sharp-Eyed Stockpiler
      </p>
    </div>
  </div>
  <font-awesome-icon icon="fa-brands fa-steam-symbol" class="absolute text-[#3D516A] text-[12rem] top-4 left-0 z-10"/>
</div>
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