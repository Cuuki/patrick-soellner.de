import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  meta: {
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap',
      },
    ],
  },
  css: ['~/assets/css/styles.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: [['@pinia/nuxt', { disableVuex: true }]],
});
