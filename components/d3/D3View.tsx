// Gerüst des Interfaces: Leiste, Bühne mit allen Zellen, Navigation unten.
// Welche Zelle wo steht, entscheidet das Layout (lib/d3/layout.ts) über v.P.
import type { V, Css } from './types';
import { Bar, BottomNav, Grain } from './parts/Frame';
import { D3Cell, Brand, Theme, Why, Hero, NextEdition, DateCell, Cta, Cta2, Hint } from './modules/Home';
import { Speaker1, Speaker2, Speaker3, Speaker4, Speaker5, Speaker6, SpeakerHead, SpeakerDetail } from './modules/Speakers';
import { ExploreHead, FormatTiles } from './modules/Formats';
import { ProgramBoard } from './modules/Program';
import { PartnerHead, Logos, Editions, About, Faq } from './modules/Partner';

export default function D3View({ v }: { v: V }) {
  return (
    <div className={`app st-${v.st ?? ""} bp-${v.bp ?? ""} ${v.bootCls ?? ""} ${v.depthCls ?? ""}`} ref={v.rootRef} onWheel={v.onWheel} onMouseMove={v.onMove} style={{ "--cols": v.cols } as Css}>
      <Bar v={v} />
      <main className="stage" ref={v.stageRef}>
        <div className="canvas" style={{ "--cols": v.cols, "--rows": v.rows, "--base": v.base, "--minrow": v.minrow } as Css}>
          <D3Cell v={v} />
          <Brand v={v} />
          <Theme v={v} />
          <Why v={v} />
          <Hero v={v} />
          <Speaker1 v={v} />
          <Speaker2 v={v} />
          <Speaker3 v={v} />
          <Speaker4 v={v} />
          <Speaker5 v={v} />
          <Speaker6 v={v} />
          <FormatTiles v={v} />
          <NextEdition v={v} />
          <DateCell v={v} />
          <Cta v={v} />
          <Cta2 v={v} />
          <Hint v={v} />
          <ExploreHead v={v} />
          <ProgramBoard v={v} />
          <SpeakerHead v={v} />
          <SpeakerDetail v={v} />
          <PartnerHead v={v} />
          <Logos v={v} />
          <Editions v={v} />
          <About v={v} />
          <Faq v={v} />
        </div>
      </main>
      <BottomNav v={v} />
      <Grain v={v} />
    </div>
  );
}
