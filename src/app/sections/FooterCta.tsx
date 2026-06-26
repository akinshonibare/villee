import { footerCta, IG_URL, CONTACT_EMAIL, brand } from "@/content";

export function FooterCta() {
  return (
    <section className="bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-rust/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-32 sm:py-40">
        <h2 className="display text-[22vw] sm:text-[18vw] lg:text-[16rem] leading-[0.85] mb-8">
          {footerCta.bigText}
        </h2>
        <p className="text-xl sm:text-2xl max-w-xl mb-10 opacity-80">
          {footerCta.sub}
        </p>
        <a
          href={footerCta.cta.href}
          className="inline-flex items-center gap-3 bg-cream text-ink px-8 py-5 rounded-full text-lg font-medium hover:bg-rust hover:text-cream transition"
        >
          {footerCta.cta.label}
          <span>→</span>
        </a>

        <div className="mt-32 pt-10 border-t border-cream/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-sm opacity-80">
          <div className="flex items-center gap-3">
            <span className="display text-2xl opacity-100">
              {brand.wordmark}
              <span className="text-rust">.</span>
            </span>
            <span className="opacity-60">— {brand.nickname}</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href={IG_URL} className="hover:text-ochre transition">
              instagram
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-ochre transition"
            >
              {CONTACT_EMAIL}
            </a>
            <span className="opacity-50">© villee 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
