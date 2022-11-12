/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rootDir: "./src"
};

module.exports = {
  images: {
    domains: ["img.shields.io"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  nextConfig,
};
