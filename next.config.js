/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["www.techinnews.com","res.cloudinary.com","bidbazaar.site"],
  },
};

module.exports = nextConfig;
