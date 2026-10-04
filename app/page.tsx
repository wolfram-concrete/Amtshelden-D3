'use client';
// Startseite: das Mosaic Interface als React-App. Rendert nur im Browser (Raster, Maus-Tiefe, WebGL).
import dynamic from 'next/dynamic';

const D3App = dynamic(() => import('@/components/d3/D3App'), { ssr: false });

export default function Page() {
  return <D3App />;
}
