import { d3Path, LOGO_VIEWBOX } from "@/lib/geometry";

export type ShapeKind = "quarter" | "half" | "circle" | "burst" | "dots" | "arrow" | "diagonal" | "mark";

const burstPoints = (() => {
  const pts: string[] = [];
  const n = 12;
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? 50 : 19;
    const a = (Math.PI * i) / n - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
})();

type Props = { kind: ShapeKind; color: string; className?: string };

/** Grafische Fragmente für Konzept 01 – Poster-Vokabular, abgeleitet aus Kreis, Halbscheibe und Diagonale. */
export function Shape({ kind, color, className }: Props) {
  if (kind === "mark") {
    return (
      <svg className={className} viewBox={LOGO_VIEWBOX} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <path d={d3Path()} fill={color} fillRule="evenodd" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {kind === "quarter" && <path d="M0,100 L0,0 A100,100 0 0 1 100,100 Z" fill={color} />}
      {kind === "half" && <path d="M25,0 A50,50 0 0 1 25,100 Z" fill={color} />}
      {kind === "circle" && <circle cx="50" cy="50" r="50" fill={color} />}
      {kind === "burst" && <polygon points={burstPoints} fill={color} />}
      {kind === "dots" &&
        Array.from({ length: 25 }, (_, i) => (
          <circle key={i} cx={10 + (i % 5) * 20} cy={10 + Math.floor(i / 5) * 20} r={i % 6 === 0 ? 7 : 4.2} fill={color} />
        ))}
      {kind === "arrow" && (
        <g fill="none" stroke={color} strokeWidth="9" strokeLinecap="square">
          <path d="M14,14 L82,82" />
          <path d="M40,84 L84,84 L84,40" />
        </g>
      )}
      {kind === "diagonal" && <path d="M0,0 L100,0 L0,100 Z" fill={color} />}
    </svg>
  );
}
