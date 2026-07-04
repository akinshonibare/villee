"use client";

import { useState } from "react";
import { faq } from "@/content";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10 text-left">
      {faq.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="display text-xl transition group-hover:text-rust sm:text-2xl">
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink/30 text-lg transition-transform ${
                  isOpen ? "rotate-45 border-rust bg-rust text-cream" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen
                  ? "grid-rows-[1fr] pb-6 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
