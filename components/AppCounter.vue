<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/vue/solid';
import { useCounterStore } from '~/store/counter';

const counter = useCounterStore();
const { isAbleToIncrement, isAbleToDecrement } = storeToRefs(counter);
const { increment, decrement } = counter;
</script>

<template>
  <button
    class="btn mr-2 text-gray-900 dark:text-white dark:bg-gray-700 bg-white"
    :class="
      isAbleToIncrement &&
      'hover:bg-gray-100 focus:ring-gray-300 dark:hover:bg-gray-900 dark:focus:ring-white'
    "
    :disabled="!isAbleToIncrement"
    @click="increment"
  >
    <component :is="PlusCircleIcon" class="mr-1 w-5 h-5" />
    Increment
  </button>
  <button
    class="btn text-gray-900 dark:text-white dark:bg-gray-700 bg-white"
    :class="
      isAbleToDecrement &&
      'hover:bg-gray-100 focus:ring-gray-300 dark:hover:bg-gray-900 dark:focus:ring-white'
    "
    :disabled="!isAbleToDecrement"
    @click="decrement"
  >
    <component :is="MinusCircleIcon" class="mr-1 w-5 h-5" />
    Decrement
  </button>
</template>
