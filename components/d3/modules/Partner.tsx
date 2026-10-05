// Mitmachen: Kopf mit Bild, Partner, Ausgaben, Über D3, Frag D3 (FAQ ohne KI).
// Werte (v) kommen aus D3App.renderVals().
import { Fragment } from 'react';
import type { V, Css } from '../types';

export function PartnerHead({ v }: { v: V }) {
  return (
    <div className={`mod k-phead2 ${v.P.phead2.cls ?? ""}`} style={{ left: `calc(${v.P.phead2.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.phead2.r ?? ""} * var(--rowh))`, width: `calc(${v.P.phead2.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.phead2.h ?? ""} * var(--rowh))`, transitionDelay: v.P.phead2.d } as Css}>
      <div className="ph">
        <img src="/bildwelt/d3-space.jpg" alt="Teilnehmerin zwischen schwebenden Flächen" style={{ "--fx": "70%", "--fy": "30%", "--z": "1.1", "--ox": "60%", "--oy": "30%" } as Css} />
      </div>
      <span className="geo g-qbl" style={{ background: "var(--d3-yellow)" } as Css} />
      <div className="L l-partner end pad">
        <h2 className="big" style={{ fontSize: "min(12cqh, 6cqw)" } as Css}>
          Mitmachen
        </h2>
        <p className="p" style={{ maxWidth: "min(30ch, 44cqw)", fontSize: "clamp(13px, 3cqw, 15px)" } as Css}>
          {v.partnerNote}
        </p>
      </div>
    </div>
  );
}

export function Logos({ v }: { v: V }) {
  return (
    <div className={`mod k-logos ${v.P.logos.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.logos.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.logos.r ?? ""} * var(--rowh))`, width: `calc(${v.P.logos.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.logos.h ?? ""} * var(--rowh))`, transitionDelay: v.P.logos.d } as Css}>
      <div className="L l-partner logos">
        {(v.logos || []).map((l: any, lIndex: number) => (
          <Fragment key={lIndex}>
            <div className="sys" style={{ color: "var(--d3-mute)", background: l.bg } as Css}>
              {l.label}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function Editions({ v }: { v: V }) {
  return (
    <div className={`mod k-editions ${v.P.editions.cls ?? ""}`} style={{ left: `calc(${v.P.editions.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.editions.r ?? ""} * var(--rowh))`, width: `calc(${v.P.editions.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.editions.h ?? ""} * var(--rowh))`, transitionDelay: v.P.editions.d } as Css}>
      <div className="L l-partner eds">
        <div style={{ background: "var(--d3-yellow)" } as Css}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" } as Css}>
            <svg viewBox="0 0 10.14 10.12" style={{ height: "44px", width: "auto" } as Css} aria-hidden="true">
              <path fill="var(--d3-black)" d="M10.14,5.06C10.14,2.26,7.88,0,5.09,0v2.35c.87.41,1.62,1.1,2.07,2.05,1.01,2.15.08,4.71-2.07,5.72,0,0,0,0,0,0,2.79,0,5.06-2.26,5.06-5.06Z M5.01,5.11s.05.07.08.1v-2.85c-1.12-.53-2.44-.59-3.65-.02.25.53.54,1.15.85,1.81.97-.07,1.97.24,2.72.97Z M0,5.19c1.27,1.23,3.18,3.08,5.09,4.92-.99-2.12-1.98-4.23-2.8-5.98-.84.06-1.65.41-2.28,1.05Z M5.09,5.2v4.91s0,0,0,0c0,0,0,0,0,0,1.33-1.37,1.31-3.54,0-4.91Z" />
            </svg>
            <span className="sys">
              Aktuell
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" } as Css}>
            <span className="sys">
              Ausgabe 01 · [Datum]
            </span>
            <b style={{ fontSize: "clamp(15px, 2.6cqw, 20px)", lineHeight: "1.1", textTransform: "uppercase" } as Css}>
              KI + Transformation
            </b>
          </div>
        </div>
        <div style={{ background: "var(--d3-green)", color: "var(--d3-white)" } as Css}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" } as Css}>
            <svg viewBox="0 0 10.14 10.12" style={{ height: "44px", width: "auto" } as Css} aria-hidden="true">
              <path fill="var(--d3-black)" d="M10.14,5.06C10.14,2.26,7.88,0,5.09,0v2.35c.87.41,1.62,1.1,2.07,2.05,1.01,2.15.08,4.71-2.07,5.72,0,0,0,0,0,0,2.79,0,5.06-2.26,5.06-5.06Z M5.01,5.11s.05.07.08.1v-2.85c-1.12-.53-2.44-.59-3.65-.02.25.53.54,1.15.85,1.81.97-.07,1.97.24,2.72.97Z M0,5.19c1.27,1.23,3.18,3.08,5.09,4.92-.99-2.12-1.98-4.23-2.8-5.98-.84.06-1.65.41-2.28,1.05Z M5.09,5.2v4.91s0,0,0,0c0,0,0,0,0,0,1.33-1.37,1.31-3.54,0-4.91Z" />
            </svg>
            <span className="sys">
              Vormerken
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" } as Css}>
            <span className="sys">
              Ausgabe 02 · [Datum]
            </span>
            <b style={{ fontSize: "clamp(15px, 2.6cqw, 20px)", lineHeight: "1.1", textTransform: "uppercase" } as Css}>
              Kommunikation
            </b>
          </div>
        </div>
        <div style={{ background: "var(--d3-white)" } as Css}>
          <span className="sys">
            Archiv
          </span>
          <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.4" } as Css}>
            Nach jeder Ausgabe wird das Programm zur Mediathek. Cases erscheinen als Artikel auf amtshelden.de.
          </p>
        </div>
      </div>
    </div>
  );
}

export function About({ v }: { v: V }) {
  return (
    <div className={`mod k-about ${v.P.about.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.about.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.about.r ?? ""} * var(--rowh))`, width: `calc(${v.P.about.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.about.h ?? ""} * var(--rowh))`, transitionDelay: v.P.about.d } as Css}>
      <div className="phw">
        <div className="ph">
          <img src="/bildwelt/d3-about.jpg" alt="Teilnehmer im Licht der Bildflächen" style={{ "--fx": "40%", "--fy": "25%", "--z": "1.1", "--ox": "65%", "--oy": "28%" } as Css} />
        </div>
        <span className="geo g-dl" style={{ background: "var(--d3-green)" } as Css} />
      </div>
      <div className="L l-partner fill pad" style={{ gap: "12px" } as Css}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" } as Css}>
          <h2 className="big sc" style={{ fontSize: "clamp(24px, 5.6cqw, 40px)" } as Css}>
            Über den Deep Dive Day
          </h2>
          <p className="p">
            Der Deep Dive Day ist das digitale Konferenzformat von Amtshelden. Jede Ausgabe hat ein Schwerpunktthema: ein Tag, viele Räume, ein Deep Dive.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" } as Css}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" } as Css}>
            <svg viewBox="0 0 108.61 20.95" style={{ height: "22px", width: "auto", flexShrink: "0", color: "var(--d3-black)" } as Css} role="img" aria-label="by Amtshelden">
              <g fill="currentColor">
                <path d="M58.16,8.28v3.48h-1.91V0H20.39c-1.54,0-2.78,1.24-2.78,2.78v9.3c0,1.54,1.25,2.78,2.78,2.78h34.01l7.28,6.1v-12.67h-3.52ZM27.64,11.77l-.79-1.94h-3.67l-.79,1.94h-1.94l3.71-8.74h1.76l3.71,8.74h-2,0ZM39.33,11.77h-1.9v-5.66l-2.44,3.7h-.05l-2.42-3.67v5.62h-1.87V3.08h2.050l2.28,3.67,2.28-3.67h2.05v8.68h.01ZM47.67,4.85h-2.64v6.92h-1.91v-6.92h-2.64v-1.76h7.19v1.76h0ZM54.91,9.2c0,1.72-1.31,2.69-3.18,2.69s-2.64-.46-3.68-1.38l1.13-1.35c.78.64,1.59,1.06,2.59,1.06s1.25-.31,1.25-.82v-.03c0-.49-.3-.73-1.75-1.1-1.75-.45-2.87-.93-2.87-2.65v-.03c0-1.58,1.27-2.61,3.04-2.61s2.34.39,3.22,1.1l-.99,1.44c-.77-.53-1.52-.85-2.26-.85s-1.12.33-1.12.75v.03c0,.57.37.75,1.87,1.14,1.76.46,2.75,1.09,2.75,2.6v.03h0Z" />
                <polygon points="23.86 8.13 26.16 8.13 25.01 5.32 23.86 8.13" />
                <path d="M84.09,4.81h-1.48v5.23h1.48c1.56,0,2.61-1.06,2.61-2.59v-.03c0-1.54-1.06-2.61-2.61-2.61Z" />
                <path d="M105.83,0h-47.67v6.52h3.52v-3.43h1.91v11.77h42.25c1.54,0,2.78-1.24,2.78-2.78V2.78c0-1.54-1.24-2.78-2.78-2.78h0ZM71.96,11.77h-6.6V3.09h6.54v1.7h-4.65v1.76h4.09v1.7h-4.09v1.82h4.71v1.7h0ZM79.58,11.77h-6.23V3.09h1.91v6.94h4.33v1.73h0ZM88.7,7.43c0,2.44-1.88,4.34-4.61,4.34h-3.38V3.09h3.38c2.72,0,4.61,1.87,4.61,4.31v.03ZM96.69,11.77h-6.6V3.09h6.54v1.7h-4.65v1.76h4.09v1.7h-4.09v1.82h4.71v1.7h0ZM105.78,11.77h-1.62l-4.2-5.51v5.51h-1.88V3.09h1.76l4.06,5.34V3.09h1.88v8.68h0Z" />
                <text transform="translate(0 11.75)" style={{ fontFamily: "Gotham, 'Schibsted Grotesk', 'Helvetica Neue', Arial, sans-serif", fontWeight: "700", fontSize: "11.82px" } as Css}>
                  <tspan x="0" y="0" style={{ letterSpacing: "-0.03em" } as Css}>
                    b
                  </tspan>
                  <tspan x="7.68" y="0">
                    y
                  </tspan>
                </text>
              </g>
            </svg>
          </span>
          <a className="sys" href="https://amtshelden.de">
            amtshelden.de ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export function Faq({ v }: { v: V }) {
  return (
    <div className={`mod k-faq faq ${v.P.faq.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.faq.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.faq.r ?? ""} * var(--rowh))`, width: `calc(${v.P.faq.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.faq.h ?? ""} * var(--rowh))`, transitionDelay: v.P.faq.d } as Css}>
      <div className="L l-partner pad fq" style={{ overflow: "auto" } as Css} onWheel={v.stopWheel}>
        <span className="lab">
          Frag Amtshelden
        </span>
        <form className="bot-f" onSubmit={v.bot.submit}>
          <input className="bot-in" type="text" value={v.bot.q} onChange={v.bot.type} placeholder="Frag etwas zum Deep Dive Day …" aria-label="Frage an Amtshelden" autoComplete="off" />
          <button className="bot-go" type="submit" aria-label="Frage senden">
            <svg className="mo-next" viewBox="0 0 100 100" aria-hidden="true">
              <path className="p-x" fillRule="evenodd" d="M0,10c11.94693,0 22.67056,5.23755 30,13.54176l0,52.91649c-7.32944,8.30421 -18.05307,13.54176 -30,13.54176zM30,23.54176l0,-13.54176c11.94693,0 22.67056,5.23755 30,13.54176l0,52.91649c-7.32944,8.30421 -18.05307,13.54176 -30,13.54176v-13.54176c6.22363,-7.05133 10,-16.31378 10,-26.45824c0,-10.14446 -3.77637,-19.40691 -10,-26.45824zM70,50c0,10.14446 -3.77637,19.40691 -10,26.45824v13.54176c22.09139,0 40,-17.90861 40,-40c0,-22.09139 -17.90861,-40 -40,-40v13.54176c6.22363,7.05133 10,16.31378 10,26.45824z" />
            </svg>
          </button>
        </form>
        {v.bot.has ? (
          <>
            <div className={`bot-a ${v.bot.tone ?? ""}`} aria-live="polite">
              <span className="lab">
                {v.bot.asked}
              </span>
              <p>
                {v.bot.a}
              </p>
              {v.bot.act ? (
                <>
                  <button className="lnk sys" onClick={v.bot.actGo}>
                    {v.bot.actLabel}{" "}
                    <span>
                      →
                    </span>
                  </button>
                </>
              ) : null}
            </div>
          </>
        ) : null}
        <div className="bot-chips" role="group" aria-label="Vorschläge">
          {(v.bot.chips || []).map((c: any, cIndex: number) => (
            <Fragment key={cIndex}>
              <button className="tchip sys" onClick={c.ask}>
                {c.label}
              </button>
            </Fragment>
          ))}
        </div>
        <details>
          <summary>
            {"Für wen ist der Deep Dive Day? "}
            <span>
              +
            </span>
          </summary>
          <p>
            Für Menschen aus Behörden und öffentlichen Organisationen.
          </p>
        </details>
        <details>
          <summary>
            {"Wie läuft der Tag ab? "}
            <span>
              +
            </span>
          </summary>
          <p>
            Von 09:00 bis 15:30 wechselst du digital zwischen Keynotes, Vorträgen, Cases, Masterclasses, Networking und Ständen.
          </p>
        </details>
        <details>
          <summary>
            {"Wie melde ich mich an? "}
            <span>
              +
            </span>
          </summary>
          <p>
            {v.faqReg}
          </p>
        </details>
      </div>
    </div>
  );
}
