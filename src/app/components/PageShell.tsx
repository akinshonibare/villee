import Link from "next/link";
import { brand } from "@/content";
import { NavPills } from "./NavPills";
import { SiteFooter } from "./SiteFooter";

// Shared frame for subpages — same pill nav, grain, and footer as the
// landing page so every route reads as one site.
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="grain relative flex min-h-dvh flex-col overflow-hidden">
      <nav className="relative z-20 flex items-center justify-between px-5 pt-5 sm:px-8">
        <Link href="/" className="display text-2xl tracking-tight">
          {brand.wordmark}
          <span className="text-rust">.</span>
        </Link>
        <NavPills />
      </nav>
      <div className="relative z-20 flex-1 px-5 sm:px-8">{children}</div>
      <SiteFooter />
    </main>
  );
}
