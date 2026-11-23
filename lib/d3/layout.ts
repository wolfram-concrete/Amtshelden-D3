// Raster-Layouts je Gerät und Zustand: Zelle -> [Spalte, Zeile, Breite, Höhe].
// Desktop 12 Spalten, Tablet 8, Mobil 4. Fehlt eine Zelle im Zustand, blendet sie aus.
// Stand 23.11.2026: Partner ohne Logo-Raster, Moderation auf Teilnahme, Zustand „soon“ für alte Programm-/Speaker-Links.
// program und speaker bleiben für Januar 2027 erhalten (siehe lib/d3/release.ts).
type Cell = [number, number, number, number];
type States = Record<'home' | 'explore' | 'program' | 'speaker' | 'partner' | 'join' | 'media' | 'soon', Record<string, Cell>>;
export const LAYOUT: Record<'desk' | 'tab' | 'mob', States> = {
  desk: {
    media: { mlogo: [0, 0, 5, 4], mtext: [5, 0, 7, 4], cta: [0, 4, 5, 2], hint: [5, 4, 7, 2] },
    home: { d3: [0, 0, 3, 3], brand: [3, 0, 5, 2], date: [3, 2, 5, 1], hero: [8, 0, 4, 3], why: [0, 3, 4, 2], g1: [4, 3, 2, 2], g2: [6, 3, 2, 2], g3: [8, 3, 2, 2], ptile: [10, 3, 2, 1], media: [10, 4, 2, 1], next: [0, 5, 4, 1], hint: [4, 5, 4, 1], cta: [8, 5, 4, 1] },
    program: { board: [0, 0, 12, 6] },
    speaker: { spkhead: [0, 0, 3, 2], pc: [3, 0, 2, 2], s2: [5, 0, 2, 2], s3: [7, 0, 2, 2], sdetail: [9, 0, 3, 6], mods: [0, 2, 3, 2], s4: [3, 2, 2, 2], s5: [5, 2, 2, 2], s6: [7, 2, 2, 2], hint: [0, 4, 3, 2], cta: [3, 4, 6, 2] },
    partner: { phead2: [0, 0, 5, 3], fs: [5, 0, 4, 3], media: [9, 0, 3, 3], pform: [0, 3, 7, 3], hint: [7, 3, 5, 2], cta: [7, 5, 5, 1] },
    explore: { xhead: [0, 0, 5, 3], idea: [5, 0, 4, 3], fk: [9, 0, 3, 3], fc: [0, 3, 3, 2], fm: [3, 3, 3, 2], fn: [6, 3, 3, 2], fs: [9, 3, 3, 2], about: [0, 5, 6, 1], cta: [6, 5, 3, 1], hint: [9, 5, 3, 1] },
    join: { jhead: [0, 0, 5, 2], date: [5, 0, 4, 2], hero: [9, 0, 3, 2], mods: [9, 2, 3, 2], g1: [0, 2, 3, 2], g2: [3, 2, 3, 2], g3: [6, 2, 3, 2], faq: [0, 4, 6, 2], reg: [6, 4, 3, 2], hint: [9, 4, 3, 2] },
    soon: { soon: [0, 0, 8, 4], hero: [8, 0, 4, 4], cta: [0, 4, 6, 2], hint: [6, 4, 6, 2] }
  },
  tab: {
    media: { mlogo: [0, 0, 8, 2], mtext: [0, 2, 8, 4], cta: [0, 6, 4, 1], hint: [4, 6, 4, 1] },
    home: { d3: [0, 0, 3, 2], brand: [3, 0, 5, 2], hero: [0, 2, 5, 3], date: [5, 2, 3, 2], ptile: [5, 4, 3, 1], why: [0, 5, 4, 2], g1: [4, 5, 2, 2], g2: [6, 5, 2, 2], g3: [0, 7, 2, 2], next: [2, 7, 3, 1], hint: [2, 8, 3, 1], media: [5, 7, 3, 1], cta: [5, 8, 3, 1] },
    program: { board: [0, 0, 8, 8] },
    speaker: { spkhead: [0, 0, 4, 2], sdetail: [4, 0, 4, 4], pc: [0, 2, 2, 2], s2: [2, 2, 2, 2], s3: [0, 4, 2, 2], s4: [2, 4, 2, 2], s5: [4, 4, 2, 2], s6: [6, 4, 2, 2], mods: [0, 6, 4, 2], cta: [4, 6, 4, 1], hint: [4, 7, 4, 1] },
    partner: { phead2: [0, 0, 5, 3], media: [5, 0, 3, 3], fs: [0, 3, 8, 2], pform: [0, 5, 8, 3], cta: [0, 8, 4, 1], hint: [4, 8, 4, 1] },
    explore: { xhead: [0, 0, 5, 3], fk: [5, 0, 3, 3], idea: [0, 3, 8, 2], fc: [0, 5, 4, 2], fm: [4, 5, 4, 2], fn: [0, 7, 4, 2], fs: [4, 7, 4, 2], about: [0, 9, 8, 1], cta: [0, 10, 4, 1], hint: [4, 10, 4, 1] },
    join: { jhead: [0, 0, 5, 2], date: [5, 0, 3, 2], g1: [0, 2, 4, 2], g2: [4, 2, 4, 2], g3: [0, 4, 4, 2], mods: [4, 4, 4, 2], reg: [0, 6, 4, 2], faq: [4, 6, 4, 3], hint: [0, 8, 4, 1] },
    soon: { soon: [0, 0, 8, 4], cta: [0, 4, 4, 2], hint: [4, 4, 4, 2] }
  },
  mob: {
    media: { mlogo: [0, 0, 4, 2], mtext: [0, 2, 4, 6], cta: [0, 8, 4, 1], hint: [0, 9, 4, 1] },
    home: { hero: [0, 0, 4, 2], brand: [0, 2, 4, 2], date: [0, 4, 4, 2], why: [0, 6, 4, 3], g1: [0, 9, 2, 2], g2: [2, 9, 2, 2], g3: [0, 11, 4, 1], ptile: [0, 12, 2, 2], media: [2, 12, 2, 2], next: [0, 14, 4, 1], cta: [0, 15, 4, 2], hint: [0, 17, 4, 1] },
    program: { board: [0, 0, 4, 8] },
    speaker: { spkhead: [0, 0, 4, 2], pc: [0, 2, 2, 2], s2: [2, 2, 2, 2], s3: [0, 4, 2, 2], s4: [2, 4, 2, 2], s5: [0, 6, 2, 2], s6: [2, 6, 2, 2], sdetail: [0, 8, 4, 3], mods: [0, 11, 4, 2], cta: [0, 13, 4, 1], hint: [0, 14, 4, 1] },
    partner: { phead2: [0, 0, 4, 4], fs: [0, 4, 4, 2], media: [0, 6, 4, 2], pform: [0, 8, 4, 6], cta: [0, 14, 4, 1], hint: [0, 15, 4, 1] },
    explore: { xhead: [0, 0, 4, 3], idea: [0, 3, 4, 4], fk: [0, 7, 4, 2], fc: [0, 9, 4, 1], fm: [0, 10, 4, 1], fn: [0, 11, 4, 1], fs: [0, 12, 4, 1], about: [0, 13, 4, 2], cta: [0, 15, 4, 1], hint: [0, 16, 4, 1] },
    join: { jhead: [0, 0, 4, 3], date: [0, 3, 4, 2], reg: [0, 5, 4, 3], g1: [0, 8, 4, 2], g2: [0, 10, 4, 2], g3: [0, 12, 4, 2], faq: [0, 14, 4, 4], mods: [0, 18, 4, 2], hint: [0, 20, 4, 1] },
    soon: { soon: [0, 0, 4, 5], cta: [0, 5, 4, 2], hint: [0, 7, 4, 1] }
  }
};
