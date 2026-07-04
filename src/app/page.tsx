import Link from "next/link";
import { brand, landing, CONTACT_EMAIL, IG_URL } from "@/content";
import { CollageBackdrop } from "./components/CollageBackdrop";
import { RotatingWord } from "./components/RotatingWord";

export default function Home() {
  return (
    <main className="grain relative flex min-h-dvh flex-col overflow-hidden">
      <CollageBackdrop />

      <nav className="relative z-20 flex items-center justify-end gap-2 px-5 pt-5 sm:px-8">
        {landing.navLinks.map((link) =>
          link.href.startsWith("/") ? (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full border border-ink/20 bg-cream-soft/70 px-3.5 py-1.5 text-xs backdrop-blur-sm transition hover:border-rust hover:text-rust"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-ink/20 bg-cream-soft/70 px-3.5 py-1.5 text-xs backdrop-blur-sm transition hover:border-rust hover:text-rust"
            >
              {link.label}
            </a>
          ),
        )}
      </nav>

      <section className="relative z-20 flex flex-1 flex-col items-center justify-center px-5 py-14 text-center sm:px-8">
        <p className="display text-3xl tracking-tight sm:text-4xl">
          {brand.wordmark}
          <span className="text-rust">.</span>
        </p>

        <h1 className="display mt-8 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">
          {landing.headline.pre} <RotatingWord words={landing.rotatingWords} />{" "}
          {landing.headline.post}
        </h1>

        <p className="display-italic mt-7 text-xl text-ink-soft sm:text-2xl">
          {landing.taglines[0]}
          <br className="sm:hidden" />{" "}
          <span className="text-ink">{landing.taglines[1]}</span>
        </p>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
          {landing.body}
        </p>

        <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          {landing.curated}
        </p>

        <p className="script mt-3 -rotate-2 text-2xl text-rust sm:text-3xl">
          {landing.cheer}
        </p>

        <a
          href={landing.cta.href}
          className="mt-8 rounded-full bg-ink px-10 py-4 text-sm text-cream transition hover:bg-rust"
        >
          {landing.cta.label}
        </a>

        <a
          href={landing.secondary.href}
          className="mt-5 text-xs text-ink-soft underline underline-offset-4 transition hover:text-rust"
        >
          {landing.secondary.label}
        </a>
      </section>

      <footer className="relative z-20 flex items-center justify-center gap-3 px-5 pb-6 text-xs text-ink-soft">
        <a href={IG_URL} className="transition hover:text-rust">
          instagram
        </a>
        <span aria-hidden>·</span>
        <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-rust">
          {CONTACT_EMAIL}
        </a>
      </footer>
    </main>
  );
}
