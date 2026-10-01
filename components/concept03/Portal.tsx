"use client";

import { useRef } from "react";
import { event, experience } from "@/data/event";
import { centeredD } from "@/lib/geometry";
import { range, useStageProgress } from "@/components/shared/useStageProgress";
import { useIsMobile, useSmoothPointer } from "./usePointer";
import s from "./concept03.module.css";

// Drei D-Wände, von hinten nach vorn. Rotation = Logo-Winkel, Radius wächst nach vorn.
const WALLS = [
  { id: "back", r: 150, rot: 0, k: 3.3, depth: 6, rim: "var(--d3-yellow)", grad: ["#6a5d22", "#1c1b15", "#0b0b0a"] },
  { id: "mid", r: 238, rot: 20, k: 3.6, depth: 14, rim: "var(--d3-green)", grad: ["#1d3a2c", "#0e1611", "#080808"] },
  { id: "front", r: 345, rot: 45, k: 3.95, depth: 26, rim: "var(--d3-orange)", grad: ["#3b2314", "#110c09", "#070707"] },
] as const;

const BIG = 6000; // Wandfläche, groß genug für jede Skalierung

// Rückansicht einer stehenden Person, 100 × 260 Einheiten, Füße bei y=252.
const PERSON =
  "M50,4 C59,4 65,12 65,22 C65,33 58,40 50,40 C42,40 35,33 35,22 C35,12 41,4 50,4 Z " +
  "M44,38 L56,38 L57,48 L43,48 Z " +
  "M27,50 C38,44 62,44 73,50 C79,53 81,60 82,70 L85,132 C85,137 82,139 79,138 L77,104 L76,160 L24,160 L23,104 L21,138 C18,139 15,137 15,132 L18,70 C19,60 21,53 27,50 Z " +
  "M29,158 L48,158 L46,246 C46,250 44,252 40,252 L32,252 C29,252 28,250 29,247 Z " +
  "M53,158 L71,158 L69,240 C69,244 67,246 63,246 L56,246 C53,246 52,244 53,241 Z";

export function Portal() {
  const ref = useRef<HTMLElement>(null);
  const p = useStageProgress(ref);
  const ptr = useSmoothPointer();
  const mobile = useIsMobile();

  const size = mobile ? 0.62 : 1;
  const vx0 = mobile ? 0 : 250;
  const vy0 = mobile ? 150 : 30;

  const zLin = range(p, 0.04, 0.84);
  const z = Math.pow(zLin, 1.55);
  const copyOut = range(p, 0, 0.08);
  const reveal = range(p, 0.8, 0.92);
  const personFade = 1 - range(zLin, 0.55, 0.8);

  // Kamera richtet sich beim Eintauchen auf die Öffnung aus
  const vx = vx0 * (1 - z);
  const vy = vy0 * (1 - z);

  const roomScale = Math.exp(1.5 * z) * size;
  const backR = WALLS[0].r * size;
  const horizon = backR * 0.2;

  return (
    <section ref={ref} className={s.portal} id="lobby" aria-label="D3 Deep Dive Day">
      <div className={s.portalSticky}>
        <svg className={s.portalSvg} viewBox="-800 -500 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <radialGradient id="roomLight" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform={`scale(${backR * 3})`}>
              <stop offset="0" stopColor="#fffbe6" />
              <stop offset="0.35" stopColor="#f4f0dc" />
              <stop offset="1" stopColor="#e2ddc6" />
            </radialGradient>
            <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dcd7c0" />
              <stop offset="1" stopColor="#eeebdc" />
            </linearGradient>
            <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffe500" stopOpacity="0.55" />
              <stop offset="1" stopColor="#ffe500" stopOpacity="0" />
            </linearGradient>
            {WALLS.map((w) => (
              <radialGradient key={w.id} id={`wall-${w.id}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform={`scale(${w.r * 2.6})`}>
                <stop offset="0.3" stopColor={w.grad[0]} />
                <stop offset="0.62" stopColor={w.grad[1]} />
                <stop offset="1" stopColor={w.grad[2]} />
              </radialGradient>
            ))}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <filter id="bloom" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="70" />
            </filter>
          </defs>

          {/* Der helle Raum hinter dem Portal */}
          <g transform={`translate(${vx + ptr.x * 3},${vy + ptr.y * 3}) scale(${roomScale / size})`}>
            <rect x={-BIG} y={-BIG} width={BIG * 2} height={BIG * 2} fill="url(#roomLight)" />
            <rect x={-BIG} y={horizon} width={BIG * 2} height={BIG} fill="url(#floor)" opacity={1 - reveal} />
            <circle cx="0" cy={-backR * 0.1} r={backR * 1.1} fill="#ffe500" opacity="0.38" filter="url(#bloom)" />
            <g opacity={personFade} transform={`translate(${-backR * 0.02},${horizon + backR * 0.36 - z * backR * 0.3}) scale(${(backR / 260) * 0.62 * (1 - z * 0.45)})`}>
              <ellipse cx="0" cy="2" rx="46" ry="7" fill="#000" opacity="0.18" />
              <path d={PERSON} fill="#0c0c0b" transform="translate(-50,-252)" />
            </g>
          </g>

          {/* Drei D-Wände */}
          {WALLS.map((w) => {
            const sc = Math.exp(w.k * z) * size;
            const d = centeredD(w.r);
            return (
              <g key={w.id} transform={`translate(${vx + ptr.x * w.depth},${vy + ptr.y * w.depth}) rotate(${w.rot}) scale(${sc})`}>
                <path d={`M${-BIG},${-BIG} H${BIG} V${BIG} H${-BIG} Z ${d}`} fill={`url(#wall-${w.id})`} fillRule="evenodd" />
                <path d={d} fill="none" stroke={w.rim} strokeWidth={10 / sc} opacity="0.55" filter="url(#glow)" />
                <path d={d} fill="none" stroke={w.rim} strokeWidth={1.6 / sc} />
              </g>
            );
          })}

          {/* Licht, das aus dem Portal nach vorn fällt */}
          <g style={{ mixBlendMode: "screen" }} opacity={0.5 * (1 - zLin)} transform={`translate(${vx},${vy})`}>
            <path d={`M${-backR * 0.3},${backR * 0.2} L${backR * 0.4},${backR * 0.2} L${backR * 1.6},${560} L${-backR * 2.4},${560} Z`} fill="url(#beam)" filter="url(#glow)" />
          </g>
        </svg>

        {/* Hero-Copy */}
        <div className={s.heroCopy} style={{ opacity: 1 - copyOut, transform: `translateX(${-copyOut * 40}px)` }}>
          <p className={`label ${s.presenter}`}>{event.presenter}</p>
          <h1 className={s.h1}>
            <span className={s.d3}>{event.name}</span>
            <span className={s.long}>{event.longName}</span>
          </h1>
          <p className={`label ${s.theme}`}>{event.theme}</p>
          <p className={s.claim}>{event.claim}</p>
          <a href="#rooms" className={s.enter}>
            {event.cta} <span aria-hidden="true">→</span>
          </a>
          <dl className={`label ${s.meta}`}>
            <div><dt>Datum</dt><dd>{event.date}</dd></div>
            <div><dt>Zeit</dt><dd>{event.time}</dd></div>
            <div><dt>Ort</dt><dd>{event.place}</dd></div>
          </dl>
        </div>

        <div className={s.scrollCue} style={{ opacity: 1 - copyOut }} aria-hidden="true">
          <span className="label">Scroll · eintreten</span>
          <i />
        </div>

        {/* Nach dem Eintritt */}
        <div className={s.inside} style={{ opacity: reveal, transform: `translateY(${(1 - reveal) * 24}px)` }} aria-hidden={reveal < 0.5}>
          <p className={`label ${s.insideLabel}`}>Du bist drin</p>
          <h2 className={s.insideH}>
            {experience.headline.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className={s.insideText}>{experience.intro}</p>
        </div>
      </div>
    </section>
  );
}
