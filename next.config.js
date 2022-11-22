/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  outputFileTracing: false
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
