import { nav, program, registerLabel } from "@/data/event";
import { D3Mark } from "@/components/shared/D3Mark";
import { Shape, ShapeKind } from "./Shapes";
import s from "./concept01.module.css";

export function Nav01() {
  return (
    <header className={s.nav}>
      <a href="#top" className={s.lockup} aria-label="D3 Deep Dive Day – Start">
        <D3Mark className={s.lockupMark} title="" />
        <span aria-hidden="true">D3</span>
      </a>
      <nav className={`label ${s.links}`} aria-label="Hauptnavigation">
        {nav.map((n) => (
          <a key={n.label} href={n.href}>{n.label}</a>
        ))}
      </nav>
      <div className={s.navRight}>
        <a href="#anmeldung" className={`label ${s.register}`}>{registerLabel}</a>
        <button type="button" className={`label ${s.menu}`} aria-label="Menü öffnen">Menü</button>
      </div>
    </header>
  );
}

const ICON: Record<string, ShapeKind> = {
  Networking: "dots",
  Opening: "mark",
  Keynote: "quarter",
  Case: "half",
  Masterclass: "burst",
};

export function Program01() {
  return (
    <section className={s.program} id="programm" aria-labelledby="prog01">
      <div className={s.progHead}>
        <div>
          <p className="label">Programm · Auszug</p>
          <h2 id="prog01">Der Tag<br />im Raster</h2>
        </div>
        <p className="label">Wird laufend ergänzt</p>
      </div>
      <ol className={s.rows}>
        {program.map((p) => (
          <li key={p.time} className={s.row}>
            <span className={s.time}>{p.time}</span>
            <div>
              <h3 className={s.rowTitle}>{p.title}</h3>
              <p className={s.rowDetail}>{p.detail}</p>
            </div>
            <span className={`label ${s.chip}`}>
              <Shape kind={ICON[p.format] ?? "circle"} color="var(--d3-black)" className={s.chipIcon} />
              {p.format}
            </span>
            <span className={`label ${s.room}`}>{p.room}</span>
          </li>
        ))}
      </ol>
      <div className={s.progFoot}>
        <p className="label">Parallel laufen Masterclasses und Networking-Räume.</p>
        <a href="#programm" className={s.progLink}>Ganzes Programm →</a>
      </div>
    </section>
  );
}

export function Footer01() {
  return (
    <footer className={s.footer}>
      <span className={s.ahPlate}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/amtshelden.svg" alt="Amtshelden" />
      </span>
      <span className="label">Amtshelden × D3 · Konzept 01 · Interner Prototyp</span>
    </footer>
  );
}
