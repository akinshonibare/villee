import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { Pitch } from "./sections/Pitch";
import { Perks } from "./sections/Perks";
import { Events } from "./sections/Events";
import { Cities } from "./sections/Cities";
import { Founders } from "./sections/Founders";
import { Faq } from "./sections/Faq";
import { FooterCta } from "./sections/FooterCta";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Pitch />
      <Perks />
      <Events />
      <Cities />
      <Founders />
      <Faq />
      <FooterCta />
    </main>
  );
}
