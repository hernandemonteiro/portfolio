/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.shields.io"],
  },
  fs: "empty",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
