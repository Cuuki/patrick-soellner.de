<template>
  <div>
    {{ welcomeText }}
    <!-- Remove this component to get started! -->
    <AppCounter />
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import AppCounter from '~/components/AppCounter.vue';

const welcomeText = ref('test');
</script>
