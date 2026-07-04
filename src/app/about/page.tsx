import type { Metadata } from "next";
import Image from "next/image";
import {
  pitch,
  perks,
  events,
  cities,
  founders,
  footerCta,
} from "@/content";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "villee — what is this",
};

const CARD_TINTS: Record<string, string> = {
  rust: "bg-rust",
  forest: "bg-forest",
  plum: "bg-plum",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-rust">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      {/* what is this */}
      <section className="mx-auto max-w-4xl pt-16 pb-10 text-center sm:pt-24">
        <Eyebrow>{pitch.eyebrow}</Eyebrow>
        <h1 className="display text-4xl leading-[1.05] sm:text-6xl">
          {pitch.title}
        </h1>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          {pitch.cards.map((card) => (
            <article
              key={card.title}
              className={`${CARD_TINTS[card.tint]} rounded-2xl p-6 text-cream`}
            >
              <div className="mb-6 text-xs opacity-70">{card.tag}</div>
              <h2 className="display mb-3 text-3xl">{card.title}</h2>
              <p className="text-sm leading-relaxed opacity-90">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* perks */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <Eyebrow>{perks.eyebrow}</Eyebrow>
        <h2 className="display text-3xl leading-[1.05] sm:text-5xl">
          {perks.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
          {perks.sub}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {perks.categories.map((cat) => (
            <div
              key={cat.label}
              className="flex items-center gap-4 rounded-2xl border border-ink/15 bg-cream-soft/70 px-5 py-4 text-left"
            >
              <span className="text-2xl" aria-hidden>
                {cat.icon}
              </span>
              <span>
                <span className="block text-sm font-medium">{cat.label}</span>
                <span className="block text-xs text-ink-soft">{cat.sample}</span>
              </span>
            </div>
          ))}
        </div>
        <a
          href={perks.partnerCta.href}
          className="mt-6 inline-block text-xs text-ink-soft underline underline-offset-4 transition hover:text-rust"
        >
          {perks.partnerCta.label}
        </a>
      </section>

      {/* events */}
      <section className="mx-auto max-w-4xl py-10 text-center">
        <Eyebrow>{events.eyebrow}</Eyebrow>
        <h2 className="display text-3xl leading-[1.05] sm:text-5xl">
          {events.title}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
          {events.sub}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {events.past.map((e, i) => (
            <figure key={e.title} className="text-left">
              <div
                className={`relative aspect-[4/5] overflow-hidden rounded-2xl ${
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                }`}
              >
                <Image
                  src={e.photo}
                  alt={e.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <figcaption className="absolute right-4 bottom-4 left-4 text-cream">
                  <span className="mb-1 block text-[10px] uppercase tracking-widest opacity-80">
                    {e.meta}
                  </span>
                  <span className="display block text-xl">{e.title}</span>
                </figcaption>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                {e.caption}
              </p>
            </figure>
          ))}
        </div>
        <p className="script mt-8 text-2xl text-rust">
          {events.next.label}: {events.next.title}
        </p>
      </section>

      {/* cities */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <Eyebrow>{cities.eyebrow}</Eyebrow>
        <h2 className="display text-3xl leading-[1.05] sm:text-5xl">
          {cities.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
          {cities.sub}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {cities.active.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-cream"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-rust" />
              {c}
            </span>
          ))}
          <a
            href={cities.waitlistCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-dashed border-ink/40 px-5 py-2.5 text-sm text-ink-soft transition hover:border-rust hover:text-rust"
          >
            your city? tell us →
          </a>
        </div>
      </section>

      {/* founders */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <Eyebrow>{founders.eyebrow}</Eyebrow>
        <blockquote className="display-italic text-2xl leading-[1.2] sm:text-3xl">
          <span className="text-rust">&ldquo;</span>
          {founders.quote}
          <span className="text-rust">&rdquo;</span>
        </blockquote>
        <p className="script mt-6 text-2xl text-ink-soft">{founders.signoff}</p>
      </section>

      {/* cta */}
      <section className="mx-auto max-w-3xl pt-6 pb-16 text-center">
        <p className="script mb-4 -rotate-2 text-3xl text-rust">
          {footerCta.bigText}
        </p>
        <a
          href={footerCta.cta.href}
          className="inline-block rounded-full bg-ink px-10 py-4 text-sm text-cream transition hover:bg-rust"
        >
          {footerCta.cta.label}
        </a>
        <p className="mt-4 text-xs text-ink-soft">{footerCta.sub}</p>
      </section>
    </PageShell>
  );
}
