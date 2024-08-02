<template>
  <div class="h-dvh w-dvw bg-white p-8 pt-16 font-inter">
    <div class="w-[52rem] aspect-[4/3] p-8 border-8 border-brown-primary bg-brown-background rounded-3xl shadow-2xl shadow-[#FFFCF3]/15 relative">
      <!-- reflection -->
      <div class="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden border-white/80 border-4 border-t-0 pointer-events-none z-20">
        <div class="absolute -left-64 top-16 w-[200%] h-48 origin-center -rotate-[30deg]">
          <div class="w-full h-3/5 bg-white/25"></div>
          <div class="w-full h-1/5"></div>
          <div class="w-full h-1/5 bg-white/25"></div>
        </div>
      </div>
      <div class="absolute top-0 left-0 w-full h-full p-8 pt-16 flex flex-col gap-y-8">
        <!-- intro -->
        <div class="flex gap-x-16">
          <div class="w-52 relative z-10 rounded-t-2xl photo-shadow-corner before:bg-brown-background">
            <p class="text-center bg-[#2f2833] text-[#f5ede9] rounded-t-2xl font-jb-mono pt-1">yuua-icon-v4.png</p>
            <nuxt-img class="w-full rounded-b-2xl" src="/yuua-icon-v4.png"/>
            <div class="invisible absolute w-[calc(100%-1rem)] h-2 -bottom-3 left-3 bg-[#2f2833] rounded-b-2xl"/>
            <div class="invisible absolute w-2 h-[calc(100%-1rem)] top-3 -right-3 bg-[#2f2833] rounded-r-2xl"/>
          </div>
          <div class="text-brown-primary pt-8">
            <h1 class="text-4xl font-black mb-4">
              Hello, I’m Yuua
              <font-awesome-icon icon="fad fa-solid fa-hand-wave" />
            </h1>
            <p class="pl-4">
              A hobby developer who LOVES <span class="font-black kotlin-gradient">Kotlin</span>.<br>
              I learn and develop by letting my curiosity lead the way.
            </p>
          </div>
        </div>

        <!-- card content -->
        <WorkCard class="h-52 w-80"/>
      </div>
      <!-- card holder -->
      <div class="w-full -mt-8 relative">
        <div class="absolute bg-[#AC9B83] h-[calc(4.75rem+8px)] w-28 -top-[calc(4rem+8px)] left-[calc(50%-3.5rem)] z-10">
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
import WorkCard from "~/components/WorkCard.vue";
</script>

<style>
.left-triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
}

.left-down-triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

.photo-shadow-corner {
  transform-style: preserve-3d;
}

.photo-shadow-corner::before {
  content: "";
  position: absolute;
  transform: translateZ(-1px);

  @apply -top-1 -left-1 h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)] rounded-[1.25rem];
}

.photo-shadow-corner::after {
  content: "";
  position: absolute;
  transform: translateZ(-2px);

  background-color: #2f2833;
  @apply -bottom-3 -right-3 h-full w-full rounded-tr-xl rounded-bl-xl rounded-br-[1.75rem] z-0;
}

.kotlin-gradient {
  background: linear-gradient(90deg, #e54857, #c811e2 50%, #7f52ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>