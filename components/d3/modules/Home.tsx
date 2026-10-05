// Home-Zellen: Marke, Thema, Aussage, Porträt-Zelle, Ausgaben, Datum, Aktionen.
// Werte (v) kommen aus D3App.renderVals().
import type { V, Css } from '../types';

export function D3Cell({ v }: { v: V }) {
  return (
    <div className={`mod k-d3 k-ah ${v.P.d3.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.d3.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.d3.r ?? ""} * var(--rowh))`, width: `calc(${v.P.d3.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.d3.h ?? ""} * var(--rowh))`, transitionDelay: v.P.d3.d } as Css}>
      <div className="L l-home tA pad">
        <span className="lab">
          Die digitale Konferenz von
        </span>
        <svg className="ah-logo" viewBox="0 0 1386.5 319.2" style={{ width: "100%", height: "auto", display: "block" } as Css} role="img" aria-label="Amtshelden">
          <g className="ah-a" fill="#0D9D69">
            <path d="M617.8,126.2v53.1h-29.1V0H42.3C18.9,0,0,18.9,0,42.3v141.7c0,23.4,19,42.3,42.3,42.3h518.2l111,92.9V126.2h-53.7ZM152.7,179.3l-12.1-29.6h-55.9l-12.1,29.6h-29.6L99.6,46.2h26.8l56.6,133.1h-30.4.1ZM330.9,179.3h-28.9v-86.3l-37.2,56.4h-.8l-36.8-55.9v85.7h-28.5V47h31.3l34.7,55.9,34.7-55.9h31.3v132.2l.2.1h0ZM457.9,73.9h-40.2v105.4h-29.1v-105.4h-40.2v-26.8h109.5v26.8h0ZM568.2,140.2c0,26.2-20,41-48.5,41s-40.2-7-56.1-21.1l17.2-20.6c11.9,9.8,24.3,16.1,39.5,16.1s19.1-4.7,19.1-12.5v-.4c0-7.4-4.5-11.1-26.6-16.8-26.6-6.8-43.8-14.2-43.8-40.4v-.4c0-24,19.3-39.8,46.3-39.8s35.7,6,49.1,16.8l-15.1,21.9c-11.7-8.1-23.2-13-34.4-13s-17,5.1-17,11.5v.4c0,8.7,5.7,11.5,28.5,17.4,26.8,7,41.9,16.6,41.9,39.6v.4h0l-.1-.1h0Z" />
            <polygon points="95.1 123.9 130.2 123.9 112.7 81.1 95.1 123.9" />
          </g>
          <g className="ah-b" fill="#333333">
            <path d="M1012.9,73.3h-22.5v79.7h22.5c23.8,0,39.8-16.1,39.8-39.5v-.4c0-23.4-16.1-39.8-39.8-39.8Z" />
            <path d="M1344.1,0h-726.3v99.4h53.6v-52.3h29.1v179.3h643.7c23.4,0,42.3-18.9,42.3-42.3V42.4c0-23.4-18.9-42.3-42.3-42.3h0l-.1-.1h0ZM828.1,179.3h-100.6V47.1h99.7v25.9h-70.8v26.8h62.3v25.9h-62.3v27.8h71.7v25.9h0v-.1h0ZM944.2,179.3h-95V47.1h29.1v105.7h65.9v26.5ZM1083.1,113.2c0,37.2-28.7,66.1-70.2,66.1h-51.5V47.1h51.5c41.5,0,70.2,28.5,70.2,65.7v.4ZM1204.8,179.3h-100.6V47.1h99.7v25.9h-70.8v26.8h62.3v25.9h-62.3v27.8h71.7v25.9h0v-.1h0ZM1343.4,179.3h-24.7l-64-84v84h-28.7V47.1h26.8l61.9,81.4V47.1h28.7v132.2h0Z" />
          </g>
        </svg>
        <div className="btm ah-ddd">
          <span className="big">
            Deep
            <br />
            Dive Day
          </span>
          <span className="ah-fz">
            <span className="fzw">
              <svg className="fz" viewBox="0 0 10.14 10.12" style={{ height: "100%", width: "auto", display: "block" } as Css} aria-hidden="true">
                <path fill="currentColor" d="M10.14,5.06C10.14,2.26,7.88,0,5.09,0v2.35c.87.41,1.62,1.1,2.07,2.05,1.01,2.15.08,4.71-2.07,5.72,0,0,0,0,0,0,2.79,0,5.06-2.26,5.06-5.06Z M5.01,5.11s.05.07.08.1v-2.85c-1.12-.53-2.44-.59-3.65-.02.25.53.54,1.15.85,1.81.97-.07,1.97.24,2.72.97Z M0,5.19c1.27,1.23,3.18,3.08,5.09,4.92-.99-2.12-1.98-4.23-2.8-5.98-.84.06-1.65.41-2.28,1.05Z M5.09,5.2v4.91s0,0,0,0c0,0,0,0,0,0,1.33-1.37,1.31-3.54,0-4.91Z" />
              </svg>
            </span>
            <span className="lab">
              Ausgabe 01
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function Brand({ v }: { v: V }) {
  return (
    <div className={`mod k-brand ${v.P.brand.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.brand.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.brand.r ?? ""} * var(--rowh))`, width: `calc(${v.P.brand.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.brand.h ?? ""} * var(--rowh))`, transitionDelay: v.P.brand.d } as Css}>
      <div className="L l-home tA pad">
        <span className="lab">
          Amtshelden Deep Dive Day · Ausgabe 01
        </span>
        <p className="ah-claim ah-big">
          {"Die digitale Konferenz von "}
          <span>
            Amtshelden
          </span>
          {" für Behörden, die neue Wege gehen."}
        </p>
      </div>
    </div>
  );
}

export function Theme({ v }: { v: V }) {
  return (
    <div className={`mod k-theme ${v.P.theme.cls ?? ""}`} style={{ background: "var(--d3-black)", color: "var(--d3-bg)", left: `calc(${v.P.theme.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.theme.r ?? ""} * var(--rowh))`, width: `calc(${v.P.theme.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.theme.h ?? ""} * var(--rowh))`, transitionDelay: v.P.theme.d } as Css}>
      <div className="L l-home tA pad">
        <span className="lab">
          Thema der Ausgabe 01 · 4 Räume · 8 Themen
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
          Was ist der Deep Dive Day?
        </span>
        <div className="btm" style={{ gap: "12px" } as Css}>
          <p className="ah-claim" style={{ fontSize: "clamp(18px, min(5.4cqw, 11cqh), 30px)" } as Css}>
            Ein Tag im Browser. Keynotes, Cases, Masterclasses und Austausch.
          </p>
          <p className="ah-sub hide-s">
            Das Konferenzformat von Amtshelden. Jede Ausgabe hat ein Schwerpunktthema – die erste: KI und Transformation.
          </p>
          <a className="ah-link sys" href="https://amtshelden.de" target="_blank" rel="noopener">
            amtshelden.de ↗
          </a>
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
        <img src="/bildwelt/d3-closeup-a.jpg" alt="Teilnehmerin, nah, zwischen leuchtenden Bildflächen" style={{ "--fx": "39%", "--fy": "25%", "--z": "1", "--ox": "50%", "--oy": "20%" } as Css} />
      </div>
      <div className="msk hp-fc">
        <img src="/bildwelt/d3-portrait.jpg" alt="Teilnehmer, umgeben von zugeschalteten Gesprächspartnern" style={{ "--fx": "64%", "--fy": "30%", "--z": "1.06", "--ox": "100%", "--oy": "20%" } as Css} />
      </div>
      <div className="msk hp-fm">
        <img src="/bildwelt/d3-closeup-b.jpg" alt="Teilnehmerin, nah, hinter einer schwebenden Bildfläche" style={{ "--fx": "27%", "--fy": "25%", "--z": "1", "--ox": "50%", "--oy": "20%" } as Css} />
      </div>
      <div className="msk hp-fn">
        <img src="/bildwelt/d3-exchange.jpg" alt="Zwei Menschen im Gespräch" style={{ "--fx": "100%", "--fy": "30%", "--z": "1", "--ox": "50%", "--oy": "20%" } as Css} />
      </div>
      <div className="msk hp-fs">
        <img src="/bildwelt/d3-explorer.jpg" alt="Teilnehmer zwischen Licht und Flächen" style={{ "--fx": "52%", "--fy": "30%", "--z": "1", "--ox": "50%", "--oy": "20%" } as Css} />
      </div>
      <span className="geo g-qbl" style={{ background: "var(--d3-yellow)" } as Css} />
      <div className="L l-all tD pad" style={{ justifyContent: "flex-end" } as Css}>
        <div className="btm">
          <span className="lab">
            {v.heroTime}
            <br />
            {v.heroFmt}
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
          Ausgabe 02 · Kommunikation
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
              <path className="p-x" fillRule="evenodd" d="M0,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40zM30,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40zM60,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
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
              <path className="p-x" fillRule="evenodd" d="M0,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40zM30,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40zM60,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
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
              <path className="p-x" fillRule="evenodd" d="M0,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40zM30,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40zM60,10c22.09139,0 40,17.90861 40,40c0,22.09139 -17.90861,40 -40,40z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
