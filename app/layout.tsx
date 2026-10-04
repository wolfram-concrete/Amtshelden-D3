import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'D3 Deep Dive Day – die digitale Konferenz für Behörden',
  description: 'D3 Deep Dive Day – das digitale B2G-Event von Amtshelden. Ausgabe 01: KI + Transformation.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#1E1B36',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Archivo (Headlines, UI) und Martian Mono (Labels); Fließtext Georgia ist Systemschrift */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Martian+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
