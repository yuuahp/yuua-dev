<script setup lang="ts">
const { locale, setLocale } = useI18n()

useHead({
  title: "About School Festival '22"
})

definePageMeta({
  layout: "gallery"
})
</script>

<template>
  <div class="pt-8 text-brown-primary">
    <img src="~/assets/Sunrise.svg" alt="Sunrise Logo" class="h-48 mx-auto mb-8"/>
    <h1 class="text-3xl sm:text-4xl font-black mb-4">{{ $t("sunrise.title") }}</h1>
    <p class="mb-4" v-if="locale == 'en'">
      The official website for the online school festival 2022
      <span class="text-brown-secondary">- project sunrise internally -</span>
      was my second work for school festivals.<br/>
      Different from the previous year,<br/>
      1) Used Nuxt.js and Tailwind CSS, and the overall quality was significantly improved.<br/>
      2) The website was designed to be more interactive and fun, to convey the atmosphere of the school festival.<br/>
      3) The prototype was created in Figma to achieve more consistent design.
    </p>
    <p class="mb-4" v-if="locale == 'jp'">
      2022 年オンライン文化祭の公式ウェブサイトは、文化祭における私の 2 作目のウェブサイトでした。<br/>
      前年とは違い、<br/>
      1) Nuxt.js と Tailwind CSS を使用し、全体的なクオリティが大幅に向上しました。<br/>
      2) インタラクティブで楽しめるように設計し、オンラインでも学園祭の雰囲気を感じられるように工夫しました。<br/>
      3) より一貫したデザインを実現するために、Figma でプロトタイプを作成しました。
    </p>
    <div class="grid grid-cols-3 w-full gap-1 sm:gap-2 rounded-xl overflow-hidden grid-rows-4 aspect-square">
      <div class="row-start-1 col-start-1 col-span-2 row-span-2 w-full h-full overflow-hidden">
        <img src="~/assets/sunrise/top-page.png" alt="School Festival '22" class="w-full h-full object-cover"/>
      </div>
      <div class="col-start-3 row-start-1 col-span-1 row-span-1 w-full h-full overflow-hidden">
        <img src="~/assets/sunrise/top-page-movies.png" alt="School Festival '22" class="w-full h-full object-cover"/>
      </div>
      <div class="col-start-3 row-start-2 col-span-1 row-span-1 w-full h-full overflow-hidden">
        <img src="~/assets/sunrise/top-page-watch.png" alt="School Festival '22" class="w-full h-full object-cover"/>
      </div>
      <div class="col-start-1 row-start-3 col-span-1 row-span-1 w-full h-full overflow-hidden">
        <img src="~/assets/sunrise/movies-page.png" alt="School Festival '22" class="w-full h-full object-cover"/>
      </div>
      <div class="col-start-1 row-start-4 col-span-1 row-span-1 w-full h-full overflow-hidden">
        <img src="~/assets/sunrise/watch-page.png" alt="School Festival '22" class="w-full h-full object-cover"/>
      </div>
      <div class="col-start-2 row-start-3 col-span-2 row-span-2 w-full h-full overflow-hidden">
        <img src="~/assets/sunrise/logo-prototype.png" alt="School Festival '22" class="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>