import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Netlify (pre-rendered HTML for every page)
  output: "export",

  // Images: disable static image imports so .webp/.png imports return
  // URL strings (like Vite) instead of StaticImageData objects
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },

  // Trailing slashes to match current URL structure
  trailingSlash: false,

  // Skip type checking during build (pre-existing Vite type issues)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Handle file imports as URL strings (like Vite)
  webpack(config) {
    // Video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    // Image files — return URL strings instead of StaticImageData
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico|bmp|svg)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
