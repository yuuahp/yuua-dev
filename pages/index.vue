<script setup lang="ts">
import WorkCard from "~/components/WorkCard.vue";
import Button from "~/components/Button.vue";
import RedditAccount from "~/components/accounts/RedditAccount.vue";
import SteamAccount from "~/components/accounts/SteamAccount.vue";
import TwitterAccount from "~/components/accounts/TwitterAccount.vue";
import AccountDisplay from "~/components/accounts/AccountDisplay.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

onMounted(() => {
  // scroll to top
  let main = document.querySelector("#main");

  if (main) {
    main.scrollTop = 0;
  } else {
    console.error("main is null");
  }

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
  <div class="flex flex-col gap-y-16 pt-16">
    <!-- intro -->
    <div id="intro" class="flex gap-x-16 mt-16 mb-8">
      <div class="w-52 h-fit relative z-10 rounded-t-2xl photo-shadow-corner before:bg-brown-background">
        <p class="text-center bg-[#2f2833] text-[#f5ede9] rounded-t-2xl font-jb-mono pt-1">yuua-icon-v4.png</p>
        <nuxt-img class="w-full rounded-b-2xl" src="/yuua-icon-v4.png"/>
        <div class="invisible absolute w-[calc(100%-1rem)] h-2 -bottom-3 left-3 bg-[#2f2833] rounded-b-2xl"/>
        <div class="invisible absolute w-2 h-[calc(100%-1rem)] top-3 -right-3 bg-[#2f2833] rounded-r-2xl"/>
      </div>
      <div class="text-brown-primary pt-4">
        <h1 class="text-4xl font-black mb-4">
          Hello, I’m yuua
          <font-awesome-icon icon="fad fa-solid fa-hand-wave"/>
        </h1>
        <p class="pl-4 mb-4">
          A hobby developer who LOVES <span class="font-black kotlin-gradient">Kotlin</span>.<br>
          I learn and develop by letting my curiosity lead the way.
        </p>
        <div class="pl-4">
          <p class="mb-2">What are you looking for today?</p>
          <div class="flex gap-x-2 mb-2 flex-wrap">
            <!--TODO: Always-visible navigation on side-->
            <Button icon="pen-ruler" @click="$refs.works.scrollIntoView({ behavior: 'smooth'})">
              Works & Projects
            </Button>

            <Button icon="thumbs-up" @click="$refs.socials.scrollIntoView({ behavior: 'smooth'})">
              Socials
            </Button>

            <Button icon="messages-question" @click="$refs.faq.scrollIntoView({ behavior: 'smooth'})">
              FAQ
            </Button>
          </div>
          <p class="mb-2">or just scroll down~</p>
        </div>
      </div>
    </div>
    <!--works-->
    <div ref="works" class="scroll-mt-16">
      <h1 class="text-brown-primary text-3xl font-black mb-4">
        Works & Projects
        <font-awesome-icon icon="fad fa-pen-ruler"/>
      </h1>
      <div class="flex flex-wrap gap-4">
        <WorkCard class="card-flex"
                  icon="volume-high"
                  title="VCSpeaker.kt"
                  details="Text channels, now with voice"
                  external_link="https://github.com/jaoafa/VCSpeaker.kt"
                  no_right_truncate>
          <GitHubRepo class="w-full h-full"
                      org="jaoafa" repo="VCSpeaker.kt"
                      description="🔊 Text channel, now with voice"
                      language="Kotlin" language_color="#a97bff"/>
        </WorkCard>
        <WorkCard class="card-flex"
                  icon="dice-d20"
                  title="Fortune"
                  details="Play TRPG without leaving Discord"
                  external_link="https://github.com/JourneyHQ/fortune"
                  no_right_truncate>
          <GitHubRepo class="w-full h-full"
                      org="JourneyHQ" repo="fortune"
                      description="🎲 Play TRPG without leaving Discord"
                      language="Kotlin" language_color="#a97bff"/>
        </WorkCard>
        <WorkCard class="card-flex"
                  icon="hexagon-image"
                  title="Dynmap Processor"
                  details="Dynmap image annotator CLI"
                  external_link="https://github.com/JourneyHQ/dynmap-processor"
                  no_right_truncate>
          <GitHubRepo class="w-full h-full"
                      org="JourneyHQ" repo="dynmap-processor"
                      description="🧭 Automated edit & annotation for Dynmap images"
                      language="Kotlin" language_color="#a97bff"/>
        </WorkCard>
        <WorkCard class="card-flex"
                  icon="school"
                  title="School Festival '22"
                  details="Online culture festival website" no_right_truncate>
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
        <WorkCard class="card-flex"
                  icon="graduation-cap"
                  title="UniDB"
                  details="Universities' open-campus data website" no_right_truncate>
          <div class="w-full h-full relative">
            <GitHubRepo class="absolute top-0 left-0 w-full h-full"
                        org="yuuahp" repo="unidb"
                        description="🏫 Yet Another University Open-campus Database"
                        language="Vue" language_color="#41b883" private/>
            <div class="absolute w-3/5 h-full top-0 right-0 trapezoid bg-white pl-14 pt-5 z-10">
              <img src="~/assets/UniDB.svg" alt="UniDB Logo">
            </div>
            <div class="absolute w-3/5 h-full top-0 right-[1px] trapezoid bg-[#d0d7de] pl-14 pt-4">
            </div>
          </div>
        </WorkCard>
        <WorkCard class="card-flex"
                  icon="language"
                  title="終わりの詩"
                  details="Translation of The End Poem by Julian Gough"
                  internal_link="/the-end-poem-jp">
          そしてゲームは終わり、プレイヤーは夢から目覚めた。<br/>
          そしてプレイヤーは新しい夢を見た。<br/>
          もう一度夢を見た。<br/>
          もっと良い夢を見た。
        </WorkCard>
      </div>
    </div>
    <!--socials (GitHub, Twitter/X, Reddit, Steam, Email)-->
    <div ref="socials" class="scroll-mt-16">
      <h1 class="text-brown-primary text-3xl font-black mb-4">
        Socials
        <font-awesome-icon icon="fad fa-thumbs-up"/>
      </h1>
      <div class="flex flex-wrap gap-x-4 gap-y-6 mb-6">
        <AccountDisplay class="card-flex" link="https://github.com/yuuahp">
          <!--GitHub by default-->
        </AccountDisplay>
        <AccountDisplay class="card-flex" link="https://twitter.com/yuuadev">
          <template #card="slot">
            <TwitterAccount class="inside w-full mb-2" @click="slot.openLink"/>
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
        <AccountDisplay class="card-flex" link="https://www.reddit.com/user/yuuaHP/">
          <template #card="slot">
            <RedditAccount class="inside w-full mb-2" @click="slot.openLink()"/>
          </template>
          <template #name>
            <font-awesome-icon icon="fa-brands fa-reddit"/>
            Reddit
          </template>
          <template #catch_copy>
            The front page of the internet
          </template>
        </AccountDisplay>
        <AccountDisplay class="card-flex" link="https://steamcommunity.com/id/yuuahp/">
          <template #card="slot">
            <SteamAccount class="inside w-full mb-2" @click="slot.openLink()"/>
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
    <div ref="faq" class="scroll-mt-16">
      <h1 class="text-brown-primary text-3xl font-black mb-6">
        <span class="text-lg text-brown-secondary">(not so)</span> Frequently Asked Questions
        <font-awesome-icon icon="fad fa-messages-question"/>
      </h1>
      <div class="flex flex-col gap-y-6">
        <FAQ icon="person-circle-question"/>
        <FAQ icon="square-code">
          <template #question>
            What languages do you prefer?
          </template>
          <template #answer>
            I love working with <span class="font-bold">Kotlin</span>, Java, Typescript and JavaScript.
          </template>
        </FAQ>
        <FAQ icon="boxes-stacked">
          <template #question>
            And tech stacks?
          </template>
          <template #answer>
            I usually work with <span class="font-bold">Nuxt.js</span>, <span class="font-bold">Tailwind</span>, <span
              class="font-bold">Ktor</span> and Firebase.
          </template>
        </FAQ>

        <FAQ icon="server">
          <template #question>
            Are you an Android developer?
          </template>
          <template #answer>
            Nope, I'm a <span class="font-bold">server-side</span> Kotlin developer.
          </template>
        </FAQ>

        <FAQ icon="envelope-open-text">
          <template #question>
            What's your email?
          </template>
          <template #answer>
            You can reach me at
            <a class="font-bold underline text-pink-400" href="mailto:inbox@yuua.dev">inbox@yuua.dev</a>.
            Feel free to drop me a message anytime!
          </template>
        </FAQ>

        <FAQ icon="text-size">
          <template #question>
            Why not capitalize the "y" in "yuua"? Is it a typo?
          </template>
          <template #answer>
            It's intentional. I think <span class="font-bold">"yuua"</span> looks more balanced than <span
              class="font-bold">"Yuua"</span>. I always use <span class="font-bold">"yuua"</span> (or <span
              class="font-bold">"yuuaHP"</span>) as my handle name online.
          </template>
        </FAQ>

        <FAQ icon="question">
          <template #question>
            What does "HP" in "yuuaHP" stand for?
          </template>
          <template #answer>
            Honestly, I don't know! It's just a suffix from my first-ever email address.
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

.card-flex {
  @apply w-[calc(50%-.5rem)];
}

.trapezoid {
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>