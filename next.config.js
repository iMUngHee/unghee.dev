/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    reactRoot: true,
  },
  images: {
    domains: ["media.vlpt.us"],
  },
};

module.exports = nextConfig;
