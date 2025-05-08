import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cone-forest-website',
  assetPrefix: '/cone-forest-website/',
  images: { unoptimized: true },
  // This adds support for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
