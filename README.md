# Amtshelden D3 – Deep Dive Day

Event-Website für D3, das wiederkehrende digitale B2G-Event von Amtshelden.
Ausgabe 01: **D3 · KI + Transformation**. Anmeldung später über Let's Get Digital.

- Briefing: https://docs.google.com/document/d/1grwTioy0KYaqkIG4jyswoq4MoUHnkSsbOVQYmfsstwM
- Live (intern, noindex): https://amtshelden-d3.vercel.app

## Aktueller Stand: Mosaic Interface v5.8 als Next.js-App

D3 ist das Interface. Ein Vollbild-Raster (Desktop 12, Tablet 8, Mobil 4 Spalten) wechselt seinen
Zustand statt klassischer Sections: **Home → Formate → Programm → Speaker*innen → Mitmachen**.
Scrollen, Navigation oder die Pfeil-Felder lösen den Wechsel aus.

**Bausteine:** Zeichensystem aus der Bildmarke (Keynote, Case, Masterclass, Networking, Stände, Weiter),
3D-Körper bei Hover (WebGL), eigene Bildwelt mit geometrischer Fläche, Programm als Tagesreise
(Zeitachse, vier Räume, Jetzt/Als Nächstes, aufklappende Programmpunkte), Frag D3 (FAQ ohne KI),
Ausgaben-Logik, Phase 1/Phase 2 als Schalter (`phase`). Regeln: `/design-system`.

### Lokal starten

```
npm install
npm run dev   # http://localhost:4320
```

### Aufbau

| Pfad | Inhalt |
|---|---|
| `app/page.tsx` | Startseite, lädt die App nur im Browser (Raster, Maus-Tiefe, WebGL) |
| `components/d3/D3App.tsx` | Zustände und Logik (1:1 aus dem Prototyp, noch `@ts-nocheck`) |
| `components/d3/D3View.tsx` | Gerüst: Leiste, Bühne mit allen Zellen, Navigation, Preloader |
| `components/d3/modules/` | Zellen je Bereich: Home, Formats, Program, Speakers, Partner |
| `components/d3/parts/Frame.tsx` | Leiste, Navigation unten, Preloader, Körnung |
| `components/d3/d3.css` | Alle Stile, Tokens als Custom Properties in `:root` |
| `lib/d3/layout.ts` | Raster-Layouts je Gerät und Zustand |
| `lib/d3/program.ts` | Programm, Formate, Räume, Porträts |
| `public/bildwelt/`, `public/people/` | Bildwelt, Porträt-Platzhalter |

Änderungen passieren ab jetzt im Next.js-Code. Der Design-Canvas (`design/canvas-v5/`) bleibt Werkbank für
Entwürfe; `scripts/port/dc2react.js` dokumentiert, wie der Port entstanden ist, und überschreibt beim erneuten
Ausführen `components/d3/` und `lib/d3/`.

### Prototyp und Design-System

- `/prototype/mosaic-v5.html` – der Prototyp aus dem Canvas als Referenz (`npm run build:prototype`).
- `/design-system` – Regeln und Bausteine (Board aus `design/canvas-v5/DesignSystem-v5.dc.html`).

### Platzhalter

Datum, Titel, Namen, Behörden und Partner stehen in eckigen Klammern. Zeiten ab 10:30, die vier Räume und
die Themenzuordnung sind exemplarisch. Porträts sind Unsplash-Platzhalter (`public/people/CREDITS.md`). Die Bildwelt (`public/bildwelt/`) ist eigens generiert, die Originale liegen lokal in `people/`.

## Archiv: Variante v6

Die Variante „v6 Refinement“ (D-Körper als einzige Formlogik) ist verworfen. Die Quellen liegen unter
`design/canvas-v6/`; übernommen wurde nur die Text-Ausrichtung (siehe CHANGELOG v5.2).

## Frühere Stände

Die Explorationen (Raumplan, Fragment-System, Konzept 01 Bold & Modular, Konzept 03 Immersive)
sind über den Tag `exploration-v1-v3` erreichbar und im Design-Canvas dokumentiert:

```
git checkout exploration-v1-v3
```

Aus früheren Ständen liegen noch `data/event.ts`, `styles/tokens.css`, `lib/geometry.ts` und `components/shared/` im Repo; die App nutzt sie nicht.
