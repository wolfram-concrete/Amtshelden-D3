import { d3Path, LOGO_VIEWBOX } from "@/lib/geometry";

type Props = {
  className?: string;
  color?: string;
  title?: string;
};

/** Das D3-Zeichen, aus der Formel gerendert. */
export function D3Mark({ className, color = "currentColor", title = "D3" }: Props) {
  return (
    <svg className={className} viewBox={LOGO_VIEWBOX} role="img" aria-label={title}>
      <path d={d3Path()} fill={color} fillRule="evenodd" />
    </svg>
  );
}

/** Zeichen + Wortmarke. */
export function D3Lockup({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={className} aria-label="D3 Deep Dive Day">
      <D3Mark className={markClassName} title="" />
      <span aria-hidden="true">D3</span>
    </span>
  );
}
