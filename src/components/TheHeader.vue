<template>
  <!-- Work and manipulate the menu and extracting it into its own component (prolly dump GSAP too) -->
  <header
    class="p-0 w-full flex items-center justify-between border-b-[1px] border-slate-800"
  >
    <a
      @mouseover="() => (menu = true)"
      @mouseleave="() => (menu = false)"
      class="px-10 m-0 p-4 text-base font-style font-normal tracking-wider hover:underline hover:underline-offset-4 hover:cursor-pointer"
    >
      MENU
    </a>

    <a class="pr-6" href="/">
      <img src="../assets/bloobloom.png" alt="Logo" />
    </a>
  </header>
  <BaseSidebar :menu="menu" />
</template>

<script setup>
import { ref } from 'vue';
import BaseSidebar from './BaseSidebar.vue';

const menu = ref(false);
</script>
