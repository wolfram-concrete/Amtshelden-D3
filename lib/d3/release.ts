// Veröffentlichungsstand (Briefing Christian, 23.11.2026).
// Solange PROGRAM_LIVE false ist, sind Programm und Speaker ausgeblendet: keine Navigation, keine Weiter-Kacheln,
// alte Direktlinks (#/programm, #/speaker) zeigen den Januar-Hinweis. Die Bereiche bleiben im Code erhalten.
// Im Januar 2027 mit echten Inhalten auf true setzen.
export const PROGRAM_LIVE = false;

/** Einheitlicher Hinweis, überall gleich formuliert */
export const NOTICE = {
  short: 'Programm, Speaker und kostenfreie Anmeldung ab Januar 2027',
  full: 'Am 14. April 2027 geht’s um KI und Transformation in Behörden. Erste Einblicke ins Programm und die Speaker veröffentlichen wir ab Januar 2027. Dann startet auch die kostenfreie Anmeldung. Den genauen Termin geben wir noch bekannt.',
  reg: 'Die Anmeldung zur D3 öffnet im Januar 2027. Den genauen Starttermin geben wir noch bekannt. Sobald es losgeht, findest du hier den Link zur Registrierung. Die D3 findet am 14. April 2027 digital statt.',
};

/** Partneranfragen laufen vorerst per E-Mail */
export const PARTNER_MAIL = 'hallo@amtshelden.de';

export const LEGAL = {
  imprint: 'https://www.amtshelden.de/impressum/',
  privacy: 'https://www.amtshelden.de/datenschutzerklaerung/',
};
