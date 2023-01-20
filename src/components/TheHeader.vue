<template>
  <header
    class="p-0 w-full flex items-center justify-between border-b-[1px] border-slate-800"
  >
    <a
      @mouseover="() => (menu.hover = true)"
      @mouseleave="() => (menu.hover = false)"
      class="px-10 m-0 p-4 text-base font-style font-normal tracking-wider hover:underline hover:underline-offset-4 hover:cursor-pointer"
    >
      MENU
    </a>

    <a
      class="pr-6 hover:translate-y-[2px] hover:shadow-xs transition-all duration-75 ease-in-out"
      href="/"
    >
      <img src="../assets/bloobloom.png" alt="Logo" />
    </a>
  </header>
  <BaseMenu :menu="menu" />
</template>

<script setup>
import { ref } from 'vue';
import BaseMenu from './BaseMenu.vue';

const menu = ref({ hover: false, open: false });
</script>
