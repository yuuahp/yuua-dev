<script setup lang="ts">
const {locale, setLocale} = useI18n()

useHead({
  title: 'About UniDB',
})

definePageMeta({
  layout: 'gallery',
})
</script>

<template>
  <div class="pt-8 text-brown-primary">
    <img src="~/assets/UniDB.svg" alt="UniDB Logo" class="h-36 mx-auto mb-8"/>
    <h1 class="text-3xl sm:text-4xl font-black mb-4">UniDB</h1>
    <p class="mb-4" v-if="locale=='en'">
      UniDB is a website for students who seek information about university open-campus events.<br/>
      Before UniDB, information were scattered across multiple platforms such as Google Classroom, Classi, and bulletin
      boards.<br/>
      To solve this problem, I created UniDB as one-stop solution where teachers and students can easily publish and
      find details about open-campus events.
    </p>
    <p class="mb-4" v-if="locale=='jp'">
      UniDB は、大学のオープンキャンパス情報を探している学生向けのウェブサイトです。<br/>
      以前は Google Classroom や Classi、掲示板など、情報が複数箇所に分散していました。<br/>
      この問題を解決するために、私は UniDB を作成しました。
      教師と学生が簡単にオープンキャンパスの詳細を投稿・検索できるワンストップソリューションです。
    </p>
    <!--TODO: photo viewer-->
    <div class="grid grid-cols-3 w-full gap-1 sm:gap-2 rounded-xl overflow-hidden grid-rows-3 aspect-[4/3]">
      <div class="row-start-1 col-start-1 col-span-2 row-span-3 w-full h-full overflow-hidden">
        <img src="~/assets/unidb/home.png" alt="UniDB home screen" class="w-full h-full object-cover"/>
      </div>
      <div class="col-start-3 row-start-1 col-span-1 row-span-1 w-full h-full overflow-hidden">
        <img src="~/assets/unidb/editor.png" alt="UniDB editor" class="w-full h-full object-cover"/>
      </div>
      <div class="col-start-3 row-start-2 col-span-1 row-span-1 w-full h-full overflow-hidden">
        <img src="~/assets/unidb/details.png" alt="UniDB details of post" class="w-full h-full object-cover"/>
      </div>
      <div class="col-start-3 row-start-3 col-span-1 row-span-1 w-full h-full overflow-hidden">
        <img src="~/assets/unidb/follows.png" alt="UniDB following universities" class="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>