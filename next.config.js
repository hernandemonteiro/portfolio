/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
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
