# Changelog

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
  Masterclass (Kuppel aus D-Bögen), Aussteller (Kopf über einer Schale aus D-Körpern), Networking (zwei Kreise),
  Weiter (drei Spitzen, Überlappungen negativ).

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
