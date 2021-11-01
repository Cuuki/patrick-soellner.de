<template>
  <div>
    {{ welcomeText }}
    <!-- Remove this component to get started! -->
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const welcomeText = ref('test');
</script>
