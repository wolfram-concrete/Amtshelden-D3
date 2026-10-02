# Changelog

## v5.2 – Ausrichtung, Amtshelden-Gelb, Logo-Regeln · 2026-10-02

v6 (D-Körper als einzige Formlogik) ist verworfen – zu monoton. Übernommen wird nur die Text-Ausrichtung.

### Geändert
- Text dockt in jeder Zelle oben (Label) oder unten (Inhalt) an, nie mittig. Gemeinsame Abstände:
  `--cell-padding` (18/16/12 px), `--label-position`, `--content-baseline`, `--meta-baseline`.
  Betrifft Thema, Formate, Porträt-Zelle, „Als Nächstes“, Datum, CTAs, Weiter.
- Amtshelden-Gelb `#FFE500` ersetzt Neon: Porträt-Zelle, Networking, Speaker*in-Zelle, aktiver Navi-Zustand, gewählter Programmpunkt.
- Logo: In der Leiste steht nur die Bildmarke. Im Hero-Feld steht „D3“ ausgeschrieben, ohne zweite Bildmarke.
- „Deep Dive Day“ immer zweizeilig wie im Logo: „Deep“ / „Dive Day“, mit „by Amtshelden“ als Label darüber.
- Kleine Format-Zellen (Tablet/Mobil) zeigen nur Icon + Aktion.
- „Du“-Element vollständig entfernt (wandernder Avatar, „Du“-Label, Mini-Avatar im Programm). Die Porträt-Zelle zeigt Zeit + Format.
- Farbe gegen das Schwarz-Rot-Gold-Bild: Tinte `#1E1B36` statt Schwarz (Flächen und Schrift). Palette: Tinte, Bone, Amtshelden-Gelb, Purple (Thema), Rot `#FF4B23` (Keynote, CTA), Amtshelden-Grün `#0D9D69` (Networking).

### Entfernt
- Routen `/v6` und `/design-system` samt generierten Dateien. Quellen bleiben unter `design/canvas-v6/` als Archiv.

## v6 – Refinement (Variante, verworfen) · 2026-10-02

Kein Redesign: dasselbe Vollbild-Mosaik, diszipliniert. Läuft parallel unter `/v6`, `/` bleibt v5.
Interne Systemansicht unter `/design-system`.

### Formensprache
- D3 Shape Library: sechs Primitive aus dem D-Körper der Bildmarke – D (Keynote & Vortrag), Doppel-D (Case & Panel),
  Offenes D (Masterclass), D-Paar (Networking), D-Rotation (Stände & Partner), D-Staffel (Weiter & CTA).
- Entfernt: Burst, Punktraster, Venn-Kreise, freie Pfeile. Porträts in rotierten D-Masken.

### Modul-Logik
- Vier Modul-Typen: A Editorial, B Event, C Action, D Person. Text sitzt nur oben (Label) oder unten (Inhalt).
- Gemeinsame Baselines: `--cell-padding`, `--label-position`, `--content-baseline`, `--meta-baseline`.
- Eine Zelle, eine Botschaft: „Als Nächstes“-Modul und Aufzählung im Hero entfallen; reine Bildzellen (`v1`, `v2`).
- Hero-Hierarchie: D3 (4×4) → Deep Dive Day → KI + Transformation → Positionierung → Formate.

### Farbe
- Amtshelden-Gelb `#FFE500` (aus `styles/tokens.css`) ersetzt Neon/Mint: Porträt-Zelle, Networking, aktiver Navi-Zustand,
  gewählter Programmpunkt. Orange bleibt D3-Signal, Purple nur für Cases. CTA-Flächen schwarz statt orange.

### Motion
- Drei Verhalten: Shift (Raster), Reveal (Masken und Text), Expand (Zellen). Maus-Parallax und Rotation entfernt.

### Responsive
- Eigene Komposition für Tablet und Mobil: D3 → Deep Dive Day → Thema → Positionierung → Datum → CTA → Formate.


## v5.1 – Archivo, Icons, D3-Headline · 2026-10-02

### Geändert
- Schrift: Archivo statt Schibsted Grotesk für Headlines und Text. Headlines (`.big`) mit `font-stretch: var(--f-wide)` = 108 %.
- Hero: „D3“ als Headline-Schreibweise – die 3 rückt 0,22 em ins D, die Überlappung kehrt sich per `mix-blend-mode: difference` um.
  Kein zweites Logo; die Bildmarke bleibt `D3-final.svg`.
- „by Amtshelden“ immer als Original-SVG, „by“ auf der Grundlinie des Blockkastens.
- Bildmarke + Name + Amtshelden-Zusatz immer als Komplett-Logo `SVG/SVG/D3 lOGO.svg` (Leiste Desktop/Tablet, Icon-Board).
  Mobil bleibt Bildmarke + „by Amtshelden“ ohne Namen.

### Neu
- Icon-Set aus der Bildmarke (`SVG/icons/`, 100er-Raster, echte Boolesche Flächen, ab 16 px):
  Keynote & Vortrag (geteilter Ring, oben/unten invertiert), Case & Panel (Burst + D-Körper),
  Masterclass (vier Punkte über gekreuzten Bögen), Aussteller (Kopf über einer Schale aus D-Körpern), Networking (zwei Kreise),
  Weiter (drei Halbkreise hintereinander, Überlappungen negativ).

- Interface nutzt das Icon-Set: alle Zeichen (`.s-*`) als SVG-Masken, flache Flächen statt Verläufe;
  Hero-Porträt in den Silhouetten der Icons.
- Farbe: Neongelb `--d3-neon: #D7FF1F` ersetzt Mint (Hero-Porträt, Networking, „Als Nächstes“). Neon nur als Fläche mit schwarzem Inhalt.

### Entfernt
- `SVG/d3-wortmarke.svg` – verworfen.

## v5 – Mosaic Interface · 2026-10-02

Neuer Hauptstand. `/` zeigt nur noch v5.

### Neu
- Vollbild-Interface statt Sections: fünf Zustände (Home, Formate, Programm, Speaker*innen, Mitmachen) im selben Raster.
- Eigene Layouts für Desktop (12 Spalten), Tablet (8) und Mobil (4); längere Zustände scrollen innerhalb des Rasters.
- Zeichensystem nach Briefing: Kreis = Keynote & Vortrag, Burst = Case & Panel, Diagonale = Masterclass,
  Raster = Aussteller, Doppelkreis = Networking, Pfeil = Weiter.
- Leitfigur „Du“: Teilnehmerin läuft die Stationen des Tages ab; das Hero-Porträt wechselt die Maske je Ort.
- Programm mit parallelen Räumen (Main Stage, Raum 2, Werkstatt, Lounge), Format- und Themenfilter,
  Detailansicht mit Speaker*in, Link zu amtshelden.de und Vor/Zurück; mobil als Wischzeilen mit Parallel-Hinweis.
- Speaker*innen mit formatabhängigen Masken und Detailfeld.
- Ausgaben-Logik: „D3 · Ausgabe 01“, „Als Nächstes: 02 Kommunikation“, Archiv-Hinweis.
- Phase 1 / Phase 2 als Schalter (Partner/Speaker*in werden ↔ Anmelden über Let's Get Digital).
- Lockup in der Leiste: D3-Zeichen + „Deep Dive Day“ + „by Amtshelden“ in Schwarz; neues Zeichen (`D3-final.svg`).
- Build-Skript `npm run build:prototype` erzeugt den eigenständigen Prototyp aus der Canvas-Quelle.

### Geändert
- Typografie: Schibsted Grotesk + Martian Mono; Headline-Zeilenabstand 0,95.
- Farben: Bone, Weiß, Schwarz; Orange (Keynote, CTA), Purple (Cases), Mint (Networking).
- Weniger Mikrotexte, keine Erklär-Eyebrows über Headlines.

### Barrierefreiheit
- Echte Buttons und Links, sichtbarer Fokus; `prefers-reduced-motion` stoppt Rundgang und Übergänge.

### Entfernt (im Tag `exploration-v1-v3` erhalten)
- Auswahlseite sowie `/concept-01` und `/concept-03` mit ihren Komponenten.

## v1–v4 – Explorationen · 2026-10-01/02

Raumplan, Fragment-System, Konzept 01 Bold & Modular, Konzept 03 Immersive & Experimental, Mosaic Interface v4.
Siehe Tag `exploration-v1-v3` und den Design-Canvas.
