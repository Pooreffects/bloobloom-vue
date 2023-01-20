<template>
  <Transition :name="props.menu.open ? '' : 'slide-fade'">
    <aside
      v-if="props.menu.hover || props.menu.open"
      @mouseover="() => (props.menu.open = true)"
      @mouseleave="() => (props.menu.open = false)"
      class="fixed left-0 flex flex-col w-80 min-h-screen overflow-hidden bg-white z-50 shadow-md"
    >
      <div class="p-0 m-0 flex flex-col">
        <div
          class="py-5 px-4 border-b-[1px] border-b-black flex items-center justify-between"
        >
          <a
            href=""
            class="font-style font-medium text-lg uppercase hover:-translate-y-[2.5px] transition-all duration-75 ease-in-out hover:cursor-pointer"
          >
            spectacles
          </a>
          <font-awesome-icon
            class="text-lg text-slate-700 hover:translate-x-[2px] hover:cursor-pointer transition-all duration-75 ease-out"
            icon="fa-solid fa-caret-right"
          />
        </div>
        <div
          class="py-5 px-4 border-b-[1px] border-b-black flex items-center justify-between"
        >
          <a
            href=""
            class="font-style font-medium text-lg uppercase hover:-translate-y-[2.5px] transition-all duration-75 ease-in-out hover:cursor-pointer"
          >
            Sunglasses
          </a>
          <font-awesome-icon
            class="text-lg text-slate-700 hover:translate-x-[2px] hover:cursor-pointer transition-all duration-75 ease-in-out"
            icon="fa-solid fa-caret-right"
          />
        </div>
        <div class="py-5 pl-4 border-b-[1px] border-b-black">
          <p
            class="font-style font-medium text-lg uppercase hover:line-through hover:cursor-pointer hover:text-gray-600"
          >
            Home Try On
          </p>
        </div>
        <div class="py-5 pl-4 border-b-[1px] border-b-black">
          <p
            class="font-style font-medium text-lg uppercase hover:line-through hover:cursor-pointer hover:text-gray-600"
          >
            Pair For Pair
          </p>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import { Transition } from 'vue';

const props = defineProps({
  menu: {
    hover: Boolean,
    open: Boolean,
  },
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
