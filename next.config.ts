import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // You'll need to uncomment and update this when you push to GitHub
  // basePath: '/cone-forest-website',
  images: { unoptimized: true },
};

export default nextConfig;
