<script lang="ts" setup>
import { useMeta } from '#meta';
import { useThemeStore } from '~/store/theme';

const theme = useThemeStore();

useMeta(() => ({
  htmlAttrs: {
    lang: 'en-GB',
    class: theme.colorMode,
  },
}));
</script>

<template>
  <main class="flex-grow flex-shrink-0 p-6 dark:bg-gray-800 bg-white">
    <NuxtPage />
  </main>
</template>
