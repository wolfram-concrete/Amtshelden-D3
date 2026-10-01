"use client";

import { CSSProperties, useRef } from "react";
import { formats, people } from "@/data/event";
import { centeredD } from "@/lib/geometry";
import { clamp01, range, useStageProgress } from "@/components/shared/useStageProgress";
import s from "./concept03.module.css";

type D = { x: number; y: number; r: number; rot: number; fill?: string; rim?: string; photo?: string };

type Room = {
  no: string;
  space: string;
  formatKey: (typeof formats)[number]["key"];
  light: string;
  maskRot: number;
  ds: D[];
};

export const ROOMS: Room[] = [
  {
    no: "01", space: "Main Stage", formatKey: "keynotes", light: "var(--d3-yellow)", maskRot: 0,
    ds: [
      { x: 40, y: 10, r: 330, rot: 0, rim: "var(--d3-yellow)" },
      { x: 60, y: 30, r: 210, rot: 0, photo: people.p03 },
    ],
  },
  {
    no: "02", space: "Case Space", formatKey: "cases", light: "var(--d3-green)", maskRot: 20,
    ds: [
      { x: -120, y: 0, r: 230, rot: 0, rim: "var(--d3-green)", photo: people.p01 },
      { x: 250, y: 20, r: 230, rot: 180, rim: "var(--d3-bone)" },
    ],
  },
  {
    no: "03", space: "Masterclass", formatKey: "masterclasses", light: "var(--d3-orange)", maskRot: 45,
    ds: [
      { x: -60, y: 60, r: 300, rot: 0, rim: "var(--d3-orange)" },
      { x: 30, y: 30, r: 230, rot: 20, rim: "var(--d3-yellow)" },
      { x: 110, y: 0, r: 165, rot: 45, photo: people.p07 },
    ],
  },
  {
    no: "04", space: "Networking", formatKey: "networking", light: "var(--d3-bone)", maskRot: 0,
    ds: [
      { x: -170, y: -60, r: 150, rot: 0, photo: people.p04 },
      { x: 150, y: 90, r: 150, rot: 180, photo: people.p05 },
      { x: -20, y: 250, r: 70, rot: 45, rim: "var(--d3-yellow)" },
      { x: 300, y: -200, r: 60, rot: 20, rim: "var(--d3-green)" },
      { x: -330, y: 210, r: 50, rot: 0, rim: "var(--d3-bone)" },
    ],
  },
  {
    no: "05", space: "Partner Space", formatKey: "partner", light: "var(--d3-green)", maskRot: 20,
    ds: [
      { x: -300, y: 40, r: 140, rot: 0, rim: "var(--d3-green)" },
      { x: -60, y: 40, r: 140, rot: 0, rim: "var(--d3-yellow)" },
      { x: 180, y: 40, r: 140, rot: 0, rim: "var(--d3-green)" },
      { x: 420, y: 40, r: 140, rot: 0, rim: "var(--d3-bone)" },
    ],
  },
];

const maskUrl = (rot: number) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 2 2'><path transform='rotate(${rot})' d='${centeredD(0.9)}' fill='black'/></svg>`;
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
};

export function roomIndexFromProgress(p: number) {
  return Math.min(ROOMS.length - 1, Math.floor(p * ROOMS.length + 0.15));
}

export function Rooms() {
  const ref = useRef<HTMLElement>(null);
  const p = useStageProgress(ref);
  const q = p * ROOMS.length; // 0..5

  return (
    <section ref={ref} className={s.rooms} id="rooms" aria-label="Die Räume von D3" style={{ height: `${ROOMS.length * 100 + 60}vh` }}>
      <div className={s.roomsSticky}>
        {ROOMS.map((room, i) => {
          const f = formats.find((x) => x.key === room.formatKey)!;
          // Eintritt: D-förmige Öffnung wächst. Austritt: wir fahren durch den Raum hindurch.
          const tIn = i === 0 ? 1 : range(q, i - 0.55, i - 0.02);
          const tOut = i === ROOMS.length - 1 ? 0 : range(q, i + 0.45, i + 0.98);
          const local = clamp01(q - i + 0.5);
          const style = {
            "--t": tIn,
            "--out": tOut,
            "--mask": maskUrl(room.maskRot),
            "--light": room.light,
            zIndex: i + 1,
            visibility: tIn <= 0 || tOut >= 1 ? "hidden" : "visible",
          } as CSSProperties;
          return (
            <article key={room.no} className={s.room} style={style} aria-label={`${room.no} ${room.space}`} data-first={i === 0}>
              <div className={s.roomGlow} aria-hidden="true" />
              <svg className={s.roomSvg} viewBox="-600 -450 1200 900" preserveAspectRatio="xMidYMid meet" aria-hidden="true"
                style={{ transform: `translateY(${(0.5 - local) * 30}px)` }}>
                <defs>
                  {room.ds.map((d, j) =>
                    d.photo ? (
                      <clipPath key={j} id={`clip-${i}-${j}`}>
                        <path d={centeredD(d.r)} transform={`translate(${d.x},${d.y}) rotate(${d.rot})`} />
                      </clipPath>
                    ) : null
                  )}
                  <radialGradient id={`rg-${i}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(420)">
                    <stop offset="0" stopColor="#2a2925" />
                    <stop offset="1" stopColor="#0d0d0c" />
                  </radialGradient>
                </defs>
                {room.ds.map((d, j) => {
                  const path = centeredD(d.r);
                  const tr = `translate(${d.x},${d.y}) rotate(${d.rot})`;
                  if (d.photo) {
                    const w = d.r * 2.4;
                    return (
                      <g key={j}>
                        <g clipPath={`url(#clip-${i}-${j})`}>
                          <image href={d.photo} x={d.x - w / 2} y={d.y - w * 0.55} width={w} height={w * 1.22} preserveAspectRatio="xMidYMid slice" className={s.roomPhoto} />
                          <rect x={d.x - w / 2} y={d.y - w * 0.6} width={w} height={w * 1.3} className={s.roomTint} />
                        </g>
                        <path d={path} transform={tr} fill="none" stroke={room.light} strokeWidth="1.4" opacity="0.8" />
                      </g>
                    );
                  }
                  return (
                    <g key={j} transform={tr}>
                      <path d={path} fill={`url(#rg-${i})`} />
                      <path d={path} fill="none" stroke={d.rim} strokeWidth="9" opacity="0.4" style={{ filter: "blur(8px)" }} />
                      <path d={path} fill="none" stroke={d.rim} strokeWidth="1.6" />
                    </g>
                  );
                })}
              </svg>
              <div className={s.roomCopy}>
                <p className={`label ${s.roomNo}`}>
                  <span>{room.no}</span> {room.space}
                </p>
                <h3 className={s.roomTitle}>{f.title}</h3>
                <p className={s.roomLine}>{f.line}</p>
                <p className={s.roomText}>{f.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
