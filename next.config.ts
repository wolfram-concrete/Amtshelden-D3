import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // "/" ist die React-App (app/page.tsx), Stand v7 „Amtshelden vorn“. v5.8 bleibt als Archiv unter /prototype/mosaic-v5.html.
      beforeFiles: [
        // Design-System-Board, Stand v7 (intern)
        { source: "/design-system", destination: "/prototype/design-system.html" },
        // v7 als Prototyp-HTML (Referenz zur App unter /)
        { source: "/v7", destination: "/prototype/v7.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
