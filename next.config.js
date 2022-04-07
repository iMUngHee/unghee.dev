/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    reactRoot: true,
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = nextConfig;
