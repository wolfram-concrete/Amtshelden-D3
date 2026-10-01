// D3-Logo-Formel: drei gleich große Halbscheiben, gemeinsamer Drehpunkt,
// gedreht um 0° / 20° / 45°, Überlagerungen ausgespart (evenodd).

export const LOGO_ANGLES = [0, 20, 45] as const;
export const LOGO_VIEWBOX = "0 0 8.75 11.55";

const rad = (deg: number) => (deg * Math.PI) / 180;
const f = (n: number) => n.toFixed(3);

/** Halbscheibe auf einer Sehne ab Drehpunkt (px, py), Sehnenwinkel a gegen die Senkrechte. */
export function halfDisc(a: number, px: number, py: number, length: number) {
  const qx = px + length * Math.sin(rad(a));
  const qy = py - length * Math.cos(rad(a));
  const r = length / 2;
  return `M${f(px)},${f(py)} L${f(qx)},${f(qy)} A${f(r)},${f(r)} 0 0 1 ${f(px)},${f(py)} Z`;
}

/** Pfad des D3-Zeichens in Original-Proportionen. */
export function d3Path(angles: readonly number[] = LOGO_ANGLES) {
  return angles.map((a) => halfDisc(a, 0.16, 10.05, 10.06)).join(" ");
}

/** Halbscheibe um ihren Schwerpunkt zentriert (für Räume/Portale). Radius r, Sehne senkrecht links. */
export function centeredD(r: number) {
  const c = (4 * r) / (3 * Math.PI); // Schwerpunkt-Abstand von der Sehne
  return `M${f(-c)},${f(-r)} A${f(r)},${f(r)} 0 0 1 ${f(-c)},${f(r)} Z`;
}
