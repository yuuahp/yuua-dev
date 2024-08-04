<script setup lang="ts">

import WorkCard from "~/components/WorkCard.vue";
import Button from "~/components/Button.vue";
import RedditAccount from "~/components/accounts/RedditAccount.vue";
import SteamAccount from "~/components/accounts/SteamAccount.vue";
import TwitterAccount from "~/components/accounts/TwitterAccount.vue";
import AccountDisplay from "~/components/accounts/AccountDisplay.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="relative h-dvh w-dvw bg-white pt-16 font-inter">
    <div class="absolute left-[calc(50%-25.5rem+3rem)] top-[calc(4.5rem+1.5rem)] w-[52rem] aspect-[4/3] bg-[#F0EFED] rounded-[2rem]"></div>
    <div class="absolute left-[calc(50%-25.5rem)] top-[4.5rem] w-[52rem] aspect-[4/3] bg-brown-depth rounded-[1.75rem]"></div>

    <div class="mx-auto w-[52rem] aspect-[4/3] p-8 border-8 border-brown-primary bg-brown-background rounded-3xl relative">
      <!-- reflection -->
      <div class="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden border-white/20 border-4 border-t-0 pointer-events-none z-50">
        <div class="absolute z-50 -left-64 top-16 w-[200%] h-48 origin-center -rotate-[30deg]">
          <div class="w-full h-3/5 bg-white/20"></div>
          <div class="w-full h-1/5"></div>
          <div class="w-full h-1/5 bg-white/20"></div>
        </div>
      </div>
      <div class="
        absolute top-0 left-0 w-full h-full p-8 pt-16 flex flex-col gap-y-16
        hide-scrollbar overflow-y-scroll overflow-x-hidden rounded-2xl
       ">
        <!-- intro -->
        <div class="flex gap-x-16 mt-16 mb-8">
          <div class="w-52 h-fit relative z-10 rounded-t-2xl photo-shadow-corner before:bg-brown-background">
            <p class="text-center bg-[#2f2833] text-[#f5ede9] rounded-t-2xl font-jb-mono pt-1">yuua-icon-v4.png</p>
            <nuxt-img class="w-full rounded-b-2xl" src="/yuua-icon-v4.png"/>
            <div class="invisible absolute w-[calc(100%-1rem)] h-2 -bottom-3 left-3 bg-[#2f2833] rounded-b-2xl"/>
            <div class="invisible absolute w-2 h-[calc(100%-1rem)] top-3 -right-3 bg-[#2f2833] rounded-r-2xl"/>
          </div>
          <div class="text-brown-primary pt-8">
            <h1 class="text-4xl font-black mb-4">
              Hello, I’m yuua
              <font-awesome-icon icon="fad fa-solid fa-hand-wave" />
            </h1>
            <p class="pl-4 mb-4">
              A hobby developer who LOVES <span class="font-black kotlin-gradient">Kotlin</span>.<br>
              I learn and develop by letting my curiosity lead the way.
            </p>
            <div class="pl-4">
              <p class="mb-2">What are you looking for today?</p>
              <div class="flex gap-x-2 mb-2 flex-wrap">
                <!--TODO: Always-visible navigation on side-->
                <Button icon="pen-ruler">
                  Works & Projects
                </Button>
                <Button icon="thumbs-up">
                  Socials
                </Button>
                <Button icon="messages-question">
                  FAQ
                </Button>
              </div>
              <p class="mb-2">or just scroll down~</p>
            </div>
          </div>
        </div>
        <!--works-->
        <div>
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
                      internal_link="/the_end_poem_jp">
              そしてゲームは終わり、プレイヤーは夢から目覚めた。<br/>
              そしてプレイヤーは新しい夢を見た。<br/>
              もう一度夢を見た。<br/>
              もっと良い夢を見た。
            </WorkCard>
          </div>
        </div>
        <!--socials (GitHub, Twitter/X, Reddit, Steam, Email)-->
        <div>
          <h1 class="text-brown-primary text-3xl font-black mb-4">
            Socials
            <font-awesome-icon icon="fad fa-thumbs-up"/>
          </h1>
          <div class="flex flex-wrap gap-x-4 gap-y-6 mb-6">
            <AccountDisplay class="card-flex">
              <!--GitHub by default-->
            </AccountDisplay>
            <AccountDisplay class="card-flex">
              <template v-slot:card>
                <TwitterAccount class="inside w-full mb-2"/>
              </template>
              <template v-slot:name>
                <font-awesome-icon icon="fa-brands fa-twitter" />
                Twitter
                <font-awesome-icon icon="fa-brands fa-x-twitter" />
              </template>
              <template v-slot:catch_copy>
                Happening now
              </template>
            </AccountDisplay>
            <AccountDisplay class="card-flex">
              <template v-slot:card>
                <RedditAccount class="inside w-full mb-2"/>
              </template>
              <template v-slot:name>
                <font-awesome-icon icon="fa-brands fa-reddit" />
                Reddit
              </template>
              <template v-slot:catch_copy>
                The front page of the internet
              </template>
            </AccountDisplay>
            <AccountDisplay class="card-flex">
              <template v-slot:card>
                <SteamAccount class="inside w-full mb-2"/>
              </template>
              <template v-slot:name>
                <font-awesome-icon icon="fa-brands fa-steam" />
                Steam
              </template>
              <template v-slot:catch_copy>
                Welcome to Steam
              </template>
            </AccountDisplay>
          </div>
        </div>
        <!--FAQ-->
        <div>
          <h1 class="text-brown-primary text-3xl font-black mb-6">
            <span class="text-lg text-brown-secondary">(not so)</span> Frequently Asked Questions
            <font-awesome-icon icon="fad fa-messages-question"/>
          </h1>
          <div class="flex flex-col gap-y-6">
            <FAQ icon="person-circle-question"/>
            <FAQ icon="square-code">
              <template v-slot:question>
                What languages do you prefer?
              </template>
              <template v-slot:answer>
                I love working with <span class="font-bold">Kotlin</span>, Java, Typescript and JavaScript.
              </template>
            </FAQ>
            <FAQ icon="boxes-stacked">
              <template v-slot:question>
                And tech stacks?
              </template>
              <template v-slot:answer>
                I usually work with <span class="font-bold">Nuxt.js</span>, <span class="font-bold">Tailwind</span>, <span class="font-bold">Ktor</span> and Firebase.
              </template>
            </FAQ>

            <FAQ icon="server">
              <template v-slot:question>
                Are you an Android developer?
              </template>
              <template v-slot:answer>
                Nope, I'm a <span class="font-bold">server-side</span> Kotlin developer.
              </template>
            </FAQ>

            <FAQ icon="envelope-open-text">
              <template v-slot:question>
                What's your email?
              </template>
              <template v-slot:answer>
                You can reach me at
                <a class="font-bold underline text-pink-400" href="mailto:inbox@yuua.dev">inbox@yuua.dev</a>.
                Feel free to drop me a message anytime!
              </template>
            </FAQ>

            <FAQ icon="text-size">
              <template v-slot:question>
                Why not capitalize the "y" in "yuua"? Is it a typo?
              </template>
              <template v-slot:answer>
                It's intentional. I think <span class="font-bold">"yuua"</span> looks more balanced than <span class="font-bold">"Yuua"</span>. I always use <span class="font-bold">"yuua"</span> (or <span class="font-bold">"yuuaHP"</span>) as my handle name online.
              </template>
            </FAQ>

            <FAQ icon="question">
              <template v-slot:question>
                What does "HP" in "yuuaHP" stand for?
              </template>
              <template v-slot:answer>
                Honestly, I don't know! It's just a suffix from my first-ever email address.
              </template>
            </FAQ>
          </div>
        </div>
      </div>
      <!-- card holder -->
      <div class="w-full -mt-8 relative z-[90]">
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

<style scoped>
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

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.card-flex {
  @apply w-[calc(50%-.5rem)];
}

.trapezoid {
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>