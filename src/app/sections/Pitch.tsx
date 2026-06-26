import { pitch } from "@/content";

const tintMap = {
  rust: "bg-rust text-cream",
  forest: "bg-forest text-cream",
  plum: "bg-plum text-cream",
} as const;

export function Pitch() {
  return (
    <section id="what" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-rust mb-4">
            {pitch.eyebrow}
          </p>
          <h2 className="display text-5xl sm:text-7xl max-w-2xl leading-[0.95]">
            {pitch.title}
          </h2>
        </div>
        <p className="script text-3xl text-ink-soft -rotate-1">basically:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pitch.cards.map((c) => (
          <div
            key={c.tag}
            className={`${tintMap[c.tint as keyof typeof tintMap]} p-8 rounded-3xl flex flex-col min-h-[320px] hover:-translate-y-1 transition-transform`}
          >
            <div className="flex items-center justify-between mb-10">
              <span className="text-sm opacity-70 font-mono">{c.tag}</span>
              <span className="w-2 h-2 rounded-full bg-current opacity-50" />
            </div>
            <h3 className="display text-5xl mb-6">{c.title}</h3>
            <p className="text-base leading-relaxed opacity-90 mt-auto">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
