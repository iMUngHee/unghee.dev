/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   reactRoot: true,
  //   images: {
  //     layoutRaw: true,
  //   },
  // },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    domains: ['unghee.notion.site'],
  },
};

module.exports = nextConfig;
