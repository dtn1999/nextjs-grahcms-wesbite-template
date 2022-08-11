/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["media.graphassets.com", "images.unsplash.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
