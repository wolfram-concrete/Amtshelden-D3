// Teilnahme: Kopf, Anmeldung, häufige Fragen.
// Werte (v) kommen aus D3App.renderVals().
import type { V, Css } from '../types';

export function JoinHead({ v }: { v: V }) {
  return (
    <div className={`mod k-jhead ${v.P.jhead.cls ?? ""}`} style={{ background: "var(--d3-yellow)", left: `calc(${v.P.jhead.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.jhead.r ?? ""} * var(--rowh))`, width: `calc(${v.P.jhead.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.jhead.h ?? ""} * var(--rowh))`, transitionDelay: v.P.jhead.d } as Css}>
      <div className="L l-join tA pad">
        <span className="lab">
          Teilnahme
        </span>
        <div className="btm">
          <h2 className="big sc" style={{ fontSize: "clamp(26px, min(8cqw, 18cqh), 52px)" } as Css}>
            Dabei sein? Kostet dich nichts.
          </h2>
          <p className="p hide-s" style={{ maxWidth: "46ch" } as Css}>
            Für Beschäftigte aus Behörden und öffentlichen Einrichtungen. Am 14. April 2027 bist du von 9:00 bis 15:30 digital dabei und stellst dir deinen Tag selbst zusammen.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Registration({ v }: { v: V }) {
  return (
    <div className={`mod k-reg ${v.P.reg.cls ?? ""}`} style={{ background: "var(--d3-black)", color: "var(--d3-bg)", left: `calc(${v.P.reg.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.reg.r ?? ""} * var(--rowh))`, width: `calc(${v.P.reg.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.reg.h ?? ""} * var(--rowh))`, transitionDelay: v.P.reg.d } as Css}>
      <div className="L l-join tA pad">
        <span className="lab">
          Anmeldung
        </span>
        <div className="btm">
          <b className="gt">
            {v.reg.title}
          </b>
          <p className="gp">
            {v.reg.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ v }: { v: V }) {
  return (
    <div className={`mod k-faq faq ${v.P.faq.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.faq.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.faq.r ?? ""} * var(--rowh))`, width: `calc(${v.P.faq.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.faq.h ?? ""} * var(--rowh))`, transitionDelay: v.P.faq.d } as Css}>
      <div className="L l-join pad fq" style={{ overflow: "auto" } as Css} onWheel={v.stopWheel}>
        <span className="lab">
          Häufige Fragen
        </span>
        <details>
          <summary>
            {"Für wen ist die D3? "}
            <span>
              +
            </span>
          </summary>
          <p>
            Für Beschäftigte aus Behörden und öffentlichen Einrichtungen, die sich mit KI, Digitalisierung und Veränderung in ihrer Verwaltung beschäftigen.
          </p>
        </details>
        <details>
          <summary>
            {"Was kostet die Teilnahme? "}
            <span>
              +
            </span>
          </summary>
          <p>
            Nichts. Für Beschäftigte aus Behörden und öffentlichen Einrichtungen ist die Teilnahme kostenfrei.
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
        <details>
          <summary>
            {"Brauche ich Software? "}
            <span>
              +
            </span>
          </summary>
          <p>
            Nein. Du brauchst einen aktuellen Browser und eine stabile Verbindung. Kamera und Mikrofon sind für den Austausch hilfreich, aber kein Muss.
          </p>
        </details>
        <details>
          <summary>
            {"Was läuft parallel? "}
            <span>
              +
            </span>
          </summary>
          <p>
            Zwei Tracks: Fachvorträge und Praxis-Cases in Track 1, Masterclasses in Track 2. Dazu Austauschräume und die Messe-Area. Du wechselst, wann du willst.
          </p>
        </details>
        <details>
          <summary>
            {"Gibt es Aufzeichnungen? "}
            <span>
              +
            </span>
          </summary>
          <p>
            [Antwort folgt.] Praxis-Cases erscheinen nach dem Event als Artikel auf amtshelden.de.
          </p>
        </details>
        <details>
          <summary>
            {"Wie werde ich Partner? "}
            <span>
              +
            </span>
          </summary>
          <p>
            Über das Formular „Partner werden“ im Bereich Partner. Wir schicken euch alle Informationen.
          </p>
        </details>
      </div>
    </div>
  );
}
