import { marqueeWords } from "@/content";

export function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="bg-ink text-cream py-6 overflow-hidden border-y-2 border-ink">
      <div className="flex marquee-track gap-12 whitespace-nowrap will-change-transform">
        {items.map((word, i) => (
          <span
            key={i}
            className="display text-4xl sm:text-5xl flex items-center gap-12"
          >
            {word}
            <span className="text-ochre">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
