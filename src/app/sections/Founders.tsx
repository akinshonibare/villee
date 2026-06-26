import { founders } from "@/content";

export function Founders() {
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-24 sm:py-32 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-rust mb-8">
        {founders.eyebrow}
      </p>
      <blockquote className="display-italic text-3xl sm:text-5xl leading-[1.15] text-ink mb-8">
        <span className="text-rust">&ldquo;</span>
        {founders.quote}
        <span className="text-rust">&rdquo;</span>
      </blockquote>
      <p className="script text-2xl text-ink-soft">{founders.signoff}</p>
    </section>
  );
}
