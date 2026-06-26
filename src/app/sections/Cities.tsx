import { cities } from "@/content";

export function Cities() {
  return (
    <section id="cities" className="bg-forest text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-ochre mb-4">
            {cities.eyebrow}
          </p>
          <h2 className="display text-5xl sm:text-7xl leading-[0.95] mb-6">
            {cities.title}
          </h2>
          <p className="text-lg opacity-80 max-w-xl">{cities.sub}</p>
        </div>

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
            live now
          </p>
          <div className="flex flex-wrap gap-3 mb-3">
            {cities.active.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 bg-cream text-ink px-5 py-2.5 rounded-full text-base font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-rust animate-pulse" />
                {c}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 border border-dashed border-cream/40 px-5 py-2.5 rounded-full text-base opacity-70">
              your city?
            </span>
          </div>
          <p className="script text-2xl opacity-80 mt-4">
            ↑ wherever you ask us to go, basically
          </p>
        </div>

        {cities.soon.length > 0 && (
          <div className="mb-14">
            <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
              coming soon
            </p>
            <div className="flex flex-wrap gap-3">
              {cities.soon.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 border border-cream/30 px-5 py-2.5 rounded-full text-base"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-8 border-t border-cream/20">
          <p className="script text-3xl">{cities.waitlistLabel}</p>
          <a
            href={cities.waitlistCta.href}
            className="inline-flex items-center gap-2 bg-ochre text-ink px-6 py-3 rounded-full font-medium hover:bg-cream transition self-start"
          >
            {cities.waitlistCta.label} →
          </a>
        </div>
      </div>
    </section>
  );
}
