/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["source.unsplash.com", "picsum.photos"],
    },
    experimental: {
      appDir: true,
    },
};

export default nextConfig;
