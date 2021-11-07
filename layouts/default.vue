<script lang="ts">
export default {
  name: 'DefaultLayout',
};
</script>

<template>
  <section
    class="
      prose
      dark:prose-dark
      lg:prose-xl
      container
      mx-auto
      text-gray-900
      dark:text-white
    "
  >
    <header>
      <slot name="header" />
    </header>
    <slot />
    <footer>
      <slot name="footer" />
    </footer>
  </section>
</template>
