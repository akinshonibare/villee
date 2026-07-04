import Link from "next/link";
import { landing } from "@/content";

const PILL_CLASSES =
  "rounded-full border border-ink/20 bg-cream-soft/70 px-3.5 py-1.5 text-xs backdrop-blur-sm transition hover:border-rust hover:text-rust";

export function NavPills() {
  return (
    <div className="flex items-center gap-2">
      {landing.navLinks.map((link) =>
        link.href.startsWith("/") ? (
          <Link key={link.label} href={link.href} className={PILL_CLASSES}>
            {link.label}
          </Link>
        ) : (
          <a key={link.label} href={link.href} className={PILL_CLASSES}>
            {link.label}
          </a>
        ),
      )}
    </div>
  );
}
