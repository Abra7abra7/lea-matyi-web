import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-aa7457c105694bcca680b272aeeb00ae.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'kajabi-storefronts-production.kajabi-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.leamatyi.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
