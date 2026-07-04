import { CONTACT_EMAIL, IG_URL } from "@/content";

export function SiteFooter() {
  return (
    <footer className="relative z-20 flex items-center justify-center gap-3 px-5 pb-6 text-xs text-ink-soft">
      <a href={IG_URL} className="transition hover:text-rust">
        instagram
      </a>
      <span aria-hidden>·</span>
      <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-rust">
        {CONTACT_EMAIL}
      </a>
    </footer>
  );
}
