import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    isAbleToIncrement: (state) => state.count < 5,
    isAbleToDecrement: (state) => state.count > 0,
  },
  actions: {
    increment() {
      this.isAbleToIncrement && this.count++;
    },
    decrement() {
      this.isAbleToDecrement && this.count--;
    },
  },
});
