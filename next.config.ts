import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // Die Startseite zeigt ausschließlich den aktuellen Stand: Mosaic Interface v5.
      beforeFiles: [
        { source: "/", destination: "/prototype/mosaic-v5.html" },
        // Design-System-Board, Stand v5.6 (intern)
        { source: "/design-system", destination: "/prototype/design-system.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
