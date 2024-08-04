<template>
  <div class="relative h-dvh w-dvw bg-white pt-16 font-inter">
    <div
        class="absolute left-[calc(50%-25.5rem+3rem)] top-[calc(4.5rem+1.5rem)] w-[52rem] aspect-[4/3] bg-[#F0EFED] rounded-[2rem]"></div>
    <div
        class="absolute left-[calc(50%-25.5rem)] top-[4.5rem] w-[52rem] aspect-[4/3] bg-brown-depth rounded-[1.75rem]"></div>

    <div
        class="mx-auto w-[52rem] aspect-[4/3] p-8 border-8 border-brown-primary bg-brown-background rounded-3xl relative">
      <!-- reflection -->
      <div
          class="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden border-white/20 border-4 border-t-0 pointer-events-none z-50">
        <div class="absolute z-50 -left-64 top-16 w-[200%] h-48 origin-center -rotate-[30deg]">
          <div class="w-full h-3/5 bg-white/20"></div>
          <div class="w-full h-1/5"></div>
          <div class="w-full h-1/5 bg-white/20"></div>
        </div>
      </div>
      <div id="main" class="
        absolute top-0 left-0 w-full h-full p-8
        hide-scrollbar overflow-y-scroll rounded-2xl
      ">
        <NuxtPage :transition="{
          name: 'page',
          mode: 'out-in'
        }"/>
      </div>
      <!-- card holder -->
      <div class="w-full -mt-8 relative z-[90]">
        <div
            class="absolute bg-[#AC9B83] h-[calc(4.75rem+8px)] w-28 -top-[calc(4rem+8px)] left-[calc(50%-3.5rem)] z-10">
          <div class="w-full h-[90%] bg-[#BEB09B]">
            <div class="w-full h-[80%] bg-[#CFC3B2]">
              <div class="w-full h-[60%] bg-[#DAD1C4]"></div>
            </div>
          </div>
        </div>
        <div class="absolute left-triangle bg-[#917956] w-2 h-16 -top-[calc(4rem+8px)] left-[calc(50%+3.5rem)]"></div>
        <div class="mx-auto w-52 h-8 bg-brown-primary rounded-b-2xl pt-2">
          <div class="bg-white h-2 w-32 mx-auto rounded-full overflow-hidden relative">
            <div class="absolute left-down-triangle bg-[#917956] w-2 h-1 top-0 right-0"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.left-triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
}

.left-down-triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>