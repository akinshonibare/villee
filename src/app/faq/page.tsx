import type { Metadata } from "next";
import { faq, footerCta } from "@/content";
import { FaqList } from "../components/FaqList";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "villee — questions, answered",
};

export default function FaqPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-2xl pt-16 pb-16 text-center sm:pt-24">
        <h1 className="display text-4xl leading-[1.05] sm:text-6xl">
          {faq.title}
        </h1>
        <div className="mt-10">
          <FaqList />
        </div>
        <p className="script mt-12 -rotate-2 text-3xl text-rust">
          {footerCta.bigText}
        </p>
        <a
          href={footerCta.cta.href}
          className="mt-4 inline-block rounded-full bg-ink px-10 py-4 text-sm text-cream transition hover:bg-rust"
        >
          {footerCta.cta.label}
        </a>
      </section>
    </PageShell>
  );
}
