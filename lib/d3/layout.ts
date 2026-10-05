// Raster-Layouts je Gerät und Zustand: Zelle -> [Spalte, Zeile, Breite, Höhe].
// Desktop 12 Spalten, Tablet 8, Mobil 4. Fehlt eine Zelle im Zustand, blendet sie aus.
type Cell = [number, number, number, number];
type States = Record<'home' | 'explore' | 'program' | 'speaker' | 'partner', Record<string, Cell>>;
export const LAYOUT: Record<'desk' | 'tab' | 'mob', States> = {
  desk: {
    home: { d3: [0, 0, 3, 3], brand: [3, 0, 5, 2], hero: [8, 0, 2, 2], fk: [10, 0, 2, 2], theme: [3, 2, 5, 1], fc: [8, 2, 2, 2], fs: [10, 2, 2, 1], why: [0, 3, 4, 2], fm: [4, 3, 2, 2], fn: [6, 3, 2, 2], next: [10, 3, 2, 1], date: [8, 4, 4, 1], hint: [0, 5, 6, 1], cta: [6, 5, 3, 1], cta2: [9, 5, 3, 1] },
    explore: { xhead: [0, 0, 4, 3], fk: [4, 0, 4, 3], hero: [8, 0, 2, 2], fs: [10, 0, 2, 2], fc: [8, 2, 4, 2], fm: [0, 3, 4, 3], fn: [4, 3, 4, 2], cta: [8, 4, 4, 1], date: [4, 5, 4, 1], hint: [8, 5, 4, 1] },
    program: { board: [0, 0, 12, 6] },
    speaker: { spkhead: [0, 0, 3, 2], pc: [3, 0, 2, 2], s2: [5, 0, 2, 2], s3: [7, 0, 2, 2], sdetail: [9, 0, 3, 4], cta2: [0, 2, 3, 2], s4: [3, 2, 2, 2], s5: [5, 2, 2, 2], s6: [7, 2, 2, 2], hint: [0, 4, 3, 2], cta: [9, 4, 3, 2] },
    partner: { phead2: [0, 0, 6, 3], cta: [6, 0, 3, 3], cta2: [9, 0, 3, 1], fs: [9, 1, 3, 2], about: [0, 3, 6, 2], faq: [6, 3, 6, 2], date: [0, 5, 3, 1], hint: [3, 5, 3, 1], editions: [6, 5, 6, 1] }
  },
  tab: {
    home: { d3: [0, 0, 3, 2], brand: [3, 0, 5, 2], theme: [0, 2, 5, 1], fk: [5, 2, 3, 2], why: [0, 3, 5, 2], fm: [5, 4, 1, 1], fn: [6, 4, 1, 1], fs: [7, 4, 1, 1], hero: [0, 5, 2, 2], fc: [2, 5, 2, 2], next: [4, 5, 2, 1], hint: [6, 5, 2, 2], cta: [4, 6, 2, 1], date: [0, 7, 4, 1], cta2: [4, 7, 4, 1] },
    explore: { xhead: [0, 0, 5, 2], hero: [5, 0, 3, 2], fk: [0, 2, 4, 2], fc: [4, 2, 4, 2], fm: [0, 4, 4, 2], fn: [4, 4, 4, 2], fs: [0, 6, 3, 2], cta: [3, 6, 5, 1], hint: [3, 7, 5, 1] },
    program: { board: [0, 0, 8, 8] },
    speaker: { spkhead: [0, 0, 4, 2], sdetail: [4, 0, 4, 4], pc: [0, 2, 2, 2], s2: [2, 2, 2, 2], s3: [0, 4, 2, 2], s4: [2, 4, 2, 2], s5: [4, 4, 2, 2], s6: [6, 4, 2, 2], cta2: [0, 6, 4, 1], cta: [4, 6, 4, 1], hint: [0, 7, 8, 1] },
    partner: { phead2: [0, 0, 5, 3], cta: [5, 0, 3, 2], cta2: [5, 2, 3, 1], fs: [0, 3, 8, 1], editions: [0, 4, 8, 2], about: [0, 6, 4, 3], faq: [4, 6, 4, 3] }
  },
  mob: {
    home: { d3: [0, 0, 2, 2], hero: [2, 0, 2, 2], brand: [0, 2, 4, 2], why: [0, 4, 4, 3], theme: [0, 7, 4, 1], date: [0, 8, 4, 1], cta: [0, 9, 2, 1], cta2: [2, 9, 2, 1], fk: [0, 10, 2, 2], fc: [2, 10, 1, 1], fm: [3, 10, 1, 1], fn: [2, 11, 1, 1], fs: [3, 11, 1, 1], next: [0, 12, 4, 1], hint: [0, 13, 4, 1] },
    explore: { xhead: [0, 0, 4, 2], fk: [0, 2, 4, 2], fc: [0, 4, 2, 2], fm: [2, 4, 2, 2], fn: [0, 6, 2, 2], fs: [2, 6, 2, 2], cta: [0, 8, 4, 1], hint: [0, 9, 4, 1] },
    program: { board: [0, 0, 4, 8] },
    speaker: { spkhead: [0, 0, 4, 2], pc: [0, 2, 2, 2], s2: [2, 2, 2, 2], s3: [0, 4, 2, 2], s4: [2, 4, 2, 2], s5: [0, 6, 2, 2], s6: [2, 6, 2, 2], sdetail: [0, 8, 4, 3], cta2: [0, 11, 4, 1], hint: [0, 12, 4, 1] },
    partner: { phead2: [0, 0, 4, 3], cta: [0, 3, 4, 1], cta2: [0, 4, 4, 1], fs: [0, 5, 4, 1], editions: [0, 6, 4, 4], about: [0, 10, 4, 3], faq: [0, 13, 4, 4] }
  }
};
