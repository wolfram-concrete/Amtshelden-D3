# Amtshelden D3 – Deep Dive Day

Event-Website für D3, das wiederkehrende digitale B2G-Event von Amtshelden.
Ausgabe 1: **D3: KI + Transformation**. Anmeldung später über Let's Get Digital.

- Briefing: https://docs.google.com/document/d/1grwTioy0KYaqkIG4jyswoq4MoUHnkSsbOVQYmfsstwM

## Design-Exploration (aktuell)

Next.js-Prototyp mit zwei bewusst getrennten Richtungen, gleiche Inhalte:

- `/` – interne Auswahl
- `/concept-01` – Bold & Modular (testet das Branding-System)
- `/concept-03` – Immersive & Experimental (testet das Experience-System)

```
npm install
npm run dev   # http://localhost:4320
```

Struktur: `data/event.ts` (Inhalte), `styles/tokens.css` (Basistokens), `lib/geometry.ts` (D3-Logoformel),
`components/shared`, `components/concept01`, `components/concept03`.

Porträts sind Unsplash-Platzhalter (`public/people/CREDITS.md`).

## Frühere Stände

- Konzept v2 – Fragment-System: `concept/fragment/index.html`
- Konzept v1 – Raumplan: `concept/index.html`
- Logo: `SVG/D3.svg` (Entwurf), `SVG/D3-konstruktion.svg` (Rekonstruktion: 3 Halbscheiben, 0°/20°/45°, evenodd)
