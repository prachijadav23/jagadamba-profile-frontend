/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real photography will be served from /public/images/** via next/image.
    // Remote patterns can be added here once a CDN / asset host is chosen.
    remotePatterns: [],
  },
};

export default nextConfig;
