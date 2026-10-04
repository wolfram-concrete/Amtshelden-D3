// Programm der Ausgabe 01. [Klammern] = Platzhalter.
// f: Format · room: 0 Main Stage, 1 Raum 2, 2 Werkstatt, 3 Lounge · spk: Index der Speaker*in
export type Session = { id: string; t: string; e: string; f: string; room: number; title: string; who: string; topic: string; spk?: number };

/** Format -> [Bezeichnung, Zeichen-Klasse] */
export const FORMATS: Record<string, [string, string]> = {
  keynote: ['Keynote', 's-circle'], vortrag: ['Vortrag', 's-circle'], panel: ['Panel', 's-burst'], case: ['Case', 's-burst'],
  master: ['Masterclass', 's-diag'], net: ['Networking', 's-net'], stand: ['Stände', 's-grid']
};

export const ROOMS = ['Main Stage', 'Raum 2', 'Werkstatt', 'Lounge'];

export const SESSIONS: Session[] = [
  { id: 'a', t: '09:00', e: '09:30', f: 'net', room: 3, title: 'Get-together', who: 'Ankommen, Technik testen, Leute treffen', topic: '' },
  { id: 'b', t: '09:30', e: '09:40', f: 'keynote', room: 0, title: 'Welcome', who: 'Amtshelden', topic: '' },
  { id: 'c', t: '09:40', e: '10:20', f: 'keynote', room: 0, title: '[Titel der Keynote]', who: '[Speaker*in]', topic: 'KI', spk: 0 },
  { id: 'd', t: '10:30', e: '11:10', f: 'case', room: 0, title: '[Case-Titel]', who: '[Behörde]', topic: 'Prozesse', spk: 1 },
  { id: 'e', t: '10:30', e: '11:10', f: 'vortrag', room: 1, title: '[Vortragstitel]', who: '[Speaker*in]', topic: 'Cybersecurity', spk: 4 },
  { id: 'f', t: '10:30', e: '12:00', f: 'master', room: 2, title: '[Titel der Masterclass]', who: '[Leitung]', topic: 'Tools', spk: 2 },
  { id: 'g', t: '11:15', e: '11:55', f: 'vortrag', room: 0, title: '[Vortragstitel]', who: '[Speaker*in]', topic: 'Infrastruktur' },
  { id: 'h', t: '11:15', e: '11:55', f: 'panel', room: 1, title: '[Panel-Titel]', who: '[Beteiligte]', topic: 'Führung', spk: 3 },
  { id: 'i', t: '12:00', e: '13:00', f: 'net', room: 3, title: 'Themenräume & Stände', who: 'Alle', topic: '' },
  { id: 'j', t: '13:00', e: '13:40', f: 'panel', room: 0, title: '[Panel-Titel]', who: '[Beteiligte]', topic: 'Datenschutz & Recht' },
  { id: 'k', t: '13:00', e: '13:40', f: 'case', room: 1, title: '[Case-Titel]', who: '[Behörde]', topic: 'KI' },
  { id: 'l', t: '13:00', e: '14:30', f: 'master', room: 2, title: '[Titel der Masterclass]', who: '[Leitung]', topic: 'Transformation & Kultur' },
  { id: 'm', t: '14:00', e: '14:40', f: 'vortrag', room: 0, title: '[Vortragstitel]', who: '[Speaker*in]', topic: 'KI' },
  { id: 'n', t: '15:00', e: '15:30', f: 'keynote', room: 0, title: 'Abschluss-Keynote', who: '[Speaker*in]', topic: 'Transformation & Kultur', spk: 5 }
];

/** Porträts der Speaker*innen (Platzhalter) */
export const SPEAKER_PHOTOS = ['/people/p02.jpg', '/people/p03.jpg', '/people/p01.jpg', '/people/p07.jpg', '/people/p04.jpg', '/people/p05.jpg'];
