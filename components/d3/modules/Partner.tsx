// Partner: Kopf mit Bild, Medienpartner, „Partner werden“ (Anfrage per E-Mail an hallo@amtshelden.de) und die Medienpartnerseite.
// Stand 23.11.2026: Das Logo-Raster [Partner 1–6] ist aus allen Layouts genommen; Logos bleibt für später erhalten.
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
        <h2 className="big sc" style={{ fontSize: "min(7cqh, 5.4cqw)", maxWidth: "11ch" } as Css}>
          Lösungen kennenlernen. Direkt nachfragen.
        </h2>
        <p className="p hide-s" style={{ maxWidth: "min(34ch, 46cqw)", fontSize: "clamp(12px, 2.6cqw, 14px)" } as Css}>
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
    <div className={`mod act k-media ${v.P.media.cls ?? ""}`} style={{ background: "var(--d3-bg-2)", left: `calc(${v.P.media.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.media.r ?? ""} * var(--rowh))`, width: `calc(${v.P.media.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.media.h ?? ""} * var(--rowh))`, transitionDelay: v.P.media.d } as Css}>
      <button className="hit" onClick={v.nav.media} aria-label="Medienpartner Innovative Verwaltung" />
      <div className="L l-all media pad">
        <span className="ivw ivw-logo">
          <img src="/partner/innovative-verwaltung.png" alt="Innovative Verwaltung" />
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
        <div className="pf-cols">
        <div className="pf-a">
        <h2 className="big sc pf-t">
          Partner der D3 werden
        </h2>
        <p className="p">
          Ihr bietet Lösungen für Behörden rund um KI und Transformation? Bei der D3 könnt ihr anhand konkreter Anwendungsfälle zeigen, was sie im Verwaltungsalltag leisten, und mit Menschen aus Behörden ins Gespräch kommen. Meldet euch bei uns, wenn ihr als Partner dabei sein möchtet. Wir besprechen mit euch die Möglichkeiten.
        </p>
        </div>
        <div className="pf-b">
        <p className="p pf-when">
          <b>
            Partneranfragen sind schon jetzt möglich.
          </b>
          {" Die Anmeldung für Teilnehmende öffnet im Januar 2027."}
        </p>
        <div className="pf-mail">
          <a className="pf-go" href={v.pf.mailto}>
            Partnerschaft per E-Mail anfragen
          </a>
          <span className="pf-addr">
            <span className="sys">
              {v.partnerMail}
            </span>
            <button type="button" className="sys pf-copy" onClick={v.pf.copy}>
              {v.pf.copyLabel}
            </button>
          </span>
        </div>
        <p className="pf-note sys">
          Unverbindlich anfragen. Wir melden uns bei euch.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export function MediaLogo({ v }: { v: V }) {
  return (
    <div className={`mod k-mlogo ${v.P.mlogo.cls ?? ""}`} style={{ background: "var(--d3-white)", left: `calc(${v.P.mlogo.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.mlogo.r ?? ""} * var(--rowh))`, width: `calc(${v.P.mlogo.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.mlogo.h ?? ""} * var(--rowh))`, transitionDelay: v.P.mlogo.d } as Css}>
      <div className="L l-media media pad">
        <span className="ivw ivw-logo">
          <img src="/partner/innovative-verwaltung.png" alt="Innovative Verwaltung" />
        </span>
        <span className="lab">
          Medienpartner
        </span>
      </div>
    </div>
  );
}

export function MediaText({ v }: { v: V }) {
  return (
    <div className={`mod k-mtext ${v.P.mtext.cls ?? ""}`} style={{ background: "var(--d3-bg)", left: `calc(${v.P.mtext.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.mtext.r ?? ""} * var(--rowh))`, width: `calc(${v.P.mtext.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.mtext.h ?? ""} * var(--rowh))`, transitionDelay: v.P.mtext.d } as Css}>
      <div className="L l-media pad idea" style={{ overflow: "auto" } as Css} onWheel={v.stopWheel}>
        <span className="lab">
          Medienpartner
        </span>
        <h2 className="big sc" style={{ fontSize: "clamp(28px, min(7cqw, 12cqh), 56px)" } as Css}>
          Innovative Verwaltung
        </h2>
        <p className="p">
          Innovative Verwaltung gehört zu den etablierten Fachmagazinen für Verwaltungsmanagement und begleitet seit fast 50 Jahren Entwicklungen im öffentlichen Sektor.
        </p>
        <p className="p">
          Das Magazin verbindet wissenschaftliche Perspektiven mit Erfahrungen aus der Verwaltungspraxis. Es beschäftigt sich unter anderem mit Digitalisierung, Staatsmodernisierung, Führung, Organisationsentwicklung und neuen Arbeitsweisen in Behörden.
        </p>
        <p className="p">
          Im Mittelpunkt stehen konkrete Konzepte, Erfahrungen und Beispiele, von denen Verwaltungen lernen können.
        </p>
        <p className="p">
          Innovative Verwaltung erscheint gedruckt und digital und richtet sich an Führungskräfte und Beschäftigte in Bund, Ländern, Kommunen und öffentlichen Einrichtungen.
        </p>
        <a className="ah-link sys" href="https://www.meinfachwissen.de/magazine/management/innovative-verwaltung/" target="_blank" rel="noopener">
          Innovative Verwaltung kennenlernen ↗
        </a>
      </div>
    </div>
  );
}
