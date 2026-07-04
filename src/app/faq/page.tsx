import type { Metadata } from "next";
import { Nav } from "../sections/Nav";
import { Faq } from "../sections/Faq";
import { FooterCta } from "../sections/FooterCta";

export const metadata: Metadata = {
  title: "villee — questions, answered",
};

export default function FaqPage() {
  return (
    <main>
      <Nav />
      <Faq />
      <FooterCta />
    </main>
  );
}
