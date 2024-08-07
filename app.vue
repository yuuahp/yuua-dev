<template>
  <div class="relative h-dvh w-dvw bg-white pt-16 font-inter overflow-hidden">
    <div class="
      hidden md:block
      absolute md:left-[calc(50%-24.5rem+3rem)] lg:left-[calc(50%-25.5rem+3rem)] top-[calc(4.5rem+1.5rem)]
      w-full md:w-[48rem] lg:w-[52rem] md:aspect-[4/3] bg-[#F0EFED] rounded-[2rem]
    "></div>

    <div class="
      hidden md:block
      absolute md:left-[calc(50%-24rem+.5rem)] lg:left-[calc(50%-26rem+.5rem)] top-[4.5rem]
      w-full md:w-[48rem] lg:w-[52rem] md:aspect-[4/3] bg-brown-depth rounded-[1.75rem]
    "></div>

    <div class="mx-auto
          w-full md:w-[48rem] lg:w-[52rem]
          h-full md:h-auto
          md:aspect-[4/3]
          p-8 border-t-8 md:border-8 border-brown-primary bg-brown-background md:rounded-3xl relative">

      <div class="absolute -top-8 right-4 sm:right-8 h-8 px-4 bg-brown-primary text-brown-background rounded-t-lg select-none cursor-pointer font-bold pt-[.1rem]"
           v-if="locale == 'jp'" @click="setLocale('en')">
        <font-awesome-icon icon="fa-duotone fa-solid fa-rotate" class="mr-1" />
        English
      </div>
      <div class="absolute -top-8 right-4 sm:right-8 h-8 px-4 bg-brown-primary text-brown-background rounded-t-lg select-none cursor-pointer font-bold pt-[.1rem]"
           v-if="locale == 'en'" @click="setLocale('jp')">
        <font-awesome-icon icon="fa-duotone fa-solid fa-rotate" class="mr-1" />
        日本語
      </div>

      <!-- reflection -->
      <div
          class="absolute top-0 left-0 w-full h-full md:rounded-2xl overflow-hidden border-white/20 border-4 border-t-0 pointer-events-none z-50">
        <div class="absolute z-50 -left-64 top-16 w-[200%] h-48 origin-center -rotate-[30deg]">
          <div class="w-full h-3/5 bg-white/20"></div>
          <div class="w-full h-1/5"></div>
          <div class="w-full h-1/5 bg-white/20"></div>
        </div>
      </div>
      <div class="
        absolute top-0 left-0 w-full h-full
      ">
        <NuxtLayout>
          <NuxtLoadingIndicator/>
          <NuxtPage/>
          <div class="bg-brown-primary text-brown-background -mb-8 -mx-8 mt-16 p-8">
            <div class="flex justify-between items-center mb-4">
              <NuxtLink :to="localePath('/')" class="inline-block">
                <img src="~/assets/yuua-logo-dark.svg" alt="yuua's logo" class="h-10 sm:h-12"/>
              </NuxtLink>
              <Button icon="up-to-line" dark @click="scrollToTop">
                {{ $t('footer.top') }}
              </Button>
            </div>
            <div class="mb-2">
              <p class="font-bold">{{ $t('footer.socials') }}</p>
              <div class="text-brown-secondary flex flex-wrap gap-x-4 pl-4">
                <a href="https://github.com/yuuahp" class="hover:underline">
                  <font-awesome-icon icon="fa-brands fa-github"/>
                  GitHub
                </a>
                <a href="https://twitter.com/yuuadev" class="hover:underline">
                  <font-awesome-icon icon="fa-brands fa-twitter"/>
                  Twitter
                </a>
                <a href="https://www.reddit.com/user/yuuaHP" class="hover:underline">
                  <font-awesome-icon icon="fa-brands fa-reddit"/>
                  Reddit
                </a>
                <a href="https://steamcommunity.com/id/yuuahp" class="hover:underline">
                  <font-awesome-icon icon="fa-brands fa-steam"/>
                  Steam
                </a>
              </div>
            </div>
            <div class="mb-6">
              <p class="font-bold">{{ $t('footer.contact') }}</p>
              <div class="text-brown-secondary flex gap-x-2 pl-4">
                <p class="px-2 bg-brown-depth rounded-lg text-brown-background font-jb-mono">
                  {{ mail }}
                  <font-awesome-icon v-if="showCopySuccess"
                                     icon="fa-duotone fa-solid fa-check"
                                     class="text-brown-secondary cursor-pointer ml-1"/>
                  <font-awesome-icon v-if="!showCopySuccess"
                                     icon="fa-duotone fa-solid fa-copy"
                                     class="text-brown-secondary cursor-pointer ml-1"
                                     @click="copyMail"/>

                </p>
                <a :href="'mailto:' + mail" class="hover:underline">
                  {{ $t('footer.sendmail') }}
                  <font-awesome-icon icon="fa-duotone fa-solid fa-paper-plane"/>
                </a>
              </div>
            </div>

            <p class="text-brown-secondary text-right">
              <font-awesome-icon icon="fa-duotone fa-solid fa-cookie-bite"/>
              {{ $t('footer.cookie') }}
            </p>
          </div>
        </NuxtLayout>
      </div>
      <!-- card holder -->
      <div class="w-full -mt-8 relative z-[90] pointer-events-none">
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
import Button from "~/components/Button.vue";

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

useHead({
  titleTemplate: (title) => title ? `${title} | yuua.dev` : "yuua.dev",
})

useSeoMeta({
  ogTitle: "yuua.dev",
  description: "yuua's Personal Portfolio - Works, Socials and Contact",
  ogDescription: "yuua's Personal Portfolio - Works, Socials and Contact",
  ogImage: "/yuua-cover.png",
  twitterCard: "summary_large_image"
})

const mail = ref("inbox@yuua.dev")
const showCopySuccess = ref(false)

function copyMail() {
  navigator.clipboard.writeText(mail.value);
  showCopySuccess.value = true;
  setTimeout(() => showCopySuccess.value = false, 2000);
}

function scrollToTop() {
  document.querySelector('#main')?.scrollTo({top: 0, behavior: 'smooth'});
}

// TODO
const deltaX = ref(0);
const deltaY = ref(0);

function calculateDelta(e: MouseEvent) {
  const x = e.clientX;
  const y = e.clientY;
  const halfWidth = window.innerWidth / 2;
  const halfHeight = window.innerHeight / 2;

  // -1 to 1
  deltaX.value = (x - halfWidth) / halfWidth;
  deltaY.value = (y - halfHeight) / halfHeight;
}

onMounted(() => {
  window.addEventListener('mousemove', calculateDelta)
});
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
</style>