<template>
  <div class="h-screen w-full">
    <TheHeader />
    <router-view />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
</script>
