import type { Metadata, Viewport } from "next";
import { Fragment_Mono, Hubot_Sans, Mona_Sans } from "next/font/google";
import "@/styles/tokens.css";

const hubot = Hubot_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-hubot",
  display: "swap",
});

const mona = Mona_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-mona",
  display: "swap",
});

const fragment = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D3 – Deep Dive Day · Design Exploration",
  description: "D3 Deep Dive Day – das digitale B2G-Event von Amtshelden. Interne Designexploration.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${hubot.variable} ${mona.variable} ${fragment.variable}`}>
      <body>{children}</body>
    </html>
  );
}
