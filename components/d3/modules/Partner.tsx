// Partner: Kopf mit Bild, Partner-Übersicht, Medienpartner, Formular „Partner werden“.
// Werte (v) kommen aus D3App.renderVals().
import { Fragment } from 'react';
import type { V, Css } from '../types';

export function PartnerHead({ v }: { v: V }) {
  return (
    <div className={`mod k-phead2 ${v.P.phead2.cls ?? ""}`} style={{ left: `calc(${v.P.phead2.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.phead2.r ?? ""} * var(--rowh))`, width: `calc(${v.P.phead2.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.phead2.h ?? ""} * var(--rowh))`, transitionDelay: v.P.phead2.d } as Css}>
      <div className="ph">
        <img src="/bildwelt/d3-about.jpg" alt="Teilnehmer im Licht der Bildflächen" style={{ "--fx": "0%", "--fy": "26%", "--z": "1.42", "--ox": "0%", "--oy": "18%" } as Css} />
      </div>
      <span className="geo g-qbl" style={{ background: "var(--d3-yellow)" } as Css} />
      <div className="L l-partner end pad">
        <span className="lab">
          Partner
        </span>
        <h2 className="big sc" style={{ fontSize: "min(8.4cqh, 6cqw)", maxWidth: "11ch" } as Css}>
          Lösungen kennenlernen. Direkt nachfragen.
        </h2>
        <p className="p hide-s" style={{ maxWidth: "min(30ch, 44cqw)", fontSize: "clamp(13px, 3cqw, 15px)" } as Css}>
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

export function MediaPartner({ v }: { v: V }) {
  return (
    <div className={`mod k-media ${v.P.media.cls ?? ""}`} style={{ background: "var(--d3-bg-2)", left: `calc(${v.P.media.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.media.r ?? ""} * var(--rowh))`, width: `calc(${v.P.media.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.media.h ?? ""} * var(--rowh))`, transitionDelay: v.P.media.d } as Css}>
      <div className="L l-all media pad">
        <span className="ivw sys">
          [Logo Innovative Verwaltung]
        </span>
        <span className="lab">
          Medienpartner
        </span>
      </div>
    </div>
  );
}

export function PartnerForm({ v }: { v: V }) {
  return (
    <div className={`mod k-pform ${v.P.pform.cls ?? ""}`} style={{ background: "var(--d3-yellow)", left: `calc(${v.P.pform.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.pform.r ?? ""} * var(--rowh))`, width: `calc(${v.P.pform.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.pform.h ?? ""} * var(--rowh))`, transitionDelay: v.P.pform.d } as Css}>
      <div className="L l-partner pad pf" style={{ overflow: "auto" } as Css} onWheel={v.stopWheel}>
        <span className="lab">
          Partner werden
        </span>
        <h2 className="big sc pf-t">
          Partner der D3 werden
        </h2>
        <p className="p">
          Ihr entwickelt Lösungen für die öffentliche Verwaltung? Zeigt beim Deep Dive Day, wie sie in der Praxis eingesetzt werden, und kommt mit Menschen aus Behörden ins Gespräch.
        </p>
        {v.pf.sent ? (
          <>
            <p className="pf-ok">
              Danke! Wir melden uns mit allen Informationen.
            </p>
          </>
        ) : null}
        {v.pf.open ? (
          <>
            <form className="pf-f" onSubmit={v.pf.submit}>
              <input type="text" placeholder="Name" aria-label="Name" required />
              <input type="text" placeholder="Unternehmen" aria-label="Unternehmen" required />
              <input type="email" placeholder="E-Mail" aria-label="E-Mail" required />
              <textarea placeholder="Nachricht (optional)" aria-label="Nachricht" />
              <button className="pf-go" type="submit">
                Informationen anfordern
              </button>
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
}
