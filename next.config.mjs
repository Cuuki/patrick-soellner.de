import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'src/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV !== 'production',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
  productionBrowserSourceMaps: true,
};

export default withSerwist(nextConfig);
