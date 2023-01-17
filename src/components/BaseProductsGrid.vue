<template>
  <main class="w-full h-full">
    <div class="flex items-center justify-center h-14">
      <div class="w-full h-full flex items-center justify-end">
        <h2 class="text-4xl font-style font-semibold uppercase pr-10">
          Spectacles Women
        </h2>
      </div>
      <div class="w-1/2 h-full flex items-center justify-start">
        <select
          class="h-full border-x-[1px] border-black px-10 font-style font-medium text-lg xl:text-xl focus:outline-none"
        >
          <option selected>Color</option>
        </select>
        <select
          class="h-full border-r-[1px] border-black px-10 font-style font-medium text-lg xl:text-xl focus:outline-none"
        >
          <option selected>Shape</option>
        </select>
      </div>
    </div>
    <div class="glasses-grid">
      <div
        class="w-full h-72 flex flex-col items-center border-[1px] border-black"
        v-for="pair in spectaclesWomen.glasses"
        :key="pair.id"
      >
        <h1 class="absolute uppercase text-2xl font-primary tracking-wide py-4">
          {{ pair.name }}
        </h1>
        <img
          class="object-cover"
          :src="pair['glass_variants'][0].media[0].url"
          :alt="pair.name"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useSpectaclesWomenStore } from '../stores/SpectaclesWomenStore';

const spectaclesWomen = useSpectaclesWomenStore();
spectaclesWomen.fetchGlasses();
</script>

<style scoped>
.glasses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
}
</style>
