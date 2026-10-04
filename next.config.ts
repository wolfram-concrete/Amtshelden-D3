import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // "/" ist die React-App (app/page.tsx). Der Prototyp bleibt als Referenz unter /prototype/mosaic-v5.html.
      beforeFiles: [
        // Design-System-Board, Stand v5.8 (intern)
        { source: "/design-system", destination: "/prototype/design-system.html" },
        // Entwurf v7 „Amtshelden vorn“ (Feedback Christian)
        { source: "/v7", destination: "/prototype/v7.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
