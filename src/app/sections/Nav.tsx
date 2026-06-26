import { brand, hero, IG_URL } from "@/content";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-cream/80 border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="display text-2xl tracking-tight">
          {brand.wordmark}
          <span className="text-rust">.</span>
        </a>
        <div className="hidden sm:flex items-center gap-7 text-sm">
          <a href="#perks" className="hover:text-rust transition">perks</a>
          <a href="#events" className="hover:text-rust transition">events</a>
          <a href="#cities" className="hover:text-rust transition">cities</a>
          <a href="#faq" className="hover:text-rust transition">faq</a>
        </div>
        <a
          href={hero.primaryCta.href}
          className="bg-ink text-cream text-sm px-4 py-2 rounded-full hover:bg-rust transition"
        >
          join →
        </a>
      </div>
    </nav>
  );
}
