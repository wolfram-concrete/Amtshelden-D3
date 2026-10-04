// Werte, die D3App.renderVals() an die Ansicht gibt. Bewusst offen typisiert: Der Port übernimmt die Logik 1:1,
// die Typisierung folgt Zelle für Zelle.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type V = Record<string, any>;
/** Inline-Stile mit Custom Properties (--cols, --i …) */
export type Css = import('react').CSSProperties & Record<`--${string}`, string | number | undefined>;
