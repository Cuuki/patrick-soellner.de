const withTM = require("next-transpile-modules")(["ui"]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig;
