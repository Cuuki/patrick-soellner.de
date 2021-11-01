<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button :disabled="count === 2" @click="increment">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';

const count = ref<number>(0);
const increment = (): void => {
  count.value += 1;
};
</script>
