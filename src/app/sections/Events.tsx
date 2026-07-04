import Image from "next/image";
import { events } from "@/content";

export function Events() {
  return (
    <section id="events" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-rust mb-4">
            {events.eyebrow}
          </p>
          <h2 className="display text-5xl sm:text-7xl leading-[0.95] mb-6 max-w-xl">
            {events.title}
          </h2>
          <p className="text-lg text-ink-soft max-w-md">{events.sub}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {events.past.map((e, i) => (
          <article
            key={e.title}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 group-hover:scale-[1.01] transition-transform">
              <Image
                src={e.photo}
                alt={e.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-cream">
                <div className="text-xs uppercase tracking-widest opacity-80 mb-1">
                  {e.meta}
                </div>
                <div className="display text-2xl">{e.title}</div>
              </div>
            </div>
            <p className="text-ink-soft text-sm leading-relaxed">
              <span className="script text-xl text-ink mr-1">{i + 1}.</span>
              {e.caption}
            </p>
          </article>
        ))}
      </div>

      {/* next event teaser */}
      <div className="relative bg-ink text-cream rounded-3xl p-10 sm:p-14 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-rust/40 blur-3xl" />
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ochre mb-3">
              {events.next.label}
            </p>
            <h3 className="display text-4xl sm:text-5xl max-w-md">
              {events.next.title}
            </h3>
          </div>
          <a
            href={events.next.cta.href}
            className="inline-flex items-center gap-2 bg-cream text-ink px-6 py-3 rounded-full font-medium hover:bg-ochre transition self-start"
          >
            {events.next.cta.label} →
          </a>
        </div>
      </div>
    </section>
  );
}
