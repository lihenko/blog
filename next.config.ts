import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.lihenko.com.ua",
      },
    ],
    formats: ["image/avif", "image/webp"], 
  },
};

export default nextConfig;
