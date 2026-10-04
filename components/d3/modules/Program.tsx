// Programm als Tagesreise: Filter, Jetzt/Als Nächstes, Zeitachse mit Räumen, aufklappender Programmpunkt.
// Werte (v) kommen aus D3App.renderVals().
import { Fragment } from 'react';
import type { V, Css } from '../types';

export function ProgramBoard({ v }: { v: V }) {
  return (
    <div className={`mod k-board ${v.P.board.cls ?? ""}`} style={{ left: `calc(${v.P.board.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.board.r ?? ""} * var(--rowh))`, width: `calc(${v.P.board.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.board.h ?? ""} * var(--rowh))`, transitionDelay: v.P.board.d } as Css}>
      <div className="L l-program board">
        <aside className="b-side">
          <h2 className="big b-title">
            Programm
          </h2>
          <p className="p" style={{ fontSize: "15px" } as Css}>
            {v.progNote}
          </p>
          <div className="chips" role="group" aria-label="Format filtern">
            {(v.fFilters || []).map((c: any, cIndex: number) => (
              <Fragment key={cIndex}>
                <button className={`chip sys ${c.on ?? ""}`} onClick={c.pick} aria-pressed={c.pressed}>
                  <span className="ic">
                    <span className={`sh ${c.sh ?? ""}`} />
                  </span>
                  {c.label}
                </button>
              </Fragment>
            ))}
          </div>
          <div className="tchips" role="group" aria-label="Thema filtern">
            {(v.tFilters || []).map((t: any, tIndex: number) => (
              <Fragment key={tIndex}>
                <button className={`tchip sys ${t.on ?? ""}`} onClick={t.pick} aria-pressed={t.pressed}>
                  {t.label}
                </button>
              </Fragment>
            ))}
          </div>
        </aside>
        <div className="b-main jr" ref={v.jrRef}>
          <div className="j-now">
            <div className="jn-clock">
              <span className="lab">
                {v.jn.clockLab}
              </span>
              <b className="jn-time">
                {v.jn.time}
              </b>
              <input className="jn-range" type="range" min="540" max="930" step="5" value={v.jn.val} onChange={v.jn.set} aria-label="Uhrzeit für die Vorschau" />
            </div>
            <button className={`jn-c jn-live ${v.jn.liveCls ?? ""}`} onClick={v.jn.liveGo}>
              <span className="lab">
                <i className="jn-dot" />
                {v.jn.liveLab}
              </span>
              <span className="jn-b">
                <b>
                  {v.jn.liveTitle}
                </b>
                <span className="sys jn-m">
                  {v.jn.liveMeta}
                </span>
              </span>
            </button>
            <button className={`jn-c jn-next ${v.jn.nextCls ?? ""}`} onClick={v.jn.nextGo}>
              <span className="lab">
                {v.jn.nextLab}
              </span>
              <span className="jn-b">
                <b>
                  {v.jn.nextTitle}
                </b>
                <span className="sys jn-m">
                  {v.jn.nextMeta}
                </span>
              </span>
            </button>
          </div>
          <div className="j-body">
            <div className="j-rooms sys" aria-hidden="true">
              <span>
                Main Stage
              </span>
              <span>
                Raum 2
              </span>
              <span>
                Werkstatt
              </span>
              <span>
                Lounge
              </span>
            </div>
            <div className="j-scroll" ref={v.jScrollRef} onWheel={v.jWheel}>
              <div className="j-track">
                <div className="j-axis sys" aria-hidden="true">
                  {(v.jTicks || []).map((tk: any, tkIndex: number) => (
                    <Fragment key={tkIndex}>
                      <span className={`j-tk ${tk.cls ?? ""}`} style={{ left: tk.l } as Css}>
                        {tk.label}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <div className="j-lanes">
                  {(v.jItems || []).map((it: any, itIndex: number) => (
                    <Fragment key={itIndex}>
                      <button className={`jc ${it.cls ?? ""}`} data-id={it.id} style={{ left: it.l, width: it.w, top: it.t, height: it.h, "--i": it.i } as Css} onClick={it.pick} aria-label={it.aria}>
                        <span className="jc-top">
                          <span className="ci">
                            <span className={`sh ${it.sh ?? ""}`} />
                          </span>
                          <span className="sys jc-t">
                            {it.time}
                          </span>
                          {it.live ? (
                            <>
                              <span className="jc-live sys">
                                Läuft
                              </span>
                            </>
                          ) : null}
                        </span>
                        <span className="jc-btm">
                          <span className="sys jc-f">
                            {it.fmtLabel}
                          </span>
                          <b>
                            {it.title}
                          </b>
                          <span className="who">
                            {it.who}
                          </span>
                        </span>
                      </button>
                    </Fragment>
                  ))}
                  <div className="j-nowline" style={{ left: v.jn.l } as Css}>
                    <span className="sys">
                      {v.jn.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`j-exp ${v.ex.cls ?? ""} ${v.ex.tone ?? ""}`} aria-hidden={v.ex.hidden} role="dialog" aria-label={v.ex.title}>
            <div className="jx-in">
              <div className="jx-head">
                <span className="sys">
                  {v.ex.meta}
                </span>
                <button className="xbtn" onClick={v.ex.close} aria-label="Schließen">
                  ×
                </button>
              </div>
              <div className="jx-grid">
                <div className="jx-text">
                  <span className="jx-f">
                    <span className="ci">
                      <span className={`sh ${v.ex.sh ?? ""}`} />
                    </span>
                    <span className="sys">
                      {v.ex.fmt}
                    </span>
                  </span>
                  <h3 className="big sc jx-title">
                    {v.ex.title}
                  </h3>
                  <p className="p jx-desc">
                    {v.ex.desc}
                  </p>
                  {v.ex.topic ? (
                    <>
                      <span className="sys jx-tp">
                        {v.ex.topic}
                      </span>
                    </>
                  ) : null}
                </div>
                <div className="jx-side">
                  {v.ex.img ? (
                    <>
                      <div className={`jx-pt ${v.ex.mask ?? ""}`}>
                        <img src={v.ex.img} alt="" />
                      </div>
                    </>
                  ) : null}
                  <div className="jx-who">
                    <b>
                      {v.ex.who}
                    </b>
                    <span>
                      {v.ex.role}
                    </span>
                  </div>
                  {v.ex.hasSpk ? (
                    <>
                      <button className="lnk sys" onClick={v.ex.toSpk}>
                        {"Zur Speaker*in "}
                        <span>
                          →
                        </span>
                      </button>
                    </>
                  ) : null}
                  <a className="lnk sys" href="https://amtshelden.de" target="_blank" rel="noopener">
                    {v.ex.rel}{" "}
                    <span>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="jx-nav">
                <button className="lnk sys" onClick={v.ex.prev} aria-label="Vorheriger Programmpunkt">
                  ← Vorher
                </button>
                <button className="lnk sys" onClick={v.ex.next} aria-label="Nächster Programmpunkt" style={{ justifyContent: "flex-end" } as Css}>
                  Danach →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
