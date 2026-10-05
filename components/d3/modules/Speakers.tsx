// Speaker*innen: Kopf mit Bild, sechs Porträt-Zellen, Detail.
// Werte (v) kommen aus D3App.renderVals().
import type { V, Css } from '../types';

export function Speaker1({ v }: { v: V }) {
  return (
    <div className={`mod k-pc spk ${v.P.pc.cls ?? ""} ${v.spkSel[0] ?? ""}`} style={{ background: "var(--d3-yellow)", left: `calc(${v.P.pc.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.pc.r ?? ""} * var(--rowh))`, width: `calc(${v.P.pc.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.pc.h ?? ""} * var(--rowh))`, transitionDelay: v.P.pc.d } as Css}>
      <button className="hit" onClick={v.spkPick[0]} aria-label="Speaker*in Keynote" />
      <div className="pt m-circle">
        <img src="/people/p02.jpg" alt="Platzhalter-Porträt" />
      </div>
      <div className="nm">
        <b>
          [Name Nachname]
        </b>
        <span className="sys">
          Keynote · 09:40
        </span>
      </div>
    </div>
  );
}

export function Speaker2({ v }: { v: V }) {
  return (
    <div className={`mod k-s2 spk ${v.P.s2.cls ?? ""} ${v.spkSel[1] ?? ""}`} style={{ background: "var(--d3-bg-2)", left: `calc(${v.P.s2.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.s2.r ?? ""} * var(--rowh))`, width: `calc(${v.P.s2.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.s2.h ?? ""} * var(--rowh))`, transitionDelay: v.P.s2.d } as Css}>
      <button className="hit" onClick={v.spkPick[1]} aria-label="Speaker*in Case" />
      <div className="pt m-sq">
        <img src="/people/p03.jpg" alt="Platzhalter-Porträt" />
      </div>
      <span className="badge s-burst" style={{ position: "absolute", background: "var(--d3-black)" } as Css} />
      <div className="nm">
        <b>
          [Name Nachname]
        </b>
        <span className="sys">
          Case · 10:30
        </span>
      </div>
    </div>
  );
}

export function Speaker3({ v }: { v: V }) {
  return (
    <div className={`mod k-s3 spk ${v.P.s3.cls ?? ""} ${v.spkSel[2] ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.s3.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.s3.r ?? ""} * var(--rowh))`, width: `calc(${v.P.s3.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.s3.h ?? ""} * var(--rowh))`, transitionDelay: v.P.s3.d } as Css}>
      <button className="hit" onClick={v.spkPick[2]} aria-label="Speaker*in Masterclass" />
      <div className="pt m-cut">
        <img src="/people/p01.jpg" alt="Platzhalter-Porträt" />
      </div>
      <div className="nm">
        <b>
          [Name Nachname]
        </b>
        <span className="sys">
          Masterclass · 10:30
        </span>
      </div>
    </div>
  );
}

export function Speaker4({ v }: { v: V }) {
  return (
    <div className={`mod k-s4 spk ${v.P.s4.cls ?? ""} ${v.spkSel[3] ?? ""}`} style={{ background: "var(--d3-green)", left: `calc(${v.P.s4.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.s4.r ?? ""} * var(--rowh))`, width: `calc(${v.P.s4.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.s4.h ?? ""} * var(--rowh))`, transitionDelay: v.P.s4.d } as Css}>
      <button className="hit" onClick={v.spkPick[3]} aria-label="Speaker*in Panel" />
      <div className="pt m-sq">
        <img src="/people/p07.jpg" alt="Platzhalter-Porträt" />
      </div>
      <span className="badge s-burst" style={{ position: "absolute", background: "var(--d3-black)" } as Css} />
      <div className="nm">
        <b>
          [Name Nachname]
        </b>
        <span className="sys">
          Panel · 11:15
        </span>
      </div>
    </div>
  );
}

export function Speaker5({ v }: { v: V }) {
  return (
    <div className={`mod k-s5 spk ${v.P.s5.cls ?? ""} ${v.spkSel[4] ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.s5.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.s5.r ?? ""} * var(--rowh))`, width: `calc(${v.P.s5.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.s5.h ?? ""} * var(--rowh))`, transitionDelay: v.P.s5.d } as Css}>
      <button className="hit" onClick={v.spkPick[4]} aria-label="Speaker*in Fachvortrag" />
      <div className="pt m-circle">
        <img src="/people/p04.jpg" alt="Platzhalter-Porträt" />
      </div>
      <div className="nm">
        <b>
          [Name Nachname]
        </b>
        <span className="sys">
          Vortrag · 10:30
        </span>
      </div>
    </div>
  );
}

export function Speaker6({ v }: { v: V }) {
  return (
    <div className={`mod k-s6 spk ${v.P.s6.cls ?? ""} ${v.spkSel[5] ?? ""}`} style={{ background: "var(--d3-green)", color: "var(--d3-white)", left: `calc(${v.P.s6.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.s6.r ?? ""} * var(--rowh))`, width: `calc(${v.P.s6.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.s6.h ?? ""} * var(--rowh))`, transitionDelay: v.P.s6.d } as Css}>
      <button className="hit" onClick={v.spkPick[5]} aria-label="Speaker*in Abschluss-Keynote" />
      <div className="pt m-circle">
        <img src="/people/p05.jpg" alt="Platzhalter-Porträt" />
      </div>
      <div className="nm">
        <b>
          [Name Nachname]
        </b>
        <span className="sys">
          Keynote · 15:00
        </span>
      </div>
    </div>
  );
}

export function SpeakerHead({ v }: { v: V }) {
  return (
    <div className={`mod k-spkhead ${v.P.spkhead.cls ?? ""}`} style={{ left: `calc(${v.P.spkhead.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.spkhead.r ?? ""} * var(--rowh))`, width: `calc(${v.P.spkhead.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.spkhead.h ?? ""} * var(--rowh))`, transitionDelay: v.P.spkhead.d } as Css}>
      <div className="ph">
        <img src="/bildwelt/d3-speaker.jpg" alt="Speaker im Gespräch mit dem Publikum" style={{ "--fx": "0%", "--fy": "26%", "--z": "1.14", "--ox": "0%", "--oy": "18%" } as Css} />
      </div>
      <span className="geo g-qbl" style={{ background: "var(--d3-black)" } as Css} />
      <div className="L l-speaker end pad" style={{ color: "var(--d3-bg)" } as Css}>
        <h2 className="big" style={{ fontSize: "min(11cqh, 7.2cqw)" } as Css}>
          Speaker*innen
        </h2>
        <p className="p hide-s" style={{ maxWidth: "min(24ch, 52cqw)", fontSize: "clamp(13px, 3.4cqw, 15px)", color: "#CFCBE0" } as Css}>
          {v.spkNote}
        </p>
      </div>
    </div>
  );
}

export function SpeakerDetail({ v }: { v: V }) {
  return (
    <div className={`mod dark k-sdetail ${v.P.sdetail.cls ?? ""}`} style={{ left: `calc(${v.P.sdetail.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.sdetail.r ?? ""} * var(--rowh))`, width: `calc(${v.P.sdetail.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.sdetail.h ?? ""} * var(--rowh))`, transitionDelay: v.P.sdetail.d } as Css}>
      <div className="L l-speaker fill pad" style={{ gap: "12px", overflow: "auto" } as Css}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" } as Css}>
          <span className="sys" style={{ color: "var(--d3-mute)" } as Css}>
            {v.sd.no}{" / 06"}
          </span>
          <span className="big" style={{ fontSize: "clamp(24px, 8cqw, 40px)" } as Css}>
            [Name Nachname]
          </span>
          <span style={{ fontSize: "15px", color: "var(--d3-mute)" } as Css}>
            [Funktion · Organisation]
          </span>
        </div>
        <p className="p hide-s" style={{ fontSize: "15px" } as Css}>
          [Kurzbio in zwei Sätzen.]
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" } as Css}>
          <button className="lnk sys" onClick={v.sd.toProg} style={{ borderColor: "var(--d3-bg)" } as Css}>
            {v.sd.session}{" "}
            <span>
              →
            </span>
          </button>
          <a className="lnk sys hide-s" href="https://amtshelden.de" style={{ borderColor: "var(--d3-bg)" } as Css}>
            {"Interview auf amtshelden.de "}
            <span>
              ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
