# Changelog

## v7 – Entwurf „Amtshelden vorn“ · 2026-10-04

Eigener Entwurf unter `/v7` (Quelle `design/canvas-v7/D3App4.dc.html`), `/` bleibt v5.8. Grundlage: Feedback Christian –
Amtshelden ist die Marke, der Deep Dive Day ein Format davon; Icons nicht bunt; 3D-Versionen gefallen.

### Geändert gegenüber v5.8
- Leiste: Amtshelden-Logo (Originaldatei) vorn, daneben „Deep Dive Day“. Der Preloader setzt das Amtshelden-Logo aus
  seinen zwei Sprechblasen zusammen und schickt es in die Leiste.
- Home: Absender-Zelle „Die Konferenz von Amtshelden“ mit großem Logo, darunter „Deep / Dive Day“ und die D3-Bildmarke
  klein als Formatzeichen. Aussage: „Die digitale Konferenz von Amtshelden für Behörden, die neue Wege gehen.“
- Name: „D3“ verschwindet aus allen Texten (Navigation, FAQ, Frag Amtshelden, Über, Ausgaben).
- Zeichen einfarbig (Tinte oder Bone, Grün als einziger Akzent). In den Format-Kacheln steht der 3D-Körper schon im
  Ruhezustand (Standbilder `public/bildwelt/d3-3d-*.png`); bei Hover übernimmt Live-WebGL aus derselben Pose.
- Grün wandert zu Networking und Amtshelden, die Thema-Zelle wird Tinte.

## v5.8 – Next.js-App, Frag D3, Übergänge, Satzschreibung · 2026-10-02

### Neu
- `/` ist jetzt eine echte React-App (Next.js): `components/d3/` (Logik in `D3App.tsx`, Ansicht in `D3View.tsx`
  und `modules/`), Daten in `lib/d3/` (Layout, Programm). Pixelgleich zum Prototyp; der bleibt unter
  `/prototype/mosaic-v5.html`. Port-Skript: `scripts/port/dc2react.js`.
- Frag D3: Fragefeld in der FAQ-Zelle mit festem Antwort-Katalog (14 Themen, kein KI-Dienst), Vorschläge als Chips,
  Antworten mit Sprungziel. Unbelegtes steht als [Platzhalter].
- Shared Element: Wechselt ein Klick den Zustand, wächst die Fläche der geklickten Zelle über die Bühne.
- Scroll-Parallax auf Tablet/Mobil: Fotos gegen, Zeichen mit der Scrollrichtung.

### Geändert
- Umlaute, Variante C: Versal nur für kurze Wörter ohne Umlaut; Ansagen, Formatnamen, „Über D3“, Programmtitel,
  FAQ und Preloader-Schlagwörter in Satzschreibung (`.sc`).

### Behoben
- Klicks auf Format-Zeichen gingen ins Leere (Zeichen lag über der Klickfläche).

## v5.7 – Bildwelt · 2026-10-02

### Neu
- Eigene Bildwelt (8 Motive aus `people/`, Web-Versionen in `public/bildwelt/`, 1800 px): Menschen in einer gebauten
  Raumlandschaft aus Tinte, Bone, Gelb und Grün.
- Prinzip: Foto füllt die Zelle, Ausschnitt und Zoom sitzen auf der Person (`--fx/--fy/--z/--ox/--oy`). Darüber genau eine
  Fläche aus dem Zeichensystem (Viertel- oder Halbkreis an einer Zellkante), die den Text trägt.
- Einsatz: Porträt-Zelle wechselt je Format das Motiv (Moment, Porträt, Fokus, Austausch, Entdecker) unter gelbem Halbkreis ·
  „Ein Tag. Viele Räume.“ (Verbindung, Bone) · Speaker*innen-Kopf (Speaker, Tinte) · Mitmachen-Kopf (Raum, Gelb) ·
  Über D3 auf Desktop (Austausch, grüner Halbkreis an der Bildkante).
- Motion: Beim Betreten öffnet sich das Bild, die Fläche wächst aus ihrer Ecke und atmet danach in Stufen.
  Maus-Tiefe: Bild −5 px, Fläche und Text +2 px.
- Mobil: Speaker*innen-Kopf zweizeilig. Design-System-Board um Abschnitt „Bildwelt“ ergänzt.

### Behoben
- v5.6: Fehlendes `</div>` im Programm-Board versteckte Zellen auf Speaker*innen und Mitmachen.

## v5.6 – Programm als Tagesreise · 2026-10-02

### Neu
- Programm als horizontale Strecke: links nach rechts die Zeit (09:00–15:30), untereinander die Räume als Bahnen.
  Steht ein Punkt allein, belegt er alle Bahnen (Plenum: Get-together, Keynotes, Themenräume).
- Jetzt / Als Nächstes: grüne Jetzt-Linie auf der Zeitachse, oben „Läuft gerade“ (grün) und „Als Nächstes · in x min“ (gelb).
  In Phase 1 als Vorschau mit Uhr-Regler; Laufendes bekommt eine grüne Kante, Vergangenes nur noch Kontur.
- Aufklappbare Zelle: Ein Programmpunkt wächst aus seiner eigenen Zelle auf die volle Fläche (Shared-Element-Übergang per clip-path)
  und fällt beim Schließen dorthin zurück. Keynote in Tinte, Networking grün, sonst gelb; Porträt in der Format-Maske. Esc schließt.
- Aufbau beim Betreten: Zellen wischen entlang der Zeitachse ein, danach fällt die Jetzt-Linie.

### Design-System
- Neues Board „Design System · Stand v5.6“ unter `/design-system` und im Canvas (Seite v5): Farbe, Marke, Zeichen,
  Typografie, Raster & Module, Motion, Programm, Verworfenes. Tokens, Zeichen und Motion kommen direkt aus der App-Quelle.
  Das v6-Board bleibt als Archiv.

### Entfernt
- Zeit-×-Raum-Tabelle und seitliches Detail-Panel des Programms.

## v5.5 – 3D-Körper · 2026-10-02

### Neu
- Format-Kacheln auf Home und Formate: Im Ruhezustand flaches SVG-Icon mit Ambient-Motion; bei Hover (Touch: erster Tap)
  wird das Icon zum extrudierten WebGL-Körper, Material B „beschichtet“. Teile liegen auf eigenen Ebenen,
  Aussparungen bleiben offen. Neigung 11–14° plus höchstens ±4°/±6° zur Maus.
- Ein gemeinsamer Renderer für alle Kacheln, Three.js wird erst beim ersten Hover nachgeladen (cdnjs/jsdelivr),
  gerendert wird nur während einer Bewegung. Bei reduzierter Bewegung oder Ladefehler bleibt alles flach.

## v5.4 – Amtshelden-Nähe · 2026-10-02

### Geändert
- Grün = Akzentgrün von amtshelden.de `#009460`. Rot und Purple zurückgenommen: Thema-Kachel und Leisten-CTA grün,
  „Partner werden“ gelb, Speaker- und Ausgaben-Kacheln gelb/grün/bone. Rot bleibt nur Keynote-Signal, Purple nur im Case-Icon.
- „Was ist D3?“ als plakative Aussage in der Amtshelden-Headline-Stimme (fette Grotesk, Satzschreibung,
  „für Behörden“ grün): „Die digitale Konferenz für Behörden, die neue Wege gehen.“ Mobil direkt unter dem Logo.
- Farbhierarchie festgelegt: Basis Bone + Tinte · Primär Amtshelden-Gelb + Grün · Tertiär Infrarot `#FF4B23` und Purple `#7861D7`, nur punktuell (Keynote-Signal, Case-Icon, Akzente in der Motion).
- Schrift (Variante C): Headlines Archivo, Fließtext Georgia wie auf amtshelden.de – linksbündig mit Silbentrennung; Labels Martian Mono. Die „Was ist D3?“-Aussage in Archivo.
- „by Amtshelden“ größer. Networking startet gelb, damit es nicht an die grüne Thema-Kachel stößt.
- Preloader: Nach der Bildmarke laufen Schlagwörter im Takt (Digitale Konferenz · Für Behörden · KI in der Verwaltung ·
  Ein Tag im Browser) und lösen sich in „Deep / Dive Day“ auf.

## v5.3 – Motion · 2026-10-02

### Neu
- Preloader: Die drei D-Körper der Bildmarke schieben sich ineinander, die fertige Marke fliegt in die Leiste,
  danach bauen sich die Kacheln von links oben auf. Klick überspringt, `intro` in den Props schaltet ab.
- Ambient-Motion nach den Referenzen (9-Square-Animation, Poster-Raster): gerasterte Schritte – Bewegung ~0,45 s,
  dann Halt –, Rotation in 22,5°/90°-Stufen, Teile verschieben sich, aus Überlagerungen entsteht eine zweite Farbe.
- Farb-Wischer: Ein Halbkreis (D-Körper) wächst von einer Kachelkante und bringt die nächste Farbe
  (Networking Grün → Gelb → Bone, Porträt Gelb → Grün → Gelb → Bone, „Als Nächstes“ Weiß ↔ Gelb).
- Porträt-Masken wechseln per Kreis-Wischer statt Überblendung.
- Maus-Tiefe: Text 2 px, Porträts 4 px, Icons 6 px – per CSS-Variable, ohne Neu-Rendern. Nur Desktop.
- Weiter-/CTA-Pfeil: Die D-Staffel fährt beim Hover aus.

### Entfernt
- Schwenk-/Dreh-Hover der Icons.

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
