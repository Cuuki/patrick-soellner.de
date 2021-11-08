import { Pinia } from 'pinia';
import { defineNuxtPlugin } from '#app';
import { useCounterStore } from '~/store/counter';

export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    const counter = useCounterStore(nuxtApp.pinia as Pinia);

    counter.count = parseInt(await $fetch('/api/count'), 10);
  } catch (e) {}
});
