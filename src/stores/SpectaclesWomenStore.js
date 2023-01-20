import { defineStore } from 'pinia';

export const useSpectaclesWomenStore = defineStore('spectaclesWomen', {
  state: () => ({
    glasses: [],
    loading: false,
  }),
  actions: {
    async fetchGlasses() {
      this.loading = true;
      const res = await fetch(
        `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses`
      );
      console.log('check check', res.status);
      if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
      const data = await res.json();
      this.glasses = data.glasses;
      this.loading = false;
    },
  },
  /* Getters */
});
