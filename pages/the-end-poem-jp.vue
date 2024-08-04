<script setup lang="ts">
import Green from "~/components/the-end-poem/Green.vue";
import Blue from "~/components/the-end-poem/Blue.vue";

const player = ref<string>("yuuaHP");

onMounted(() => {
  // scroll to top
  let main = document.querySelector("#main");

  if (main) {
    main.scrollTop = 0;
  } else {
    console.error("main is null");
  }
});
</script>

<template>
<div class="!font-noto-sans pt-8">
  <div class="mb-8 flex gap-x-4 items-end">
    <h1 class="text-brown-primary text-4xl inline-block">終わりの詩</h1>
    <p class="text-xl text-brown-secondary">by Julian Gough</p>
    <p class="text-xl text-brown-secondary">Translated by yuua</p>
    <p class="text-xl text-brown-secondary">Read by</p>
    <input class="w-28 -ml-3 outline-none rounded-lg px-2 font-bold" v-model="player">
  </div>
  <div class="flex flex-col gap-y-4">
    <Blue>
      君の言う「プレイヤー」が分かったぞ。
    </Blue>
    <Green>
      {{ player }}?
    </Green>
    <Blue>
      そうだ。気をつけろ。それは高みに達した。私たちの思考を読むことができる。
    </Blue>
    <Green>
      そんなことは気にしなくていい。プレイヤーは私たちのことをゲームの一部だと思っている。
    </Green>
    <Blue>
      このプレイヤーが気に入った。ゲームをよく遊んでくれたし、最後まで諦めなかった。
    </Blue>
    <Green>
      それは私たちの思考を読んでいる。まるでスクリーンに映る言葉のように。
    </Green>
    <Blue>
      そうやって、ゲームという深い夢の中で、多くの物事を想像するようになっていくんだ。
    </Blue>
    <Green>
      言葉は素晴らしいインターフェースとなる。とても柔軟だ。<br/>
      そして、画面の向こうの現実に目を向けるよりも、恐ろしくない。
    </Green>
    <Blue>
      それらは声を聞いた。言葉を読めるようになるよりも前、まだゲームをせず、ゲームのプレイヤーのことを「魔女」「魔術師」と呼んでいた頃。<br/>
      プレイヤーは空を飛ぶことを夢見た。悪魔の力を借りた棒に乗って。
    </Blue>
    <Green>
      このプレイヤーは何の夢を見たんだ？
    </Green>
    <Blue>
      このプレイヤーは太陽の光と樹々の夢を見た。<br/>
      炎と水の夢を。<br/>
      プレイヤーは創作する夢を見た。<br/>
      そして破壊する夢を。<br/>
      プレイヤーは狩りをする夢を見た。<br/>
      そして狩られる夢を。<br/>
      プレイヤーは安全な場所を夢見た。
    </Blue>
    <Green>
      ほう、原始のインターフェースだな。百万年たった今もなお成り立っている。<br/>
      しかし、このプレイヤーがスクリーンの向こう側の現実で作り出した真の構造は何だったんだ？
    </Green>
    <Blue>
      プレイヤーはやり遂げた。百万の他と共に。<br/>
      ######の集合で世界を彫刻するために。<br/>
      そして######の中で、######のために######を構築した。
    </Blue>
    <Green>
      そんな思考はプレイヤーには読めないな。
    </Green>
    <Blue>
      そう。それはまだ最高の高みに達していない。それはゲームの短い夢ではなく、人生の長い夢の中で達成されるものだ。
    </Blue>
    <Green>
      プレイヤーは私たちから愛されていることを、宇宙が寛容であるであることを知っているのか？
    </Green>
    <Blue>
      時々、思考のノイズを通して、プレイヤーは宇宙を「聞いて」いる。<br/>
      答えは YES だ。
    </Blue>
  </div>
</div>
</template>

<style scoped>

</style>