// Gemeinsame Inhalte für beide Konzepte – identisch, damit die Routen vergleichbar bleiben.

export const event = {
  presenter: "Amtshelden präsentiert",
  name: "D3",
  longName: "Deep Dive Day",
  theme: "KI + Transformation",
  claim: "Der B2G-Event für alle, die Verwaltung mit KI verändern wollen.",
  cta: "Enter D3",
  date: "Datum folgt",
  time: "09:00–15:30",
  place: "Digital",
};

export const nav = [
  { label: "Programm", href: "#programm" },
  { label: "Speaker", href: "#speaker" },
  { label: "Masterclasses", href: "#formate" },
  { label: "Cases", href: "#formate" },
  { label: "Partner", href: "#formate" },
];

export const registerLabel = "Anmeldung";

export const experience = {
  headline: ["Ein Tag.", "Viele Räume.", "Ein Deep Dive."],
  intro:
    "Du sitzt am Rechner – und bewegst dich trotzdem durch einen ganzen Veranstaltungstag. Vom Vortrag in den Workshop, vom Case an den Stand, vom Stand ins Gespräch.",
};

export type FormatKey = "keynotes" | "cases" | "masterclasses" | "networking" | "partner";

export const formats: { key: FormatKey; title: string; line: string; text: string }[] = [
  {
    key: "keynotes",
    title: "Keynotes",
    line: "Die großen Linien",
    text: "Wohin KI die Verwaltung bringt – und was das für deine Arbeit heißt.",
  },
  {
    key: "cases",
    title: "Cases",
    line: "Verwaltung in der Praxis",
    text: "Behörden zeigen, was sie umgesetzt haben. Mit Zahlen, Fehlern und Learnings.",
  },
  {
    key: "masterclasses",
    title: "Masterclasses",
    line: "Wissen anwenden",
    text: "In kleinen Gruppen, mit echten Aufgaben aus dem Amtsalltag.",
  },
  {
    key: "networking",
    title: "Networking",
    line: "Menschen treffen",
    text: "Kleine Räume für Austausch mit Kolleginnen und Kollegen aus anderen Behörden.",
  },
  {
    key: "partner",
    title: "Partner",
    line: "Technologien entdecken",
    text: "Lösungen kennenlernen, Fragen stellen, Kontakte knüpfen.",
  },
];

export type ProgramItem = {
  time: string;
  title: string;
  format: string;
  room: string;
  detail: string;
};

export const program: ProgramItem[] = [
  { time: "09:00", title: "Get-together", format: "Networking", room: "Lobby", detail: "Ankommen, Kaffee, erste Gespräche" },
  { time: "09:30", title: "Welcome", format: "Opening", room: "Main Stage", detail: "Amtshelden eröffnen den Tag" },
  { time: "09:40", title: "Keynote", format: "Keynote", room: "Main Stage", detail: "KI in der Verwaltung: Was jetzt wirklich geht" },
  { time: "10:30", title: "Case", format: "Case", room: "Case Space", detail: "Ein Landkreis automatisiert seine Anträge" },
  { time: "11:15", title: "Masterclass", format: "Masterclass", room: "Masterclass", detail: "Prompting für die Sachbearbeitung" },
  { time: "12:00", title: "Networking", format: "Networking", room: "Networking", detail: "Austausch in kleinen Gruppen" },
];

export const people = {
  p01: "/people/p01.jpg",
  p02: "/people/p02.jpg",
  p03: "/people/p03.jpg",
  p04: "/people/p04.jpg",
  p05: "/people/p05.jpg",
  p06: "/people/p06.jpg",
  p07: "/people/p07.jpg",
};
