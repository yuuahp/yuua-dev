<script setup lang="ts"></script>

<template>
  <h1 class="text-brown-primary text-2xl sm:text-3xl font-black mb-2">
    <slot name="title"/>
  </h1>
  <p class="pl-4 text-brown-secondary mb-4">
    <slot name="description"/>
  </p>
</template>

<style scoped>

</style>