import Link from "next/link";
import { brand, hero } from "@/content";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-cream/80 border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="display text-2xl tracking-tight">
          {brand.wordmark}
          <span className="text-rust">.</span>
        </Link>
        <div className="hidden sm:flex items-center gap-7 text-sm">
          <Link href="/about#perks" className="hover:text-rust transition">perks</Link>
          <Link href="/about#events" className="hover:text-rust transition">events</Link>
          <Link href="/about#cities" className="hover:text-rust transition">cities</Link>
          <Link href="/faq" className="hover:text-rust transition">faq</Link>
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
