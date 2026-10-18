// Programm der Ausgabe 01. [Klammern] = Platzhalter.
// f: Format · room: 0 Main Stage, 1 Raum 2, 2 Werkstatt, 3 Lounge · spk: Index der Speaker*in
export type Session = { id: string; t: string; e: string; f: string; room: number; title: string; who: string; topic: string; spk?: number };

/** Format -> [Bezeichnung, Zeichen-Klasse] */
export const FORMATS: Record<string, [string, string]> = {
  keynote: ['Keynote', 's-circle'], vortrag: ['Fachvortrag', 's-circle'], panel: ['Panel', 's-burst'], case: ['Praxis-Case', 's-burst'],
  master: ['Masterclass', 's-diag'], net: ['Austausch', 's-net'], stand: ['Messe-Area', 's-grid'], mod: ['Moderation', 's-circle'], pause: ['Pause', 's-net']
};

export const ROOMS = ['Track 1', 'Track 2'];

export const SESSIONS: Session[] = [
  { id: 'get-together', t: '09:00', e: '09:30', f: 'net', room: 0, title: 'Get-together und Messe-Area', who: 'Ankommen, Technik testen, Stände besuchen', topic: '' },
  { id: 'begruessung', t: '09:30', e: '09:40', f: 'mod', room: 0, title: 'Begrüßung', who: 'Julia Lupp, Christian Rosenberger', topic: '' },
  { id: 'eroeffnungskeynote', t: '09:40', e: '10:00', f: 'keynote', room: 0, title: 'Eröffnungskeynote', who: '[Speaker*in]', topic: 'KI', spk: 0 },
  { id: 'praxis-case-1', t: '10:00', e: '10:30', f: 'case', room: 0, title: '[Titel Praxis-Case]', who: '[Behörde] · [Unternehmen]', topic: 'Prozesse', spk: 1 },
  { id: 'masterclass-1-vormittag', t: '10:00', e: '11:00', f: 'master', room: 1, title: 'Masterclass 1', who: '[Leitung]', topic: 'Tools', spk: 2 },
  { id: 'fachvortrag-1', t: '10:30', e: '11:00', f: 'vortrag', room: 0, title: 'Fachvortrag 1', who: '[Speaker*in]', topic: 'Cybersecurity', spk: 4 },
  { id: 'panel-1', t: '11:00', e: '11:30', f: 'panel', room: 0, title: '[Titel Panel]', who: '[Beteiligte]', topic: 'Führung', spk: 3 },
  { id: 'masterclass-2-vormittag', t: '11:00', e: '12:00', f: 'master', room: 1, title: 'Masterclass 2', who: '[Leitung]', topic: 'KI' },
  { id: 'fachvortrag-2', t: '11:30', e: '12:00', f: 'vortrag', room: 0, title: 'Fachvortrag 2', who: '[Speaker*in]', topic: 'Infrastruktur' },
  { id: 'pausenmoderation', t: '12:00', e: '12:10', f: 'mod', room: 0, title: 'Pausenmoderation', who: 'Moderation', topic: '' },
  { id: 'mittagspause', t: '12:10', e: '13:00', f: 'pause', room: 0, title: 'Mittagspause', who: 'Messe-Area und Austauschräume offen', topic: '' },
  { id: 'praxis-case-2', t: '13:00', e: '13:30', f: 'case', room: 0, title: '[Titel Praxis-Case]', who: '[Behörde] · [Unternehmen]', topic: 'Transformation und Kultur' },
  { id: 'masterclass-1-nachmittag', t: '13:00', e: '14:00', f: 'master', room: 1, title: 'Masterclass 1', who: '[Leitung]', topic: 'Tools' },
  { id: 'fachvortrag-3', t: '13:30', e: '14:00', f: 'vortrag', room: 0, title: 'Fachvortrag 3', who: '[Speaker*in]', topic: 'Datenschutz und Recht' },
  { id: 'panel-2', t: '14:00', e: '14:30', f: 'panel', room: 0, title: '[Titel Panel]', who: '[Beteiligte]', topic: 'Bündelung und Effizienz' },
  { id: 'masterclass-2-nachmittag', t: '14:00', e: '15:00', f: 'master', room: 1, title: 'Masterclass 2', who: '[Leitung]', topic: 'KI' },
  { id: 'fachvortrag-4', t: '14:30', e: '15:00', f: 'vortrag', room: 0, title: 'Fachvortrag 4', who: '[Speaker*in]', topic: 'Prozesse' },
  { id: 'abschlusskeynote', t: '15:00', e: '15:30', f: 'keynote', room: 0, title: 'Abschlusskeynote', who: '[Speaker*in]', topic: 'Transformation und Kultur', spk: 5 },
  { id: 'abschluss', t: '15:30', e: '15:40', f: 'mod', room: 0, title: 'Abschluss', who: 'Julia Lupp, Christian Rosenberger', topic: '' }
];

/** Porträts der Speaker*innen (Platzhalter) */
export const SPEAKER_PHOTOS = ['/people/p02.jpg', '/people/p03.jpg', '/people/p01.jpg', '/people/p07.jpg', '/people/p04.jpg', '/people/p05.jpg'];
