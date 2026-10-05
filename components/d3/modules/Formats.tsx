// Formate: Kopfzelle und die fünf Format-Kacheln (Zeichen, 3D-Körper bei Hover).
// Werte (v) kommen aus D3App.renderVals().
import { Fragment } from 'react';
import type { V, Css } from '../types';

/** Fünf Format-Kacheln (Home, Formate, Mitmachen) */
export function FormatTiles({ v }: { v: V }) {
  return (
    <>
      {(v.fmts || []).map((f: any, fIndex: number) => (
        <Fragment key={fIndex}>
          <div className={`mod fmt act k-${f.k ?? ""} ${f.dark ?? ""} ${f.P.cls ?? ""} ${f.st0 ?? ""}`} style={{ background: f.bg, left: `calc(${f.P.c ?? ""} * 100% / var(--cols))`, top: `calc(${f.P.r ?? ""} * var(--rowh))`, width: `calc(${f.P.w ?? ""} * 100% / var(--cols))`, height: `calc(${f.P.h ?? ""} * var(--rowh))`, transitionDelay: f.P.d } as Css} onMouseEnter={f.hover}>
            <span className="wipe" />
            <button className="hit" onClick={f.tap} aria-label={f.aria} />
            <span className="sh" style={{ color: f.ink } as Css}>
              <img className="st3d" src={f.still} alt="" aria-hidden="true" />
              {f.is.fk ? (
                <>
                  <svg className="mo mo-keynote" viewBox="0 0 100 100" aria-hidden="true">
                    <path className="p-top" d="M0,50c0,-27.61424 22.38576,-50 50,-50c27.61424,0 50,22.38576 50,50h-20c0,-16.56854 -13.43146,-30 -30,-30c-16.56854,0 -30,13.43146 -30,30z" />
                    <path className="p-bot" d="M16,50c0,18.77768 15.22232,34 34,34c18.77768,0 34,-15.22232 34,-34h-16c0,9.94113 -8.05887,18 -18,18c-9.94113,0 -18,-8.05887 -18,-18z" />
                    <path className="p-kern" d="M32,50c0,-9.94113 8.05887,-18 18,-18c9.94113,0 18,8.05887 18,18z" />
                  </svg>
                </>
              ) : null}
              {f.is.fc ? (
                <>
                  <svg className="mo mo-case" viewBox="0 0 100 100" aria-hidden="true">
                    <path className="p-star" d="M50,0l9.95,25.98l25.41,-11.34l-11.34,25.41l25.98,9.95l-25.98,9.95l11.34,25.41l-25.41,-11.34l-9.95,25.98l-9.95,-25.98l-25.41,11.34l11.34,-25.41l-25.98,-9.95l25.98,-9.95l-11.34,-25.41l25.41,11.34z" />
                    <path className="p-d" d="M50,84v-68c18.77768,0 34,15.22232 34,34c0,18.77768 -15.22232,34 -34,34z" />
                  </svg>
                </>
              ) : null}
              {f.is.fm ? (
                <>
                  <svg className="mo mo-master" viewBox="0 0 100 100" aria-hidden="true">
                    <path className="p-ol" d="M0,33.5c36.45079,0 66,29.54921 66,66h-19c0,-25.95738 -21.04262,-47 -47,-47z" />
                    <path className="p-il" d="M0,65.5c18.77768,0 34,15.22232 34,34h-16c0,-9.94113 -8.05887,-18 -18,-18z" />
                    <path className="p-or" d="M100,33.5c-36.45079,0 -66,29.54921 -66,66h19c0,-25.95738 21.04262,-47 47,-47z" />
                    <path className="p-ir" d="M100,65.5c-18.77768,0 -34,15.22232 -34,34h16c0,-9.94113 8.05887,-18 18,-18z" />
                    <path className="p-cross" d="M50,56.41698c4.41417,5.11825 8.05579,10.92157 10.74376,17.22884c-4.89468,7.41695 -7.74376,16.30285 -7.74376,25.85418h-6c0,-9.55133 -2.84909,-18.43722 -7.74376,-25.85418c2.68797,-6.30728 6.3296,-12.11059 10.74376,-17.22884z" />
                    <g className="p-dots">
                      <path className="p-d1" d="M43,7.5c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z" />
                      <path className="p-d2" d="M30.5,20c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z" />
                      <path className="p-d3" d="M55.5,20c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z" />
                      <path className="p-d4" d="M43,32.5c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z" />
                    </g>
                  </svg>
                </>
              ) : null}
              {f.is.fn ? (
                <>
                  <svg className="mo mo-net" viewBox="0 0 100 100" aria-hidden="true">
                    <path className="p-a" d="M0,50c0,17.67311 14.32689,32 32,32c17.67311,0 32,-14.32689 32,-32c0,-17.67311 -14.32689,-32 -32,-32c-17.67311,0 -32,14.32689 -32,32z" />
                    <path className="p-b" d="M36,50c0,17.67311 14.32689,32 32,32c17.67311,0 32,-14.32689 32,-32c0,-17.67311 -14.32689,-32 -32,-32c-17.67311,0 -32,14.32689 -32,32z" />
                    <path className="p-lens" d="M64,50c0,10.9987 -5.54892,20.70137 -14,26.46128c-8.45108,-5.75991 -14,-15.46258 -14,-26.46128c0,-10.9987 5.54892,-20.70137 14,-26.46128c8.45108,5.75991 14,15.46258 14,26.46128z" />
                  </svg>
                </>
              ) : null}
              {f.is.fs ? (
                <>
                  <svg className="mo mo-expo" viewBox="0 0 100 100" aria-hidden="true">
                    <path className="p-bowl" d="M100,49.5c0,11.38476 -3.80499,21.88082 -10.21265,30.28585c-4.85334,-17.41119 -20.82851,-30.18585 -39.78735,-30.18585c-18.95884,0 -34.93401,12.77466 -39.78735,30.18585c-6.40766,-8.40503 -10.21265,-18.90109 -10.21265,-30.28585z" />
                    <path className="p-dome" d="M50,68.8c13.46316,0 24.38999,10.85935 24.49917,24.29676c-7.24004,4.07728 -15.59798,6.40324 -24.49917,6.40324c-8.90119,0 -17.25913,-2.32596 -24.49917,-6.40324c0.10919,-13.4374 11.03601,-24.29676 24.49917,-24.29676z" />
                    <path className="p-head" d="M27.4,22.6c0,12.48164 10.11836,22.6 22.6,22.6c12.48164,0 22.6,-10.11836 22.6,-22.6c0,-12.48164 -10.11836,-22.6 -22.6,-22.6c-12.48164,0 -22.6,10.11836 -22.6,22.6z" />
                  </svg>
                </>
              ) : null}
            </span>
            <div className="L l-home tB pad">
              <span className="lab">
                {f.short}
              </span>
              <div className="btm">
                {f.time ? (
                  <>
                    <span className="t-time hide-s">
                      {f.time}
                    </span>
                  </>
                ) : null}
                <span className="lab">
                  {f.verb}
                </span>
              </div>
            </div>
            <div className="L l-explore tB pad">
              <span className="lab">
                {f.short}
              </span>
              <div className="btm">
                <span className="big sc" style={{ fontSize: "clamp(20px, min(13cqw, 15cqh), 64px)" } as Css}>
                  {f.name}
                </span>
                <p className="p hide-s">
                  {f.desc}
                </p>
              </div>
            </div>
            <div className="L l-partner tC pad">
              <span className="lab">
                Stände
              </span>
              <div className="ctaRow">
                <span className="t-mod">
                  Aussteller werden
                </span>
                <span className="s-arrow-w">
                  <svg className="mo-next" viewBox="0 0 100 100" aria-hidden="true">
                    <path className="p-x" fillRule="evenodd" d="M0,10c11.94693,0 22.67056,5.23755 30,13.54176l0,52.91649c-7.32944,8.30421 -18.05307,13.54176 -30,13.54176zM30,23.54176l0,-13.54176c11.94693,0 22.67056,5.23755 30,13.54176l0,52.91649c-7.32944,8.30421 -18.05307,13.54176 -30,13.54176v-13.54176c6.22363,-7.05133 10,-16.31378 10,-26.45824c0,-10.14446 -3.77637,-19.40691 -10,-26.45824zM70,50c0,10.14446 -3.77637,19.40691 -10,26.45824v13.54176c22.09139,0 40,-17.90861 40,-40c0,-22.09139 -17.90861,-40 -40,-40v13.54176c6.22363,7.05133 10,16.31378 10,26.45824z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
}

export function ExploreHead({ v }: { v: V }) {
  return (
    <div className={`mod k-xhead ${v.P.xhead.cls ?? ""}`} style={{ left: `calc(${v.P.xhead.c ?? ""} * 100% / var(--cols))`, top: `calc(${v.P.xhead.r ?? ""} * var(--rowh))`, width: `calc(${v.P.xhead.w ?? ""} * 100% / var(--cols))`, height: `calc(${v.P.xhead.h ?? ""} * var(--rowh))`, transitionDelay: v.P.xhead.d } as Css}>
      <div className="ph">
        <img src="/bildwelt/d3-connection.jpg" alt="Teilnehmerin mit zugeschalteten Gesprächspartnern" style={{ "--fx": "34%", "--fy": "32%", "--z": "1.05", "--ox": "60%", "--oy": "35%" } as Css} />
      </div>
      <span className="geo g-qbl" style={{ background: "var(--d3-bg)" } as Css} />
      <div className="L l-explore end pad">
        <h2 className="big sc" style={{ fontSize: "min(10cqh, 7.4cqw)" } as Css}>
          Ein Tag.
          <br />
          Viele Räume.
          <br />
          Ein Deep Dive.
        </h2>
      </div>
    </div>
  );
}
