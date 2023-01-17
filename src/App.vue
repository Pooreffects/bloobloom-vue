<template>
  <div class="h-screen w-full">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>
