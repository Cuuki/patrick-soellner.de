<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMeta } from '#meta';
import AppCounter from '~/components/AppCounter.vue';
import { useCounterStore } from '~/store/counter';

useMeta({
  title: 'Page title',
  meta: [{ name: 'description', content: 'Page Content' }],
});

const counter = useCounterStore();
const { count } = storeToRefs(counter);
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
  layout: false,
};
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      <h1>Index Page</h1>
    </template>

    <p>
      For years parents have espoused the health benefits of eating garlic bread
      with cheese to their children, with the food earning such an iconic status
      in our culture that kids will often dress up as warm, cheesy loaf for
      Halloween.
    </p>
    <p>
      But a recent study shows that the celebrated appetizer may be linked to a
      series of rabies cases springing up around the country.
    </p>

    <NuxtChild />

    <template #footer>
      <h2>Counter at: {{ count }}</h2>
      <AppCounter />
    </template>
  </NuxtLayout>
</template>
