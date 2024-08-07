<script setup lang="ts">
import WorkCard from "~/components/WorkCard.vue";
import Button from "~/components/Button.vue";
import RedditAccount from "~/components/accounts/RedditAccount.vue";
import SteamAccount from "~/components/accounts/SteamAccount.vue";
import TwitterAccount from "~/components/accounts/TwitterAccount.vue";
import AccountDisplay from "~/components/accounts/AccountDisplay.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import SectionTitle from "~/components/home/SectionTitle.vue";


const {locale} = useI18n()
const mail = ref("inbox@yuua.dev")

useHead({
  title: "Home"
})

onMounted(() => {
  document.querySelectorAll('.card3d').forEach((card) => {
    let inside = card.querySelector('.inside') as HTMLElement | null;

    if (!inside) return;

    initialWidth = inside.offsetWidth;
    initialHeight = inside.offsetHeight;

    card.addEventListener('mousemove', (ev) => {
      Card3D(card, ev as MouseEvent);
    });

    card.addEventListener('mouseleave', (ev) => {
      let inside = card.querySelector('.inside') as HTMLElement | null;

      if (!inside) return;

      inside.style.transform = 'rotateX(0deg) rotateY(0deg)';
      inside.style.filter = 'brightness(1)';
    });
  });
})

// forked from https://codepen.io/nelsonr/pen/WNQaZPb

function map(value: number, originalMin: number, originalMax: number, min: number, max: number) {
  return min + ((value - originalMin) * (max - min)) / (originalMax - originalMin);
}

let initialWidth = 0;
let initialHeight = 0;

function Card3D(card: Element, ev: MouseEvent) {
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, 0, initialWidth, -5, 5);
  let rotateX = map(mouseY, 0, initialHeight, 10, -10);
  let brightness = map(mouseY, 0, initialHeight, 1.1, 0.9);

  let inside = card.querySelector('.inside') as HTMLElement | null;

  if (!inside) return;

  inside.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  inside.style.filter = `brightness(${brightness})`;
}
</script>

<template>
  <div class="relative flex flex-col gap-y-16">
    <div class="h-12 md:h-[5rem] -mb-16"></div>
    <!-- intro -->
    <div ref="intro" class="flex flex-col sm:flex-row items-center sm:items-start gap-x-16 gap-y-4 mb-8">
      <div class="w-52 h-fit relative z-10 rounded-t-2xl photo-shadow-corner before:bg-brown-background">
        <p class="text-center bg-[#2f2833] text-[#f5ede9] rounded-t-2xl font-jb-mono pt-1">yuua-icon-v4.png</p>
        <nuxt-img class="w-full rounded-b-2xl" src="/yuua-icon-v4.png"/>
        <div class="invisible absolute w-[calc(100%-1rem)] h-2 -bottom-3 left-3 bg-[#2f2833] rounded-b-2xl"/>
        <div class="invisible absolute w-2 h-[calc(100%-1rem)] top-3 -right-3 bg-[#2f2833] rounded-r-2xl"/>
      </div>
      <div class="text-brown-primary pt-4">
        <h1 :class="'font-black mb-4 text-center sm:text-start ' + ((locale == 'jp') ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl')">
          {{ $t("home.title") }}
          <font-awesome-icon icon="fad fa-solid fa-hand-wave"/>
        </h1>
        <p class="sm:pl-4 mb-4">
          <span v-if="locale=='en'">
            A hobby developer who LOVES <span class="font-black kotlin-gradient">Kotlin</span>.<br>
          </span>
          <span v-if="locale=='jp'">
            趣味で開発者をしています。<span class="font-black kotlin-gradient">Kotlin</span> が大好きです。<br>
          </span>
          {{ $t("home.intro.line2") }}
        </p>
        <div class="sm:pl-4">
          <p class="mb-2">{{ $t("home.intro.line3") }}</p>
          <div class="flex gap-2 mb-2 flex-wrap">
            <Button icon="pen-ruler" @click="$refs.works.scrollIntoView({ behavior: 'smooth'})">
              {{ $t("home.sections.works.title") }}
            </Button>

            <Button icon="thumbs-up" @click="$refs.socials.scrollIntoView({ behavior: 'smooth'})">
              {{ $t("home.sections.socials.title") }}
            </Button>

            <Button icon="messages-question" @click="$refs.faq.scrollIntoView({ behavior: 'smooth'})">
              FAQ
            </Button>
          </div>
          <p class="mb-2">{{ $t("home.intro.line4") }}</p>
        </div>
      </div>
    </div>
    <!--works-->
    <div id="works" ref="works" class="scroll-mt-16">
      <SectionTitle>
        <template #title>
          {{ $t("home.sections.works.title") }}
          <font-awesome-icon icon="fad fa-pen-ruler"/>
        </template>
        <template #description>
          {{ $t("home.sections.works.description") }}
        </template>
      </SectionTitle>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
        <WorkCard class="w-full max-w-[30rem]"
                  icon="volume-high"
                  title="VCSpeaker.kt"
                  details="Text channels, now with voice"
                  external_link="https://github.com/jaoafa/VCSpeaker.kt"
                  no_right_truncate>
          <GitHubRepo class="h-full w-full"
                      org="jaoafa" repo="VCSpeaker.kt"
                      description="🔊 Text channel, now with voice"
                      language="Kotlin" language_color="#a97bff"/>
        </WorkCard>
        <WorkCard class="w-full max-w-[30rem]"
                  icon="dice-d20"
                  title="Fortune"
                  details="Play TRPG without leaving Discord"
                  external_link="https://github.com/JourneyHQ/fortune"
                  no_right_truncate>
          <GitHubRepo class="h-full w-full"
                      org="JourneyHQ" repo="fortune"
                      description="🎲 Play TRPG without leaving Discord"
                      language="Kotlin" language_color="#a97bff"/>
        </WorkCard>
        <WorkCard class="w-full max-w-[30rem]"
                  icon="hexagon-image"
                  title="Dynmap Processor"
                  details="Dynmap image annotator CLI"
                  external_link="https://github.com/JourneyHQ/dynmap-processor"
                  no_right_truncate>
          <GitHubRepo class="h-full w-full"
                      org="JourneyHQ" repo="dynmap-processor"
                      description="🧭 Automated edit & annotation for Dynmap images"
                      language="Kotlin" language_color="#a97bff"/>
        </WorkCard>
        <WorkCard class="w-full max-w-[30rem]"
                  icon="school"
                  :title="$t('sunrise.title')"
                  :details="$t('sunrise.description')"
                  internal_link="/school-festival-22"
                  no_right_truncate>
          <div class="w-full h-full relative">
            <GitHubRepo class="w-full h-full"
                        org="yuuahp" repo="sunrise"
                        description="☀️ Online Culture Festival 2022"
                        language="Vue" language_color="#41b883" private/>
            <div class="absolute w-3/5 h-full top-0 right-0 trapezoid bg-white pl-14 z-10">
              <img src="~/assets/Sunrise.svg" alt="Sunrise Logo">
            </div>
            <div class="absolute w-3/5 h-full top-0 right-[1px] trapezoid bg-[#d0d7de] pl-14 pt-4">
            </div>
          </div>
        </WorkCard>
        <WorkCard class="w-full max-w-[30rem]"
                  icon="graduation-cap"
                  title="UniDB"
                  :details="$t('unidb.description')"
                  internal_link="/unidb"
                  no_right_truncate>
          <div class="w-full h-full relative">
            <GitHubRepo class="absolute top-0 left-0 w-full h-full"
                        org="yuuahp" repo="unidb"
                        description="🏫 Unified source for open-campus information"
                        language="Vue" language_color="#41b883" private/>
            <div class="absolute w-3/5 h-full top-0 right-0 trapezoid bg-white pl-14 pt-5 z-10">
              <img src="~/assets/UniDB.svg" alt="UniDB Logo">
            </div>
            <div class="absolute w-3/5 h-full top-0 right-[1px] trapezoid bg-[#d0d7de] pl-14 pt-4">
            </div>
          </div>
        </WorkCard>
        <WorkCard class="w-full max-w-[30rem]"
                  icon="language"
                  title="終わりの詩"
                  :details="$t('the-end-poem-jp.description')"
                  internal_link="/the-end-poem-jp">
          そしてゲームは終わり、プレイヤーは夢から目覚めた。<br/>
          そしてプレイヤーは新しい夢を見た。<br/>
          もう一度夢を見た。<br/>
          もっと良い夢を見た。
        </WorkCard>
      </div>
    </div>
    <!--Socials-->
    <div id="socials" ref="socials" class="scroll-mt-16">
      <SectionTitle>
        <template #title>
          {{ $t("home.sections.socials.title") }}
          <font-awesome-icon icon="fad fa-thumbs-up"/>
        </template>
        <template #description>
          {{ $t("home.sections.socials.description") }}
        </template>
      </SectionTitle>
      <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-x-4 gap-y-6 mb-6">
        <AccountDisplay class="w-full max-w-[24rem]" link="https://github.com/yuuahp">
          <!--GitHub by default-->
        </AccountDisplay>
        <AccountDisplay class="w-full max-w-[24rem]" link="https://twitter.com/yuuadev">
          <template #card="slot">
            <TwitterAccount class="inside w-full mb-2" :link="slot.link"/>
          </template>
          <template #name>
            <font-awesome-icon icon="fa-brands fa-twitter"/>
            Twitter
            <font-awesome-icon icon="fa-brands fa-x-twitter"/>
          </template>
          <template #catch_copy>
            Happening now
          </template>
        </AccountDisplay>
        <AccountDisplay class="w-full max-w-[24rem]" link="https://www.reddit.com/user/yuuaHP">
          <template #card="slot">
            <RedditAccount class="inside w-full mb-2" :link="slot.link"/>
          </template>
          <template #name>
            <font-awesome-icon icon="fa-brands fa-reddit"/>
            Reddit
          </template>
          <template #catch_copy>
            The front page of the internet
          </template>
        </AccountDisplay>
        <AccountDisplay class="w-full max-w-[24rem]" link="https://steamcommunity.com/id/yuuahp">
          <template #card="slot">
            <SteamAccount class="inside w-full mb-2" :link="slot.link"/>
          </template>
          <template #name>
            <font-awesome-icon icon="fa-brands fa-steam"/>
            Steam
          </template>
          <template #catch_copy>
            Welcome to Steam
          </template>
        </AccountDisplay>
      </div>
    </div>
    <!--FAQ-->
    <div id="faq" ref="faq" class="scroll-mt-16">
      <SectionTitle>
        <template #title v-if="locale=='en'">
          <span class="text-lg text-brown-secondary">(not so)</span> Frequently Asked Questions
          <font-awesome-icon icon="fad fa-messages-question"/>
        </template>
        <template #description v-if="locale=='en'">
          Collection of questions people often
          <span class="text-[.6rem] align-text-top">[citation needed]</span>
          ask me
        </template>
        <template #title v-if="locale=='jp'">
          たまによくある質問
          <font-awesome-icon icon="fad fa-messages-question"/>
        </template>
        <template #description v-if="locale=='jp'">
          よく
          <span class="text-[.6rem] align-text-top">[要出典]</span>
          聞かれる質問集です。
        </template>
      </SectionTitle>
      <div class="flex flex-col gap-y-6">
        <FAQ icon="person-circle-question">
          <template #question>
            {{ $t("home.faq.who") }}
          </template>
          <template #answer v-if="locale == 'en'">
            I'm <span class="font-bold">a university student</span> in Japan and a hobby developer who
            <span class="font-bold">absolutely loves Kotlin</span>.
          </template>
          <template #answer v-if="locale == 'jp'">
            趣味で開発者をしている<span class="font-bold">大学生</span>です。
            特に <span class="font-bold">Kotlin</span> が好きです。
          </template>
        </FAQ>
        <FAQ icon="square-code">
          <template #question>
            {{ $t("home.faq.languages") }}
          </template>
          <template #answer v-if="locale == 'en'">
            I love working with <span class="font-bold">Kotlin</span>, Java, Typescript and JavaScript.
          </template>
          <template #answer v-if="locale == 'jp'">
            <span class="font-bold">Kotlin</span>, Java, Typescript と JavaScript を好んで使っています。特に Kotlin。
          </template>
        </FAQ>
        <FAQ icon="boxes-stacked">
          <template #question>
            {{ $t("home.faq.stacks") }}
          </template>
          <template #answer v-if="locale == 'en'">
            I usually work with <span class="font-bold">Nuxt.js</span>, <span class="font-bold">Tailwind</span>,
            <span class="font-bold">Ktor</span> and Firebase.
          </template>
          <template #answer v-if="locale == 'jp'">
            <span class="font-bold">Nuxt.js</span>, <span class="font-bold">Tailwind</span>,
            <span class="font-bold">Ktor</span> や Firebase をよく使います。
          </template>
        </FAQ>
        <FAQ icon="server">
          <template #question>
            {{ $t("home.faq.android") }}
          </template>
          <template #answer v-if="locale == 'en'">
            Nope, I'm a <span class="font-bold">server-side</span> Kotlin developer.<br/>
            I'd love to try Android development, but I don't have any Android devices...
          </template>
          <template #answer v-if="locale == 'jp'">
            いえ、<span class="font-bold">サーバーサイド</span>の Kotlin をやっています。<br/>
            Android もやってみたいのですが、Android 端末を持っていないので...
          </template>
        </FAQ>
        <FAQ icon="envelope-open-text">
          <template #question>
            {{ $t("home.faq.email") }}
          </template>
          <template #answer v-if="locale == 'en'">
            You can reach me at
            <a class="font-bold underline text-pink-400" :href="'mailto:' + mail">{{ mail }}</a>.
            Feel free to drop me a message anytime!
          </template>
          <template #answer v-if="locale == 'jp'">
            <a class="font-bold underline text-pink-400" :href="'mailto:' + mail">{{ mail }}</a>
            までご連絡ください。お気軽にどうぞ！
          </template>
        </FAQ>
        <FAQ icon="text-size">
          <template #question>
            {{ $t("home.faq.name") }}
          </template>
          <template #answer v-if="locale == 'en'">
            It's intentional. I think <span class="font-bold">"yuua"</span> looks more balanced than <span
              class="font-bold">"Yuua"</span>. I always use <span class="font-bold">"yuua"</span> (or <span
              class="font-bold">"yuuaHP"</span>) as my handle name online.
          </template>
          <template #answer v-if="locale == 'jp'">
            意図的です。<span class="font-bold">"yuua"</span> の方が <span class="font-bold">"Yuua"</span>
            よりバランスよく見えませんか？
            そのような理由で 、ハンドルネームには <span class="font-bold">"yuua"</span> (または <span class="font-bold">"yuuaHP"</span>)
            を使っています。
          </template>
        </FAQ>
        <FAQ icon="question">
          <template #question>
            {{ $t("home.faq.hp") }}
          </template>
          <template #answer v-if="locale == 'en'">
            Honestly, I don't know! It's just a suffix from my first-ever email address.
          </template>
          <template #answer v-if="locale == 'jp'">
            正直私もよくわかっていません。私の初めてのメールアドレスが yuuahp@... だったのが由来です。
          </template>
        </FAQ>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.trapezoid {
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>