<template>
  <!-- Work and manipulate the menu and extracting it into its own component (prolly dump GSAP too) -->
  <header
    class="p-0 w-full flex items-center justify-between border-b-[1px] border-slate-800"
  >
    <a
      @mouseover="
        () => {
          openMenu();
          menu = true;
        }
      "
      @mouseleave="
        () => {
          closeMenu();
          menu = false;
        }
      "
      class="px-10 m-0 p-4 text-base font-style font-normal tracking-wider hover:underline hover:underline-offset-4 hover:cursor-pointer"
    >
      MENU
    </a>

    <a class="pr-6" href="/">
      <img src="../assets/bloobloom.png" alt="Logo" />
    </a>
  </header>
  <aside
    v-if="menu"
    ref="sidebar"
    class="fixed left-0 flex flex-col w-80 min-h-screen overflow-hidden p-4 bg-slate-200 z-50"
  >
    Sidebar
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';

const menu = ref(false);
const sidebar = ref(null);

const tl = gsap.timeline();

function openMenu() {
  tl.fromTo(
    sidebar.value,
    {
      x: -380,
    },
    {
      x: 0,
      duration: 1,
      ease: 'expo.out',
    }
  );
}

function closeMenu() {
  tl.fromTo(
    sidebar.value,
    {
      x: 0,
    },
    {
      x: -384,
      duration: 1,
      ease: 'ease.out',
    }
  );
}
</script>
