// Gerüst des Interfaces: Leiste, Bühne mit allen Zellen, Navigation unten.
// Welche Zelle wo steht, entscheidet das Layout (lib/d3/layout.ts) über v.P.
// Solange PROGRAM_LIVE false ist (lib/d3/release.ts), werden Programm, Speaker und Logo-Raster gar nicht gerendert:
// keine Platzhalter im Seitencode.
import type { V, Css } from './types';
import { Bar, BottomNav, Grain } from './parts/Frame';
import { D3Cell, Brand, Why, Hero, NextEdition, DateCell, Cta, Hint, Reason1, Reason2, Reason3, PartnerTeaser } from './modules/Home';
import { Speaker1, Speaker2, Speaker3, Speaker4, Speaker5, Speaker6, SpeakerHead, SpeakerDetail, Moderation } from './modules/Speakers';
import { AboutHead, AboutIdea, Organizer, FormatTiles } from './modules/Formats';
import { ProgramBoard } from './modules/Program';
import { PartnerHead, Logos, MediaPartner, PartnerForm, MediaLogo, MediaText } from './modules/Partner';
import { JoinHead, Registration, Faq, Soon } from './modules/Join';

export default function D3View({ v }: { v: V }) {
  return (
    <div className={`app st-${v.st ?? ""} bp-${v.bp ?? ""} ${v.bootCls ?? ""} ${v.depthCls ?? ""}`} ref={v.rootRef} onWheel={v.onWheel} onMouseMove={v.onMove} style={{ "--cols": v.cols } as Css}>
      <Bar v={v} />
      <main className="stage" ref={v.stageRef}>
        <div className="canvas" style={{ "--cols": v.cols, "--rows": v.rows, "--base": v.base, "--minrow": v.minrow } as Css}>
          <D3Cell v={v} />
          <Brand v={v} />
          <Why v={v} />
          <Hero v={v} />
          {v.programLive ? <Speaker1 v={v} /> : null}
          {v.programLive ? <Speaker2 v={v} /> : null}
          {v.programLive ? <Speaker3 v={v} /> : null}
          {v.programLive ? <Speaker4 v={v} /> : null}
          {v.programLive ? <Speaker5 v={v} /> : null}
          {v.programLive ? <Speaker6 v={v} /> : null}
          <FormatTiles v={v} />
          <NextEdition v={v} />
          <DateCell v={v} />
          <Cta v={v} />
          <Hint v={v} />
          <AboutHead v={v} />
          {v.programLive ? <ProgramBoard v={v} /> : null}
          {v.programLive ? <SpeakerHead v={v} /> : null}
          {v.programLive ? <SpeakerDetail v={v} /> : null}
          <PartnerHead v={v} />
          {v.programLive ? <Logos v={v} /> : null}
          <Organizer v={v} />
          <Reason1 v={v} />
          <Reason2 v={v} />
          <Reason3 v={v} />
          <PartnerTeaser v={v} />
          <MediaPartner v={v} />
          <Moderation v={v} />
          <PartnerForm v={v} />
          <AboutIdea v={v} />
          <JoinHead v={v} />
          <Registration v={v} />
          <MediaLogo v={v} />
          <MediaText v={v} />
          <Faq v={v} />
          <Soon v={v} />
        </div>
      </main>
      <BottomNav v={v} />
      <Grain v={v} />
    </div>
  );
}
