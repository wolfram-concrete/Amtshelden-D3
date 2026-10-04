// Rahmen: Leiste, Navigation unten, Preloader, Körnung.
// Werte (v) kommen aus D3App.renderVals().
import type { V, Css } from '../types';

/** Leiste: Bildmarke, Navigation, Zähler, Aktion */
export function Bar({ v }: { v: V }) {
  return (
    <header className="bar" aria-label="Systemleiste">
      <a href="#" className="lock" onClick={v.nav.home} aria-label="D3 Deep Dive Day, Home" style={{ gridColumn: `span ${v.lockSpan ?? ""}` } as Css}>
        <svg className="lock-mark" viewBox="0 0 10.14 10.12" style={{ height: "34px", width: "auto", flexShrink: "0" } as Css} aria-hidden="true">
          <path fill="currentColor" d="M10.14,5.06C10.14,2.26,7.88,0,5.09,0v2.35c.87.41,1.62,1.1,2.07,2.05,1.01,2.15.08,4.71-2.07,5.72,0,0,0,0,0,0,2.79,0,5.06-2.26,5.06-5.06Z M5.01,5.11s.05.07.08.1v-2.85c-1.12-.53-2.44-.59-3.65-.02.25.53.54,1.15.85,1.81.97-.07,1.97.24,2.72.97Z M0,5.19c1.27,1.23,3.18,3.08,5.09,4.92-.99-2.12-1.98-4.23-2.8-5.98-.84.06-1.65.41-2.28,1.05Z M5.09,5.2v4.91s0,0,0,0c0,0,0,0,0,0,1.33-1.37,1.31-3.54,0-4.91Z" />
        </svg>
      </a>
      <a href="#" className={`nv sys ${v.on.explore ?? ""}`} onClick={v.nav.explore}>
        Formate
      </a>
      <a href="#" className={`nv sys ${v.on.program ?? ""}`} onClick={v.nav.program}>
        Programm
      </a>
      <a href="#" className={`nv sys ${v.on.speaker ?? ""}`} onClick={v.nav.speaker}>
        Speaker*innen
      </a>
      <a href="#" className={`nv sys ${v.on.partner ?? ""}`} onClick={v.nav.partner}>
        Mitmachen
      </a>
      <a href="#" className="nv sys" onClick={v.nav.partner}>
        Über D3
      </a>
      <span className="sys idx" style={{ gridColumn: `span ${v.idxSpan ?? ""}`, justifyContent: "center" } as Css}>
        {v.stNo}{" / 05"}
      </span>
      <a href="#" className="cta-b" onClick={v.ctaBar.go} style={{ gridColumn: `span ${v.ctaSpan ?? ""}` } as Css}>
        {v.ctaBarLabel}{" "}
        <span>
          →
        </span>
      </a>
    </header>
  );
}

/** Preloader: Bildmarke baut sich auf, Schlagwörter, „Deep / Dive Day“ */
export function Intro({ v }: { v: V }) {
  return (
    <div className={`intro ${v.introCls ?? ""}`} onClick={v.skipIntro} aria-hidden="true">
      <div className="ilock">
        <svg className="ilogo" ref={v.ilogoRef} viewBox="0 0 100 100">
          <g className="ip">
            <path className="i0" d="M50,100 L50,0 A50,50 0 0 1 50,100 Z" />
            <path className="i1" d="M50,100 L14.08,22.96 A42.5,42.5 0 0 1 50,100 Z" />
            <path className="i2" d="M50,100 L0.01,50.01 A35.35,35.35 0 0 1 50,100 Z" />
          </g>
          <path className="ireal" transform="scale(9.88)" d="M10.14,5.06C10.14,2.26,7.88,0,5.09,0v2.35c.87.41,1.62,1.1,2.07,2.05,1.01,2.15.08,4.71-2.07,5.72,0,0,0,0,0,0,2.79,0,5.06-2.26,5.06-5.06Z M5.01,5.11s.05.07.08.1v-2.85c-1.12-.53-2.44-.59-3.65-.02.25.53.54,1.15.85,1.81.97-.07,1.97.24,2.72.97Z M0,5.19c1.27,1.23,3.18,3.08,5.09,4.92-.99-2.12-1.98-4.23-2.8-5.98-.84.06-1.65.41-2.28,1.05Z M5.09,5.2v4.91s0,0,0,0c0,0,0,0,0,0,1.33-1.37,1.31-3.54,0-4.91Z" />
        </svg>
        <div className="iwords" aria-hidden="true">
          <span className="iw iw0">
            <b>
              Digitale
            </b>
            <b>
              Konferenz
            </b>
          </span>
          <span className="iw iw1">
            <b>
              Für
            </b>
            <b>
              Behörden
            </b>
          </span>
          <span className="iw iw2">
            <b>
              KI in der
            </b>
            <b>
              Verwaltung
            </b>
          </span>
          <span className="iw iw3">
            <b>
              Ein Tag
            </b>
            <b>
              im Browser
            </b>
          </span>
          <span className="iw iwf">
            <b>
              Deep
            </b>
            <b>
              Dive Day
            </b>
          </span>
        </div>
      </div>
    </div>
  );
}

/** Navigation unten (Tablet, Mobil) */
export function BottomNav({ v }: { v: V }) {
  return (
    <nav className="bot sys" aria-label="Navigation">
      <a href="#" className={v.on.home} onClick={v.nav.home}>
        Home
      </a>
      <a href="#" className={v.on.explore} onClick={v.nav.explore}>
        Formate
      </a>
      <a href="#" className={v.on.program} onClick={v.nav.program}>
        Programm
      </a>
      <a href="#" className={v.on.speaker} onClick={v.nav.speaker}>
        Speaker
      </a>
      <a href="#" className={v.on.partner} onClick={v.nav.partner}>
        Mitmachen
      </a>
    </nav>
  );
}

/** Körnung über der Fläche */
export function Grain({ v }: { v: V }) {
  return (
    <svg className="grain" aria-hidden="true" style={{ display: v.grainDisplay } as Css}>
      <filter id="d3g5">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#d3g5)" />
    </svg>
  );
}
