<template>
  <main class="w-full h-full">
    <div class="flex items-center justify-center h-14">
      <div class="w-full h-full flex items-center justify-end">
        <h2
          class="sm:pl-2 text-xl md:text-4xl lg:text-4xl xl:text-4xl font-style font-semibold uppercase pr-10"
        >
          Spectacles Women
        </h2>
      </div>
      <div class="w-1/2 h-full flex items-center justify-start">
        <select
          name="colour"
          class="h-full border-x-[1px] border-black text-center font-style font-medium uppercase xl:text-lg focus:outline-none hover:cursor-pointer hover:translate-y-[2.5px] transition-all duration-75 ease-in-out"
        >
          <option value="">Colour</option>
          <option value="black">Black</option>
          <option value="tortoise">Tortoise</option>
          <option value="coloured">Coloured</option>
          <option value="crystal">Crystal</option>
          <option value="dark">Dark</option>
          <option value="bright">Bright</option>
        </select>
        <select
          name="shape"
          class="h-full border-r-[1px] border-black text-center font-style font-medium uppercase xl:text-lg focus:outline-none hover:cursor-pointer hover:translate-y-[2.5px] transition-all duration-75 ease-in-out"
        >
          <option value="">Shape</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
          <option value="round">Round</option>
          <option value="cat-eye">Cat-eye</option>
        </select>
      </div>
    </div>
    <Loader v-if="spectaclesWomen.loading" />
    <div class="glasses-grid">
      <div
        class="w-full h-full flex flex-col items-center"
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
import Loader from './Loader.vue';

/* Filter incoming data */
const spectaclesWomen = useSpectaclesWomenStore();
spectaclesWomen.fetchAllGlasses();

/* Filters */
</script>

<style scoped>
.glasses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
  background-color: black;
  border: 1px solid black;
  gap: 1px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.no-scroll::-webkit-scrollbar {
  display: none;
}
.no-scroll::-moz-scrollbar {
  display: none;
}
.no-scroll::-o-scrollbar {
  display: none;
}
.no-scroll::-google-ms-scrollbar {
  display: none;
}
.no-scroll::-khtml-scrollbar {
  display: none;
}
</style>
