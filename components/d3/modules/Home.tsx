// Start: Marke, Claim, Datum, Bildwelt, Was ist die D3, drei Gründe, Partner, nächste Ausgabe, Anmeldung. Die Gründe erscheinen auch auf Teilnahme.
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
          Amtshelden Deep Dive Day · KI + Transformation
        </span>
        <h1 className="ah-claim ah-big">
          {"Die digitale Konferenz für alle, die in Behörden lieber "}
          <span>
            machen
          </span>
          {" als reden."}
        </h1>
      </div>
    </div>
  );
}

export function Why({ v }: { v: V }) {
  return (
    <div className={`mod act k-why why ${v.P.why.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.why.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.why.r ?? ""} * var(--rowh))`, width: `calc(${v.P.why.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.why.h ?? ""} * var(--rowh))`, transitionDelay: v.P.why.d } as Css}>
      <button className="hit" onClick={v.nav.explore} aria-label="Mehr über die D3" />
      <div className="L l-home tA pad">
        <span className="lab">
          Was ist die D3?
        </span>
        <div className="btm" style={{ gap: "12px" } as Css}>
          <p className="ah-claim" style={{ fontSize: "clamp(18px, min(5.4cqw, 11cqh), 30px)" } as Css}>
            Ein Tag. Viele Ideen. Echte Erfahrungen.
          </p>
          <p className="ah-sub hide-s">
            Menschen aus Behörden treffen auf Fachleute, Praxisbeispiele und andere mit ähnlichen Aufgaben. Du erfährst, was funktioniert, fragst direkt nach und probierst Neues aus.
          </p>
          <span className="ah-link sys">
            Mehr über die D3 →
          </span>
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
            Ausgabe 01
          </span>
          <b style={{ fontSize: "clamp(15px, 6.4cqw, 20px)", lineHeight: "1.1" } as Css}>
            KI + Transformation
          </b>
        </div>
      </div>
    </div>
  );
}

export function NextEdition({ v }: { v: V }) {
  return (
    <div className={`mod k-next ${v.P.next.cls ?? ""}`} style={{ background: "var(--d3-green)", color: "var(--d3-white)", left: `calc(${v.P.next.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.next.r ?? ""} * var(--rowh))`, width: `calc(${v.P.next.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.next.h ?? ""} * var(--rowh))`, transitionDelay: v.P.next.d } as Css}>
      <div className="L l-home tA pad">
        <span className="lab">
          Als Nächstes
        </span>
        <div className="btm">
          <b style={{ fontSize: "clamp(15px, min(6cqw, 15cqh), 22px)", lineHeight: "1.15" } as Css}>
            Die nächste D3 kommt im Herbst 2027.
          </b>
          <span className="lab">
            Thema: Kommunikation
          </span>
        </div>
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
              14. April 2027
            </b>
          </div>
          <div>
            <span className="lab">
              Zeit
            </span>
            <b>
              9:00–15:30
            </b>
          </div>
          <div>
            <span className="lab">
              Teilnahme
            </span>
            <b>
              {"Digital & kostenfrei"}
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

export function Hint({ v }: { v: V }) {
  return (
    <div className={`mod act k-hint ${v.P.hint.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.hint.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.hint.r ?? ""} * var(--rowh))`, width: `calc(${v.P.hint.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.hint.h ?? ""} * var(--rowh))`, transitionDelay: v.P.hint.d } as Css}>
      <button className="hit" onClick={v.hint.go} aria-label={v.hint.label} />
      <div className="L l-all tC pad">
        <span className="lab">
          {"Weiter · "}{v.stNo}{" / 06"}
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

export function Reason1({ v }: { v: V }) {
  return (
    <div className={`mod act k-g1 gr ${v.P.g1.cls ?? ""}`} style={{ background: "var(--d3-black)", color: "var(--d3-bg)", left: `calc(${v.P.g1.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.g1.r ?? ""} * var(--rowh))`, width: `calc(${v.P.g1.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.g1.h ?? ""} * var(--rowh))`, transitionDelay: v.P.g1.d } as Css}>
      <button className="hit" onClick={v.nav.join} aria-label="Aus der Praxis. Für die Praxis. – zur Teilnahme" />
      <span className="gi">
        <svg className="mo mf" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50,0l6.35485,16.59287c-2.05869,-0.38923 -4.18299,-0.59287 -6.35485,-0.59287v68c2.17186,0 4.29616,-0.20364 6.35485,-0.59287l-6.35485,16.59287l-9.95,-25.98l-25.41,11.34l11.34,-25.41l-25.98,-9.95l25.98,-9.95l-11.34,-25.41l25.41,11.34zM85.36,14.64l-7.24518,16.23457c-2.40598,-3.53 -5.4594,-6.58341 -8.98939,-8.98939zM100,50l-16.59287,6.35485c0.38923,-2.05869 0.59287,-4.18299 0.59287,-6.35485c0,-2.17186 -0.20364,-4.29616 -0.59287,-6.35485zM85.36,85.36l-16.23457,-7.24518c3.53,-2.40598 6.58341,-5.4594 8.98939,-8.98939z" style={{ fill: "var(--d3-black)" } as Css} />
          <path d="M59.95,74.02l9.17543,4.09482c-3.78026,2.57655 -8.10707,4.41061 -12.77058,5.29231zM74.02,59.95l9.38713,-3.59515c-0.88171,4.66351 -2.71576,8.99032 -5.29231,12.77058zM74.02,40.05l4.09482,-9.17543c2.57655,3.78026 4.41061,8.10707 5.29231,12.77058zM59.95,25.98l-3.59515,-9.38713c4.66351,0.88171 8.99032,2.71576 12.77058,5.29231z" style={{ fill: "var(--d3-black)" } as Css} />
        </svg>
      </span>
      <div className="L l-home tA pad">
        <span className="lab">
          Grund 01
        </span>
        <div className="btm">
          <b className="gt">
            Aus der Praxis. Für die Praxis.
          </b>
          <p className="gp hide-s">
            Echte Projekte aus Behörden und die Menschen dahinter.
          </p>
        </div>
      </div>
      <div className="L l-join tA pad">
        <span className="lab">
          Grund 01
        </span>
        <div className="btm">
          <b className="gt">
            Aus der Praxis. Für die Praxis.
          </b>
          <p className="gp">
            Du erfährst, was andere Behörden umgesetzt haben: mit Erfahrungen, Ergebnissen und der Möglichkeit, direkt mit den Beteiligten zu sprechen.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Reason2({ v }: { v: V }) {
  return (
    <div className={`mod act k-g2 gr ${v.P.g2.cls ?? ""}`} style={{ background: "var(--d3-white)", color: "var(--d3-black)", left: `calc(${v.P.g2.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.g2.r ?? ""} * var(--rowh))`, width: `calc(${v.P.g2.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.g2.h ?? ""} * var(--rowh))`, transitionDelay: v.P.g2.d } as Css}>
      <button className="hit" onClick={v.nav.join} aria-label="Wissen, das du anwenden kannst. – zur Teilnahme" />
      <span className="gi">
        <svg className="mo mf" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M0,33.5c19.98585,0 37.89689,8.88336 50,22.91698c-4.41417,5.11825 -8.05579,10.92157 -10.74376,17.22884c-8.40745,-12.73989 -22.85018,-21.14582 -39.25624,-21.14582zM66,99.5h-13c0,-9.55133 2.84909,-18.43722 7.74376,-25.85418c3.38373,7.93986 5.25624,16.67835 5.25624,25.85418z" style={{ fill: "var(--d3-black)" } as Css} />
          <path d="M0,65.5c18.77768,0 34,15.22232 34,34h-16c0,-9.94113 -8.05887,-18 -18,-18z" style={{ fill: "var(--d3-black)" } as Css} />
          <path d="M100,52.5c-16.40605,0 -30.84879,8.40593 -39.25624,21.14582c-2.68797,-6.30728 -6.3296,-12.11059 -10.74376,-17.22884c12.10311,-14.03362 30.01415,-22.91698 50,-22.91698zM34,99.5c0,-9.17583 1.8725,-17.91431 5.25624,-25.85418c4.89468,7.41695 7.74376,16.30285 7.74376,25.85418z" style={{ fill: "var(--d3-black)" } as Css} />
          <path d="M100,65.5c-18.77768,0 -34,15.22232 -34,34h16c0,-9.94113 8.05887,-18 18,-18z" style={{ fill: "var(--d3-black)" } as Css} />
          <path d="M43,7.5c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z" style={{ fill: "var(--d3-green)" } as Css} />
          <path d="M30.5,20c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z" style={{ fill: "var(--d3-black)" } as Css} />
          <path d="M55.5,20c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z" style={{ fill: "var(--d3-black)" } as Css} />
          <path d="M43,32.5c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z" style={{ fill: "var(--d3-black)" } as Css} />
        </svg>
      </span>
      <div className="L l-home tA pad">
        <span className="lab">
          Grund 02
        </span>
        <div className="btm">
          <b className="gt">
            Wissen, das du anwenden kannst.
          </b>
          <p className="gp hide-s">
            Fachleute teilen ihr Wissen. In Masterclasses wirst du selbst aktiv.
          </p>
        </div>
      </div>
      <div className="L l-join tA pad">
        <span className="lab">
          Grund 02
        </span>
        <div className="btm">
          <b className="gt">
            Wissen, das du anwenden kannst.
          </b>
          <p className="gp">
            Fachleute vermitteln Wissen zu konkreten Herausforderungen. In den Masterclasses wirst du selbst aktiv und nimmst Anregungen für deinen Arbeitsalltag mit.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Reason3({ v }: { v: V }) {
  return (
    <div className={`mod act k-g3 gr ${v.P.g3.cls ?? ""}`} style={{ background: "var(--d3-green)", color: "var(--d3-white)", left: `calc(${v.P.g3.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.g3.r ?? ""} * var(--rowh))`, width: `calc(${v.P.g3.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.g3.h ?? ""} * var(--rowh))`, transitionDelay: v.P.g3.d } as Css}>
      <button className="hit" onClick={v.nav.join} aria-label="Digital dabei. Persönlich im Austausch. – zur Teilnahme" />
      <span className="gi">
        <svg className="mo mf" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M32,18c6.67442,0 12.87157,2.04339 18,5.53872c-8.45108,5.75991 -14,15.46258 -14,26.46128c0,10.9987 5.54892,20.70137 14,26.46128c-5.12843,3.49532 -11.32558,5.53872 -18,5.53872c-17.67311,0 -32,-14.32689 -32,-32c0,-17.67311 14.32689,-32 32,-32z" style={{ fill: "var(--d3-white)" } as Css} />
          <path d="M68,18c17.67311,0 32,14.32689 32,32c0,17.67311 -14.32689,32 -32,32c-6.67442,0 -12.87157,-2.04339 -18,-5.53872c8.45108,-5.75991 14,-15.46258 14,-26.46128c0,-10.9987 -5.54892,-20.70137 -14,-26.46128c5.12843,-3.49532 11.32558,-5.53872 18,-5.53872z" style={{ fill: "var(--d3-white)" } as Css} />
        </svg>
      </span>
      <div className="L l-home tA pad">
        <span className="lab">
          Grund 03
        </span>
        <div className="btm">
          <b className="gt">
            Digital dabei. Persönlich im Austausch.
          </b>
          <p className="gp hide-s">
            Sprich mit anderen Behörden und stell deine Fragen direkt.
          </p>
        </div>
      </div>
      <div className="L l-join tA pad">
        <span className="lab">
          Grund 03
        </span>
        <div className="btm">
          <b className="gt">
            Digital dabei. Persönlich im Austausch.
          </b>
          <p className="gp">
            Neben den Sessions gibt es eigene Austauschräume. Du sprichst mit Menschen aus anderen Behörden, stellst Fragen und knüpfst Kontakte.
          </p>
        </div>
      </div>
    </div>
  );
}

export function PartnerTeaser({ v }: { v: V }) {
  return (
    <div className={`mod act k-ptile ${v.P.ptile.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.ptile.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.ptile.r ?? ""} * var(--rowh))`, width: `calc(${v.P.ptile.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.ptile.h ?? ""} * var(--rowh))`, transitionDelay: v.P.ptile.d } as Css}>
      <button className="hit" onClick={v.nav.partner} aria-label="Zu den Partnern" />
      <div className="L l-home tC pad">
        <span className="lab">
          Partner
        </span>
        <div className="ctaRow">
          <b className="pt-t">
            Lösungen kennenlernen
          </b>
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
