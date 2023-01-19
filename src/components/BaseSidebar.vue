<template>
  <Transition name="slide-fade">
    <aside
      v-if="props.menu"
      class="fixed left-0 flex flex-col w-80 min-h-screen overflow-hidden p-4 bg-slate-200 z-50 transition-all duration-75 ease-in-out"
    >
      Sidebar
    </aside>
  </Transition>
</template>

<script setup>
import { Transition } from 'vue';

const props = defineProps({
  menu: Boolean,
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  transform: translateX(0);
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-300px);
}
</style>
