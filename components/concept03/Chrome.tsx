"use client";

import { useEffect, useState } from "react";
import { nav, program, registerLabel } from "@/data/event";
import { D3Mark } from "@/components/shared/D3Mark";
import { ROOMS, roomIndexFromProgress } from "./Rooms";
import s from "./concept03.module.css";

const STOPS = ["Lobby", ...ROOMS.map((r) => r.space), "Programm"];

export function Nav03() {
  return (
    <header className={s.nav}>
      <a href="#lobby" className={s.lockup} aria-label="D3 Deep Dive Day – Lobby">
        <D3Mark className={s.lockupMark} title="" />
        <span aria-hidden="true">D3</span>
      </a>
      <nav className={`label ${s.links}`} aria-label="Hauptnavigation">
        {nav.map((n) => (
          <a key={n.label} href={n.href}>{n.label}</a>
        ))}
      </nav>
      <a href="#anmeldung" className={`label ${s.register}`}>{registerLabel}</a>
    </header>
  );
}

/** Räumliche Orientierung: wo bin ich gerade im Tag? */
export function Hud() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const rooms = document.getElementById("rooms");
      const prog = document.getElementById("programm");
      if (!rooms || !prog) return;
      const vh = window.innerHeight;
      const rr = rooms.getBoundingClientRect();
      if (prog.getBoundingClientRect().top < vh * 0.5) return setActive(STOPS.length - 1);
      if (rr.top > vh * 0.2) return setActive(0);
      const total = rr.height - vh;
      const p = Math.min(1, Math.max(0, -rr.top / total));
      setActive(1 + roomIndexFromProgress(p));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const go = (i: number) => {
    const rooms = document.getElementById("rooms");
    if (i === 0) return window.scrollTo({ top: 0, behavior: "smooth" });
    if (i === STOPS.length - 1) return document.getElementById("programm")?.scrollIntoView({ behavior: "smooth" });
    if (!rooms) return;
    const top = rooms.getBoundingClientRect().top + window.scrollY;
    const total = rooms.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (total * (i - 1 + 0.05)) / ROOMS.length + 2, behavior: "smooth" });
  };

  return (
    <nav className={s.hud} aria-label="Räume">
      <ol>
        {STOPS.map((label, i) => (
          <li key={label} data-active={i === active}>
            <button type="button" onClick={() => go(i)} className="label" aria-current={i === active ? "step" : undefined}>
              <span className={s.hudNo}>{String(i).padStart(2, "0")}</span>
              <span className={s.hudLabel}>{label}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className={`label ${s.hudMobile}`} aria-hidden="true">
        <span>{String(active).padStart(2, "0")}</span> {STOPS[active]}
      </p>
    </nav>
  );
}

export function Program03() {
  return (
    <section className={s.program} id="programm" aria-labelledby="prog03">
      <div className={s.progHead}>
        <p className="label">Programm · Auszug</p>
        <h2 id="prog03">Dein Weg durch den Tag</h2>
      </div>
      <ol className={s.timeline}>
        {program.map((p, i) => (
          <li key={p.time} className={s.stop} style={{ ["--i" as string]: i }}>
            <span className={`label ${s.stopTime}`}>{p.time}</span>
            <span className={s.stopDot} aria-hidden="true" />
            <div>
              <p className={`label ${s.stopRoom}`}>{p.room} · {p.format}</p>
              <h3 className={s.stopTitle}>{p.title}</h3>
              <p className={s.stopDetail}>{p.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className={`label ${s.progNote}`}>Parallel geöffnet: Masterclasses und Networking-Räume. Programm wird laufend ergänzt.</p>
    </section>
  );
}

export function Footer03() {
  return (
    <footer className={s.footer}>
      <span className={s.ahPlate}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/amtshelden.svg" alt="Amtshelden" />
      </span>
      <span className="label">Amtshelden × D3 · Konzept 03 · Interner Prototyp</span>
    </footer>
  );
}
