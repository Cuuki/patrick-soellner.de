<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { PlusCircleIcon } from '@heroicons/vue/solid';

const count = ref<number>(0);
const increment = (): void => {
  count.value += 1;
};
</script>

<template>
  <p>Times clicked: {{ count }}</p>
  <button
    class="btn text-gray-900 dark:text-white dark:bg-gray-700 bg-white"
    :class="
      count < 2 &&
      'hover:bg-gray-100 focus:ring-gray-300 dark:hover:bg-gray-900 dark:focus:ring-white'
    "
    :disabled="count === 2"
    @click="increment"
  >
    <component :is="PlusCircleIcon" class="mr-1 w-5 h-5" />
    Increment
  </button>
</template>
