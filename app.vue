<script lang="ts" setup>
import { useMeta } from '#meta';

useMeta({
  htmlAttrs: {
    lang: 'en-GB',
    class: 'dark',
  },
});
</script>

<template>
  <main class="flex-grow flex-shrink-0 p-6 dark:bg-gray-800 bg-white">
    <NuxtPage />
  </main>
</template>
