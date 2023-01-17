<template>
  <header
    class="py-6 px-0 w-full flex items-center justify-between border-b-[1px] border-slate-800"
  >
    <div class="w-full flex justify-start pl-6">
      <a
        v-on:mouseover="isHovered"
        v-on:mouseleave="notHovered"
        class="text-base font-style font-normal tracking-wider hover:underline hover:underline-offset-4 hover:cursor-pointer"
        >MENU</a
      >
    </div>

    <div class="w-full flex justify-start pr-6">
      <a href="/">
        <img src="../assets/bloobloom.png" alt="Logo" />
      </a>
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
