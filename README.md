# Amtshelden Deep Dive Day

Event-Website für den Amtshelden Deep Dive Day, die wiederkehrende digitale Konferenz von Amtshelden für Behörden.
Ausgabe 01: **KI + Transformation**. Anmeldung später über Let's Get Digital.

> Sprachregel: „die D3“ oder „Deep Dive Day“ (bestätigt von Christian am 20.10.2026). Absender ist immer Amtshelden.

- Briefing: https://docs.google.com/document/d/1grwTioy0KYaqkIG4jyswoq4MoUHnkSsbOVQYmfsstwM
- Live (noindex): https://d3.amtshelden.de (Vercel, Projekt `amtshelden-d3`; DNS bei internetwerk, CNAME `d3` → `cname.vercel-dns.com`)

## Aktueller Stand: v8.3 – Inhalte nach Christians Feedback

Das Interface ist ein Vollbild-Raster (Desktop 12, Tablet 8, Mobil 4 Spalten), das seinen Zustand wechselt statt
klassischer Sections: **Start → Programm → Speaker → Partner → Über die D3 → Teilnahme**. Scrollen, Navigation
oder die Weiter-Felder lösen den Wechsel aus. Jeder Zustand hat einen eigenen Link (`#/programm`, `#/teilnahme` …),
jede Session ebenfalls (`#/programm/praxis-case-1`). Die Startseite erreicht man über das Logo.

**Viel Inhalt, gleiches System:** Kacheln für den Überblick, aufklappende Kacheln für Details (Session, Speaker),
längere Texte scrollen innerhalb ihrer Kachel. Keine neuen Unterseiten-Typen.

**Bausteine:** Amtshelden-Logo als Absender, Claim „Die digitale Konferenz für alle, die in Behörden lieber machen als reden.“,
Fakten (14. April 2027, 9:00–15:30, digital & kostenfrei), Button „Kostenfrei anmelden“ in der Leiste. Drei Gründe als
Kacheln (Start kurz, Teilnahme ausführlich). Format-Zeichen in Ruhe flach, bei Hover 3D (Über die D3). Programm mit
zwei Tracks und neun Themen-Tags. Partner-Übersicht (Platzhalter), eigene Medienpartnerseite Innovative Verwaltung (`#/medienpartner`, mit Logo),
Formular „Partner werden“ (öffnet eine E-Mail an hallo@amtshelden.de). Bildwelt mit Hinweis „KI-generiert“. Häufige Fragen als Akkordeon auf Teilnahme. Phase 1/Phase 2 als Schalter (`phase`). Regeln: `/design-system`.

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
| `components/d3/modules/` | Zellen je Bereich: Home, Program, Speakers, Partner, Formats (Über die D3), Join (Teilnahme) |
| `components/d3/parts/Frame.tsx` | Leiste, Navigation unten, Körnung |
| `components/d3/d3.css` | Alle Stile, Tokens als Custom Properties in `:root` |
| `lib/d3/layout.ts` | Raster-Layouts je Gerät und Zustand |
| `lib/d3/program.ts` | Programm, Formate, Tracks, Porträts |
| `public/bildwelt/`, `public/people/` | Bildwelt, Porträt-Platzhalter |
| `public/partner/` | Partner-Logos (Innovative Verwaltung) |

Änderungen passieren ab jetzt im Next.js-Code. Der Design-Canvas (`design/canvas-v7/`, früher `canvas-v5/`) bleibt Werkbank für
Entwürfe; `scripts/port/dc2react.js` dokumentiert, wie der Port entstanden ist, und überschreibt beim erneuten
Ausführen `components/d3/` und `lib/d3/`.

### Routen

| Route | Inhalt |
|---|---|
| `/` | Die App, Stand v8.3 |
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
