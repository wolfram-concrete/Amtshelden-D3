import type { Metadata } from "next";
import { Portal } from "@/components/concept03/Portal";
import { Rooms } from "@/components/concept03/Rooms";
import { Footer03, Hud, Nav03, Program03 } from "@/components/concept03/Chrome";
import s from "@/components/concept03/concept03.module.css";

export const metadata: Metadata = {
  title: "D3 · Konzept 03 – Immersive & Experimental",
};

export default function Concept03() {
  return (
    <div className={s.page}>
      <Nav03 />
      <Hud />
      <main>
        <Portal />
        <Rooms />
        <Program03 />
      </main>
      <Footer03 />
    </div>
  );
}
