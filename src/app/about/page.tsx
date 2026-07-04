import type { Metadata } from "next";
import { Nav } from "../sections/Nav";
import { Marquee } from "../sections/Marquee";
import { Pitch } from "../sections/Pitch";
import { Perks } from "../sections/Perks";
import { Events } from "../sections/Events";
import { Cities } from "../sections/Cities";
import { Founders } from "../sections/Founders";
import { FooterCta } from "../sections/FooterCta";

export const metadata: Metadata = {
  title: "villee — what is this",
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <Marquee />
      <Pitch />
      <Perks />
      <Events />
      <Cities />
      <Founders />
      <FooterCta />
    </main>
  );
}
