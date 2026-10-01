import Link from "next/link";
import { D3Mark } from "@/components/shared/D3Mark";
import s from "./select.module.css";

const routes = [
  { href: "/concept-01", no: "01", title: "Bold & Modular", test: "Branding-System", line: "Interaktives Eventposter. Raster, Snap, Split." },
  { href: "/concept-03", no: "03", title: "Immersive & Experimental", test: "Experience-System", line: "D3 als Portal. Tiefe, Licht, Eintreten." },
];

export default function Select() {
  return (
    <main className={s.page}>
      <header className={s.head}>
        <D3Mark className={s.mark} />
        <div>
          <p className="label">Intern · nicht öffentlich</p>
          <h1 className={s.title}>D3 Design Exploration</h1>
        </div>
      </header>
      <ul className={s.list}>
        {routes.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className={s.item}>
              <span className={s.no}>{r.no}</span>
              <span className={s.body}>
                <strong>{r.title}</strong>
                <span>{r.line}</span>
              </span>
              <span className={`label ${s.test}`}>Testet: {r.test}</span>
              <span className={s.arrow} aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className={`label ${s.foot}`}>Gleiche Inhalte, gleiche Struktur – bewusst getrennte Gestaltung.</p>
    </main>
  );
}
