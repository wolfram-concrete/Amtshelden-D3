// Einmaliger Port: Canvas-Quelle (D3App2.dc.html) -> Next.js/React-Komponenten unter components/d3/.
// Nach dem Port ist der TSX-Code die Quelle; dieses Skript bleibt als Dokumentation, wie der Port entstanden ist.
// Aufruf: node scripts/port/dc2react.js design/canvas-v7/D3App4.dc.html
const fs = require('fs');
const path = require('path');
const { parseDocument } = require('htmlparser2');

const SRC = process.argv[2] || 'design/canvas-v7/D3App4.dc.html';
const OUT = path.join(process.cwd(), 'components/d3');
const src = fs.readFileSync(SRC, 'utf8');

// ---------- Bild-Referenzen (Canvas-Blobs -> public/) ----------
const PEOPLE = { '98e908777a6ce188713344468d23a9bd': 'p01', '9decf5a8e398cd0dc5fd92a958984bea': 'p02', 'c111eb0a0ddd902b6e60881bcca3f4f8': 'p03', '3c130c3512412f2f7ef3681f6b8c0092': 'p04', '5319da926d88bc3da618a5548c1a7e2f': 'p05', '9313403364efa784c3d646ede2eb7604': 'p06', 'ed54bddf64811e958622c804c955b3d3': 'p07' };
const BILD = { 'b9dbfe3583841f16c5eab821d9d8b606': 'moment', '3a42ae62d726dc78688b3533aa28784f': 'portrait', 'd067191351eac9a6cee031d9e6377515': 'focus', 'd620b9305d522459351839f5eb9f7c44': 'exchange', '36b57eb707c2c135d136451c2f4c8b0e': 'explorer', 'dbb364f1d4d0781054a26e6cb359420e': 'connection', '7b309914c815330de68249b35626c17b': 'speaker', '35420064cf3edf05a1a77cfdb2442dad': 'space', '308878e2bf45e2dc4ab6146c01768370': 'about', '93ceb67090ec6804918b62b94f9f9cfd': 'moment', '25fae1ee7b4e2360f82780ef92474e94': 'portrait', '4cc6fa87aa6da5b3530e1849c20493a8': 'focus', '1903b319b4944cc7b79dc47efe2d2c7c': 'exchange', '22f1fd011889ce9a747c17d63deadb30': 'explorer', 'ecb49eb6cc82e70c748f1beb7843cdd2': 'connection', 'cda17e779e11afd463a480aaee19badb': 'speaker', '0982c5a62984084b65b5b9e8f2148afd': 'space' };
const STILL = { '77542a5ba9e2905b7b2303a3e2893565': 'fk', 'cfa84faf8f69e4d49a592d82fe4a5dbc': 'fc', '40ab1d1779ad2efc608a76382e97cb6a': 'fm', '9e09a49ab311ce9a4f7433ae507becf5': 'fn', '39688cdf81f0f3dd6c2b57f86d2ea5eb': 'fs' };
const fixBlobs = (s) => s.replace(/\/_blob\/([0-9a-f]{32})/g, (m, id) => STILL[id] ? `/bildwelt/d3-3d-${STILL[id]}.png` : BILD[id] ? `/bildwelt/d3-${BILD[id]}.jpg` : PEOPLE[id] ? `/people/${PEOPLE[id]}.jpg` : m);

// ---------- Teile der Quelle ----------
const helmet = src.match(/<helmet>([\s\S]*?)<\/helmet>/)[1];
const css = fixBlobs(helmet.match(/<style>([\s\S]*?)<\/style>/)[1].trim());
const tpl = fixBlobs(src.match(/<x-dc>([\s\S]*?)<\/x-dc>/)[1].replace(/<helmet>[\s\S]*?<\/helmet>/, ''));
const code = fixBlobs(src.match(/<script type="text\/x-dc" data-dc-script data-props=(?:'[^']*'|"[^"]*")>([\s\S]*?)<\/script>/)[1]);

// ---------- Template -> JSX ----------
const doc = parseDocument(tpl, { lowerCaseAttributeNames: false, lowerCaseTags: false, recognizeSelfClosing: true, decodeEntities: true });
const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g, WHOLE = /^\{\{\s*([^}]+?)\s*\}\}$/;
const VOID = new Set(['input', 'img', 'br', 'hr', 'meta', 'link', 'source', 'col', 'area', 'wbr']);
const BOOL = new Set(['open', 'disabled', 'checked', 'hidden', 'required', 'autofocus', 'muted', 'loop', 'playsinline', 'readonly']);
const EV = { onclick: 'onClick', onmouseenter: 'onMouseEnter', onmouseleave: 'onMouseLeave', onwheel: 'onWheel', onmousemove: 'onMouseMove', onsubmit: 'onSubmit', ontouchstart: 'onTouchStart', ontouchend: 'onTouchEnd', onchange: 'onChange', oninput: 'onInput' };
const ATTR = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength', autocomplete: 'autoComplete', 'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink', srcset: 'srcSet', crossorigin: 'crossOrigin' };
const camel = (s) => s.replace(/[-:]([a-z])/g, (m, c) => c.toUpperCase());

function expr(p, scope) {
  p = p.trim();
  if (/^(true|false|null)$/.test(p) || /^-?\d+(\.\d+)?$/.test(p)) return p;
  if (/^'.*'$/.test(p)) return JSON.stringify(p.slice(1, -1));
  const segs = p.split('.');
  const js = segs.map((x, i) => i && /^\d+$/.test(x) ? `[${x}]` : (i ? '.' + x : x)).join('');
  return scope.has(segs[0]) ? js : 'v.' + js;
}
const tick = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
function strExpr(raw, scope) { // gemischter String mit Holes -> Template-Literal
  const m = raw.match(WHOLE);
  if (m) return expr(m[1], scope);
  if (!HOLE.test(raw)) return JSON.stringify(raw);
  HOLE.lastIndex = 0;
  let out = '', i = 0, r;
  while ((r = HOLE.exec(raw))) { out += tick(raw.slice(i, r.index)) + '${' + expr(r[1], scope) + ' ?? ""}'; i = r.index + r[0].length; }
  return '`' + out + tick(raw.slice(i)) + '`';
}
function styleExpr(raw, scope) {
  const parts = [];
  raw.split(';').forEach((d) => {
    const i = d.indexOf(':'); if (i < 0) return;
    const k = d.slice(0, i).trim(), val = d.slice(i + 1).trim(); if (!k) return;
    const key = k.startsWith('--') ? JSON.stringify(k) : camel(k);
    parts.push(`${key}: ${strExpr(val, scope)}`);
  });
  return '{{ ' + parts.join(', ') + ' } as Css}';
}
function attrs(el, scope, svg) {
  const out = [];
  for (const [n0, raw] of Object.entries(el.attribs)) {
    if (n0.startsWith('hint-')) continue;
    let n = n0;
    if (n === 'style') { out.push('style=' + styleExpr(raw, scope)); continue; }
    if (n === 'class') { const e = strExpr(raw.replace(/\s+/g, ' ').trim(), scope); out.push('className=' + (e.startsWith('"') ? e : '{' + e + '}')); continue; }
    const lower = n.toLowerCase();
    if (EV[lower]) { let ev = EV[lower]; if (ev === 'onInput' && el.name === 'input') ev = 'onChange'; out.push(`${ev}={${strExpr(raw, scope)}}`); continue; }
    if (n === 'ref') { out.push(`ref={${strExpr(raw, scope)}}`); continue; }
    if (ATTR[n]) n = ATTR[n];
    else if (svg && /[-:]/.test(n) && !/^(aria|data)-/.test(n)) n = camel(n);
    if (BOOL.has(lower) && raw === '') { out.push(n); continue; }
    const e = strExpr(raw, scope);
    out.push(e.startsWith('"') ? `${n}=${e}` : `${n}={${e}}`);
  }
  return out;
}
function textJsx(t, scope) {
  if (!t.trim()) return null;
  const norm = t.replace(/\s+/g, ' ');
  const pieces = []; let i = 0, r; HOLE.lastIndex = 0;
  while ((r = HOLE.exec(norm))) { if (r.index > i) pieces.push(['s', norm.slice(i, r.index)]); pieces.push(['e', expr(r[1], scope)]); i = r.index + r[0].length; }
  if (i < norm.length) pieces.push(['s', norm.slice(i)]);
  return pieces.map(([k, x]) => k === 'e' ? `{${x}}` : (/^[^{}<>&"'`]*$/.test(x) && !/^\s|\s$/.test(x) ? x : `{${JSON.stringify(x)}}`)).join('');
}
function jsx(n, scope, ind, svg) {
  const pad = '  '.repeat(ind);
  if (n.type === 'text') { const t = textJsx(n.data, scope); return t == null ? null : pad + t; }
  if (n.type !== 'tag') return null;
  if (n.name === 'sc-for') {
    const list = n.attribs.list.match(WHOLE)[1], as = n.attribs.as || 'item';
    const sc2 = new Set(scope); sc2.add(as);
    const kids = n.children.map((k) => jsx(k, sc2, ind + 2, svg)).filter(Boolean);
    return `${pad}{(${expr(list, scope)} || []).map((${as}: any, ${as}Index: number) => (\n${pad}  <Fragment key={${as}Index}>\n${kids.join('\n')}\n${pad}  </Fragment>\n${pad}))}`;
  }
  if (n.name === 'sc-if') {
    const cond = expr(n.attribs.value.match(WHOLE)[1], scope);
    const kids = n.children.map((k) => jsx(k, scope, ind + 2, svg)).filter(Boolean);
    return `${pad}{${cond} ? (\n${pad}  <>\n${kids.join('\n')}\n${pad}  </>\n${pad}) : null}`;
  }
  const isSvg = svg || n.name === 'svg';
  const a = attrs(n, scope, isSvg);
  const open = `<${n.name}${a.length ? ' ' + a.join(' ') : ''}`;
  const kids = n.children.map((k) => jsx(k, scope, ind + 1, isSvg)).filter(Boolean);
  if (!kids.length) return `${pad}${open} />`;
  return `${pad}${open}>\n${kids.join('\n')}\n${pad}</${n.name}>`;
}

// ---------- Aufteilung in Komponenten ----------
const MODS = {
  d3: ['D3Cell', 'Home'], brand: ['Brand', 'Home'], theme: ['Theme', 'Home'], why: ['Why', 'Home'], hero: ['Hero', 'Home'],
  next: ['NextEdition', 'Home'], date: ['DateCell', 'Home'], cta: ['Cta', 'Home'], cta2: ['Cta2', 'Home'], hint: ['Hint', 'Home'],
  pc: ['Speaker1', 'Speakers'], s2: ['Speaker2', 'Speakers'], s3: ['Speaker3', 'Speakers'], s4: ['Speaker4', 'Speakers'], s5: ['Speaker5', 'Speakers'], s6: ['Speaker6', 'Speakers'],
  spkhead: ['SpeakerHead', 'Speakers'], sdetail: ['SpeakerDetail', 'Speakers'],
  xhead: ['ExploreHead', 'Formats'], board: ['ProgramBoard', 'Program'],
  phead2: ['PartnerHead', 'Partner'], logos: ['Logos', 'Partner'], editions: ['Editions', 'Partner'], about: ['About', 'Partner'], faq: ['Faq', 'Partner'],
};
const DOC = {
  Home: 'Home-Zellen: Marke, Thema, Aussage, Porträt-Zelle, Ausgaben, Datum, Aktionen.',
  Speakers: 'Speaker*innen: Kopf mit Bild, sechs Porträt-Zellen, Detail.',
  Formats: 'Formate: Kopfzelle und die fünf Format-Kacheln (Zeichen, 3D-Körper bei Hover).',
  Program: 'Programm als Tagesreise: Filter, Jetzt/Als Nächstes, Zeitachse mit Räumen, aufklappender Programmpunkt.',
  Partner: 'Mitmachen: Kopf mit Bild, Partner, Ausgaben, Über D3, Frag D3 (FAQ ohne KI).',
  parts: 'Rahmen: Leiste, Navigation unten, Preloader, Körnung.',
};
const files = { Home: [], Speakers: [], Formats: [], Program: [], Partner: [], parts: [] };
const S0 = new Set();
function component(name, node, file, note) {
  files[file].push(`${note ? `/** ${note} */\n` : ''}export function ${name}({ v }: { v: V }) {\n  return (\n${jsx(node, S0, 2, false)}\n  );\n}`);
  return name;
}
const root = doc.children.find((n) => n.type === 'tag');
function viewOf(n, ind) { // App-Gerüst: Kinder werden zu Komponenten-Aufrufen
  const pad = '  '.repeat(ind);
  if (n.type !== 'tag') return jsx(n, S0, ind, false);
  const cls = n.attribs.class || '';
  const k = (cls.match(/\bk-([a-z0-9]+)\b/) || [])[1];
  if (cls.split(' ')[0] === 'mod' && MODS[k]) { const [nm, f] = MODS[k]; component(nm, n, f); return `${pad}<${nm} v={v} />`; }
  if (n.name === 'sc-for') { component('FormatTiles', { type: 'tag', name: 'div', attribs: {}, children: [] }, 'Formats'); files.Formats.pop();
    files.Formats.push(`/** Fünf Format-Kacheln (Home, Formate, Mitmachen) */\nexport function FormatTiles({ v }: { v: V }) {\n  return (\n    <>\n${jsx(n, S0, 3, false)}\n    </>\n  );\n}`);
    return `${pad}<FormatTiles v={v} />`; }
  if (n.name === 'header') { component('Bar', n, 'parts', 'Leiste: Bildmarke, Navigation, Zähler, Aktion'); return `${pad}<Bar v={v} />`; }
  if (n.name === 'nav') { component('BottomNav', n, 'parts', 'Navigation unten (Tablet, Mobil)'); return `${pad}<BottomNav v={v} />`; }
  if (/\bintro\b/.test(cls)) { component('Intro', n, 'parts', 'Preloader: Bildmarke baut sich auf, Schlagwörter, „Deep / Dive Day“'); return `${pad}<Intro v={v} />`; }
  if (n.name === 'svg' && /\bgrain\b/.test(cls)) { component('Grain', n, 'parts', 'Körnung über der Fläche'); return `${pad}<Grain v={v} />`; }
  const a = attrs(n, S0, false);
  const kids = n.children.map((c) => viewOf(c, ind + 1)).filter(Boolean);
  return `${pad}<${n.name}${a.length ? ' ' + a.join(' ') : ''}>\n${kids.join('\n')}\n${pad}</${n.name}>`;
}
const view = viewOf(root, 2);

// ---------- Dateien schreiben ----------
fs.mkdirSync(path.join(OUT, 'modules'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'parts'), { recursive: true });
const HEAD = (doc) => `// ${doc}\n// Werte (v) kommen aus D3App.renderVals().\nimport { Fragment } from 'react';\nimport type { V, Css } from '../types';\n\n`;
for (const [f, list] of Object.entries(files)) {
  if (!list.length) continue;
  const dir = f === 'parts' ? 'parts' : 'modules';
  const body = list.join('\n\n');
  const head = HEAD(DOC[f]).replace("import { Fragment } from 'react';\n", body.includes('<Fragment') ? "import { Fragment } from 'react';\n" : '');
  fs.writeFileSync(path.join(OUT, dir, `${f === 'parts' ? 'Frame' : f}.tsx`), head + body + '\n');
}
const used = {};
for (const [k, [nm, f]] of Object.entries(MODS)) (used[f] = used[f] || []).push(nm);
used.Formats.push('FormatTiles');
fs.writeFileSync(path.join(OUT, 'D3View.tsx'),
`// Gerüst des Interfaces: Leiste, Bühne mit allen Zellen, Navigation unten, Preloader.
// Welche Zelle wo steht, entscheidet das Layout (lib/d3/layout.ts) über v.P.
import type { V, Css } from './types';
import { Bar, BottomNav, Intro, Grain } from './parts/Frame';
${Object.entries(used).map(([f, l]) => `import { ${l.join(', ')} } from './modules/${f}';`).join('\n')}

export default function D3View({ v }: { v: V }) {
  return (
${view}
  );
}
`);
fs.writeFileSync(path.join(OUT, 'types.ts'),
`// Werte, die D3App.renderVals() an die Ansicht gibt. Bewusst offen typisiert: Der Port übernimmt die Logik 1:1,
// die Typisierung folgt Zelle für Zelle.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type V = Record<string, any>;
/** Inline-Stile mit Custom Properties (--cols, --i …) */
export type Css = import('react').CSSProperties & Record<\`--\${string}\`, string | number | undefined>;
`);
fs.writeFileSync(path.join(OUT, 'd3.css'), '/* D3 Mosaic Interface – Stile (portiert aus der Canvas-Quelle, Stand v7) */\n' + css + '\n');

// ---------- Logik ----------
let logic = code.trim().replace(/^class Component extends DCLogic \{/, 'export default class D3App extends Component<D3Props, any> {');
// Layout und Programmdaten in eigene Module
const layM = logic.match(/\n  lay\(\) \{\n    return (\{[\s\S]*?\n    \});\n  \}\n/);
const layout = layM[1];
logic = logic.replace(layM[0], '\n  lay() {\n    return LAYOUT;\n  }\n');
const grab = (name) => { const m = logic.match(new RegExp(`\\n    var ${name} = (\\[[^\\n]*\\]|\\[[\\s\\S]*?\\n    \\]|\\{[\\s\\S]*?\\n    \\});\\n`)); if (!m) throw new Error('grab ' + name); logic = logic.replace(m[0], `\n    var ${name} = ${name}_DATA;\n`); return m[1]; };
const F = grab('F'), R = grab('R'), S = grab('S'), SP = grab('SP');
fs.mkdirSync(path.join(process.cwd(), 'lib/d3'), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), 'lib/d3/layout.ts'),
`// Raster-Layouts je Gerät und Zustand: Zelle -> [Spalte, Zeile, Breite, Höhe].
// Desktop 12 Spalten, Tablet 8, Mobil 4. Fehlt eine Zelle im Zustand, blendet sie aus.
type Cell = [number, number, number, number];
type States = Record<'home' | 'explore' | 'program' | 'speaker' | 'partner', Record<string, Cell>>;
export const LAYOUT: Record<'desk' | 'tab' | 'mob', States> = ${layout.replace(/\n    /g, '\n')};
`);
fs.writeFileSync(path.join(process.cwd(), 'lib/d3/program.ts'),
`// Programm der Ausgabe 01. [Klammern] = Platzhalter.
// f: Format · room: 0 Main Stage, 1 Raum 2, 2 Werkstatt, 3 Lounge · spk: Index der Speaker*in
export type Session = { id: string; t: string; e: string; f: string; room: number; title: string; who: string; topic: string; spk?: number };

/** Format -> [Bezeichnung, Zeichen-Klasse] */
export const FORMATS: Record<string, [string, string]> = ${F.replace(/\n    /g, '\n')};

export const ROOMS = ${R};

export const SESSIONS: Session[] = ${S.replace(/\n    /g, '\n')};

/** Porträts der Speaker*innen (Platzhalter) */
export const SPEAKER_PHOTOS = ${SP};
`);
logic = logic.replace(/\n    var F = F_DATA;/, '\n    var F = FORMATS;').replace(/\n    var R = R_DATA;/, '\n    var R = ROOMS;').replace(/\n    var S = S_DATA;/, '\n    var S = SESSIONS;').replace(/\n    var SP = SP_DATA;/, '\n    var SP = SPEAKER_PHOTOS;');
logic = logic.replace(/\n\}\s*$/, '\n\n  render() {\n    return <D3View v={this.renderVals()} />;\n  }\n}\n');
fs.writeFileSync(path.join(OUT, 'D3App.tsx'),
`// @ts-nocheck – Logik 1:1 aus dem Prototyp portiert (Zustände, Layout, Programm, 3D, Preloader, Frag D3).
// Die Typisierung folgt schrittweise; Ansicht (D3View + modules/) und Daten (lib/d3/) sind bereits getypt.
'use client';

import { Component } from 'react';
import D3View from './D3View';
import { LAYOUT } from '@/lib/d3/layout';
import { FORMATS, ROOMS, SESSIONS, SPEAKER_PHOTOS } from '@/lib/d3/program';
import './d3.css';

type D3Props = { phase?: 'Phase 1' | 'Phase 2'; tour?: boolean; grain?: boolean; intro?: boolean };

${logic}`);
console.log('ok');
