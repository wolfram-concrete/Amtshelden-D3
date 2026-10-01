import type { Metadata } from "next";
import { Stage01 } from "@/components/concept01/Stage";
import { Footer01, Nav01, Program01 } from "@/components/concept01/Chrome";
import s from "@/components/concept01/concept01.module.css";

export const metadata: Metadata = {
  title: "D3 · Konzept 01 – Bold & Modular",
};

export default function Concept01() {
  return (
    <div className={s.page} id="top">
      <Nav01 />
      <main>
        <Stage01 />
        <Program01 />
      </main>
      <Footer01 />
    </div>
  );
}
