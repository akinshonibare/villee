import { hero } from "@/content";

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      {/* decorative shapes — stand in for photos until real assets land */}
      <div
        aria-hidden
        className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-rust/90 blur-2xl opacity-70"
      />
      <div
        aria-hidden
        className="absolute top-40 -left-20 w-[280px] h-[280px] rounded-full bg-ochre/70 blur-2xl opacity-60"
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-1/3 w-[200px] h-[200px] rounded-full bg-forest/40 blur-2xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-24 sm:pt-24 sm:pb-32">
        <div className="inline-flex items-center gap-2 mb-8 text-xs uppercase tracking-[0.2em] bg-ink text-cream px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-ochre animate-pulse" />
          {hero.eyebrow}
        </div>

        <h1 className="display text-[14vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.92] tracking-tight max-w-5xl">
          {hero.headline.map((line, i) => (
            <span key={i} className="block">
              {i === 2 ? (
                <>
                  a card that <span className="display-italic text-rust">gets you in.</span>
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        <p className="mt-10 max-w-xl text-lg sm:text-xl leading-relaxed text-ink-soft">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full text-base font-medium hover:bg-rust transition"
          >
            {hero.primaryCta.label}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 border-2 border-ink px-7 py-4 rounded-full text-base font-medium hover:bg-ink hover:text-cream transition"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <p className="script text-2xl mt-16 text-ink-soft -rotate-2 inline-block">
          {hero.scribble}
        </p>
      </div>
    </section>
  );
}
