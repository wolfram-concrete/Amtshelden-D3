import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // Die Startseite zeigt ausschließlich den aktuellen Stand: Mosaic Interface v5.
      beforeFiles: [{ source: "/", destination: "/prototype/mosaic-v5.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
