/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true }, 
  output: 'standalone',
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
};

module.exports = nextConfig
