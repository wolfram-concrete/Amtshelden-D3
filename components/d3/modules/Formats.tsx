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
              {f.is.fk ? (
                <>
                  <svg className="mo mf" viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M0,50c0,-27.61424 22.38576,-50 50,-50c27.61424,0 50,22.38576 50,50h-20c0,-16.56854 -13.43146,-30 -30,-30c-16.56854,0 -30,13.43146 -30,30z" style={{ fill: "var(--d3-bg)" } as Css} />
                    <path d="M16,50c0,18.77768 15.22232,34 34,34c18.77768,0 34,-15.22232 34,-34h-16c0,9.94113 -8.05887,18 -18,18c-9.94113,0 -18,-8.05887 -18,-18z" style={{ fill: "var(--d3-bg)" } as Css} />
                    <path d="M32,50c0,-9.94113 8.05887,-18 18,-18c9.94113,0 18,8.05887 18,18z" style={{ fill: "var(--d3-green)" } as Css} />
                  </svg>
                </>
              ) : null}
              {f.is.fc ? (
                <>
                  <svg className="mo mf" viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M50,0l6.35485,16.59287c-2.05869,-0.38923 -4.18299,-0.59287 -6.35485,-0.59287v68c2.17186,0 4.29616,-0.20364 6.35485,-0.59287l-6.35485,16.59287l-9.95,-25.98l-25.41,11.34l11.34,-25.41l-25.98,-9.95l25.98,-9.95l-11.34,-25.41l25.41,11.34zM85.36,14.64l-7.24518,16.23457c-2.40598,-3.53 -5.4594,-6.58341 -8.98939,-8.98939zM100,50l-16.59287,6.35485c0.38923,-2.05869 0.59287,-4.18299 0.59287,-6.35485c0,-2.17186 -0.20364,-4.29616 -0.59287,-6.35485zM85.36,85.36l-16.23457,-7.24518c3.53,-2.40598 6.58341,-5.4594 8.98939,-8.98939z" style={{ fill: "var(--d3-black)" } as Css} />
                    <path d="M59.95,74.02l9.17543,4.09482c-3.78026,2.57655 -8.10707,4.41061 -12.77058,5.29231zM74.02,59.95l9.38713,-3.59515c-0.88171,4.66351 -2.71576,8.99032 -5.29231,12.77058zM74.02,40.05l4.09482,-9.17543c2.57655,3.78026 4.41061,8.10707 5.29231,12.77058zM59.95,25.98l-3.59515,-9.38713c4.66351,0.88171 8.99032,2.71576 12.77058,5.29231z" style={{ fill: "var(--d3-black)" } as Css} />
                  </svg>
                </>
              ) : null}
              {f.is.fm ? (
                <>
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
                </>
              ) : null}
              {f.is.fn ? (
                <>
                  <svg className="mo mf" viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M32,18c6.67442,0 12.87157,2.04339 18,5.53872c-8.45108,5.75991 -14,15.46258 -14,26.46128c0,10.9987 5.54892,20.70137 14,26.46128c-5.12843,3.49532 -11.32558,5.53872 -18,5.53872c-17.67311,0 -32,-14.32689 -32,-32c0,-17.67311 14.32689,-32 32,-32z" style={{ fill: "var(--d3-white)" } as Css} />
                    <path d="M68,18c17.67311,0 32,14.32689 32,32c0,17.67311 -14.32689,32 -32,32c-6.67442,0 -12.87157,-2.04339 -18,-5.53872c8.45108,-5.75991 14,-15.46258 14,-26.46128c0,-10.9987 -5.54892,-20.70137 -14,-26.46128c5.12843,-3.49532 11.32558,-5.53872 18,-5.53872z" style={{ fill: "var(--d3-white)" } as Css} />
                  </svg>
                </>
              ) : null}
              {f.is.fs ? (
                <>
                  <svg className="mo mf" viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M100,49.5c0,11.38476 -3.80499,21.88082 -10.21265,30.28585c-4.85334,-17.41119 -20.82851,-30.18585 -39.78735,-30.18585c-18.95884,0 -34.93401,12.77466 -39.78735,30.18585c-6.40766,-8.40503 -10.21265,-18.90109 -10.21265,-30.28585z" style={{ fill: "var(--d3-bg)" } as Css} />
                    <path d="M50,68.8c13.46316,0 24.38999,10.85935 24.49917,24.29676c-7.24004,4.07728 -15.59798,6.40324 -24.49917,6.40324c-8.90119,0 -17.25913,-2.32596 -24.49917,-6.40324c0.10919,-13.4374 11.03601,-24.29676 24.49917,-24.29676z" style={{ fill: "var(--d3-bg)" } as Css} />
                    <path d="M27.4,22.6c0,12.48164 10.11836,22.6 22.6,22.6c12.48164,0 22.6,-10.11836 22.6,-22.6c0,-12.48164 -10.11836,-22.6 -22.6,-22.6c-12.48164,0 -22.6,10.11836 -22.6,22.6z" style={{ fill: "var(--d3-bg)" } as Css} />
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
        <img src="/bildwelt/d3-space.jpg" alt="Teilnehmerin zwischen schwebenden Flächen" style={{ "--fx": "0%", "--fy": "30%", "--z": "1.04", "--ox": "0%", "--oy": "22%" } as Css} />
      </div>
      <span className="geo g-qbl" style={{ background: "var(--d3-bg)" } as Css} />
      <div className="L l-explore end pad">
        <h2 className="big sc" style={{ fontSize: "min(9cqh, 6.6cqw)" } as Css}>
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
