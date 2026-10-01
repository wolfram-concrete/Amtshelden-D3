"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { event, experience, formats, people, FormatKey } from "@/data/event";
import { useStageProgress } from "@/components/shared/useStageProgress";
import { Shape, ShapeKind } from "./Shapes";
import s from "./concept01.module.css";

type Box = [number, number, number, number]; // x, y, w, h in Raster-Einheiten

type Tile = {
  id: string;
  kind: ShapeKind | "portrait";
  color: string;
  bg: string;
  ink: string;
  img?: string;
  mask?: "circle" | "half";
  a: Box; // Hero (4×4)
  c: Box; // Experience Desktop (6×4)
  m: Box; // Experience Mobil (4×5)
  card?: { no: string; title: string; line: string; text?: string };
  shuffle?: boolean;
};

const Y = "var(--d3-yellow)";
const G = "var(--d3-green)";
const O = "var(--d3-orange)";
const K = "var(--d3-black)";
const B = "var(--d3-bone)";

const f = (k: FormatKey) => formats.find((x) => x.key === k)!;
const card = (no: string, k: FormatKey) => ({ no, title: f(k).title, line: f(k).line, text: f(k).text });

const TILES: Tile[] = [
  { id: "t1", kind: "portrait", img: people.p01, mask: "circle", color: O, bg: O, ink: K, a: [0, 0, 2, 2], c: [3, 0, 2, 2], m: [2, 0, 2, 2],
    card: { no: "06", title: "Speaker", line: "Erste Namen folgen", text: "Menschen aus Behörden, Wissenschaft und Praxis." } },
  { id: "t2", kind: "quarter", color: Y, bg: K, ink: B, a: [2, 0, 1, 1], c: [0, 0, 3, 2], m: [0, 0, 2, 2], card: card("01", "keynotes"), shuffle: true },
  { id: "t3", kind: "burst", color: B, bg: K, ink: B, a: [3, 0, 1, 1], c: [5, 0, 1, 2], m: [2, 2, 2, 1], card: card("03", "masterclasses"), shuffle: true },
  { id: "t4", kind: "half", color: G, bg: B, ink: K, a: [2, 1, 1, 1], c: [0, 2, 2, 2], m: [0, 2, 2, 1], card: card("02", "cases"), shuffle: true },
  { id: "t5", kind: "portrait", img: people.p02, mask: "half", color: Y, bg: Y, ink: K, a: [3, 1, 1, 2], c: [4, 2, 1, 2], m: [0, 4, 1, 1] },
  { id: "t6", kind: "dots", color: Y, bg: K, ink: B, a: [0, 2, 1, 1], c: [2, 2, 2, 1], m: [0, 3, 2, 1], card: card("04", "networking"), shuffle: true },
  { id: "t7", kind: "mark", color: K, bg: Y, ink: K, a: [1, 2, 2, 2], c: [5, 3, 1, 1], m: [2, 4, 2, 1],
    card: { no: "D3", title: "Anmeldung", line: "Startet bald" } },
  { id: "t8", kind: "arrow", color: K, bg: B, ink: K, a: [0, 3, 1, 1], c: [2, 3, 2, 1], m: [2, 3, 2, 1], card: card("05", "partner"), shuffle: true },
  { id: "t9", kind: "diagonal", color: O, bg: K, ink: B, a: [3, 3, 1, 1], c: [5, 2, 1, 1], m: [1, 4, 1, 1], shuffle: true },
];

const SHUFFLE_IDS = TILES.filter((t) => t.shuffle).map((t) => t.id);

type Phase = "a" | "b" | "c";

export function Stage01() {
  const ref = useRef<HTMLElement>(null);
  const p = useStageProgress(ref);
  const phase: Phase = p < 0.14 ? "a" : p < 0.36 ? "b" : "c";

  // Hero-Slots: 1×1-Module tauschen im Hero ihre Plätze (Snap).
  const [slots, setSlots] = useState<Record<string, [number, number]>>(() =>
    Object.fromEntries(TILES.map((t) => [t.id, [t.a[0], t.a[1]]]))
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "a") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setSlots((prev) => {
        const i = Math.floor(Math.random() * SHUFFLE_IDS.length);
        let j = Math.floor(Math.random() * (SHUFFLE_IDS.length - 1));
        if (j >= i) j++;
        const a = SHUFFLE_IDS[i], b = SHUFFLE_IDS[j];
        return { ...prev, [a]: prev[b], [b]: prev[a] };
      });
    }, 2300);
    return () => clearInterval(id);
  }, [phase]);

  const enter = () => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + total * 0.5, behavior: "smooth" });
  };

  return (
    <section ref={ref} className={s.stage} aria-label="D3 Deep Dive Day">
      <div className={s.sticky} data-phase={phase} data-ready={ready}>
        {/* Hero-Copy */}
        <div className={s.copy}>
          <p className={`label ${s.presenter}`}>
            <span className={s.ahDot} aria-hidden="true" />
            {event.presenter}
          </p>
          <h1 className={s.h1}>
            <span className={s.d3}>{event.name}</span>
            <span className={s.long}>{event.longName}</span>
          </h1>
          <p className={s.theme}>
            <mark>{event.theme}</mark>
          </p>
          <p className={s.claim}>{event.claim}</p>
          <div className={s.ctaRow}>
            <button type="button" className={s.cta} onClick={enter}>
              {event.cta} <span aria-hidden="true">→</span>
            </button>
          </div>
          <dl className={`label ${s.meta}`}>
            <div><dt>Datum</dt><dd>{event.date}</dd></div>
            <div><dt>Zeit</dt><dd>{event.time}</dd></div>
            <div><dt>Ort</dt><dd>{event.place}</dd></div>
          </dl>
        </div>

        {/* Experience-Headline */}
        <div className={s.expHead} id="formate">
          <p className={`label ${s.expLabel}`}>Das Format</p>
          <h2 className={s.h2}>
            {experience.headline.map((l, i) => (
              <span key={l} style={{ "--i": i } as CSSProperties}>{l}</span>
            ))}
          </h2>
          <p className={s.expIntro}>{experience.intro}</p>
        </div>

        {/* Fragment-Raster */}
        <div className={s.field}>
          {TILES.map((t, i) => {
            const [sx, sy] = slots[t.id];
            const style = {
              "--ax": sx, "--ay": sy, "--aw": t.a[2], "--ah": t.a[3],
              "--cx": t.c[0], "--cy": t.c[1], "--cw": t.c[2], "--ch": t.c[3],
              "--mx": t.m[0], "--my": t.m[1], "--mw": t.m[2], "--mh": t.m[3],
              "--i": i, "--bg": t.bg, "--ink": t.ink,
            } as CSSProperties;
            return (
              <div key={t.id} className={s.tile} style={style} data-card={!!t.card} data-kind={t.kind} data-dark={t.bg === K}>
                <div className={s.face}>
                  {t.kind === "portrait" ? (
                    <div className={s.portrait} data-mask={t.mask}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.img} alt="" loading="eager" />
                    </div>
                  ) : (
                    <Shape kind={t.kind} color={t.color} className={s.shape} />
                  )}
                  {t.card && (
                    <div className={s.card}>
                      <span className="label">{t.card.no}</span>
                      <div>
                        <h3 className={s.cardTitle}>{t.card.title}</h3>
                        <p className={s.cardLine}>{t.card.line}</p>
                        {t.card.text && <p className={s.cardText}>{t.card.text}</p>}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className={s.scrollHint} aria-hidden="true">
          <span className="label">Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
