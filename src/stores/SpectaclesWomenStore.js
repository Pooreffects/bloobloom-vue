import { defineStore } from 'pinia';

export const useSpectaclesWomenStore = defineStore('spectaclesWomen', {
  state: () => ({
    glasses: [],
  }),
  actions: {
    async fetchGlasses() {
      const res = await fetch(
        `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses`
      );
      if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
      const data = await res.json();
      this.glasses = data.glasses;
    },
  },
  /* Getters */
});
