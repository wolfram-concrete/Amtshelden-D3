# Amtshelden Deep Dive Day

Event-Website für den Amtshelden Deep Dive Day, die wiederkehrende digitale Konferenz von Amtshelden für Behörden.
Ausgabe 01: **KI + Transformation**. Anmeldung später über Let's Get Digital.

> Sprachregel: „der Amtshelden Deep Dive Day“, kurz „Deep Dive Day“ – nie „die D3“. D3 ist nur das Formatzeichen
> (Bildmarke) und der interne Projektname, daher Repo- und Ordnernamen.

- Briefing: https://docs.google.com/document/d/1grwTioy0KYaqkIG4jyswoq4MoUHnkSsbOVQYmfsstwM
- Live (intern, noindex): https://amtshelden-d3.vercel.app

## Aktueller Stand: v7.2 „Amtshelden vorn“ als Next.js-App

Amtshelden ist die Marke, der Deep Dive Day ein Format davon (Feedback Christian, freigegeben am 04.10.2026).
Das Interface ist ein Vollbild-Raster (Desktop 12, Tablet 8, Mobil 4 Spalten), das seinen Zustand wechselt statt
klassischer Sections: **Home → Formate → Programm → Speaker*innen → Mitmachen**.
Scrollen, Navigation oder die Pfeil-Felder lösen den Wechsel aus.

**Bausteine:** Amtshelden-Logo als Absender (Leiste, erste Zelle; kein Preloader), einfarbige 3D-Zeichen in den
Format-Kacheln, Überschneidungen immer ausgespart (auch beim Weiter-Icon) (Standbild, bei Hover live WebGL), eigene Bildwelt (Menschen im digitalen Raum) mit geometrischer Fläche, Programm als Tagesreise
(Zeitachse, vier Räume, Jetzt/Als Nächstes, aufklappende Programmpunkte), Frag Amtshelden (FAQ ohne KI),
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
| `components/d3/D3App.tsx` | Zustände und Logik (1:1 aus dem Prototyp, noch `@ts-nocheck`; die Preloader-Methoden sind noch drin, aber stillgelegt) |
| `components/d3/D3View.tsx` | Gerüst: Leiste, Bühne mit allen Zellen, Navigation |
| `components/d3/modules/` | Zellen je Bereich: Home, Formats, Program, Speakers, Partner |
| `components/d3/parts/Frame.tsx` | Leiste, Navigation unten, Körnung |
| `components/d3/d3.css` | Alle Stile, Tokens als Custom Properties in `:root` |
| `lib/d3/layout.ts` | Raster-Layouts je Gerät und Zustand |
| `lib/d3/program.ts` | Programm, Formate, Räume, Porträts |
| `public/bildwelt/`, `public/people/` | Bildwelt, Porträt-Platzhalter |

Änderungen passieren ab jetzt im Next.js-Code. Der Design-Canvas (`design/canvas-v7/`, früher `canvas-v5/`) bleibt Werkbank für
Entwürfe; `scripts/port/dc2react.js` dokumentiert, wie der Port entstanden ist, und überschreibt beim erneuten
Ausführen `components/d3/` und `lib/d3/`.

### Routen

| Route | Inhalt |
|---|---|
| `/` | Die App, Stand v7.2 |
| `/design-system` | Regeln und Bausteine, Stand v7 (Board aus `design/canvas-v7/DesignSystem-v7.dc.html`) |
| `/v7` | v7 als Prototyp-HTML aus dem Canvas – Referenz zur App |
| `/prototype/mosaic-v5.html` | v5.8 als Archiv (nutzt dieselben Bilddateien, zeigt daher die aktuelle Bildwelt) |

`npm run build:prototype` erzeugt die Prototyp-HTMLs und das Design-System-Board aus den Canvas-Quellen
(`scripts/prototype/gen.js`). Bilder aus dem Canvas werden dabei auf `public/bildwelt/` und `public/people/` umgeschrieben.

### Offen

- Inhalte: Datum, Speaker*innen, Porträts, Partner, Kosten, Plattform, Kontakt-Adresse, Let's-Get-Digital-Link.
- Gelb `#FFE500` ist noch nicht offiziell von Amtshelden bestätigt.
- `components/d3/D3App.tsx` ist 1:1 portiert und noch nicht typisiert (`@ts-nocheck`).

### Platzhalter

Datum, Titel, Namen, Behörden und Partner stehen in eckigen Klammern. Zeiten ab 10:30, die vier Räume und
die Themenzuordnung sind exemplarisch. Porträts sind Unsplash-Platzhalter (`public/people/CREDITS.md`). Die Bildwelt (`public/bildwelt/`, Stand 05.10.) ist eigens generiert; ältere Motive liegen in `people/alt/`;
Originale und Kontaktbogen liegen nur lokal (`people/`, `design/bildwelt/`) und sind nicht im Repo.

## Archiv

**v5.8 Mosaic Interface** (D3 als eigene Marke, bunte Zeichen): `/prototype/mosaic-v5.html`, Quelle
`design/canvas-v5/`. Abgelöst durch v7, weil Amtshelden als Marke im Zentrum stehen soll.

### Variante v6

Die Variante „v6 Refinement“ (D-Körper als einzige Formlogik) ist verworfen. Die Quellen liegen unter
`design/canvas-v6/`; übernommen wurde nur die Text-Ausrichtung (siehe CHANGELOG v5.2).

## Frühere Stände

Die Explorationen (Raumplan, Fragment-System, Konzept 01 Bold & Modular, Konzept 03 Immersive)
sind über den Tag `exploration-v1-v3` erreichbar und im Design-Canvas dokumentiert:

```
git checkout exploration-v1-v3
```

Aus früheren Ständen liegen noch `data/event.ts`, `styles/tokens.css`, `lib/geometry.ts` und `components/shared/` im Repo; die App nutzt sie nicht.
