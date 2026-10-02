# Amtshelden D3 – Deep Dive Day

Event-Website für D3, das wiederkehrende digitale B2G-Event von Amtshelden.
Ausgabe 01: **D3 · KI + Transformation**. Anmeldung später über Let's Get Digital.

- Briefing: https://docs.google.com/document/d/1grwTioy0KYaqkIG4jyswoq4MoUHnkSsbOVQYmfsstwM
- Live (intern, noindex): https://amtshelden-d3.vercel.app

## Aktueller Stand: Mosaic Interface v5

D3 ist das Interface. Ein Vollbild-Raster (Desktop 12, Tablet 8, Mobil 4 Spalten) wechselt seinen
Zustand statt klassischer Sections: **Home → Formate → Programm → Speaker*innen → Mitmachen**.
Scrollen, Navigation oder die Pfeil-Felder lösen den Wechsel aus.

**Zeichensystem** – ein Fragment = ein Ort:

| Zeichen | Ort |
|---|---|
| Kreis | Keynotes & Vorträge |
| Burst | Cases & Panels |
| Diagonale | Masterclasses |
| Raster | Aussteller / Stände |
| Doppelkreis | Networking |
| Pfeil | Weiter / nächster Schritt |

**Leitidee:** Eine reale Teilnehmerin („Du“) geht durch den Tag: Vortrag → Austausch → Masterclass → Stand → Case.
Im Hero wechselt ihr Porträt dabei die Maske des jeweiligen Ortes.

**Weitere Bausteine:** paralleles Programm mit vier Räumen (Format- und Themenfilter, Detailansicht mit
Vor/Zurück, mobil als Wischzeilen), Speaker*innen mit Detail, Ausgaben-Logik (01 aktuell, 02 als Nächstes, Archiv),
Phase 1 (Partner/Speaker*in werden) und Phase 2 (Anmeldung) als Schalter (`phase` in den Props).

### Lokal starten

```
npm install
npm run dev   # http://localhost:4320
```

`/` liefert den Prototyp aus (`next.config.ts` → `public/prototype/mosaic-v5.html`).

### Wie der Prototyp entsteht

- Quelle: `design/canvas-v5/D3App2.dc.html` (Design-Canvas, inkl. Tablet- und Mobil-Rahmen).
- `npm run build:prototype` erzeugt daraus `public/prototype/mosaic-v5.html`
  (eigenständig, React 18 per CDN, kleiner Template-Renderer in `scripts/prototype/runtime.js`).
- Die generierte Datei nicht von Hand bearbeiten: Quelle ändern und neu bauen.

### Platzhalter

Datum, Titel, Namen, Behörden und Partner stehen in eckigen Klammern. Zeiten ab 10:30, die vier Räume und
die Themenzuordnung sind exemplarisch. Porträts sind Unsplash-Platzhalter (`public/people/CREDITS.md`).

## Archiv: Variante v6

Die Variante „v6 Refinement“ (D-Körper als einzige Formlogik) ist verworfen. Die Quellen liegen unter
`design/canvas-v6/`; übernommen wurde nur die Text-Ausrichtung (siehe CHANGELOG v5.2).

## Frühere Stände

Die Explorationen (Raumplan, Fragment-System, Konzept 01 Bold & Modular, Konzept 03 Immersive)
sind über den Tag `exploration-v1-v3` erreichbar und im Design-Canvas dokumentiert:

```
git checkout exploration-v1-v3
```

Für den späteren Next.js-Ausbau bleiben erhalten: `data/event.ts`, `styles/tokens.css`, `lib/`, `components/shared/`.
