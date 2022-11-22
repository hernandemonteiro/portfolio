/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
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
