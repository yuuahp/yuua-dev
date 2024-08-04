<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {onMounted} from "vue";
import GitHubAccount from "~/components/accounts/GitHubAccount.vue";

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
});
</script>

<template>
  <div class="card3d group">
    <slot name="card">
      <GitHubAccount class="w-full mb-2"/>
    </slot>
    <p class="group-hover:ml-4 px-4 flex gap-x-2 items-center rounded-lg group-hover:bg-brown-primary w-fit transition-all">
      <span class="font-bold text-brown-primary group-hover:text-brown-background">
        <slot name="name">
          <font-awesome-icon icon="fa-brands fa-github"/>
          GitHub
        </slot>
      </span>
      <span class="text-brown-secondary">
        <slot name="catch_copy">
          Let's build from here
        </slot>
      </span>
      <font-awesome-icon icon="fa-duotone fa-solid fa-up-right-from-square"
                         class="text-brown-primary group-hover:text-brown-background"/>
    </p>
  </div>
</template>

<style scoped>
.card3d {
  transform: scale(1);
  perspective: 400px;
}

.card3d:hover {
  z-index: 10;
  transform: scale(1.1);
}

.card3d:active {
  z-index: 10;
  transform: scale(1.05);
}

.card3d {
  transition: all 250ms ease-out;
}
</style>