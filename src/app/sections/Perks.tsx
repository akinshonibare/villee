import { perks } from "@/content";

export function Perks() {
  return (
    <section id="perks" className="bg-cream-soft border-y border-ink/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-rust mb-4">
            {perks.eyebrow}
          </p>
          <h2 className="display text-5xl sm:text-7xl leading-[0.95] mb-6">
            {perks.title}
          </h2>
          <p className="text-lg text-ink-soft max-w-xl">{perks.sub}</p>
        </div>

        {/* fake member card — placeholder visual until real card design lands */}
        <div className="relative mb-20 max-w-sm">
          <div className="absolute -inset-2 bg-rust rounded-3xl rotate-2" />
          <div className="relative bg-ink text-cream p-7 rounded-3xl rotate-[-1deg] shadow-2xl">
            <div className="flex justify-between items-start mb-16">
              <span className="display text-2xl">villee</span>
              <span className="text-xs uppercase tracking-widest opacity-70">
                founding member
              </span>
            </div>
            <div className="text-xs uppercase tracking-widest opacity-60 mb-1">
              member
            </div>
            <div className="font-mono text-sm mb-3">YOUR NAME · NO. 001</div>
            <div className="flex justify-between items-end">
              <span className="text-xs opacity-70">est. 2026</span>
              <span className="w-10 h-7 rounded bg-ochre/80" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-cream border border-ink/15 p-6 rounded-2xl hover:border-rust hover:bg-blush/30 transition group"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="display text-2xl mb-2 group-hover:text-rust transition">
                {cat.label}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                {cat.sample}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-ink/15">
          <p className="text-ink-soft">
            <span className="script text-2xl text-ink mr-2">psst —</span>
            partners landing all summer. follow along.
          </p>
          <a
            href={perks.partnerCta.href}
            className="inline-flex items-center gap-2 text-sm font-medium underline decoration-rust decoration-2 underline-offset-4 hover:text-rust"
          >
            {perks.partnerCta.label} →
          </a>
        </div>
      </div>
    </section>
  );
}
