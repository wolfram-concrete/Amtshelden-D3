// Home-Zellen: Marke, Thema, Aussage, Porträt-Zelle, Ausgaben, Datum, Aktionen.
// Werte (v) kommen aus D3App.renderVals().
import type { V, Css } from '../types';

export function D3Cell({ v }: { v: V }) {
  return (
    <div className={`mod dark k-d3 ${v.P.d3.cls ?? ""}`} style={{ left: `calc(${v.P.d3.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.d3.r ?? ""} * var(--rowh))`, width: `calc(${v.P.d3.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.d3.h ?? ""} * var(--rowh))`, transitionDelay: v.P.d3.d } as Css}>
      <div className="L l-home end pad">
        <h1 className="big" style={{ fontSize: "min(70cqh, 56cqw)", letterSpacing: "-0.06em", lineHeight: "0.86", display: "inline-flex", isolation: "isolate" } as Css} aria-label="D3">
          <span aria-hidden="true">
            D
          </span>
          <span aria-hidden="true" style={{ marginLeft: "-0.22em", mixBlendMode: "difference", color: "#EEEDE4" } as Css}>
            3
          </span>
        </h1>
      </div>
    </div>
  );
}

export function Brand({ v }: { v: V }) {
  return (
    <div className={`mod k-brand ${v.P.brand.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.brand.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.brand.r ?? ""} * var(--rowh))`, width: `calc(${v.P.brand.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.brand.h ?? ""} * var(--rowh))`, transitionDelay: v.P.brand.d } as Css}>
      <div className="L l-home tA pad">
        <svg viewBox="0 0 108.61 20.95" style={{ height: "26px", width: "auto", flexShrink: "0", color: "var(--d3-black)" } as Css} role="img" aria-label="by Amtshelden">
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
        <span className="big" style={{ fontSize: "min(40cqh, 13cqw)", lineHeight: "0.9" } as Css}>
          Deep
          <br />
          Dive Day
        </span>
      </div>
    </div>
  );
}

export function Theme({ v }: { v: V }) {
  return (
    <div className={`mod k-theme ${v.P.theme.cls ?? ""}`} style={{ background: "var(--d3-green)", color: "var(--d3-white)", left: `calc(${v.P.theme.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.theme.r ?? ""} * var(--rowh))`, width: `calc(${v.P.theme.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.theme.h ?? ""} * var(--rowh))`, transitionDelay: v.P.theme.d } as Css}>
      <div className="L l-home tA pad">
        <span className="lab">
          D3 · Ausgabe 01 · 4 Räume · 8 Themen
        </span>
        <span className="big" style={{ fontSize: "min(40cqh, 6cqw)", letterSpacing: "-0.025em", lineHeight: "1" } as Css}>
          KI + Transformation
        </span>
      </div>
    </div>
  );
}

export function Why({ v }: { v: V }) {
  return (
    <div className={`mod k-why why ${v.P.why.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.why.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.why.r ?? ""} * var(--rowh))`, width: `calc(${v.P.why.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.why.h ?? ""} * var(--rowh))`, transitionDelay: v.P.why.d } as Css}>
      <div className="L l-home tA pad">
        <span className="lab">
          Was ist D3?
        </span>
        <div className="btm" style={{ gap: "12px" } as Css}>
          <p className="ah-claim">
            {"Die digitale Konferenz "}
            <span>
              für Behörden
            </span>
            , die neue Wege gehen.
          </p>
          <p className="ah-sub hide-s">
            Ein Tag im Browser – Keynotes, Cases, Masterclasses und Austausch.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero({ v }: { v: V }) {
  return (
    <div className={`mod k-hero on-${v.heroPlace ?? ""} ${v.P.hero.cls ?? ""}`} style={{ background: "var(--d3-yellow)", left: `calc(${v.P.hero.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.hero.r ?? ""} * var(--rowh))`, width: `calc(${v.P.hero.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.hero.h ?? ""} * var(--rowh))`, transitionDelay: v.P.hero.d } as Css}>
      <span className="wipe" />
      <div className="msk hp-fk">
        <img src="/bildwelt/d3-moment.jpg" alt="Teilnehmerin im gelben Bogen" style={{ "--fx": "50%", "--fy": "34%", "--z": "1.3", "--ox": "50%", "--oy": "36%" } as Css} />
      </div>
      <div className="msk hp-fc">
        <img src="/bildwelt/d3-portrait.jpg" alt="Porträt einer Teilnehmerin" style={{ "--fx": "49%", "--fy": "22%", "--z": "1.25", "--ox": "50%", "--oy": "26%" } as Css} />
      </div>
      <div className="msk hp-fm">
        <img src="/bildwelt/d3-focus.jpg" alt="Teilnehmerin mit Laptop" style={{ "--fx": "21%", "--fy": "20%", "--z": "1.2", "--ox": "50%", "--oy": "24%" } as Css} />
      </div>
      <div className="msk hp-fn">
        <img src="/bildwelt/d3-exchange.jpg" alt="Zwei Menschen im Gespräch" style={{ "--fx": "51%", "--fy": "26%", "--z": "1.1", "--ox": "50%", "--oy": "30%" } as Css} />
      </div>
      <div className="msk hp-fs">
        <img src="/bildwelt/d3-explorer.jpg" alt="Teilnehmer auf dem Weg durch die Räume" style={{ "--fx": "48%", "--fy": "28%", "--z": "1.3", "--ox": "50%", "--oy": "30%" } as Css} />
      </div>
      <span className="geo g-db" style={{ background: "var(--d3-yellow)" } as Css} />
      <div className="L l-all tD pad" style={{ justifyContent: "flex-end" } as Css}>
        <div className="btm">
          <span className="lab">
            {v.heroMeta}
          </span>
          <b style={{ fontSize: "clamp(14px, 6cqw, 18px)", lineHeight: "1.1" } as Css}>
            {v.heroVerb}
          </b>
        </div>
      </div>
    </div>
  );
}

export function NextEdition({ v }: { v: V }) {
  return (
    <div className={`mod k-next act ${v.P.next.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.next.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.next.r ?? ""} * var(--rowh))`, width: `calc(${v.P.next.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.next.h ?? ""} * var(--rowh))`, transitionDelay: v.P.next.d } as Css}>
      <span className="wipe" />
      <button className="hit" onClick={v.nav.partner} aria-label="Nächste Ausgabe ansehen" />
      <div className="L l-home tA pad">
        <span className="lab">
          Als Nächstes · [Datum]
        </span>
        <b style={{ fontSize: "clamp(14px, 6.5cqw, 18px)", lineHeight: "1.15" } as Css}>
          D3 · 02 Kommunikation
        </b>
      </div>
    </div>
  );
}

export function DateCell({ v }: { v: V }) {
  return (
    <div className={`mod k-date ${v.P.date.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.date.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.date.r ?? ""} * var(--rowh))`, width: `calc(${v.P.date.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.date.h ?? ""} * var(--rowh))`, transitionDelay: v.P.date.d } as Css}>
      <div className="L l-all pad">
        <div className="dataRow">
          <div>
            <span className="lab">
              Datum
            </span>
            <b>
              [TT.MM.2027]
            </b>
          </div>
          <div>
            <span className="lab">
              Zeit
            </span>
            <b>
              09:00–15:30
            </b>
          </div>
          <div>
            <span className="lab">
              Ort
            </span>
            <b>
              Digital
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Cta({ v }: { v: V }) {
  return (
    <div className={`mod act k-cta ${v.P.cta.cls ?? ""}`} style={{ background: "var(--d3-yellow)", left: `calc(${v.P.cta.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.cta.r ?? ""} * var(--rowh))`, width: `calc(${v.P.cta.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.cta.h ?? ""} * var(--rowh))`, transitionDelay: v.P.cta.d } as Css}>
      <button className="hit" onClick={v.cta.go} aria-label={v.cta.label} />
      <div className="L l-all tC pad">
        <span className="lab">
          {v.cta.note}
        </span>
        <div className="ctaRow">
          <span className="t-mod">
            {v.cta.label}
          </span>
          <span className="s-arrow-w">
            <svg className="mo-next" viewBox="0 0 100 100" aria-hidden="true">
              <path className="p-a" d="M0,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
              <path className="p-b" d="M30,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
              <path className="p-c" d="M60,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function Cta2({ v }: { v: V }) {
  return (
    <div className={`mod dark act k-cta2 ${v.P.cta2.cls ?? ""}`} style={{ left: `calc(${v.P.cta2.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.cta2.r ?? ""} * var(--rowh))`, width: `calc(${v.P.cta2.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.cta2.h ?? ""} * var(--rowh))`, transitionDelay: v.P.cta2.d } as Css}>
      <button className="hit" onClick={v.cta2.go} aria-label={v.cta2.label} />
      <div className="L l-all tC pad">
        <span className="lab">
          {v.cta2.note}
        </span>
        <div className="ctaRow">
          <span className="t-mod">
            {v.cta2.label}
          </span>
          <span className="s-arrow-w">
            <svg className="mo-next" viewBox="0 0 100 100" aria-hidden="true">
              <path className="p-a" d="M0,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
              <path className="p-b" d="M30,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
              <path className="p-c" d="M60,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hint({ v }: { v: V }) {
  return (
    <div className={`mod act k-hint ${v.P.hint.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.hint.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.hint.r ?? ""} * var(--rowh))`, width: `calc(${v.P.hint.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.hint.h ?? ""} * var(--rowh))`, transitionDelay: v.P.hint.d } as Css}>
      <button className="hit" onClick={v.hint.go} aria-label={v.hint.label} />
      <div className="L l-all tC pad">
        <span className="lab">
          {"Weiter · "}{v.stNo}{" / 05"}
        </span>
        <div className="ctaRow">
          <span className="t-mod">
            {v.hint.label}
          </span>
          <span className="s-arrow-w">
            <svg className="mo-next" viewBox="0 0 100 100" aria-hidden="true">
              <path className="p-a" d="M0,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
              <path className="p-b" d="M30,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
              <path className="p-c" d="M60,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
