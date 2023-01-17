<template>
  <header
    class="py-4 px-6 w-full flex items-center justify-evenly border-b-[1px] border-slate-800"
  >
    <div class="w-full flex justify-start">
      <a
        v-on:mouseover="isHovered"
        v-on:mouseleave="notHovered"
        class="text-base font-style font-normal tracking-wider hover:underline hover:underline-offset-4"
        href=""
        @click="handleCount"
        >MENU</a
      >
    </div>

    <div class="w-full flex justify-start">
      <a
        class="text-base font-style font-normal hover:text-orange-600"
        href=""
        @click="handleCount"
        >LOGO</a
      >
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TheHeader',
  setup() {
    /* track Menu link on hover */
    const menuState = ref('closed');
    return { menuState };
  },
};
</script>
