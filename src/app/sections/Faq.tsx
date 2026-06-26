"use client";
import { useState } from "react";
import { faq } from "@/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream-soft border-y border-ink/10">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-24 sm:py-32">
        <h2 className="display text-5xl sm:text-7xl leading-[0.95] mb-14">
          {faq.title}
        </h2>
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-start justify-between gap-6 py-5 group"
                  aria-expanded={isOpen}
                >
                  <span className="display text-2xl sm:text-3xl group-hover:text-rust transition">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center text-xl transition-transform ${
                      isOpen ? "rotate-45 bg-rust text-cream border-rust" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-lg text-ink-soft leading-relaxed max-w-2xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
